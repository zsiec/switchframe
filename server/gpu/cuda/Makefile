NVCC := nvcc
CXX := g++
ARCH := -arch=sm_89  # Ada Lovelace (L4)
CFLAGS := -O3 -Xcompiler -fPIC -std=c++17
CXXFLAGS := -O2 -fPIC -std=c++17
SOURCES := convert.cu blend.cu key.cu scale.cu composite.cu dsk.cu stmap.cu fruc.cu v210.cu preprocess.cu
OBJECTS := $(SOURCES:.cu=.o)
LIBRARY := libswitchframe_cuda.a

# TensorRT wrapper (optional — only built if TensorRT headers are found)
TRT_WRAPPER := tensorrt_wrapper.cpp
TRT_OBJECT := tensorrt_wrapper.o
TRT_LIBRARY := libswitchframe_tensorrt.a
TRT_CXXFLAGS := $(CXXFLAGS) -I/usr/local/cuda/include -I/usr/include/x86_64-linux-gnu

.PHONY: all tensorrt clean

all: $(LIBRARY)

tensorrt: $(TRT_LIBRARY)

$(LIBRARY): $(OBJECTS)
	$(NVCC) $(ARCH) -lib -o $@ $^

$(TRT_LIBRARY): $(TRT_OBJECT)
	ar rcs $@ $^

$(TRT_OBJECT): $(TRT_WRAPPER)
	$(CXX) $(TRT_CXXFLAGS) -c -o $@ $<

%.o: %.cu common.cuh
	$(NVCC) $(ARCH) $(CFLAGS) -c -o $@ $<

clean:
	rm -f $(OBJECTS) $(LIBRARY) $(TRT_OBJECT) $(TRT_LIBRARY)
