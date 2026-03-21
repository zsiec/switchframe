#include "common.cuh"

// Fused NV12 → RGB float32 CHW with bilinear scale.
// One thread per output pixel (256x256 = 65536 threads).
// BT.709 limited-range: R = 1.164*(Y-16) + 1.793*(Cr-128)
//                        G = 1.164*(Y-16) - 0.213*(Cb-128) - 0.533*(Cr-128)
//                        B = 1.164*(Y-16) + 2.112*(Cb-128)
__global__ void nv12_to_rgb_chw_kernel(
    float* __restrict__ rgbOut,      // [3, outH, outW] CHW planar
    const uint8_t* __restrict__ nv12,
    int srcW, int srcH, int srcPitch,
    int outW, int outH)
{
    int ox = blockIdx.x * blockDim.x + threadIdx.x;
    int oy = blockIdx.y * blockDim.y + threadIdx.y;
    if (ox >= outW || oy >= outH) return;

    // Map output to source coords (bilinear)
    float sx = (float)ox * (float)(srcW - 1) / (float)(outW - 1);
    float sy = (float)oy * (float)(srcH - 1) / (float)(outH - 1);

    // Bilinear sample Y from Y plane
    int ix = (int)sx, iy = (int)sy;
    float fx = sx - ix, fy = sy - iy;
    int ix1 = min(ix + 1, srcW - 1);
    int iy1 = min(iy + 1, srcH - 1);

    float Y = (nv12[iy * srcPitch + ix] * (1.0f - fx) + nv12[iy * srcPitch + ix1] * fx) * (1.0f - fy)
            + (nv12[iy1 * srcPitch + ix] * (1.0f - fx) + nv12[iy1 * srcPitch + ix1] * fx) * fy;

    // Nearest-neighbor sample Cb,Cr from UV plane (half res, interleaved)
    int uvOffset = srcPitch * srcH;
    int cx = (int)(sx + 0.5f) / 2;
    int cy = (int)(sy + 0.5f) / 2;
    cx = min(cx, srcW / 2 - 1);
    cy = min(cy, srcH / 2 - 1);
    float Cb = (float)nv12[uvOffset + cy * srcPitch + cx * 2];
    float Cr = (float)nv12[uvOffset + cy * srcPitch + cx * 2 + 1];

    // BT.709 limited-range YCbCr → RGB
    float y_adj = 1.164f * (Y - 16.0f);
    float r = y_adj + 1.793f * (Cr - 128.0f);
    float g = y_adj - 0.213f * (Cb - 128.0f) - 0.533f * (Cr - 128.0f);
    float b = y_adj + 2.112f * (Cb - 128.0f);

    // Clamp to [0, 255] then normalize to [0, 1]
    r = fminf(fmaxf(r, 0.0f), 255.0f) / 255.0f;
    g = fminf(fmaxf(g, 0.0f), 255.0f) / 255.0f;
    b = fminf(fmaxf(b, 0.0f), 255.0f) / 255.0f;

    // Write CHW planar: R plane, then G plane, then B plane
    int pixIdx = oy * outW + ox;
    rgbOut[0 * outH * outW + pixIdx] = r;
    rgbOut[1 * outH * outW + pixIdx] = g;
    rgbOut[2 * outH * outW + pixIdx] = b;
}

extern "C" {
cudaError_t nv12_to_rgb_chw(
    float* rgbOut,
    const uint8_t* nv12,
    int srcW, int srcH, int srcPitch,
    int outW, int outH,
    cudaStream_t stream)
{
    dim3 block(16, 16);  // 256 threads, good for 256x256 output
    dim3 grid((outW + block.x - 1) / block.x, (outH + block.y - 1) / block.y);
    nv12_to_rgb_chw_kernel<<<grid, block, 0, stream>>>(
        rgbOut, nv12, srcW, srcH, srcPitch, outW, outH);
    return cudaGetLastError();
}
} // extern "C"
