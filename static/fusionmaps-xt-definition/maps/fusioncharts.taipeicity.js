(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=330)})({330:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(331);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},331:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright InfoSoft Global Pvt. Ltd.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author InfoSoft Global Pvt. Ltd.
 * @meta package_map_pack
 * @id fusionmaps.TaipeiCity.1.03-24-2017 02:52:38
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"TaipeiCity",revision:1,standaloneInit:true,baseWidth:531,baseHeight:700,baseScaleFactor:10,entities:{"TW.TC.BT":{outlines:[[M,2493,131,Q,2487,144,2480,163,2465,200,2446,208,2434,213,2434,227,2434,247,2444,256,2454,266,2454,308,2454,347,2442,365,2424,392,2379,392,2370,392,2354,387,2337,383,2336,383,2329,383,2296,406,2265,426,2254,436,2219,468,2215,500,2212,517,2210,553,2209,556,2209,560,2209,581,2212,607,2210,628,2184,636,2178,637,2145,659,2116,676,2097,676,2059,676,2056,677,2031,681,2018,699,2015,704,2014,718,2013,731,2009,737,2004,743,1977,751,1959,756,1947,758,1925,762,1864,768,1815,774,1779,785,1752,793,1747,810,1744,824,1731,837,1719,847,1716,851,1713,855,1685,885,1672,898,1672,918,1672,924,1682,954,1691,985,1691,992,1691,995,1691,1010,1691,1027,1687,1035,1677,1046,1672,1054,1663,1068,1657,1103,1652,1133,1650,1157,1647,1164,1615,1164,1557,1164,1527,1149,1497,1133,1466,1133,1440,1133,1429,1149,1419,1164,1386,1164,1363,1164,1343,1155,1310,1139,1286,1133,1254,1123,1235,1096,1217,1071,1201,1071,1180,1071,1176,1100,1168,1145,1164,1152,1154,1172,1101,1228,1107,1258,1096,1278,1089,1304,1046,1324,1037,1327,1e3,1358,966,1385,948,1389,936,1393,929,1417,919,1448,918,1448,911,1460,895,1480,879,1501,873,1510,848,1553,833,1579,805,1628,802,1638,795,1673,752,1689,703,1699,689,1705,669,1714,667,1732,664,1763,664,1764,658,1779,642,1786,624,1795,614,1808,596,1832,564,1851,545,1863,537,1881,533,1892,526,1910,520,1926,478,1954,446,1976,436,1991,434,1993,433,1995,433,2004,431,2023,427,2044,416,2056,409,2063,383,2080,362,2094,350,2112,341,2126,295,2172,261,2207,249,2248,237,2288,233,2334,231,2359,227,2410,225,2424,204,2433,171,2447,164,2453,141,2470,113,2469,100,2468,100,2500,100,2519,121,2586,141,2653,141,2654,L,139,2659,Q,142,2670,157,2687,171,2702,184,2712,187,2714,201,2718,213,2722,218,2726,234,2741,249,2749,271,2760,308,2781,341,2795,379,2795,409,2795,426,2789,449,2780,486,2775,499,2774,540,2749,551,2744,591,2726,683,2694,721,2684,780,2669,830,2669,830,2666,832,2667,835,2669,836,2669,843,2669,856,2668,885,2668,896,2671,907,2673,944,2698,972,2717,1011,2778,1037,2820,1035,2879,1033,2946,1033,2965,1032,2969,1032,2971,1035,2987,1037,3020,1039,3059,1037,3088,1035,3113,1036,3123,1039,3138,1048,3149,1054,3155,1070,3157,1089,3159,1096,3167,1117,3188,1151,3190,1170,3190,1203,3188,1214,3189,1266,3196,1313,3203,1325,3203,1348,3203,1353,3194,1362,3178,1390,3164,1428,3144,1434,3142,1443,3138,1480,3127,1519,3113,1519,3112,1544,3100,1547,3084,1561,3008,1582,2995,1591,2992,1597,2990,1610,2985,1613,2971,1615,2961,1622,2946,1629,2930,1631,2926,1634,2915,1636,2884,1638,2852,1641,2840,1642,2831,1655,2822,1670,2812,1673,2806,1682,2788,1683,2786,1688,2779,1698,2777,1701,2776,1718,2775,1731,2774,1735,2772,1757,2737,1757,2734,1757,2725,1744,2694,L,1731,2665,Q,1720,2644,1715,2631,1704,2609,1704,2600,1704,2586,1722,2556,1736,2531,1752,2511,1760,2500,1766,2462,1775,2429,1813,2431,1833,2432,1842,2426,1854,2419,1853,2398,1853,2373,1878,2344,1882,2338,1891,2335,1896,2332,1896,2324,L,1900,2245,Q,1900,2232,1895,2228,1890,2223,1890,2213,L,1893,2185,Q,1893,2172,1888,2164,1882,2154,1878,2132,1877,2121,1878,2104,1878,2085,1878,2077,1893,2066,1913,2045,1933,2029,1953,2021,1969,2015,1994,2002,2017,1989,2037,1982,2047,1978,2109,1945,2168,1916,2183,1916,2192,1916,2206,1923,2220,1929,2240,1929,2262,1929,2267,1926,2278,1920,2283,1892,2286,1873,2309,1873,2331,1873,2334,1852,2334,1835,2343,1785,2356,1719,2357,1713,2360,1688,2384,1648,2407,1611,2429,1592,2437,1585,2451,1570,2462,1557,2460,1542,2463,1522,2468,1512,2471,1506,2483,1486,2491,1478,2504,1434,2514,1398,2539,1390,2567,1381,2590,1368,2604,1361,2629,1345,2648,1334,2655,1300,2661,1259,2663,1241,2669,1196,2683,1175,2696,1157,2696,1136,2696,1122,2666,1061,2635,1001,2635,999,2635,987,2640,983,2644,980,2658,968,2660,967,2666,950,2672,935,2677,933,2705,914,2742,908,2759,904,2765,880,2767,852,2771,843,2774,836,2793,811,2803,797,2806,787,L,2811,772,Q,2818,759,2821,743,2822,737,2822,712,2822,686,2816,671,2809,656,2809,627,2809,595,2827,590,2855,582,2877,536,2878,533,2881,521,2883,515,2888,512,2893,506,2903,506,2908,505,2916,503,2929,497,2947,484,2964,472,2971,464,2965,462,2961,458,2944,443,2927,436,2909,428,2903,414,2889,384,2888,383,2876,365,2824,351,2774,337,2763,315,2704,190,2671,31,L,2656,31,Q,2637,35,2624,38,2600,43,2590,58,2581,72,2552,77,2523,83,2516,91,Q,2505,105,2493,131,Z]],label:"Beitou",shortLabel:"BT",labelPosition:[117.9,214.3],labelAlignment:[CEN,MID]},"TW.TC.DN":{outlines:[[M,2216,4624,Q,2197,4623,2174,4622,2150,4621,2116,4626,2078,4631,2064,4631,2047,4631,2032,4627,2017,4622,1997,4622,1980,4622,1972,4624,1962,4620,1944,4613,1944,4616,1944,4655,1944,4682,1938,4700,1938,4716,1940,4748,1941,4778,1938,4800,1930,4866,1931,4921,1925,4944,1866,4944,1847,4944,1835,4935,1822,4925,1800,4922,1786,4921,1766,4904,1746,4888,1738,4888,1722,4888,1693,4960,1666,5030,1666,5061,1666,5082,1672,5098,1681,5122,1688,5150,1703,5164,1733,5203,1766,5245,1779,5258,1785,5264,1834,5311,1867,5343,1881,5359,1906,5389,1975,5456,2034,5521,2044,5581,2053,5589,2066,5607,2091,5642,2112,5648,2140,5656,2199,5657,2242,5657,2248,5658,L,2249,5658,Q,2286,5656,2328,5627,2372,5596,2374,5596,2385,5596,2401,5612,2417,5627,2436,5627,2438,5627,2452,5625,2467,5623,2477,5624,2487,5624,2490,5609,2493,5593,2495,5591,2510,5577,2522,5565,2532,5554,2563,5554,2591,5554,2605,5568,2615,5579,2652,5618,2683,5645,2698,5661,2702,5663,2741,5663,2760,5663,2765,5662,2774,5661,2786,5655,2789,5652,2797,5650,2792,5646,2781,5633,2771,5620,2771,5619,2753,5600,2744,5592,2730,5578,2721,5556,2712,5533,2709,5524,2693,5481,2674,5457,2670,5453,2649,5434,2633,5419,2627,5408,2619,5393,2583,5359,2573,5350,2562,5334,2549,5315,2542,5305,2504,5253,2493,5244,2482,5235,2467,5221,2446,5200,2446,5195,2446,5184,2455,5178,2466,5169,2472,5165,2474,5162,2475,5161,2509,5125,2525,5110,2541,5100,2549,5092,2564,5079,2564,5056,2564,5038,2568,4983,2570,4942,2564,4623,2527,4638,2500,4638,2434,4638,2400,4635,2393,4635,2377,4628,2362,4622,2355,4621,2348,4620,2338,4620,L,2242,4625,Q,2231,4624,2216,4624,Z]],label:"Da'an",shortLabel:"DN",labelPosition:[219.9,497.8],labelAlignment:[CEN,MID]},"TW.TC.DT":{outlines:[[M,1652,3711,Q,1589,3686,1579,3680,1556,3666,1547,3661,1532,3652,1519,3652,1511,3652,1472,3665,1434,3680,1430,3680,1414,3683,1386,3692,1357,3701,1355,3700,1353,3699,1335,3702,L,1335,3701,Q,1304,3700,1262,3692,L,1241,3692,Q,1251,3720,1260,3761,1272,3817,1285,3873,1298,3929,1298,3979,1298,4029,1291,4086,1283,4144,1275,4167,1267,4190,1266,4204,1264,4219,1264,4236,1264,4267,1273,4285,1280,4305,1280,4327,1280,4332,1266,4398,1251,4466,1245,4484,1240,4501,1225,4516,1219,4523,1207,4533,1231,4534,1293,4544,1343,4553,1346,4551,L,1346,4550,Q,1349,4550,1352,4549,1364,4547,1382,4535,1407,4519,1426,4519,1438,4519,1490,4532,1538,4533,1563,4532,1576,4530,1590,4531,1635,4461,1628,4396,1628,4357,1636,4331,1638,4321,1638,4270,1638,4223,1615,4179,1592,4136,1594,4045,1586,4010,1599,3962,1618,3890,1620,3876,1622,3849,1624,3836,1628,3811,1636,3797,L,1672,3733,Q,1667,3726,1664,3721,Q,1659,3714,1652,3711,Z]],label:"Datong",shortLabel:"DT",labelPosition:[142.3,410.1],labelAlignment:[CEN,MID]},"TW.TC.NG":{outlines:[[M,4208,4279,Q,4208,4266,4194,4253,4178,4240,4177,4223,4175,4195,4144,4162,4132,4148,4084,4122,4044,4101,4036,4086,3999,4081,3979,4089,3951,4099,3930,4139,3914,4167,3880,4185,3875,4187,3809,4212,3741,4237,3730,4240,3702,4247,3667,4245,3629,4242,3592,4259,3550,4277,3524,4277,3507,4277,3503,4276,3493,4272,3493,4259,3493,4251,3512,4225,3531,4199,3531,4185,3531,4165,3521,4158,3513,4152,3491,4152,3464,4152,3454,4174,3443,4208,3429,4232,3414,4258,3392,4276,3364,4296,3353,4311,3339,4329,3298,4348,3289,4352,3242,4370,3237,4373,3201,4391,3165,4408,3150,4410,3134,4410,3130,4415,3125,4419,3123,4440,3120,4483,3120,4486,3119,4488,3117,4490,3115,4513,3131,4558,3152,4615,3154,4625,3158,4647,3197,4676,3234,4704,3270,4713,3293,4719,3317,4767,3333,4803,3353,4831,3362,4844,3365,4863,3367,4874,3370,4897,3374,4916,3398,4966,3403,4972,3420,4986,3432,4995,3432,5010,3432,5035,3381,5052,3330,5069,3333,5102,3323,5119,3293,5162,3266,5206,3255,5244,3252,5256,3246,5285,3242,5307,3236,5322,3226,5340,3215,5355,3208,5364,3198,5364,3187,5364,3181,5369,3164,5383,3152,5400,3130,5429,3125,5435,3101,5463,3097,5469,3090,5481,3092,5501,3103,5508,3114,5519,3141,5549,3148,5549,3158,5549,3164,5543,3170,5537,3186,5534,3190,5534,3208,5527,3223,5521,3230,5521,3288,5518,3322,5510,3334,5507,3366,5495,3398,5484,3423,5482,3430,5481,3472,5466,3514,5451,3518,5451,3532,5451,3550,5459,3563,5465,3570,5471,3578,5465,3590,5464,3606,5463,3629,5457,3650,5452,3660,5452,3691,5453,3709,5401,3729,5342,3740,5336,3751,5329,3771,5327,3782,5325,3808,5323,3831,5321,3842,5304,3853,5289,3868,5289,3871,5289,3903,5306,3935,5324,3951,5325,3965,5327,4007,5326,4035,5325,4051,5331,4055,5333,4070,5347,4085,5360,4090,5361,L,4138,5361,Q,4150,5361,4180,5368,4197,5372,4213,5369,4217,5368,4221,5368,4253,5362,4297,5339,4354,5309,4372,5277,4391,5221,4400,5196,4415,5153,4449,5153,4474,5153,4512,5176,4550,5200,4619,5200,4638,5200,4706,5186,4719,5186,4736,5196,4764,5212,4765,5212,4771,5215,4783,5236,4793,5254,4806,5254,4815,5254,4859,5220,4919,5186,5008,5186,5036,5186,5102,5203,5135,5212,5167,5220,5238,5220,5258,5194,5274,5174,5274,5109,5277,5091,5274,5081,5271,5063,5251,5063,5225,5063,5216,5058,5207,5052,5193,5052,5174,5052,5156,5061,5135,5074,5120,5081,5089,5101,5071,5112,5037,5131,5026,5131,5015,5131,5009,5129,5002,5127,4983,5127,4960,5127,4949,5119,4939,5111,4928,5114,4918,5116,4883,5110,4847,5104,4840,5105,4819,5108,4810,5119,L,4799,5119,4777,5074,Q,4760,5047,4702,5027,4643,5006,4623,4991,4602,4974,4589,4963,4565,4943,4545,4936,4520,4925,4506,4920,4493,4915,4481,4912,L,4434,4906,Q,4428,4906,4424,4905,4400,4902,4388,4882,4378,4865,4356,4857,4330,4850,4313,4844,4306,4841,4278,4838,4256,4835,4242,4823,4221,4806,4213,4797,4209,4791,4200,4788,4187,4785,4183,4782,4178,4777,4174,4763,4170,4748,4167,4741,4164,4733,4150,4722,4138,4713,4136,4711,4126,4699,4113,4673,4100,4644,4094,4632,L,4072,4595,Q,4059,4573,4053,4555,4051,4548,4045,4511,4038,4474,4038,4469,4038,4444,4063,4432,4096,4416,4108,4394,4110,4391,4128,4376,4145,4363,4147,4352,4147,4351,4151,4301,4181,4301,4183,4301,Q,4208,4297,4208,4279,Z]],label:"Nangang",shortLabel:"NG",labelPosition:[374.9,481.6],labelAlignment:[CEN,MID]},"TW.TC.NE":{outlines:[[M,3891,2953,Q,3867,2937,3832,2929,3779,2917,3765,2912,3760,2910,3712,2888,3675,2872,3645,2864,3595,2852,3585,2847,3557,2834,3549,2809,3539,2760,3539,2748,3539,2747,3529,2722,3518,2698,3518,2691,3518,2683,3521,2679,3508,2678,3493,2679,3467,2656,3442,2687,3404,2694,3383,2694,3367,2694,3349,2705,3339,2708,3335,2710,3325,2715,3324,2726,3321,2749,3317,2758,3311,2775,3297,2786,3289,2792,3284,2812,3279,2834,3273,2840,3271,2843,3248,2855,3227,2867,3221,2875,3208,2890,3190,2895,3186,2896,3161,2897,3146,2897,3129,2920,3111,2943,3105,2943,3089,2931,3070,2918,3033,2893,3014,2893,2999,2893,2965,2911,2931,2928,2921,2928,2899,2928,2875,2951,2857,2969,2852,2984,2852,2987,2852,2990,2852,3020,2851,3034,2837,3044,2832,3053,2826,3064,2820,3074,2815,3089,2812,3095,2808,3106,2795,3109,2780,3109,2773,3111,2760,3112,2745,3121,2727,3132,2700,3135,2688,3137,2652,3137,2617,3134,2603,3136,2581,3139,2576,3167,2572,3185,2547,3204,2522,3223,2518,3242,2512,3274,2437,3302,2423,3308,2406,3315,2410,3318,2422,3327,2434,3336,2436,3346,2438,3358,2457,3383,2470,3399,2496,3409,2510,3415,2540,3424,2542,3441,2549,3471,2550,3474,2555,3481,2559,3487,2560,3492,2560,3511,2562,3514,2565,3523,2582,3523,2591,3523,2608,3521,2626,3519,2636,3524,2643,3528,2654,3540,2660,3573,2705,3650,2718,3671,2750,3690,2768,3701,2803,3722,2810,3727,2827,3742,2836,3749,2846,3752,2852,3755,2857,3754,2871,3752,2875,3755,2879,3758,2895,3781,2916,3810,2921,3840,2923,3853,2923,3901,2923,3973,2914,3992,2906,4006,2888,4035,2873,4061,2864,4082,2859,4103,2872,4139,2880,4158,2893,4193,2895,4201,2895,4220,2895,4222,2906,4247,L,2916,4274,Q,2924,4293,2924,4306,2924,4326,2917,4343,2911,4360,2911,4387,2911,4420,2924,4432,2938,4446,2974,4446,2982,4446,3041,4427,3100,4408,3107,4408,3111,4408,3116,4411,3121,4414,3130,4415,3134,4410,3150,4410,3165,4408,3201,4391,3237,4373,3242,4370,3289,4352,3298,4348,3339,4329,3353,4311,3364,4296,3392,4276,3414,4258,3429,4232,3443,4208,3454,4174,3464,4152,3491,4152,3513,4152,3521,4158,3531,4165,3531,4185,3531,4199,3512,4225,3493,4251,3493,4259,3493,4272,3503,4276,3507,4277,3524,4277,3550,4277,3592,4259,3629,4242,3667,4245,3702,4247,3730,4240,3741,4237,3809,4212,3875,4187,3880,4185,3914,4167,3930,4139,3951,4099,3979,4089,3999,4081,4036,4086,L,4036,4085,Q,4038,4072,4047,4060,4051,4054,4067,4036,4069,4034,4072,4008,4075,3985,4090,3980,4118,3970,4137,3953,4165,3927,4165,3890,4165,3886,4158,3864,4151,3840,4151,3833,4151,3813,4185,3796,4219,3779,4224,3757,4235,3685,4247,3646,4250,3625,4253,3614,4256,3597,4267,3589,4269,3588,4294,3577,4311,3568,4313,3559,4344,3475,4342,3457,4339,3439,4314,3403,4301,3386,4297,3376,L,4291,3366,Q,4285,3337,4280,3320,4269,3282,4269,3262,4269,3246,4270,3243,4272,3240,4283,3221,L,4283,3198,Q,4236,3194,4228,3193,4191,3183,4172,3152,4158,3132,4127,3108,4090,3082,4072,3067,4067,3063,4035,3024,4008,2992,3992,2987,3988,2985,3941,2974,Q,3909,2966,3891,2953,Z]],label:"Neihu",shortLabel:"NE",labelPosition:[337.4,355.8],labelAlignment:[CEN,MID]},"TW.TC.SH":{outlines:[[M,3224,590,Q,3224,565,3218,554,3205,537,3191,513,3185,503,3186,463,3188,438,3159,438,3145,438,3124,449,3104,459,3091,459,3079,459,3068,450,3058,442,3049,442,3042,442,3026,455,3011,467,2989,467,2979,467,2971,464,2964,472,2947,484,2929,497,2916,503,2908,505,2903,506,2893,506,2888,512,2883,515,2881,521,2878,533,2877,536,2855,582,2827,590,2809,595,2809,627,2809,656,2816,671,2822,686,2822,712,2822,737,2821,743,2818,759,2811,772,L,2806,787,Q,2803,797,2793,811,2774,836,2771,843,2767,852,2765,880,2759,904,2742,908,2705,914,2677,933,2672,935,2666,950,2660,967,2658,968,2644,980,2640,983,2635,987,2635,999,2635,1001,2666,1061,2696,1122,2696,1136,2696,1157,2683,1175,2669,1196,2663,1241,2661,1259,2655,1300,2648,1334,2629,1345,2604,1361,2590,1368,2567,1381,2539,1390,2514,1398,2504,1434,2491,1478,2483,1486,2471,1506,2468,1512,2463,1522,2460,1542,2462,1557,2451,1570,2437,1585,2429,1592,2407,1611,2384,1648,2360,1688,2357,1713,2356,1719,2343,1785,2334,1835,2334,1852,2331,1873,2309,1873,2286,1873,2283,1892,2278,1920,2267,1926,2262,1929,2240,1929,2220,1929,2206,1923,2192,1916,2183,1916,2168,1916,2109,1945,2047,1978,2037,1982,2017,1989,1994,2002,1969,2015,1953,2021,1933,2029,1913,2045,1893,2066,1878,2077,1878,2085,1878,2104,1877,2121,1878,2132,1882,2154,1888,2164,1893,2172,1893,2185,L,1890,2213,Q,1890,2223,1895,2228,1900,2232,1900,2245,L,1896,2324,Q,1896,2332,1891,2335,1882,2338,1878,2344,1853,2373,1853,2398,1854,2419,1842,2426,1833,2432,1813,2431,1775,2429,1766,2462,1760,2500,1752,2511,1736,2531,1722,2556,1704,2586,1704,2600,1704,2609,1715,2631,1720,2644,1731,2665,L,1744,2694,Q,1757,2725,1757,2734,1757,2737,1735,2772,1731,2774,1718,2775,1701,2776,1698,2777,1688,2779,1683,2786,1682,2788,1673,2806,1670,2812,1655,2822,1642,2831,1641,2840,1638,2852,1636,2884,1634,2915,1631,2926,1629,2930,1622,2946,1615,2961,1613,2971,1610,2985,1597,2990,1591,2992,1582,2995,1561,3008,1547,3084,1544,3100,1519,3112,1519,3113,1480,3127,1443,3138,1434,3142,1428,3144,1390,3164,1362,3178,1353,3194,1348,3203,1325,3203,1313,3203,1266,3196,1214,3189,1203,3188,1170,3190,1151,3190,1117,3188,1096,3167,1089,3159,1070,3157,1054,3155,1048,3149,1039,3138,1036,3123,1035,3113,1037,3088,1039,3059,1037,3020,1035,2987,1032,2971,1032,2969,1033,2965,1033,2946,1035,2879,1037,2820,1011,2778,972,2717,944,2698,907,2673,896,2671,885,2668,856,2668,843,2669,836,2669,833,2669,830,2669,780,2669,721,2684,683,2694,591,2726,551,2744,540,2749,499,2774,486,2775,449,2780,426,2789,409,2795,379,2795,341,2795,308,2781,271,2760,249,2749,234,2741,218,2726,213,2722,201,2718,187,2714,184,2712,171,2702,157,2687,142,2670,139,2659,L,99,2720,Q,55,2790,42,2837,58,2922,150,2978,240,3033,355,3034,514,3037,539,3041,595,3049,720,3096,760,3111,804,3141,855,3177,869,3206,882,3234,937,3276,1017,3337,1026,3346,1095,3411,1151,3495,1215,3592,1234,3673,1238,3681,1241,3692,L,1262,3692,Q,1304,3700,1335,3701,L,1335,3702,Q,1353,3699,1355,3700,1357,3701,1386,3692,1414,3683,1430,3680,1434,3680,1472,3665,1511,3652,1519,3652,1532,3652,1547,3661,1556,3666,1579,3680,1589,3686,1652,3711,1659,3714,1664,3721,1667,3726,1672,3733,1677,3739,1685,3742,1695,3745,1703,3752,1722,3767,1747,3802,L,1769,3802,1770,3759,Q,1770,3746,1759,3739,1747,3730,1747,3717,1747,3711,1739,3693,1731,3676,1731,3668,L,1731,3620,Q,1756,3627,1778,3614,1793,3605,1812,3581,1842,3541,1880,3518,1894,3510,1912,3485,1936,3453,1940,3449,L,1998,3387,Q,2029,3358,2051,3343,2092,3315,2125,3315,2175,3315,2218,3339,2239,3351,2258,3363,2266,3363,2338,3338,2376,3325,2406,3315,2423,3308,2437,3302,2512,3274,2518,3242,2522,3223,2547,3204,2572,3185,2576,3167,2581,3139,2603,3136,2617,3134,2652,3137,2688,3137,2700,3135,2727,3132,2745,3121,2760,3112,2773,3111,2780,3109,2795,3109,2808,3106,2812,3095,2815,3089,2820,3074,2826,3064,2832,3053,2837,3044,2851,3034,2852,3020,2852,2990,2852,2987,2852,2984,2857,2969,2875,2951,2899,2928,2921,2928,2931,2928,2965,2911,2999,2893,3014,2893,3033,2893,3070,2918,3089,2931,3105,2943,3111,2943,3129,2920,3146,2897,3161,2897,3186,2896,3190,2895,3208,2890,3221,2875,3227,2867,3248,2855,3271,2843,3273,2840,3279,2834,3284,2812,3289,2792,3297,2786,3311,2775,3317,2758,3321,2749,3324,2726,3325,2715,3335,2710,3339,2708,3349,2705,3367,2694,3383,2694,3404,2694,3442,2687,3467,2656,3493,2679,3508,2678,3521,2679,3522,2677,3524,2676,3535,2672,3545,2653,3545,2634,3546,2627,3546,2617,3549,2608,3556,2588,3570,2564,3592,2529,3610,2525,3613,2507,3622,2487,3634,2463,3640,2448,3645,2437,3654,2397,3660,2369,3670,2362,3672,2361,3695,2360,3717,2360,3727,2355,3732,2353,3772,2329,3789,2319,3802,2300,3815,2281,3815,2266,3815,2254,3801,2250,3783,2246,3773,2244,3729,2233,3729,2179,3729,2148,3756,2113,L,3756,2089,Q,3735,2094,3697,2051,3688,2040,3669,2030,3645,2017,3635,2010,3595,1981,3583,1969,3554,1940,3542,1922,3529,1898,3517,1851,3504,1801,3495,1783,3478,1734,3465,1711,3444,1673,3410,1678,3389,1670,3378,1664,3356,1651,3356,1631,3356,1607,3390,1569,3424,1531,3424,1495,3424,1465,3422,1461,3411,1445,3395,1412,3389,1390,3381,1373,3368,1342,3354,1342,3304,1347,3288,1347,3270,1347,3258,1330,3236,1301,3231,1296,3215,1283,3192,1283,3164,1286,3149,1286,3085,1283,3064,1263,3047,1246,3047,1199,3047,1124,3123,1056,3170,1015,3176,1008,3199,983,3199,957,3199,929,3183,902,3161,864,3149,839,3147,834,3145,830,3145,822,3145,811,3145,783,3159,763,3173,743,3173,733,3173,729,3166,721,3158,714,3158,702,3158,661,3192,635,Q,3224,610,3224,590,Z]],label:"Shilin",shortLabel:"SH",labelPosition:[274.4,216.8],labelAlignment:[CEN,MID]},"TW.TC.SO":{outlines:[[M,2921,3840,Q,2916,3810,2895,3781,2879,3758,2875,3755,2871,3752,2857,3754,2852,3755,2846,3752,2814,3780,2780,3805,L,2719,3852,Q,2701,3852,2693,3858,2684,3864,2680,3864,L,2635,3842,Q,2622,3835,2577,3803,2564,3792,2554,3789,2546,3786,2525,3783,2502,3780,2493,3777,2488,3774,2471,3774,2452,3774,2449,3776,2439,3780,2443,3801,2443,3813,2436,3823,2426,3838,2424,3844,2420,3858,2409,3863,2395,3866,2385,3870,2380,3871,2362,3885,2346,3896,2334,3898,2281,3903,2200,3901,2114,3898,2079,3898,L,2079,3941,Q,2084,3942,2112,3958,2138,3972,2147,3973,2187,3981,2233,4013,2263,4033,2309,4064,2346,4089,2376,4116,2378,4120,2387,4130,2394,4137,2394,4144,L,2342,4267,Q,2339,4273,2334,4293,2327,4310,2310,4313,2277,4319,2246,4344,2225,4361,2218,4407,2215,4432,2216,4479,L,2216,4624,Q,2231,4624,2242,4625,L,2338,4620,Q,2348,4620,2355,4621,2362,4622,2377,4628,2393,4635,2400,4635,2434,4638,2500,4638,2527,4638,2564,4623,2572,4619,2581,4616,2608,4604,2661,4577,2711,4556,2763,4538,2823,4519,2858,4505,2877,4497,2936,4498,3033,4498,3042,4498,3052,4498,3086,4498,3111,4497,3117,4490,3119,4488,3120,4486,3120,4483,3123,4440,3125,4419,3130,4415,3121,4414,3116,4411,3111,4408,3107,4408,3100,4408,3041,4427,2982,4446,2974,4446,2938,4446,2924,4432,2911,4420,2911,4387,2911,4360,2917,4343,2924,4326,2924,4306,2924,4293,2916,4274,L,2906,4247,Q,2895,4222,2895,4220,2895,4201,2893,4193,2880,4158,2872,4139,2859,4103,2864,4082,2873,4061,2888,4035,2906,4006,2914,3992,2923,3973,2923,3901,Q,2923,3853,2921,3840,Z]],label:"Songshan",shortLabel:"SO",labelPosition:[260.4,419.5],labelAlignment:[CEN,MID]},"TW.TC.WA":{outlines:[[M,1207,4533,Q,1201,4538,1195,4543,1185,4553,1167,4579,1149,4604,1141,4611,1107,4639,1003,4689,903,4738,858,4775,855,4776,854,4778,817,4801,756,4816,709,4836,709,4908,709,4947,772,5083,833,5218,833,5248,829,5356,845,5430,865,5518,918,5582,928,5590,935,5604,938,5611,953,5611,1037,5611,1201,5423,1212,5410,1246,5361,1273,5322,1298,5300,1314,5286,1332,5282,1341,5280,1366,5279,1384,5279,1406,5272,1422,5267,1429,5266,1429,5234,1428,5224,1423,5201,1406,5199,1391,5197,1384,5191,1380,5188,1376,5187,1368,5186,1367,5186,1341,5178,1325,5166,L,1288,5141,Q,1280,5131,1279,5130,L,1271,5119,Q,1263,5106,1257,5101,1253,5097,1245,5084,1238,5070,1234,5067,1221,5055,1219,5046,1217,5041,1217,5028,1217,5006,1225,4992,1243,4958,1248,4947,1260,4919,1266,4903,1276,4874,1279,4858,1292,4828,1300,4782,1312,4716,1314,4707,1321,4682,1325,4666,1333,4633,1333,4624,1332,4607,1344,4581,1348,4574,1349,4563,1351,4553,1352,4549,1349,4550,1346,4550,L,1346,4551,Q,1343,4553,1293,4544,Q,1231,4534,1207,4533,Z]],label:"Wanhua",shortLabel:"WA",labelPosition:[98.9,507.2],labelAlignment:[CEN,MID]},"TW.TC.WE":{outlines:[[M,3550,5459,Q,3532,5451,3518,5451,3514,5451,3472,5466,3430,5481,3423,5482,3398,5484,3366,5495,3334,5507,3322,5510,3288,5518,3230,5521,3223,5521,3208,5527,3190,5534,3186,5534,3170,5537,3164,5543,3158,5549,3148,5549,3141,5549,3114,5519,3103,5508,3092,5501,3074,5489,3054,5489,3030,5489,3018,5501,3008,5511,2964,5506,2952,5505,2942,5509,2929,5515,2930,5529,2930,5550,2908,5575,L,2827,5643,Q,2822,5646,2808,5649,2802,5649,2797,5650,2789,5652,2786,5655,2774,5661,2765,5662,2760,5663,2741,5663,2702,5663,2698,5661,2683,5645,2652,5618,2615,5579,2605,5568,2591,5554,2563,5554,2532,5554,2522,5565,2510,5577,2495,5591,2493,5593,2490,5609,2487,5624,2477,5624,2467,5623,2452,5625,2438,5627,2436,5627,2417,5627,2401,5612,2385,5596,2374,5596,2372,5596,2328,5627,2286,5656,2249,5658,2249,5660,2248,5659,2247,5658,2246,5658,2246,5658,2248,5658,2242,5657,2199,5657,2140,5656,2112,5648,2091,5642,2066,5607,2053,5589,2044,5581,2037,5575,2031,5575,2017,5575,1976,5598,1941,5617,1934,5624,1950,5643,1945,5740,1945,5799,1931,5871,1917,5948,1896,5989,1886,6008,1869,6048,1853,6086,1843,6106,1828,6134,1803,6213,L,1803,6222,Q,1827,6212,1854,6178,1867,6161,1891,6123,1900,6106,1924,6094,1950,6080,1959,6070,1966,6063,1969,6029,1971,6005,1996,6005,2008,6005,2031,6039,2048,6064,2054,6080,2054,6090,2055,6115,2056,6142,2054,6159,2052,6184,2071,6188,2082,6191,2093,6198,2103,6205,2111,6206,2140,6212,2184,6211,2209,6211,2254,6208,L,2254,6252,Q,2242,6258,2239,6270,2238,6274,2238,6289,2238,6314,2256,6324,2269,6331,2296,6331,2339,6331,2359,6277,2379,6222,2415,6222,2431,6222,2437,6225,2451,6232,2459,6255,2466,6273,2477,6286,2481,6292,2481,6314,2481,6342,2472,6364,2463,6384,2463,6425,2463,6465,2463,6466,2465,6484,2473,6497,2474,6498,2499,6522,2521,6543,2524,6554,2527,6564,2527,6586,2529,6605,2543,6620,2565,6642,2570,6648,2580,6663,2581,6684,2583,6710,2606,6752,2640,6813,2643,6820,2647,6832,2667,6837,2674,6838,2713,6842,2740,6846,2795,6858,2817,6860,2864,6863,2907,6864,2939,6860,2961,6858,2980,6819,2999,6781,3017,6781,3030,6781,3042,6791,3053,6800,3080,6798,3097,6796,3118,6804,3126,6807,3155,6822,3191,6840,3229,6847,3261,6857,3265,6858,3275,6860,3284,6872,3293,6883,3298,6883,3304,6883,3321,6879,3327,6879,3345,6883,3360,6883,3380,6870,3401,6857,3412,6857,3423,6857,3440,6861,3458,6865,3466,6865,3482,6865,3489,6880,3492,6888,3497,6906,3501,6914,3526,6938,3557,6965,3574,6965,3589,6965,3596,6957,3604,6949,3622,6947,3626,6946,3654,6944,3681,6941,3693,6938,3701,6935,3716,6919,3732,6904,3747,6901,3761,6898,3782,6899,3821,6899,3822,6899,3832,6899,3845,6879,3859,6857,3870,6857,3885,6856,3897,6849,3912,6838,3922,6832,3940,6820,3982,6801,4034,6777,4053,6777,4058,6777,4110,6781,4107,6766,4116,6754,4126,6739,4126,6729,4126,6720,4059,6680,3996,6643,3979,6638,3864,6595,3827,6602,3789,6611,3755,6595,3717,6574,3692,6566,3652,6553,3630,6525,3607,6495,3617,6466,3617,6464,3618,6461,3626,6436,3626,6398,3624,6351,3625,6324,L,3625,6245,Q,3625,6221,3641,6217,3658,6211,3662,6192,L,3662,6165,Q,3652,6166,3642,6151,3638,6145,3629,6145,3620,6147,3617,6147,3601,6147,3598,6122,3596,6099,3595,6089,3595,6086,3594,6084,3586,6074,3584,6060,3583,6054,3583,6027,3583,5996,3611,5943,3638,5890,3638,5869,3638,5833,3629,5825,3601,5805,3582,5774,3565,5772,3555,5771,3537,5768,3529,5758,3518,5746,3516,5732,3515,5727,3515,5701,3515,5698,3520,5662,3526,5631,3523,5613,3520,5593,3526,5571,3535,5543,3535,5539,3550,5522,3560,5487,3563,5478,3570,5471,Q,3563,5465,3550,5459,Z]],label:"Wenshan",shortLabel:"WE",labelPosition:[296.4,611.5],labelAlignment:[CEN,MID]},"TW.TC.XI":{outlines:[[M,3042,4498,Q,3033,4498,2936,4498,2877,4497,2858,4505,2823,4519,2763,4538,2711,4556,2661,4577,2608,4604,2581,4616,2572,4619,2564,4623,2570,4942,2568,4983,2564,5038,2564,5056,2564,5079,2549,5092,2541,5100,2525,5110,2509,5125,2475,5161,2474,5162,2472,5165,2466,5169,2455,5178,2446,5184,2446,5195,2446,5200,2467,5221,2482,5235,2493,5244,2504,5253,2542,5305,2549,5315,2562,5334,2573,5350,2583,5359,2619,5393,2627,5408,2633,5419,2649,5434,2670,5453,2674,5457,2693,5481,2709,5524,2712,5533,2721,5556,2730,5578,2744,5592,2753,5600,2771,5619,2771,5620,2781,5633,2792,5646,2797,5650,2802,5649,2808,5649,2822,5646,2827,5643,L,2908,5575,Q,2930,5550,2930,5529,2929,5515,2942,5509,2952,5505,2964,5506,3008,5511,3018,5501,3030,5489,3054,5489,3074,5489,3092,5501,3090,5481,3097,5469,3101,5463,3125,5435,3130,5429,3152,5400,3164,5383,3181,5369,3187,5364,3198,5364,3208,5364,3215,5355,3226,5340,3236,5322,3242,5307,3246,5285,3252,5256,3255,5244,3266,5206,3293,5162,3323,5119,3333,5102,3330,5069,3381,5052,3432,5035,3432,5010,3432,4995,3420,4986,3403,4972,3398,4966,3374,4916,3370,4897,3367,4874,3365,4863,3362,4844,3353,4831,3333,4803,3317,4767,3293,4719,3270,4713,3234,4704,3197,4676,3158,4647,3154,4625,3152,4615,3131,4558,3115,4513,3117,4490,3111,4497,3086,4498,Q,3052,4498,3042,4498,Z]],label:"Xinyi",shortLabel:"XI",labelPosition:[293.9,500.6],labelAlignment:[CEN,MID]},"TW.TC.ZH":{outlines:[[M,2422,3327,Q,2410,3318,2406,3315,2376,3325,2338,3338,2266,3363,2258,3363,2239,3351,2218,3339,2175,3315,2125,3315,2092,3315,2051,3343,2029,3358,1998,3387,L,1940,3449,Q,1936,3453,1912,3485,1894,3510,1880,3518,1842,3541,1812,3581,1793,3605,1778,3614,1756,3627,1731,3620,L,1731,3668,Q,1731,3676,1739,3693,1747,3711,1747,3717,1747,3730,1759,3739,1770,3746,1770,3759,L,1769,3802,1747,3802,Q,1722,3767,1703,3752,1695,3745,1685,3742,1677,3739,1672,3733,L,1636,3797,Q,1628,3811,1624,3836,1622,3849,1620,3876,1618,3890,1599,3962,1586,4010,1594,4045,1592,4136,1615,4179,1638,4223,1638,4270,1638,4321,1636,4331,1628,4357,1628,4396,1635,4461,1590,4531,1611,4531,1632,4534,1653,4537,1697,4544,1746,4551,1837,4574,1869,4582,1908,4598,1929,4607,1944,4613,1962,4620,1972,4624,1980,4622,1997,4622,2017,4622,2032,4627,2047,4631,2064,4631,2078,4631,2116,4626,2150,4621,2174,4622,2197,4623,2216,4624,L,2216,4479,Q,2215,4432,2218,4407,2225,4361,2246,4344,2277,4319,2310,4313,2327,4310,2334,4293,2339,4273,2342,4267,L,2394,4144,Q,2394,4137,2387,4130,2378,4120,2376,4116,2346,4089,2309,4064,2263,4033,2233,4013,2187,3981,2147,3973,2138,3972,2112,3958,2084,3942,2079,3941,L,2079,3898,Q,2114,3898,2200,3901,2281,3903,2334,3898,2346,3896,2362,3885,2380,3871,2385,3870,2395,3866,2409,3863,2420,3858,2424,3844,2426,3838,2436,3823,2443,3813,2443,3801,2439,3780,2449,3776,2452,3774,2471,3774,2488,3774,2493,3777,2502,3780,2525,3783,2546,3786,2554,3789,2564,3792,2577,3803,2622,3835,2635,3842,L,2680,3864,Q,2684,3864,2693,3858,2701,3852,2719,3852,L,2780,3805,Q,2814,3780,2846,3752,2836,3749,2827,3742,2810,3727,2803,3722,2768,3701,2750,3690,2718,3671,2705,3650,2660,3573,2654,3540,2643,3528,2636,3524,2626,3519,2608,3521,2591,3523,2582,3523,2565,3523,2562,3514,2560,3511,2560,3492,2559,3487,2555,3481,2550,3474,2549,3471,2542,3441,2540,3424,2510,3415,2496,3409,2470,3399,2457,3383,2438,3358,2436,3346,Q,2434,3336,2422,3327,Z]],label:"Zhongshan",shortLabel:"ZH",labelPosition:[196.2,421.3],labelAlignment:[CEN,MID]},"TW.TC.ZZ":{outlines:[[M,1632,4534,Q,1611,4531,1590,4531,1576,4530,1563,4532,1538,4533,1490,4532,1438,4519,1426,4519,1407,4519,1382,4535,1364,4547,1352,4549,1351,4553,1349,4563,1348,4574,1344,4581,1332,4607,1333,4624,1333,4633,1325,4666,1321,4682,1314,4707,1312,4716,1300,4782,1292,4828,1279,4858,1276,4874,1266,4903,1260,4919,1248,4947,1243,4958,1225,4992,1217,5006,1217,5028,1217,5041,1219,5046,1221,5055,1234,5067,1238,5070,1245,5084,1253,5097,1257,5101,1263,5106,1271,5119,L,1279,5130,Q,1280,5131,1288,5141,L,1325,5166,Q,1341,5178,1367,5186,1368,5186,1376,5187,1380,5188,1384,5191,1391,5197,1406,5199,1423,5201,1428,5224,1429,5234,1429,5266,1432,5265,1434,5265,1510,5265,1592,5322,1666,5373,1685,5423,1707,5446,1747,5512,1790,5569,1839,5582,1853,5586,1862,5590,1868,5593,1884,5602,1888,5605,1910,5612,1928,5619,1934,5624,1941,5617,1976,5598,2017,5575,2031,5575,2037,5575,2044,5581,2034,5521,1975,5456,1906,5389,1881,5359,1867,5343,1834,5311,1785,5264,1779,5258,1766,5245,1733,5203,1703,5164,1688,5150,1681,5122,1672,5098,1666,5082,1666,5061,1666,5030,1693,4960,1722,4888,1738,4888,1746,4888,1766,4904,1786,4921,1800,4922,1822,4925,1835,4935,1847,4944,1866,4944,1925,4944,1931,4921,1930,4866,1938,4800,1941,4778,1940,4748,1938,4716,1938,4700,1944,4682,1944,4655,1944,4616,1944,4613,1929,4607,1908,4598,1869,4582,1837,4574,1746,4551,1697,4544,Q,1653,4537,1632,4534,Z]],label:"Zhongzheng",shortLabel:"ZZ",labelPosition:[147.1,491.1],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"taipeicity",type:"maps"}}})});