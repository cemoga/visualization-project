(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=542)})({542:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(543);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},543:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright InfoSoft Global Pvt. Ltd.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author InfoSoft Global Pvt. Ltd.
 * @meta package_map_pack
 * @id fusionmaps.Rangpur.17.11-26-2015 08:30:21
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Rangpur",revision:17,standaloneInit:true,baseWidth:600,baseHeight:572,baseScaleFactor:10,entities:{"BD.RP.DJ":{outlines:[[M,1851,2149,Q,1830,2167,1833,2189,1813,2212,1813,2239,1813,2266,1800,2293,L,1702,2293,Q,1693,2273,1693,2253,L,1678,2253,Q,1673,2221,1674,2213,L,1653,2213,1653,2193,1630,2193,Q,1631,2195,1632,2238,1632,2267,1619,2269,L,1521,2269,Q,1525,2292,1506,2333,L,1506,2376,Q,1497,2390,1483,2401,1483,2414,1521,2423,1530,2425,1538,2439,1546,2452,1558,2451,L,1558,2492,1541,2492,1541,2476,1473,2476,Q,1476,2496,1449,2537,1421,2579,1420,2598,1395,2620,1394,2661,1395,2687,1376,2691,1361,2694,1357,2703,1357,2705,1356,2707,L,1356,2744,Q,1360,2747,1382,2752,L,1382,2778,1397,2778,1397,2798,1380,2798,1380,2809,Q,1385,2824,1372,2833,L,1277,2833,1277,2764,1244,2764,1244,2789,1196,2789,1196,2766,1086,2766,1086,2829,Q,1087,2838,1098,2847,1111,2855,1123,2850,L,1123,2892,Q,1121,2894,1112,2896,L,1112,2876,1094,2876,1094,2861,1046,2861,Q,1044,2912,1024,2922,L,1024,2985,1053,2985,Q,1049,3006,1066,3007,L,1096,3009,1096,3036,Q,1076,3031,1075,3071,1075,3110,1042,3096,L,1042,3121,Q,1053,3132,1062,3134,L,1064,3178,Q,1065,3195,1090,3198,1093,3201,1113,3227,1128,3234,1155,3244,1160,3251,1178,3267,1195,3285,1194,3307,L,1194,3401,Q,1206,3401,1219,3401,L,1219,3422,Q,1216,3456,1216,3527,1213,3554,1203,3571,1194,3586,1194,3614,1194,3658,1209,3670,1234,3693,1247,3723,L,1295,3723,Q,1301,3720,1328,3717,L,1382,3717,Q,1368,3772,1391,3811,1403,3834,1435,3872,1460,3911,1561,3990,L,1646,3990,1646,3962,Q,1659,3962,1684,3956,1695,3956,1716,3976,1734,3994,1736,4002,L,1857,4002,1857,3979,1876,3979,Q,1872,4009,1890,4044,1901,4063,1919,4093,L,1987,4093,Q,2005,4089,2052,4094,2089,4094,2081,4053,L,2127,4050,2127,4018,2186,4018,2186,3999,2248,3999,2248,3910,Q,2245,3901,2242,3901,L,2242,3881,2258,3881,2258,3853,2281,3853,2281,3919,2296,3919,2296,3907,2355,3907,2355,3884,2391,3884,2391,3856,Q,2388,3847,2388,3823,L,2403,3823,Q,2408,3867,2403,3956,2408,4026,2454,4034,2454,4083,2462,4101,2469,4119,2469,4150,2469,4215,2457,4213,2444,4211,2444,4284,L,2444,4341,Q,2444,4349,2460,4361,2474,4373,2475,4386,2475,4438,2478,4444,2485,4457,2511,4467,2522,4496,2575,4538,2625,4578,2635,4613,L,2655,4613,2655,4578,2683,4578,2683,4516,2712,4516,2715,4548,Q,2733,4605,2750,4625,2785,4669,2856,4659,2996,4638,3079,4693,L,3079,4711,Q,3070,4715,3071,4723,3072,4728,3075,4737,L,3049,4737,Q,3049,4766,3047,4782,3069,4787,3125,4832,3180,4877,3210,4877,3239,4877,3243,4876,3253,4872,3258,4854,L,3336,4854,Q,3335,4858,3345,4887,3348,4894,3366,4909,3375,4934,3389,4939,3398,4942,3442,4943,3504,4943,3506,4931,3509,4920,3548,4920,3585,4920,3589,4921,3619,4938,3625,4938,3646,4938,3661,4950,3677,4962,3701,4963,L,3784,4961,Q,3791,4978,3815,4980,3843,4982,3850,4988,3865,5001,3901,5002,3927,5004,3924,5020,L,3956,5020,Q,3956,5004,3973,5001,3983,5e3,3998,4998,4018,4966,4026,4963,4060,4953,4060,4889,4060,4876,4018,4828,3974,4780,3952,4774,L,3948,4675,Q,3849,4559,3784,4550,L,3784,4522,Q,3787,4523,3804,4519,L,3804,4469,3720,4469,3720,4410,Q,3678,4406,3651,4389,3598,4381,3585,4370,3552,4348,3539,4332,3537,4331,3491,4307,L,3491,4292,3519,4292,3519,4263,Q,3460,4242,3430,4228,3375,4201,3373,4171,3350,4041,3347,3976,3321,3930,3321,3889,3307,3838,3303,3791,3298,3712,3154,3723,3094,3694,3057,3631,3023,3534,2994,3505,2933,3444,2871,3409,2833,3384,2824,3349,2808,3293,2799,3279,L,2799,3194,Q,2776,3204,2752,3204,2736,3171,2707,3175,2692,3176,2681,3166,2670,3153,2661,3147,L,2621,3115,2557,3115,2557,3019,2589,3009,2589,2965,2462,2965,2462,2701,Q,2462,2676,2448,2660,2428,2638,2428,2637,2396,2599,2389,2577,2364,2539,2351,2508,2345,2492,2324,2490,2298,2487,2288,2480,2266,2474,2253,2471,2233,2466,2232,2437,2214,2418,2210,2397,L,2188,2364,2188,2269,Q,2173,2269,2146,2256,2122,2243,2095,2247,2069,2250,2037,2242,2003,2231,1985,2227,1957,2222,1912,2155,1898,2135,1876,2118,Q,1874,2130,1851,2149,Z]],label:"Dinajpur District",shortLabel:"DJ",labelPosition:[180.5,320.1],labelAlignment:[CEN,MID]},"BD.RP.GB":{outlines:[[M,4757,3667,Q,4738,3665,4726,3692,4714,3717,4686,3702,4686,3708,4683,3723,4683,3785,4726,3785,L,4726,3811,Q,4707,3804,4713,3826,4682,3823,4662,3823,L,4660,3852,4633,3852,Q,4629,3835,4629,3791,L,4614,3791,Q,4614,3751,4611,3738,L,4447,3738,4447,3764,4407,3764,4407,3791,4388,3791,Q,4382,3816,4381,3820,4382,3847,4406,3850,4434,3854,4447,3866,4449,3868,4450,3869,L,4450,3889,Q,4473,3901,4487,3906,4490,3909,4490,3935,L,4483,4004,Q,4483,4018,4510,4045,4539,4074,4561,4074,L,4561,4102,Q,4546,4098,4536,4120,4524,4149,4512,4155,4496,4164,4475,4220,L,4443,4220,4443,4199,4399,4199,Q,4403,4223,4378,4234,4346,4249,4337,4267,4325,4292,4298,4314,4290,4355,4282,4364,4263,4391,4226,4449,4193,4497,4160,4513,4160,4528,4157,4535,L,4157,4550,Q,4179,4553,4191,4581,4208,4624,4228,4615,L,4228,4630,4192,4630,Q,4192,4639,4175,4639,4155,4637,4145,4637,L,4145,4653,4157,4653,Q,4169,4696,4200,4717,4211,4733,4240,4733,4261,4733,4254,4758,4076,4761,3952,4761,L,3952,4774,Q,3974,4780,4018,4828,4060,4876,4060,4889,4060,4953,4026,4963,4018,4966,3998,4998,3983,5e3,3973,5001,3956,5004,3956,5020,L,3924,5020,Q,3927,5004,3901,5002,3865,5001,3850,4988,3843,4982,3815,4980,3791,4978,3784,4961,L,3701,4963,Q,3700,4971,3701,4998,3699,5021,3678,5013,3678,5048,3660,5074,3660,5104,3807,5243,3816,5255,3830,5288,3836,5295,3851,5308,3864,5322,3862,5337,3859,5372,3884,5392,3913,5415,3918,5434,L,3942,5434,Q,3941,5432,3941,5430,3933,5412,3947,5406,3972,5395,3979,5383,3988,5371,4051,5371,4063,5371,4088,5380,4110,5389,4123,5386,4152,5379,4165,5394,4173,5403,4186,5420,4213,5442,4241,5464,L,4241,5558,Q,4306,5558,4335,5560,L,4335,5585,4359,5585,4359,5544,Q,4365,5544,4378,5541,4378,5517,4381,5510,L,4412,5510,Q,4427,5566,4480,5555,L,4480,5582,4496,5582,Q,4497,5563,4507,5541,4520,5516,4535,5516,4550,5516,4573,5541,4586,5555,4601,5572,4615,5584,4643,5601,4648,5604,4665,5601,4681,5600,4691,5610,4703,5624,4735,5625,4754,5626,4788,5625,4802,5626,4814,5654,4827,5685,4838,5690,L,4892,5690,Q,4892,5667,4895,5659,4928,5659,4921,5616,4925,5608,4984,5607,4999,5608,5027,5578,5034,5576,5094,5576,5147,5576,5157,5578,5161,5580,5174,5595,5184,5608,5203,5606,5243,5539,5243,5520,5243,5505,5236,5501,5225,5495,5219,5478,5217,5473,5217,5426,5204,5426,5200,5424,L,5200,5412,5225,5387,Q,5232,5380,5236,5354,5268,5325,5269,5323,5278,5321,5281,5297,5288,5284,5308,5265,5329,5245,5332,5230,5337,5202,5358,5191,5362,5189,5367,5135,5369,5097,5367,5072,5366,5061,5395,5041,5405,5033,5433,5013,5455,4995,5449,4972,L,5480,4972,5480,5006,5547,5006,Q,5533,4979,5556,4961,5570,4952,5597,4938,5601,4919,5613,4903,5618,4895,5618,4860,5618,4826,5616,4822,5603,4813,5582,4792,5588,4761,5575,4757,5567,4754,5552,4732,5514,4676,5510,4660,5507,4648,5507,4565,L,5507,4471,Q,5509,4463,5513,4457,5511,4444,5515,4410,L,5515,4369,5487,4369,5487,4398,Q,5437,4401,5441,4429,L,5409,4429,Q,5357,4422,5355,4420,5351,4417,5351,4388,5351,4354,5364,4355,5395,4358,5394,4338,L,5412,4338,5412,4318,Q,5379,4330,5372,4307,5369,4298,5367,4257,5367,4255,5367,4251,L,5367,4200,5394,4200,Q,5391,4186,5392,4177,5392,4161,5407,4168,L,5407,4142,Q,5274,4133,5193,4133,L,5193,4120,5245,4120,5245,4093,Q,5286,4093,5338,4083,L,5338,4066,Q,5315,4031,5294,4012,5278,3999,5277,3976,5276,3951,5269,3941,5203,3877,5176,3850,L,5058,3850,5058,3872,Q,5059,3872,5065,3878,L,5065,3931,5049,3931,5049,3953,Q,5029,3954,5030,3924,L,5031,3881,Q,5013,3832,5012,3814,4905,3757,4887,3737,4865,3698,4847,3673,4838,3652,4831,3636,4815,3641,4797,3657,Q,4783,3670,4757,3667,Z]],label:"Gaibandha District",shortLabel:"GB",labelPosition:[473.9,466.3],labelAlignment:[CEN,MID]},"BD.RP.KR":{outlines:[[M,5470,1651,Q,5450,1651,5440,1658,5433,1680,5417,1698,5390,1727,5360,1711,L,5360,1735,5332,1735,5332,1708,5308,1708,5308,1636,Q,5275,1639,5269,1633,5265,1630,5266,1605,5266,1585,5277,1564,5289,1539,5291,1523,5311,1529,5318,1517,5322,1510,5327,1491,L,5327,1444,Q,5253,1444,5239,1430,5184,1381,5168,1378,5169,1438,5145,1442,5120,1446,5116,1454,L,5116,1512,Q,5115,1551,5107,1563,5092,1583,5013,1613,5003,1666,4981,1667,4962,1667,4962,1704,4962,1717,5013,1814,5015,1820,5013,1848,5011,1874,5018,1884,5032,1904,5027,1960,L,5052,1960,5052,1912,Q,5074,1919,5087,1881,5100,1840,5116,1842,5104,1930,5173,2010,L,5173,2053,Q,5059,2043,5022,2077,5013,2086,4949,2086,4915,2127,4902,2138,L,4902,2250,Q,4926,2257,4957,2281,4990,2305,4990,2318,4990,2332,4981,2334,4973,2335,4972,2357,L,4934,2357,Q,4951,2399,4903,2399,4880,2399,4873,2391,4862,2377,4845,2371,4825,2280,4823,2276,4798,2210,4752,2207,L,4620,2207,4620,2241,4618,2241,4619,2311,Q,4620,2361,4594,2369,L,4594,2436,Q,4624,2436,4679,2435,4692,2435,4733,2484,4752,2504,4768,2543,4783,2558,4808,2597,L,4848,2597,4848,2575,4866,2575,4866,2595,4861,2621,4861,2656,4931,2656,Q,4948,2656,4959,2664,4970,2674,4992,2678,L,4992,2716,Q,4980,2732,4946,2765,4945,2766,4890,2808,4878,2815,4841,2856,4818,2878,4818,2927,L,4820,3002,Q,4820,3011,4791,3034,4784,3047,4758,3057,4752,3097,4728,3088,L,4728,3116,4694,3116,Q,4701,3100,4688,3093,4675,3086,4660,3090,L,4660,3072,Q,4655,3074,4637,3074,L,4637,2985,4613,2985,4612,3005,Q,4597,3001,4591,3022,4585,3041,4563,3031,4562,3038,4562,3052,4561,3063,4550,3062,4571,3085,4571,3129,4572,3161,4600,3169,4602,3169,4670,3173,4689,3174,4697,3186,4702,3193,4711,3210,4722,3224,4757,3227,L,4757,3244,4670,3244,4670,3263,4639,3263,4639,3288,Q,4670,3278,4685,3291,4694,3298,4711,3320,4738,3346,4754,3356,4757,3360,4757,3401,4757,3447,4748,3495,4748,3549,4817,3606,4822,3615,4832,3636,4838,3652,4847,3674,4865,3698,4887,3737,4905,3757,5012,3815,5013,3832,5031,3882,L,5030,3924,Q,5029,3954,5049,3953,L,5049,3931,5065,3931,5065,3878,Q,5059,3872,5059,3872,L,5059,3850,5177,3850,Q,5203,3877,5269,3942,5276,3951,5277,3977,5278,3999,5295,4012,5315,4031,5338,4066,L,5338,4083,Q,5286,4093,5245,4093,L,5245,4121,5193,4121,5193,4134,Q,5274,4133,5407,4143,L,5407,4168,Q,5392,4161,5392,4178,5391,4186,5394,4200,L,5367,4200,5367,4252,Q,5367,4255,5368,4258,5369,4298,5372,4307,5379,4330,5413,4318,L,5413,4338,5394,4338,Q,5395,4358,5364,4355,5351,4354,5351,4389,5351,4417,5355,4421,5357,4422,5410,4429,L,5442,4429,Q,5437,4401,5487,4398,L,5487,4370,5515,4370,5515,4410,Q,5511,4444,5513,4457,5526,4436,5558,4440,5556,4429,5573,4426,5581,4425,5595,4421,5621,4401,5633,4405,L,5633,4381,Q,5610,4360,5604,4356,5577,4343,5573,4333,L,5573,4318,Q,5594,4301,5591,4284,5591,4257,5593,4247,L,5604,4247,Q,5610,4249,5618,4249,5620,4275,5644,4298,5656,4310,5678,4330,5681,4334,5697,4332,5713,4330,5720,4340,5725,4347,5728,4357,5731,4364,5742,4363,5743,4359,5743,4356,5730,4323,5754,4283,5782,4236,5783,4220,5823,4048,5824,4042,5824,4041,5824,3910,5824,3859,5869,3800,5912,3740,5912,3726,5879,3651,5879,3626,5879,3600,5889,3586,5899,3573,5898,3537,5898,3513,5908,3490,5917,3467,5917,3451,5917,3432,5861,3382,5803,3335,5800,3330,5790,3318,5792,3278,5795,3237,5786,3227,5743,3178,5743,3161,5743,3129,5763,3127,5782,3126,5786,3077,L,5829,3077,5829,2998,Q,5749,2913,5734,2905,L,5734,2858,Q,5764,2871,5771,2838,L,5783,2782,Q,5795,2761,5795,2675,5800,2667,5869,2613,5918,2573,5917,2529,L,5969,2529,5969,2502,5889,2461,Q,5861,2462,5831,2439,5796,2414,5777,2414,5777,2395,5772,2386,5788,2378,5805,2340,5815,2316,5857,2330,L,5857,2302,5889,2302,5889,2273,5829,2273,Q,5817,2302,5774,2302,5721,2301,5723,2259,5727,2185,5711,2155,5701,2134,5657,2103,5614,2070,5604,2050,L,5604,2020,Q,5626,2019,5641,2010,5655,2001,5679,2001,L,5679,1969,Q,5600,1858,5561,1828,5505,1785,5500,1739,5500,1736,5502,1671,Q,5503,1650,5470,1651,Z]],label:"Kurigram District",shortLabel:"KR",labelPosition:[525.9,291.7],labelAlignment:[CEN,MID]},"BD.RP.LL":{outlines:[[M,3864,1976,L,3911,1976,3911,1943,Q,3909,1885,3852,1848,3817,1825,3726,1794,3634,1764,3599,1742,3543,1706,3542,1650,3543,1638,3522,1618,3501,1597,3501,1578,3517,1566,3516,1525,3517,1508,3528,1504,3539,1500,3539,1487,3539,1473,3517,1435,3499,1405,3513,1369,3478,1370,3414,1310,3352,1253,3352,1231,3364,1209,3364,1161,L,3456,1161,Q,3472,1178,3468,1190,L,3520,1190,3520,1158,3504,1158,Q,3514,1132,3477,1113,3443,1093,3459,1060,3408,1057,3303,1057,L,3303,1038,3352,1038,3352,1015,3371,1015,3371,997,Q,3360,998,3347,986,3328,969,3324,967,L,3324,941,3349,941,3349,919,3395,919,3395,901,Q,3411,901,3417,904,L,3417,885,Q,3406,886,3402,869,3396,841,3393,836,3353,821,3339,814,L,3274,814,3274,836,3190,836,Q,3137,792,3125,779,3115,770,3079,762,3043,753,3034,746,2964,689,2916,614,2899,613,2900,634,2900,645,2901,664,L,2842,664,Q,2852,695,2827,714,2793,738,2790,749,2788,757,2724,838,L,2724,925,2736,925,Q,2736,959,2739,973,2764,965,2782,980,2801,999,2811,997,2843,993,2853,1008,2866,1025,2884,1024,2904,1025,2916,1e3,2925,970,2930,960,L,2954,960,Q,2956,965,2954,981,2953,996,2963,994,L,2963,1041,2995,1041,2995,1063,2979,1063,2979,1112,Q,2940,1122,2920,1122,L,2920,1155,2921,1158,Q,2943,1159,2951,1155,L,2951,1193,2982,1193,2982,1206,3005,1206,Q,3008,1200,3008,1180,L,3050,1180,3050,1152,3092,1152,3092,1171,3115,1171,3115,1193,3131,1193,Q,3137,1231,3137,1245,3154,1245,3190,1248,3184,1285,3219,1280,L,3219,1355,3200,1355,Q,3199,1367,3196,1398,L,3175,1398,3175,1420,3156,1420,3156,1607,Q,3184,1639,3278,1695,3288,1702,3310,1719,3315,1724,3338,1733,3348,1744,3347,1820,L,3347,1876,Q,3348,1896,3330,1919,3333,1967,3324,1974,3315,1982,3315,2008,3315,2027,3330,2045,3337,2055,3334,2094,L,3354,2189,Q,3357,2204,3369,2244,3366,2281,3378,2290,3402,2310,3407,2318,3419,2336,3424,2367,3445,2397,3484,2420,3496,2432,3529,2430,3541,2428,3563,2449,3574,2452,3605,2460,3618,2474,3640,2491,3660,2505,3691,2549,3691,2547,3692,2545,3706,2542,3726,2559,3748,2576,3759,2575,3788,2574,3836,2623,3851,2636,3864,2655,3878,2669,3905,2669,3921,2670,4014,2686,L,4014,2744,Q,4055,2782,4111,2799,4133,2807,4146,2840,4164,2881,4172,2890,4230,2948,4363,3042,L,4397,3042,4397,3008,4441,3008,Q,4434,3051,4525,3045,4540,3051,4550,3062,4561,3063,4562,3052,4562,3038,4563,3031,4585,3041,4591,3022,4597,3001,4611,3005,L,4613,2985,4637,2985,4637,3074,Q,4655,3074,4660,3072,L,4660,3089,Q,4675,3086,4688,3093,4701,3100,4694,3115,L,4728,3115,4728,3088,Q,4752,3097,4758,3057,4784,3047,4791,3034,4820,3011,4820,3002,L,4818,2927,Q,4818,2878,4841,2856,4878,2815,4889,2808,4945,2766,4946,2764,4980,2732,4992,2716,L,4992,2677,Q,4970,2674,4959,2664,4948,2656,4930,2655,L,4860,2655,4860,2620,4866,2594,4866,2575,4848,2575,4848,2597,4808,2597,Q,4783,2558,4768,2543,4752,2504,4733,2483,4692,2435,4679,2435,4624,2436,4594,2436,L,4594,2368,Q,4620,2361,4619,2311,L,4618,2241,4577,2241,Q,4568,2203,4525,2203,4532,2152,4506,2116,4473,2069,4467,2039,L,4432,2039,Q,4433,2071,4381,2144,4326,2221,4291,2221,4262,2222,4235,2203,L,4209,2203,Q,4154,2184,4079,2106,4028,2059,4008,2060,3982,2061,3958,2049,3933,2036,3933,2020,3831,2022,3810,1991,L,3864,1991,Z]],label:"Lalmonirhat District",shortLabel:"LL",labelPosition:[385.8,233.4],labelAlignment:[CEN,MID]},"BD.RP.NP":{outlines:[[M,2985,1414,L,2954,1414,Q,2945,1395,2945,1391,L,2927,1391,Q,2927,1398,2924,1414,L,2894,1414,Q,2845,1320,2821,1268,2796,1224,2761,1224,2725,1225,2712,1217,2700,1209,2677,1209,2586,1209,2563,1280,2554,1284,2534,1284,L,2534,1305,Q,2550,1301,2584,1317,L,2615,1317,2615,1287,2632,1287,2632,1385,2606,1385,2606,1472,2572,1472,Q,2566,1438,2566,1436,2529,1435,2530,1415,2530,1395,2511,1379,2492,1363,2473,1356,2431,1340,2436,1300,2441,1255,2428,1216,2412,1174,2414,1148,2356,1137,2335,1136,2315,1137,2311,1165,2308,1193,2287,1193,2283,1193,2279,1192,L,2279,1216,Q,2287,1232,2293,1242,2293,1260,2281,1297,2281,1343,2305,1362,2326,1405,2397,1517,2398,1531,2387,1541,2377,1552,2376,1564,2374,1590,2374,1638,L,2377,1819,Q,2366,1832,2366,1865,2365,1880,2340,1899,2336,1901,2336,1943,2337,1991,2347,1997,2356,2003,2356,2039,2356,2068,2336,2096,2304,2145,2293,2157,2265,2185,2262,2190,2258,2196,2238,2218,2234,2248,2188,2272,L,2188,2364,2210,2397,Q,2214,2418,2232,2437,2233,2466,2253,2471,2266,2474,2288,2480,2298,2487,2324,2490,2345,2492,2351,2508,2364,2539,2389,2577,2396,2599,2428,2637,2428,2638,2448,2660,2462,2676,2462,2701,L,2462,2965,2589,2965,2589,3009,2557,3019,2557,3115,2621,3115,2661,3147,Q,2670,3153,2681,3166,2692,3176,2707,3175,2736,3171,2752,3204,2776,3204,2799,3194,2830,3181,2861,3152,2900,3143,2907,3120,2911,3107,2910,3064,2910,2995,2879,2984,L,2879,2944,Q,2949,2944,2954,2937,2970,2921,3025,2921,3115,2921,3134,2949,L,3243,2949,3243,2914,Q,3281,2929,3263,2865,L,3283,2865,3283,2837,3302,2837,Q,3294,2871,3325,2901,3370,2946,3373,2952,L,3396,2952,3396,2897,Q,3390,2893,3390,2843,3390,2796,3394,2789,3396,2785,3440,2750,3469,2726,3514,2681,3524,2682,3539,2721,3555,2758,3555,2773,L,3585,2773,Q,3585,2741,3619,2716,3630,2707,3632,2690,3635,2670,3642,2663,3677,2628,3691,2549,3660,2505,3640,2491,3618,2474,3605,2460,3574,2452,3563,2449,3541,2428,3529,2430,3496,2432,3484,2420,3445,2397,3424,2367,3419,2336,3407,2318,3402,2310,3378,2290,3366,2281,3369,2244,3357,2204,3354,2189,L,3334,2094,Q,3337,2055,3330,2045,3315,2027,3315,2008,3315,1982,3324,1974,3333,1967,3330,1919,3348,1896,3347,1876,L,3347,1820,Q,3348,1744,3338,1733,3315,1724,3310,1719,3288,1702,3278,1695,3184,1639,3156,1607,L,3156,1420,3151,1420,3151,1391,Q,3118,1396,3101,1396,3071,1396,3069,1373,L,3034,1373,3034,1394,2985,1394,Z]],label:"Nilphamari District",shortLabel:"NP",labelPosition:[277.2,217],labelAlignment:[CEN,MID]},"BD.RP.PN":{outlines:[[M,1582,533,Q,1577,517,1533,507,1491,497,1455,502,L,1455,472,Q,1460,469,1478,469,L,1478,421,1451,421,1451,439,1418,439,Q,1386,410,1372,392,1350,360,1358,313,1343,313,1317,320,L,1173,320,1174,291,Q,1174,275,1157,271,L,1154,29,Q,1113,29,1092,25,1083,39,1062,65,1035,97,1030,122,1024,159,978,167,L,978,256,Q,987,304,956,335,917,367,903,383,840,457,840,501,840,520,848,603,848,626,866,631,891,640,900,655,L,938,655,Q,933,626,933,614,L,960,614,Q,956,584,956,573,L,1049,573,Q,1046,555,1075,555,L,1094,555,Q,1091,580,1110,595,1123,603,1154,619,L,1239,619,1239,610,1236,607,1285,607,Q,1279,630,1303,640,1324,648,1343,644,1344,699,1362,748,1362,809,1361,838,1368,851,1455,916,L,1455,946,1432,946,1432,961,1426,961,Q,1418,957,1418,953,L,1381,953,1381,980,1358,980,1358,957,Q,1338,957,1328,938,1317,918,1303,916,L,1303,887,1280,887,Q,1278,915,1213,961,1166,994,1139,1032,1109,1091,1082,1120,1034,1173,963,1144,977,1176,930,1170,916,1195,893,1244,883,1255,883,1285,885,1317,877,1331,L,877,1356,Q,908,1366,952,1398,L,952,1438,Q,908,1431,860,1484,833,1514,814,1530,L,814,1538,Q,832,1542,858,1567,886,1596,906,1602,943,1613,970,1644,995,1672,1e3,1672,1019,1672,1024,1602,1044,1602,1049,1580,1053,1568,1081,1566,1094,1565,1116,1550,L,1161,1550,Q,1218,1550,1224,1558,1240,1581,1279,1589,L,1335,1589,1335,1576,1421,1576,Q,1436,1586,1499,1595,1560,1602,1579,1619,1584,1624,1629,1627,1637,1628,1661,1652,1675,1665,1721,1716,1744,1736,1791,1754,1816,1769,1847,1800,1865,1813,1899,1871,1943,1919,1943,1940,1943,1957,1895,1991,1884,1998,1883,2012,1882,2019,1882,2030,1873,2051,1873,2077,1873,2116,1876,2118,1898,2135,1912,2155,1957,2222,1985,2227,2003,2231,2037,2242,2069,2250,2095,2247,2122,2243,2146,2256,2173,2269,2188,2269,L,2188,2272,Q,2234,2248,2238,2218,2258,2196,2262,2190,2265,2185,2293,2157,2304,2145,2336,2096,2356,2068,2356,2039,2356,2003,2347,1997,2337,1991,2336,1943,2336,1901,2340,1899,2365,1880,2366,1865,2366,1832,2377,1819,L,2374,1638,Q,2374,1590,2376,1564,2377,1552,2387,1541,2398,1531,2397,1517,2326,1405,2305,1362,2281,1343,2281,1297,2293,1260,2293,1242,2287,1232,2279,1216,L,2279,1192,Q,2267,1191,2259,1184,2248,1174,2233,1174,2143,1241,2104,1241,2104,1249,2101,1270,2073,1269,2061,1271,2044,1273,2041,1293,L,1981,1293,Q,1974,1281,1974,1274,1974,1258,1975,1257,1979,1256,2011,1256,L,2011,1233,2074,1233,Q,2076,1216,2093,1219,L,2093,1188,2067,1188,2067,1170,2041,1170,Q,2039,1150,2051,1148,2059,1147,2078,1148,L,2078,1125,2253,1125,2253,1021,Q,2251,999,2246,987,L,2153,987,2153,1021,2109,1021,Q,2106,993,2073,957,2036,917,2029,898,2037,894,2060,894,L,2060,797,2041,797,Q,2041,801,2029,801,L,2029,826,1974,826,Q,1767,649,1780,525,L,1761,525,1761,562,1713,562,Q,1729,607,1661,607,1639,607,1612,579,Q,1589,554,1582,533,Z]],label:"Panchagarh District",shortLabel:"PN",labelPosition:[157.2,124.9],labelAlignment:[CEN,MID]},"BD.RP.RP":{outlines:[[M,4397,3008,L,4397,3042,4363,3042,Q,4230,2948,4172,2890,4164,2881,4146,2840,4133,2807,4111,2799,4055,2782,4014,2744,L,4014,2686,Q,3921,2670,3905,2669,3878,2669,3864,2655,3851,2636,3836,2623,3788,2574,3759,2575,3748,2576,3726,2559,3706,2542,3692,2545,3691,2547,3691,2549,3677,2628,3642,2663,3635,2670,3632,2690,3630,2707,3619,2716,3585,2741,3585,2773,L,3555,2773,Q,3555,2758,3539,2721,3524,2682,3514,2681,3469,2726,3440,2750,3396,2785,3394,2789,3390,2796,3390,2843,3390,2893,3396,2897,L,3396,2952,3373,2952,Q,3370,2946,3325,2901,3294,2871,3302,2837,L,3283,2837,3283,2865,3263,2865,Q,3281,2929,3243,2914,L,3243,2949,3134,2949,Q,3115,2921,3025,2921,2970,2921,2954,2937,2949,2944,2879,2944,L,2879,2984,Q,2910,2995,2910,3064,2911,3107,2907,3120,2900,3143,2861,3152,2830,3181,2799,3194,L,2799,3279,Q,2808,3293,2824,3349,2833,3384,2871,3409,2933,3444,2994,3505,3023,3534,3057,3631,3094,3694,3154,3723,3298,3712,3303,3791,3307,3838,3321,3889,3321,3930,3347,3976,3350,4041,3373,4171,3375,4201,3430,4228,3460,4242,3519,4263,L,3519,4292,3491,4292,3491,4307,Q,3537,4331,3539,4332,3552,4348,3585,4370,3598,4381,3651,4389,3678,4406,3720,4410,L,3720,4469,3804,4469,3804,4519,Q,3787,4523,3784,4522,L,3784,4550,Q,3849,4559,3948,4675,L,3952,4761,Q,4076,4761,4254,4758,4261,4733,4240,4733,4211,4733,4200,4717,4169,4696,4157,4653,L,4145,4653,4145,4637,Q,4155,4637,4175,4639,4192,4639,4192,4630,L,4228,4630,4228,4615,Q,4208,4624,4191,4581,4179,4553,4157,4550,L,4157,4535,Q,4160,4528,4160,4513,4193,4497,4226,4449,4263,4391,4282,4364,4290,4355,4298,4314,4325,4292,4337,4267,4346,4249,4378,4234,4403,4223,4399,4199,L,4443,4199,4443,4220,4475,4220,Q,4496,4164,4512,4155,4524,4149,4536,4120,4546,4098,4561,4102,L,4561,4074,Q,4539,4074,4510,4045,4483,4018,4483,4004,L,4490,3935,Q,4490,3909,4487,3906,4473,3901,4450,3889,L,4450,3869,Q,4449,3868,4447,3866,4434,3854,4406,3850,4382,3847,4381,3820,4382,3816,4388,3791,L,4407,3791,4407,3764,4447,3764,4447,3738,4611,3738,Q,4614,3751,4614,3791,L,4629,3791,Q,4629,3835,4633,3852,L,4660,3852,4662,3823,Q,4682,3823,4713,3826,4707,3804,4726,3811,L,4726,3785,Q,4683,3785,4683,3723,4686,3708,4686,3702,4714,3717,4726,3692,4738,3665,4757,3667,4783,3670,4797,3657,4815,3641,4831,3636,4822,3615,4817,3606,4748,3549,4748,3495,4757,3447,4757,3401,4757,3360,4754,3356,4738,3346,4710,3320,4694,3298,4684,3290,4670,3278,4639,3287,L,4639,3263,4670,3263,4670,3244,4757,3244,4757,3226,Q,4722,3224,4710,3210,4702,3193,4697,3186,4689,3174,4670,3172,4602,3169,4600,3169,4572,3161,4571,3129,4571,3085,4550,3062,4540,3051,4525,3045,4434,3051,4441,3008,Z]],label:"Rangpur District",shortLabel:"RP",labelPosition:[381.5,351.9],labelAlignment:[CEN,MID]},"BD.RP.TH":{outlines:[[M,1161,1550,L,1116,1550,Q,1094,1565,1081,1566,1053,1568,1049,1580,1044,1602,1024,1602,1019,1672,1e3,1672,995,1672,970,1644,943,1613,906,1602,886,1596,858,1567,832,1542,814,1538,L,814,1530,Q,797,1545,788,1547,647,1570,583,1584,L,516,1584,Q,514,1606,499,1630,491,1643,488,1654,486,1661,486,1667,L,486,1669,Q,486,1680,487,1695,484,1715,452,1716,411,1719,366,1719,368,1735,358,1752,348,1770,350,1781,351,1790,338,1807,323,1826,324,1836,327,1873,299,1889,297,1901,297,1919,296,1935,282,1948,L,282,1985,303,1985,303,2011,Q,308,2012,325,2012,343,2013,347,2023,366,2060,366,2070,366,2095,323,2147,282,2198,252,2213,233,2224,172,2278,154,2294,136,2305,143,2354,113,2339,L,113,2359,Q,116,2359,136,2368,L,136,2408,Q,119,2421,92,2454,65,2480,22,2464,L,22,2678,Q,38,2693,76,2704,112,2715,125,2735,L,103,2735,103,2782,79,2782,79,2827,Q,103,2853,165,2925,220,2983,220,3036,L,252,3036,252,3020,268,3020,268,2990,Q,289,2999,296,2979,304,2956,315,2955,377,2951,363,2916,L,383,2916,Q,385,2919,405,2956,429,2994,452,2993,L,493,2983,Q,485,2914,610,2919,L,610,2896,633,2896,Q,611,2974,670,3003,686,3011,721,3023,750,3035,759,3051,797,3115,829,3137,857,3156,928,3172,930,3177,943,3198,L,943,3253,Q,997,3299,1045,3372,1062,3397,1127,3399,1154,3400,1194,3401,L,1194,3307,Q,1195,3285,1178,3267,1160,3251,1155,3244,1128,3234,1113,3227,1093,3201,1090,3198,1065,3195,1064,3178,L,1062,3134,Q,1053,3132,1042,3121,L,1042,3096,Q,1075,3110,1075,3071,1076,3031,1096,3036,L,1096,3009,1066,3007,Q,1049,3006,1053,2985,L,1024,2985,1024,2922,Q,1044,2912,1046,2861,L,1094,2861,1094,2876,1112,2876,1112,2896,Q,1121,2894,1123,2892,L,1123,2850,Q,1111,2855,1098,2847,1087,2838,1086,2829,L,1086,2766,1196,2766,1196,2789,1244,2789,1244,2764,1277,2764,1277,2833,1372,2833,Q,1385,2824,1380,2809,L,1380,2798,1397,2798,1397,2778,1382,2778,1382,2752,Q,1360,2747,1356,2744,L,1356,2707,Q,1357,2705,1357,2703,1361,2694,1376,2691,1395,2687,1394,2661,1395,2620,1420,2598,1421,2579,1449,2537,1476,2496,1473,2476,L,1541,2476,1541,2492,1558,2492,1558,2451,Q,1546,2452,1538,2439,1530,2425,1521,2423,1483,2414,1483,2401,1497,2390,1506,2376,L,1506,2333,Q,1525,2292,1521,2269,L,1619,2269,Q,1632,2267,1632,2238,1631,2195,1630,2193,L,1653,2193,1653,2213,1674,2213,Q,1673,2221,1678,2253,L,1693,2253,Q,1693,2273,1702,2293,L,1800,2293,Q,1813,2266,1813,2239,1813,2212,1833,2189,1830,2167,1851,2149,1874,2130,1876,2118,1873,2116,1873,2077,1873,2051,1882,2030,1882,2019,1883,2012,1884,1998,1895,1991,1943,1957,1943,1940,1943,1919,1899,1871,1865,1813,1847,1800,1816,1769,1791,1754,1744,1736,1721,1716,1675,1665,1661,1652,1637,1628,1629,1627,1584,1624,1579,1619,1560,1602,1499,1595,1436,1586,1421,1576,L,1335,1576,1335,1589,1279,1589,Q,1240,1581,1224,1558,Q,1218,1550,1161,1550,Z]],label:"Thakurgaon District",shortLabel:"TH",labelPosition:[74.8,233.2],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"rangpur",type:"maps"}}})});