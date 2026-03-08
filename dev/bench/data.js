window.BENCHMARK_DATA = {
  "lastUpdate": 1772961442650,
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
      },
      {
        "commit": {
          "author": {
            "email": "thomas.symborski@gmail.com",
            "name": "Thomas Symborski",
            "username": "zsiec"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "58315a2c8212074c1e2e3ff0f6ce7232e92d0678",
          "message": "ci: adds new steps (#2)\n\n* ci: adds new steps\n\n* Update ci.yml\n\n* cr: fix deadlock in pipeline tests\n\n* Create home directory for switchframe user\n\nUpdate Dockerfile to create a home directory for the 'switchframe' system user by replacing `useradd --no-create-home` with `useradd --create-home`. Ensures /home/switchframe exists at runtime for user-specific files or configuration.",
          "timestamp": "2026-03-07T22:54:44-05:00",
          "tree_id": "7a7134c5b7044649aa1559797367f1c8dd358ca4",
          "url": "https://github.com/zsiec/switchframe/commit/58315a2c8212074c1e2e3ff0f6ce7232e92d0678"
        },
        "date": 1772942248565,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBiquadAfterSilence",
            "value": 6690,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "174774 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - ns/op",
            "value": 6690,
            "unit": "ns/op",
            "extra": "174774 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "174774 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "174774 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear",
            "value": 58.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20388030 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - ns/op",
            "value": 58.86,
            "unit": "ns/op",
            "extra": "20388030 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20388030 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20388030 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS",
            "value": 12.76,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "94358917 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - ns/op",
            "value": 12.76,
            "unit": "ns/op",
            "extra": "94358917 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "94358917 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "94358917 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples",
            "value": 1929,
            "unit": "ns/op\t4247.16 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "622627 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - ns/op",
            "value": 1929,
            "unit": "ns/op",
            "extra": "622627 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - MB/s",
            "value": 4247.16,
            "unit": "MB/s",
            "extra": "622627 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "622627 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "622627 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples",
            "value": 6199,
            "unit": "ns/op\t1321.48 MB/s\t    8192 B/op\t       1 allocs/op",
            "extra": "191194 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - ns/op",
            "value": 6199,
            "unit": "ns/op",
            "extra": "191194 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - MB/s",
            "value": 1321.48,
            "unit": "MB/s",
            "extra": "191194 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - B/op",
            "value": 8192,
            "unit": "B/op",
            "extra": "191194 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "191194 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput",
            "value": 91165,
            "unit": "ns/op\t      42 B/op\t       3 allocs/op",
            "extra": "13400 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - ns/op",
            "value": 91165,
            "unit": "ns/op",
            "extra": "13400 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - B/op",
            "value": 42,
            "unit": "B/op",
            "extra": "13400 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "13400 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB",
            "value": 6841,
            "unit": "ns/op\t7492.18 MB/s\t   57344 B/op\t       1 allocs/op",
            "extra": "164424 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - ns/op",
            "value": 6841,
            "unit": "ns/op",
            "extra": "164424 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - MB/s",
            "value": 7492.18,
            "unit": "MB/s",
            "extra": "164424 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - B/op",
            "value": 57344,
            "unit": "B/op",
            "extra": "164424 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "164424 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1",
            "value": 57420,
            "unit": "ns/op\t 892.58 MB/s\t   57512 B/op\t       4 allocs/op",
            "extra": "20712 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - ns/op",
            "value": 57420,
            "unit": "ns/op",
            "extra": "20712 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - MB/s",
            "value": 892.58,
            "unit": "MB/s",
            "extra": "20712 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - B/op",
            "value": 57512,
            "unit": "B/op",
            "extra": "20712 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "20712 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into",
            "value": 50468,
            "unit": "ns/op\t1015.53 MB/s\t     168 B/op\t       3 allocs/op",
            "extra": "23238 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - ns/op",
            "value": 50468,
            "unit": "ns/op",
            "extra": "23238 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - MB/s",
            "value": 1015.53,
            "unit": "MB/s",
            "extra": "23238 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - B/op",
            "value": 168,
            "unit": "B/op",
            "extra": "23238 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "23238 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs",
            "value": 125.3,
            "unit": "ns/op\t409089.81 MB/s\t     168 B/op\t       3 allocs/op",
            "extra": "9619178 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - ns/op",
            "value": 125.3,
            "unit": "ns/op",
            "extra": "9619178 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - MB/s",
            "value": 409089.81,
            "unit": "MB/s",
            "extra": "9619178 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - B/op",
            "value": 168,
            "unit": "B/op",
            "extra": "9619178 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "9619178 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame",
            "value": 346.4,
            "unit": "ns/op\t5924.13 MB/s\t    2304 B/op\t       1 allocs/op",
            "extra": "3442146 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - ns/op",
            "value": 346.4,
            "unit": "ns/op",
            "extra": "3442146 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - MB/s",
            "value": 5924.13,
            "unit": "MB/s",
            "extra": "3442146 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - B/op",
            "value": 2304,
            "unit": "B/op",
            "extra": "3442146 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3442146 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources",
            "value": 17067,
            "unit": "ns/op\t    8065 B/op\t      53 allocs/op",
            "extra": "72709 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - ns/op",
            "value": 17067,
            "unit": "ns/op",
            "extra": "72709 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - B/op",
            "value": 8065,
            "unit": "B/op",
            "extra": "72709 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "72709 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources",
            "value": 70303,
            "unit": "ns/op\t  57.44 MB/s\t    5392 B/op\t     129 allocs/op",
            "extra": "17132 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - ns/op",
            "value": 70303,
            "unit": "ns/op",
            "extra": "17132 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - MB/s",
            "value": 57.44,
            "unit": "MB/s",
            "extra": "17132 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - B/op",
            "value": 5392,
            "unit": "B/op",
            "extra": "17132 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "17132 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources",
            "value": 9709,
            "unit": "ns/op\t    4833 B/op\t      29 allocs/op",
            "extra": "122299 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - ns/op",
            "value": 9709,
            "unit": "ns/op",
            "extra": "122299 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - B/op",
            "value": 4833,
            "unit": "B/op",
            "extra": "122299 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "122299 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish",
            "value": 16819,
            "unit": "ns/op\t    8065 B/op\t      53 allocs/op",
            "extra": "71996 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - ns/op",
            "value": 16819,
            "unit": "ns/op",
            "extra": "71996 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - B/op",
            "value": 8065,
            "unit": "B/op",
            "extra": "71996 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "71996 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish",
            "value": 20320,
            "unit": "ns/op\t    8067 B/op\t      53 allocs/op",
            "extra": "56869 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - ns/op",
            "value": 20320,
            "unit": "ns/op",
            "extra": "56869 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - B/op",
            "value": 8067,
            "unit": "B/op",
            "extra": "56869 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "56869 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird",
            "value": 5706878,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "210 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird - ns/op",
            "value": 5706878,
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
            "value": 20.92,
            "unit": "ns/op\t45889.92 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "55905972 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - ns/op",
            "value": 20.92,
            "unit": "ns/op",
            "extra": "55905972 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - MB/s",
            "value": 45889.92,
            "unit": "MB/s",
            "extra": "55905972 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "55905972 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "55905972 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p",
            "value": 2632,
            "unit": "ns/op\t1945.60 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "456823 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - ns/op",
            "value": 2632,
            "unit": "ns/op",
            "extra": "456823 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - MB/s",
            "value": 1945.6,
            "unit": "MB/s",
            "extra": "456823 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "456823 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "456823 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p",
            "value": 781.8,
            "unit": "ns/op\t6548.67 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1524343 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - ns/op",
            "value": 781.8,
            "unit": "ns/op",
            "extra": "1524343 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - MB/s",
            "value": 6548.67,
            "unit": "MB/s",
            "extra": "1524343 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1524343 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1524343 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p",
            "value": 3065675,
            "unit": "ns/op\t1803.71 MB/s\t 3117060 B/op\t       3 allocs/op",
            "extra": "391 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - ns/op",
            "value": 3065675,
            "unit": "ns/op",
            "extra": "391 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - MB/s",
            "value": 1803.71,
            "unit": "MB/s",
            "extra": "391 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - B/op",
            "value": 3117060,
            "unit": "B/op",
            "extra": "391 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "391 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p",
            "value": 2887171,
            "unit": "ns/op\t1915.23 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "415 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p - ns/op",
            "value": 2887171,
            "unit": "ns/op",
            "extra": "415 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p - MB/s",
            "value": 1915.23,
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
            "value": 1160726,
            "unit": "ns/op\t2679.70 MB/s\t 5529607 B/op\t       1 allocs/op",
            "extra": "1011 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - ns/op",
            "value": 1160726,
            "unit": "ns/op",
            "extra": "1011 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - MB/s",
            "value": 2679.7,
            "unit": "MB/s",
            "extra": "1011 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - B/op",
            "value": 5529607,
            "unit": "B/op",
            "extra": "1011 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1011 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p",
            "value": 890508,
            "unit": "ns/op\t3492.84 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1350 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - ns/op",
            "value": 890508,
            "unit": "ns/op",
            "extra": "1350 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - MB/s",
            "value": 3492.84,
            "unit": "MB/s",
            "extra": "1350 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1350 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1350 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p",
            "value": 4567672,
            "unit": "ns/op\t 680.96 MB/s\t 8646672 B/op\t       4 allocs/op",
            "extra": "264 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - ns/op",
            "value": 4567672,
            "unit": "ns/op",
            "extra": "264 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - MB/s",
            "value": 680.96,
            "unit": "MB/s",
            "extra": "264 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - B/op",
            "value": 8646672,
            "unit": "B/op",
            "extra": "264 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "264 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p",
            "value": 3776287,
            "unit": "ns/op\t 823.67 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "316 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - ns/op",
            "value": 3776287,
            "unit": "ns/op",
            "extra": "316 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - MB/s",
            "value": 823.67,
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
            "value": 71.15,
            "unit": "ns/op\t      24 B/op\t       1 allocs/op",
            "extra": "16615826 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - ns/op",
            "value": 71.15,
            "unit": "ns/op",
            "extra": "16615826 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - B/op",
            "value": 24,
            "unit": "B/op",
            "extra": "16615826 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "16615826 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath",
            "value": 3280,
            "unit": "ns/op\t    8435 B/op\t       3 allocs/op",
            "extra": "358503 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - ns/op",
            "value": 3280,
            "unit": "ns/op",
            "extra": "358503 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - B/op",
            "value": 8435,
            "unit": "B/op",
            "extra": "358503 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "358503 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush",
            "value": 2668,
            "unit": "ns/op\t     329 B/op\t       6 allocs/op",
            "extra": "447975 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - ns/op",
            "value": 2668,
            "unit": "ns/op",
            "extra": "447975 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - B/op",
            "value": 329,
            "unit": "B/op",
            "extra": "447975 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "447975 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame",
            "value": 1175,
            "unit": "ns/op\t   10809 B/op\t       1 allocs/op",
            "extra": "936697 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - ns/op",
            "value": 1175,
            "unit": "ns/op",
            "extra": "936697 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - B/op",
            "value": 10809,
            "unit": "B/op",
            "extra": "936697 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "936697 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip",
            "value": 222768,
            "unit": "ns/op\t 1707611 B/op\t     333 allocs/op",
            "extra": "5284 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - ns/op",
            "value": 222768,
            "unit": "ns/op",
            "extra": "5284 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - B/op",
            "value": 1707611,
            "unit": "B/op",
            "extra": "5284 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - allocs/op",
            "value": 333,
            "unit": "allocs/op",
            "extra": "5284 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo",
            "value": 847.7,
            "unit": "ns/op\t    5983 B/op\t       1 allocs/op",
            "extra": "1372467 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - ns/op",
            "value": 847.7,
            "unit": "ns/op",
            "extra": "1372467 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - B/op",
            "value": 5983,
            "unit": "B/op",
            "extra": "1372467 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1372467 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay",
            "value": 221.1,
            "unit": "ns/op\t     278 B/op\t       0 allocs/op",
            "extra": "7249710 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - ns/op",
            "value": 221.1,
            "unit": "ns/op",
            "extra": "7249710 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - B/op",
            "value": 278,
            "unit": "B/op",
            "extra": "7249710 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7249710 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick",
            "value": 1717,
            "unit": "ns/op\t    5002 B/op\t       0 allocs/op",
            "extra": "893318 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - ns/op",
            "value": 1717,
            "unit": "ns/op",
            "extra": "893318 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - B/op",
            "value": 5002,
            "unit": "B/op",
            "extra": "893318 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "893318 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest",
            "value": 29.05,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "40943622 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - ns/op",
            "value": 29.05,
            "unit": "ns/op",
            "extra": "40943622 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "40943622 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "40943622 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/active_source",
            "value": 436.9,
            "unit": "ns/op\t     554 B/op\t       3 allocs/op",
            "extra": "2785702 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/active_source - ns/op",
            "value": 436.9,
            "unit": "ns/op",
            "extra": "2785702 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/active_source - B/op",
            "value": 554,
            "unit": "B/op",
            "extra": "2785702 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/active_source - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2785702 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/delta_only",
            "value": 545.9,
            "unit": "ns/op\t     231 B/op\t       3 allocs/op",
            "extra": "2180698 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/delta_only - ns/op",
            "value": 545.9,
            "unit": "ns/op",
            "extra": "2180698 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/delta_only - B/op",
            "value": 231,
            "unit": "B/op",
            "extra": "2180698 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/delta_only - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2180698 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/skipped_source",
            "value": 275.5,
            "unit": "ns/op\t     225 B/op\t       3 allocs/op",
            "extra": "4359602 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/skipped_source - ns/op",
            "value": 275.5,
            "unit": "ns/op",
            "extra": "4359602 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/skipped_source - B/op",
            "value": 225,
            "unit": "B/op",
            "extra": "4359602 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/skipped_source - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4359602 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/no_filter_all_recorded",
            "value": 401,
            "unit": "ns/op\t     554 B/op\t       3 allocs/op",
            "extra": "2993880 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/no_filter_all_recorded - ns/op",
            "value": 401,
            "unit": "ns/op",
            "extra": "2993880 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/no_filter_all_recorded - B/op",
            "value": 554,
            "unit": "B/op",
            "extra": "2993880 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/no_filter_all_recorded - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2993880 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/trim_triggered",
            "value": 397.7,
            "unit": "ns/op\t     434 B/op\t       3 allocs/op",
            "extra": "3033775 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/trim_triggered - ns/op",
            "value": 397.7,
            "unit": "ns/op",
            "extra": "3033775 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/trim_triggered - B/op",
            "value": 434,
            "unit": "B/op",
            "extra": "3033775 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/trim_triggered - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "3033775 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/realistic_1080p",
            "value": 4530,
            "unit": "ns/op\t    3431 B/op\t       3 allocs/op",
            "extra": "251388 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/realistic_1080p - ns/op",
            "value": 4530,
            "unit": "ns/op",
            "extra": "251388 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/realistic_1080p - B/op",
            "value": 3431,
            "unit": "B/op",
            "extra": "251388 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/realistic_1080p - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "251388 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/with_keyframe",
            "value": 69508,
            "unit": "ns/op\t  257863 B/op\t     151 allocs/op",
            "extra": "17554 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/with_keyframe - ns/op",
            "value": 69508,
            "unit": "ns/op",
            "extra": "17554 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/with_keyframe - B/op",
            "value": 257863,
            "unit": "B/op",
            "extra": "17554 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/with_keyframe - allocs/op",
            "value": 151,
            "unit": "allocs/op",
            "extra": "17554 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/no_keyframe",
            "value": 70130,
            "unit": "ns/op\t  257875 B/op\t     151 allocs/op",
            "extra": "17110 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/no_keyframe - ns/op",
            "value": 70130,
            "unit": "ns/op",
            "extra": "17110 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/no_keyframe - B/op",
            "value": 257875,
            "unit": "B/op",
            "extra": "17110 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/no_keyframe - allocs/op",
            "value": 151,
            "unit": "allocs/op",
            "extra": "17110 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode",
            "value": 10013,
            "unit": "ns/op\t   65777 B/op\t       5 allocs/op",
            "extra": "124756 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - ns/op",
            "value": 10013,
            "unit": "ns/op",
            "extra": "124756 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - B/op",
            "value": 65777,
            "unit": "B/op",
            "extra": "124756 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "124756 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p",
            "value": 70369,
            "unit": "ns/op\t19645.09 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "17134 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - ns/op",
            "value": 70369,
            "unit": "ns/op",
            "extra": "17134 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - MB/s",
            "value": 19645.09,
            "unit": "MB/s",
            "extra": "17134 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17134 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17134 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p",
            "value": 123532,
            "unit": "ns/op\t25178.96 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "9242 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - ns/op",
            "value": 123532,
            "unit": "ns/op",
            "extra": "9242 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - MB/s",
            "value": 25178.96,
            "unit": "MB/s",
            "extra": "9242 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9242 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9242 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p",
            "value": 22773047,
            "unit": "ns/op\t 136.58 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - ns/op",
            "value": 22773047,
            "unit": "ns/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - MB/s",
            "value": 136.58,
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
            "value": 22826652,
            "unit": "ns/op\t 136.26 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - ns/op",
            "value": 22826652,
            "unit": "ns/op",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - MB/s",
            "value": 136.26,
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
            "value": 264136,
            "unit": "ns/op\t11775.74 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "4436 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - ns/op",
            "value": 264136,
            "unit": "ns/op",
            "extra": "4436 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - MB/s",
            "value": 11775.74,
            "unit": "MB/s",
            "extra": "4436 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4436 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4436 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p",
            "value": 1202062,
            "unit": "ns/op\t2587.55 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "962 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - ns/op",
            "value": 1202062,
            "unit": "ns/op",
            "extra": "962 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - MB/s",
            "value": 2587.55,
            "unit": "MB/s",
            "extra": "962 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "962 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "962 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p",
            "value": 8670832,
            "unit": "ns/op\t 358.72 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "138 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - ns/op",
            "value": 8670832,
            "unit": "ns/op",
            "extra": "138 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - MB/s",
            "value": 358.72,
            "unit": "MB/s",
            "extra": "138 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "138 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "138 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p",
            "value": 47812,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22800 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - ns/op",
            "value": 47812,
            "unit": "ns/op",
            "extra": "22800 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "22800 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "22800 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p",
            "value": 988383,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1215 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - ns/op",
            "value": 988383,
            "unit": "ns/op",
            "extra": "1215 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1215 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1215 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p",
            "value": 8441257,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p - ns/op",
            "value": 8441257,
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
            "value": 737611,
            "unit": "ns/op\t16867.44 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1759 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - ns/op",
            "value": 737611,
            "unit": "ns/op",
            "extra": "1759 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - MB/s",
            "value": 16867.44,
            "unit": "MB/s",
            "extra": "1759 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1759 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1759 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K",
            "value": 91283432,
            "unit": "ns/op\t 136.30 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K - ns/op",
            "value": 91283432,
            "unit": "ns/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K - MB/s",
            "value": 136.3,
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
            "value": 91280815,
            "unit": "ns/op\t 136.30 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - ns/op",
            "value": 91280815,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - MB/s",
            "value": 136.3,
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
            "value": 1369805,
            "unit": "ns/op\t9082.75 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "884 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - ns/op",
            "value": 1369805,
            "unit": "ns/op",
            "extra": "884 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - MB/s",
            "value": 9082.75,
            "unit": "MB/s",
            "extra": "884 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "884 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "884 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p",
            "value": 122976,
            "unit": "ns/op\t25292.67 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "8398 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - ns/op",
            "value": 122976,
            "unit": "ns/op",
            "extra": "8398 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - MB/s",
            "value": 25292.67,
            "unit": "MB/s",
            "extra": "8398 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8398 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8398 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p",
            "value": 15184233,
            "unit": "ns/op\t 136.56 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "78 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - ns/op",
            "value": 15184233,
            "unit": "ns/op",
            "extra": "78 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - MB/s",
            "value": 136.56,
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
            "value": 141809,
            "unit": "ns/op\t14622.47 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "8353 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - ns/op",
            "value": 141809,
            "unit": "ns/op",
            "extra": "8353 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - MB/s",
            "value": 14622.47,
            "unit": "MB/s",
            "extra": "8353 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8353 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8353 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D",
            "value": 48413,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23161 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - ns/op",
            "value": 48413,
            "unit": "ns/op",
            "extra": "23161 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "23161 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "23161 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D",
            "value": 987956,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1210 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D - ns/op",
            "value": 987956,
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
            "value": 8416906,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "141 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel - ns/op",
            "value": 8416906,
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
            "value": 6267,
            "unit": "ns/op\t 306.38 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "191355 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - ns/op",
            "value": 6267,
            "unit": "ns/op",
            "extra": "191355 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - MB/s",
            "value": 306.38,
            "unit": "MB/s",
            "extra": "191355 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "191355 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "191355 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p",
            "value": 10229754,
            "unit": "ns/op\t 304.05 MB/s\t   32768 B/op\t       3 allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p - ns/op",
            "value": 10229754,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p - MB/s",
            "value": 304.05,
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
            "value": 4569345,
            "unit": "ns/op\t 302.54 MB/s\t   20992 B/op\t       3 allocs/op",
            "extra": "261 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_1080pTo720p - ns/op",
            "value": 4569345,
            "unit": "ns/op",
            "extra": "261 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_1080pTo720p - MB/s",
            "value": 302.54,
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
            "value": 937928632,
            "unit": "ns/op\t   1.47 MB/s\t16596992 B/op\t       3 allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - ns/op",
            "value": 937928632,
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
            "value": 969262756,
            "unit": "ns/op\t   3.21 MB/s\t16596992 B/op\t       3 allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - ns/op",
            "value": 969262756,
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
          "id": "21795a65c574577c34c5609e8abab4dc2a775c65",
          "message": "feat: SIMD assembly kernels for audio, graphics, and transition hot paths\n\nAdd AVX2/SSE2 (amd64) and NEON (arm64) assembly kernels with generic\nscalar fallbacks for six hot-path operations:\n\nAudio (audio/vec sub-package, separated from cgo):\n- AddFloat32: mixer accumulation loop (4.2x faster)\n- ScaleFloat32: master gain multiply (2.2x faster)\n- MulAddFloat32: crossfade equal-power blend (2.0x faster)\n\nTransition:\n- downsampleAlpha2x2: stinger alpha map downsampling (7.7x faster)\n\nGraphics:\n- alphaBlendRGBARowY: DSK overlay Y-plane blend, converted from\n  float64 to integer fixed-point BT.709 (1.9x faster)\n- chromaKeyMaskChroma: chroma key at chroma resolution with integer\n  squared-distance thresholding (eliminates 2.6MB/call allocation)\n- lumaKeyMaskLUT: 256-byte LUT replaces per-pixel float branching\n  (6.7x faster)\n\nAlso includes Lanczos-3 scaler kernel refactor: extract platform-\nspecific kernel files from scaler_lanczos.go, fix arm64 dual\ndefinition build error (Go + assembly for lanczosHorizRow).\n\nAll kernels cross-compile clean on amd64, arm64, and 386 (generic).",
          "timestamp": "2026-03-07T23:56:23-05:00",
          "tree_id": "f581e5e9a3e538bc27723346a3b297fc1b96264a",
          "url": "https://github.com/zsiec/switchframe/commit/21795a65c574577c34c5609e8abab4dc2a775c65"
        },
        "date": 1772945961629,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBiquadAfterSilence",
            "value": 6789,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "150577 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - ns/op",
            "value": 6789,
            "unit": "ns/op",
            "extra": "150577 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "150577 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "150577 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear",
            "value": 58.82,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20415298 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - ns/op",
            "value": 58.82,
            "unit": "ns/op",
            "extra": "20415298 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20415298 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20415298 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS",
            "value": 12.75,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "94257828 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - ns/op",
            "value": 12.75,
            "unit": "ns/op",
            "extra": "94257828 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "94257828 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "94257828 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples",
            "value": 1968,
            "unit": "ns/op\t4162.34 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "621057 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - ns/op",
            "value": 1968,
            "unit": "ns/op",
            "extra": "621057 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - MB/s",
            "value": 4162.34,
            "unit": "MB/s",
            "extra": "621057 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "621057 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "621057 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples",
            "value": 6569,
            "unit": "ns/op\t1246.98 MB/s\t    8246 B/op\t       3 allocs/op",
            "extra": "186559 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - ns/op",
            "value": 6569,
            "unit": "ns/op",
            "extra": "186559 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - MB/s",
            "value": 1246.98,
            "unit": "MB/s",
            "extra": "186559 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - B/op",
            "value": 8246,
            "unit": "B/op",
            "extra": "186559 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "186559 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048",
            "value": 168.2,
            "unit": "ns/op\t48713.72 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "7142768 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - ns/op",
            "value": 168.2,
            "unit": "ns/op",
            "extra": "7142768 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - MB/s",
            "value": 48713.72,
            "unit": "MB/s",
            "extra": "7142768 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7142768 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7142768 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048",
            "value": 127.1,
            "unit": "ns/op\t64457.59 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "9400344 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - ns/op",
            "value": 127.1,
            "unit": "ns/op",
            "extra": "9400344 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - MB/s",
            "value": 64457.59,
            "unit": "MB/s",
            "extra": "9400344 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9400344 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9400344 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048",
            "value": 434.5,
            "unit": "ns/op\t18855.36 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2750926 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - ns/op",
            "value": 434.5,
            "unit": "ns/op",
            "extra": "2750926 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - MB/s",
            "value": 18855.36,
            "unit": "MB/s",
            "extra": "2750926 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2750926 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2750926 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput",
            "value": 94955,
            "unit": "ns/op\t      42 B/op\t       3 allocs/op",
            "extra": "13328 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - ns/op",
            "value": 94955,
            "unit": "ns/op",
            "extra": "13328 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - B/op",
            "value": 42,
            "unit": "B/op",
            "extra": "13328 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "13328 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB",
            "value": 7148,
            "unit": "ns/op\t7170.01 MB/s\t   57344 B/op\t       1 allocs/op",
            "extra": "156682 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - ns/op",
            "value": 7148,
            "unit": "ns/op",
            "extra": "156682 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - MB/s",
            "value": 7170.01,
            "unit": "MB/s",
            "extra": "156682 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - B/op",
            "value": 57344,
            "unit": "B/op",
            "extra": "156682 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "156682 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1",
            "value": 57490,
            "unit": "ns/op\t 891.49 MB/s\t   57512 B/op\t       4 allocs/op",
            "extra": "20949 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - ns/op",
            "value": 57490,
            "unit": "ns/op",
            "extra": "20949 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - MB/s",
            "value": 891.49,
            "unit": "MB/s",
            "extra": "20949 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - B/op",
            "value": 57512,
            "unit": "B/op",
            "extra": "20949 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "20949 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into",
            "value": 51254,
            "unit": "ns/op\t 999.96 MB/s\t     168 B/op\t       3 allocs/op",
            "extra": "23812 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - ns/op",
            "value": 51254,
            "unit": "ns/op",
            "extra": "23812 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - MB/s",
            "value": 999.96,
            "unit": "MB/s",
            "extra": "23812 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - B/op",
            "value": 168,
            "unit": "B/op",
            "extra": "23812 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "23812 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs",
            "value": 125.3,
            "unit": "ns/op\t408999.46 MB/s\t     168 B/op\t       3 allocs/op",
            "extra": "9446816 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - ns/op",
            "value": 125.3,
            "unit": "ns/op",
            "extra": "9446816 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - MB/s",
            "value": 408999.46,
            "unit": "MB/s",
            "extra": "9446816 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - B/op",
            "value": 168,
            "unit": "B/op",
            "extra": "9446816 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "9446816 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame",
            "value": 355.4,
            "unit": "ns/op\t5774.34 MB/s\t    2304 B/op\t       1 allocs/op",
            "extra": "3533016 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - ns/op",
            "value": 355.4,
            "unit": "ns/op",
            "extra": "3533016 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - MB/s",
            "value": 5774.34,
            "unit": "MB/s",
            "extra": "3533016 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - B/op",
            "value": 2304,
            "unit": "B/op",
            "extra": "3533016 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3533016 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources",
            "value": 16565,
            "unit": "ns/op\t    8065 B/op\t      53 allocs/op",
            "extra": "72632 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - ns/op",
            "value": 16565,
            "unit": "ns/op",
            "extra": "72632 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - B/op",
            "value": 8065,
            "unit": "B/op",
            "extra": "72632 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "72632 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources",
            "value": 71126,
            "unit": "ns/op\t  56.77 MB/s\t    5392 B/op\t     129 allocs/op",
            "extra": "16453 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - ns/op",
            "value": 71126,
            "unit": "ns/op",
            "extra": "16453 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - MB/s",
            "value": 56.77,
            "unit": "MB/s",
            "extra": "16453 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - B/op",
            "value": 5392,
            "unit": "B/op",
            "extra": "16453 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "16453 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources",
            "value": 9660,
            "unit": "ns/op\t    4833 B/op\t      29 allocs/op",
            "extra": "120628 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - ns/op",
            "value": 9660,
            "unit": "ns/op",
            "extra": "120628 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - B/op",
            "value": 4833,
            "unit": "B/op",
            "extra": "120628 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "120628 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish",
            "value": 16629,
            "unit": "ns/op\t    8066 B/op\t      53 allocs/op",
            "extra": "71649 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - ns/op",
            "value": 16629,
            "unit": "ns/op",
            "extra": "71649 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - B/op",
            "value": 8066,
            "unit": "B/op",
            "extra": "71649 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "71649 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish",
            "value": 20710,
            "unit": "ns/op\t    8067 B/op\t      53 allocs/op",
            "extra": "58116 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - ns/op",
            "value": 20710,
            "unit": "ns/op",
            "extra": "58116 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - B/op",
            "value": 8067,
            "unit": "B/op",
            "extra": "58116 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "58116 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque",
            "value": 4087,
            "unit": "ns/op\t 469.75 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "288842 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - ns/op",
            "value": 4087,
            "unit": "ns/op",
            "extra": "288842 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - MB/s",
            "value": 469.75,
            "unit": "MB/s",
            "extra": "288842 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "288842 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "288842 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse",
            "value": 2156,
            "unit": "ns/op\t 890.48 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "553530 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - ns/op",
            "value": 2156,
            "unit": "ns/op",
            "extra": "553530 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - MB/s",
            "value": 890.48,
            "unit": "MB/s",
            "extra": "553530 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "553530 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "553530 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full",
            "value": 3589522,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full - ns/op",
            "value": 3589522,
            "unit": "ns/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird",
            "value": 3601978,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird - ns/op",
            "value": 3601978,
            "unit": "ns/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p",
            "value": 639072,
            "unit": "ns/op\t 811.18 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1873 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - ns/op",
            "value": 639072,
            "unit": "ns/op",
            "extra": "1873 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - MB/s",
            "value": 811.18,
            "unit": "MB/s",
            "extra": "1873 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1873 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1873 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p",
            "value": 4042677,
            "unit": "ns/op\t 512.93 MB/s\t 2605083 B/op\t       2 allocs/op",
            "extra": "302 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - ns/op",
            "value": 4042677,
            "unit": "ns/op",
            "extra": "302 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - MB/s",
            "value": 512.93,
            "unit": "MB/s",
            "extra": "302 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - B/op",
            "value": 2605083,
            "unit": "B/op",
            "extra": "302 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "302 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p",
            "value": 3243953,
            "unit": "ns/op\t 639.22 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "367 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - ns/op",
            "value": 3243953,
            "unit": "ns/op",
            "extra": "367 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - MB/s",
            "value": 639.22,
            "unit": "MB/s",
            "extra": "367 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "367 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "367 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p",
            "value": 811515,
            "unit": "ns/op\t2555.22 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1476 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - ns/op",
            "value": 811515,
            "unit": "ns/op",
            "extra": "1476 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - MB/s",
            "value": 2555.22,
            "unit": "MB/s",
            "extra": "1476 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1476 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1476 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p",
            "value": 2437433,
            "unit": "ns/op\t 850.73 MB/s\t 2080777 B/op\t       1 allocs/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - ns/op",
            "value": 2437433,
            "unit": "ns/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - MB/s",
            "value": 850.73,
            "unit": "MB/s",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - B/op",
            "value": 2080777,
            "unit": "B/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p",
            "value": 20.93,
            "unit": "ns/op\t45868.52 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "57280980 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - ns/op",
            "value": 20.93,
            "unit": "ns/op",
            "extra": "57280980 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - MB/s",
            "value": 45868.52,
            "unit": "MB/s",
            "extra": "57280980 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57280980 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57280980 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p",
            "value": 2626,
            "unit": "ns/op\t1950.05 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "455758 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - ns/op",
            "value": 2626,
            "unit": "ns/op",
            "extra": "455758 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - MB/s",
            "value": 1950.05,
            "unit": "MB/s",
            "extra": "455758 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "455758 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "455758 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p",
            "value": 781.8,
            "unit": "ns/op\t6549.14 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1535630 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - ns/op",
            "value": 781.8,
            "unit": "ns/op",
            "extra": "1535630 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - MB/s",
            "value": 6549.14,
            "unit": "MB/s",
            "extra": "1535630 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1535630 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1535630 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p",
            "value": 3139819,
            "unit": "ns/op\t1761.12 MB/s\t 3117060 B/op\t       3 allocs/op",
            "extra": "384 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - ns/op",
            "value": 3139819,
            "unit": "ns/op",
            "extra": "384 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - MB/s",
            "value": 1761.12,
            "unit": "MB/s",
            "extra": "384 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - B/op",
            "value": 3117060,
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
            "value": 2886039,
            "unit": "ns/op\t1915.98 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "415 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p - ns/op",
            "value": 2886039,
            "unit": "ns/op",
            "extra": "415 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p - MB/s",
            "value": 1915.98,
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
            "value": 1132173,
            "unit": "ns/op\t2747.28 MB/s\t 5529605 B/op\t       1 allocs/op",
            "extra": "1041 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - ns/op",
            "value": 1132173,
            "unit": "ns/op",
            "extra": "1041 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - MB/s",
            "value": 2747.28,
            "unit": "MB/s",
            "extra": "1041 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - B/op",
            "value": 5529605,
            "unit": "B/op",
            "extra": "1041 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1041 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p",
            "value": 888731,
            "unit": "ns/op\t3499.82 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1334 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - ns/op",
            "value": 888731,
            "unit": "ns/op",
            "extra": "1334 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - MB/s",
            "value": 3499.82,
            "unit": "MB/s",
            "extra": "1334 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1334 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1334 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p",
            "value": 4649582,
            "unit": "ns/op\t 668.96 MB/s\t 8646669 B/op\t       4 allocs/op",
            "extra": "262 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - ns/op",
            "value": 4649582,
            "unit": "ns/op",
            "extra": "262 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - MB/s",
            "value": 668.96,
            "unit": "MB/s",
            "extra": "262 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - B/op",
            "value": 8646669,
            "unit": "B/op",
            "extra": "262 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "262 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p",
            "value": 3781778,
            "unit": "ns/op\t 822.47 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "316 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - ns/op",
            "value": 3781778,
            "unit": "ns/op",
            "extra": "316 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - MB/s",
            "value": 822.47,
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
            "value": 73.87,
            "unit": "ns/op\t      24 B/op\t       1 allocs/op",
            "extra": "16398279 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - ns/op",
            "value": 73.87,
            "unit": "ns/op",
            "extra": "16398279 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - B/op",
            "value": 24,
            "unit": "B/op",
            "extra": "16398279 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "16398279 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath",
            "value": 3466,
            "unit": "ns/op\t    8432 B/op\t       3 allocs/op",
            "extra": "289784 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - ns/op",
            "value": 3466,
            "unit": "ns/op",
            "extra": "289784 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - B/op",
            "value": 8432,
            "unit": "B/op",
            "extra": "289784 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "289784 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush",
            "value": 2657,
            "unit": "ns/op\t     329 B/op\t       6 allocs/op",
            "extra": "437450 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - ns/op",
            "value": 2657,
            "unit": "ns/op",
            "extra": "437450 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - B/op",
            "value": 329,
            "unit": "B/op",
            "extra": "437450 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "437450 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame",
            "value": 1127,
            "unit": "ns/op\t   10877 B/op\t       1 allocs/op",
            "extra": "1045152 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - ns/op",
            "value": 1127,
            "unit": "ns/op",
            "extra": "1045152 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - B/op",
            "value": 10877,
            "unit": "B/op",
            "extra": "1045152 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1045152 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip",
            "value": 207632,
            "unit": "ns/op\t 1707610 B/op\t     333 allocs/op",
            "extra": "5263 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - ns/op",
            "value": 207632,
            "unit": "ns/op",
            "extra": "5263 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - B/op",
            "value": 1707610,
            "unit": "B/op",
            "extra": "5263 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - allocs/op",
            "value": 333,
            "unit": "allocs/op",
            "extra": "5263 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo",
            "value": 857,
            "unit": "ns/op\t    5991 B/op\t       1 allocs/op",
            "extra": "1353032 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - ns/op",
            "value": 857,
            "unit": "ns/op",
            "extra": "1353032 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - B/op",
            "value": 5991,
            "unit": "B/op",
            "extra": "1353032 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1353032 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay",
            "value": 215.5,
            "unit": "ns/op\t     260 B/op\t       0 allocs/op",
            "extra": "4950372 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - ns/op",
            "value": 215.5,
            "unit": "ns/op",
            "extra": "4950372 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - B/op",
            "value": 260,
            "unit": "B/op",
            "extra": "4950372 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4950372 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick",
            "value": 1776,
            "unit": "ns/op\t    4419 B/op\t       0 allocs/op",
            "extra": "808732 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - ns/op",
            "value": 1776,
            "unit": "ns/op",
            "extra": "808732 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - B/op",
            "value": 4419,
            "unit": "B/op",
            "extra": "808732 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "808732 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest",
            "value": 29.04,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39915817 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - ns/op",
            "value": 29.04,
            "unit": "ns/op",
            "extra": "39915817 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "39915817 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "39915817 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/active_source",
            "value": 428.3,
            "unit": "ns/op\t     554 B/op\t       3 allocs/op",
            "extra": "2674446 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/active_source - ns/op",
            "value": 428.3,
            "unit": "ns/op",
            "extra": "2674446 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/active_source - B/op",
            "value": 554,
            "unit": "B/op",
            "extra": "2674446 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/active_source - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2674446 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/delta_only",
            "value": 540.3,
            "unit": "ns/op\t     231 B/op\t       3 allocs/op",
            "extra": "2188276 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/delta_only - ns/op",
            "value": 540.3,
            "unit": "ns/op",
            "extra": "2188276 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/delta_only - B/op",
            "value": 231,
            "unit": "B/op",
            "extra": "2188276 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/delta_only - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2188276 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/skipped_source",
            "value": 305,
            "unit": "ns/op\t     225 B/op\t       3 allocs/op",
            "extra": "4224313 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/skipped_source - ns/op",
            "value": 305,
            "unit": "ns/op",
            "extra": "4224313 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/skipped_source - B/op",
            "value": 225,
            "unit": "B/op",
            "extra": "4224313 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/skipped_source - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4224313 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/no_filter_all_recorded",
            "value": 414.4,
            "unit": "ns/op\t     554 B/op\t       3 allocs/op",
            "extra": "2779930 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/no_filter_all_recorded - ns/op",
            "value": 414.4,
            "unit": "ns/op",
            "extra": "2779930 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/no_filter_all_recorded - B/op",
            "value": 554,
            "unit": "B/op",
            "extra": "2779930 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/no_filter_all_recorded - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2779930 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/trim_triggered",
            "value": 407.4,
            "unit": "ns/op\t     433 B/op\t       3 allocs/op",
            "extra": "2827093 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/trim_triggered - ns/op",
            "value": 407.4,
            "unit": "ns/op",
            "extra": "2827093 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/trim_triggered - B/op",
            "value": 433,
            "unit": "B/op",
            "extra": "2827093 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/trim_triggered - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2827093 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/realistic_1080p",
            "value": 4775,
            "unit": "ns/op\t    3440 B/op\t       3 allocs/op",
            "extra": "242644 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/realistic_1080p - ns/op",
            "value": 4775,
            "unit": "ns/op",
            "extra": "242644 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/realistic_1080p - B/op",
            "value": 3440,
            "unit": "B/op",
            "extra": "242644 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/realistic_1080p - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "242644 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/with_keyframe",
            "value": 83717,
            "unit": "ns/op\t  257801 B/op\t     151 allocs/op",
            "extra": "14376 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/with_keyframe - ns/op",
            "value": 83717,
            "unit": "ns/op",
            "extra": "14376 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/with_keyframe - B/op",
            "value": 257801,
            "unit": "B/op",
            "extra": "14376 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/with_keyframe - allocs/op",
            "value": 151,
            "unit": "allocs/op",
            "extra": "14376 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/no_keyframe",
            "value": 85403,
            "unit": "ns/op\t  257793 B/op\t     151 allocs/op",
            "extra": "13797 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/no_keyframe - ns/op",
            "value": 85403,
            "unit": "ns/op",
            "extra": "13797 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/no_keyframe - B/op",
            "value": 257793,
            "unit": "B/op",
            "extra": "13797 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/no_keyframe - allocs/op",
            "value": 151,
            "unit": "allocs/op",
            "extra": "13797 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode",
            "value": 14142,
            "unit": "ns/op\t   65777 B/op\t       5 allocs/op",
            "extra": "82492 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - ns/op",
            "value": 14142,
            "unit": "ns/op",
            "extra": "82492 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - B/op",
            "value": 65777,
            "unit": "B/op",
            "extra": "82492 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "82492 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p",
            "value": 67040,
            "unit": "ns/op\t20620.38 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "17274 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - ns/op",
            "value": 67040,
            "unit": "ns/op",
            "extra": "17274 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - MB/s",
            "value": 20620.38,
            "unit": "MB/s",
            "extra": "17274 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17274 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17274 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p",
            "value": 129235,
            "unit": "ns/op\t24067.83 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "9012 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - ns/op",
            "value": 129235,
            "unit": "ns/op",
            "extra": "9012 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - MB/s",
            "value": 24067.83,
            "unit": "MB/s",
            "extra": "9012 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9012 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9012 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p",
            "value": 22838616,
            "unit": "ns/op\t 136.19 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - ns/op",
            "value": 22838616,
            "unit": "ns/op",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - MB/s",
            "value": 136.19,
            "unit": "MB/s",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p",
            "value": 22797247,
            "unit": "ns/op\t 136.44 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - ns/op",
            "value": 22797247,
            "unit": "ns/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - MB/s",
            "value": 136.44,
            "unit": "MB/s",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p",
            "value": 250010,
            "unit": "ns/op\t12441.09 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "4705 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - ns/op",
            "value": 250010,
            "unit": "ns/op",
            "extra": "4705 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - MB/s",
            "value": 12441.09,
            "unit": "MB/s",
            "extra": "4705 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4705 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4705 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p",
            "value": 1683366,
            "unit": "ns/op\t1847.73 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "706 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - ns/op",
            "value": 1683366,
            "unit": "ns/op",
            "extra": "706 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - MB/s",
            "value": 1847.73,
            "unit": "MB/s",
            "extra": "706 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "706 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "706 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p",
            "value": 9275321,
            "unit": "ns/op\t 335.34 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "128 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - ns/op",
            "value": 9275321,
            "unit": "ns/op",
            "extra": "128 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - MB/s",
            "value": 335.34,
            "unit": "MB/s",
            "extra": "128 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "128 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "128 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p",
            "value": 47605,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25514 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - ns/op",
            "value": 47605,
            "unit": "ns/op",
            "extra": "25514 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "25514 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "25514 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p",
            "value": 1473481,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "812 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - ns/op",
            "value": 1473481,
            "unit": "ns/op",
            "extra": "812 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "812 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "812 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p",
            "value": 8998402,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p - ns/op",
            "value": 8998402,
            "unit": "ns/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K",
            "value": 718269,
            "unit": "ns/op\t17321.65 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1641 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - ns/op",
            "value": 718269,
            "unit": "ns/op",
            "extra": "1641 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - MB/s",
            "value": 17321.65,
            "unit": "MB/s",
            "extra": "1641 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1641 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1641 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K",
            "value": 90587990,
            "unit": "ns/op\t 137.34 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K - ns/op",
            "value": 90587990,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K - MB/s",
            "value": 137.34,
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
            "value": 89840313,
            "unit": "ns/op\t 138.49 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - ns/op",
            "value": 89840313,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - MB/s",
            "value": 138.49,
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
            "value": 1303971,
            "unit": "ns/op\t9541.31 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "879 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - ns/op",
            "value": 1303971,
            "unit": "ns/op",
            "extra": "879 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - MB/s",
            "value": 9541.31,
            "unit": "MB/s",
            "extra": "879 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "879 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "879 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p",
            "value": 156953,
            "unit": "ns/op\t19817.39 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "8215 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - ns/op",
            "value": 156953,
            "unit": "ns/op",
            "extra": "8215 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - MB/s",
            "value": 19817.39,
            "unit": "MB/s",
            "extra": "8215 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8215 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8215 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p",
            "value": 15224047,
            "unit": "ns/op\t 136.21 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - ns/op",
            "value": 15224047,
            "unit": "ns/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - MB/s",
            "value": 136.21,
            "unit": "MB/s",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p",
            "value": 139172,
            "unit": "ns/op\t14899.53 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "8546 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - ns/op",
            "value": 139172,
            "unit": "ns/op",
            "extra": "8546 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - MB/s",
            "value": 14899.53,
            "unit": "MB/s",
            "extra": "8546 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8546 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8546 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D",
            "value": 53278,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22461 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - ns/op",
            "value": 53278,
            "unit": "ns/op",
            "extra": "22461 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "22461 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "22461 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D",
            "value": 1472372,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "814 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D - ns/op",
            "value": 1472372,
            "unit": "ns/op",
            "extra": "814 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "814 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "814 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel",
            "value": 9058366,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel - ns/op",
            "value": 9058366,
            "unit": "ns/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p",
            "value": 58.89,
            "unit": "ns/op\t16301.96 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "20412210 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - ns/op",
            "value": 58.89,
            "unit": "ns/op",
            "extra": "20412210 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - MB/s",
            "value": 16301.96,
            "unit": "MB/s",
            "extra": "20412210 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20412210 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20412210 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p",
            "value": 46494,
            "unit": "ns/op\t44599.66 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "26220 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - ns/op",
            "value": 46494,
            "unit": "ns/op",
            "extra": "26220 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - MB/s",
            "value": 44599.66,
            "unit": "MB/s",
            "extra": "26220 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "26220 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "26220 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920",
            "value": 6262,
            "unit": "ns/op\t 306.63 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "191784 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - ns/op",
            "value": 6262,
            "unit": "ns/op",
            "extra": "191784 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - MB/s",
            "value": 306.63,
            "unit": "MB/s",
            "extra": "191784 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "191784 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "191784 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p",
            "value": 10223763,
            "unit": "ns/op\t 304.23 MB/s\t   32768 B/op\t       3 allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p - ns/op",
            "value": 10223763,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p - MB/s",
            "value": 304.23,
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
            "value": 4571205,
            "unit": "ns/op\t 302.41 MB/s\t   20992 B/op\t       3 allocs/op",
            "extra": "261 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_1080pTo720p - ns/op",
            "value": 4571205,
            "unit": "ns/op",
            "extra": "261 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_1080pTo720p - MB/s",
            "value": 302.41,
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
            "value": 34895229,
            "unit": "ns/op\t  39.62 MB/s\t  267799 B/op\t       3 allocs/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - ns/op",
            "value": 34895229,
            "unit": "ns/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - MB/s",
            "value": 39.62,
            "unit": "MB/s",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - B/op",
            "value": 267799,
            "unit": "B/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080",
            "value": 33762410,
            "unit": "ns/op\t  92.13 MB/s\t      87 B/op\t       3 allocs/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - ns/op",
            "value": 33762410,
            "unit": "ns/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - MB/s",
            "value": 92.13,
            "unit": "MB/s",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - B/op",
            "value": 87,
            "unit": "B/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "33 times\n4 procs"
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
          "id": "cd4331a6003dc374f3fa54659e32d9b5df33aa4d",
          "message": "Merge branch 'main' of https://github.com/zsiec/switchframe\n\n# Conflicts:\n#\tserver/audio/crossfade.go\n#\tserver/graphics/alphablend_kernels_test.go\n#\tserver/transition/scaler_lanczos.go",
          "timestamp": "2026-03-08T00:03:42-05:00",
          "tree_id": "0221f92390c1ef0a3706aa576d1c7e4539191d97",
          "url": "https://github.com/zsiec/switchframe/commit/cd4331a6003dc374f3fa54659e32d9b5df33aa4d"
        },
        "date": 1772946420785,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBiquadAfterSilence",
            "value": 6691,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "172777 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - ns/op",
            "value": 6691,
            "unit": "ns/op",
            "extra": "172777 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "172777 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "172777 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear",
            "value": 59.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19767960 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - ns/op",
            "value": 59.2,
            "unit": "ns/op",
            "extra": "19767960 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19767960 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19767960 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS",
            "value": 12.68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "94819789 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - ns/op",
            "value": 12.68,
            "unit": "ns/op",
            "extra": "94819789 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "94819789 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "94819789 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples",
            "value": 1928,
            "unit": "ns/op\t4249.81 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "623275 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - ns/op",
            "value": 1928,
            "unit": "ns/op",
            "extra": "623275 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - MB/s",
            "value": 4249.81,
            "unit": "MB/s",
            "extra": "623275 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "623275 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "623275 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples",
            "value": 7580,
            "unit": "ns/op\t1080.72 MB/s\t    8199 B/op\t       1 allocs/op",
            "extra": "186021 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - ns/op",
            "value": 7580,
            "unit": "ns/op",
            "extra": "186021 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - MB/s",
            "value": 1080.72,
            "unit": "MB/s",
            "extra": "186021 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - B/op",
            "value": 8199,
            "unit": "B/op",
            "extra": "186021 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "186021 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048",
            "value": 168.1,
            "unit": "ns/op\t48735.51 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "7137343 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - ns/op",
            "value": 168.1,
            "unit": "ns/op",
            "extra": "7137343 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - MB/s",
            "value": 48735.51,
            "unit": "MB/s",
            "extra": "7137343 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7137343 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7137343 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048",
            "value": 127,
            "unit": "ns/op\t64496.33 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "8969725 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - ns/op",
            "value": 127,
            "unit": "ns/op",
            "extra": "8969725 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - MB/s",
            "value": 64496.33,
            "unit": "MB/s",
            "extra": "8969725 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8969725 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8969725 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048",
            "value": 438.5,
            "unit": "ns/op\t18680.40 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2734874 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - ns/op",
            "value": 438.5,
            "unit": "ns/op",
            "extra": "2734874 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - MB/s",
            "value": 18680.4,
            "unit": "MB/s",
            "extra": "2734874 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2734874 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2734874 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput",
            "value": 90404,
            "unit": "ns/op\t      42 B/op\t       3 allocs/op",
            "extra": "13174 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - ns/op",
            "value": 90404,
            "unit": "ns/op",
            "extra": "13174 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - B/op",
            "value": 42,
            "unit": "B/op",
            "extra": "13174 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "13174 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB",
            "value": 7183,
            "unit": "ns/op\t7134.98 MB/s\t   57344 B/op\t       1 allocs/op",
            "extra": "158062 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - ns/op",
            "value": 7183,
            "unit": "ns/op",
            "extra": "158062 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - MB/s",
            "value": 7134.98,
            "unit": "MB/s",
            "extra": "158062 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - B/op",
            "value": 57344,
            "unit": "B/op",
            "extra": "158062 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "158062 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1",
            "value": 57463,
            "unit": "ns/op\t 891.91 MB/s\t   57512 B/op\t       4 allocs/op",
            "extra": "20828 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - ns/op",
            "value": 57463,
            "unit": "ns/op",
            "extra": "20828 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - MB/s",
            "value": 891.91,
            "unit": "MB/s",
            "extra": "20828 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - B/op",
            "value": 57512,
            "unit": "B/op",
            "extra": "20828 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "20828 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into",
            "value": 50488,
            "unit": "ns/op\t1015.14 MB/s\t     168 B/op\t       3 allocs/op",
            "extra": "23781 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - ns/op",
            "value": 50488,
            "unit": "ns/op",
            "extra": "23781 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - MB/s",
            "value": 1015.14,
            "unit": "MB/s",
            "extra": "23781 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - B/op",
            "value": 168,
            "unit": "B/op",
            "extra": "23781 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "23781 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs",
            "value": 125.7,
            "unit": "ns/op\t407880.08 MB/s\t     168 B/op\t       3 allocs/op",
            "extra": "9423954 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - ns/op",
            "value": 125.7,
            "unit": "ns/op",
            "extra": "9423954 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - MB/s",
            "value": 407880.08,
            "unit": "MB/s",
            "extra": "9423954 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - B/op",
            "value": 168,
            "unit": "B/op",
            "extra": "9423954 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "9423954 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame",
            "value": 355.5,
            "unit": "ns/op\t5772.43 MB/s\t    2304 B/op\t       1 allocs/op",
            "extra": "3260130 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - ns/op",
            "value": 355.5,
            "unit": "ns/op",
            "extra": "3260130 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - MB/s",
            "value": 5772.43,
            "unit": "MB/s",
            "extra": "3260130 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - B/op",
            "value": 2304,
            "unit": "B/op",
            "extra": "3260130 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3260130 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources",
            "value": 16711,
            "unit": "ns/op\t    8066 B/op\t      53 allocs/op",
            "extra": "71508 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - ns/op",
            "value": 16711,
            "unit": "ns/op",
            "extra": "71508 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - B/op",
            "value": 8066,
            "unit": "B/op",
            "extra": "71508 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "71508 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources",
            "value": 70146,
            "unit": "ns/op\t  57.57 MB/s\t    5392 B/op\t     129 allocs/op",
            "extra": "16897 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - ns/op",
            "value": 70146,
            "unit": "ns/op",
            "extra": "16897 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - MB/s",
            "value": 57.57,
            "unit": "MB/s",
            "extra": "16897 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - B/op",
            "value": 5392,
            "unit": "B/op",
            "extra": "16897 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "16897 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources",
            "value": 9746,
            "unit": "ns/op\t    4833 B/op\t      29 allocs/op",
            "extra": "121572 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - ns/op",
            "value": 9746,
            "unit": "ns/op",
            "extra": "121572 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - B/op",
            "value": 4833,
            "unit": "B/op",
            "extra": "121572 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "121572 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish",
            "value": 16974,
            "unit": "ns/op\t    8066 B/op\t      53 allocs/op",
            "extra": "71840 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - ns/op",
            "value": 16974,
            "unit": "ns/op",
            "extra": "71840 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - B/op",
            "value": 8066,
            "unit": "B/op",
            "extra": "71840 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "71840 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish",
            "value": 20853,
            "unit": "ns/op\t    8068 B/op\t      53 allocs/op",
            "extra": "56575 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - ns/op",
            "value": 20853,
            "unit": "ns/op",
            "extra": "56575 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - B/op",
            "value": 8068,
            "unit": "B/op",
            "extra": "56575 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "56575 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque",
            "value": 4086,
            "unit": "ns/op\t 469.90 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "289941 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - ns/op",
            "value": 4086,
            "unit": "ns/op",
            "extra": "289941 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - MB/s",
            "value": 469.9,
            "unit": "MB/s",
            "extra": "289941 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "289941 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "289941 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse",
            "value": 2156,
            "unit": "ns/op\t 890.50 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "555416 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - ns/op",
            "value": 2156,
            "unit": "ns/op",
            "extra": "555416 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - MB/s",
            "value": 890.5,
            "unit": "MB/s",
            "extra": "555416 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "555416 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "555416 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full",
            "value": 3587339,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full - ns/op",
            "value": 3587339,
            "unit": "ns/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird",
            "value": 3581933,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird - ns/op",
            "value": 3581933,
            "unit": "ns/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p",
            "value": 641226,
            "unit": "ns/op\t 808.45 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1870 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - ns/op",
            "value": 641226,
            "unit": "ns/op",
            "extra": "1870 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - MB/s",
            "value": 808.45,
            "unit": "MB/s",
            "extra": "1870 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1870 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1870 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p",
            "value": 4169023,
            "unit": "ns/op\t 497.38 MB/s\t 2605064 B/op\t       2 allocs/op",
            "extra": "337 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - ns/op",
            "value": 4169023,
            "unit": "ns/op",
            "extra": "337 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - MB/s",
            "value": 497.38,
            "unit": "MB/s",
            "extra": "337 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - B/op",
            "value": 2605064,
            "unit": "B/op",
            "extra": "337 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "337 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p",
            "value": 3236949,
            "unit": "ns/op\t 640.60 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "369 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - ns/op",
            "value": 3236949,
            "unit": "ns/op",
            "extra": "369 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - MB/s",
            "value": 640.6,
            "unit": "MB/s",
            "extra": "369 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "369 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "369 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p",
            "value": 814848,
            "unit": "ns/op\t2544.77 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1478 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - ns/op",
            "value": 814848,
            "unit": "ns/op",
            "extra": "1478 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - MB/s",
            "value": 2544.77,
            "unit": "MB/s",
            "extra": "1478 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1478 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1478 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p",
            "value": 2437691,
            "unit": "ns/op\t 850.64 MB/s\t 2080777 B/op\t       1 allocs/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - ns/op",
            "value": 2437691,
            "unit": "ns/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - MB/s",
            "value": 850.64,
            "unit": "MB/s",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - B/op",
            "value": 2080777,
            "unit": "B/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p",
            "value": 20.93,
            "unit": "ns/op\t45859.39 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "55573356 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - ns/op",
            "value": 20.93,
            "unit": "ns/op",
            "extra": "55573356 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - MB/s",
            "value": 45859.39,
            "unit": "MB/s",
            "extra": "55573356 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "55573356 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "55573356 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p",
            "value": 2623,
            "unit": "ns/op\t1952.19 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "458536 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - ns/op",
            "value": 2623,
            "unit": "ns/op",
            "extra": "458536 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - MB/s",
            "value": 1952.19,
            "unit": "MB/s",
            "extra": "458536 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "458536 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "458536 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p",
            "value": 783.1,
            "unit": "ns/op\t6538.14 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1523262 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - ns/op",
            "value": 783.1,
            "unit": "ns/op",
            "extra": "1523262 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - MB/s",
            "value": 6538.14,
            "unit": "MB/s",
            "extra": "1523262 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1523262 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1523262 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p",
            "value": 3105126,
            "unit": "ns/op\t1780.80 MB/s\t 3117075 B/op\t       3 allocs/op",
            "extra": "386 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - ns/op",
            "value": 3105126,
            "unit": "ns/op",
            "extra": "386 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - MB/s",
            "value": 1780.8,
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
            "value": 2885957,
            "unit": "ns/op\t1916.04 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "415 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p - ns/op",
            "value": 2885957,
            "unit": "ns/op",
            "extra": "415 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p - MB/s",
            "value": 1916.04,
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
            "value": 1158182,
            "unit": "ns/op\t2685.59 MB/s\t 5529606 B/op\t       1 allocs/op",
            "extra": "990 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - ns/op",
            "value": 1158182,
            "unit": "ns/op",
            "extra": "990 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - MB/s",
            "value": 2685.59,
            "unit": "MB/s",
            "extra": "990 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - B/op",
            "value": 5529606,
            "unit": "B/op",
            "extra": "990 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "990 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p",
            "value": 895474,
            "unit": "ns/op\t3473.47 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1340 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - ns/op",
            "value": 895474,
            "unit": "ns/op",
            "extra": "1340 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - MB/s",
            "value": 3473.47,
            "unit": "MB/s",
            "extra": "1340 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1340 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1340 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p",
            "value": 4652568,
            "unit": "ns/op\t 668.53 MB/s\t 8646668 B/op\t       4 allocs/op",
            "extra": "253 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - ns/op",
            "value": 4652568,
            "unit": "ns/op",
            "extra": "253 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - MB/s",
            "value": 668.53,
            "unit": "MB/s",
            "extra": "253 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - B/op",
            "value": 8646668,
            "unit": "B/op",
            "extra": "253 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "253 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p",
            "value": 3778039,
            "unit": "ns/op\t 823.28 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "318 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - ns/op",
            "value": 3778039,
            "unit": "ns/op",
            "extra": "318 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - MB/s",
            "value": 823.28,
            "unit": "MB/s",
            "extra": "318 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "318 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "318 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath",
            "value": 74.04,
            "unit": "ns/op\t      24 B/op\t       1 allocs/op",
            "extra": "16491770 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - ns/op",
            "value": 74.04,
            "unit": "ns/op",
            "extra": "16491770 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - B/op",
            "value": 24,
            "unit": "B/op",
            "extra": "16491770 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "16491770 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath",
            "value": 3327,
            "unit": "ns/op\t    8398 B/op\t       3 allocs/op",
            "extra": "351958 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - ns/op",
            "value": 3327,
            "unit": "ns/op",
            "extra": "351958 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - B/op",
            "value": 8398,
            "unit": "B/op",
            "extra": "351958 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "351958 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush",
            "value": 2662,
            "unit": "ns/op\t     329 B/op\t       6 allocs/op",
            "extra": "440516 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - ns/op",
            "value": 2662,
            "unit": "ns/op",
            "extra": "440516 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - B/op",
            "value": 329,
            "unit": "B/op",
            "extra": "440516 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "440516 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame",
            "value": 1299,
            "unit": "ns/op\t   10812 B/op\t       1 allocs/op",
            "extra": "931114 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - ns/op",
            "value": 1299,
            "unit": "ns/op",
            "extra": "931114 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - B/op",
            "value": 10812,
            "unit": "B/op",
            "extra": "931114 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "931114 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip",
            "value": 215683,
            "unit": "ns/op\t 1707610 B/op\t     333 allocs/op",
            "extra": "5142 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - ns/op",
            "value": 215683,
            "unit": "ns/op",
            "extra": "5142 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - B/op",
            "value": 1707610,
            "unit": "B/op",
            "extra": "5142 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - allocs/op",
            "value": 333,
            "unit": "allocs/op",
            "extra": "5142 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo",
            "value": 836.4,
            "unit": "ns/op\t    5991 B/op\t       1 allocs/op",
            "extra": "1353747 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - ns/op",
            "value": 836.4,
            "unit": "ns/op",
            "extra": "1353747 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - B/op",
            "value": 5991,
            "unit": "B/op",
            "extra": "1353747 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1353747 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay",
            "value": 167.7,
            "unit": "ns/op\t     282 B/op\t       0 allocs/op",
            "extra": "7152806 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - ns/op",
            "value": 167.7,
            "unit": "ns/op",
            "extra": "7152806 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - B/op",
            "value": 282,
            "unit": "B/op",
            "extra": "7152806 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7152806 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick",
            "value": 1771,
            "unit": "ns/op\t    4851 B/op\t       0 allocs/op",
            "extra": "589044 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - ns/op",
            "value": 1771,
            "unit": "ns/op",
            "extra": "589044 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - B/op",
            "value": 4851,
            "unit": "B/op",
            "extra": "589044 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "589044 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest",
            "value": 30.29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39141279 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - ns/op",
            "value": 30.29,
            "unit": "ns/op",
            "extra": "39141279 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "39141279 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "39141279 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/active_source",
            "value": 415.6,
            "unit": "ns/op\t     554 B/op\t       3 allocs/op",
            "extra": "2813708 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/active_source - ns/op",
            "value": 415.6,
            "unit": "ns/op",
            "extra": "2813708 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/active_source - B/op",
            "value": 554,
            "unit": "B/op",
            "extra": "2813708 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/active_source - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2813708 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/delta_only",
            "value": 576.9,
            "unit": "ns/op\t     232 B/op\t       3 allocs/op",
            "extra": "2068856 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/delta_only - ns/op",
            "value": 576.9,
            "unit": "ns/op",
            "extra": "2068856 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/delta_only - B/op",
            "value": 232,
            "unit": "B/op",
            "extra": "2068856 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/delta_only - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2068856 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/skipped_source",
            "value": 273.9,
            "unit": "ns/op\t     225 B/op\t       3 allocs/op",
            "extra": "4361758 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/skipped_source - ns/op",
            "value": 273.9,
            "unit": "ns/op",
            "extra": "4361758 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/skipped_source - B/op",
            "value": 225,
            "unit": "B/op",
            "extra": "4361758 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/skipped_source - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4361758 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/no_filter_all_recorded",
            "value": 400.5,
            "unit": "ns/op\t     554 B/op\t       3 allocs/op",
            "extra": "2925300 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/no_filter_all_recorded - ns/op",
            "value": 400.5,
            "unit": "ns/op",
            "extra": "2925300 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/no_filter_all_recorded - B/op",
            "value": 554,
            "unit": "B/op",
            "extra": "2925300 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/no_filter_all_recorded - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2925300 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/trim_triggered",
            "value": 403.1,
            "unit": "ns/op\t     433 B/op\t       3 allocs/op",
            "extra": "2908621 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/trim_triggered - ns/op",
            "value": 403.1,
            "unit": "ns/op",
            "extra": "2908621 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/trim_triggered - B/op",
            "value": 433,
            "unit": "B/op",
            "extra": "2908621 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/trim_triggered - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2908621 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/realistic_1080p",
            "value": 4580,
            "unit": "ns/op\t    3434 B/op\t       3 allocs/op",
            "extra": "250098 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/realistic_1080p - ns/op",
            "value": 4580,
            "unit": "ns/op",
            "extra": "250098 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/realistic_1080p - B/op",
            "value": 3434,
            "unit": "B/op",
            "extra": "250098 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/realistic_1080p - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "250098 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/with_keyframe",
            "value": 70594,
            "unit": "ns/op\t  257880 B/op\t     151 allocs/op",
            "extra": "17498 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/with_keyframe - ns/op",
            "value": 70594,
            "unit": "ns/op",
            "extra": "17498 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/with_keyframe - B/op",
            "value": 257880,
            "unit": "B/op",
            "extra": "17498 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/with_keyframe - allocs/op",
            "value": 151,
            "unit": "allocs/op",
            "extra": "17498 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/no_keyframe",
            "value": 69629,
            "unit": "ns/op\t  257875 B/op\t     151 allocs/op",
            "extra": "17132 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/no_keyframe - ns/op",
            "value": 69629,
            "unit": "ns/op",
            "extra": "17132 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/no_keyframe - B/op",
            "value": 257875,
            "unit": "B/op",
            "extra": "17132 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/no_keyframe - allocs/op",
            "value": 151,
            "unit": "allocs/op",
            "extra": "17132 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode",
            "value": 11790,
            "unit": "ns/op\t   65777 B/op\t       5 allocs/op",
            "extra": "131800 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - ns/op",
            "value": 11790,
            "unit": "ns/op",
            "extra": "131800 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - B/op",
            "value": 65777,
            "unit": "B/op",
            "extra": "131800 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "131800 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p",
            "value": 69765,
            "unit": "ns/op\t19814.97 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "17114 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - ns/op",
            "value": 69765,
            "unit": "ns/op",
            "extra": "17114 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - MB/s",
            "value": 19814.97,
            "unit": "MB/s",
            "extra": "17114 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17114 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17114 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p",
            "value": 158335,
            "unit": "ns/op\t19644.38 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "7605 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - ns/op",
            "value": 158335,
            "unit": "ns/op",
            "extra": "7605 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - MB/s",
            "value": 19644.38,
            "unit": "MB/s",
            "extra": "7605 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7605 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7605 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p",
            "value": 22488964,
            "unit": "ns/op\t 138.31 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - ns/op",
            "value": 22488964,
            "unit": "ns/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - MB/s",
            "value": 138.31,
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
            "value": 22497959,
            "unit": "ns/op\t 138.25 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - ns/op",
            "value": 22497959,
            "unit": "ns/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - MB/s",
            "value": 138.25,
            "unit": "MB/s",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p",
            "value": 267616,
            "unit": "ns/op\t11622.63 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "4335 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - ns/op",
            "value": 267616,
            "unit": "ns/op",
            "extra": "4335 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - MB/s",
            "value": 11622.63,
            "unit": "MB/s",
            "extra": "4335 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4335 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4335 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p",
            "value": 1707606,
            "unit": "ns/op\t1821.50 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "700 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - ns/op",
            "value": 1707606,
            "unit": "ns/op",
            "extra": "700 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - MB/s",
            "value": 1821.5,
            "unit": "MB/s",
            "extra": "700 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "700 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "700 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p",
            "value": 9264309,
            "unit": "ns/op\t 335.74 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "129 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - ns/op",
            "value": 9264309,
            "unit": "ns/op",
            "extra": "129 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - MB/s",
            "value": 335.74,
            "unit": "MB/s",
            "extra": "129 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "129 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "129 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p",
            "value": 53761,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22413 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - ns/op",
            "value": 53761,
            "unit": "ns/op",
            "extra": "22413 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "22413 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "22413 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p",
            "value": 1470903,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "812 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - ns/op",
            "value": 1470903,
            "unit": "ns/op",
            "extra": "812 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "812 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "812 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p",
            "value": 8988126,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p - ns/op",
            "value": 8988126,
            "unit": "ns/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K",
            "value": 734388,
            "unit": "ns/op\t16941.44 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1628 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - ns/op",
            "value": 734388,
            "unit": "ns/op",
            "extra": "1628 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - MB/s",
            "value": 16941.44,
            "unit": "MB/s",
            "extra": "1628 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1628 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1628 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K",
            "value": 89938985,
            "unit": "ns/op\t 138.33 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K - ns/op",
            "value": 89938985,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K - MB/s",
            "value": 138.33,
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
            "value": 90902615,
            "unit": "ns/op\t 136.87 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - ns/op",
            "value": 90902615,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - MB/s",
            "value": 136.87,
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
            "value": 1319216,
            "unit": "ns/op\t9431.05 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "908 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - ns/op",
            "value": 1319216,
            "unit": "ns/op",
            "extra": "908 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - MB/s",
            "value": 9431.05,
            "unit": "MB/s",
            "extra": "908 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "908 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "908 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p",
            "value": 157624,
            "unit": "ns/op\t19733.05 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "7303 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - ns/op",
            "value": 157624,
            "unit": "ns/op",
            "extra": "7303 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - MB/s",
            "value": 19733.05,
            "unit": "MB/s",
            "extra": "7303 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7303 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7303 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p",
            "value": 15220472,
            "unit": "ns/op\t 136.24 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - ns/op",
            "value": 15220472,
            "unit": "ns/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - MB/s",
            "value": 136.24,
            "unit": "MB/s",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p",
            "value": 141250,
            "unit": "ns/op\t14680.34 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "8109 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - ns/op",
            "value": 141250,
            "unit": "ns/op",
            "extra": "8109 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - MB/s",
            "value": 14680.34,
            "unit": "MB/s",
            "extra": "8109 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8109 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8109 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D",
            "value": 53513,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22275 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - ns/op",
            "value": 53513,
            "unit": "ns/op",
            "extra": "22275 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "22275 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "22275 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D",
            "value": 1473500,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "811 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D - ns/op",
            "value": 1473500,
            "unit": "ns/op",
            "extra": "811 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "811 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "811 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel",
            "value": 8986906,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "132 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel - ns/op",
            "value": 8986906,
            "unit": "ns/op",
            "extra": "132 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "132 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "132 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p",
            "value": 58.73,
            "unit": "ns/op\t16346.16 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "20440395 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - ns/op",
            "value": 58.73,
            "unit": "ns/op",
            "extra": "20440395 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - MB/s",
            "value": 16346.16,
            "unit": "MB/s",
            "extra": "20440395 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20440395 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20440395 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p",
            "value": 46788,
            "unit": "ns/op\t44319.48 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "25621 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - ns/op",
            "value": 46788,
            "unit": "ns/op",
            "extra": "25621 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - MB/s",
            "value": 44319.48,
            "unit": "MB/s",
            "extra": "25621 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "25621 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "25621 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920",
            "value": 6271,
            "unit": "ns/op\t 306.16 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "191305 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - ns/op",
            "value": 6271,
            "unit": "ns/op",
            "extra": "191305 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - MB/s",
            "value": 306.16,
            "unit": "MB/s",
            "extra": "191305 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "191305 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "191305 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p",
            "value": 10244461,
            "unit": "ns/op\t 303.62 MB/s\t   32768 B/op\t       3 allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p - ns/op",
            "value": 10244461,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p - MB/s",
            "value": 303.62,
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
            "value": 4578612,
            "unit": "ns/op\t 301.93 MB/s\t   20992 B/op\t       3 allocs/op",
            "extra": "262 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_1080pTo720p - ns/op",
            "value": 4578612,
            "unit": "ns/op",
            "extra": "262 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_1080pTo720p - MB/s",
            "value": 301.93,
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
            "value": 34930013,
            "unit": "ns/op\t  39.58 MB/s\t  267799 B/op\t       3 allocs/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - ns/op",
            "value": 34930013,
            "unit": "ns/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - MB/s",
            "value": 39.58,
            "unit": "MB/s",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - B/op",
            "value": 267799,
            "unit": "B/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080",
            "value": 34222732,
            "unit": "ns/op\t  90.89 MB/s\t      87 B/op\t       3 allocs/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - ns/op",
            "value": 34222732,
            "unit": "ns/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - MB/s",
            "value": 90.89,
            "unit": "MB/s",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - B/op",
            "value": 87,
            "unit": "B/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "33 times\n4 procs"
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
          "id": "816b6a7ed6d960b02e00144c2cac4192080e6ee4",
          "message": "fix: remove unused endX variable in Lanczos weight computation",
          "timestamp": "2026-03-08T00:07:49-05:00",
          "tree_id": "8fbe18b1876512accd9fd7a7e908ee80b35ac3a6",
          "url": "https://github.com/zsiec/switchframe/commit/816b6a7ed6d960b02e00144c2cac4192080e6ee4"
        },
        "date": 1772946650558,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBiquadAfterSilence",
            "value": 7142,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "167480 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - ns/op",
            "value": 7142,
            "unit": "ns/op",
            "extra": "167480 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "167480 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "167480 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear",
            "value": 58.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20342978 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - ns/op",
            "value": 58.79,
            "unit": "ns/op",
            "extra": "20342978 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20342978 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20342978 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS",
            "value": 12.68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91255126 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - ns/op",
            "value": 12.68,
            "unit": "ns/op",
            "extra": "91255126 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "91255126 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "91255126 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples",
            "value": 1925,
            "unit": "ns/op\t4256.06 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "622050 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - ns/op",
            "value": 1925,
            "unit": "ns/op",
            "extra": "622050 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - MB/s",
            "value": 4256.06,
            "unit": "MB/s",
            "extra": "622050 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "622050 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "622050 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples",
            "value": 6259,
            "unit": "ns/op\t1308.75 MB/s\t    8199 B/op\t       1 allocs/op",
            "extra": "188121 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - ns/op",
            "value": 6259,
            "unit": "ns/op",
            "extra": "188121 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - MB/s",
            "value": 1308.75,
            "unit": "MB/s",
            "extra": "188121 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - B/op",
            "value": 8199,
            "unit": "B/op",
            "extra": "188121 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "188121 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048",
            "value": 168,
            "unit": "ns/op\t48768.29 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "7144071 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - ns/op",
            "value": 168,
            "unit": "ns/op",
            "extra": "7144071 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - MB/s",
            "value": 48768.29,
            "unit": "MB/s",
            "extra": "7144071 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7144071 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7144071 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048",
            "value": 127.5,
            "unit": "ns/op\t64275.23 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "9378646 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - ns/op",
            "value": 127.5,
            "unit": "ns/op",
            "extra": "9378646 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - MB/s",
            "value": 64275.23,
            "unit": "MB/s",
            "extra": "9378646 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9378646 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9378646 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048",
            "value": 436.4,
            "unit": "ns/op\t18769.68 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2755723 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - ns/op",
            "value": 436.4,
            "unit": "ns/op",
            "extra": "2755723 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - MB/s",
            "value": 18769.68,
            "unit": "MB/s",
            "extra": "2755723 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2755723 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2755723 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput",
            "value": 89463,
            "unit": "ns/op\t      42 B/op\t       3 allocs/op",
            "extra": "13582 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - ns/op",
            "value": 89463,
            "unit": "ns/op",
            "extra": "13582 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - B/op",
            "value": 42,
            "unit": "B/op",
            "extra": "13582 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "13582 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB",
            "value": 6874,
            "unit": "ns/op\t7455.85 MB/s\t   57344 B/op\t       1 allocs/op",
            "extra": "173950 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - ns/op",
            "value": 6874,
            "unit": "ns/op",
            "extra": "173950 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - MB/s",
            "value": 7455.85,
            "unit": "MB/s",
            "extra": "173950 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - B/op",
            "value": 57344,
            "unit": "B/op",
            "extra": "173950 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "173950 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1",
            "value": 57076,
            "unit": "ns/op\t 897.96 MB/s\t   57512 B/op\t       4 allocs/op",
            "extra": "21088 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - ns/op",
            "value": 57076,
            "unit": "ns/op",
            "extra": "21088 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - MB/s",
            "value": 897.96,
            "unit": "MB/s",
            "extra": "21088 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - B/op",
            "value": 57512,
            "unit": "B/op",
            "extra": "21088 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "21088 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into",
            "value": 50566,
            "unit": "ns/op\t1013.57 MB/s\t     168 B/op\t       3 allocs/op",
            "extra": "23784 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - ns/op",
            "value": 50566,
            "unit": "ns/op",
            "extra": "23784 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - MB/s",
            "value": 1013.57,
            "unit": "MB/s",
            "extra": "23784 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - B/op",
            "value": 168,
            "unit": "B/op",
            "extra": "23784 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "23784 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs",
            "value": 124.2,
            "unit": "ns/op\t412518.24 MB/s\t     168 B/op\t       3 allocs/op",
            "extra": "8243766 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - ns/op",
            "value": 124.2,
            "unit": "ns/op",
            "extra": "8243766 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - MB/s",
            "value": 412518.24,
            "unit": "MB/s",
            "extra": "8243766 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - B/op",
            "value": 168,
            "unit": "B/op",
            "extra": "8243766 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "8243766 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame",
            "value": 354.7,
            "unit": "ns/op\t5785.34 MB/s\t    2304 B/op\t       1 allocs/op",
            "extra": "3581641 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - ns/op",
            "value": 354.7,
            "unit": "ns/op",
            "extra": "3581641 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - MB/s",
            "value": 5785.34,
            "unit": "MB/s",
            "extra": "3581641 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - B/op",
            "value": 2304,
            "unit": "B/op",
            "extra": "3581641 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3581641 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources",
            "value": 16691,
            "unit": "ns/op\t    8066 B/op\t      53 allocs/op",
            "extra": "71584 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - ns/op",
            "value": 16691,
            "unit": "ns/op",
            "extra": "71584 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - B/op",
            "value": 8066,
            "unit": "B/op",
            "extra": "71584 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "71584 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources",
            "value": 70089,
            "unit": "ns/op\t  57.61 MB/s\t    5392 B/op\t     129 allocs/op",
            "extra": "17217 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - ns/op",
            "value": 70089,
            "unit": "ns/op",
            "extra": "17217 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - MB/s",
            "value": 57.61,
            "unit": "MB/s",
            "extra": "17217 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - B/op",
            "value": 5392,
            "unit": "B/op",
            "extra": "17217 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "17217 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources",
            "value": 9661,
            "unit": "ns/op\t    4833 B/op\t      29 allocs/op",
            "extra": "121590 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - ns/op",
            "value": 9661,
            "unit": "ns/op",
            "extra": "121590 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - B/op",
            "value": 4833,
            "unit": "B/op",
            "extra": "121590 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "121590 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish",
            "value": 16867,
            "unit": "ns/op\t    8065 B/op\t      53 allocs/op",
            "extra": "71162 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - ns/op",
            "value": 16867,
            "unit": "ns/op",
            "extra": "71162 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - B/op",
            "value": 8065,
            "unit": "B/op",
            "extra": "71162 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "71162 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish",
            "value": 20369,
            "unit": "ns/op\t    8067 B/op\t      53 allocs/op",
            "extra": "56346 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - ns/op",
            "value": 20369,
            "unit": "ns/op",
            "extra": "56346 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - B/op",
            "value": 8067,
            "unit": "B/op",
            "extra": "56346 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "56346 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque",
            "value": 4089,
            "unit": "ns/op\t 469.55 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "293733 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - ns/op",
            "value": 4089,
            "unit": "ns/op",
            "extra": "293733 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - MB/s",
            "value": 469.55,
            "unit": "MB/s",
            "extra": "293733 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "293733 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "293733 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse",
            "value": 2172,
            "unit": "ns/op\t 884.07 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "554580 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - ns/op",
            "value": 2172,
            "unit": "ns/op",
            "extra": "554580 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - MB/s",
            "value": 884.07,
            "unit": "MB/s",
            "extra": "554580 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "554580 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "554580 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full",
            "value": 3568103,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "336 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full - ns/op",
            "value": 3568103,
            "unit": "ns/op",
            "extra": "336 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "336 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "336 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird",
            "value": 3567082,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird - ns/op",
            "value": 3567082,
            "unit": "ns/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p",
            "value": 639999,
            "unit": "ns/op\t 810.00 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1878 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - ns/op",
            "value": 639999,
            "unit": "ns/op",
            "extra": "1878 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - MB/s",
            "value": 810,
            "unit": "MB/s",
            "extra": "1878 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1878 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1878 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p",
            "value": 4209805,
            "unit": "ns/op\t 492.56 MB/s\t 2605085 B/op\t       2 allocs/op",
            "extra": "255 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - ns/op",
            "value": 4209805,
            "unit": "ns/op",
            "extra": "255 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - MB/s",
            "value": 492.56,
            "unit": "MB/s",
            "extra": "255 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - B/op",
            "value": 2605085,
            "unit": "B/op",
            "extra": "255 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "255 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p",
            "value": 3246242,
            "unit": "ns/op\t 638.77 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "368 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - ns/op",
            "value": 3246242,
            "unit": "ns/op",
            "extra": "368 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - MB/s",
            "value": 638.77,
            "unit": "MB/s",
            "extra": "368 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "368 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "368 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p",
            "value": 810862,
            "unit": "ns/op\t2557.28 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1480 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - ns/op",
            "value": 810862,
            "unit": "ns/op",
            "extra": "1480 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - MB/s",
            "value": 2557.28,
            "unit": "MB/s",
            "extra": "1480 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1480 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1480 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p",
            "value": 2431658,
            "unit": "ns/op\t 852.75 MB/s\t 2080775 B/op\t       1 allocs/op",
            "extra": "580 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - ns/op",
            "value": 2431658,
            "unit": "ns/op",
            "extra": "580 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - MB/s",
            "value": 852.75,
            "unit": "MB/s",
            "extra": "580 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - B/op",
            "value": 2080775,
            "unit": "B/op",
            "extra": "580 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "580 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p",
            "value": 20.91,
            "unit": "ns/op\t45910.34 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "55894930 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - ns/op",
            "value": 20.91,
            "unit": "ns/op",
            "extra": "55894930 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - MB/s",
            "value": 45910.34,
            "unit": "MB/s",
            "extra": "55894930 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "55894930 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "55894930 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p",
            "value": 2622,
            "unit": "ns/op\t1952.44 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "459187 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - ns/op",
            "value": 2622,
            "unit": "ns/op",
            "extra": "459187 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - MB/s",
            "value": 1952.44,
            "unit": "MB/s",
            "extra": "459187 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "459187 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "459187 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p",
            "value": 781.2,
            "unit": "ns/op\t6554.22 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1535901 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - ns/op",
            "value": 781.2,
            "unit": "ns/op",
            "extra": "1535901 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - MB/s",
            "value": 6554.22,
            "unit": "MB/s",
            "extra": "1535901 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1535901 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1535901 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p",
            "value": 3071130,
            "unit": "ns/op\t1800.51 MB/s\t 3117060 B/op\t       3 allocs/op",
            "extra": "390 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - ns/op",
            "value": 3071130,
            "unit": "ns/op",
            "extra": "390 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - MB/s",
            "value": 1800.51,
            "unit": "MB/s",
            "extra": "390 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - B/op",
            "value": 3117060,
            "unit": "B/op",
            "extra": "390 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "390 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p",
            "value": 2881284,
            "unit": "ns/op\t1919.14 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "415 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p - ns/op",
            "value": 2881284,
            "unit": "ns/op",
            "extra": "415 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p - MB/s",
            "value": 1919.14,
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
            "value": 1155686,
            "unit": "ns/op\t2691.39 MB/s\t 5529609 B/op\t       1 allocs/op",
            "extra": "1059 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - ns/op",
            "value": 1155686,
            "unit": "ns/op",
            "extra": "1059 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - MB/s",
            "value": 2691.39,
            "unit": "MB/s",
            "extra": "1059 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - B/op",
            "value": 5529609,
            "unit": "B/op",
            "extra": "1059 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1059 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p",
            "value": 887670,
            "unit": "ns/op\t3504.01 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1275 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - ns/op",
            "value": 887670,
            "unit": "ns/op",
            "extra": "1275 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - MB/s",
            "value": 3504.01,
            "unit": "MB/s",
            "extra": "1275 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1275 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1275 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p",
            "value": 4557909,
            "unit": "ns/op\t 682.42 MB/s\t 8646670 B/op\t       4 allocs/op",
            "extra": "262 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - ns/op",
            "value": 4557909,
            "unit": "ns/op",
            "extra": "262 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - MB/s",
            "value": 682.42,
            "unit": "MB/s",
            "extra": "262 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - B/op",
            "value": 8646670,
            "unit": "B/op",
            "extra": "262 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "262 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p",
            "value": 3770256,
            "unit": "ns/op\t 824.98 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "316 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - ns/op",
            "value": 3770256,
            "unit": "ns/op",
            "extra": "316 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - MB/s",
            "value": 824.98,
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
            "value": 73.58,
            "unit": "ns/op\t      24 B/op\t       1 allocs/op",
            "extra": "16467320 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - ns/op",
            "value": 73.58,
            "unit": "ns/op",
            "extra": "16467320 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - B/op",
            "value": 24,
            "unit": "B/op",
            "extra": "16467320 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "16467320 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath",
            "value": 3476,
            "unit": "ns/op\t    8431 B/op\t       3 allocs/op",
            "extra": "290997 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - ns/op",
            "value": 3476,
            "unit": "ns/op",
            "extra": "290997 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - B/op",
            "value": 8431,
            "unit": "B/op",
            "extra": "290997 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "290997 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush",
            "value": 2698,
            "unit": "ns/op\t     329 B/op\t       6 allocs/op",
            "extra": "451300 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - ns/op",
            "value": 2698,
            "unit": "ns/op",
            "extra": "451300 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - B/op",
            "value": 329,
            "unit": "B/op",
            "extra": "451300 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "451300 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame",
            "value": 1283,
            "unit": "ns/op\t   10917 B/op\t       1 allocs/op",
            "extra": "983028 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - ns/op",
            "value": 1283,
            "unit": "ns/op",
            "extra": "983028 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - B/op",
            "value": 10917,
            "unit": "B/op",
            "extra": "983028 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "983028 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip",
            "value": 204324,
            "unit": "ns/op\t 1707610 B/op\t     333 allocs/op",
            "extra": "5238 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - ns/op",
            "value": 204324,
            "unit": "ns/op",
            "extra": "5238 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - B/op",
            "value": 1707610,
            "unit": "B/op",
            "extra": "5238 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - allocs/op",
            "value": 333,
            "unit": "allocs/op",
            "extra": "5238 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo",
            "value": 870.9,
            "unit": "ns/op\t    5969 B/op\t       1 allocs/op",
            "extra": "1407601 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - ns/op",
            "value": 870.9,
            "unit": "ns/op",
            "extra": "1407601 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - B/op",
            "value": 5969,
            "unit": "B/op",
            "extra": "1407601 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1407601 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay",
            "value": 197.7,
            "unit": "ns/op\t     296 B/op\t       0 allocs/op",
            "extra": "5439669 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - ns/op",
            "value": 197.7,
            "unit": "ns/op",
            "extra": "5439669 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - B/op",
            "value": 296,
            "unit": "B/op",
            "extra": "5439669 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5439669 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick",
            "value": 1785,
            "unit": "ns/op\t    4183 B/op\t       0 allocs/op",
            "extra": "854404 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - ns/op",
            "value": 1785,
            "unit": "ns/op",
            "extra": "854404 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - B/op",
            "value": 4183,
            "unit": "B/op",
            "extra": "854404 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "854404 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest",
            "value": 30.35,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38396173 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - ns/op",
            "value": 30.35,
            "unit": "ns/op",
            "extra": "38396173 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "38396173 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "38396173 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/active_source",
            "value": 426.6,
            "unit": "ns/op\t     554 B/op\t       3 allocs/op",
            "extra": "2875018 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/active_source - ns/op",
            "value": 426.6,
            "unit": "ns/op",
            "extra": "2875018 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/active_source - B/op",
            "value": 554,
            "unit": "B/op",
            "extra": "2875018 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/active_source - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2875018 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/delta_only",
            "value": 574.7,
            "unit": "ns/op\t     231 B/op\t       3 allocs/op",
            "extra": "2196242 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/delta_only - ns/op",
            "value": 574.7,
            "unit": "ns/op",
            "extra": "2196242 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/delta_only - B/op",
            "value": 231,
            "unit": "B/op",
            "extra": "2196242 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/delta_only - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2196242 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/skipped_source",
            "value": 272,
            "unit": "ns/op\t     225 B/op\t       3 allocs/op",
            "extra": "4413273 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/skipped_source - ns/op",
            "value": 272,
            "unit": "ns/op",
            "extra": "4413273 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/skipped_source - B/op",
            "value": 225,
            "unit": "B/op",
            "extra": "4413273 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/skipped_source - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4413273 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/no_filter_all_recorded",
            "value": 396.5,
            "unit": "ns/op\t     554 B/op\t       3 allocs/op",
            "extra": "3006512 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/no_filter_all_recorded - ns/op",
            "value": 396.5,
            "unit": "ns/op",
            "extra": "3006512 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/no_filter_all_recorded - B/op",
            "value": 554,
            "unit": "B/op",
            "extra": "3006512 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/no_filter_all_recorded - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "3006512 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/trim_triggered",
            "value": 398,
            "unit": "ns/op\t     433 B/op\t       3 allocs/op",
            "extra": "2981563 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/trim_triggered - ns/op",
            "value": 398,
            "unit": "ns/op",
            "extra": "2981563 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/trim_triggered - B/op",
            "value": 433,
            "unit": "B/op",
            "extra": "2981563 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/trim_triggered - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2981563 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/realistic_1080p",
            "value": 4421,
            "unit": "ns/op\t    3443 B/op\t       3 allocs/op",
            "extra": "254360 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/realistic_1080p - ns/op",
            "value": 4421,
            "unit": "ns/op",
            "extra": "254360 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/realistic_1080p - B/op",
            "value": 3443,
            "unit": "B/op",
            "extra": "254360 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/realistic_1080p - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "254360 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/with_keyframe",
            "value": 67662,
            "unit": "ns/op\t  257876 B/op\t     151 allocs/op",
            "extra": "17960 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/with_keyframe - ns/op",
            "value": 67662,
            "unit": "ns/op",
            "extra": "17960 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/with_keyframe - B/op",
            "value": 257876,
            "unit": "B/op",
            "extra": "17960 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/with_keyframe - allocs/op",
            "value": 151,
            "unit": "allocs/op",
            "extra": "17960 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/no_keyframe",
            "value": 66387,
            "unit": "ns/op\t  257879 B/op\t     151 allocs/op",
            "extra": "17872 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/no_keyframe - ns/op",
            "value": 66387,
            "unit": "ns/op",
            "extra": "17872 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/no_keyframe - B/op",
            "value": 257879,
            "unit": "B/op",
            "extra": "17872 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/no_keyframe - allocs/op",
            "value": 151,
            "unit": "allocs/op",
            "extra": "17872 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode",
            "value": 8884,
            "unit": "ns/op\t   65777 B/op\t       5 allocs/op",
            "extra": "128486 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - ns/op",
            "value": 8884,
            "unit": "ns/op",
            "extra": "128486 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - B/op",
            "value": 65777,
            "unit": "B/op",
            "extra": "128486 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "128486 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p",
            "value": 55705,
            "unit": "ns/op\t24816.52 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "21523 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - ns/op",
            "value": 55705,
            "unit": "ns/op",
            "extra": "21523 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - MB/s",
            "value": 24816.52,
            "unit": "MB/s",
            "extra": "21523 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21523 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21523 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p",
            "value": 128129,
            "unit": "ns/op\t24275.48 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "9070 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - ns/op",
            "value": 128129,
            "unit": "ns/op",
            "extra": "9070 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - MB/s",
            "value": 24275.48,
            "unit": "MB/s",
            "extra": "9070 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9070 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9070 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p",
            "value": 22581584,
            "unit": "ns/op\t 137.74 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - ns/op",
            "value": 22581584,
            "unit": "ns/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - MB/s",
            "value": 137.74,
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
            "value": 22458206,
            "unit": "ns/op\t 138.50 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - ns/op",
            "value": 22458206,
            "unit": "ns/op",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - MB/s",
            "value": 138.5,
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
            "value": 251437,
            "unit": "ns/op\t12370.52 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "4532 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - ns/op",
            "value": 251437,
            "unit": "ns/op",
            "extra": "4532 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - MB/s",
            "value": 12370.52,
            "unit": "MB/s",
            "extra": "4532 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4532 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4532 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p",
            "value": 1679709,
            "unit": "ns/op\t1851.75 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "704 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - ns/op",
            "value": 1679709,
            "unit": "ns/op",
            "extra": "704 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - MB/s",
            "value": 1851.75,
            "unit": "MB/s",
            "extra": "704 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "704 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "704 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p",
            "value": 9223006,
            "unit": "ns/op\t 337.24 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "129 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - ns/op",
            "value": 9223006,
            "unit": "ns/op",
            "extra": "129 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - MB/s",
            "value": 337.24,
            "unit": "MB/s",
            "extra": "129 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "129 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "129 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p",
            "value": 47947,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25689 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - ns/op",
            "value": 47947,
            "unit": "ns/op",
            "extra": "25689 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "25689 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "25689 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p",
            "value": 1471824,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "814 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - ns/op",
            "value": 1471824,
            "unit": "ns/op",
            "extra": "814 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "814 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "814 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p",
            "value": 8983118,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p - ns/op",
            "value": 8983118,
            "unit": "ns/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K",
            "value": 707413,
            "unit": "ns/op\t17587.46 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1660 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - ns/op",
            "value": 707413,
            "unit": "ns/op",
            "extra": "1660 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - MB/s",
            "value": 17587.46,
            "unit": "MB/s",
            "extra": "1660 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1660 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1660 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K",
            "value": 90314795,
            "unit": "ns/op\t 137.76 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K - ns/op",
            "value": 90314795,
            "unit": "ns/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K - MB/s",
            "value": 137.76,
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
            "value": 91644986,
            "unit": "ns/op\t 135.76 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - ns/op",
            "value": 91644986,
            "unit": "ns/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - MB/s",
            "value": 135.76,
            "unit": "MB/s",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K",
            "value": 1278481,
            "unit": "ns/op\t9731.55 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "940 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - ns/op",
            "value": 1278481,
            "unit": "ns/op",
            "extra": "940 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - MB/s",
            "value": 9731.55,
            "unit": "MB/s",
            "extra": "940 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "940 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "940 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p",
            "value": 129421,
            "unit": "ns/op\t24033.25 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "8010 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - ns/op",
            "value": 129421,
            "unit": "ns/op",
            "extra": "8010 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - MB/s",
            "value": 24033.25,
            "unit": "MB/s",
            "extra": "8010 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8010 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8010 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p",
            "value": 15137261,
            "unit": "ns/op\t 136.99 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - ns/op",
            "value": 15137261,
            "unit": "ns/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - MB/s",
            "value": 136.99,
            "unit": "MB/s",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p",
            "value": 132802,
            "unit": "ns/op\t15614.17 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "7645 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - ns/op",
            "value": 132802,
            "unit": "ns/op",
            "extra": "7645 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - MB/s",
            "value": 15614.17,
            "unit": "MB/s",
            "extra": "7645 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7645 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7645 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D",
            "value": 49332,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24362 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - ns/op",
            "value": 49332,
            "unit": "ns/op",
            "extra": "24362 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "24362 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "24362 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D",
            "value": 1477505,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "812 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D - ns/op",
            "value": 1477505,
            "unit": "ns/op",
            "extra": "812 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "812 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "812 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel",
            "value": 8991533,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel - ns/op",
            "value": 8991533,
            "unit": "ns/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p",
            "value": 58.84,
            "unit": "ns/op\t16315.13 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "20463336 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - ns/op",
            "value": 58.84,
            "unit": "ns/op",
            "extra": "20463336 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - MB/s",
            "value": 16315.13,
            "unit": "MB/s",
            "extra": "20463336 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20463336 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20463336 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p",
            "value": 45713,
            "unit": "ns/op\t45361.24 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "26260 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - ns/op",
            "value": 45713,
            "unit": "ns/op",
            "extra": "26260 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - MB/s",
            "value": 45361.24,
            "unit": "MB/s",
            "extra": "26260 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "26260 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "26260 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920",
            "value": 6270,
            "unit": "ns/op\t 306.22 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "192039 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - ns/op",
            "value": 6270,
            "unit": "ns/op",
            "extra": "192039 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - MB/s",
            "value": 306.22,
            "unit": "MB/s",
            "extra": "192039 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "192039 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "192039 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p",
            "value": 10254907,
            "unit": "ns/op\t 303.31 MB/s\t   32768 B/op\t       3 allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p - ns/op",
            "value": 10254907,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p - MB/s",
            "value": 303.31,
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
            "value": 4569889,
            "unit": "ns/op\t 302.50 MB/s\t   20992 B/op\t       3 allocs/op",
            "extra": "262 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_1080pTo720p - ns/op",
            "value": 4569889,
            "unit": "ns/op",
            "extra": "262 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_1080pTo720p - MB/s",
            "value": 302.5,
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
            "value": 34921523,
            "unit": "ns/op\t  39.59 MB/s\t  259433 B/op\t       3 allocs/op",
            "extra": "32 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - ns/op",
            "value": 34921523,
            "unit": "ns/op",
            "extra": "32 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - MB/s",
            "value": 39.59,
            "unit": "MB/s",
            "extra": "32 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - B/op",
            "value": 259433,
            "unit": "B/op",
            "extra": "32 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "32 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080",
            "value": 33706206,
            "unit": "ns/op\t  92.28 MB/s\t  251573 B/op\t       3 allocs/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - ns/op",
            "value": 33706206,
            "unit": "ns/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - MB/s",
            "value": 92.28,
            "unit": "MB/s",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - B/op",
            "value": 251573,
            "unit": "B/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "33 times\n4 procs"
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
          "id": "66cfd44c2380cda8bb78cc2754845d76cd296ba5",
          "message": "Add Lanczos intermediate pool and kernel cache\n\nUpdate locking-and-concurrency docs to document Lanczos scaler resources: add `lanczosIntermPool` (scaler_lanczos.go) sized for 1080p float32 horizontal-pass intermediates (~5.5 MB) and a new \"Atomic Caches\" section describing `kernelCache` (scaler_lanczos.go) with 8 entries for precomputed Lanczos-3 kernel weights keyed by source/destination sizes. This clarifies the locks/caches used by the Lanczos scaler implementation.",
          "timestamp": "2026-03-08T00:49:50-05:00",
          "tree_id": "8b3850a19acce904030ac7011d67c158274eb4f2",
          "url": "https://github.com/zsiec/switchframe/commit/66cfd44c2380cda8bb78cc2754845d76cd296ba5"
        },
        "date": 1772949160339,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBiquadAfterSilence",
            "value": 6694,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "177828 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - ns/op",
            "value": 6694,
            "unit": "ns/op",
            "extra": "177828 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "177828 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "177828 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear",
            "value": 58.76,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20379330 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - ns/op",
            "value": 58.76,
            "unit": "ns/op",
            "extra": "20379330 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20379330 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20379330 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS",
            "value": 12.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "94057280 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - ns/op",
            "value": 12.71,
            "unit": "ns/op",
            "extra": "94057280 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "94057280 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "94057280 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples",
            "value": 1936,
            "unit": "ns/op\t4230.47 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "621760 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - ns/op",
            "value": 1936,
            "unit": "ns/op",
            "extra": "621760 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - MB/s",
            "value": 4230.47,
            "unit": "MB/s",
            "extra": "621760 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "621760 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "621760 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples",
            "value": 6173,
            "unit": "ns/op\t1327.09 MB/s\t    8199 B/op\t       1 allocs/op",
            "extra": "187688 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - ns/op",
            "value": 6173,
            "unit": "ns/op",
            "extra": "187688 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - MB/s",
            "value": 1327.09,
            "unit": "MB/s",
            "extra": "187688 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - B/op",
            "value": 8199,
            "unit": "B/op",
            "extra": "187688 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "187688 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048",
            "value": 168.2,
            "unit": "ns/op\t48705.38 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "7097721 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - ns/op",
            "value": 168.2,
            "unit": "ns/op",
            "extra": "7097721 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - MB/s",
            "value": 48705.38,
            "unit": "MB/s",
            "extra": "7097721 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7097721 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7097721 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048",
            "value": 127.7,
            "unit": "ns/op\t64158.82 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "9250501 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - ns/op",
            "value": 127.7,
            "unit": "ns/op",
            "extra": "9250501 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - MB/s",
            "value": 64158.82,
            "unit": "MB/s",
            "extra": "9250501 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9250501 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9250501 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048",
            "value": 434.4,
            "unit": "ns/op\t18858.27 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2717934 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - ns/op",
            "value": 434.4,
            "unit": "ns/op",
            "extra": "2717934 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - MB/s",
            "value": 18858.27,
            "unit": "MB/s",
            "extra": "2717934 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2717934 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2717934 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput",
            "value": 93971,
            "unit": "ns/op\t      42 B/op\t       3 allocs/op",
            "extra": "13521 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - ns/op",
            "value": 93971,
            "unit": "ns/op",
            "extra": "13521 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - B/op",
            "value": 42,
            "unit": "B/op",
            "extra": "13521 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "13521 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB",
            "value": 8251,
            "unit": "ns/op\t6211.38 MB/s\t   57344 B/op\t       1 allocs/op",
            "extra": "173617 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - ns/op",
            "value": 8251,
            "unit": "ns/op",
            "extra": "173617 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - MB/s",
            "value": 6211.38,
            "unit": "MB/s",
            "extra": "173617 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - B/op",
            "value": 57344,
            "unit": "B/op",
            "extra": "173617 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "173617 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1",
            "value": 59091,
            "unit": "ns/op\t 867.34 MB/s\t   57512 B/op\t       4 allocs/op",
            "extra": "20272 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - ns/op",
            "value": 59091,
            "unit": "ns/op",
            "extra": "20272 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - MB/s",
            "value": 867.34,
            "unit": "MB/s",
            "extra": "20272 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - B/op",
            "value": 57512,
            "unit": "B/op",
            "extra": "20272 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "20272 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into",
            "value": 50515,
            "unit": "ns/op\t1014.60 MB/s\t     168 B/op\t       3 allocs/op",
            "extra": "23798 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - ns/op",
            "value": 50515,
            "unit": "ns/op",
            "extra": "23798 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - MB/s",
            "value": 1014.6,
            "unit": "MB/s",
            "extra": "23798 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - B/op",
            "value": 168,
            "unit": "B/op",
            "extra": "23798 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "23798 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs",
            "value": 130.4,
            "unit": "ns/op\t393105.53 MB/s\t     168 B/op\t       3 allocs/op",
            "extra": "9019270 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - ns/op",
            "value": 130.4,
            "unit": "ns/op",
            "extra": "9019270 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - MB/s",
            "value": 393105.53,
            "unit": "MB/s",
            "extra": "9019270 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - B/op",
            "value": 168,
            "unit": "B/op",
            "extra": "9019270 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "9019270 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame",
            "value": 404.2,
            "unit": "ns/op\t5076.94 MB/s\t    2304 B/op\t       1 allocs/op",
            "extra": "2951904 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - ns/op",
            "value": 404.2,
            "unit": "ns/op",
            "extra": "2951904 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - MB/s",
            "value": 5076.94,
            "unit": "MB/s",
            "extra": "2951904 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - B/op",
            "value": 2304,
            "unit": "B/op",
            "extra": "2951904 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "2951904 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources",
            "value": 16553,
            "unit": "ns/op\t    8065 B/op\t      53 allocs/op",
            "extra": "72286 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - ns/op",
            "value": 16553,
            "unit": "ns/op",
            "extra": "72286 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - B/op",
            "value": 8065,
            "unit": "B/op",
            "extra": "72286 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "72286 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources",
            "value": 70812,
            "unit": "ns/op\t  57.02 MB/s\t    5392 B/op\t     129 allocs/op",
            "extra": "16862 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - ns/op",
            "value": 70812,
            "unit": "ns/op",
            "extra": "16862 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - MB/s",
            "value": 57.02,
            "unit": "MB/s",
            "extra": "16862 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - B/op",
            "value": 5392,
            "unit": "B/op",
            "extra": "16862 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "16862 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources",
            "value": 9667,
            "unit": "ns/op\t    4833 B/op\t      29 allocs/op",
            "extra": "122512 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - ns/op",
            "value": 9667,
            "unit": "ns/op",
            "extra": "122512 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - B/op",
            "value": 4833,
            "unit": "B/op",
            "extra": "122512 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "122512 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish",
            "value": 16708,
            "unit": "ns/op\t    8066 B/op\t      53 allocs/op",
            "extra": "71437 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - ns/op",
            "value": 16708,
            "unit": "ns/op",
            "extra": "71437 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - B/op",
            "value": 8066,
            "unit": "B/op",
            "extra": "71437 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "71437 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish",
            "value": 20228,
            "unit": "ns/op\t    8067 B/op\t      53 allocs/op",
            "extra": "59481 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - ns/op",
            "value": 20228,
            "unit": "ns/op",
            "extra": "59481 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - B/op",
            "value": 8067,
            "unit": "B/op",
            "extra": "59481 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "59481 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque",
            "value": 4091,
            "unit": "ns/op\t 469.30 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "290763 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - ns/op",
            "value": 4091,
            "unit": "ns/op",
            "extra": "290763 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - MB/s",
            "value": 469.3,
            "unit": "MB/s",
            "extra": "290763 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "290763 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "290763 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse",
            "value": 2155,
            "unit": "ns/op\t 891.02 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "557427 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - ns/op",
            "value": 2155,
            "unit": "ns/op",
            "extra": "557427 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - MB/s",
            "value": 891.02,
            "unit": "MB/s",
            "extra": "557427 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "557427 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "557427 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full",
            "value": 3606810,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "336 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full - ns/op",
            "value": 3606810,
            "unit": "ns/op",
            "extra": "336 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "336 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "336 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird",
            "value": 3568868,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird - ns/op",
            "value": 3568868,
            "unit": "ns/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p",
            "value": 638796,
            "unit": "ns/op\t 811.53 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1874 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - ns/op",
            "value": 638796,
            "unit": "ns/op",
            "extra": "1874 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - MB/s",
            "value": 811.53,
            "unit": "MB/s",
            "extra": "1874 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1874 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1874 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p",
            "value": 3866344,
            "unit": "ns/op\t 536.32 MB/s\t 2605065 B/op\t       2 allocs/op",
            "extra": "296 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - ns/op",
            "value": 3866344,
            "unit": "ns/op",
            "extra": "296 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - MB/s",
            "value": 536.32,
            "unit": "MB/s",
            "extra": "296 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - B/op",
            "value": 2605065,
            "unit": "B/op",
            "extra": "296 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "296 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p",
            "value": 3237187,
            "unit": "ns/op\t 640.56 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "369 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - ns/op",
            "value": 3237187,
            "unit": "ns/op",
            "extra": "369 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - MB/s",
            "value": 640.56,
            "unit": "MB/s",
            "extra": "369 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "369 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "369 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p",
            "value": 811887,
            "unit": "ns/op\t2554.05 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1472 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - ns/op",
            "value": 811887,
            "unit": "ns/op",
            "extra": "1472 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - MB/s",
            "value": 2554.05,
            "unit": "MB/s",
            "extra": "1472 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1472 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1472 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p",
            "value": 2465219,
            "unit": "ns/op\t 841.14 MB/s\t 2080774 B/op\t       1 allocs/op",
            "extra": "496 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - ns/op",
            "value": 2465219,
            "unit": "ns/op",
            "extra": "496 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - MB/s",
            "value": 841.14,
            "unit": "MB/s",
            "extra": "496 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - B/op",
            "value": 2080774,
            "unit": "B/op",
            "extra": "496 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "496 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p",
            "value": 21.05,
            "unit": "ns/op\t45607.93 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "57088620 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - ns/op",
            "value": 21.05,
            "unit": "ns/op",
            "extra": "57088620 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - MB/s",
            "value": 45607.93,
            "unit": "MB/s",
            "extra": "57088620 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57088620 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57088620 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p",
            "value": 2621,
            "unit": "ns/op\t1953.32 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "458263 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - ns/op",
            "value": 2621,
            "unit": "ns/op",
            "extra": "458263 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - MB/s",
            "value": 1953.32,
            "unit": "MB/s",
            "extra": "458263 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "458263 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "458263 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p",
            "value": 784.6,
            "unit": "ns/op\t6525.69 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1536874 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - ns/op",
            "value": 784.6,
            "unit": "ns/op",
            "extra": "1536874 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - MB/s",
            "value": 6525.69,
            "unit": "MB/s",
            "extra": "1536874 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1536874 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1536874 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p",
            "value": 3034557,
            "unit": "ns/op\t1822.21 MB/s\t 3117061 B/op\t       3 allocs/op",
            "extra": "388 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - ns/op",
            "value": 3034557,
            "unit": "ns/op",
            "extra": "388 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - MB/s",
            "value": 1822.21,
            "unit": "MB/s",
            "extra": "388 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - B/op",
            "value": 3117061,
            "unit": "B/op",
            "extra": "388 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "388 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p",
            "value": 2882744,
            "unit": "ns/op\t1918.17 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "415 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p - ns/op",
            "value": 2882744,
            "unit": "ns/op",
            "extra": "415 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p - MB/s",
            "value": 1918.17,
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
            "value": 1170572,
            "unit": "ns/op\t2657.16 MB/s\t 5529615 B/op\t       1 allocs/op",
            "extra": "1041 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - ns/op",
            "value": 1170572,
            "unit": "ns/op",
            "extra": "1041 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - MB/s",
            "value": 2657.16,
            "unit": "MB/s",
            "extra": "1041 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - B/op",
            "value": 5529615,
            "unit": "B/op",
            "extra": "1041 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1041 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p",
            "value": 887614,
            "unit": "ns/op\t3504.23 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1353 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - ns/op",
            "value": 887614,
            "unit": "ns/op",
            "extra": "1353 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - MB/s",
            "value": 3504.23,
            "unit": "MB/s",
            "extra": "1353 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1353 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1353 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p",
            "value": 4544421,
            "unit": "ns/op\t 684.44 MB/s\t 8646669 B/op\t       4 allocs/op",
            "extra": "260 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - ns/op",
            "value": 4544421,
            "unit": "ns/op",
            "extra": "260 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - MB/s",
            "value": 684.44,
            "unit": "MB/s",
            "extra": "260 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - B/op",
            "value": 8646669,
            "unit": "B/op",
            "extra": "260 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "260 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p",
            "value": 3773129,
            "unit": "ns/op\t 824.36 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "316 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - ns/op",
            "value": 3773129,
            "unit": "ns/op",
            "extra": "316 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - MB/s",
            "value": 824.36,
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
            "value": 73.75,
            "unit": "ns/op\t      24 B/op\t       1 allocs/op",
            "extra": "16266314 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - ns/op",
            "value": 73.75,
            "unit": "ns/op",
            "extra": "16266314 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - B/op",
            "value": 24,
            "unit": "B/op",
            "extra": "16266314 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "16266314 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath",
            "value": 3362,
            "unit": "ns/op\t    8419 B/op\t       3 allocs/op",
            "extra": "310399 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - ns/op",
            "value": 3362,
            "unit": "ns/op",
            "extra": "310399 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - B/op",
            "value": 8419,
            "unit": "B/op",
            "extra": "310399 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "310399 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush",
            "value": 2674,
            "unit": "ns/op\t     329 B/op\t       6 allocs/op",
            "extra": "439348 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - ns/op",
            "value": 2674,
            "unit": "ns/op",
            "extra": "439348 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - B/op",
            "value": 329,
            "unit": "B/op",
            "extra": "439348 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "439348 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame",
            "value": 1159,
            "unit": "ns/op\t   10911 B/op\t       1 allocs/op",
            "extra": "990748 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - ns/op",
            "value": 1159,
            "unit": "ns/op",
            "extra": "990748 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - B/op",
            "value": 10911,
            "unit": "B/op",
            "extra": "990748 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "990748 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip",
            "value": 209625,
            "unit": "ns/op\t 1707611 B/op\t     333 allocs/op",
            "extra": "5419 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - ns/op",
            "value": 209625,
            "unit": "ns/op",
            "extra": "5419 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - B/op",
            "value": 1707611,
            "unit": "B/op",
            "extra": "5419 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - allocs/op",
            "value": 333,
            "unit": "allocs/op",
            "extra": "5419 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo",
            "value": 820,
            "unit": "ns/op\t    5991 B/op\t       1 allocs/op",
            "extra": "1354291 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - ns/op",
            "value": 820,
            "unit": "ns/op",
            "extra": "1354291 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - B/op",
            "value": 5991,
            "unit": "B/op",
            "extra": "1354291 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1354291 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay",
            "value": 298.6,
            "unit": "ns/op\t     283 B/op\t       0 allocs/op",
            "extra": "3649449 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - ns/op",
            "value": 298.6,
            "unit": "ns/op",
            "extra": "3649449 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - B/op",
            "value": 283,
            "unit": "B/op",
            "extra": "3649449 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3649449 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick",
            "value": 1835,
            "unit": "ns/op\t    4351 B/op\t       0 allocs/op",
            "extra": "656820 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - ns/op",
            "value": 1835,
            "unit": "ns/op",
            "extra": "656820 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - B/op",
            "value": 4351,
            "unit": "B/op",
            "extra": "656820 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "656820 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest",
            "value": 39.18,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "30240693 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - ns/op",
            "value": 39.18,
            "unit": "ns/op",
            "extra": "30240693 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "30240693 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "30240693 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/active_source",
            "value": 410.8,
            "unit": "ns/op\t     554 B/op\t       3 allocs/op",
            "extra": "2915601 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/active_source - ns/op",
            "value": 410.8,
            "unit": "ns/op",
            "extra": "2915601 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/active_source - B/op",
            "value": 554,
            "unit": "B/op",
            "extra": "2915601 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/active_source - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2915601 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/delta_only",
            "value": 549.5,
            "unit": "ns/op\t     232 B/op\t       3 allocs/op",
            "extra": "2197213 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/delta_only - ns/op",
            "value": 549.5,
            "unit": "ns/op",
            "extra": "2197213 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/delta_only - B/op",
            "value": 232,
            "unit": "B/op",
            "extra": "2197213 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/delta_only - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2197213 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/skipped_source",
            "value": 276.7,
            "unit": "ns/op\t     225 B/op\t       3 allocs/op",
            "extra": "4347386 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/skipped_source - ns/op",
            "value": 276.7,
            "unit": "ns/op",
            "extra": "4347386 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/skipped_source - B/op",
            "value": 225,
            "unit": "B/op",
            "extra": "4347386 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/skipped_source - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4347386 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/no_filter_all_recorded",
            "value": 410.6,
            "unit": "ns/op\t     554 B/op\t       3 allocs/op",
            "extra": "2984941 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/no_filter_all_recorded - ns/op",
            "value": 410.6,
            "unit": "ns/op",
            "extra": "2984941 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/no_filter_all_recorded - B/op",
            "value": 554,
            "unit": "B/op",
            "extra": "2984941 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/no_filter_all_recorded - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2984941 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/trim_triggered",
            "value": 396.6,
            "unit": "ns/op\t     433 B/op\t       3 allocs/op",
            "extra": "3043690 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/trim_triggered - ns/op",
            "value": 396.6,
            "unit": "ns/op",
            "extra": "3043690 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/trim_triggered - B/op",
            "value": 433,
            "unit": "B/op",
            "extra": "3043690 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/trim_triggered - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "3043690 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/realistic_1080p",
            "value": 4479,
            "unit": "ns/op\t    3430 B/op\t       3 allocs/op",
            "extra": "255628 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/realistic_1080p - ns/op",
            "value": 4479,
            "unit": "ns/op",
            "extra": "255628 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/realistic_1080p - B/op",
            "value": 3430,
            "unit": "B/op",
            "extra": "255628 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/realistic_1080p - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "255628 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/with_keyframe",
            "value": 67934,
            "unit": "ns/op\t  257867 B/op\t     151 allocs/op",
            "extra": "17600 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/with_keyframe - ns/op",
            "value": 67934,
            "unit": "ns/op",
            "extra": "17600 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/with_keyframe - B/op",
            "value": 257867,
            "unit": "B/op",
            "extra": "17600 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/with_keyframe - allocs/op",
            "value": 151,
            "unit": "allocs/op",
            "extra": "17600 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/no_keyframe",
            "value": 67314,
            "unit": "ns/op\t  257872 B/op\t     151 allocs/op",
            "extra": "17541 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/no_keyframe - ns/op",
            "value": 67314,
            "unit": "ns/op",
            "extra": "17541 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/no_keyframe - B/op",
            "value": 257872,
            "unit": "B/op",
            "extra": "17541 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/no_keyframe - allocs/op",
            "value": 151,
            "unit": "allocs/op",
            "extra": "17541 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode",
            "value": 8678,
            "unit": "ns/op\t   65777 B/op\t       5 allocs/op",
            "extra": "136135 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - ns/op",
            "value": 8678,
            "unit": "ns/op",
            "extra": "136135 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - B/op",
            "value": 65777,
            "unit": "B/op",
            "extra": "136135 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "136135 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p",
            "value": 55989,
            "unit": "ns/op\t24690.39 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "21616 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - ns/op",
            "value": 55989,
            "unit": "ns/op",
            "extra": "21616 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - MB/s",
            "value": 24690.39,
            "unit": "MB/s",
            "extra": "21616 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21616 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21616 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p",
            "value": 127896,
            "unit": "ns/op\t24319.73 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "9350 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - ns/op",
            "value": 127896,
            "unit": "ns/op",
            "extra": "9350 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - MB/s",
            "value": 24319.73,
            "unit": "MB/s",
            "extra": "9350 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9350 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9350 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p",
            "value": 22789506,
            "unit": "ns/op\t 136.48 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - ns/op",
            "value": 22789506,
            "unit": "ns/op",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - MB/s",
            "value": 136.48,
            "unit": "MB/s",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p",
            "value": 22588548,
            "unit": "ns/op\t 137.70 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - ns/op",
            "value": 22588548,
            "unit": "ns/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - MB/s",
            "value": 137.7,
            "unit": "MB/s",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p",
            "value": 247673,
            "unit": "ns/op\t12558.48 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "4742 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - ns/op",
            "value": 247673,
            "unit": "ns/op",
            "extra": "4742 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - MB/s",
            "value": 12558.48,
            "unit": "MB/s",
            "extra": "4742 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4742 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4742 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p",
            "value": 1679413,
            "unit": "ns/op\t1852.08 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "706 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - ns/op",
            "value": 1679413,
            "unit": "ns/op",
            "extra": "706 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - MB/s",
            "value": 1852.08,
            "unit": "MB/s",
            "extra": "706 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "706 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "706 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p",
            "value": 9217034,
            "unit": "ns/op\t 337.46 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "129 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - ns/op",
            "value": 9217034,
            "unit": "ns/op",
            "extra": "129 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - MB/s",
            "value": 337.46,
            "unit": "MB/s",
            "extra": "129 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "129 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "129 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p",
            "value": 48472,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25928 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - ns/op",
            "value": 48472,
            "unit": "ns/op",
            "extra": "25928 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "25928 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "25928 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p",
            "value": 1471715,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "812 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - ns/op",
            "value": 1471715,
            "unit": "ns/op",
            "extra": "812 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "812 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "812 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p",
            "value": 8977659,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p - ns/op",
            "value": 8977659,
            "unit": "ns/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K",
            "value": 680340,
            "unit": "ns/op\t18287.33 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1752 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - ns/op",
            "value": 680340,
            "unit": "ns/op",
            "extra": "1752 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - MB/s",
            "value": 18287.33,
            "unit": "MB/s",
            "extra": "1752 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1752 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1752 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K",
            "value": 90842678,
            "unit": "ns/op\t 136.96 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K - ns/op",
            "value": 90842678,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K - MB/s",
            "value": 136.96,
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
            "value": 91970558,
            "unit": "ns/op\t 135.28 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - ns/op",
            "value": 91970558,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - MB/s",
            "value": 135.28,
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
            "value": 1254200,
            "unit": "ns/op\t9919.95 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "952 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - ns/op",
            "value": 1254200,
            "unit": "ns/op",
            "extra": "952 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - MB/s",
            "value": 9919.95,
            "unit": "MB/s",
            "extra": "952 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "952 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "952 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p",
            "value": 128415,
            "unit": "ns/op\t24221.44 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "8443 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - ns/op",
            "value": 128415,
            "unit": "ns/op",
            "extra": "8443 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - MB/s",
            "value": 24221.44,
            "unit": "MB/s",
            "extra": "8443 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8443 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8443 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p",
            "value": 15058570,
            "unit": "ns/op\t 137.70 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - ns/op",
            "value": 15058570,
            "unit": "ns/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - MB/s",
            "value": 137.7,
            "unit": "MB/s",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p",
            "value": 132427,
            "unit": "ns/op\t15658.45 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "8882 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - ns/op",
            "value": 132427,
            "unit": "ns/op",
            "extra": "8882 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - MB/s",
            "value": 15658.45,
            "unit": "MB/s",
            "extra": "8882 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8882 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8882 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D",
            "value": 51408,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23383 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - ns/op",
            "value": 51408,
            "unit": "ns/op",
            "extra": "23383 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "23383 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "23383 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D",
            "value": 1472433,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "816 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D - ns/op",
            "value": 1472433,
            "unit": "ns/op",
            "extra": "816 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "816 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "816 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel",
            "value": 8986477,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel - ns/op",
            "value": 8986477,
            "unit": "ns/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p",
            "value": 58.63,
            "unit": "ns/op\t16373.11 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "20433852 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - ns/op",
            "value": 58.63,
            "unit": "ns/op",
            "extra": "20433852 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - MB/s",
            "value": 16373.11,
            "unit": "MB/s",
            "extra": "20433852 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20433852 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20433852 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p",
            "value": 45634,
            "unit": "ns/op\t45439.47 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "26222 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - ns/op",
            "value": 45634,
            "unit": "ns/op",
            "extra": "26222 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - MB/s",
            "value": 45439.47,
            "unit": "MB/s",
            "extra": "26222 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "26222 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "26222 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920",
            "value": 6274,
            "unit": "ns/op\t 306.03 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "191187 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - ns/op",
            "value": 6274,
            "unit": "ns/op",
            "extra": "191187 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - MB/s",
            "value": 306.03,
            "unit": "MB/s",
            "extra": "191187 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "191187 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "191187 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p",
            "value": 10248862,
            "unit": "ns/op\t 303.49 MB/s\t   32768 B/op\t       3 allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p - ns/op",
            "value": 10248862,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p - MB/s",
            "value": 303.49,
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
            "value": 4567608,
            "unit": "ns/op\t 302.65 MB/s\t   20992 B/op\t       3 allocs/op",
            "extra": "261 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_1080pTo720p - ns/op",
            "value": 4567608,
            "unit": "ns/op",
            "extra": "261 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_1080pTo720p - MB/s",
            "value": 302.65,
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
            "value": 34890657,
            "unit": "ns/op\t  39.62 MB/s\t      88 B/op\t       3 allocs/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - ns/op",
            "value": 34890657,
            "unit": "ns/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - MB/s",
            "value": 39.62,
            "unit": "MB/s",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - B/op",
            "value": 88,
            "unit": "B/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080",
            "value": 33775700,
            "unit": "ns/op\t  92.09 MB/s\t  251573 B/op\t       3 allocs/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - ns/op",
            "value": 33775700,
            "unit": "ns/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - MB/s",
            "value": 92.09,
            "unit": "MB/s",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - B/op",
            "value": 251573,
            "unit": "B/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "33 times\n4 procs"
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
          "id": "aadd3240c4162dd246aae55d7acafcd613aff527",
          "message": "Revise architecture diagrams and routing docs\n\nExpand and clarify the system architecture diagrams and frame routing behavior in README.md and docs/architecture.md. Changes include:\n\n- Replace simplified server diagram with a detailed mermaid graph: per-source relays, sourceViewer/replayViewer, replay buffers, ingest paths (MXL sources), and explicit routing.\n- Introduce a Switching Engine with separate video and audio paths (handleVideoFrame / handleAudioFrame), GOP cache, transition engine, IDR gate, encoders, program relay, MXL shared memory, muxer/recording/SRT outputs, and browser relays.\n- Add FrameSynchronizer and per-source delayBuffer routing (mutually exclusive) and route both audio and video through the same path to keep media synchronized.\n- Clarify that enabling frame sync bypasses delay buffers (set to nil) and that delayBuffer handles video, audio, and captions for lip-sync correction.\n- Minor renames/labeling updates (hvf/haf, programRelay, operator UI labels) and improved browser ↔ server connection labels (MoQ/WebTransport and REST/HTTP3).\n\nThese updates make the architecture more explicit and document routing/synchronization semantics for implementers.",
          "timestamp": "2026-03-08T01:24:05-05:00",
          "tree_id": "5161725c88afda5eb89fda4234a2708397f8f2ee",
          "url": "https://github.com/zsiec/switchframe/commit/aadd3240c4162dd246aae55d7acafcd613aff527"
        },
        "date": 1772951219613,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBiquadAfterSilence",
            "value": 6713,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "152542 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - ns/op",
            "value": 6713,
            "unit": "ns/op",
            "extra": "152542 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "152542 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "152542 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear",
            "value": 58.91,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20384432 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - ns/op",
            "value": 58.91,
            "unit": "ns/op",
            "extra": "20384432 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20384432 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20384432 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS",
            "value": 12.68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "93970824 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - ns/op",
            "value": 12.68,
            "unit": "ns/op",
            "extra": "93970824 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "93970824 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "93970824 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples",
            "value": 1949,
            "unit": "ns/op\t4202.55 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "622818 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - ns/op",
            "value": 1949,
            "unit": "ns/op",
            "extra": "622818 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - MB/s",
            "value": 4202.55,
            "unit": "MB/s",
            "extra": "622818 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "622818 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "622818 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples",
            "value": 7160,
            "unit": "ns/op\t1144.15 MB/s\t    8199 B/op\t       1 allocs/op",
            "extra": "188113 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - ns/op",
            "value": 7160,
            "unit": "ns/op",
            "extra": "188113 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - MB/s",
            "value": 1144.15,
            "unit": "MB/s",
            "extra": "188113 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - B/op",
            "value": 8199,
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
            "name": "BenchmarkAddFloat32_2048",
            "value": 168.2,
            "unit": "ns/op\t48700.47 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "7138554 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - ns/op",
            "value": 168.2,
            "unit": "ns/op",
            "extra": "7138554 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - MB/s",
            "value": 48700.47,
            "unit": "MB/s",
            "extra": "7138554 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7138554 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7138554 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048",
            "value": 127.3,
            "unit": "ns/op\t64376.58 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "8975364 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - ns/op",
            "value": 127.3,
            "unit": "ns/op",
            "extra": "8975364 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - MB/s",
            "value": 64376.58,
            "unit": "MB/s",
            "extra": "8975364 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8975364 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8975364 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048",
            "value": 434.1,
            "unit": "ns/op\t18872.13 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2768248 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - ns/op",
            "value": 434.1,
            "unit": "ns/op",
            "extra": "2768248 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - MB/s",
            "value": 18872.13,
            "unit": "MB/s",
            "extra": "2768248 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2768248 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2768248 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput",
            "value": 90712,
            "unit": "ns/op\t      42 B/op\t       3 allocs/op",
            "extra": "13334 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - ns/op",
            "value": 90712,
            "unit": "ns/op",
            "extra": "13334 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - B/op",
            "value": 42,
            "unit": "B/op",
            "extra": "13334 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "13334 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB",
            "value": 9515,
            "unit": "ns/op\t5386.56 MB/s\t   57344 B/op\t       1 allocs/op",
            "extra": "163546 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - ns/op",
            "value": 9515,
            "unit": "ns/op",
            "extra": "163546 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - MB/s",
            "value": 5386.56,
            "unit": "MB/s",
            "extra": "163546 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - B/op",
            "value": 57344,
            "unit": "B/op",
            "extra": "163546 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "163546 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1",
            "value": 60084,
            "unit": "ns/op\t 853.01 MB/s\t   57512 B/op\t       4 allocs/op",
            "extra": "19995 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - ns/op",
            "value": 60084,
            "unit": "ns/op",
            "extra": "19995 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - MB/s",
            "value": 853.01,
            "unit": "MB/s",
            "extra": "19995 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - B/op",
            "value": 57512,
            "unit": "B/op",
            "extra": "19995 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "19995 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into",
            "value": 50461,
            "unit": "ns/op\t1015.68 MB/s\t     168 B/op\t       3 allocs/op",
            "extra": "23720 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - ns/op",
            "value": 50461,
            "unit": "ns/op",
            "extra": "23720 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - MB/s",
            "value": 1015.68,
            "unit": "MB/s",
            "extra": "23720 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - B/op",
            "value": 168,
            "unit": "B/op",
            "extra": "23720 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "23720 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs",
            "value": 130.1,
            "unit": "ns/op\t394022.87 MB/s\t     168 B/op\t       3 allocs/op",
            "extra": "8951908 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - ns/op",
            "value": 130.1,
            "unit": "ns/op",
            "extra": "8951908 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - MB/s",
            "value": 394022.87,
            "unit": "MB/s",
            "extra": "8951908 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - B/op",
            "value": 168,
            "unit": "B/op",
            "extra": "8951908 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "8951908 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame",
            "value": 428.6,
            "unit": "ns/op\t4787.39 MB/s\t    2304 B/op\t       1 allocs/op",
            "extra": "2787618 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - ns/op",
            "value": 428.6,
            "unit": "ns/op",
            "extra": "2787618 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - MB/s",
            "value": 4787.39,
            "unit": "MB/s",
            "extra": "2787618 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - B/op",
            "value": 2304,
            "unit": "B/op",
            "extra": "2787618 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "2787618 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources",
            "value": 16583,
            "unit": "ns/op\t    8065 B/op\t      53 allocs/op",
            "extra": "72181 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - ns/op",
            "value": 16583,
            "unit": "ns/op",
            "extra": "72181 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - B/op",
            "value": 8065,
            "unit": "B/op",
            "extra": "72181 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "72181 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources",
            "value": 72645,
            "unit": "ns/op\t  55.59 MB/s\t    5392 B/op\t     129 allocs/op",
            "extra": "17017 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - ns/op",
            "value": 72645,
            "unit": "ns/op",
            "extra": "17017 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - MB/s",
            "value": 55.59,
            "unit": "MB/s",
            "extra": "17017 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - B/op",
            "value": 5392,
            "unit": "B/op",
            "extra": "17017 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "17017 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources",
            "value": 9939,
            "unit": "ns/op\t    4833 B/op\t      29 allocs/op",
            "extra": "121202 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - ns/op",
            "value": 9939,
            "unit": "ns/op",
            "extra": "121202 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - B/op",
            "value": 4833,
            "unit": "B/op",
            "extra": "121202 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "121202 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish",
            "value": 16663,
            "unit": "ns/op\t    8066 B/op\t      53 allocs/op",
            "extra": "71677 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - ns/op",
            "value": 16663,
            "unit": "ns/op",
            "extra": "71677 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - B/op",
            "value": 8066,
            "unit": "B/op",
            "extra": "71677 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "71677 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish",
            "value": 20534,
            "unit": "ns/op\t    8067 B/op\t      53 allocs/op",
            "extra": "58608 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - ns/op",
            "value": 20534,
            "unit": "ns/op",
            "extra": "58608 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - B/op",
            "value": 8067,
            "unit": "B/op",
            "extra": "58608 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "58608 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque",
            "value": 4117,
            "unit": "ns/op\t 466.31 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "292473 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - ns/op",
            "value": 4117,
            "unit": "ns/op",
            "extra": "292473 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - MB/s",
            "value": 466.31,
            "unit": "MB/s",
            "extra": "292473 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "292473 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "292473 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse",
            "value": 2153,
            "unit": "ns/op\t 891.73 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "556778 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - ns/op",
            "value": 2153,
            "unit": "ns/op",
            "extra": "556778 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - MB/s",
            "value": 891.73,
            "unit": "MB/s",
            "extra": "556778 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "556778 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "556778 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full",
            "value": 3572333,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full - ns/op",
            "value": 3572333,
            "unit": "ns/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird",
            "value": 3600571,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "336 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird - ns/op",
            "value": 3600571,
            "unit": "ns/op",
            "extra": "336 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "336 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "336 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p",
            "value": 666894,
            "unit": "ns/op\t 777.33 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1867 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - ns/op",
            "value": 666894,
            "unit": "ns/op",
            "extra": "1867 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - MB/s",
            "value": 777.33,
            "unit": "MB/s",
            "extra": "1867 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1867 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1867 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p",
            "value": 4034728,
            "unit": "ns/op\t 513.94 MB/s\t 2605082 B/op\t       2 allocs/op",
            "extra": "300 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - ns/op",
            "value": 4034728,
            "unit": "ns/op",
            "extra": "300 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - MB/s",
            "value": 513.94,
            "unit": "MB/s",
            "extra": "300 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - B/op",
            "value": 2605082,
            "unit": "B/op",
            "extra": "300 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "300 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p",
            "value": 3257752,
            "unit": "ns/op\t 636.51 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "362 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - ns/op",
            "value": 3257752,
            "unit": "ns/op",
            "extra": "362 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - MB/s",
            "value": 636.51,
            "unit": "MB/s",
            "extra": "362 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "362 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "362 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p",
            "value": 812689,
            "unit": "ns/op\t2551.53 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1477 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - ns/op",
            "value": 812689,
            "unit": "ns/op",
            "extra": "1477 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - MB/s",
            "value": 2551.53,
            "unit": "MB/s",
            "extra": "1477 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1477 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1477 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p",
            "value": 2352400,
            "unit": "ns/op\t 881.48 MB/s\t 2080775 B/op\t       1 allocs/op",
            "extra": "576 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - ns/op",
            "value": 2352400,
            "unit": "ns/op",
            "extra": "576 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - MB/s",
            "value": 881.48,
            "unit": "MB/s",
            "extra": "576 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - B/op",
            "value": 2080775,
            "unit": "B/op",
            "extra": "576 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "576 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p",
            "value": 20.89,
            "unit": "ns/op\t45953.49 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "55748994 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - ns/op",
            "value": 20.89,
            "unit": "ns/op",
            "extra": "55748994 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - MB/s",
            "value": 45953.49,
            "unit": "MB/s",
            "extra": "55748994 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "55748994 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "55748994 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p",
            "value": 2622,
            "unit": "ns/op\t1953.03 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "456682 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - ns/op",
            "value": 2622,
            "unit": "ns/op",
            "extra": "456682 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - MB/s",
            "value": 1953.03,
            "unit": "MB/s",
            "extra": "456682 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "456682 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "456682 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p",
            "value": 780.5,
            "unit": "ns/op\t6559.61 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1533673 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - ns/op",
            "value": 780.5,
            "unit": "ns/op",
            "extra": "1533673 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - MB/s",
            "value": 6559.61,
            "unit": "MB/s",
            "extra": "1533673 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1533673 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1533673 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p",
            "value": 3136196,
            "unit": "ns/op\t1763.15 MB/s\t 3117063 B/op\t       3 allocs/op",
            "extra": "380 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - ns/op",
            "value": 3136196,
            "unit": "ns/op",
            "extra": "380 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - MB/s",
            "value": 1763.15,
            "unit": "MB/s",
            "extra": "380 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - B/op",
            "value": 3117063,
            "unit": "B/op",
            "extra": "380 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "380 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p",
            "value": 2883597,
            "unit": "ns/op\t1917.61 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "415 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p - ns/op",
            "value": 2883597,
            "unit": "ns/op",
            "extra": "415 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p - MB/s",
            "value": 1917.61,
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
            "value": 1135549,
            "unit": "ns/op\t2739.12 MB/s\t 5529605 B/op\t       1 allocs/op",
            "extra": "1021 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - ns/op",
            "value": 1135549,
            "unit": "ns/op",
            "extra": "1021 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - MB/s",
            "value": 2739.12,
            "unit": "MB/s",
            "extra": "1021 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - B/op",
            "value": 5529605,
            "unit": "B/op",
            "extra": "1021 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1021 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p",
            "value": 888644,
            "unit": "ns/op\t3500.16 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1352 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - ns/op",
            "value": 888644,
            "unit": "ns/op",
            "extra": "1352 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - MB/s",
            "value": 3500.16,
            "unit": "MB/s",
            "extra": "1352 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1352 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1352 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p",
            "value": 4550830,
            "unit": "ns/op\t 683.48 MB/s\t 8646673 B/op\t       4 allocs/op",
            "extra": "261 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - ns/op",
            "value": 4550830,
            "unit": "ns/op",
            "extra": "261 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - MB/s",
            "value": 683.48,
            "unit": "MB/s",
            "extra": "261 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - B/op",
            "value": 8646673,
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
            "value": 3777862,
            "unit": "ns/op\t 823.32 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "316 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - ns/op",
            "value": 3777862,
            "unit": "ns/op",
            "extra": "316 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - MB/s",
            "value": 823.32,
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
            "value": 73.8,
            "unit": "ns/op\t      24 B/op\t       1 allocs/op",
            "extra": "16523250 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - ns/op",
            "value": 73.8,
            "unit": "ns/op",
            "extra": "16523250 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - B/op",
            "value": 24,
            "unit": "B/op",
            "extra": "16523250 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "16523250 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath",
            "value": 3396,
            "unit": "ns/op\t    8415 B/op\t       3 allocs/op",
            "extra": "317796 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - ns/op",
            "value": 3396,
            "unit": "ns/op",
            "extra": "317796 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - B/op",
            "value": 8415,
            "unit": "B/op",
            "extra": "317796 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "317796 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush",
            "value": 2681,
            "unit": "ns/op\t     329 B/op\t       6 allocs/op",
            "extra": "453651 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - ns/op",
            "value": 2681,
            "unit": "ns/op",
            "extra": "453651 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - B/op",
            "value": 329,
            "unit": "B/op",
            "extra": "453651 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "453651 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame",
            "value": 1211,
            "unit": "ns/op\t   10941 B/op\t       1 allocs/op",
            "extra": "948632 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - ns/op",
            "value": 1211,
            "unit": "ns/op",
            "extra": "948632 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - B/op",
            "value": 10941,
            "unit": "B/op",
            "extra": "948632 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "948632 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip",
            "value": 206735,
            "unit": "ns/op\t 1707611 B/op\t     333 allocs/op",
            "extra": "5233 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - ns/op",
            "value": 206735,
            "unit": "ns/op",
            "extra": "5233 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - B/op",
            "value": 1707611,
            "unit": "B/op",
            "extra": "5233 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - allocs/op",
            "value": 333,
            "unit": "allocs/op",
            "extra": "5233 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo",
            "value": 890,
            "unit": "ns/op\t    6002 B/op\t       1 allocs/op",
            "extra": "1330902 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - ns/op",
            "value": 890,
            "unit": "ns/op",
            "extra": "1330902 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - B/op",
            "value": 6002,
            "unit": "B/op",
            "extra": "1330902 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1330902 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay",
            "value": 289.7,
            "unit": "ns/op\t     289 B/op\t       0 allocs/op",
            "extra": "3572498 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - ns/op",
            "value": 289.7,
            "unit": "ns/op",
            "extra": "3572498 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - B/op",
            "value": 289,
            "unit": "B/op",
            "extra": "3572498 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3572498 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick",
            "value": 2244,
            "unit": "ns/op\t    4866 B/op\t       0 allocs/op",
            "extra": "587239 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - ns/op",
            "value": 2244,
            "unit": "ns/op",
            "extra": "587239 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - B/op",
            "value": 4866,
            "unit": "B/op",
            "extra": "587239 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "587239 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest",
            "value": 30.32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38967039 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - ns/op",
            "value": 30.32,
            "unit": "ns/op",
            "extra": "38967039 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "38967039 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "38967039 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/active_source",
            "value": 442.8,
            "unit": "ns/op\t     554 B/op\t       3 allocs/op",
            "extra": "2612436 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/active_source - ns/op",
            "value": 442.8,
            "unit": "ns/op",
            "extra": "2612436 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/active_source - B/op",
            "value": 554,
            "unit": "B/op",
            "extra": "2612436 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/active_source - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2612436 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/delta_only",
            "value": 580.4,
            "unit": "ns/op\t     232 B/op\t       3 allocs/op",
            "extra": "2075966 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/delta_only - ns/op",
            "value": 580.4,
            "unit": "ns/op",
            "extra": "2075966 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/delta_only - B/op",
            "value": 232,
            "unit": "B/op",
            "extra": "2075966 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/delta_only - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2075966 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/skipped_source",
            "value": 286.2,
            "unit": "ns/op\t     225 B/op\t       3 allocs/op",
            "extra": "4237459 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/skipped_source - ns/op",
            "value": 286.2,
            "unit": "ns/op",
            "extra": "4237459 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/skipped_source - B/op",
            "value": 225,
            "unit": "B/op",
            "extra": "4237459 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/skipped_source - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4237459 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/no_filter_all_recorded",
            "value": 418.6,
            "unit": "ns/op\t     554 B/op\t       3 allocs/op",
            "extra": "2917177 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/no_filter_all_recorded - ns/op",
            "value": 418.6,
            "unit": "ns/op",
            "extra": "2917177 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/no_filter_all_recorded - B/op",
            "value": 554,
            "unit": "B/op",
            "extra": "2917177 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/no_filter_all_recorded - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2917177 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/trim_triggered",
            "value": 402.8,
            "unit": "ns/op\t     433 B/op\t       3 allocs/op",
            "extra": "2834589 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/trim_triggered - ns/op",
            "value": 402.8,
            "unit": "ns/op",
            "extra": "2834589 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/trim_triggered - B/op",
            "value": 433,
            "unit": "B/op",
            "extra": "2834589 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/trim_triggered - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "2834589 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/realistic_1080p",
            "value": 4858,
            "unit": "ns/op\t    3438 B/op\t       3 allocs/op",
            "extra": "227251 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/realistic_1080p - ns/op",
            "value": 4858,
            "unit": "ns/op",
            "extra": "227251 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/realistic_1080p - B/op",
            "value": 3438,
            "unit": "B/op",
            "extra": "227251 times\n4 procs"
          },
          {
            "name": "BenchmarkGOPCacheRecordFrame/realistic_1080p - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "227251 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/with_keyframe",
            "value": 84246,
            "unit": "ns/op\t  257794 B/op\t     151 allocs/op",
            "extra": "14323 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/with_keyframe - ns/op",
            "value": 84246,
            "unit": "ns/op",
            "extra": "14323 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/with_keyframe - B/op",
            "value": 257794,
            "unit": "B/op",
            "extra": "14323 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/with_keyframe - allocs/op",
            "value": 151,
            "unit": "allocs/op",
            "extra": "14323 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/no_keyframe",
            "value": 85791,
            "unit": "ns/op\t  257788 B/op\t     151 allocs/op",
            "extra": "14467 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/no_keyframe - ns/op",
            "value": 85791,
            "unit": "ns/op",
            "extra": "14467 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/no_keyframe - B/op",
            "value": 257788,
            "unit": "B/op",
            "extra": "14467 times\n4 procs"
          },
          {
            "name": "BenchmarkTrimCache/no_keyframe - allocs/op",
            "value": 151,
            "unit": "allocs/op",
            "extra": "14467 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode",
            "value": 14151,
            "unit": "ns/op\t   65777 B/op\t       5 allocs/op",
            "extra": "79328 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - ns/op",
            "value": 14151,
            "unit": "ns/op",
            "extra": "79328 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - B/op",
            "value": 65777,
            "unit": "B/op",
            "extra": "79328 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "79328 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p",
            "value": 71862,
            "unit": "ns/op\t19236.81 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "17166 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - ns/op",
            "value": 71862,
            "unit": "ns/op",
            "extra": "17166 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - MB/s",
            "value": 19236.81,
            "unit": "MB/s",
            "extra": "17166 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17166 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17166 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p",
            "value": 159642,
            "unit": "ns/op\t19483.59 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "7503 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - ns/op",
            "value": 159642,
            "unit": "ns/op",
            "extra": "7503 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - MB/s",
            "value": 19483.59,
            "unit": "MB/s",
            "extra": "7503 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7503 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7503 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p",
            "value": 22828304,
            "unit": "ns/op\t 136.25 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - ns/op",
            "value": 22828304,
            "unit": "ns/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - MB/s",
            "value": 136.25,
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
            "value": 22599209,
            "unit": "ns/op\t 137.63 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - ns/op",
            "value": 22599209,
            "unit": "ns/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - MB/s",
            "value": 137.63,
            "unit": "MB/s",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p",
            "value": 268384,
            "unit": "ns/op\t11589.37 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "4296 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - ns/op",
            "value": 268384,
            "unit": "ns/op",
            "extra": "4296 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - MB/s",
            "value": 11589.37,
            "unit": "MB/s",
            "extra": "4296 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4296 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4296 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p",
            "value": 1695858,
            "unit": "ns/op\t1834.12 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "705 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - ns/op",
            "value": 1695858,
            "unit": "ns/op",
            "extra": "705 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - MB/s",
            "value": 1834.12,
            "unit": "MB/s",
            "extra": "705 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "705 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "705 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p",
            "value": 9228498,
            "unit": "ns/op\t 337.04 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "129 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - ns/op",
            "value": 9228498,
            "unit": "ns/op",
            "extra": "129 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - MB/s",
            "value": 337.04,
            "unit": "MB/s",
            "extra": "129 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "129 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "129 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p",
            "value": 53123,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22945 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - ns/op",
            "value": 53123,
            "unit": "ns/op",
            "extra": "22945 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "22945 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "22945 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p",
            "value": 1475007,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "814 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - ns/op",
            "value": 1475007,
            "unit": "ns/op",
            "extra": "814 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "814 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "814 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p",
            "value": 8983380,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p - ns/op",
            "value": 8983380,
            "unit": "ns/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K",
            "value": 766277,
            "unit": "ns/op\t16236.43 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1573 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - ns/op",
            "value": 766277,
            "unit": "ns/op",
            "extra": "1573 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - MB/s",
            "value": 16236.43,
            "unit": "MB/s",
            "extra": "1573 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1573 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1573 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K",
            "value": 91336438,
            "unit": "ns/op\t 136.22 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K - ns/op",
            "value": 91336438,
            "unit": "ns/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K - MB/s",
            "value": 136.22,
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
            "value": 90550594,
            "unit": "ns/op\t 137.40 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - ns/op",
            "value": 90550594,
            "unit": "ns/op",
            "extra": "12 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - MB/s",
            "value": 137.4,
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
            "value": 1317982,
            "unit": "ns/op\t9439.89 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "888 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - ns/op",
            "value": 1317982,
            "unit": "ns/op",
            "extra": "888 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - MB/s",
            "value": 9439.89,
            "unit": "MB/s",
            "extra": "888 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "888 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "888 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p",
            "value": 159176,
            "unit": "ns/op\t19540.62 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "7268 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - ns/op",
            "value": 159176,
            "unit": "ns/op",
            "extra": "7268 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - MB/s",
            "value": 19540.62,
            "unit": "MB/s",
            "extra": "7268 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7268 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7268 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p",
            "value": 15194873,
            "unit": "ns/op\t 136.47 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - ns/op",
            "value": 15194873,
            "unit": "ns/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - MB/s",
            "value": 136.47,
            "unit": "MB/s",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p",
            "value": 139948,
            "unit": "ns/op\t14816.89 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "7975 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - ns/op",
            "value": 139948,
            "unit": "ns/op",
            "extra": "7975 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - MB/s",
            "value": 14816.89,
            "unit": "MB/s",
            "extra": "7975 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7975 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7975 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D",
            "value": 54392,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22180 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - ns/op",
            "value": 54392,
            "unit": "ns/op",
            "extra": "22180 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "22180 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "22180 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D",
            "value": 1471203,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "813 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D - ns/op",
            "value": 1471203,
            "unit": "ns/op",
            "extra": "813 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "813 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "813 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel",
            "value": 8979806,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel - ns/op",
            "value": 8979806,
            "unit": "ns/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p",
            "value": 58.6,
            "unit": "ns/op\t16383.60 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "20415520 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - ns/op",
            "value": 58.6,
            "unit": "ns/op",
            "extra": "20415520 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - MB/s",
            "value": 16383.6,
            "unit": "MB/s",
            "extra": "20415520 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20415520 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20415520 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p",
            "value": 46517,
            "unit": "ns/op\t44576.81 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "25760 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - ns/op",
            "value": 46517,
            "unit": "ns/op",
            "extra": "25760 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - MB/s",
            "value": 44576.81,
            "unit": "MB/s",
            "extra": "25760 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "25760 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "25760 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920",
            "value": 6269,
            "unit": "ns/op\t 306.29 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "190603 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - ns/op",
            "value": 6269,
            "unit": "ns/op",
            "extra": "190603 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - MB/s",
            "value": 306.29,
            "unit": "MB/s",
            "extra": "190603 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "190603 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "190603 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p",
            "value": 10258987,
            "unit": "ns/op\t 303.19 MB/s\t   32768 B/op\t       3 allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p - ns/op",
            "value": 10258987,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p - MB/s",
            "value": 303.19,
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
            "value": 4574974,
            "unit": "ns/op\t 302.17 MB/s\t   20992 B/op\t       3 allocs/op",
            "extra": "262 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_1080pTo720p - ns/op",
            "value": 4574974,
            "unit": "ns/op",
            "extra": "262 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_1080pTo720p - MB/s",
            "value": 302.17,
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
            "value": 34864720,
            "unit": "ns/op\t  39.65 MB/s\t  267799 B/op\t       3 allocs/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - ns/op",
            "value": 34864720,
            "unit": "ns/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - MB/s",
            "value": 39.65,
            "unit": "MB/s",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - B/op",
            "value": 267799,
            "unit": "B/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080",
            "value": 33846143,
            "unit": "ns/op\t  91.90 MB/s\t  251573 B/op\t       3 allocs/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - ns/op",
            "value": 33846143,
            "unit": "ns/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - MB/s",
            "value": 91.9,
            "unit": "MB/s",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - B/op",
            "value": 251573,
            "unit": "B/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "33 times\n4 procs"
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
          "id": "9f449c9a9c5644085ed4deea2403f9a50b8514bb",
          "message": "Enable always-decode and fix FTB routing\n\nAlways set a per-source decoder factory so H.264 sources get dedicated YUV420 decoders (avoids keyframe waits on cuts/transitions). Update switcher frame path to route frames to the transition engine during transitions (including FTB) before the FTB filter — stop early-returning on FTBActive and instead apply FTB as the final program-source filter so FTB blends can access program frames while the screen stays black during FTB hold. Also update README diagram to note GOP Cache is H.264-only and that the decoder is warmed on cuts.",
          "timestamp": "2026-03-08T04:26:35-04:00",
          "tree_id": "f7608221a8900c00189bea4ad4495ee8064f7888",
          "url": "https://github.com/zsiec/switchframe/commit/9f449c9a9c5644085ed4deea2403f9a50b8514bb"
        },
        "date": 1772958566045,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBiquadAfterSilence",
            "value": 7310,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "152871 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - ns/op",
            "value": 7310,
            "unit": "ns/op",
            "extra": "152871 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "152871 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "152871 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear",
            "value": 59.11,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20374682 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - ns/op",
            "value": 59.11,
            "unit": "ns/op",
            "extra": "20374682 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20374682 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20374682 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS",
            "value": 12.68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "93852584 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - ns/op",
            "value": 12.68,
            "unit": "ns/op",
            "extra": "93852584 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "93852584 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "93852584 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples",
            "value": 1922,
            "unit": "ns/op\t4261.98 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "622552 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - ns/op",
            "value": 1922,
            "unit": "ns/op",
            "extra": "622552 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - MB/s",
            "value": 4261.98,
            "unit": "MB/s",
            "extra": "622552 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "622552 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "622552 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples",
            "value": 6310,
            "unit": "ns/op\t1298.23 MB/s\t    8199 B/op\t       1 allocs/op",
            "extra": "191511 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - ns/op",
            "value": 6310,
            "unit": "ns/op",
            "extra": "191511 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - MB/s",
            "value": 1298.23,
            "unit": "MB/s",
            "extra": "191511 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - B/op",
            "value": 8199,
            "unit": "B/op",
            "extra": "191511 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "191511 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048",
            "value": 168.3,
            "unit": "ns/op\t48661.35 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "7119259 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - ns/op",
            "value": 168.3,
            "unit": "ns/op",
            "extra": "7119259 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - MB/s",
            "value": 48661.35,
            "unit": "MB/s",
            "extra": "7119259 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7119259 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7119259 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048",
            "value": 127.4,
            "unit": "ns/op\t64280.82 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "9440520 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - ns/op",
            "value": 127.4,
            "unit": "ns/op",
            "extra": "9440520 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - MB/s",
            "value": 64280.82,
            "unit": "MB/s",
            "extra": "9440520 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9440520 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9440520 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048",
            "value": 435.3,
            "unit": "ns/op\t18818.60 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2760516 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - ns/op",
            "value": 435.3,
            "unit": "ns/op",
            "extra": "2760516 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - MB/s",
            "value": 18818.6,
            "unit": "MB/s",
            "extra": "2760516 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2760516 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2760516 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput",
            "value": 91390,
            "unit": "ns/op\t      42 B/op\t       3 allocs/op",
            "extra": "13306 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - ns/op",
            "value": 91390,
            "unit": "ns/op",
            "extra": "13306 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - B/op",
            "value": 42,
            "unit": "B/op",
            "extra": "13306 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "13306 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB",
            "value": 6782,
            "unit": "ns/op\t7557.39 MB/s\t   57344 B/op\t       1 allocs/op",
            "extra": "170545 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - ns/op",
            "value": 6782,
            "unit": "ns/op",
            "extra": "170545 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - MB/s",
            "value": 7557.39,
            "unit": "MB/s",
            "extra": "170545 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - B/op",
            "value": 57344,
            "unit": "B/op",
            "extra": "170545 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "170545 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1",
            "value": 57580,
            "unit": "ns/op\t 890.10 MB/s\t   57512 B/op\t       4 allocs/op",
            "extra": "20907 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - ns/op",
            "value": 57580,
            "unit": "ns/op",
            "extra": "20907 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - MB/s",
            "value": 890.1,
            "unit": "MB/s",
            "extra": "20907 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - B/op",
            "value": 57512,
            "unit": "B/op",
            "extra": "20907 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "20907 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into",
            "value": 50550,
            "unit": "ns/op\t1013.88 MB/s\t     168 B/op\t       3 allocs/op",
            "extra": "23406 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - ns/op",
            "value": 50550,
            "unit": "ns/op",
            "extra": "23406 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - MB/s",
            "value": 1013.88,
            "unit": "MB/s",
            "extra": "23406 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - B/op",
            "value": 168,
            "unit": "B/op",
            "extra": "23406 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "23406 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs",
            "value": 125.4,
            "unit": "ns/op\t408786.71 MB/s\t     168 B/op\t       3 allocs/op",
            "extra": "9540544 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - ns/op",
            "value": 125.4,
            "unit": "ns/op",
            "extra": "9540544 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - MB/s",
            "value": 408786.71,
            "unit": "MB/s",
            "extra": "9540544 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - B/op",
            "value": 168,
            "unit": "B/op",
            "extra": "9540544 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "9540544 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame",
            "value": 339.2,
            "unit": "ns/op\t6049.58 MB/s\t    2304 B/op\t       1 allocs/op",
            "extra": "3523875 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - ns/op",
            "value": 339.2,
            "unit": "ns/op",
            "extra": "3523875 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - MB/s",
            "value": 6049.58,
            "unit": "MB/s",
            "extra": "3523875 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - B/op",
            "value": 2304,
            "unit": "B/op",
            "extra": "3523875 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3523875 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources",
            "value": 17039,
            "unit": "ns/op\t    8065 B/op\t      53 allocs/op",
            "extra": "71076 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - ns/op",
            "value": 17039,
            "unit": "ns/op",
            "extra": "71076 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - B/op",
            "value": 8065,
            "unit": "B/op",
            "extra": "71076 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "71076 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources",
            "value": 72307,
            "unit": "ns/op\t  55.84 MB/s\t    5392 B/op\t     129 allocs/op",
            "extra": "16694 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - ns/op",
            "value": 72307,
            "unit": "ns/op",
            "extra": "16694 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - MB/s",
            "value": 55.84,
            "unit": "MB/s",
            "extra": "16694 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - B/op",
            "value": 5392,
            "unit": "B/op",
            "extra": "16694 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "16694 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources",
            "value": 9903,
            "unit": "ns/op\t    4833 B/op\t      29 allocs/op",
            "extra": "120858 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - ns/op",
            "value": 9903,
            "unit": "ns/op",
            "extra": "120858 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - B/op",
            "value": 4833,
            "unit": "B/op",
            "extra": "120858 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "120858 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish",
            "value": 17017,
            "unit": "ns/op\t    8066 B/op\t      53 allocs/op",
            "extra": "70551 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - ns/op",
            "value": 17017,
            "unit": "ns/op",
            "extra": "70551 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - B/op",
            "value": 8066,
            "unit": "B/op",
            "extra": "70551 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "70551 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish",
            "value": 21711,
            "unit": "ns/op\t    8067 B/op\t      53 allocs/op",
            "extra": "59322 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - ns/op",
            "value": 21711,
            "unit": "ns/op",
            "extra": "59322 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - B/op",
            "value": 8067,
            "unit": "B/op",
            "extra": "59322 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "59322 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque",
            "value": 4818,
            "unit": "ns/op\t 398.48 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "247424 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - ns/op",
            "value": 4818,
            "unit": "ns/op",
            "extra": "247424 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - MB/s",
            "value": 398.48,
            "unit": "MB/s",
            "extra": "247424 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "247424 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "247424 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse",
            "value": 1755,
            "unit": "ns/op\t1093.79 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "645277 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - ns/op",
            "value": 1755,
            "unit": "ns/op",
            "extra": "645277 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - MB/s",
            "value": 1093.79,
            "unit": "MB/s",
            "extra": "645277 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "645277 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "645277 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full",
            "value": 3355209,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "357 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full - ns/op",
            "value": 3355209,
            "unit": "ns/op",
            "extra": "357 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "357 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "357 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird",
            "value": 3351122,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "357 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird - ns/op",
            "value": 3351122,
            "unit": "ns/op",
            "extra": "357 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "357 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "357 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p",
            "value": 633310,
            "unit": "ns/op\t 818.56 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1890 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - ns/op",
            "value": 633310,
            "unit": "ns/op",
            "extra": "1890 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - MB/s",
            "value": 818.56,
            "unit": "MB/s",
            "extra": "1890 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1890 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1890 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p",
            "value": 3921924,
            "unit": "ns/op\t 528.72 MB/s\t 2605063 B/op\t       2 allocs/op",
            "extra": "302 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - ns/op",
            "value": 3921924,
            "unit": "ns/op",
            "extra": "302 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - MB/s",
            "value": 528.72,
            "unit": "MB/s",
            "extra": "302 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - B/op",
            "value": 2605063,
            "unit": "B/op",
            "extra": "302 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "302 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p",
            "value": 3273955,
            "unit": "ns/op\t 633.36 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "372 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - ns/op",
            "value": 3273955,
            "unit": "ns/op",
            "extra": "372 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - MB/s",
            "value": 633.36,
            "unit": "MB/s",
            "extra": "372 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "372 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "372 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p",
            "value": 772045,
            "unit": "ns/op\t2685.85 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1554 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - ns/op",
            "value": 772045,
            "unit": "ns/op",
            "extra": "1554 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - MB/s",
            "value": 2685.85,
            "unit": "MB/s",
            "extra": "1554 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1554 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1554 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p",
            "value": 2192996,
            "unit": "ns/op\t 945.56 MB/s\t 2080778 B/op\t       1 allocs/op",
            "extra": "510 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - ns/op",
            "value": 2192996,
            "unit": "ns/op",
            "extra": "510 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - MB/s",
            "value": 945.56,
            "unit": "MB/s",
            "extra": "510 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - B/op",
            "value": 2080778,
            "unit": "B/op",
            "extra": "510 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "510 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p",
            "value": 20.91,
            "unit": "ns/op\t45900.86 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "57287991 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - ns/op",
            "value": 20.91,
            "unit": "ns/op",
            "extra": "57287991 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - MB/s",
            "value": 45900.86,
            "unit": "MB/s",
            "extra": "57287991 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57287991 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57287991 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p",
            "value": 2623,
            "unit": "ns/op\t1952.16 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "456908 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - ns/op",
            "value": 2623,
            "unit": "ns/op",
            "extra": "456908 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - MB/s",
            "value": 1952.16,
            "unit": "MB/s",
            "extra": "456908 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "456908 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "456908 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p",
            "value": 781.6,
            "unit": "ns/op\t6550.29 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1535262 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - ns/op",
            "value": 781.6,
            "unit": "ns/op",
            "extra": "1535262 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - MB/s",
            "value": 6550.29,
            "unit": "MB/s",
            "extra": "1535262 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1535262 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1535262 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p",
            "value": 3150144,
            "unit": "ns/op\t1755.35 MB/s\t 3117059 B/op\t       3 allocs/op",
            "extra": "382 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - ns/op",
            "value": 3150144,
            "unit": "ns/op",
            "extra": "382 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - MB/s",
            "value": 1755.35,
            "unit": "MB/s",
            "extra": "382 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - B/op",
            "value": 3117059,
            "unit": "B/op",
            "extra": "382 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "382 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p",
            "value": 2895739,
            "unit": "ns/op\t1909.56 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "415 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p - ns/op",
            "value": 2895739,
            "unit": "ns/op",
            "extra": "415 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p - MB/s",
            "value": 1909.56,
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
            "value": 1178942,
            "unit": "ns/op\t2638.30 MB/s\t 5529608 B/op\t       1 allocs/op",
            "extra": "1016 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - ns/op",
            "value": 1178942,
            "unit": "ns/op",
            "extra": "1016 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - MB/s",
            "value": 2638.3,
            "unit": "MB/s",
            "extra": "1016 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - B/op",
            "value": 5529608,
            "unit": "B/op",
            "extra": "1016 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1016 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p",
            "value": 891288,
            "unit": "ns/op\t3489.78 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1324 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - ns/op",
            "value": 891288,
            "unit": "ns/op",
            "extra": "1324 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - MB/s",
            "value": 3489.78,
            "unit": "MB/s",
            "extra": "1324 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1324 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1324 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p",
            "value": 4685243,
            "unit": "ns/op\t 663.87 MB/s\t 8646669 B/op\t       4 allocs/op",
            "extra": "265 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - ns/op",
            "value": 4685243,
            "unit": "ns/op",
            "extra": "265 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - MB/s",
            "value": 663.87,
            "unit": "MB/s",
            "extra": "265 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - B/op",
            "value": 8646669,
            "unit": "B/op",
            "extra": "265 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "265 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p",
            "value": 3823616,
            "unit": "ns/op\t 813.47 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "313 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - ns/op",
            "value": 3823616,
            "unit": "ns/op",
            "extra": "313 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - MB/s",
            "value": 813.47,
            "unit": "MB/s",
            "extra": "313 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "313 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "313 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath",
            "value": 74.13,
            "unit": "ns/op\t      24 B/op\t       1 allocs/op",
            "extra": "16455250 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - ns/op",
            "value": 74.13,
            "unit": "ns/op",
            "extra": "16455250 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - B/op",
            "value": 24,
            "unit": "B/op",
            "extra": "16455250 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "16455250 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath",
            "value": 3450,
            "unit": "ns/op\t    8415 B/op\t       3 allocs/op",
            "extra": "318618 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - ns/op",
            "value": 3450,
            "unit": "ns/op",
            "extra": "318618 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - B/op",
            "value": 8415,
            "unit": "B/op",
            "extra": "318618 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "318618 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush",
            "value": 2697,
            "unit": "ns/op\t     329 B/op\t       6 allocs/op",
            "extra": "442581 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - ns/op",
            "value": 2697,
            "unit": "ns/op",
            "extra": "442581 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - B/op",
            "value": 329,
            "unit": "B/op",
            "extra": "442581 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "442581 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame",
            "value": 1244,
            "unit": "ns/op\t   10804 B/op\t       1 allocs/op",
            "extra": "944358 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - ns/op",
            "value": 1244,
            "unit": "ns/op",
            "extra": "944358 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - B/op",
            "value": 10804,
            "unit": "B/op",
            "extra": "944358 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "944358 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip",
            "value": 229228,
            "unit": "ns/op\t 1707611 B/op\t     333 allocs/op",
            "extra": "5248 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - ns/op",
            "value": 229228,
            "unit": "ns/op",
            "extra": "5248 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - B/op",
            "value": 1707611,
            "unit": "B/op",
            "extra": "5248 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - allocs/op",
            "value": 333,
            "unit": "allocs/op",
            "extra": "5248 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo",
            "value": 901,
            "unit": "ns/op\t    6018 B/op\t       1 allocs/op",
            "extra": "1296343 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - ns/op",
            "value": 901,
            "unit": "ns/op",
            "extra": "1296343 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - B/op",
            "value": 6018,
            "unit": "B/op",
            "extra": "1296343 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1296343 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay",
            "value": 203,
            "unit": "ns/op\t     275 B/op\t       0 allocs/op",
            "extra": "7321212 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - ns/op",
            "value": 203,
            "unit": "ns/op",
            "extra": "7321212 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - B/op",
            "value": 275,
            "unit": "B/op",
            "extra": "7321212 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7321212 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick",
            "value": 1790,
            "unit": "ns/op\t    4810 B/op\t       0 allocs/op",
            "extra": "929034 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - ns/op",
            "value": 1790,
            "unit": "ns/op",
            "extra": "929034 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - B/op",
            "value": 4810,
            "unit": "B/op",
            "extra": "929034 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "929034 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest",
            "value": 30.29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38926311 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - ns/op",
            "value": 30.29,
            "unit": "ns/op",
            "extra": "38926311 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "38926311 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "38926311 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode",
            "value": 9190,
            "unit": "ns/op\t   65777 B/op\t       5 allocs/op",
            "extra": "124096 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - ns/op",
            "value": 9190,
            "unit": "ns/op",
            "extra": "124096 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - B/op",
            "value": 65777,
            "unit": "B/op",
            "extra": "124096 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "124096 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p",
            "value": 55980,
            "unit": "ns/op\t24694.34 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "21374 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - ns/op",
            "value": 55980,
            "unit": "ns/op",
            "extra": "21374 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - MB/s",
            "value": 24694.34,
            "unit": "MB/s",
            "extra": "21374 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21374 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21374 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p",
            "value": 162184,
            "unit": "ns/op\t19178.20 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "7527 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - ns/op",
            "value": 162184,
            "unit": "ns/op",
            "extra": "7527 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - MB/s",
            "value": 19178.2,
            "unit": "MB/s",
            "extra": "7527 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7527 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7527 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p",
            "value": 22436397,
            "unit": "ns/op\t 138.63 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - ns/op",
            "value": 22436397,
            "unit": "ns/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - MB/s",
            "value": 138.63,
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
            "value": 22528664,
            "unit": "ns/op\t 138.06 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - ns/op",
            "value": 22528664,
            "unit": "ns/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - MB/s",
            "value": 138.06,
            "unit": "MB/s",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p",
            "value": 254453,
            "unit": "ns/op\t12223.85 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "4572 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - ns/op",
            "value": 254453,
            "unit": "ns/op",
            "extra": "4572 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - MB/s",
            "value": 12223.85,
            "unit": "MB/s",
            "extra": "4572 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4572 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4572 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p",
            "value": 1685839,
            "unit": "ns/op\t1845.02 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "702 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - ns/op",
            "value": 1685839,
            "unit": "ns/op",
            "extra": "702 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - MB/s",
            "value": 1845.02,
            "unit": "MB/s",
            "extra": "702 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "702 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "702 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p",
            "value": 9260299,
            "unit": "ns/op\t 335.89 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "128 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - ns/op",
            "value": 9260299,
            "unit": "ns/op",
            "extra": "128 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - MB/s",
            "value": 335.89,
            "unit": "MB/s",
            "extra": "128 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "128 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "128 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p",
            "value": 55882,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21703 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - ns/op",
            "value": 55882,
            "unit": "ns/op",
            "extra": "21703 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21703 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21703 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p",
            "value": 1476253,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "813 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - ns/op",
            "value": 1476253,
            "unit": "ns/op",
            "extra": "813 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "813 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "813 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p",
            "value": 8982716,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "129 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p - ns/op",
            "value": 8982716,
            "unit": "ns/op",
            "extra": "129 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "129 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "129 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K",
            "value": 734983,
            "unit": "ns/op\t16927.73 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1513 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - ns/op",
            "value": 734983,
            "unit": "ns/op",
            "extra": "1513 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - MB/s",
            "value": 16927.73,
            "unit": "MB/s",
            "extra": "1513 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1513 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1513 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K",
            "value": 90082702,
            "unit": "ns/op\t 138.11 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K - ns/op",
            "value": 90082702,
            "unit": "ns/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K - MB/s",
            "value": 138.11,
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
            "value": 90994857,
            "unit": "ns/op\t 136.73 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - ns/op",
            "value": 90994857,
            "unit": "ns/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - MB/s",
            "value": 136.73,
            "unit": "MB/s",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K",
            "value": 1336019,
            "unit": "ns/op\t9312.44 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "871 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - ns/op",
            "value": 1336019,
            "unit": "ns/op",
            "extra": "871 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - MB/s",
            "value": 9312.44,
            "unit": "MB/s",
            "extra": "871 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "871 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "871 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p",
            "value": 164953,
            "unit": "ns/op\t18856.25 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "9218 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - ns/op",
            "value": 164953,
            "unit": "ns/op",
            "extra": "9218 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - MB/s",
            "value": 18856.25,
            "unit": "MB/s",
            "extra": "9218 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9218 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9218 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p",
            "value": 15222277,
            "unit": "ns/op\t 136.22 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - ns/op",
            "value": 15222277,
            "unit": "ns/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - MB/s",
            "value": 136.22,
            "unit": "MB/s",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p",
            "value": 145385,
            "unit": "ns/op\t14262.83 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "8583 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - ns/op",
            "value": 145385,
            "unit": "ns/op",
            "extra": "8583 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - MB/s",
            "value": 14262.83,
            "unit": "MB/s",
            "extra": "8583 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8583 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8583 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D",
            "value": 55515,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21565 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - ns/op",
            "value": 55515,
            "unit": "ns/op",
            "extra": "21565 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21565 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21565 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D",
            "value": 1473776,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "810 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D - ns/op",
            "value": 1473776,
            "unit": "ns/op",
            "extra": "810 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "810 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "810 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel",
            "value": 9006690,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "132 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel - ns/op",
            "value": 9006690,
            "unit": "ns/op",
            "extra": "132 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "132 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "132 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p",
            "value": 58.74,
            "unit": "ns/op\t16343.56 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "20457846 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - ns/op",
            "value": 58.74,
            "unit": "ns/op",
            "extra": "20457846 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - MB/s",
            "value": 16343.56,
            "unit": "MB/s",
            "extra": "20457846 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20457846 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20457846 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p",
            "value": 45723,
            "unit": "ns/op\t45351.05 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "25484 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - ns/op",
            "value": 45723,
            "unit": "ns/op",
            "extra": "25484 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - MB/s",
            "value": 45351.05,
            "unit": "MB/s",
            "extra": "25484 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "25484 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "25484 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920",
            "value": 6267,
            "unit": "ns/op\t 306.36 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "191127 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - ns/op",
            "value": 6267,
            "unit": "ns/op",
            "extra": "191127 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - MB/s",
            "value": 306.36,
            "unit": "MB/s",
            "extra": "191127 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "191127 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "191127 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p",
            "value": 10253937,
            "unit": "ns/op\t 303.34 MB/s\t   32768 B/op\t       3 allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p - ns/op",
            "value": 10253937,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p - MB/s",
            "value": 303.34,
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
            "value": 4584482,
            "unit": "ns/op\t 301.54 MB/s\t   20992 B/op\t       3 allocs/op",
            "extra": "261 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_1080pTo720p - ns/op",
            "value": 4584482,
            "unit": "ns/op",
            "extra": "261 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_1080pTo720p - MB/s",
            "value": 301.54,
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
            "value": 34939622,
            "unit": "ns/op\t  39.57 MB/s\t  267799 B/op\t       3 allocs/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - ns/op",
            "value": 34939622,
            "unit": "ns/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - MB/s",
            "value": 39.57,
            "unit": "MB/s",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - B/op",
            "value": 267799,
            "unit": "B/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080",
            "value": 33814355,
            "unit": "ns/op\t  91.98 MB/s\t  251573 B/op\t       3 allocs/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - ns/op",
            "value": 33814355,
            "unit": "ns/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - MB/s",
            "value": 91.98,
            "unit": "MB/s",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - B/op",
            "value": 251573,
            "unit": "B/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "33 times\n4 procs"
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
          "id": "2b0743bc45d8691d56834a98e7e3fcdbd7ac72f0",
          "message": "Update transition_test.go",
          "timestamp": "2026-03-08T04:32:28-04:00",
          "tree_id": "af796c03f32f6277196439411fb4d77e57d09558",
          "url": "https://github.com/zsiec/switchframe/commit/2b0743bc45d8691d56834a98e7e3fcdbd7ac72f0"
        },
        "date": 1772958906061,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBiquadAfterSilence",
            "value": 7113,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "146432 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - ns/op",
            "value": 7113,
            "unit": "ns/op",
            "extra": "146432 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "146432 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "146432 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear",
            "value": 59.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20367441 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - ns/op",
            "value": 59.94,
            "unit": "ns/op",
            "extra": "20367441 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20367441 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20367441 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS",
            "value": 12.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "90606889 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - ns/op",
            "value": 12.99,
            "unit": "ns/op",
            "extra": "90606889 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "90606889 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "90606889 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples",
            "value": 1939,
            "unit": "ns/op\t4225.34 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "612604 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - ns/op",
            "value": 1939,
            "unit": "ns/op",
            "extra": "612604 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - MB/s",
            "value": 4225.34,
            "unit": "MB/s",
            "extra": "612604 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "612604 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "612604 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples",
            "value": 6340,
            "unit": "ns/op\t1292.18 MB/s\t    8199 B/op\t       1 allocs/op",
            "extra": "189123 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - ns/op",
            "value": 6340,
            "unit": "ns/op",
            "extra": "189123 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - MB/s",
            "value": 1292.18,
            "unit": "MB/s",
            "extra": "189123 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - B/op",
            "value": 8199,
            "unit": "B/op",
            "extra": "189123 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "189123 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048",
            "value": 168,
            "unit": "ns/op\t48771.94 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "7139132 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - ns/op",
            "value": 168,
            "unit": "ns/op",
            "extra": "7139132 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - MB/s",
            "value": 48771.94,
            "unit": "MB/s",
            "extra": "7139132 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7139132 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7139132 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048",
            "value": 127.5,
            "unit": "ns/op\t64256.13 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "9460324 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - ns/op",
            "value": 127.5,
            "unit": "ns/op",
            "extra": "9460324 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - MB/s",
            "value": 64256.13,
            "unit": "MB/s",
            "extra": "9460324 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9460324 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9460324 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048",
            "value": 435.3,
            "unit": "ns/op\t18820.43 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2767610 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - ns/op",
            "value": 435.3,
            "unit": "ns/op",
            "extra": "2767610 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - MB/s",
            "value": 18820.43,
            "unit": "MB/s",
            "extra": "2767610 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2767610 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2767610 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput",
            "value": 90322,
            "unit": "ns/op\t      42 B/op\t       3 allocs/op",
            "extra": "13405 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - ns/op",
            "value": 90322,
            "unit": "ns/op",
            "extra": "13405 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - B/op",
            "value": 42,
            "unit": "B/op",
            "extra": "13405 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "13405 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB",
            "value": 9984,
            "unit": "ns/op\t5133.58 MB/s\t   57344 B/op\t       1 allocs/op",
            "extra": "127561 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - ns/op",
            "value": 9984,
            "unit": "ns/op",
            "extra": "127561 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - MB/s",
            "value": 5133.58,
            "unit": "MB/s",
            "extra": "127561 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - B/op",
            "value": 57344,
            "unit": "B/op",
            "extra": "127561 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "127561 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1",
            "value": 60929,
            "unit": "ns/op\t 841.18 MB/s\t   57512 B/op\t       4 allocs/op",
            "extra": "20598 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - ns/op",
            "value": 60929,
            "unit": "ns/op",
            "extra": "20598 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - MB/s",
            "value": 841.18,
            "unit": "MB/s",
            "extra": "20598 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - B/op",
            "value": 57512,
            "unit": "B/op",
            "extra": "20598 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "20598 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into",
            "value": 50394,
            "unit": "ns/op\t1017.03 MB/s\t     168 B/op\t       3 allocs/op",
            "extra": "23774 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - ns/op",
            "value": 50394,
            "unit": "ns/op",
            "extra": "23774 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - MB/s",
            "value": 1017.03,
            "unit": "MB/s",
            "extra": "23774 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - B/op",
            "value": 168,
            "unit": "B/op",
            "extra": "23774 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "23774 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs",
            "value": 129,
            "unit": "ns/op\t397353.01 MB/s\t     168 B/op\t       3 allocs/op",
            "extra": "9280077 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - ns/op",
            "value": 129,
            "unit": "ns/op",
            "extra": "9280077 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - MB/s",
            "value": 397353.01,
            "unit": "MB/s",
            "extra": "9280077 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - B/op",
            "value": 168,
            "unit": "B/op",
            "extra": "9280077 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "9280077 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame",
            "value": 407.6,
            "unit": "ns/op\t5033.95 MB/s\t    2304 B/op\t       1 allocs/op",
            "extra": "2927046 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - ns/op",
            "value": 407.6,
            "unit": "ns/op",
            "extra": "2927046 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - MB/s",
            "value": 5033.95,
            "unit": "MB/s",
            "extra": "2927046 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - B/op",
            "value": 2304,
            "unit": "B/op",
            "extra": "2927046 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "2927046 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources",
            "value": 16800,
            "unit": "ns/op\t    8065 B/op\t      53 allocs/op",
            "extra": "71374 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - ns/op",
            "value": 16800,
            "unit": "ns/op",
            "extra": "71374 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - B/op",
            "value": 8065,
            "unit": "B/op",
            "extra": "71374 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "71374 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources",
            "value": 71458,
            "unit": "ns/op\t  56.51 MB/s\t    5392 B/op\t     129 allocs/op",
            "extra": "16557 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - ns/op",
            "value": 71458,
            "unit": "ns/op",
            "extra": "16557 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - MB/s",
            "value": 56.51,
            "unit": "MB/s",
            "extra": "16557 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - B/op",
            "value": 5392,
            "unit": "B/op",
            "extra": "16557 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "16557 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources",
            "value": 9991,
            "unit": "ns/op\t    4833 B/op\t      29 allocs/op",
            "extra": "120548 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - ns/op",
            "value": 9991,
            "unit": "ns/op",
            "extra": "120548 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - B/op",
            "value": 4833,
            "unit": "B/op",
            "extra": "120548 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "120548 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish",
            "value": 16961,
            "unit": "ns/op\t    8066 B/op\t      53 allocs/op",
            "extra": "61330 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - ns/op",
            "value": 16961,
            "unit": "ns/op",
            "extra": "61330 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - B/op",
            "value": 8066,
            "unit": "B/op",
            "extra": "61330 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "61330 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish",
            "value": 20195,
            "unit": "ns/op\t    8067 B/op\t      53 allocs/op",
            "extra": "57949 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - ns/op",
            "value": 20195,
            "unit": "ns/op",
            "extra": "57949 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - B/op",
            "value": 8067,
            "unit": "B/op",
            "extra": "57949 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "57949 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque",
            "value": 4814,
            "unit": "ns/op\t 398.82 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "229243 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - ns/op",
            "value": 4814,
            "unit": "ns/op",
            "extra": "229243 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - MB/s",
            "value": 398.82,
            "unit": "MB/s",
            "extra": "229243 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "229243 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "229243 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse",
            "value": 1756,
            "unit": "ns/op\t1093.34 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "675662 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - ns/op",
            "value": 1756,
            "unit": "ns/op",
            "extra": "675662 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - MB/s",
            "value": 1093.34,
            "unit": "MB/s",
            "extra": "675662 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "675662 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "675662 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full",
            "value": 3358990,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "356 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full - ns/op",
            "value": 3358990,
            "unit": "ns/op",
            "extra": "356 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "356 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "356 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird",
            "value": 3370952,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "357 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird - ns/op",
            "value": 3370952,
            "unit": "ns/op",
            "extra": "357 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "357 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "357 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p",
            "value": 633129,
            "unit": "ns/op\t 818.79 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1885 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - ns/op",
            "value": 633129,
            "unit": "ns/op",
            "extra": "1885 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - MB/s",
            "value": 818.79,
            "unit": "MB/s",
            "extra": "1885 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1885 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1885 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p",
            "value": 3458440,
            "unit": "ns/op\t 599.58 MB/s\t 2605056 B/op\t       2 allocs/op",
            "extra": "315 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - ns/op",
            "value": 3458440,
            "unit": "ns/op",
            "extra": "315 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - MB/s",
            "value": 599.58,
            "unit": "MB/s",
            "extra": "315 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - B/op",
            "value": 2605056,
            "unit": "B/op",
            "extra": "315 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "315 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p",
            "value": 3236294,
            "unit": "ns/op\t 640.73 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "369 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - ns/op",
            "value": 3236294,
            "unit": "ns/op",
            "extra": "369 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - MB/s",
            "value": 640.73,
            "unit": "MB/s",
            "extra": "369 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "369 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "369 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p",
            "value": 771017,
            "unit": "ns/op\t2689.44 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1555 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - ns/op",
            "value": 771017,
            "unit": "ns/op",
            "extra": "1555 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - MB/s",
            "value": 2689.44,
            "unit": "MB/s",
            "extra": "1555 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1555 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1555 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p",
            "value": 2206595,
            "unit": "ns/op\t 939.73 MB/s\t 2080777 B/op\t       1 allocs/op",
            "extra": "543 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - ns/op",
            "value": 2206595,
            "unit": "ns/op",
            "extra": "543 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - MB/s",
            "value": 939.73,
            "unit": "MB/s",
            "extra": "543 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - B/op",
            "value": 2080777,
            "unit": "B/op",
            "extra": "543 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "543 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p",
            "value": 20.89,
            "unit": "ns/op\t45964.54 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "55803103 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - ns/op",
            "value": 20.89,
            "unit": "ns/op",
            "extra": "55803103 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - MB/s",
            "value": 45964.54,
            "unit": "MB/s",
            "extra": "55803103 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "55803103 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "55803103 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p",
            "value": 2624,
            "unit": "ns/op\t1951.31 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "456952 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - ns/op",
            "value": 2624,
            "unit": "ns/op",
            "extra": "456952 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - MB/s",
            "value": 1951.31,
            "unit": "MB/s",
            "extra": "456952 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "456952 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "456952 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p",
            "value": 784.3,
            "unit": "ns/op\t6528.45 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1536284 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - ns/op",
            "value": 784.3,
            "unit": "ns/op",
            "extra": "1536284 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - MB/s",
            "value": 6528.45,
            "unit": "MB/s",
            "extra": "1536284 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1536284 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1536284 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p",
            "value": 3104348,
            "unit": "ns/op\t1781.24 MB/s\t 3117062 B/op\t       3 allocs/op",
            "extra": "384 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - ns/op",
            "value": 3104348,
            "unit": "ns/op",
            "extra": "384 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - MB/s",
            "value": 1781.24,
            "unit": "MB/s",
            "extra": "384 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - B/op",
            "value": 3117062,
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
            "value": 2884993,
            "unit": "ns/op\t1916.68 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "415 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p - ns/op",
            "value": 2884993,
            "unit": "ns/op",
            "extra": "415 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p - MB/s",
            "value": 1916.68,
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
            "value": 1186829,
            "unit": "ns/op\t2620.76 MB/s\t 5529608 B/op\t       1 allocs/op",
            "extra": "1053 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - ns/op",
            "value": 1186829,
            "unit": "ns/op",
            "extra": "1053 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - MB/s",
            "value": 2620.76,
            "unit": "MB/s",
            "extra": "1053 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - B/op",
            "value": 5529608,
            "unit": "B/op",
            "extra": "1053 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1053 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p",
            "value": 888174,
            "unit": "ns/op\t3502.02 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1352 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - ns/op",
            "value": 888174,
            "unit": "ns/op",
            "extra": "1352 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - MB/s",
            "value": 3502.02,
            "unit": "MB/s",
            "extra": "1352 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1352 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1352 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p",
            "value": 4623294,
            "unit": "ns/op\t 672.77 MB/s\t 8646666 B/op\t       4 allocs/op",
            "extra": "256 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - ns/op",
            "value": 4623294,
            "unit": "ns/op",
            "extra": "256 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - MB/s",
            "value": 672.77,
            "unit": "MB/s",
            "extra": "256 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - B/op",
            "value": 8646666,
            "unit": "B/op",
            "extra": "256 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "256 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p",
            "value": 3774645,
            "unit": "ns/op\t 824.02 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "318 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - ns/op",
            "value": 3774645,
            "unit": "ns/op",
            "extra": "318 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - MB/s",
            "value": 824.02,
            "unit": "MB/s",
            "extra": "318 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "318 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "318 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath",
            "value": 73.52,
            "unit": "ns/op\t      24 B/op\t       1 allocs/op",
            "extra": "16469266 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - ns/op",
            "value": 73.52,
            "unit": "ns/op",
            "extra": "16469266 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - B/op",
            "value": 24,
            "unit": "B/op",
            "extra": "16469266 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "16469266 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath",
            "value": 3444,
            "unit": "ns/op\t    8431 B/op\t       3 allocs/op",
            "extra": "292156 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - ns/op",
            "value": 3444,
            "unit": "ns/op",
            "extra": "292156 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - B/op",
            "value": 8431,
            "unit": "B/op",
            "extra": "292156 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "292156 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush",
            "value": 2674,
            "unit": "ns/op\t     329 B/op\t       6 allocs/op",
            "extra": "454101 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - ns/op",
            "value": 2674,
            "unit": "ns/op",
            "extra": "454101 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - B/op",
            "value": 329,
            "unit": "B/op",
            "extra": "454101 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "454101 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame",
            "value": 1192,
            "unit": "ns/op\t   10935 B/op\t       1 allocs/op",
            "extra": "957679 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - ns/op",
            "value": 1192,
            "unit": "ns/op",
            "extra": "957679 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - B/op",
            "value": 10935,
            "unit": "B/op",
            "extra": "957679 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "957679 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip",
            "value": 205318,
            "unit": "ns/op\t 1707610 B/op\t     333 allocs/op",
            "extra": "5139 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - ns/op",
            "value": 205318,
            "unit": "ns/op",
            "extra": "5139 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - B/op",
            "value": 1707610,
            "unit": "B/op",
            "extra": "5139 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - allocs/op",
            "value": 333,
            "unit": "allocs/op",
            "extra": "5139 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo",
            "value": 848.4,
            "unit": "ns/op\t    5984 B/op\t       1 allocs/op",
            "extra": "1368448 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - ns/op",
            "value": 848.4,
            "unit": "ns/op",
            "extra": "1368448 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - B/op",
            "value": 5984,
            "unit": "B/op",
            "extra": "1368448 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1368448 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay",
            "value": 208.6,
            "unit": "ns/op\t     262 B/op\t       0 allocs/op",
            "extra": "7698600 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - ns/op",
            "value": 208.6,
            "unit": "ns/op",
            "extra": "7698600 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - B/op",
            "value": 262,
            "unit": "B/op",
            "extra": "7698600 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7698600 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick",
            "value": 1839,
            "unit": "ns/op\t    5050 B/op\t       0 allocs/op",
            "extra": "884858 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - ns/op",
            "value": 1839,
            "unit": "ns/op",
            "extra": "884858 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - B/op",
            "value": 5050,
            "unit": "B/op",
            "extra": "884858 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "884858 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest",
            "value": 30.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38899766 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - ns/op",
            "value": 30.26,
            "unit": "ns/op",
            "extra": "38899766 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "38899766 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "38899766 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode",
            "value": 13691,
            "unit": "ns/op\t   65778 B/op\t       5 allocs/op",
            "extra": "122354 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - ns/op",
            "value": 13691,
            "unit": "ns/op",
            "extra": "122354 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - B/op",
            "value": 65778,
            "unit": "B/op",
            "extra": "122354 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "122354 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p",
            "value": 69712,
            "unit": "ns/op\t19830.18 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "17046 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - ns/op",
            "value": 69712,
            "unit": "ns/op",
            "extra": "17046 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - MB/s",
            "value": 19830.18,
            "unit": "MB/s",
            "extra": "17046 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17046 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17046 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p",
            "value": 157337,
            "unit": "ns/op\t19769.07 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "7544 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - ns/op",
            "value": 157337,
            "unit": "ns/op",
            "extra": "7544 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - MB/s",
            "value": 19769.07,
            "unit": "MB/s",
            "extra": "7544 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7544 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7544 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p",
            "value": 22480450,
            "unit": "ns/op\t 138.36 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - ns/op",
            "value": 22480450,
            "unit": "ns/op",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - MB/s",
            "value": 138.36,
            "unit": "MB/s",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p",
            "value": 22593485,
            "unit": "ns/op\t 137.67 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - ns/op",
            "value": 22593485,
            "unit": "ns/op",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - MB/s",
            "value": 137.67,
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
            "value": 267208,
            "unit": "ns/op\t11640.37 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "4375 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - ns/op",
            "value": 267208,
            "unit": "ns/op",
            "extra": "4375 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - MB/s",
            "value": 11640.37,
            "unit": "MB/s",
            "extra": "4375 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4375 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4375 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p",
            "value": 1692757,
            "unit": "ns/op\t1837.48 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "703 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - ns/op",
            "value": 1692757,
            "unit": "ns/op",
            "extra": "703 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - MB/s",
            "value": 1837.48,
            "unit": "MB/s",
            "extra": "703 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "703 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "703 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p",
            "value": 9241301,
            "unit": "ns/op\t 336.58 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "128 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - ns/op",
            "value": 9241301,
            "unit": "ns/op",
            "extra": "128 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - MB/s",
            "value": 336.58,
            "unit": "MB/s",
            "extra": "128 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "128 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "128 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p",
            "value": 54553,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21847 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - ns/op",
            "value": 54553,
            "unit": "ns/op",
            "extra": "21847 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21847 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21847 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p",
            "value": 1472361,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "812 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - ns/op",
            "value": 1472361,
            "unit": "ns/op",
            "extra": "812 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "812 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "812 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p",
            "value": 8986787,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p - ns/op",
            "value": 8986787,
            "unit": "ns/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K",
            "value": 741567,
            "unit": "ns/op\t16777.44 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1612 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - ns/op",
            "value": 741567,
            "unit": "ns/op",
            "extra": "1612 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - MB/s",
            "value": 16777.44,
            "unit": "MB/s",
            "extra": "1612 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1612 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1612 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K",
            "value": 89859182,
            "unit": "ns/op\t 138.46 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K - ns/op",
            "value": 89859182,
            "unit": "ns/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K - MB/s",
            "value": 138.46,
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
            "value": 90832504,
            "unit": "ns/op\t 136.97 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - ns/op",
            "value": 90832504,
            "unit": "ns/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - MB/s",
            "value": 136.97,
            "unit": "MB/s",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K",
            "value": 1313555,
            "unit": "ns/op\t9471.70 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "888 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - ns/op",
            "value": 1313555,
            "unit": "ns/op",
            "extra": "888 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - MB/s",
            "value": 9471.7,
            "unit": "MB/s",
            "extra": "888 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "888 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "888 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p",
            "value": 157624,
            "unit": "ns/op\t19733.09 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "7096 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - ns/op",
            "value": 157624,
            "unit": "ns/op",
            "extra": "7096 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - MB/s",
            "value": 19733.09,
            "unit": "MB/s",
            "extra": "7096 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7096 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7096 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p",
            "value": 15215031,
            "unit": "ns/op\t 136.29 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - ns/op",
            "value": 15215031,
            "unit": "ns/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - MB/s",
            "value": 136.29,
            "unit": "MB/s",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p",
            "value": 139841,
            "unit": "ns/op\t14828.27 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "8185 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - ns/op",
            "value": 139841,
            "unit": "ns/op",
            "extra": "8185 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - MB/s",
            "value": 14828.27,
            "unit": "MB/s",
            "extra": "8185 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8185 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8185 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D",
            "value": 53366,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22495 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - ns/op",
            "value": 53366,
            "unit": "ns/op",
            "extra": "22495 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "22495 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "22495 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D",
            "value": 1472439,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "816 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D - ns/op",
            "value": 1472439,
            "unit": "ns/op",
            "extra": "816 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "816 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "816 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel",
            "value": 9008045,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel - ns/op",
            "value": 9008045,
            "unit": "ns/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p",
            "value": 58.65,
            "unit": "ns/op\t16368.40 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "20471553 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - ns/op",
            "value": 58.65,
            "unit": "ns/op",
            "extra": "20471553 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - MB/s",
            "value": 16368.4,
            "unit": "MB/s",
            "extra": "20471553 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20471553 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20471553 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p",
            "value": 46741,
            "unit": "ns/op\t44363.80 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "25935 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - ns/op",
            "value": 46741,
            "unit": "ns/op",
            "extra": "25935 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - MB/s",
            "value": 44363.8,
            "unit": "MB/s",
            "extra": "25935 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "25935 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "25935 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920",
            "value": 6267,
            "unit": "ns/op\t 306.37 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "190491 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - ns/op",
            "value": 6267,
            "unit": "ns/op",
            "extra": "190491 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - MB/s",
            "value": 306.37,
            "unit": "MB/s",
            "extra": "190491 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "190491 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "190491 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p",
            "value": 10245699,
            "unit": "ns/op\t 303.58 MB/s\t   32768 B/op\t       3 allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p - ns/op",
            "value": 10245699,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p - MB/s",
            "value": 303.58,
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
            "value": 4583421,
            "unit": "ns/op\t 301.61 MB/s\t   20992 B/op\t       3 allocs/op",
            "extra": "261 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_1080pTo720p - ns/op",
            "value": 4583421,
            "unit": "ns/op",
            "extra": "261 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_1080pTo720p - MB/s",
            "value": 301.61,
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
            "value": 34902959,
            "unit": "ns/op\t  39.61 MB/s\t  267799 B/op\t       3 allocs/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - ns/op",
            "value": 34902959,
            "unit": "ns/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - MB/s",
            "value": 39.61,
            "unit": "MB/s",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - B/op",
            "value": 267799,
            "unit": "B/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080",
            "value": 33873597,
            "unit": "ns/op\t  91.82 MB/s\t  251573 B/op\t       3 allocs/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - ns/op",
            "value": 33873597,
            "unit": "ns/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - MB/s",
            "value": 91.82,
            "unit": "MB/s",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - B/op",
            "value": 251573,
            "unit": "B/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "33 times\n4 procs"
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
          "id": "f58f37b3a79802e10bd8f52d52dc0863a0022588",
          "message": "fix: enable always-decode unconditionally, fix FTB frame routing\n\nTwo issues causing black frames during transitions:\n\n1. Always-decode was gated behind --decode-all-sources flag (default off).\n   Without it, transition engine decoders started cold with no warmup,\n   producing black until a keyframe arrived. Now unconditional.\n\n2. handleRawVideoFrame and IngestRawVideo filtered frames on fTBActive\n   BEFORE the transition engine routing check, so FTB transitions never\n   received frames. Moved the FTB filter after the engine check.\n\nAlso removed unused slowDecoder type (lint).",
          "timestamp": "2026-03-08T04:33:35-04:00",
          "tree_id": "16136bb0fba478615f60ab7a8674d22852e2a915",
          "url": "https://github.com/zsiec/switchframe/commit/f58f37b3a79802e10bd8f52d52dc0863a0022588"
        },
        "date": 1772959053721,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBiquadAfterSilence",
            "value": 6695,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "179064 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - ns/op",
            "value": 6695,
            "unit": "ns/op",
            "extra": "179064 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "179064 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "179064 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear",
            "value": 58.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20409742 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - ns/op",
            "value": 58.79,
            "unit": "ns/op",
            "extra": "20409742 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20409742 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20409742 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS",
            "value": 12.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "93919171 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - ns/op",
            "value": 12.79,
            "unit": "ns/op",
            "extra": "93919171 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "93919171 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "93919171 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples",
            "value": 1926,
            "unit": "ns/op\t4253.33 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "622858 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - ns/op",
            "value": 1926,
            "unit": "ns/op",
            "extra": "622858 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - MB/s",
            "value": 4253.33,
            "unit": "MB/s",
            "extra": "622858 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "622858 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "622858 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples",
            "value": 7091,
            "unit": "ns/op\t1155.27 MB/s\t    8199 B/op\t       1 allocs/op",
            "extra": "181002 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - ns/op",
            "value": 7091,
            "unit": "ns/op",
            "extra": "181002 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - MB/s",
            "value": 1155.27,
            "unit": "MB/s",
            "extra": "181002 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - B/op",
            "value": 8199,
            "unit": "B/op",
            "extra": "181002 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "181002 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048",
            "value": 168.9,
            "unit": "ns/op\t48515.85 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "7027144 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - ns/op",
            "value": 168.9,
            "unit": "ns/op",
            "extra": "7027144 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - MB/s",
            "value": 48515.85,
            "unit": "MB/s",
            "extra": "7027144 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7027144 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7027144 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048",
            "value": 127.5,
            "unit": "ns/op\t64261.50 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "9405374 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - ns/op",
            "value": 127.5,
            "unit": "ns/op",
            "extra": "9405374 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - MB/s",
            "value": 64261.5,
            "unit": "MB/s",
            "extra": "9405374 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9405374 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9405374 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048",
            "value": 435.8,
            "unit": "ns/op\t18797.44 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2761060 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - ns/op",
            "value": 435.8,
            "unit": "ns/op",
            "extra": "2761060 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - MB/s",
            "value": 18797.44,
            "unit": "MB/s",
            "extra": "2761060 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2761060 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2761060 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput",
            "value": 90832,
            "unit": "ns/op\t      42 B/op\t       3 allocs/op",
            "extra": "13117 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - ns/op",
            "value": 90832,
            "unit": "ns/op",
            "extra": "13117 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - B/op",
            "value": 42,
            "unit": "B/op",
            "extra": "13117 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "13117 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB",
            "value": 9826,
            "unit": "ns/op\t5216.09 MB/s\t   57344 B/op\t       1 allocs/op",
            "extra": "169891 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - ns/op",
            "value": 9826,
            "unit": "ns/op",
            "extra": "169891 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - MB/s",
            "value": 5216.09,
            "unit": "MB/s",
            "extra": "169891 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - B/op",
            "value": 57344,
            "unit": "B/op",
            "extra": "169891 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "169891 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1",
            "value": 62468,
            "unit": "ns/op\t 820.45 MB/s\t   57512 B/op\t       4 allocs/op",
            "extra": "19946 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - ns/op",
            "value": 62468,
            "unit": "ns/op",
            "extra": "19946 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - MB/s",
            "value": 820.45,
            "unit": "MB/s",
            "extra": "19946 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - B/op",
            "value": 57512,
            "unit": "B/op",
            "extra": "19946 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "19946 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into",
            "value": 50415,
            "unit": "ns/op\t1016.61 MB/s\t     168 B/op\t       3 allocs/op",
            "extra": "22935 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - ns/op",
            "value": 50415,
            "unit": "ns/op",
            "extra": "22935 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - MB/s",
            "value": 1016.61,
            "unit": "MB/s",
            "extra": "22935 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - B/op",
            "value": 168,
            "unit": "B/op",
            "extra": "22935 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "22935 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs",
            "value": 129.8,
            "unit": "ns/op\t394780.52 MB/s\t     168 B/op\t       3 allocs/op",
            "extra": "8919360 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - ns/op",
            "value": 129.8,
            "unit": "ns/op",
            "extra": "8919360 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - MB/s",
            "value": 394780.52,
            "unit": "MB/s",
            "extra": "8919360 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - B/op",
            "value": 168,
            "unit": "B/op",
            "extra": "8919360 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "8919360 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame",
            "value": 407.7,
            "unit": "ns/op\t5032.93 MB/s\t    2304 B/op\t       1 allocs/op",
            "extra": "2747973 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - ns/op",
            "value": 407.7,
            "unit": "ns/op",
            "extra": "2747973 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - MB/s",
            "value": 5032.93,
            "unit": "MB/s",
            "extra": "2747973 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - B/op",
            "value": 2304,
            "unit": "B/op",
            "extra": "2747973 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "2747973 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources",
            "value": 17041,
            "unit": "ns/op\t    8065 B/op\t      53 allocs/op",
            "extra": "70953 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - ns/op",
            "value": 17041,
            "unit": "ns/op",
            "extra": "70953 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - B/op",
            "value": 8065,
            "unit": "B/op",
            "extra": "70953 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "70953 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources",
            "value": 71759,
            "unit": "ns/op\t  56.27 MB/s\t    5392 B/op\t     129 allocs/op",
            "extra": "16663 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - ns/op",
            "value": 71759,
            "unit": "ns/op",
            "extra": "16663 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - MB/s",
            "value": 56.27,
            "unit": "MB/s",
            "extra": "16663 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - B/op",
            "value": 5392,
            "unit": "B/op",
            "extra": "16663 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "16663 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources",
            "value": 9885,
            "unit": "ns/op\t    4833 B/op\t      29 allocs/op",
            "extra": "119372 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - ns/op",
            "value": 9885,
            "unit": "ns/op",
            "extra": "119372 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - B/op",
            "value": 4833,
            "unit": "B/op",
            "extra": "119372 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "119372 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish",
            "value": 18417,
            "unit": "ns/op\t    8065 B/op\t      53 allocs/op",
            "extra": "69819 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - ns/op",
            "value": 18417,
            "unit": "ns/op",
            "extra": "69819 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - B/op",
            "value": 8065,
            "unit": "B/op",
            "extra": "69819 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "69819 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish",
            "value": 20440,
            "unit": "ns/op\t    8068 B/op\t      53 allocs/op",
            "extra": "59053 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - ns/op",
            "value": 20440,
            "unit": "ns/op",
            "extra": "59053 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - B/op",
            "value": 8068,
            "unit": "B/op",
            "extra": "59053 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "59053 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque",
            "value": 4816,
            "unit": "ns/op\t 398.69 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "249104 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - ns/op",
            "value": 4816,
            "unit": "ns/op",
            "extra": "249104 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - MB/s",
            "value": 398.69,
            "unit": "MB/s",
            "extra": "249104 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "249104 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "249104 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse",
            "value": 1756,
            "unit": "ns/op\t1093.45 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "677727 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - ns/op",
            "value": 1756,
            "unit": "ns/op",
            "extra": "677727 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - MB/s",
            "value": 1093.45,
            "unit": "MB/s",
            "extra": "677727 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "677727 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "677727 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full",
            "value": 3345753,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "357 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full - ns/op",
            "value": 3345753,
            "unit": "ns/op",
            "extra": "357 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "357 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "357 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird",
            "value": 3348117,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "357 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird - ns/op",
            "value": 3348117,
            "unit": "ns/op",
            "extra": "357 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "357 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "357 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p",
            "value": 635072,
            "unit": "ns/op\t 816.28 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1890 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - ns/op",
            "value": 635072,
            "unit": "ns/op",
            "extra": "1890 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - MB/s",
            "value": 816.28,
            "unit": "MB/s",
            "extra": "1890 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1890 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1890 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p",
            "value": 3767883,
            "unit": "ns/op\t 550.34 MB/s\t 2605078 B/op\t       2 allocs/op",
            "extra": "312 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - ns/op",
            "value": 3767883,
            "unit": "ns/op",
            "extra": "312 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - MB/s",
            "value": 550.34,
            "unit": "MB/s",
            "extra": "312 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - B/op",
            "value": 2605078,
            "unit": "B/op",
            "extra": "312 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "312 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p",
            "value": 3233191,
            "unit": "ns/op\t 641.35 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "370 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - ns/op",
            "value": 3233191,
            "unit": "ns/op",
            "extra": "370 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - MB/s",
            "value": 641.35,
            "unit": "MB/s",
            "extra": "370 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "370 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "370 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p",
            "value": 772439,
            "unit": "ns/op\t2684.48 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1555 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - ns/op",
            "value": 772439,
            "unit": "ns/op",
            "extra": "1555 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - MB/s",
            "value": 2684.48,
            "unit": "MB/s",
            "extra": "1555 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1555 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1555 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p",
            "value": 2110556,
            "unit": "ns/op\t 982.49 MB/s\t 2080775 B/op\t       1 allocs/op",
            "extra": "600 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - ns/op",
            "value": 2110556,
            "unit": "ns/op",
            "extra": "600 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - MB/s",
            "value": 982.49,
            "unit": "MB/s",
            "extra": "600 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - B/op",
            "value": 2080775,
            "unit": "B/op",
            "extra": "600 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "600 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p",
            "value": 20.91,
            "unit": "ns/op\t45908.71 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "56520373 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - ns/op",
            "value": 20.91,
            "unit": "ns/op",
            "extra": "56520373 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - MB/s",
            "value": 45908.71,
            "unit": "MB/s",
            "extra": "56520373 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "56520373 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "56520373 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p",
            "value": 2622,
            "unit": "ns/op\t1952.35 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "456776 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - ns/op",
            "value": 2622,
            "unit": "ns/op",
            "extra": "456776 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - MB/s",
            "value": 1952.35,
            "unit": "MB/s",
            "extra": "456776 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "456776 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "456776 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p",
            "value": 780.6,
            "unit": "ns/op\t6559.30 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1535526 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - ns/op",
            "value": 780.6,
            "unit": "ns/op",
            "extra": "1535526 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - MB/s",
            "value": 6559.3,
            "unit": "MB/s",
            "extra": "1535526 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1535526 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1535526 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p",
            "value": 3149513,
            "unit": "ns/op\t1755.70 MB/s\t 3117061 B/op\t       3 allocs/op",
            "extra": "381 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - ns/op",
            "value": 3149513,
            "unit": "ns/op",
            "extra": "381 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - MB/s",
            "value": 1755.7,
            "unit": "MB/s",
            "extra": "381 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - B/op",
            "value": 3117061,
            "unit": "B/op",
            "extra": "381 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "381 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p",
            "value": 2887646,
            "unit": "ns/op\t1914.92 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "416 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p - ns/op",
            "value": 2887646,
            "unit": "ns/op",
            "extra": "416 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p - MB/s",
            "value": 1914.92,
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
            "value": 1156493,
            "unit": "ns/op\t2689.51 MB/s\t 5529613 B/op\t       1 allocs/op",
            "extra": "1026 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - ns/op",
            "value": 1156493,
            "unit": "ns/op",
            "extra": "1026 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - MB/s",
            "value": 2689.51,
            "unit": "MB/s",
            "extra": "1026 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - B/op",
            "value": 5529613,
            "unit": "B/op",
            "extra": "1026 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1026 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p",
            "value": 888959,
            "unit": "ns/op\t3498.92 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1348 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - ns/op",
            "value": 888959,
            "unit": "ns/op",
            "extra": "1348 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - MB/s",
            "value": 3498.92,
            "unit": "MB/s",
            "extra": "1348 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1348 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1348 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p",
            "value": 4522712,
            "unit": "ns/op\t 687.73 MB/s\t 8646671 B/op\t       4 allocs/op",
            "extra": "271 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - ns/op",
            "value": 4522712,
            "unit": "ns/op",
            "extra": "271 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - MB/s",
            "value": 687.73,
            "unit": "MB/s",
            "extra": "271 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - B/op",
            "value": 8646671,
            "unit": "B/op",
            "extra": "271 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "271 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p",
            "value": 3778013,
            "unit": "ns/op\t 823.29 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "316 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - ns/op",
            "value": 3778013,
            "unit": "ns/op",
            "extra": "316 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - MB/s",
            "value": 823.29,
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
            "value": 73.55,
            "unit": "ns/op\t      24 B/op\t       1 allocs/op",
            "extra": "16700976 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - ns/op",
            "value": 73.55,
            "unit": "ns/op",
            "extra": "16700976 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - B/op",
            "value": 24,
            "unit": "B/op",
            "extra": "16700976 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "16700976 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath",
            "value": 3350,
            "unit": "ns/op\t    8419 B/op\t       3 allocs/op",
            "extra": "311236 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - ns/op",
            "value": 3350,
            "unit": "ns/op",
            "extra": "311236 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - B/op",
            "value": 8419,
            "unit": "B/op",
            "extra": "311236 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "311236 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush",
            "value": 2700,
            "unit": "ns/op\t     329 B/op\t       6 allocs/op",
            "extra": "445412 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - ns/op",
            "value": 2700,
            "unit": "ns/op",
            "extra": "445412 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - B/op",
            "value": 329,
            "unit": "B/op",
            "extra": "445412 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "445412 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame",
            "value": 1274,
            "unit": "ns/op\t   10814 B/op\t       1 allocs/op",
            "extra": "928350 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - ns/op",
            "value": 1274,
            "unit": "ns/op",
            "extra": "928350 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - B/op",
            "value": 10814,
            "unit": "B/op",
            "extra": "928350 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "928350 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip",
            "value": 209917,
            "unit": "ns/op\t 1707610 B/op\t     333 allocs/op",
            "extra": "4942 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - ns/op",
            "value": 209917,
            "unit": "ns/op",
            "extra": "4942 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - B/op",
            "value": 1707610,
            "unit": "B/op",
            "extra": "4942 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - allocs/op",
            "value": 333,
            "unit": "allocs/op",
            "extra": "4942 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo",
            "value": 868.7,
            "unit": "ns/op\t    5998 B/op\t       1 allocs/op",
            "extra": "1338243 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - ns/op",
            "value": 868.7,
            "unit": "ns/op",
            "extra": "1338243 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - B/op",
            "value": 5998,
            "unit": "B/op",
            "extra": "1338243 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1338243 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay",
            "value": 174.9,
            "unit": "ns/op\t     293 B/op\t       0 allocs/op",
            "extra": "6881839 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - ns/op",
            "value": 174.9,
            "unit": "ns/op",
            "extra": "6881839 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - B/op",
            "value": 293,
            "unit": "B/op",
            "extra": "6881839 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6881839 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick",
            "value": 1961,
            "unit": "ns/op\t    4448 B/op\t       0 allocs/op",
            "extra": "513661 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - ns/op",
            "value": 1961,
            "unit": "ns/op",
            "extra": "513661 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - B/op",
            "value": 4448,
            "unit": "B/op",
            "extra": "513661 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "513661 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest",
            "value": 30.29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38695171 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - ns/op",
            "value": 30.29,
            "unit": "ns/op",
            "extra": "38695171 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "38695171 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "38695171 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode",
            "value": 10613,
            "unit": "ns/op\t   65777 B/op\t       5 allocs/op",
            "extra": "121110 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - ns/op",
            "value": 10613,
            "unit": "ns/op",
            "extra": "121110 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - B/op",
            "value": 65777,
            "unit": "B/op",
            "extra": "121110 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "121110 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p",
            "value": 73659,
            "unit": "ns/op\t18767.61 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "21372 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - ns/op",
            "value": 73659,
            "unit": "ns/op",
            "extra": "21372 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - MB/s",
            "value": 18767.61,
            "unit": "MB/s",
            "extra": "21372 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21372 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21372 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p",
            "value": 166944,
            "unit": "ns/op\t18631.35 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "9285 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - ns/op",
            "value": 166944,
            "unit": "ns/op",
            "extra": "9285 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - MB/s",
            "value": 18631.35,
            "unit": "MB/s",
            "extra": "9285 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9285 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9285 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p",
            "value": 22772479,
            "unit": "ns/op\t 136.59 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - ns/op",
            "value": 22772479,
            "unit": "ns/op",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - MB/s",
            "value": 136.59,
            "unit": "MB/s",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "51 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p",
            "value": 22470521,
            "unit": "ns/op\t 138.42 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - ns/op",
            "value": 22470521,
            "unit": "ns/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - MB/s",
            "value": 138.42,
            "unit": "MB/s",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p",
            "value": 251809,
            "unit": "ns/op\t12352.24 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "4226 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - ns/op",
            "value": 251809,
            "unit": "ns/op",
            "extra": "4226 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - MB/s",
            "value": 12352.24,
            "unit": "MB/s",
            "extra": "4226 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4226 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4226 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p",
            "value": 1682187,
            "unit": "ns/op\t1849.02 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "708 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - ns/op",
            "value": 1682187,
            "unit": "ns/op",
            "extra": "708 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - MB/s",
            "value": 1849.02,
            "unit": "MB/s",
            "extra": "708 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "708 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "708 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p",
            "value": 9272059,
            "unit": "ns/op\t 335.46 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "128 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - ns/op",
            "value": 9272059,
            "unit": "ns/op",
            "extra": "128 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - MB/s",
            "value": 335.46,
            "unit": "MB/s",
            "extra": "128 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "128 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "128 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p",
            "value": 48763,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24776 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - ns/op",
            "value": 48763,
            "unit": "ns/op",
            "extra": "24776 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "24776 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "24776 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p",
            "value": 1475366,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "813 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - ns/op",
            "value": 1475366,
            "unit": "ns/op",
            "extra": "813 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "813 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "813 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p",
            "value": 8998954,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p - ns/op",
            "value": 8998954,
            "unit": "ns/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "133 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K",
            "value": 807050,
            "unit": "ns/op\t15416.15 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1531 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - ns/op",
            "value": 807050,
            "unit": "ns/op",
            "extra": "1531 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - MB/s",
            "value": 15416.15,
            "unit": "MB/s",
            "extra": "1531 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1531 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1531 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K",
            "value": 90251252,
            "unit": "ns/op\t 137.86 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K - ns/op",
            "value": 90251252,
            "unit": "ns/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K - MB/s",
            "value": 137.86,
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
            "value": 90841788,
            "unit": "ns/op\t 136.96 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - ns/op",
            "value": 90841788,
            "unit": "ns/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - MB/s",
            "value": 136.96,
            "unit": "MB/s",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "13 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K",
            "value": 1429628,
            "unit": "ns/op\t8702.68 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "879 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - ns/op",
            "value": 1429628,
            "unit": "ns/op",
            "extra": "879 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - MB/s",
            "value": 8702.68,
            "unit": "MB/s",
            "extra": "879 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "879 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "879 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p",
            "value": 164441,
            "unit": "ns/op\t18914.99 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "7862 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - ns/op",
            "value": 164441,
            "unit": "ns/op",
            "extra": "7862 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - MB/s",
            "value": 18914.99,
            "unit": "MB/s",
            "extra": "7862 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7862 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7862 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p",
            "value": 15091135,
            "unit": "ns/op\t 137.41 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - ns/op",
            "value": 15091135,
            "unit": "ns/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - MB/s",
            "value": 137.41,
            "unit": "MB/s",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "79 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p",
            "value": 148431,
            "unit": "ns/op\t13970.16 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "7545 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - ns/op",
            "value": 148431,
            "unit": "ns/op",
            "extra": "7545 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - MB/s",
            "value": 13970.16,
            "unit": "MB/s",
            "extra": "7545 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7545 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7545 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D",
            "value": 55514,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21536 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - ns/op",
            "value": 55514,
            "unit": "ns/op",
            "extra": "21536 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21536 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21536 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D",
            "value": 1478318,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "813 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D - ns/op",
            "value": 1478318,
            "unit": "ns/op",
            "extra": "813 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "813 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "813 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel",
            "value": 8997694,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "132 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel - ns/op",
            "value": 8997694,
            "unit": "ns/op",
            "extra": "132 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "132 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "132 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p",
            "value": 58.63,
            "unit": "ns/op\t16374.61 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "20438394 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - ns/op",
            "value": 58.63,
            "unit": "ns/op",
            "extra": "20438394 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - MB/s",
            "value": 16374.61,
            "unit": "MB/s",
            "extra": "20438394 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20438394 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20438394 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p",
            "value": 47574,
            "unit": "ns/op\t43587.25 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "26156 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - ns/op",
            "value": 47574,
            "unit": "ns/op",
            "extra": "26156 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - MB/s",
            "value": 43587.25,
            "unit": "MB/s",
            "extra": "26156 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "26156 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "26156 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920",
            "value": 6269,
            "unit": "ns/op\t 306.27 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "192061 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - ns/op",
            "value": 6269,
            "unit": "ns/op",
            "extra": "192061 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - MB/s",
            "value": 306.27,
            "unit": "MB/s",
            "extra": "192061 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "192061 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "192061 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p",
            "value": 10262336,
            "unit": "ns/op\t 303.09 MB/s\t   32768 B/op\t       3 allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p - ns/op",
            "value": 10262336,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p - MB/s",
            "value": 303.09,
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
            "value": 4573409,
            "unit": "ns/op\t 302.27 MB/s\t   20992 B/op\t       3 allocs/op",
            "extra": "261 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_1080pTo720p - ns/op",
            "value": 4573409,
            "unit": "ns/op",
            "extra": "261 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_1080pTo720p - MB/s",
            "value": 302.27,
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
            "value": 35021745,
            "unit": "ns/op\t  39.47 MB/s\t  267799 B/op\t       3 allocs/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - ns/op",
            "value": 35021745,
            "unit": "ns/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - MB/s",
            "value": 39.47,
            "unit": "MB/s",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - B/op",
            "value": 267799,
            "unit": "B/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "31 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080",
            "value": 33933112,
            "unit": "ns/op\t  91.66 MB/s\t      87 B/op\t       3 allocs/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - ns/op",
            "value": 33933112,
            "unit": "ns/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - MB/s",
            "value": 91.66,
            "unit": "MB/s",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - B/op",
            "value": 87,
            "unit": "B/op",
            "extra": "33 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "33 times\n4 procs"
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
          "id": "89dcd56ba92d97dfc04bae10c8654bbfc460e6c0",
          "message": "Reduce encoder latency; tighten VBV and buffers\n\nLower VBV ceiling and buffer to 2x/1s to limit encoder buffering and reduce added latency. Configure low-latency encoder options: rc-lookahead=3, sync-lookahead=0, disable mbtree, force frame-at-a-time (max_b_frames=0), disable scene-change detection, and set constant_bit_rate=false to favor capped VBR/quality. These changes prioritize minimal encoder-induced delay for live switching. Also reduce switcher video processing channel buffer from 8 to 2 to limit queued work and keep processing timely.",
          "timestamp": "2026-03-08T05:14:45-04:00",
          "tree_id": "18d835aed8351d2120d687906fccf4300a8cd2e7",
          "url": "https://github.com/zsiec/switchframe/commit/89dcd56ba92d97dfc04bae10c8654bbfc460e6c0"
        },
        "date": 1772961442181,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBiquadAfterSilence",
            "value": 7997,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "147024 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - ns/op",
            "value": 7997,
            "unit": "ns/op",
            "extra": "147024 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "147024 times\n4 procs"
          },
          {
            "name": "BenchmarkBiquadAfterSilence - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "147024 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear",
            "value": 54.59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22173769 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - ns/op",
            "value": 54.59,
            "unit": "ns/op",
            "extra": "22173769 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "22173769 times\n4 procs"
          },
          {
            "name": "BenchmarkDBToLinear - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "22173769 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS",
            "value": 11.91,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "98744902 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - ns/op",
            "value": 11.91,
            "unit": "ns/op",
            "extra": "98744902 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "98744902 times\n4 procs"
          },
          {
            "name": "BenchmarkLinearToDBFS - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "98744902 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples",
            "value": 2359,
            "unit": "ns/op\t3472.58 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "510180 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - ns/op",
            "value": 2359,
            "unit": "ns/op",
            "extra": "510180 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - MB/s",
            "value": 3472.58,
            "unit": "MB/s",
            "extra": "510180 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "510180 times\n4 procs"
          },
          {
            "name": "BenchmarkPeakLevel_1024Samples - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "510180 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples",
            "value": 6979,
            "unit": "ns/op\t1173.76 MB/s\t    8199 B/op\t       1 allocs/op",
            "extra": "175574 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - ns/op",
            "value": 6979,
            "unit": "ns/op",
            "extra": "175574 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - MB/s",
            "value": 1173.76,
            "unit": "MB/s",
            "extra": "175574 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - B/op",
            "value": 8199,
            "unit": "B/op",
            "extra": "175574 times\n4 procs"
          },
          {
            "name": "BenchmarkEqualPowerCrossfade_1024Samples - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "175574 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048",
            "value": 145.7,
            "unit": "ns/op\t56212.10 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "8224424 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - ns/op",
            "value": 145.7,
            "unit": "ns/op",
            "extra": "8224424 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - MB/s",
            "value": 56212.1,
            "unit": "MB/s",
            "extra": "8224424 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8224424 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFloat32_2048 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8224424 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048",
            "value": 124.2,
            "unit": "ns/op\t65957.87 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "9658627 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - ns/op",
            "value": 124.2,
            "unit": "ns/op",
            "extra": "9658627 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - MB/s",
            "value": 65957.87,
            "unit": "MB/s",
            "extra": "9658627 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9658627 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleFloat32_2048 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9658627 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048",
            "value": 493.6,
            "unit": "ns/op\t16595.42 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2436459 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - ns/op",
            "value": 493.6,
            "unit": "ns/op",
            "extra": "2436459 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - MB/s",
            "value": 16595.42,
            "unit": "MB/s",
            "extra": "2436459 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2436459 times\n4 procs"
          },
          {
            "name": "BenchmarkMulAddFloat32_2048 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2436459 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput",
            "value": 104211,
            "unit": "ns/op\t      42 B/op\t       3 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - ns/op",
            "value": 104211,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - B/op",
            "value": 42,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkEncoderOutput - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB",
            "value": 7388,
            "unit": "ns/op\t6937.61 MB/s\t   57344 B/op\t       1 allocs/op",
            "extra": "174884 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - ns/op",
            "value": 7388,
            "unit": "ns/op",
            "extra": "174884 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - MB/s",
            "value": 6937.61,
            "unit": "MB/s",
            "extra": "174884 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - B/op",
            "value": 57344,
            "unit": "B/op",
            "extra": "174884 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "174884 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1",
            "value": 63490,
            "unit": "ns/op\t 807.25 MB/s\t   57512 B/op\t       4 allocs/op",
            "extra": "18295 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - ns/op",
            "value": 63490,
            "unit": "ns/op",
            "extra": "18295 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - MB/s",
            "value": 807.25,
            "unit": "MB/s",
            "extra": "18295 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - B/op",
            "value": 57512,
            "unit": "B/op",
            "extra": "18295 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1 - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "18295 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into",
            "value": 57264,
            "unit": "ns/op\t 895.01 MB/s\t     168 B/op\t       3 allocs/op",
            "extra": "19568 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - ns/op",
            "value": 57264,
            "unit": "ns/op",
            "extra": "19568 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - MB/s",
            "value": 895.01,
            "unit": "MB/s",
            "extra": "19568 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - B/op",
            "value": 168,
            "unit": "B/op",
            "extra": "19568 times\n4 procs"
          },
          {
            "name": "BenchmarkAnnexBToAVC1Into - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "19568 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs",
            "value": 134,
            "unit": "ns/op\t382570.49 MB/s\t     168 B/op\t       3 allocs/op",
            "extra": "9693524 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - ns/op",
            "value": 134,
            "unit": "ns/op",
            "extra": "9693524 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - MB/s",
            "value": 382570.49,
            "unit": "MB/s",
            "extra": "9693524 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - B/op",
            "value": 168,
            "unit": "B/op",
            "extra": "9693524 times\n4 procs"
          },
          {
            "name": "BenchmarkExtractNALUs - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "9693524 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame",
            "value": 374.7,
            "unit": "ns/op\t5475.98 MB/s\t    2304 B/op\t       1 allocs/op",
            "extra": "2913217 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - ns/op",
            "value": 374.7,
            "unit": "ns/op",
            "extra": "2913217 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - MB/s",
            "value": 5475.98,
            "unit": "MB/s",
            "extra": "2913217 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - B/op",
            "value": 2304,
            "unit": "B/op",
            "extra": "2913217 times\n4 procs"
          },
          {
            "name": "BenchmarkAVC1ToAnnexB_SmallPFrame - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "2913217 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources",
            "value": 15969,
            "unit": "ns/op\t    8066 B/op\t      53 allocs/op",
            "extra": "74355 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - ns/op",
            "value": 15969,
            "unit": "ns/op",
            "extra": "74355 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - B/op",
            "value": 8066,
            "unit": "B/op",
            "extra": "74355 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_8Sources - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "74355 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources",
            "value": 67220,
            "unit": "ns/op\t  60.07 MB/s\t    5392 B/op\t     129 allocs/op",
            "extra": "17624 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - ns/op",
            "value": 67220,
            "unit": "ns/op",
            "extra": "17624 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - MB/s",
            "value": 60.07,
            "unit": "MB/s",
            "extra": "17624 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - B/op",
            "value": 5392,
            "unit": "B/op",
            "extra": "17624 times\n4 procs"
          },
          {
            "name": "BenchmarkStateUnmarshal_8Sources - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "17624 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources",
            "value": 9439,
            "unit": "ns/op\t    4833 B/op\t      29 allocs/op",
            "extra": "124615 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - ns/op",
            "value": 9439,
            "unit": "ns/op",
            "extra": "124615 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - B/op",
            "value": 4833,
            "unit": "B/op",
            "extra": "124615 times\n4 procs"
          },
          {
            "name": "BenchmarkStateMarshal_4Sources - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "124615 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish",
            "value": 16039,
            "unit": "ns/op\t    8066 B/op\t      53 allocs/op",
            "extra": "73416 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - ns/op",
            "value": 16039,
            "unit": "ns/op",
            "extra": "73416 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - B/op",
            "value": 8066,
            "unit": "B/op",
            "extra": "73416 times\n4 procs"
          },
          {
            "name": "BenchmarkStatePublish - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "73416 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish",
            "value": 19945,
            "unit": "ns/op\t    8067 B/op\t      53 allocs/op",
            "extra": "61059 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - ns/op",
            "value": 19945,
            "unit": "ns/op",
            "extra": "61059 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - B/op",
            "value": 8067,
            "unit": "B/op",
            "extra": "61059 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelPublish - allocs/op",
            "value": 53,
            "unit": "allocs/op",
            "extra": "61059 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque",
            "value": 5417,
            "unit": "ns/op\t 354.45 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "221518 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - ns/op",
            "value": 5417,
            "unit": "ns/op",
            "extra": "221518 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - MB/s",
            "value": 354.45,
            "unit": "MB/s",
            "extra": "221518 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "221518 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_FullOpaque - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "221518 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse",
            "value": 2216,
            "unit": "ns/op\t 866.45 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "544023 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - ns/op",
            "value": 2216,
            "unit": "ns/op",
            "extra": "544023 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - MB/s",
            "value": 866.45,
            "unit": "MB/s",
            "extra": "544023 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "544023 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBARowY_1920_Sparse - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "544023 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full",
            "value": 3726028,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "321 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full - ns/op",
            "value": 3726028,
            "unit": "ns/op",
            "extra": "321 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "321 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_Full - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "321 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird",
            "value": 3735086,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "321 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird - ns/op",
            "value": 3735086,
            "unit": "ns/op",
            "extra": "321 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "321 times\n4 procs"
          },
          {
            "name": "BenchmarkAlphaBlendRGBA_TypicalLowerThird - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "321 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p",
            "value": 746912,
            "unit": "ns/op\t 694.06 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1606 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - ns/op",
            "value": 746912,
            "unit": "ns/op",
            "extra": "1606 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - MB/s",
            "value": 694.06,
            "unit": "MB/s",
            "extra": "1606 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1606 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyMaskChroma_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1606 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p",
            "value": 4394372,
            "unit": "ns/op\t 471.88 MB/s\t 2605081 B/op\t       2 allocs/op",
            "extra": "277 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - ns/op",
            "value": 4394372,
            "unit": "ns/op",
            "extra": "277 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - MB/s",
            "value": 471.88,
            "unit": "MB/s",
            "extra": "277 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - B/op",
            "value": 2605081,
            "unit": "B/op",
            "extra": "277 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyOld_1080p - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "277 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p",
            "value": 3703086,
            "unit": "ns/op\t 559.97 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "322 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - ns/op",
            "value": 3703086,
            "unit": "ns/op",
            "extra": "322 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - MB/s",
            "value": 559.97,
            "unit": "MB/s",
            "extra": "322 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "322 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaKeyNew_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "322 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p",
            "value": 843621,
            "unit": "ns/op\t2457.98 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1422 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - ns/op",
            "value": 843621,
            "unit": "ns/op",
            "extra": "1422 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - MB/s",
            "value": 2457.98,
            "unit": "MB/s",
            "extra": "1422 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1422 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKeyMaskLUT_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1422 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p",
            "value": 2161313,
            "unit": "ns/op\t 959.42 MB/s\t 2080773 B/op\t       1 allocs/op",
            "extra": "519 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - ns/op",
            "value": 2161313,
            "unit": "ns/op",
            "extra": "519 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - MB/s",
            "value": 959.42,
            "unit": "MB/s",
            "extra": "519 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - B/op",
            "value": 2080773,
            "unit": "B/op",
            "extra": "519 times\n4 procs"
          },
          {
            "name": "BenchmarkLumaKey_1080p - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "519 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p",
            "value": 18.93,
            "unit": "ns/op\t50707.19 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "61580497 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - ns/op",
            "value": 18.93,
            "unit": "ns/op",
            "extra": "61580497 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - MB/s",
            "value": 50707.19,
            "unit": "MB/s",
            "extra": "61580497 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "61580497 times\n4 procs"
          },
          {
            "name": "BenchmarkChromaVAvg_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "61580497 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p",
            "value": 1356,
            "unit": "ns/op\t3775.45 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "881868 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - ns/op",
            "value": 1356,
            "unit": "ns/op",
            "extra": "881868 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - MB/s",
            "value": 3775.45,
            "unit": "MB/s",
            "extra": "881868 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "881868 times\n4 procs"
          },
          {
            "name": "BenchmarkV210UnpackRow_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "881868 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p",
            "value": 809.1,
            "unit": "ns/op\t6328.17 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1482955 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - ns/op",
            "value": 809.1,
            "unit": "ns/op",
            "extra": "1482955 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - MB/s",
            "value": 6328.17,
            "unit": "MB/s",
            "extra": "1482955 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1482955 times\n4 procs"
          },
          {
            "name": "BenchmarkV210PackRow_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1482955 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p",
            "value": 1782945,
            "unit": "ns/op\t3101.39 MB/s\t 3117061 B/op\t       3 allocs/op",
            "extra": "655 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - ns/op",
            "value": 1782945,
            "unit": "ns/op",
            "extra": "655 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - MB/s",
            "value": 3101.39,
            "unit": "MB/s",
            "extra": "655 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - B/op",
            "value": 3117061,
            "unit": "B/op",
            "extra": "655 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420p_1080p - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "655 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p",
            "value": 1506876,
            "unit": "ns/op\t3669.58 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "786 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p - ns/op",
            "value": 1506876,
            "unit": "ns/op",
            "extra": "786 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p - MB/s",
            "value": 3669.58,
            "unit": "MB/s",
            "extra": "786 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "786 times\n4 procs"
          },
          {
            "name": "BenchmarkV210ToYUV420pInto_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "786 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p",
            "value": 1324829,
            "unit": "ns/op\t2347.78 MB/s\t 5529610 B/op\t       1 allocs/op",
            "extra": "885 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - ns/op",
            "value": 1324829,
            "unit": "ns/op",
            "extra": "885 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - MB/s",
            "value": 2347.78,
            "unit": "MB/s",
            "extra": "885 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - B/op",
            "value": 5529610,
            "unit": "B/op",
            "extra": "885 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210_1080p - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "885 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p",
            "value": 988947,
            "unit": "ns/op\t3145.16 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1270 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - ns/op",
            "value": 988947,
            "unit": "ns/op",
            "extra": "1270 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - MB/s",
            "value": 3145.16,
            "unit": "MB/s",
            "extra": "1270 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1270 times\n4 procs"
          },
          {
            "name": "BenchmarkYUV420pToV210Into_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1270 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p",
            "value": 3494146,
            "unit": "ns/op\t 890.17 MB/s\t 8646669 B/op\t       4 allocs/op",
            "extra": "340 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - ns/op",
            "value": 3494146,
            "unit": "ns/op",
            "extra": "340 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - MB/s",
            "value": 890.17,
            "unit": "MB/s",
            "extra": "340 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - B/op",
            "value": 8646669,
            "unit": "B/op",
            "extra": "340 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTrip_1080p - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "340 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p",
            "value": 2471608,
            "unit": "ns/op\t1258.45 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "478 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - ns/op",
            "value": 2471608,
            "unit": "ns/op",
            "extra": "478 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - MB/s",
            "value": 1258.45,
            "unit": "MB/s",
            "extra": "478 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "478 times\n4 procs"
          },
          {
            "name": "BenchmarkV210RoundTripInto_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "478 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath",
            "value": 66.34,
            "unit": "ns/op\t      24 B/op\t       1 allocs/op",
            "extra": "19286220 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - ns/op",
            "value": 66.34,
            "unit": "ns/op",
            "extra": "19286220 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - B/op",
            "value": 24,
            "unit": "B/op",
            "extra": "19286220 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterVideoHotPath - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "19286220 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath",
            "value": 3543,
            "unit": "ns/op\t    8402 B/op\t       3 allocs/op",
            "extra": "344655 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - ns/op",
            "value": 3543,
            "unit": "ns/op",
            "extra": "344655 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - B/op",
            "value": 8402,
            "unit": "B/op",
            "extra": "344655 times\n4 procs"
          },
          {
            "name": "BenchmarkMXLWriterAudioHotPath - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "344655 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush",
            "value": 2715,
            "unit": "ns/op\t     329 B/op\t       6 allocs/op",
            "extra": "428712 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - ns/op",
            "value": 2715,
            "unit": "ns/op",
            "extra": "428712 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - B/op",
            "value": 329,
            "unit": "B/op",
            "extra": "428712 times\n4 procs"
          },
          {
            "name": "BenchmarkMuxerFlush - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "428712 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame",
            "value": 1148,
            "unit": "ns/op\t   10913 B/op\t       1 allocs/op",
            "extra": "988509 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - ns/op",
            "value": 1148,
            "unit": "ns/op",
            "extra": "988509 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - B/op",
            "value": 10913,
            "unit": "B/op",
            "extra": "988509 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_RecordFrame - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "988509 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip",
            "value": 230708,
            "unit": "ns/op\t 1707610 B/op\t     333 allocs/op",
            "extra": "5416 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - ns/op",
            "value": 230708,
            "unit": "ns/op",
            "extra": "5416 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - B/op",
            "value": 1707610,
            "unit": "B/op",
            "extra": "5416 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayBuffer_ExtractClip - allocs/op",
            "value": 333,
            "unit": "allocs/op",
            "extra": "5416 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo",
            "value": 860.5,
            "unit": "ns/op\t    6066 B/op\t       1 allocs/op",
            "extra": "1510189 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - ns/op",
            "value": 860.5,
            "unit": "ns/op",
            "extra": "1510189 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - B/op",
            "value": 6066,
            "unit": "B/op",
            "extra": "1510189 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayViewer_SendVideo - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1510189 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay",
            "value": 236.4,
            "unit": "ns/op\t     279 B/op\t       0 allocs/op",
            "extra": "7232556 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - ns/op",
            "value": 236.4,
            "unit": "ns/op",
            "extra": "7232556 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - B/op",
            "value": 279,
            "unit": "B/op",
            "extra": "7232556 times\n4 procs"
          },
          {
            "name": "BenchmarkDelayBufferZeroDelay - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7232556 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick",
            "value": 1723,
            "unit": "ns/op\t    4607 B/op\t       0 allocs/op",
            "extra": "969927 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - ns/op",
            "value": 1723,
            "unit": "ns/op",
            "extra": "969927 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - B/op",
            "value": 4607,
            "unit": "B/op",
            "extra": "969927 times\n4 procs"
          },
          {
            "name": "BenchmarkReleaseTick - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "969927 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest",
            "value": 30.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37956490 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - ns/op",
            "value": 30.86,
            "unit": "ns/op",
            "extra": "37956490 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "37956490 times\n4 procs"
          },
          {
            "name": "BenchmarkFrameSyncIngest - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "37956490 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode",
            "value": 16229,
            "unit": "ns/op\t   65777 B/op\t       5 allocs/op",
            "extra": "85462 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - ns/op",
            "value": 16229,
            "unit": "ns/op",
            "extra": "85462 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - B/op",
            "value": 65777,
            "unit": "B/op",
            "extra": "85462 times\n4 procs"
          },
          {
            "name": "BenchmarkPipelineEncode - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "85462 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p",
            "value": 58580,
            "unit": "ns/op\t23598.47 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "20552 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - ns/op",
            "value": 58580,
            "unit": "ns/op",
            "extra": "20552 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - MB/s",
            "value": 23598.47,
            "unit": "MB/s",
            "extra": "20552 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20552 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix720p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20552 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p",
            "value": 141077,
            "unit": "ns/op\t22047.52 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "8517 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - ns/op",
            "value": 141077,
            "unit": "ns/op",
            "extra": "8517 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - MB/s",
            "value": 22047.52,
            "unit": "MB/s",
            "extra": "8517 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8517 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8517 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p",
            "value": 402473,
            "unit": "ns/op\t7728.21 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2972 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - ns/op",
            "value": 402473,
            "unit": "ns/op",
            "extra": "2972 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - MB/s",
            "value": 7728.21,
            "unit": "MB/s",
            "extra": "2972 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2972 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2972 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p",
            "value": 402945,
            "unit": "ns/op\t7719.18 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2971 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - ns/op",
            "value": 402945,
            "unit": "ns/op",
            "extra": "2971 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - MB/s",
            "value": 7719.18,
            "unit": "MB/s",
            "extra": "2971 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2971 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2971 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p",
            "value": 270650,
            "unit": "ns/op\t11492.35 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "4450 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - ns/op",
            "value": 270650,
            "unit": "ns/op",
            "extra": "4450 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - MB/s",
            "value": 11492.35,
            "unit": "MB/s",
            "extra": "4450 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4450 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4450 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p",
            "value": 1902825,
            "unit": "ns/op\t1634.62 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "621 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - ns/op",
            "value": 1902825,
            "unit": "ns/op",
            "extra": "621 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - MB/s",
            "value": 1634.62,
            "unit": "MB/s",
            "extra": "621 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "621 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeVTop1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "621 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p",
            "value": 10616384,
            "unit": "ns/op\t 292.98 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - ns/op",
            "value": 10616384,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - MB/s",
            "value": 292.98,
            "unit": "MB/s",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipeBox1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p",
            "value": 48952,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24404 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - ns/op",
            "value": 48952,
            "unit": "ns/op",
            "extra": "24404 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "24404 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaHLeft1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "24404 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p",
            "value": 1668288,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "720 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - ns/op",
            "value": 1668288,
            "unit": "ns/op",
            "extra": "720 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "720 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaVTop1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "720 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p",
            "value": 10296025,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p - ns/op",
            "value": 10296025,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaBoxCenterOut1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K",
            "value": 973538,
            "unit": "ns/op\t12779.77 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1148 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - ns/op",
            "value": 973538,
            "unit": "ns/op",
            "extra": "1148 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - MB/s",
            "value": 12779.77,
            "unit": "MB/s",
            "extra": "1148 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1148 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendMix4K - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1148 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K",
            "value": 1611996,
            "unit": "ns/op\t7718.13 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "745 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K - ns/op",
            "value": 1611996,
            "unit": "ns/op",
            "extra": "745 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K - MB/s",
            "value": 7718.13,
            "unit": "MB/s",
            "extra": "745 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "745 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendDip4K - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "745 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K",
            "value": 1633528,
            "unit": "ns/op\t7616.40 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "735 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - ns/op",
            "value": 1633528,
            "unit": "ns/op",
            "extra": "735 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - MB/s",
            "value": 7616.4,
            "unit": "MB/s",
            "extra": "735 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "735 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendFTB4K - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "735 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K",
            "value": 1636966,
            "unit": "ns/op\t7600.40 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "760 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - ns/op",
            "value": 1636966,
            "unit": "ns/op",
            "extra": "760 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - MB/s",
            "value": 7600.4,
            "unit": "MB/s",
            "extra": "760 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "760 times\n4 procs"
          },
          {
            "name": "BenchmarkBlendWipe4K - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "760 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p",
            "value": 140650,
            "unit": "ns/op\t22114.48 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "8383 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - ns/op",
            "value": 140650,
            "unit": "ns/op",
            "extra": "8383 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - MB/s",
            "value": 22114.48,
            "unit": "MB/s",
            "extra": "8383 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8383 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelUniform1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8383 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p",
            "value": 267752,
            "unit": "ns/op\t7744.48 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "4467 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - ns/op",
            "value": 267752,
            "unit": "ns/op",
            "extra": "4467 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - MB/s",
            "value": 7744.48,
            "unit": "MB/s",
            "extra": "4467 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4467 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelFadeConst1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4467 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p",
            "value": 147097,
            "unit": "ns/op\t14096.82 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "8133 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - ns/op",
            "value": 147097,
            "unit": "ns/op",
            "extra": "8133 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - MB/s",
            "value": 14096.82,
            "unit": "MB/s",
            "extra": "8133 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8133 times\n4 procs"
          },
          {
            "name": "BenchmarkKernelAlpha1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8133 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D",
            "value": 48841,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24420 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - ns/op",
            "value": 48841,
            "unit": "ns/op",
            "extra": "24420 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "24420 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/horizontal_1D - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "24420 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D",
            "value": 1667634,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "718 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D - ns/op",
            "value": 1667634,
            "unit": "ns/op",
            "extra": "718 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "718 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/vertical_1D - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "718 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel",
            "value": 10442606,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel - ns/op",
            "value": 10442606,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkWipeAlphaLinear/box_per_pixel - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p",
            "value": 60.14,
            "unit": "ns/op\t15962.46 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "20566060 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - ns/op",
            "value": 60.14,
            "unit": "ns/op",
            "extra": "20566060 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - MB/s",
            "value": 15962.46,
            "unit": "MB/s",
            "extra": "20566060 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20566060 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlpha2x2_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20566060 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p",
            "value": 48979,
            "unit": "ns/op\t42336.58 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "23870 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - ns/op",
            "value": 48979,
            "unit": "ns/op",
            "extra": "23870 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - MB/s",
            "value": 42336.58,
            "unit": "MB/s",
            "extra": "23870 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "23870 times\n4 procs"
          },
          {
            "name": "BenchmarkDownsampleAlphaToChroma_1080p - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "23870 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920",
            "value": 6916,
            "unit": "ns/op\t 277.60 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "173535 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - ns/op",
            "value": 6916,
            "unit": "ns/op",
            "extra": "173535 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - MB/s",
            "value": 277.6,
            "unit": "MB/s",
            "extra": "173535 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "173535 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleBilinearRow_1920 - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "173535 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p",
            "value": 11368657,
            "unit": "ns/op\t 273.59 MB/s\t   32768 B/op\t       3 allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p - ns/op",
            "value": 11368657,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_720pTo1080p - MB/s",
            "value": 273.59,
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
            "value": 5178388,
            "unit": "ns/op\t 266.96 MB/s\t   20992 B/op\t       3 allocs/op",
            "extra": "237 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_1080pTo720p - ns/op",
            "value": 5178388,
            "unit": "ns/op",
            "extra": "237 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_1080pTo720p - MB/s",
            "value": 266.96,
            "unit": "MB/s",
            "extra": "237 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_1080pTo720p - B/op",
            "value": 20992,
            "unit": "B/op",
            "extra": "237 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleYUV420_1080pTo720p - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "237 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720",
            "value": 39567974,
            "unit": "ns/op\t  34.94 MB/s\t  307463 B/op\t       3 allocs/op",
            "extra": "27 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - ns/op",
            "value": 39567974,
            "unit": "ns/op",
            "extra": "27 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - MB/s",
            "value": 34.94,
            "unit": "MB/s",
            "extra": "27 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - B/op",
            "value": 307463,
            "unit": "B/op",
            "extra": "27 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_1080to720 - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "27 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080",
            "value": 38234306,
            "unit": "ns/op\t  81.35 MB/s\t  276724 B/op\t       3 allocs/op",
            "extra": "30 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - ns/op",
            "value": 38234306,
            "unit": "ns/op",
            "extra": "30 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - MB/s",
            "value": 81.35,
            "unit": "MB/s",
            "extra": "30 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - B/op",
            "value": 276724,
            "unit": "B/op",
            "extra": "30 times\n4 procs"
          },
          {
            "name": "BenchmarkScaleLanczos_720to1080 - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "30 times\n4 procs"
          }
        ]
      }
    ]
  }
}