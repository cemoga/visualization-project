(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=590)})({590:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(591);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},591:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright InfoSoft Global Pvt. Ltd.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author InfoSoft Global Pvt. Ltd.
 * @meta package_map_pack
 * @id fusionmaps.Victoria.18.08-16-2012 12:18:33
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Victoria",revision:18,standaloneInit:true,baseWidth:715,baseHeight:500,baseScaleFactor:10,entities:{VIC01:{outlines:[[M,5742,2652,Q,5752,2652,5756,2637,5758,2614,5729,2597,5695,2576,5688,2552,5683,2535,5667,2535,5658,2535,5656,2526,5653,2517,5646,2516,5621,2511,5616,2500,5612,2493,5587,2493,5554,2493,5544,2507,5538,2514,5523,2513,5503,2512,5497,2514,5485,2529,5483,2530,L,5457,2530,Q,5425,2550,5412,2550,5402,2550,5392,2558,5382,2568,5379,2568,L,5355,2568,Q,5347,2569,5346,2575,5345,2584,5344,2587,5309,2586,5308,2606,5306,2608,5285,2612,5270,2615,5275,2630,5244,2628,5251,2649,L,5206,2649,Q,5209,2655,5197,2660,L,5197,2646,5164,2646,5164,2628,5142,2628,5142,2608,5100,2608,Q,5069,2637,5069,2661,5074,2666,5088,2666,5081,2679,5088,2689,5095,2700,5108,2694,L,5108,2735,Q,5105,2737,5091,2744,5085,2747,5086,2761,L,5086,2850,Q,5086,2860,5098,2864,5110,2869,5110,2876,5107,2901,5133,2902,5145,2902,5145,2942,5145,2976,5136,3010,5136,3018,5139,3050,5138,3076,5119,3072,L,5119,3093,5090,3093,5090,3108,4939,3108,Q,4921,3090,4868,3088,4805,3089,4776,3088,4761,3074,4753,3070,4738,3059,4732,3056,4687,3046,4685,3030,L,4654,3030,Q,4655,3020,4649,3010,L,4621,3010,4621,3028,4592,3028,4592,3041,Q,4581,3039,4578,3048,L,4571,3060,Q,4560,3066,4556,3088,4552,3102,4533,3119,4521,3145,4517,3148,4502,3158,4502,3183,4502,3209,4498,3214,4487,3223,4483,3246,4477,3280,4476,3282,4476,3314,4467,3327,4458,3337,4457,3354,4456,3370,4452,3374,4431,3374,4417,3407,4415,3409,4399,3419,4388,3426,4393,3440,4327,3440,4296,3442,L,4294,3454,4257,3454,4257,3468,4218,3471,4218,3561,Q,4232,3586,4232,3603,4232,3639,4216,3647,4205,3651,4154,3650,4083,3667,4043,3667,4037,3689,4016,3688,4004,3687,3994,3699,3986,3707,3975,3703,L,3975,3721,3952,3721,3952,3745,Q,3939,3739,3933,3749,3926,3757,3930,3766,3909,3761,3909,3784,3909,3798,3911,3830,L,3911,3991,Q,3899,4e3,3899,4024,L,3900,4064,Q,3900,4071,3904,4092,3903,4113,3883,4114,L,3883,4135,3855,4135,3855,4153,3822,4153,3822,4169,3796,4169,3796,4179,Q,3758,4187,3736,4189,L,3736,4182,3707,4182,Q,3713,4211,3695,4202,3694,4210,3697,4221,3651,4221,3635,4224,L,3605,4224,3605,4201,3661,4201,Q,3661,4169,3663,4156,L,3648,4156,3648,4140,3632,4140,3632,4126,3538,4126,Q,3538,4114,3536,4109,L,3518,4109,3518,4123,3498,4123,3498,4212,Q,3507,4208,3517,4215,3527,4223,3521,4234,3546,4234,3572,4249,3590,4260,3619,4247,L,3619,4314,Q,3586,4313,3571,4313,3543,4313,3541,4326,L,3521,4326,3521,4314,3498,4314,Q,3496,4323,3491,4322,L,3481,4322,3481,4334,3446,4334,3446,4340,Q,3446,4346,3449,4351,L,3472,4351,3472,4366,3498,4366,3498,4351,Q,3510,4351,3513,4348,L,3530,4348,Q,3531,4355,3534,4374,L,3556,4374,3556,4355,3586,4355,3586,4337,3593,4337,Q,3600,4345,3668,4395,3713,4459,3715,4464,L,3735,4464,Q,3732,4486,3757,4485,3783,4483,3784,4500,L,3816,4500,3816,4458,3849,4458,Q,3853,4463,3854,4473,L,3882,4473,Q,3888,4465,3888,4456,L,3909,4456,Q,3900,4548,3929,4578,3940,4590,3944,4602,3946,4608,3963,4617,3970,4621,3969,4646,3968,4660,3967,4684,3984,4684,4016,4690,L,4016,4716,4036,4716,Q,4036,4717,4036,4720,L,4050,4719,4050,4676,4065,4676,4065,4620,4164,4620,Q,4167,4629,4167,4647,4192,4636,4189,4676,4203,4677,4204,4687,4206,4698,4213,4702,4221,4707,4222,4720,4222,4727,4222,4742,L,4235,4742,4235,4779,Q,4260,4768,4253,4817,4258,4818,4271,4818,4273,4828,4273,4847,L,4294,4847,4294,4925,Q,4295,4925,4326,4925,4346,4924,4340,4941,L,4357,4941,4357,4965,4375,4965,Q,4380,4964,4389,4961,4388,4954,4386,4954,L,4386,4915,4409,4915,4409,4898,Q,4404,4888,4404,4879,L,4389,4878,4389,4783,Q,4401,4780,4427,4777,L,4427,4762,Q,4403,4668,4398,4591,L,4383,4591,4383,4607,4365,4607,4365,4653,4339,4653,4339,4678,4306,4678,4306,4698,4254,4698,4254,4630,Q,4248,4629,4232,4629,L,4232,4607,4218,4607,4218,4528,4244,4528,4244,4516,4446,4516,Q,4450,4528,4450,4532,L,4539,4532,Q,4545,4510,4546,4506,L,4601,4506,4601,4496,4647,4496,4647,4479,4666,4479,4666,4444,4721,4444,4721,4464,Q,4730,4464,4733,4467,L,4765,4467,Q,4764,4452,4788,4452,4782,4442,4788,4439,4792,4438,4805,4436,4805,4421,4903,4320,5001,4219,5021,4202,5041,4185,5086,4145,5131,4106,5176,4066,5206,4045,5246,4005,5258,3997,5284,3985,5304,3972,5308,3953,5327,3955,5350,3934,L,5390,3907,Q,5392,3902,5413,3891,5434,3880,5473,3863,L,5483,3854,Q,5492,3847,5531,3837,L,5531,3819,5488,3819,5488,3832,Q,5476,3832,5458,3845,5434,3863,5408,3877,5407,3878,5406,3878,5381,3891,5369,3901,5355,3910,5319,3936,5310,3942,5302,3947,5278,3964,5266,3975,L,5246,3975,Q,5243,3957,5243,3949,5243,3945,5252,3935,5264,3920,5279,3920,L,5279,3901,Q,5301,3901,5309,3890,5316,3878,5337,3878,5337,3858,5363,3852,5365,3852,5381,3839,L,5383,3831,5416,3831,5416,3819,5414,3814,5385,3814,Q,5385,3799,5377,3785,L,5377,3753,5426,3753,5426,3772,Q,5428,3771,5442,3769,L,5454,3769,5454,3798,5459,3798,Q,5484,3792,5531,3783,5529,3766,5568,3766,5609,3767,5619,3767,L,5681,3767,5681,3745,Q,5707,3745,5738,3736,5768,3726,5795,3727,L,5795,3712,Q,5850,3712,5947,3698,5998,3698,6077,3712,6126,3712,6152,3705,6178,3698,6229,3698,6286,3698,6288,3708,L,6369,3708,Q,6375,3698,6444,3698,6450,3698,6485,3695,6518,3696,6523,3716,L,6696,3716,Q,6696,3727,6700,3734,L,6719,3734,Q,6725,3730,6755,3730,L,6755,3694,Q,6758,3693,6779,3693,6798,3690,6788,3672,L,6861,3672,Q,6861,3640,6888,3636,6901,3634,6920,3639,6911,3616,6927,3599,6944,3580,6942,3569,6946,3559,6957,3558,6963,3557,6964,3540,6963,3523,6963,3515,6962,3502,6983,3510,L,6983,3491,7031,3491,7031,3517,7090,3517,7090,3491,7116,3491,Q,7118,3489,7119,3480,7119,3441,6960,3362,6799,3289,6792,3285,6759,3264,6619,3190,6505,3112,6451,3076,6414,3051,6306,3005,6198,2959,6143,2927,6084,2888,6050,2870,5935,2787,5873,2747,5811,2706,5708,2711,L,5708,2678,5733,2678,Q,5730,2659,5730,2649,Q,5732,2649,5742,2652,Z]],label:"South East Victoria (Gippsland)",shortLabel:"SEV",labelPosition:[528.2,340.6],labelAlignment:[CEN,MID]},VIC02:{outlines:[[M,5268,1891,Q,5259,1876,5256,1870,L,5167,1870,5167,1894,5149,1894,Q,5152,1900,5152,1911,L,5138,1911,5138,1954,5126,1954,5126,1971,5088,1971,Q,5085,1949,5033,1950,4981,1952,4979,1929,L,4932,1929,4932,1971,4904,1971,4904,2009,4773,2009,Q,4778,1990,4740,1992,4703,1994,4708,1968,4689,1969,4646,1950,4601,1928,4589,1923,4578,1919,4566,1905,4556,1894,4530,1894,4502,1894,4501,1881,4501,1867,4481,1867,4449,1873,4430,1873,4436,1890,4419,1889,4399,1886,4392,1888,4388,1923,4377,1929,4372,1932,4331,1932,4280,1925,4233,1930,L,4233,2024,Q,4233,2040,4240,2082,4238,2115,4200,2101,4209,2126,4168,2124,L,4168,2149,4150,2149,4150,2168,4103,2169,4103,2182,4087,2182,Q,4020,2186,3936,2186,3932,2198,3932,2202,L,3913,2202,3913,2224,3894,2224,3894,2324,Q,3900,2337,3909,2337,3913,2345,3911,2367,3912,2372,3924,2376,3933,2380,3936,2397,3937,2434,3949,2445,3956,2451,3957,2504,3957,2551,3955,2559,3953,2567,3942,2568,3933,2570,3932,2577,L,3932,2610,Q,3932,2640,3940,2657,3949,2674,3949,2703,L,3973,2704,3973,2757,Q,3962,2760,3958,2762,3947,2765,3947,2780,3945,2784,3935,2789,3928,2791,3932,2802,3914,2796,3917,2823,3904,2824,3896,2823,3880,2822,3877,2830,3869,2842,3833,2846,3800,2843,3780,2843,3743,2842,3744,2861,L,3706,2861,3704,2875,3679,2875,3679,2900,3655,2900,3655,2917,3636,2917,3636,2938,3608,2938,3608,2954,3584,2954,3584,2974,3555,2974,3555,2991,Q,3536,2984,3531,3013,3511,3007,3508,3018,3506,3025,3507,3047,L,3478,3052,Q,3460,3055,3468,3073,L,3448,3073,3448,3168,Q,3461,3170,3467,3184,3471,3192,3491,3187,3488,3198,3505,3209,3508,3211,3508,3224,3508,3234,3519,3230,L,3519,3282,Q,3519,3290,3505,3293,L,3506,3293,3507,3294,3507,3328,3525,3328,Q,3525,3343,3529,3362,L,3547,3362,3549,3376,3590,3376,Q,3596,3376,3606,3392,3632,3394,3679,3394,3681,3402,3681,3419,L,3766,3419,Q,3766,3428,3768,3434,L,3876,3434,3876,3415,3909,3415,3909,3398,Q,4021,3392,4059,3392,4207,3392,4215,3398,4222,3403,4265,3406,4295,3407,4296,3442,4327,3440,4393,3440,4388,3426,4399,3419,4415,3409,4417,3407,4431,3374,4452,3374,4456,3370,4457,3354,4458,3337,4467,3327,4476,3314,4476,3282,4477,3280,4483,3246,4487,3223,4498,3214,4502,3209,4502,3183,4502,3158,4517,3148,4521,3145,4533,3119,4552,3102,4556,3088,4560,3066,4571,3060,L,4578,3048,Q,4581,3039,4592,3041,L,4592,3028,4621,3028,4621,3010,4649,3010,Q,4655,3020,4654,3030,L,4685,3030,Q,4687,3046,4732,3056,4738,3059,4753,3070,4761,3074,4776,3088,4805,3089,4868,3088,4921,3090,4939,3108,L,5090,3108,5090,3093,5119,3093,5119,3072,Q,5138,3076,5139,3050,5136,3018,5136,3010,5145,2976,5145,2942,5145,2902,5133,2902,5107,2901,5110,2876,5110,2869,5098,2864,5086,2860,5086,2850,L,5086,2761,Q,5085,2747,5091,2744,5105,2737,5108,2735,L,5108,2694,Q,5095,2700,5088,2689,5081,2679,5088,2666,5074,2666,5069,2661,5069,2637,5100,2608,L,5142,2608,5142,2628,5164,2628,5164,2646,5197,2646,5197,2660,Q,5209,2655,5206,2649,L,5251,2649,Q,5244,2628,5275,2630,5270,2615,5285,2612,5306,2608,5308,2606,5309,2586,5344,2587,5345,2584,5346,2575,5347,2569,5355,2568,L,5379,2568,Q,5382,2568,5392,2558,5402,2550,5412,2550,5425,2550,5457,2530,L,5483,2530,Q,5485,2529,5497,2514,5503,2512,5523,2513,5538,2514,5544,2507,5554,2493,5587,2493,5612,2493,5616,2500,5621,2511,5646,2516,5653,2517,5656,2526,5658,2535,5667,2535,5683,2535,5688,2552,5695,2576,5729,2597,5758,2614,5756,2637,L,5785,2637,5785,2605,5814,2605,Q,5796,2550,5745,2487,5727,2466,5723,2413,5710,2384,5701,2346,5669,2331,5675,2273,5674,2218,5675,2181,5677,2079,5638,2038,L,5638,2003,5635,1986,Q,5613,1986,5615,1974,5591,1982,5581,1966,5574,1945,5571,1936,L,5545,1936,Q,5549,1919,5527,1914,5496,1907,5494,1906,5484,1896,5461,1894,5453,1894,5450,1885,5446,1875,5438,1873,L,5438,1850,5395,1850,5395,1873,5358,1873,5358,1891,Z]],label:"North East Victoria (Hume)",shortLabel:"NEV",labelPosition:[463.1,238.8],labelAlignment:[CEN,MID]},VIC03:{outlines:[[M,1690,2402,Q,1603,2395,1591,2395,1598,2418,1569,2415,1576,2428,1562,2436,1549,2441,1535,2439,1537,2443,1536,2496,L,1555,2496,Q,1559,2509,1559,2550,L,1559,2586,Q,1559,2591,1547,2599,1535,2605,1539,2614,1544,2664,1516,2667,L,1476,2667,Q,1456,2679,1445,2682,1380,2685,1350,2687,L,1350,2744,Q,1358,2744,1373,2748,L,1373,2840,1354,2840,1354,2855,1338,2855,1338,2842,1313,2842,1311,2825,Q,1280,2822,1279,2814,L,1253,2814,Q,1252,2814,1249,2853,L,1232,2853,1232,2865,1247,2865,1247,2960,1235,2960,1235,2978,Q,1216,2967,1216,2997,1196,2997,1181,3006,1168,3013,1147,3013,1128,3013,1110,3024,1093,3034,1075,3034,1074,3054,1057,3047,L,1057,3083,Q,1032,3076,1033,3096,1034,3107,1035,3130,L,1009,3130,1007,3149,946,3149,946,3138,930,3138,Q,926,3122,926,3114,905,3119,903,3102,904,3080,901,3072,L,888,3072,888,3055,863,3055,863,3066,Q,838,3065,827,3065,807,3066,816,3088,L,767,3088,767,3112,739,3112,737,3088,666,3088,666,3106,646,3106,Q,656,3124,638,3125,616,3126,618,3136,595,3128,597,3157,599,3187,573,3181,L,573,3205,Q,544,3211,543,3224,540,3227,527,3229,516,3232,516,3245,L,494,3245,Q,499,3267,468,3266,439,3264,447,3284,L,413,3284,413,3300,381,3300,Q,377,3319,377,3323,L,354,3323,354,3339,330,3339,330,3356,305,3356,304,3345,232,3345,232,3323,183,3323,207,3958,Q,230,3964,244,3964,L,244,3984,Q,287,3987,329,4010,353,4023,395,4051,507,4118,513,4164,533,4168,533,4197,L,531,4247,548,4247,548,4270,565,4270,565,4288,581,4288,581,4250,604,4250,604,4267,Q,618,4270,658,4270,L,658,4291,675,4291,Q,675,4296,678,4308,L,693,4308,693,4273,716,4273,716,4291,749,4291,749,4267,724,4267,724,4250,716,4250,716,4193,734,4193,734,4158,751,4158,751,4129,905,4129,Q,915,4143,942,4144,967,4145,976,4160,982,4172,1014,4170,1018,4174,1024,4184,1032,4191,1046,4190,1066,4189,1067,4218,1077,4230,1106,4233,1133,4253,1141,4253,1175,4253,1170,4273,L,1214,4273,1214,4253,1187,4253,1187,4236,Q,1193,4235,1193,4233,L,1217,4233,Q,1218,4215,1224,4212,1227,4210,1254,4211,1286,4210,1294,4222,1302,4235,1346,4230,1355,4231,1372,4251,1406,4264,1405,4269,1438,4269,1446,4277,1446,4278,1481,4291,1510,4302,1552,4341,1581,4355,1610,4399,1620,4415,1634,4423,1636,4423,1656,4425,1662,4429,1672,4444,L,1693,4444,Q,1700,4445,1710,4460,L,1768,4460,Q,1809,4460,1816,4482,1857,4482,1851,4501,1869,4497,1877,4507,1883,4514,1899,4536,1933,4580,1957,4579,1971,4595,2026,4595,2036,4595,2072,4591,2104,4591,2101,4616,2143,4614,2135,4638,2152,4637,2156,4664,L,2172,4664,2172,4683,Q,2184,4678,2194,4687,2199,4691,2213,4685,L,2254,4642,Q,2296,4592,2332,4572,2344,4565,2367,4551,2376,4551,2389,4542,2401,4534,2417,4538,2415,4522,2427,4515,2443,4506,2445,4501,2481,4480,2466,4452,L,2490,4452,Q,2479,4423,2501,4406,2530,4392,2535,4385,2553,4367,2563,4354,2582,4333,2577,4317,2630,4323,2653,4289,L,2654,4272,2673,4272,2673,4249,2720,4249,2720,4233,2746,4233,Q,2748,4211,2774,4213,L,2774,4192,2767,4192,2767,4183,Q,2800,4169,2821,4172,2840,4176,2838,4148,L,2855,4148,Q,2857,4143,2857,4127,L,2925,4127,2925,4138,2949,4138,2951,4124,Q,2953,4124,3020,4114,L,3020,4135,3031,4135,Q,3031,4073,3055,4086,L,3055,4052,Q,3068,4051,3086,4049,L,3086,4001,3072,4001,3072,3959,Q,3074,3959,3074,3954,L,3041,3954,3041,3943,3008,3943,3008,3961,2949,3961,2949,3972,2932,3972,2932,3980,2836,3980,2836,3966,2853,3966,2853,3950,2829,3950,2828,3930,2928,3930,2928,3914,Q,2934,3863,2920,3851,2912,3842,2910,3823,2906,3795,2905,3792,2888,3797,2892,3768,2875,3771,2875,3745,2867,3743,2853,3743,L,2853,3719,Q,2843,3718,2828,3701,2827,3699,2825,3698,2811,3685,2779,3691,L,2466,3691,2466,3646,Q,2447,3647,2444,3628,2443,3605,2438,3598,2427,3579,2425,3542,2406,3547,2404,3528,2400,3507,2397,3506,2377,3489,2344,3493,2340,3487,2311,3467,2287,3451,2288,3435,L,2257,3435,Q,2257,3425,2253,3417,2224,3432,2226,3394,2228,3351,2212,3354,L,2211,3236,Q,2218,3223,2230,3214,2231,3213,2231,3194,2231,3175,2227,3172,2215,3162,2215,3159,2215,3123,2192,3127,2197,3100,2180,3062,2163,3026,2169,2989,2172,2972,2166,2956,2157,2936,2156,2927,2149,2875,2148,2857,L,2122,2857,2122,2816,Q,2118,2731,2108,2708,2101,2630,2098,2606,2060,2540,2061,2514,2045,2483,2043,2469,L,2043,2411,Q,2022,2408,2e3,2409,1980,2384,1962,2393,L,1962,2377,Q,1951,2377,1945,2368,1937,2358,1936,2358,1917,2349,1917,2338,L,1887,2338,1887,2348,Q,1850,2347,1829,2346,1789,2345,1798,2373,L,1763,2373,Q,1770,2402,1690,2402,Z]],label:"South West Victoria (Barwon)",shortLabel:"SWV",labelPosition:[163.4,351.3],labelAlignment:[CEN,MID]},VIC04:{outlines:[[M,3638,1738,L,3597,1738,3597,1761,3503,1761,Q,3496,1734,3452,1737,3406,1740,3401,1728,L,3362,1728,3362,1743,Q,3345,1744,3307,1745,L,3307,1761,3265,1761,3265,1789,3253,1789,3253,1872,3237,1872,3237,1891,3248,1891,3248,1914,Q,3269,1914,3277,1916,L,3277,1976,3232,1976,Q,3220,1957,3218,1955,L,3183,1955,3183,1968,3163,1968,3163,1997,3147,1997,3147,2020,3124,2020,3124,2011,Q,3114,2009,3083,2009,3085,1983,3060,1983,3055,1983,3034,1962,3025,1954,2999,1955,2975,1955,2972,1940,2969,1926,2956,1917,2936,1904,2930,1898,2890,1852,2888,1851,L,2829,1806,Q,2821,1799,2821,1777,2820,1756,2811,1749,2794,1739,2796,1722,2797,1707,2790,1704,2779,1698,2775,1693,2766,1665,2758,1665,L,2723,1665,Q,2723,1648,2709,1641,2694,1632,2690,1622,2676,1599,2650,1591,2647,1590,2631,1575,2621,1565,2610,1565,2599,1563,2599,1546,2602,1527,2600,1518,2578,1509,2577,1502,2560,1505,2546,1485,2516,1475,2516,1474,2492,1446,2464,1450,2466,1439,2454,1431,2448,1414,2431,1415,2411,1401,2402,1396,2401,1404,2376,1416,2365,1438,2348,1432,L,2348,1449,Q,2327,1442,2324,1472,2313,1480,2303,1486,2299,1488,2268,1488,2245,1488,2238,1497,2229,1507,2216,1509,L,2061,1509,2058,1526,Q,2041,1525,2035,1526,2021,1527,2020,1542,L,1994,1542,Q,1994,1560,1987,1563,1980,1566,1980,1569,L,1982,1588,1968,1588,1968,1694,Q,1991,1733,1987,1759,1984,1775,2001,1788,L,2004,1868,Q,2004,1883,2015,1891,2022,1896,2022,1917,2025,1921,2041,1938,2042,1948,2048,1950,2054,1952,2053,1963,2051,1977,2065,1986,2081,1994,2082,2009,2084,2031,2090,2064,2110,2076,2110,2080,L,2110,2113,Q,2113,2113,2136,2118,L,2136,2186,Q,2124,2194,2124,2201,L,2126,2231,Q,2093,2231,2089,2244,2087,2251,2090,2271,2088,2300,2080,2306,2072,2310,2072,2317,L,2077,2353,2077,2361,Q,2049,2352,2048,2374,2048,2387,2053,2410,L,2043,2411,2043,2469,Q,2045,2483,2061,2514,2060,2540,2098,2606,2101,2630,2108,2708,2118,2731,2122,2816,L,2122,2857,2148,2857,Q,2149,2875,2156,2927,2157,2936,2166,2956,2172,2972,2169,2989,2163,3026,2180,3062,2197,3100,2192,3127,2215,3123,2215,3159,2215,3162,2227,3172,2231,3175,2231,3194,2231,3213,2230,3214,2218,3223,2211,3236,L,2212,3354,Q,2228,3351,2226,3394,2224,3432,2253,3417,2257,3425,2257,3435,L,2288,3435,Q,2287,3451,2311,3467,2340,3487,2344,3493,2377,3489,2397,3506,2400,3507,2404,3528,2406,3547,2425,3542,2427,3579,2438,3598,2443,3605,2444,3628,2447,3647,2466,3646,L,2466,3691,2779,3691,Q,2811,3685,2825,3698,2835,3691,2844,3673,2854,3668,2854,3647,L,2868,3647,2868,3632,Q,2886,3637,2887,3624,2889,3606,2901,3599,2911,3593,2912,3573,2911,3546,2913,3531,2914,3520,2923,3513,2932,3505,2932,3484,2932,3458,2946,3452,2958,3448,2951,3432,L,2979,3432,2979,3417,Q,3002,3420,3006,3399,3009,3376,3026,3375,3033,3374,3057,3356,3068,3354,3105,3356,3106,3356,3107,3356,L,3159,3356,Q,3161,3362,3180,3370,L,3241,3370,3243,3358,3271,3358,3271,3347,3291,3347,Q,3291,3330,3293,3323,3311,3327,3315,3323,3319,3319,3320,3307,3321,3294,3497,3293,L,3505,3293,Q,3519,3290,3519,3282,L,3519,3230,Q,3508,3234,3508,3224,3508,3211,3505,3209,3488,3198,3491,3187,3471,3192,3467,3184,3461,3170,3448,3168,L,3448,3073,3468,3073,Q,3460,3055,3478,3052,L,3507,3047,Q,3506,3025,3508,3018,3511,3007,3531,3013,3536,2984,3555,2991,L,3555,2974,3584,2974,3584,2954,3608,2954,3608,2938,3636,2938,3636,2917,3655,2917,3655,2900,3679,2900,3679,2875,3704,2875,3706,2861,3744,2861,Q,3743,2842,3780,2843,3800,2843,3833,2846,3869,2842,3877,2830,3880,2822,3896,2823,3904,2824,3917,2823,3914,2796,3932,2802,3928,2791,3935,2789,3945,2784,3947,2780,3947,2765,3958,2762,3962,2760,3973,2757,L,3973,2704,3949,2703,Q,3949,2674,3940,2657,3932,2640,3932,2610,L,3932,2577,Q,3933,2570,3942,2568,3953,2567,3955,2559,3957,2551,3957,2504,3956,2451,3949,2445,3937,2434,3936,2397,3933,2380,3924,2376,3912,2372,3911,2367,3913,2345,3909,2337,3900,2337,3894,2324,L,3894,2224,3913,2224,3913,2202,3932,2202,Q,3932,2198,3936,2186,4020,2186,4087,2182,L,4103,2182,4103,2169,4150,2168,4150,2149,4168,2149,4168,2124,Q,4209,2126,4200,2101,4238,2115,4240,2082,4233,2040,4233,2024,L,4233,1930,Q,4152,1913,4080,1911,4085,1896,4069,1896,4034,1897,4033,1897,4033,1876,4030,1870,L,4007,1870,Q,4004,1858,4004,1853,L,3966,1853,Q,3967,1865,3956,1873,L,3888,1873,Q,3888,1858,3885,1853,3853,1842,3807,1807,3758,1768,3735,1752,L,3735,1714,3638,1714,Z]],label:"Central Victoria",shortLabel:"CV",labelPosition:[288.9,265.5],labelAlignment:[CEN,MID]},VIC05:{outlines:[[M,1821,664,Q,1803,662,1792,647,1786,639,1729,638,1672,637,1667,630,1658,618,1613,619,1578,619,1582,590,1556,590,1556,583,1543,567,1534,566,L,1534,519,1515,517,1515,557,1453,557,Q,1456,586,1456,651,1444,653,1439,653,L,1439,702,1390,702,Q,1392,707,1393,731,L,1321,731,1321,705,1294,705,Q,1285,619,1271,613,1284,506,1206,534,1211,496,1185,494,L,1185,448,Q,1185,386,1214,392,1215,377,1207,375,1192,376,1179,375,L,1179,335,Q,1194,341,1194,326,1191,315,1191,309,1158,310,1139,311,1102,312,1106,285,1083,285,1072,282,1075,252,1068,225,1056,195,1052,176,1011,172,1023,147,L,988,147,Q,988,162,985,168,L,933,168,Q,933,155,910,133,888,112,881,112,811,117,782,117,L,782,135,768,135,Q,768,126,762,120,L,590,120,590,144,569,144,569,162,552,162,552,204,505,204,Q,502,210,502,224,L,484,224,Q,484,221,479,222,486,186,450,174,389,156,386,153,375,145,352,144,329,144,314,132,276,104,242,103,242,88,237,77,L,210,77,210,97,169,97,Q,147,79,128,79,115,79,113,83,L,108,80,80,80,80,60,62,60,Q,59,48,59,40,L,39,40,54,194,82,1238,Q,99,1297,99,1403,99,1541,103,1584,108,1636,106,1757,108,1793,123,1899,123,1903,124,1908,L,124,2110,Q,156,2402,144,2694,L,166,2900,183,3323,232,3323,232,3345,304,3345,305,3356,330,3356,330,3339,354,3339,354,3323,377,3323,Q,377,3319,381,3300,L,413,3300,413,3284,447,3284,Q,439,3264,468,3266,499,3267,494,3245,L,516,3245,Q,516,3232,527,3229,540,3227,543,3224,544,3211,573,3205,L,573,3181,Q,599,3187,597,3157,595,3128,618,3136,616,3126,638,3125,656,3124,646,3106,L,666,3106,666,3088,737,3088,739,3112,767,3112,767,3088,816,3088,Q,807,3066,827,3065,838,3065,863,3066,L,863,3055,888,3055,888,3072,901,3072,Q,904,3080,903,3102,905,3119,926,3114,926,3122,930,3138,L,946,3138,946,3149,1007,3149,1009,3130,1035,3130,Q,1034,3107,1033,3096,1032,3076,1057,3083,L,1057,3047,Q,1074,3054,1075,3034,1093,3034,1110,3024,1128,3013,1147,3013,1168,3013,1181,3006,1196,2997,1216,2997,1216,2967,1235,2978,L,1235,2960,1247,2960,1247,2865,1232,2865,1232,2853,1249,2853,Q,1252,2814,1253,2814,L,1279,2814,Q,1280,2822,1311,2825,L,1313,2842,1338,2842,1338,2855,1354,2855,1354,2840,1373,2840,1373,2748,Q,1358,2744,1350,2744,L,1350,2687,Q,1380,2685,1445,2682,1456,2679,1476,2667,L,1516,2667,Q,1544,2664,1539,2614,1535,2605,1547,2599,1559,2591,1559,2586,L,1559,2550,Q,1559,2509,1555,2496,L,1536,2496,Q,1537,2443,1535,2439,1549,2441,1562,2436,1576,2428,1569,2415,1598,2418,1591,2395,1603,2395,1690,2402,1770,2402,1763,2373,L,1798,2373,Q,1789,2345,1829,2346,1850,2347,1887,2348,L,1887,2338,1917,2338,Q,1917,2349,1936,2358,1937,2358,1945,2368,1951,2377,1962,2377,L,1962,2393,Q,1980,2384,2e3,2409,2022,2408,2043,2411,L,2053,2410,Q,2048,2387,2048,2374,2049,2352,2077,2361,L,2077,2353,2072,2317,Q,2072,2310,2080,2306,2088,2300,2090,2271,2087,2251,2089,2244,2093,2231,2126,2231,L,2124,2201,Q,2124,2194,2136,2186,L,2136,2118,Q,2113,2113,2110,2113,L,2110,2080,Q,2110,2076,2090,2064,2084,2031,2082,2009,2081,1994,2065,1986,2051,1977,2053,1963,2054,1952,2048,1950,2042,1948,2041,1938,2025,1921,2022,1917,2022,1896,2015,1891,2004,1883,2004,1868,L,2001,1788,Q,1984,1775,1987,1759,1991,1733,1968,1694,L,1968,1588,1982,1588,1980,1569,Q,1980,1566,1987,1563,1994,1560,1994,1542,L,2020,1542,Q,2021,1527,2035,1526,2041,1525,2058,1526,L,2061,1509,2216,1509,Q,2229,1507,2238,1497,2245,1488,2268,1488,2299,1488,2303,1486,2313,1480,2324,1472,2327,1442,2348,1449,L,2348,1432,Q,2365,1438,2376,1416,2401,1404,2402,1396,2397,1394,2395,1393,2357,1369,2353,1363,2340,1348,2336,1347,2316,1345,2308,1339,2281,1318,2270,1318,L,2209,1318,Q,2193,1318,2192,1304,2191,1284,2185,1278,2183,1240,2167,1229,2158,1223,2147,1189,2138,1162,2110,1160,2111,1143,2097,1141,2078,1142,2067,1141,2073,1119,2048,1118,2018,1121,2011,1118,2001,1112,1996,1087,1991,1055,1987,1050,1993,990,1978,976,1969,968,1969,907,1969,852,1976,831,1982,811,1982,778,1982,750,1981,738,1930,736,1924,732,1904,724,1902,719,1895,700,1893,701,1854,690,1846,677,Q,1839,666,1821,664,Z]],label:"North West Victoria (Loddon Mallee)",shortLabel:"NWV",labelPosition:[100.5,169.8],labelAlignment:[CEN,MID]},VIC06:{outlines:[[M,3679,3394,Q,3632,3394,3606,3392,3596,3376,3590,3376,L,3549,3376,3547,3362,3529,3362,Q,3525,3343,3525,3328,L,3507,3328,3507,3294,3506,3293,3497,3293,Q,3321,3294,3320,3307,3319,3319,3315,3323,3311,3327,3293,3323,3291,3330,3291,3347,L,3271,3347,3271,3358,3243,3358,3241,3370,3180,3370,Q,3161,3362,3159,3356,L,3107,3356,Q,3106,3356,3105,3356,3068,3354,3057,3356,3033,3374,3026,3375,3009,3376,3006,3399,3002,3420,2979,3417,L,2979,3432,2951,3432,Q,2958,3448,2946,3452,2932,3458,2932,3484,2932,3505,2923,3513,2914,3520,2913,3531,2911,3546,2912,3573,2911,3593,2901,3599,2889,3606,2887,3624,2886,3637,2868,3632,L,2868,3647,2854,3647,Q,2854,3668,2844,3673,2835,3691,2825,3698,2827,3699,2828,3701,2843,3718,2853,3719,L,2853,3743,Q,2867,3743,2875,3745,2875,3771,2892,3768,2888,3797,2905,3792,2906,3795,2910,3823,2912,3842,2920,3851,2934,3863,2928,3914,L,2953,3914,2953,3892,2972,3892,2972,3869,Q,2994,3869,3029,3864,L,3029,3843,3060,3843,3060,3824,Q,3058,3823,3057,3819,L,3109,3819,3109,3798,3129,3798,3129,3775,3147,3775,3147,3749,3173,3749,3173,3730,3218,3730,3218,3716,3253,3716,Q,3256,3723,3256,3739,L,3269,3739,3269,3763,3295,3763,3295,3793,3310,3793,3313,3810,Q,3323,3817,3350,3819,L,3350,3869,3374,3869,3374,3904,Q,3381,3904,3393,3907,L,3393,3949,Q,3376,3945,3377,3966,3377,3976,3378,3997,L,3355,3997,3355,4032,Q,3336,4022,3338,4044,3339,4068,3320,4060,L,3320,4083,3295,4083,3295,4145,3274,4145,Q,3282,4164,3266,4167,3264,4168,3227,4169,L,3227,4183,3129,4183,Q,3132,4164,3115,4164,3093,4169,3086,4166,L,3086,4143,3051,4143,3051,4161,Q,3055,4164,3072,4164,L,3072,4176,3114,4176,3114,4199,Q,3132,4188,3137,4223,3137,4225,3150,4233,3161,4239,3157,4254,L,3178,4254,3178,4275,3194,4275,3194,4298,Q,3208,4295,3211,4308,L,3258,4308,3258,4326,3295,4326,Q,3299,4323,3313,4323,L,3313,4303,3328,4303,3328,4271,3354,4271,3354,4259,3371,4259,3371,4233,3453,4233,3453,4265,Q,3431,4264,3424,4267,L,3424,4285,3400,4285,3400,4317,Q,3419,4316,3421,4305,L,3434,4305,3434,4288,3457,4288,3457,4274,3496,4274,Q,3502,4280,3502,4291,L,3512,4291,3512,4277,Q,3511,4272,3481,4255,3454,4240,3466,4210,L,3447,4210,3447,4140,Q,3450,4137,3466,4137,L,3466,4077,3481,4077,Q,3476,4065,3504,4062,L,3504,4042,3530,4042,Q,3526,4062,3555,4062,3570,4062,3602,4059,3624,4061,3641,4071,3657,4079,3677,4079,L,3677,4111,Q,3676,4126,3686,4129,3686,4137,3689,4152,L,3703,4152,Q,3703,4156,3707,4182,L,3736,4182,3736,4189,Q,3758,4187,3796,4179,L,3796,4169,3822,4169,3822,4153,3855,4153,3855,4135,3883,4135,3883,4114,Q,3903,4113,3904,4092,3900,4071,3900,4064,L,3899,4024,Q,3899,4e3,3911,3991,L,3911,3830,Q,3909,3798,3909,3784,3909,3761,3930,3766,3926,3757,3933,3749,3939,3739,3952,3745,L,3952,3721,3975,3721,3975,3703,Q,3986,3707,3994,3699,4004,3687,4016,3688,4037,3689,4043,3667,4083,3667,4154,3650,4205,3651,4216,3647,4232,3639,4232,3603,4232,3586,4218,3561,L,4218,3471,4257,3468,4257,3454,4294,3454,4296,3442,Q,4295,3407,4265,3406,4222,3403,4215,3398,4207,3392,4059,3392,4021,3392,3909,3398,L,3909,3415,3876,3415,3876,3434,3768,3434,Q,3766,3428,3766,3419,L,3681,3419,Q,3681,3402,3679,3394,Z]],label:"Greater Melbourne Victoria",shortLabel:"GMV",labelPosition:[362.5,368],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"victoria",type:"maps"}}})});