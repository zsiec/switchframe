window.BENCHMARK_DATA = {
  "lastUpdate": 1772938836225,
  "repoUrl": "https://github.com/zsiec/switchframe",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "thomas.symborski@gmail.com",
            "name": "Thomas Symborski",
            "username": "zsiec"
          },
          "committer": {
            "email": "thomas.symborski@gmail.com",
            "name": "Thomas Symborski",
            "username": "zsiec"
          },
          "distinct": true,
          "id": "7d2317aaece8edddd86b6c1d89f56340777ae34f",
          "message": "Shorten benchmarks and add timeouts\n\nUpdate CI benchmark job to prevent long-running runs: set job-level timeout (timeout-minutes: 20) and reduce go test benchtime from 3s to 1s. Also add a go test timeout (-timeout=15m) to guard against hung or excessively long benchmark executions. Changes in .github/workflows/ci.yml aim to speed up CI and make benchmark runs more predictable.",
          "timestamp": "2026-03-07T21:40:27-05:00",
          "tree_id": "9f41b0b2c2518ac288c6bfdf90d88dc71eff1af3",
          "url": "https://github.com/zsiec/switchframe/commit/7d2317aaece8edddd86b6c1d89f56340777ae34f"
        },
        "date": 1772938174055,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBiquadAfterSilence",
            "value": 7134,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "164401 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - ns/op",
            "value": 7134,
            "unit": "ns/op",
            "extra": "164401 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "164401 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "164401 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear",
            "value": 58.81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20421002 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - ns/op",
            "value": 58.81,
            "unit": "ns/op",
            "extra": "20421002 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20421002 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20421002 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS",
            "value": 12.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "93617983 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - ns/op",
            "value": 12.71,
            "unit": "ns/op",
            "extra": "93617983 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "93617983 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "93617983 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples",
            "value": 2152,
            "unit": "ns/op\t3806.03 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "623169 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - ns/op",
            "value": 2152,
            "unit": "ns/op",
            "extra": "623169 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - MB/s",
            "value": 3806.03,
            "unit": "MB/s",
            "extra": "623169 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "623169 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "623169 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples",
            "value": 6259,
            "unit": "ns/op\t1308.91 MB/s\t    8192 B/op\t       1 allocs/op",
            "extra": "188876 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - ns/op",
            "value": 6259,
            "unit": "ns/op",
            "extra": "188876 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - MB/s",
            "value": 1308.91,
            "unit": "MB/s",
            "extra": "188876 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - B/op",
            "value": 8192,
            "unit": "B/op",
            "extra": "188876 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "188876 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput",
            "value": 91858,
            "unit": "ns/op\t      42 B/op\t       3 allocs/op",
            "extra": "13233 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - ns/op",
            "value": 91858,
            "unit": "ns/op",
            "extra": "13233 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - B/op",
            "value": 42,
            "unit": "B/op",
            "extra": "13233 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "13233 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB",
            "value": 9955,
            "unit": "ns/op\t5148.48 MB/s\t   57344 B/op\t       1 allocs/op",
            "extra": "157869 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - ns/op",
            "value": 9955,
            "unit": "ns/op",
            "extra": "157869 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - MB/s",
            "value": 5148.48,
            "unit": "MB/s",
            "extra": "157869 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - B/op",
            "value": 57344,
            "unit": "B/op",
            "extra": "157869 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "157869 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1",
            "value": 58708,
            "unit": "ns/op\t 873.00 MB/s\t   57512 B/op\t       4 allocs/op",
            "extra": "20448 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - ns/op",
            "value": 58708,
            "unit": "ns/op",
            "extra": "20448 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - MB/s",
            "value": 873,
            "unit": "MB/s",
            "extra": "20448 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - B/op",
            "value": 57512,
            "unit": "B/op",
            "extra": "20448 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "20448 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into",
            "value": 50796,
            "unit": "ns/op\t1008.97 MB/s\t     168 B/op\t       3 allocs/op",
            "extra": "23485 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - ns/op",
            "value": 50796,
            "unit": "ns/op",
            "extra": "23485 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - MB/s",
            "value": 1008.97,
            "unit": "MB/s",
            "extra": "23485 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - B/op",
            "value": 168,
            "unit": "B/op",
            "extra": "23485 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "23485 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs",
            "value": 130,
            "unit": "ns/op\t394352.86 MB/s\t     168 B/op\t       3 allocs/op",
            "extra": "8992965 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - ns/op",
            "value": 130,
            "unit": "ns/op",
            "extra": "8992965 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - MB/s",
            "value": 394352.86,
            "unit": "MB/s",
            "extra": "8992965 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - B/op",
            "value": 168,
            "unit": "B/op",
            "extra": "8992965 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "8992965 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame",
            "value": 426.1,
            "unit": "ns/op\t4815.31 MB/s\t    2304 B/op\t       1 allocs/op",
            "extra": "2872969 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - ns/op",
            "value": 426.1,
            "unit": "ns/op",
            "extra": "2872969 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - MB/s",
            "value": 4815.31,
            "unit": "MB/s",
            "extra": "2872969 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - B/op",
            "value": 2304,
            "unit": "B/op",
            "extra": "2872969 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "2872969 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources",
            "value": 16762,
            "unit": "ns/op\t    8066 B/op\t      53 allocs/op",
            "extra": "72442 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - ns/op",
            "value": 16762,
            "unit": "ns/op",
            "extra": "72442 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - B/op",
            "value": 8066,
            "unit": "B/op",
            "extra": "72442 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "72442 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources",
            "value": 71931,
            "unit": "ns/op\t  56.14 MB/s\t    5392 B/op\t     129 allocs/op",
            "extra": "16904 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - ns/op",
            "value": 71931,
            "unit": "ns/op",
            "extra": "16904 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - MB/s",
            "value": 56.14,
            "unit": "MB/s",
            "extra": "16904 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - B/op",
            "value": 5392,
            "unit": "B/op",
            "extra": "16904 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "16904 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources",
            "value": 9807,
            "unit": "ns/op\t    4833 B/op\t      29 allocs/op",
            "extra": "119473 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - ns/op",
            "value": 9807,
            "unit": "ns/op",
            "extra": "119473 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - B/op",
            "value": 4833,
            "unit": "B/op",
            "extra": "119473 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "119473 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish",
            "value": 16818,
            "unit": "ns/op\t    8066 B/op\t      53 allocs/op",
            "extra": "71170 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - ns/op",
            "value": 16818,
            "unit": "ns/op",
            "extra": "71170 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - B/op",
            "value": 8066,
            "unit": "B/op",
            "extra": "71170 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "71170 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish",
            "value": 21380,
            "unit": "ns/op\t    8067 B/op\t      53 allocs/op",
            "extra": "55729 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - ns/op",
            "value": 21380,
            "unit": "ns/op",
            "extra": "55729 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - B/op",
            "value": 8067,
            "unit": "B/op",
            "extra": "55729 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "55729 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird",
            "value": 5712200,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "210 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird - ns/op",
            "value": 5712200,
            "unit": "ns/op",
            "extra": "210 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "210 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "210 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p",
            "value": 22.1,
            "unit": "ns/op\t43436.88 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "54539965 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - ns/op",
            "value": 22.1,
            "unit": "ns/op",
            "extra": "54539965 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - MB/s",
            "value": 43436.88,
            "unit": "MB/s",
            "extra": "54539965 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "54539965 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "54539965 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p",
            "value": 2615,
            "unit": "ns/op\t1957.72 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "456822 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - ns/op",
            "value": 2615,
            "unit": "ns/op",
            "extra": "456822 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - MB/s",
            "value": 1957.72,
            "unit": "MB/s",
            "extra": "456822 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "456822 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "456822 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p",
            "value": 719.1,
            "unit": "ns/op\t7119.57 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1657460 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - ns/op",
            "value": 719.1,
            "unit": "ns/op",
            "extra": "1657460 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - MB/s",
            "value": 7119.57,
            "unit": "MB/s",
            "extra": "1657460 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1657460 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1657460 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p",
            "value": 3130643,
            "unit": "ns/op\t1766.28 MB/s\t 3117075 B/op\t       3 allocs/op",
            "extra": "386 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - ns/op",
            "value": 3130643,
            "unit": "ns/op",
            "extra": "386 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - MB/s",
            "value": 1766.28,
            "unit": "MB/s",
            "extra": "386 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - B/op",
            "value": 3117075,
            "unit": "B/op",
            "extra": "386 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "386 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p",
            "value": 2879831,
            "unit": "ns/op\t1920.11 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "416 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p - ns/op",
            "value": 2879831,
            "unit": "ns/op",
            "extra": "416 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p - MB/s",
            "value": 1920.11,
            "unit": "MB/s",
            "extra": "416 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "416 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "416 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p",
            "value": 1144620,
            "unit": "ns/op\t2717.41 MB/s\t 5529607 B/op\t       1 allocs/op",
            "extra": "1028 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - ns/op",
            "value": 1144620,
            "unit": "ns/op",
            "extra": "1028 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - MB/s",
            "value": 2717.41,
            "unit": "MB/s",
            "extra": "1028 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - B/op",
            "value": 5529607,
            "unit": "B/op",
            "extra": "1028 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1028 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p",
            "value": 843453,
            "unit": "ns/op\t3687.70 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1420 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - ns/op",
            "value": 843453,
            "unit": "ns/op",
            "extra": "1420 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - MB/s",
            "value": 3687.7,
            "unit": "MB/s",
            "extra": "1420 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1420 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1420 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p",
            "value": 4552841,
            "unit": "ns/op\t 683.18 MB/s\t 8646667 B/op\t       4 allocs/op",
            "extra": "266 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - ns/op",
            "value": 4552841,
            "unit": "ns/op",
            "extra": "266 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - MB/s",
            "value": 683.18,
            "unit": "MB/s",
            "extra": "266 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - B/op",
            "value": 8646667,
            "unit": "B/op",
            "extra": "266 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "266 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p",
            "value": 3722742,
            "unit": "ns/op\t 835.51 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "321 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - ns/op",
            "value": 3722742,
            "unit": "ns/op",
            "extra": "321 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - MB/s",
            "value": 835.51,
            "unit": "MB/s",
            "extra": "321 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "321 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "321 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath",
            "value": 62.14,
            "unit": "ns/op\t      24 B/op\t       1 allocs/op",
            "extra": "19385163 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - ns/op",
            "value": 62.14,
            "unit": "ns/op",
            "extra": "19385163 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - B/op",
            "value": 24,
            "unit": "B/op",
            "extra": "19385163 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "19385163 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath",
            "value": 3413,
            "unit": "ns/op\t    8401 B/op\t       3 allocs/op",
            "extra": "346400 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - ns/op",
            "value": 3413,
            "unit": "ns/op",
            "extra": "346400 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - B/op",
            "value": 8401,
            "unit": "B/op",
            "extra": "346400 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "346400 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush",
            "value": 2707,
            "unit": "ns/op\t     329 B/op\t       6 allocs/op",
            "extra": "441206 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - ns/op",
            "value": 2707,
            "unit": "ns/op",
            "extra": "441206 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - B/op",
            "value": 329,
            "unit": "B/op",
            "extra": "441206 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "441206 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame",
            "value": 1284,
            "unit": "ns/op\t   10883 B/op\t       1 allocs/op",
            "extra": "826146 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - ns/op",
            "value": 1284,
            "unit": "ns/op",
            "extra": "826146 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - B/op",
            "value": 10883,
            "unit": "B/op",
            "extra": "826146 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "826146 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip",
            "value": 214490,
            "unit": "ns/op\t 1707610 B/op\t     333 allocs/op",
            "extra": "5008 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - ns/op",
            "value": 214490,
            "unit": "ns/op",
            "extra": "5008 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - B/op",
            "value": 1707610,
            "unit": "B/op",
            "extra": "5008 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - allocs/op",
            "value": 333,
            "unit": "allocs/op",
            "extra": "5008 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo",
            "value": 857.5,
            "unit": "ns/op\t    6015 B/op\t       1 allocs/op",
            "extra": "1302202 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - ns/op",
            "value": 857.5,
            "unit": "ns/op",
            "extra": "1302202 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - B/op",
            "value": 6015,
            "unit": "B/op",
            "extra": "1302202 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1302202 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay",
            "value": 288.8,
            "unit": "ns/op\t     267 B/op\t       0 allocs/op",
            "extra": "3855086 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - ns/op",
            "value": 288.8,
            "unit": "ns/op",
            "extra": "3855086 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - B/op",
            "value": 267,
            "unit": "B/op",
            "extra": "3855086 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3855086 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick",
            "value": 1803,
            "unit": "ns/op\t    5066 B/op\t       0 allocs/op",
            "extra": "564068 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - ns/op",
            "value": 1803,
            "unit": "ns/op",
            "extra": "564068 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - B/op",
            "value": 5066,
            "unit": "B/op",
            "extra": "564068 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "564068 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest",
            "value": 29.08,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "40054720 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - ns/op",
            "value": 29.08,
            "unit": "ns/op",
            "extra": "40054720 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "40054720 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "40054720 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/active_source",
            "value": 426.7,
            "unit": "ns/op\t     554 B/op\t       3 allocs/op",
            "extra": "2680484 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/active_source - ns/op",
            "value": 426.7,
            "unit": "ns/op",
            "extra": "2680484 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/active_source - B/op",
            "value": 554,
            "unit": "B/op",
            "extra": "2680484 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/active_source - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2680484 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/delta_only",
            "value": 565.4,
            "unit": "ns/op\t     232 B/op\t       3 allocs/op",
            "extra": "2072767 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/delta_only - ns/op",
            "value": 565.4,
            "unit": "ns/op",
            "extra": "2072767 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/delta_only - B/op",
            "value": 232,
            "unit": "B/op",
            "extra": "2072767 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/delta_only - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2072767 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/skipped_source",
            "value": 297,
            "unit": "ns/op\t     225 B/op\t       3 allocs/op",
            "extra": "4100472 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/skipped_source - ns/op",
            "value": 297,
            "unit": "ns/op",
            "extra": "4100472 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/skipped_source - B/op",
            "value": 225,
            "unit": "B/op",
            "extra": "4100472 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/skipped_source - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4100472 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/no_filter_all_recorded",
            "value": 410.2,
            "unit": "ns/op\t     554 B/op\t       3 allocs/op",
            "extra": "2892386 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/no_filter_all_recorded - ns/op",
            "value": 410.2,
            "unit": "ns/op",
            "extra": "2892386 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/no_filter_all_recorded - B/op",
            "value": 554,
            "unit": "B/op",
            "extra": "2892386 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/no_filter_all_recorded - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2892386 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/trim_triggered",
            "value": 404.7,
            "unit": "ns/op\t     433 B/op\t       3 allocs/op",
            "extra": "2853786 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/trim_triggered - ns/op",
            "value": 404.7,
            "unit": "ns/op",
            "extra": "2853786 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/trim_triggered - B/op",
            "value": 433,
            "unit": "B/op",
            "extra": "2853786 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/trim_triggered - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2853786 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/realistic_1080p",
            "value": 4710,
            "unit": "ns/op\t    3433 B/op\t       3 allocs/op",
            "extra": "241833 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/realistic_1080p - ns/op",
            "value": 4710,
            "unit": "ns/op",
            "extra": "241833 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/realistic_1080p - B/op",
            "value": 3433,
            "unit": "B/op",
            "extra": "241833 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/realistic_1080p - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "241833 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/with_keyframe",
            "value": 81919,
            "unit": "ns/op\t  257822 B/op\t     152 allocs/op",
            "extra": "13950 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/with_keyframe - ns/op",
            "value": 81919,
            "unit": "ns/op",
            "extra": "13950 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/with_keyframe - B/op",
            "value": 257822,
            "unit": "B/op",
            "extra": "13950 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/with_keyframe - allocs/op",
            "value": 152,
            "unit": "allocs/op",
            "extra": "13950 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/no_keyframe",
            "value": 84785,
            "unit": "ns/op\t  257800 B/op\t     151 allocs/op",
            "extra": "14160 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/no_keyframe - ns/op",
            "value": 84785,
            "unit": "ns/op",
            "extra": "14160 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/no_keyframe - B/op",
            "value": 257800,
            "unit": "B/op",
            "extra": "14160 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/no_keyframe - allocs/op",
            "value": 151,
            "unit": "allocs/op",
            "extra": "14160 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode",
            "value": 14439,
            "unit": "ns/op\t   65777 B/op\t       5 allocs/op",
            "extra": "82729 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - ns/op",
            "value": 14439,
            "unit": "ns/op",
            "extra": "82729 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - B/op",
            "value": 65777,
            "unit": "B/op",
            "extra": "82729 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "82729 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p",
            "value": 68129,
            "unit": "ns/op\t20291.03 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "22299 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - ns/op",
            "value": 68129,
            "unit": "ns/op",
            "extra": "22299 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - MB/s",
            "value": 20291.03,
            "unit": "MB/s",
            "extra": "22299 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "22299 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "22299 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p",
            "value": 124651,
            "unit": "ns/op\t24952.80 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "9375 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - ns/op",
            "value": 124651,
            "unit": "ns/op",
            "extra": "9375 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - MB/s",
            "value": 24952.8,
            "unit": "MB/s",
            "extra": "9375 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9375 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9375 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p",
            "value": 22810873,
            "unit": "ns/op\t 136.36 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - ns/op",
            "value": 22810873,
            "unit": "ns/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - MB/s",
            "value": 136.36,
            "unit": "MB/s",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p",
            "value": 22837091,
            "unit": "ns/op\t 136.20 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - ns/op",
            "value": 22837091,
            "unit": "ns/op",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - MB/s",
            "value": 136.2,
            "unit": "MB/s",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p",
            "value": 266169,
            "unit": "ns/op\t11685.79 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "4260 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - ns/op",
            "value": 266169,
            "unit": "ns/op",
            "extra": "4260 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - MB/s",
            "value": 11685.79,
            "unit": "MB/s",
            "extra": "4260 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4260 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4260 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p",
            "value": 1218693,
            "unit": "ns/op\t2552.24 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "981 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - ns/op",
            "value": 1218693,
            "unit": "ns/op",
            "extra": "981 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - MB/s",
            "value": 2552.24,
            "unit": "MB/s",
            "extra": "981 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "981 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "981 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p",
            "value": 8680168,
            "unit": "ns/op\t 358.33 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "136 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - ns/op",
            "value": 8680168,
            "unit": "ns/op",
            "extra": "136 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - MB/s",
            "value": 358.33,
            "unit": "MB/s",
            "extra": "136 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "136 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "136 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p",
            "value": 52370,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23103 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - ns/op",
            "value": 52370,
            "unit": "ns/op",
            "extra": "23103 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "23103 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "23103 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p",
            "value": 997870,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1180 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - ns/op",
            "value": 997870,
            "unit": "ns/op",
            "extra": "1180 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1180 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1180 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p",
            "value": 8602612,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p - ns/op",
            "value": 8602612,
            "unit": "ns/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K",
            "value": 777318,
            "unit": "ns/op\t16005.80 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1540 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - ns/op",
            "value": 777318,
            "unit": "ns/op",
            "extra": "1540 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - MB/s",
            "value": 16005.8,
            "unit": "MB/s",
            "extra": "1540 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1540 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1540 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K",
            "value": 91358352,
            "unit": "ns/op\t 136.18 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K - ns/op",
            "value": 91358352,
            "unit": "ns/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K - MB/s",
            "value": 136.18,
            "unit": "MB/s",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K",
            "value": 92248752,
            "unit": "ns/op\t 134.87 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - ns/op",
            "value": 92248752,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - MB/s",
            "value": 134.87,
            "unit": "MB/s",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K",
            "value": 1391663,
            "unit": "ns/op\t8940.09 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "876 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - ns/op",
            "value": 1391663,
            "unit": "ns/op",
            "extra": "876 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - MB/s",
            "value": 8940.09,
            "unit": "MB/s",
            "extra": "876 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "876 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "876 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p",
            "value": 157482,
            "unit": "ns/op\t19750.85 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "7333 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - ns/op",
            "value": 157482,
            "unit": "ns/op",
            "extra": "7333 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - MB/s",
            "value": 19750.85,
            "unit": "MB/s",
            "extra": "7333 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7333 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7333 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p",
            "value": 15227059,
            "unit": "ns/op\t 136.18 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "78 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - ns/op",
            "value": 15227059,
            "unit": "ns/op",
            "extra": "78 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - MB/s",
            "value": 136.18,
            "unit": "MB/s",
            "extra": "78 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "78 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "78 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p",
            "value": 141835,
            "unit": "ns/op\t14619.79 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "7546 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - ns/op",
            "value": 141835,
            "unit": "ns/op",
            "extra": "7546 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - MB/s",
            "value": 14619.79,
            "unit": "MB/s",
            "extra": "7546 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7546 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7546 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D",
            "value": 53025,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22797 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - ns/op",
            "value": 53025,
            "unit": "ns/op",
            "extra": "22797 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "22797 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "22797 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D",
            "value": 1010843,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1210 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D - ns/op",
            "value": 1010843,
            "unit": "ns/op",
            "extra": "1210 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1210 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1210 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel",
            "value": 8422182,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel - ns/op",
            "value": 8422182,
            "unit": "ns/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920",
            "value": 6263,
            "unit": "ns/op\t 306.54 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "191048 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - ns/op",
            "value": 6263,
            "unit": "ns/op",
            "extra": "191048 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - MB/s",
            "value": 306.54,
            "unit": "MB/s",
            "extra": "191048 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "191048 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "191048 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p",
            "value": 10238746,
            "unit": "ns/op\t 303.79 MB/s\t   32768 B/op\t       3 allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p - ns/op",
            "value": 10238746,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p - MB/s",
            "value": 303.79,
            "unit": "MB/s",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p - B/op",
            "value": 32768,
            "unit": "B/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_1080pTo720p",
            "value": 4576349,
            "unit": "ns/op\t 302.07 MB/s\t   20992 B/op\t       3 allocs/op",
            "extra": "262 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_1080pTo720p - ns/op",
            "value": 4576349,
            "unit": "ns/op",
            "extra": "262 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_1080pTo720p - MB/s",
            "value": 302.07,
            "unit": "MB/s",
            "extra": "262 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_1080pTo720p - B/op",
            "value": 20992,
            "unit": "B/op",
            "extra": "262 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_1080pTo720p - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "262 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720",
            "value": 937491462,
            "unit": "ns/op\t   1.47 MB/s\t16596992 B/op\t       3 allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - ns/op",
            "value": 937491462,
            "unit": "ns/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - MB/s",
            "value": 1.47,
            "unit": "MB/s",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - B/op",
            "value": 16596992,
            "unit": "B/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080",
            "value": 970505385,
            "unit": "ns/op\t   3.20 MB/s\t16596992 B/op\t       3 allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - ns/op",
            "value": 970505385,
            "unit": "ns/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - MB/s",
            "value": 3.2,
            "unit": "MB/s",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - B/op",
            "value": 16596992,
            "unit": "B/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "thomas.symborski@gmail.com",
            "name": "Thomas Symborski",
            "username": "zsiec"
          },
          "committer": {
            "email": "thomas.symborski@gmail.com",
            "name": "Thomas Symborski",
            "username": "zsiec"
          },
          "distinct": true,
          "id": "19c8995fe9c4d51a599b66971a5bfd013c987036",
          "message": "go: ctx cancel and atomic.Pointer usage\n\nMake output adapters cancelable and replace untyped atomic.Value usage with typed atomic.Pointer. OutputManager now holds a context+cancel and uses m.ctx when starting adapters/recorders; Close() signals cancellation. SRT caller/listener state and lastError now use atomic.Pointer[T] with a ptrTo helper in srt_common.go; tests updated to store/load pointer values. Also add testing.Short() skips to integration/stress tests to allow quick -short runs and add a README note linking published benchmark results.",
          "timestamp": "2026-03-07T21:57:59-05:00",
          "tree_id": "7ef7c477ae469f421c157b665b65a0f87dd77448",
          "url": "https://github.com/zsiec/switchframe/commit/19c8995fe9c4d51a599b66971a5bfd013c987036"
        },
        "date": 1772938835822,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBiquadAfterSilence",
            "value": 6814,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "166754 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - ns/op",
            "value": 6814,
            "unit": "ns/op",
            "extra": "166754 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "166754 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "166754 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear",
            "value": 58.82,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19371238 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - ns/op",
            "value": 58.82,
            "unit": "ns/op",
            "extra": "19371238 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19371238 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19371238 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS",
            "value": 12.73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "94306326 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - ns/op",
            "value": 12.73,
            "unit": "ns/op",
            "extra": "94306326 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "94306326 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "94306326 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples",
            "value": 1927,
            "unit": "ns/op\t4251.53 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "620839 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - ns/op",
            "value": 1927,
            "unit": "ns/op",
            "extra": "620839 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - MB/s",
            "value": 4251.53,
            "unit": "MB/s",
            "extra": "620839 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "620839 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "620839 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples",
            "value": 6220,
            "unit": "ns/op\t1317.10 MB/s\t    8192 B/op\t       1 allocs/op",
            "extra": "188113 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - ns/op",
            "value": 6220,
            "unit": "ns/op",
            "extra": "188113 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - MB/s",
            "value": 1317.1,
            "unit": "MB/s",
            "extra": "188113 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - B/op",
            "value": 8192,
            "unit": "B/op",
            "extra": "188113 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "188113 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput",
            "value": 91130,
            "unit": "ns/op\t      42 B/op\t       3 allocs/op",
            "extra": "13206 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - ns/op",
            "value": 91130,
            "unit": "ns/op",
            "extra": "13206 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - B/op",
            "value": 42,
            "unit": "B/op",
            "extra": "13206 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "13206 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB",
            "value": 7059,
            "unit": "ns/op\t7260.23 MB/s\t   57344 B/op\t       1 allocs/op",
            "extra": "154333 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - ns/op",
            "value": 7059,
            "unit": "ns/op",
            "extra": "154333 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - MB/s",
            "value": 7260.23,
            "unit": "MB/s",
            "extra": "154333 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - B/op",
            "value": 57344,
            "unit": "B/op",
            "extra": "154333 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "154333 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1",
            "value": 57195,
            "unit": "ns/op\t 896.09 MB/s\t   57512 B/op\t       4 allocs/op",
            "extra": "20859 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - ns/op",
            "value": 57195,
            "unit": "ns/op",
            "extra": "20859 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - MB/s",
            "value": 896.09,
            "unit": "MB/s",
            "extra": "20859 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - B/op",
            "value": 57512,
            "unit": "B/op",
            "extra": "20859 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "20859 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into",
            "value": 50487,
            "unit": "ns/op\t1015.15 MB/s\t     168 B/op\t       3 allocs/op",
            "extra": "23743 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - ns/op",
            "value": 50487,
            "unit": "ns/op",
            "extra": "23743 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - MB/s",
            "value": 1015.15,
            "unit": "MB/s",
            "extra": "23743 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - B/op",
            "value": 168,
            "unit": "B/op",
            "extra": "23743 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "23743 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs",
            "value": 127.2,
            "unit": "ns/op\t402795.61 MB/s\t     168 B/op\t       3 allocs/op",
            "extra": "9297646 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - ns/op",
            "value": 127.2,
            "unit": "ns/op",
            "extra": "9297646 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - MB/s",
            "value": 402795.61,
            "unit": "MB/s",
            "extra": "9297646 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - B/op",
            "value": 168,
            "unit": "B/op",
            "extra": "9297646 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "9297646 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame",
            "value": 355.1,
            "unit": "ns/op\t5778.44 MB/s\t    2304 B/op\t       1 allocs/op",
            "extra": "3333279 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - ns/op",
            "value": 355.1,
            "unit": "ns/op",
            "extra": "3333279 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - MB/s",
            "value": 5778.44,
            "unit": "MB/s",
            "extra": "3333279 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - B/op",
            "value": 2304,
            "unit": "B/op",
            "extra": "3333279 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3333279 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources",
            "value": 16654,
            "unit": "ns/op\t    8065 B/op\t      53 allocs/op",
            "extra": "71908 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - ns/op",
            "value": 16654,
            "unit": "ns/op",
            "extra": "71908 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - B/op",
            "value": 8065,
            "unit": "B/op",
            "extra": "71908 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "71908 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources",
            "value": 70952,
            "unit": "ns/op\t  56.91 MB/s\t    5392 B/op\t     129 allocs/op",
            "extra": "16976 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - ns/op",
            "value": 70952,
            "unit": "ns/op",
            "extra": "16976 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - MB/s",
            "value": 56.91,
            "unit": "MB/s",
            "extra": "16976 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - B/op",
            "value": 5392,
            "unit": "B/op",
            "extra": "16976 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "16976 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources",
            "value": 9763,
            "unit": "ns/op\t    4833 B/op\t      29 allocs/op",
            "extra": "120325 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - ns/op",
            "value": 9763,
            "unit": "ns/op",
            "extra": "120325 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - B/op",
            "value": 4833,
            "unit": "B/op",
            "extra": "120325 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "120325 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish",
            "value": 16739,
            "unit": "ns/op\t    8066 B/op\t      53 allocs/op",
            "extra": "70396 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - ns/op",
            "value": 16739,
            "unit": "ns/op",
            "extra": "70396 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - B/op",
            "value": 8066,
            "unit": "B/op",
            "extra": "70396 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "70396 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish",
            "value": 20927,
            "unit": "ns/op\t    8068 B/op\t      53 allocs/op",
            "extra": "58479 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - ns/op",
            "value": 20927,
            "unit": "ns/op",
            "extra": "58479 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - B/op",
            "value": 8068,
            "unit": "B/op",
            "extra": "58479 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "58479 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird",
            "value": 5716199,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "210 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird - ns/op",
            "value": 5716199,
            "unit": "ns/op",
            "extra": "210 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "210 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "210 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p",
            "value": 20.99,
            "unit": "ns/op\t45738.77 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "57289093 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - ns/op",
            "value": 20.99,
            "unit": "ns/op",
            "extra": "57289093 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - MB/s",
            "value": 45738.77,
            "unit": "MB/s",
            "extra": "57289093 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57289093 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57289093 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p",
            "value": 2626,
            "unit": "ns/op\t1949.61 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "454380 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - ns/op",
            "value": 2626,
            "unit": "ns/op",
            "extra": "454380 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - MB/s",
            "value": 1949.61,
            "unit": "MB/s",
            "extra": "454380 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "454380 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "454380 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p",
            "value": 782.8,
            "unit": "ns/op\t6540.43 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1536147 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - ns/op",
            "value": 782.8,
            "unit": "ns/op",
            "extra": "1536147 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - MB/s",
            "value": 6540.43,
            "unit": "MB/s",
            "extra": "1536147 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1536147 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1536147 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p",
            "value": 3128543,
            "unit": "ns/op\t1767.47 MB/s\t 3117076 B/op\t       3 allocs/op",
            "extra": "384 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - ns/op",
            "value": 3128543,
            "unit": "ns/op",
            "extra": "384 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - MB/s",
            "value": 1767.47,
            "unit": "MB/s",
            "extra": "384 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - B/op",
            "value": 3117076,
            "unit": "B/op",
            "extra": "384 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "384 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p",
            "value": 2887747,
            "unit": "ns/op\t1914.85 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "415 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p - ns/op",
            "value": 2887747,
            "unit": "ns/op",
            "extra": "415 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p - MB/s",
            "value": 1914.85,
            "unit": "MB/s",
            "extra": "415 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "415 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "415 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p",
            "value": 1171013,
            "unit": "ns/op\t2656.16 MB/s\t 5529607 B/op\t       1 allocs/op",
            "extra": "1029 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - ns/op",
            "value": 1171013,
            "unit": "ns/op",
            "extra": "1029 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - MB/s",
            "value": 2656.16,
            "unit": "MB/s",
            "extra": "1029 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - B/op",
            "value": 5529607,
            "unit": "B/op",
            "extra": "1029 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1029 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p",
            "value": 888943,
            "unit": "ns/op\t3498.99 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1345 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - ns/op",
            "value": 888943,
            "unit": "ns/op",
            "extra": "1345 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - MB/s",
            "value": 3498.99,
            "unit": "MB/s",
            "extra": "1345 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1345 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1345 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p",
            "value": 4445664,
            "unit": "ns/op\t 699.65 MB/s\t 8646664 B/op\t       4 allocs/op",
            "extra": "261 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - ns/op",
            "value": 4445664,
            "unit": "ns/op",
            "extra": "261 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - MB/s",
            "value": 699.65,
            "unit": "MB/s",
            "extra": "261 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - B/op",
            "value": 8646664,
            "unit": "B/op",
            "extra": "261 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "261 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p",
            "value": 3776419,
            "unit": "ns/op\t 823.64 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "316 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - ns/op",
            "value": 3776419,
            "unit": "ns/op",
            "extra": "316 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - MB/s",
            "value": 823.64,
            "unit": "MB/s",
            "extra": "316 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "316 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "316 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath",
            "value": 73.57,
            "unit": "ns/op\t      24 B/op\t       1 allocs/op",
            "extra": "16556058 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - ns/op",
            "value": 73.57,
            "unit": "ns/op",
            "extra": "16556058 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - B/op",
            "value": 24,
            "unit": "B/op",
            "extra": "16556058 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "16556058 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath",
            "value": 3432,
            "unit": "ns/op\t    8426 B/op\t       3 allocs/op",
            "extra": "299304 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - ns/op",
            "value": 3432,
            "unit": "ns/op",
            "extra": "299304 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - B/op",
            "value": 8426,
            "unit": "B/op",
            "extra": "299304 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "299304 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush",
            "value": 2675,
            "unit": "ns/op\t     329 B/op\t       6 allocs/op",
            "extra": "452092 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - ns/op",
            "value": 2675,
            "unit": "ns/op",
            "extra": "452092 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - B/op",
            "value": 329,
            "unit": "B/op",
            "extra": "452092 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "452092 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame",
            "value": 1212,
            "unit": "ns/op\t   10813 B/op\t       1 allocs/op",
            "extra": "930789 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - ns/op",
            "value": 1212,
            "unit": "ns/op",
            "extra": "930789 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - B/op",
            "value": 10813,
            "unit": "B/op",
            "extra": "930789 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "930789 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip",
            "value": 212057,
            "unit": "ns/op\t 1707611 B/op\t     333 allocs/op",
            "extra": "4896 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - ns/op",
            "value": 212057,
            "unit": "ns/op",
            "extra": "4896 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - B/op",
            "value": 1707611,
            "unit": "B/op",
            "extra": "4896 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - allocs/op",
            "value": 333,
            "unit": "allocs/op",
            "extra": "4896 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo",
            "value": 879,
            "unit": "ns/op\t    6018 B/op\t       1 allocs/op",
            "extra": "1296908 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - ns/op",
            "value": 879,
            "unit": "ns/op",
            "extra": "1296908 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - B/op",
            "value": 6018,
            "unit": "B/op",
            "extra": "1296908 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1296908 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay",
            "value": 221.3,
            "unit": "ns/op\t     257 B/op\t       0 allocs/op",
            "extra": "5010243 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - ns/op",
            "value": 221.3,
            "unit": "ns/op",
            "extra": "5010243 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - B/op",
            "value": 257,
            "unit": "B/op",
            "extra": "5010243 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5010243 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick",
            "value": 1344,
            "unit": "ns/op\t    4175 B/op\t       0 allocs/op",
            "extra": "855938 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - ns/op",
            "value": 1344,
            "unit": "ns/op",
            "extra": "855938 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - B/op",
            "value": 4175,
            "unit": "B/op",
            "extra": "855938 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "855938 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest",
            "value": 29.05,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "40561420 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - ns/op",
            "value": 29.05,
            "unit": "ns/op",
            "extra": "40561420 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "40561420 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "40561420 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/active_source",
            "value": 419.1,
            "unit": "ns/op\t     554 B/op\t       3 allocs/op",
            "extra": "2795574 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/active_source - ns/op",
            "value": 419.1,
            "unit": "ns/op",
            "extra": "2795574 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/active_source - B/op",
            "value": 554,
            "unit": "B/op",
            "extra": "2795574 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/active_source - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2795574 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/delta_only",
            "value": 572.8,
            "unit": "ns/op\t     232 B/op\t       3 allocs/op",
            "extra": "2105408 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/delta_only - ns/op",
            "value": 572.8,
            "unit": "ns/op",
            "extra": "2105408 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/delta_only - B/op",
            "value": 232,
            "unit": "B/op",
            "extra": "2105408 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/delta_only - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2105408 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/skipped_source",
            "value": 277.5,
            "unit": "ns/op\t     225 B/op\t       3 allocs/op",
            "extra": "3789319 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/skipped_source - ns/op",
            "value": 277.5,
            "unit": "ns/op",
            "extra": "3789319 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/skipped_source - B/op",
            "value": 225,
            "unit": "B/op",
            "extra": "3789319 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/skipped_source - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "3789319 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/no_filter_all_recorded",
            "value": 404.3,
            "unit": "ns/op\t     554 B/op\t       3 allocs/op",
            "extra": "2905833 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/no_filter_all_recorded - ns/op",
            "value": 404.3,
            "unit": "ns/op",
            "extra": "2905833 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/no_filter_all_recorded - B/op",
            "value": 554,
            "unit": "B/op",
            "extra": "2905833 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/no_filter_all_recorded - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2905833 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/trim_triggered",
            "value": 399,
            "unit": "ns/op\t     434 B/op\t       3 allocs/op",
            "extra": "2960643 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/trim_triggered - ns/op",
            "value": 399,
            "unit": "ns/op",
            "extra": "2960643 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/trim_triggered - B/op",
            "value": 434,
            "unit": "B/op",
            "extra": "2960643 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/trim_triggered - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2960643 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/realistic_1080p",
            "value": 4598,
            "unit": "ns/op\t    3440 B/op\t       3 allocs/op",
            "extra": "241909 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/realistic_1080p - ns/op",
            "value": 4598,
            "unit": "ns/op",
            "extra": "241909 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/realistic_1080p - B/op",
            "value": 3440,
            "unit": "B/op",
            "extra": "241909 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/realistic_1080p - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "241909 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/with_keyframe",
            "value": 71009,
            "unit": "ns/op\t  257869 B/op\t     151 allocs/op",
            "extra": "17520 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/with_keyframe - ns/op",
            "value": 71009,
            "unit": "ns/op",
            "extra": "17520 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/with_keyframe - B/op",
            "value": 257869,
            "unit": "B/op",
            "extra": "17520 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/with_keyframe - allocs/op",
            "value": 151,
            "unit": "allocs/op",
            "extra": "17520 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/no_keyframe",
            "value": 70185,
            "unit": "ns/op\t  257872 B/op\t     151 allocs/op",
            "extra": "17139 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/no_keyframe - ns/op",
            "value": 70185,
            "unit": "ns/op",
            "extra": "17139 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/no_keyframe - B/op",
            "value": 257872,
            "unit": "B/op",
            "extra": "17139 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/no_keyframe - allocs/op",
            "value": 151,
            "unit": "allocs/op",
            "extra": "17139 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode",
            "value": 12398,
            "unit": "ns/op\t   65777 B/op\t       5 allocs/op",
            "extra": "120667 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - ns/op",
            "value": 12398,
            "unit": "ns/op",
            "extra": "120667 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - B/op",
            "value": 65777,
            "unit": "B/op",
            "extra": "120667 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "120667 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p",
            "value": 73616,
            "unit": "ns/op\t18778.58 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "17198 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - ns/op",
            "value": 73616,
            "unit": "ns/op",
            "extra": "17198 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - MB/s",
            "value": 18778.58,
            "unit": "MB/s",
            "extra": "17198 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17198 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17198 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p",
            "value": 156193,
            "unit": "ns/op\t19913.82 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "7521 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - ns/op",
            "value": 156193,
            "unit": "ns/op",
            "extra": "7521 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - MB/s",
            "value": 19913.82,
            "unit": "MB/s",
            "extra": "7521 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7521 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7521 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p",
            "value": 22827241,
            "unit": "ns/op\t 136.26 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - ns/op",
            "value": 22827241,
            "unit": "ns/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - MB/s",
            "value": 136.26,
            "unit": "MB/s",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p",
            "value": 22816866,
            "unit": "ns/op\t 136.32 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - ns/op",
            "value": 22816866,
            "unit": "ns/op",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - MB/s",
            "value": 136.32,
            "unit": "MB/s",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p",
            "value": 263684,
            "unit": "ns/op\t11795.95 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "4098 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - ns/op",
            "value": 263684,
            "unit": "ns/op",
            "extra": "4098 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - MB/s",
            "value": 11795.95,
            "unit": "MB/s",
            "extra": "4098 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4098 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4098 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p",
            "value": 1213106,
            "unit": "ns/op\t2564.00 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "981 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - ns/op",
            "value": 1213106,
            "unit": "ns/op",
            "extra": "981 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - MB/s",
            "value": 2564,
            "unit": "MB/s",
            "extra": "981 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "981 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "981 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p",
            "value": 8764469,
            "unit": "ns/op\t 354.89 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "136 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - ns/op",
            "value": 8764469,
            "unit": "ns/op",
            "extra": "136 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - MB/s",
            "value": 354.89,
            "unit": "MB/s",
            "extra": "136 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "136 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "136 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p",
            "value": 53991,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22425 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - ns/op",
            "value": 53991,
            "unit": "ns/op",
            "extra": "22425 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "22425 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "22425 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p",
            "value": 988502,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1213 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - ns/op",
            "value": 988502,
            "unit": "ns/op",
            "extra": "1213 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1213 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1213 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p",
            "value": 8416589,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p - ns/op",
            "value": 8416589,
            "unit": "ns/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K",
            "value": 753686,
            "unit": "ns/op\t16507.67 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1596 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - ns/op",
            "value": 753686,
            "unit": "ns/op",
            "extra": "1596 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - MB/s",
            "value": 16507.67,
            "unit": "MB/s",
            "extra": "1596 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1596 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1596 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K",
            "value": 91265920,
            "unit": "ns/op\t 136.32 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K - ns/op",
            "value": 91265920,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K - MB/s",
            "value": 136.32,
            "unit": "MB/s",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K",
            "value": 91343292,
            "unit": "ns/op\t 136.21 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - ns/op",
            "value": 91343292,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - MB/s",
            "value": 136.21,
            "unit": "MB/s",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K",
            "value": 1333885,
            "unit": "ns/op\t9327.34 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "874 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - ns/op",
            "value": 1333885,
            "unit": "ns/op",
            "extra": "874 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - MB/s",
            "value": 9327.34,
            "unit": "MB/s",
            "extra": "874 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "874 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "874 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p",
            "value": 160533,
            "unit": "ns/op\t19375.46 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "6837 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - ns/op",
            "value": 160533,
            "unit": "ns/op",
            "extra": "6837 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - MB/s",
            "value": 19375.46,
            "unit": "MB/s",
            "extra": "6837 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6837 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6837 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p",
            "value": 15207635,
            "unit": "ns/op\t 136.35 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "78 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - ns/op",
            "value": 15207635,
            "unit": "ns/op",
            "extra": "78 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - MB/s",
            "value": 136.35,
            "unit": "MB/s",
            "extra": "78 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "78 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "78 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p",
            "value": 148099,
            "unit": "ns/op\t14001.40 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "8223 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - ns/op",
            "value": 148099,
            "unit": "ns/op",
            "extra": "8223 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - MB/s",
            "value": 14001.4,
            "unit": "MB/s",
            "extra": "8223 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8223 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8223 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D",
            "value": 52539,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22768 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - ns/op",
            "value": 52539,
            "unit": "ns/op",
            "extra": "22768 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "22768 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "22768 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D",
            "value": 987713,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1195 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D - ns/op",
            "value": 987713,
            "unit": "ns/op",
            "extra": "1195 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1195 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1195 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel",
            "value": 8460350,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel - ns/op",
            "value": 8460350,
            "unit": "ns/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920",
            "value": 6269,
            "unit": "ns/op\t 306.28 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "191335 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - ns/op",
            "value": 6269,
            "unit": "ns/op",
            "extra": "191335 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - MB/s",
            "value": 306.28,
            "unit": "MB/s",
            "extra": "191335 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "191335 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "191335 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p",
            "value": 10241342,
            "unit": "ns/op\t 303.71 MB/s\t   32768 B/op\t       3 allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p - ns/op",
            "value": 10241342,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p - MB/s",
            "value": 303.71,
            "unit": "MB/s",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p - B/op",
            "value": 32768,
            "unit": "B/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_1080pTo720p",
            "value": 4580536,
            "unit": "ns/op\t 301.80 MB/s\t   20992 B/op\t       3 allocs/op",
            "extra": "261 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_1080pTo720p - ns/op",
            "value": 4580536,
            "unit": "ns/op",
            "extra": "261 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_1080pTo720p - MB/s",
            "value": 301.8,
            "unit": "MB/s",
            "extra": "261 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_1080pTo720p - B/op",
            "value": 20992,
            "unit": "B/op",
            "extra": "261 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_1080pTo720p - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "261 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720",
            "value": 938059846,
            "unit": "ns/op\t   1.47 MB/s\t16596992 B/op\t       3 allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - ns/op",
            "value": 938059846,
            "unit": "ns/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - MB/s",
            "value": 1.47,
            "unit": "MB/s",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - B/op",
            "value": 16596992,
            "unit": "B/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080",
            "value": 969791358,
            "unit": "ns/op\t   3.21 MB/s\t16596992 B/op\t       3 allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - ns/op",
            "value": 969791358,
            "unit": "ns/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - MB/s",
            "value": 3.21,
            "unit": "MB/s",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - B/op",
            "value": 16596992,
            "unit": "B/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2 times\n4 procs"
          }
        ]
      }
    ]
  }
}