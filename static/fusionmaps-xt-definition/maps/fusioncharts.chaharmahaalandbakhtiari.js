(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=138)})({138:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(139);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},139:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright InfoSoft Global Pvt. Ltd.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author InfoSoft Global Pvt. Ltd.
 * @meta package_map_pack
 * @id fusionmaps.ChaharMahaalAndBakhtiari.1.11-06-2017 03:09:45
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"ChaharMahaalAndBakhtiari",revision:1,creditLabel:false,standaloneInit:false,baseWidth:600,baseHeight:615,baseScaleFactor:10,firstEntity:"IR.CM.AR",entities:{"IR.CM.AR":{outlines:[[M,3042,2257,Q,3030,2245,3023,2239,3012,2228,3001,2227,3001,2235,2998,2237,2991,2242,2987,2249,2975,2267,2970,2278,2957,2301,2955,2305,2950,2319,2942,2330,2941,2331,2940,2332,2938,2338,2931,2358,2928,2366,2928,2372,2928,2375,2928,2385,2927,2387,2927,2397,2927,2404,2925,2408,2917,2420,2916,2423,2914,2425,2914,2434,2914,2464,2916,2479,2917,2489,2922,2498,2926,2506,2926,2513,2926,2526,2932,2547,2938,2568,2938,2583,2938,2588,2938,2608,2938,2623,2928,2630,2923,2633,2906,2641,2895,2645,2891,2647,2884,2650,2877,2650,2864,2650,2850,2642,2836,2634,2829,2634,2821,2634,2764,2637,2703,2640,2699,2641,2623,2669,2592,2680,2548,2694,2479,2724,2445,2738,2427,2750,2398,2768,2381,2777,2327,2808,2303,2819,2278,2830,2257,2843,2244,2851,2222,2866,2181,2891,2143,2924,L,2069,2984,Q,2081,2993,2094,3003,2147,3046,2181,3071,2214,3096,2232,3111,2250,3125,2263,3135,2277,3146,2292,3159,2307,3172,2339,3200,2367,3224,2379,3236,L,2379,3237,Q,2385,3243,2408,3267,2412,3272,2425,3280,2437,3289,2444,3296,2457,3309,2514,3355,L,2553,3389,Q,2577,3409,2583,3417,2587,3421,2615,3444,2617,3445,2639,3473,2639,3476,2632,3481,2625,3488,2624,3492,L,2624,3516,Q,2624,3521,2625,3531,2625,3539,2624,3543,2623,3546,2616,3555,2613,3560,2612,3563,2612,3565,2612,3567,2612,3611,2612,3628,2612,3641,2611,3643,2605,3655,2595,3686,L,2595,3730,Q,2595,3789,2599,3819,L,2599,3863,Q,2600,3890,2606,3901,L,2608,3907,Q,2608,3909,2623,3923,2640,3939,2643,3944,2648,3952,2660,3964,2667,3971,2684,3989,2692,3998,2777,4075,2784,4081,2820,4116,2848,4144,2865,4158,2913,4194,2945,4235,L,2963,4258,Q,2966,4262,2971,4267,2977,4273,2981,4279,L,2984,4282,2992,4283,Q,2997,4283,3011,4276,3026,4268,3030,4267,3031,4267,3049,4263,3061,4261,3067,4255,3070,4252,3098,4252,3112,4252,3127,4252,3139,4249,3149,4244,3154,4241,3166,4241,3177,4241,3182,4243,3192,4248,3199,4250,3207,4253,3233,4252,3234,4252,3248,4261,3254,4264,3268,4267,3280,4269,3299,4277,3333,4291,3373,4311,3376,4313,3388,4321,3396,4327,3402,4327,3406,4327,3411,4327,3416,4327,3426,4331,3427,4332,3433,4336,3437,4340,3440,4340,3444,4340,3449,4337,3456,4334,3458,4333,3460,4332,3468,4332,3477,4331,3486,4328,3495,4325,3504,4319,3513,4313,3520,4311,3538,4304,3555,4283,3577,4258,3582,4254,L,3711,4254,Q,3715,4252,3724,4242,3734,4230,3734,4221,3731,4206,3731,4194,3719,4179,3720,4161,3720,4155,3718,4153,3713,4148,3712,4145,3708,4142,3706,4139,3699,4127,3698,4126,L,3684,4094,Q,3681,4086,3681,4071,L,3681,4057,Q,3681,4037,3682,4030,3684,4015,3694,4008,3696,4006,3698,4003,3693,4005,3685,4e3,3677,3996,3669,3989,3660,3982,3655,3974,3650,3967,3644,3954,3638,3940,3626,3931,L,3606,3902,Q,3583,3867,3573,3855,3563,3843,3530,3800,3513,3779,3504,3769,3488,3752,3470,3739,3461,3731,3438,3713,3415,3695,3404,3684,3393,3672,3384,3665,3374,3659,3366,3654,L,3329,3628,Q,3313,3614,3292,3604,3263,3589,3258,3585,3257,3585,3257,3585,3240,3573,3231,3567,3214,3555,3199,3549,3179,3541,3160,3531,3141,3520,3124,3513,L,3090,3495,Q,3067,3484,3058,3476,3035,3462,3025,3455,3010,3444,3010,3428,3010,3419,3013,3399,3015,3379,3017,3376,3022,3368,3038,3357,3054,3342,3060,3338,3081,3323,3096,3299,3099,3294,3106,3292,3110,3291,3122,3291,3131,3290,3148,3283,3150,3283,3156,3287,3163,3291,3171,3291,3178,3291,3185,3288,3194,3285,3210,3284,3221,3282,3253,3284,3280,3284,3294,3282,3305,3280,3330,3273,3332,3272,3333,3272,L,3364,3272,Q,3368,3271,3390,3264,3423,3250,3424,3250,3439,3244,3457,3243,3468,3241,3474,3239,3479,3237,3495,3228,3507,3221,3529,3211,3539,3205,3560,3195,3580,3184,3594,3174,3600,3170,3651,3142,3664,3134,3677,3122,3684,3116,3698,3103,3724,3079,3746,3057,3759,3042,3761,3038,3773,3018,3773,3016,3773,3014,3773,3010,3771,3006,3760,2989,3758,2987,3753,2974,3747,2962,3743,2955,3739,2947,3736,2941,3732,2936,3723,2925,3705,2909,3699,2900,3695,2895,3685,2885,3683,2882,3682,2877,3673,2880,3666,2897,3666,2902,3662,2909,3659,2914,3658,2915,3657,2917,3657,2919,L,3655,2919,Q,3652,2919,3645,2913,3638,2907,3637,2906,3634,2904,3630,2904,3626,2903,3625,2902,L,3563,2864,Q,3539,2843,3528,2830,3519,2820,3494,2784,L,3469,2738,Q,3458,2723,3456,2718,3450,2707,3448,2693,3446,2689,3441,2681,3436,2672,3435,2670,3428,2656,3425,2644,3418,2629,3415,2621,L,3406,2595,Q,3403,2583,3398,2575,3391,2564,3386,2557,3379,2547,3376,2534,3373,2518,3368,2508,3358,2484,3340,2461,3322,2437,3304,2425,3276,2406,3263,2399,3246,2388,3190,2359,3137,2331,3090,2288,Q,3076,2282,3042,2257,Z]],label:"Ardal County",shortLabel:"AR",labelPosition:[292.1,297.5],labelAlignment:[CEN,MID],nextId:"IR.CM.BO"},"IR.CM.BO":{outlines:[[M,5275,2126,Q,5264,2135,5253,2149,5240,2165,5237,2168,5202,2198,5197,2205,5179,2235,5162,2251,5162,2251,5161,2253,5159,2255,5155,2261,5150,2270,5150,2271,L,5132,2288,Q,5111,2312,5097,2341,5079,2374,5072,2387,5061,2409,5057,2426,5055,2435,5050,2447,5043,2460,5041,2467,5034,2483,5033,2489,5032,2493,5033,2501,5033,2508,5029,2515,5020,2528,5018,2535,5017,2537,5016,2554,5010,2564,5e3,2566,4987,2566,4978,2568,L,4978,2621,Q,4974,2633,4971,2638,L,4971,2757,Q,4970,2764,4970,2806,4969,2815,4968,2851,4968,2852,4968,2854,4967,2867,4968,2898,4968,2934,4953,2949,4952,2955,4954,2970,4954,2986,4943,2994,4931,3001,4920,3003,4913,3004,4895,3004,4894,3004,4893,3004,4891,3004,4883,3004,4869,3005,4864,3004,4845,2999,4844,2999,4835,2993,4797,2979,4772,2969,4753,2956,4749,2955,4716,2955,L,4682,2955,Q,4676,2955,4671,2962,4666,2968,4663,2970,4634,3019,4633,3020,4618,3046,4607,3076,4604,3084,4590,3097,L,4563,3122,Q,4552,3133,4540,3147,4525,3163,4521,3167,4491,3197,4479,3206,4464,3216,4445,3226,4424,3236,4416,3241,4402,3248,4384,3251,4365,3254,4352,3256,4351,3256,4336,3263,4321,3268,4317,3268,L,4249,3268,Q,4241,3268,4231,3265,4221,3260,4218,3260,4209,3261,4204,3260,4195,3260,4191,3256,4184,3249,4179,3239,4175,3228,4171,3222,4154,3193,4131,3169,4115,3147,4109,3140,4099,3129,4082,3129,L,4064,3130,Q,4061,3130,4055,3134,4047,3139,4044,3141,4028,3146,4022,3149,4012,3154,4009,3163,3990,3175,3977,3188,3966,3200,3954,3219,3933,3245,3930,3249,3929,3251,3929,3280,3929,3292,3931,3308,3932,3321,3932,3343,3931,3362,3933,3374,3935,3384,3944,3401,3950,3412,3962,3422,3979,3438,3983,3443,4e3,3461,4030,3487,4037,3493,4058,3501,4072,3506,4101,3516,L,4124,3526,Q,4136,3531,4142,3536,4146,3539,4151,3541,4167,3544,4181,3550,4192,3555,4250,3580,4373,3633,4386,3639,4396,3644,4422,3655,4448,3666,4463,3676,4468,3679,4490,3694,4509,3707,4526,3717,4559,3735,4584,3755,L,4633,3791,4687,3848,4732,3918,Q,4733,3921,4739,3935,4743,3947,4749,3955,4753,3960,4755,3969,4758,3982,4761,3988,4763,3994,4767,4024,4768,4039,4775,4047,4781,4055,4781,4068,L,4779,4102,Q,4781,4111,4777,4117,4775,4122,4770,4130,L,4770,4158,Q,4769,4160,4769,4171,4768,4174,4758,4185,4753,4190,4754,4202,4754,4216,4751,4220,4734,4249,4724,4280,4717,4297,4697,4339,4719,4342,4736,4348,4755,4356,4776,4356,L,4823,4354,Q,4864,4354,4869,4357,4876,4357,4887,4363,4906,4367,4917,4367,4988,4366,4998,4367,L,4999,4367,Q,5030,4367,5034,4369,L,5043,4380,Q,5053,4385,5056,4388,5068,4402,5072,4407,5081,4420,5081,4433,5081,4437,5081,4442,5080,4444,5080,4448,5080,4450,5082,4453,5083,4456,5085,4458,5090,4466,5092,4469,L,5094,4471,Q,5094,4502,5098,4507,5103,4515,5107,4527,5110,4536,5116,4542,5141,4561,5156,4570,5162,4573,5172,4577,5182,4581,5187,4588,5189,4591,5203,4601,5217,4610,5222,4617,L,5229,4626,Q,5234,4632,5235,4635,5235,4637,5235,4644,5234,4651,5235,4654,5239,4662,5244,4673,5248,4683,5247,4694,5246,4721,5256,4733,5256,4734,5257,4735,5258,4757,5258,4758,5259,4772,5264,4783,5275,4807,5297,4834,5302,4840,5314,4856,5324,4870,5333,4873,L,5370,4883,Q,5374,4884,5382,4892,5390,4899,5393,4899,5394,4899,5422,4898,5444,4896,5461,4898,5488,4899,5501,4892,5517,4884,5524,4884,5536,4884,5546,4884,5552,4883,5571,4873,5564,4816,5564,4778,5564,4755,5570,4719,5575,4685,5575,4666,L,5575,4664,Q,5575,4637,5575,4633,5576,4617,5581,4608,5582,4605,5584,4577,5585,4552,5585,4544,5585,4521,5586,4518,5591,4502,5599,4475,5598,4426,5607,4413,L,5624,4274,Q,5622,4251,5629,4213,5638,4170,5638,4155,5638,4143,5636,4122,5633,4101,5633,4099,5633,4087,5638,4076,5646,4053,5649,4044,5650,4025,5650,3983,5650,3972,5656,3933,5662,3897,5662,3884,5662,3877,5661,3838,5660,3812,5653,3791,5636,3740,5636,3689,5636,3672,5644,3642,5653,3606,5653,3604,5656,3587,5668,3563,5670,3559,5691,3525,5718,3474,5751,3439,5786,3403,5840,3370,5892,3338,5922,3294,5951,3253,5953,3212,L,5952,3208,5952,3190,Q,5953,3173,5955,3150,5956,3126,5943,3063,5930,3e3,5924,2984,5917,2967,5907,2950,5900,2935,5900,2922,5898,2886,5898,2872,5898,2854,5893,2824,5887,2795,5887,2781,5886,2779,5886,2777,5878,2726,5867,2672,5852,2602,5842,2550,5830,2492,5795,2443,5779,2422,5716,2356,5697,2341,5659,2307,5623,2274,5593,2256,5562,2239,5486,2207,5409,2174,5384,2162,5359,2149,5355,2141,5351,2133,5317,2097,Q,5288,2116,5275,2126,Z]],label:"Borujen County",shortLabel:"BO",labelPosition:[502.6,341.4],labelAlignment:[CEN,MID],nextId:"IR.CM.FA"},"IR.CM.FA":{outlines:[[M,3516,2045,Q,3508,2040,3495,2035,3481,2030,3475,2028,3448,2020,3431,2010,3428,2008,3386,1991,3362,1984,3320,1953,3278,1922,3218,1860,3178,1827,3171,1818,3163,1804,3136,1779,3102,1746,3042,1730,3026,1725,3016,1712,3007,1697,2998,1687,2996,1689,2984,1692,2969,1695,2967,1696,2956,1702,2951,1705,2940,1707,2934,1708,2925,1709,2901,1722,2863,1730,2857,1733,2841,1738,2820,1751,2800,1765,2785,1774,2769,1782,2758,1797,2749,1808,2738,1830,2732,1877,2766,1944,2788,1985,2841,2060,2852,2073,2876,2104,2900,2137,2916,2154,2927,2166,2943,2176,2952,2183,2969,2193,3001,2216,3001,2227,L,3001,2227,Q,3012,2228,3023,2239,3030,2245,3042,2257,3076,2282,3090,2288,3137,2331,3190,2359,3246,2388,3263,2399,3276,2406,3304,2425,3322,2437,3340,2461,3358,2484,3368,2508,3373,2518,3376,2534,3379,2547,3386,2557,3391,2564,3398,2575,3403,2583,3406,2595,L,3415,2621,Q,3418,2629,3425,2644,3428,2656,3435,2670,3436,2672,3441,2681,3446,2689,3448,2693,3450,2707,3456,2718,3458,2723,3469,2738,L,3494,2784,Q,3519,2820,3528,2830,3539,2843,3563,2864,L,3625,2902,Q,3626,2903,3630,2904,3634,2904,3637,2906,3638,2907,3645,2913,3652,2919,3655,2919,L,3657,2919,Q,3657,2917,3658,2915,3659,2914,3662,2909,3666,2902,3666,2897,3673,2880,3682,2877,3681,2875,3681,2871,3681,2857,3688,2847,3692,2841,3705,2822,3712,2808,3730,2772,3743,2748,3761,2725,3771,2710,3777,2697,3781,2691,3787,2680,3788,2679,3788,2677,3794,2666,3804,2653,L,3824,2626,Q,3840,2604,3864,2569,3872,2556,3884,2544,3892,2537,3906,2523,3911,2515,3924,2501,3942,2480,3947,2480,3948,2480,3949,2480,3950,2472,3949,2469,3949,2462,3942,2457,3935,2451,3934,2444,3933,2435,3932,2433,3924,2420,3923,2403,3923,2384,3923,2377,3916,2379,3905,2375,3896,2372,3889,2367,3883,2363,3870,2362,3856,2362,3851,2361,3846,2360,3833,2353,3823,2346,3817,2347,3813,2347,3780,2331,3765,2322,3748,2309,3722,2287,3719,2285,3702,2272,3689,2256,3681,2247,3676,2241,3669,2231,3669,2226,3660,2212,3640,2192,3628,2176,3611,2155,3599,2141,3581,2112,3566,2088,3551,2074,Q,3531,2054,3516,2045,Z]],label:"Farsan County",shortLabel:"FA",labelPosition:[334.3,221.9],labelAlignment:[CEN,MID],nextId:"IR.CM.KI"},"IR.CM.KI":{outlines:[[M,4423,2460,Q,4414,2471,4411,2480,4409,2486,4405,2502,4399,2524,4379,2556,4359,2588,4343,2600,4327,2610,4325,2610,4308,2613,4304,2613,4293,2613,4285,2623,4280,2628,4277,2629,4273,2631,4264,2631,L,4261,2631,Q,4249,2630,4197,2630,4193,2630,4188,2625,4182,2619,4179,2618,4153,2615,4151,2615,4133,2617,4126,2612,4102,2595,4097,2593,4096,2592,4068,2583,4047,2576,4039,2569,4026,2559,4011,2552,L,3998,2544,Q,3995,2542,3993,2538,3991,2534,3988,2532,3976,2525,3966,2501,3958,2481,3949,2480,3948,2480,3947,2480,3942,2480,3924,2501,3911,2515,3906,2523,3892,2537,3884,2544,3872,2556,3864,2569,3840,2604,3824,2626,L,3804,2653,Q,3794,2666,3788,2677,3788,2679,3787,2680,3781,2691,3777,2697,3771,2710,3761,2725,3743,2748,3730,2772,3712,2808,3705,2822,3692,2841,3688,2847,3681,2857,3681,2871,3681,2875,3682,2877,3683,2882,3685,2885,3695,2895,3699,2900,3705,2909,3723,2925,3732,2936,3736,2941,3739,2947,3743,2955,3747,2962,3753,2974,3758,2987,3760,2989,3771,3006,3773,3010,3773,3014,3773,3016,3773,3018,3761,3038,3759,3042,3746,3057,3724,3079,3698,3103,3684,3116,3677,3122,3664,3134,3651,3142,3600,3170,3594,3174,3580,3184,3560,3195,3539,3205,3529,3211,3507,3221,3495,3228,3479,3237,3474,3239,3468,3241,3457,3243,3439,3244,3424,3250,3423,3250,3390,3264,3368,3271,3364,3272,L,3333,3272,Q,3332,3272,3330,3273,3305,3280,3294,3282,3280,3284,3253,3284,3221,3282,3210,3284,3194,3285,3185,3288,3178,3291,3171,3291,3163,3291,3156,3287,3150,3283,3148,3283,3131,3290,3122,3291,3110,3291,3106,3292,3099,3294,3096,3299,3081,3323,3060,3338,3054,3342,3038,3357,3022,3368,3017,3376,3015,3379,3013,3399,3010,3419,3010,3428,3010,3444,3025,3455,3035,3462,3058,3476,3067,3484,3090,3495,L,3124,3513,Q,3141,3520,3160,3531,3179,3541,3199,3549,3214,3555,3231,3567,3240,3573,3257,3585,3257,3585,3258,3585,3263,3589,3292,3604,3313,3614,3329,3628,L,3366,3654,Q,3374,3659,3384,3665,3393,3672,3404,3684,3415,3695,3438,3713,3461,3731,3470,3739,3488,3752,3504,3769,3513,3779,3530,3800,3563,3843,3573,3855,3583,3867,3606,3902,L,3626,3931,Q,3638,3940,3644,3954,3650,3967,3655,3974,3660,3982,3669,3989,3677,3996,3685,4e3,3693,4005,3698,4003,3700,4002,3700,4e3,3705,3991,3707,3989,3712,3979,3724,3972,3756,3950,3770,3947,3775,3946,3818,3946,3840,3946,3848,3947,L,3855,3947,3865,3953,Q,3874,3959,3891,3971,3904,3981,3929,3989,3942,3994,3962,4e3,3966,4001,3973,4002,3979,4003,3983,4006,3992,4015,3998,4015,L,4046,4015,Q,4053,4015,4062,4020,4073,4025,4080,4026,4088,4027,4096,4033,4105,4040,4109,4040,L,4135,4045,Q,4138,4045,4143,4049,4156,4061,4157,4062,4165,4069,4187,4088,4191,4092,4213,4118,4234,4144,4238,4148,4240,4150,4250,4158,4259,4165,4266,4165,4276,4163,4289,4170,4296,4173,4307,4179,4310,4179,4338,4191,4358,4199,4369,4201,4370,4203,4404,4226,L,4458,4255,Q,4473,4262,4509,4280,4552,4295,4562,4303,4575,4314,4584,4315,4592,4315,4603,4320,4614,4323,4630,4325,4647,4327,4657,4328,4661,4329,4668,4332,4675,4335,4680,4336,4689,4337,4697,4339,4717,4297,4724,4280,4734,4249,4751,4220,4754,4216,4754,4202,4753,4190,4758,4185,4768,4174,4769,4171,4769,4160,4770,4158,L,4770,4130,Q,4775,4122,4777,4117,4781,4111,4779,4102,L,4781,4068,Q,4781,4055,4775,4047,4768,4039,4767,4024,4763,3994,4761,3988,4758,3982,4755,3969,4753,3960,4749,3955,4743,3947,4739,3935,4733,3921,4732,3918,L,4687,3848,4633,3791,4584,3755,Q,4559,3735,4526,3717,4509,3707,4490,3694,4468,3679,4463,3676,4448,3666,4422,3655,4396,3644,4386,3639,4373,3633,4250,3580,4192,3555,4181,3550,4167,3544,4151,3541,4146,3539,4142,3536,4136,3531,4124,3526,L,4101,3516,Q,4072,3506,4058,3501,4037,3493,4030,3487,4e3,3461,3983,3443,3979,3438,3962,3422,3950,3412,3944,3401,3935,3384,3933,3374,3931,3362,3932,3343,3932,3321,3931,3308,3929,3292,3929,3280,3929,3251,3930,3249,3933,3245,3954,3219,3966,3200,3977,3188,3990,3175,4009,3163,4012,3154,4022,3149,4028,3146,4044,3141,4047,3139,4055,3134,4061,3130,4064,3130,L,4082,3129,Q,4099,3129,4109,3140,4115,3147,4131,3169,4154,3193,4171,3222,4175,3228,4179,3239,4184,3249,4191,3256,4195,3260,4204,3260,4209,3261,4218,3260,4221,3260,4231,3265,4241,3268,4249,3268,L,4317,3268,Q,4321,3268,4336,3263,4351,3256,4352,3256,4365,3254,4384,3251,4402,3248,4416,3241,4424,3236,4445,3226,4464,3216,4479,3206,4491,3197,4521,3167,4525,3163,4540,3147,4552,3133,4563,3122,L,4590,3097,Q,4604,3084,4607,3076,4618,3046,4633,3020,4634,3019,4663,2970,4666,2968,4671,2962,4676,2955,4682,2955,L,4716,2955,Q,4749,2955,4753,2956,4772,2969,4797,2979,4835,2993,4844,2999,4845,2999,4864,3004,4869,3005,4883,3004,4891,3004,4893,3004,L,4894,3004,Q,4895,3003,4895,3004,4913,3004,4920,3003,4931,3001,4943,2994,4954,2986,4954,2970,4952,2955,4953,2949,4968,2934,4968,2898,4967,2867,4968,2854,4968,2852,4968,2851,4969,2815,4970,2806,4970,2764,4971,2757,L,4971,2638,Q,4974,2633,4978,2621,L,4978,2566,Q,4954,2566,4949,2563,4946,2560,4941,2554,4936,2546,4935,2545,4907,2518,4903,2509,4893,2491,4890,2486,4887,2481,4876,2469,4864,2455,4859,2450,4850,2440,4842,2435,4836,2431,4823,2419,4811,2408,4806,2405,4804,2404,4785,2389,4781,2386,4766,2386,4750,2386,4746,2388,4737,2396,4720,2408,4703,2421,4696,2426,4687,2432,4676,2432,4666,2432,4659,2426,4646,2416,4638,2411,L,4615,2395,Q,4608,2389,4593,2385,4586,2383,4572,2375,4559,2367,4552,2365,L,4528,2356,Q,4513,2346,4510,2346,4506,2346,4489,2357,4472,2367,4472,2369,4448,2414,4447,2416,4445,2420,4436,2435,Q,4433,2446,4423,2460,Z]],label:"Kiaar County",shortLabel:"KI",labelPosition:[360.2,345.4],labelAlignment:[CEN,MID],nextId:"IR.CM.KU"},"IR.CM.KU":{outlines:[[M,2536,916,L,2473,872,Q,2462,863,2444,846,2429,833,2416,824,2336,771,2301,728,2271,701,2260,689,2248,678,2239,671,2229,665,2222,660,2206,648,2202,642,2198,637,2193,633,2189,629,2177,618,2162,604,2155,598,2142,586,2133,572,2122,557,2093,536,2064,516,2048,509,2032,502,2009,501,1987,500,1978,500,1970,500,1960,501,1949,502,1944,504,1939,506,1931,506,1922,506,1901,507,1880,509,1874,512,1849,521,1833,526,1805,536,1787,548,1769,557,1762,562,1749,569,1741,577,1738,580,1715,589,1692,597,1688,601,1680,606,1669,609,1656,611,1651,613,1641,615,1630,620,1624,623,1610,623,1599,623,1580,616,1561,609,1554,609,1547,610,1528,603,1507,594,1501,592,1484,585,1476,580,1462,566,1453,561,1419,539,1413,534,1368,499,1326,472,1302,458,1289,444,1281,437,1269,431,1256,425,1251,420,L,1090,314,Q,1024,273,997,255,989,250,976,243,963,236,944,226,926,214,901,197,876,178,875,178,843,154,837,151,L,788,122,Q,778,115,766,102,755,88,747,76,742,64,737,56,727,40,717,40,710,40,686,52,661,66,656,69,L,625,83,Q,622,84,611,90,600,95,584,105,567,116,557,120,547,123,516,137,487,154,470,165,442,182,415,196,411,198,407,200,364,226,327,250,277,282,239,307,220,320,182,337,141,355,128,361,118,366,105,374,L,75,391,Q,61,400,54,402,L,42,406,Q,39,408,39,414,39,434,99,519,102,536,122,564,133,580,155,611,161,620,170,637,178,650,187,656,197,664,206,674,229,700,235,706,253,725,277,744,292,755,323,778,344,794,361,816,365,821,383,833,402,844,405,847,415,865,441,887,487,926,490,929,501,940,540,971,579,1001,598,1020,627,1049,693,1102,727,1133,782,1188,783,1188,783,1189,876,1272,905,1295,935,1318,947,1336,951,1341,968,1354,988,1370,995,1380,1002,1390,1016,1404,1030,1418,1051,1434,1072,1449,1124,1509,1131,1517,1148,1531,1165,1545,1169,1549,1174,1555,1186,1567,1189,1569,1196,1576,1204,1584,1205,1586,1217,1600,1240,1622,1266,1645,1278,1658,1294,1675,1319,1693,1327,1700,1342,1718,L,1368,1740,Q,1387,1764,1413,1789,1435,1809,1443,1823,1452,1837,1459,1872,1467,1905,1476,1918,1481,1951,1470,1972,1460,1994,1464,2012,1462,2019,1457,2029,1453,2039,1453,2046,1455,2060,1451,2071,1447,2084,1447,2092,1447,2098,1450,2106,1452,2114,1452,2120,1452,2145,1452,2152,1453,2164,1457,2181,1458,2184,1458,2195,1460,2204,1462,2210,1466,2227,1479,2246,1499,2305,1508,2329,1523,2367,1525,2370,1531,2385,1545,2411,1549,2421,1569,2459,1571,2462,1604,2506,L,1636,2542,Q,1641,2549,1651,2558,1660,2566,1665,2576,1712,2631,1738,2663,1764,2694,1778,2707,1793,2720,1801,2728,1810,2737,1823,2749,1835,2761,1842,2766,1863,2785,1874,2798,1885,2810,1901,2828,1917,2846,1922,2849,1927,2851,1941,2868,1953,2884,1960,2887,1970,2893,1975,2899,1978,2904,1989,2919,2028,2950,2069,2984,L,2143,2924,Q,2181,2891,2222,2866,2244,2851,2257,2843,2278,2830,2303,2819,2327,2808,2381,2777,2398,2768,2427,2750,2445,2738,2479,2724,2548,2694,2592,2680,2623,2669,2699,2641,2703,2640,2764,2637,2821,2634,2829,2634,2836,2634,2850,2642,2864,2650,2877,2650,2884,2650,2891,2647,2895,2645,2906,2641,2923,2633,2928,2630,2938,2623,2938,2608,2938,2588,2938,2583,2938,2568,2932,2547,2926,2526,2926,2513,2926,2506,2922,2498,2917,2489,2916,2479,2914,2464,2914,2434,2914,2425,2916,2423,2917,2420,2925,2408,2927,2404,2927,2397,2927,2387,2928,2385,2928,2375,2928,2372,2928,2366,2931,2358,2938,2338,2940,2332,2941,2331,2942,2330,2950,2319,2955,2305,2957,2301,2970,2278,2975,2267,2987,2249,2991,2242,2998,2237,3001,2235,3001,2227,L,3001,2227,Q,3001,2216,2969,2193,2952,2183,2943,2176,2927,2166,2916,2154,2900,2137,2876,2104,2852,2073,2841,2060,2788,1985,2766,1944,2732,1877,2738,1830,2749,1808,2758,1797,2769,1782,2785,1774,2800,1765,2820,1751,2841,1738,2857,1733,2863,1730,2901,1722,2925,1709,2934,1708,2940,1707,2951,1705,2956,1702,2967,1696,2969,1695,2984,1692,2996,1689,2998,1687,L,2998,1686,Q,2998,1682,2991,1669,2984,1656,2979,1651,L,2959,1616,Q,2946,1593,2938,1581,2925,1559,2914,1552,2844,1514,2800,1477,2786,1465,2772,1450,2755,1431,2752,1421,2747,1401,2739,1386,2735,1379,2735,1357,2735,1345,2740,1339,2751,1329,2756,1322,L,2762,1305,2772,1290,Q,2781,1281,2787,1262,2794,1238,2797,1233,2800,1226,2800,1216,2800,1203,2800,1197,L,2800,1114,Q,2801,1105,2798,1100,2787,1078,2787,1076,L,2787,1049,Q,2780,1037,2778,1031,2776,1027,2774,1022,2773,1015,2772,1012,2764,1e3,2763,995,2762,983,2759,976,2750,957,2740,942,2737,937,2736,932,2735,926,2734,924,2730,916,2728,909,2723,912,2720,915,L,2710,923,2694,928,Q,2692,928,2682,935,2676,938,2669,938,2634,938,2619,938,2605,937,2602,938,2599,939,2588,940,2576,942,2563,933,2550,925,2545,922,Q,2540,919,2536,916,Z]],label:"Kuhrang County",shortLabel:"KU",labelPosition:[208,151.2],labelAlignment:[CEN,MID],nextId:"IR.CM.LO"},"IR.CM.LO":{outlines:[[M,4776,4356,Q,4755,4356,4736,4348,4719,4342,4697,4339,4689,4337,4680,4336,4675,4335,4668,4332,4661,4329,4657,4328,4647,4327,4630,4325,4614,4323,4603,4320,4592,4315,4584,4315,4575,4314,4562,4303,4552,4295,4509,4280,4473,4262,4458,4255,L,4404,4226,Q,4370,4203,4369,4201,4358,4199,4338,4191,4310,4179,4307,4179,4296,4173,4289,4170,4276,4163,4266,4165,4259,4165,4250,4158,4240,4150,4238,4148,4234,4144,4213,4118,4191,4092,4187,4088,4165,4069,4157,4062,4156,4061,4143,4049,4138,4045,4135,4045,L,4109,4040,Q,4105,4040,4096,4033,4088,4027,4080,4026,4073,4025,4062,4020,4053,4015,4046,4015,L,3998,4015,Q,3992,4015,3983,4006,3979,4003,3973,4002,3966,4001,3962,4e3,3942,3994,3929,3989,3904,3981,3891,3971,3874,3959,3865,3953,L,3855,3947,3848,3947,Q,3840,3946,3818,3946,3775,3946,3770,3947,3756,3950,3724,3972,3712,3979,3707,3989,3705,3991,3700,4e3,3700,4002,3698,4003,3696,4006,3694,4008,3684,4015,3682,4030,3681,4037,3681,4057,L,3681,4071,Q,3681,4086,3684,4094,L,3698,4126,Q,3699,4127,3706,4139,3708,4142,3712,4145,3713,4148,3718,4153,3720,4155,3720,4161,3719,4179,3731,4194,3731,4206,3734,4221,3734,4230,3724,4242,3715,4252,3711,4254,L,3582,4254,Q,3577,4258,3555,4283,3538,4304,3520,4311,3513,4313,3504,4319,3495,4325,3486,4328,3477,4331,3468,4332,3460,4332,3458,4333,3456,4334,3449,4337,3444,4340,3440,4340,3437,4340,3433,4336,3427,4332,3426,4331,3416,4327,3411,4327,3406,4327,3402,4327,3396,4327,3388,4321,3376,4313,3373,4311,3333,4291,3299,4277,3280,4269,3268,4267,3254,4264,3248,4261,3234,4252,3233,4252,3207,4253,3199,4250,3192,4248,3182,4243,3177,4241,3166,4241,3154,4241,3149,4244,3139,4249,3127,4252,3112,4252,3098,4252,3070,4252,3067,4255,3061,4261,3049,4263,3031,4267,3030,4267,3026,4268,3011,4276,2997,4283,2992,4283,L,2984,4282,2998,4305,Q,3002,4311,3013,4327,3015,4332,3028,4351,3035,4361,3042,4375,3047,4385,3060,4398,3067,4405,3067,4421,3067,4434,3065,4436,3062,4440,3042,4462,3040,4465,3014,4501,3006,4511,2988,4536,2972,4557,2958,4569,L,2958,4569,2958,4569,Q,2885,4661,2881,4669,2873,4683,2846,4710,2834,4725,2823,4742,2815,4752,2801,4769,2786,4786,2770,4807,2754,4827,2737,4852,2720,4877,2715,4886,2708,4894,2702,4903,2696,4910,2692,4915,2690,4920,2685,4928,2680,4935,2662,4961,2646,4985,2642,4998,2641,5e3,2641,5002,L,2638,5008,Q,2648,5012,2727,5065,2730,5067,2778,5094,2796,5109,2802,5113,2803,5113,2825,5126,2898,5170,2923,5188,2935,5195,2959,5208,2994,5227,3004,5227,L,3068,5223,Q,3081,5214,3093,5213,3102,5211,3107,5208,3115,5203,3123,5198,3129,5194,3144,5187,3158,5181,3160,5180,3175,5174,3194,5163,3217,5150,3229,5142,3245,5132,3255,5130,3260,5128,3270,5126,L,3316,5103,Q,3320,5097,3326,5095,3330,5094,3352,5089,3359,5086,3378,5075,L,3450,5050,Q,3458,5048,3484,5048,3502,5047,3512,5041,3521,5036,3535,5034,3546,5033,3582,5033,3635,5033,3644,5037,L,3667,5048,Q,3674,5051,3689,5060,3731,5076,3741,5078,3748,5080,3752,5082,3754,5083,3766,5092,3770,5094,3776,5101,3783,5108,3788,5112,3824,5135,3850,5179,3855,5187,3875,5221,L,3981,5353,Q,3988,5367,4019,5396,4035,5411,4057,5435,4078,5459,4096,5472,4114,5486,4152,5508,4156,5510,4168,5518,4177,5523,4182,5525,4191,5528,4200,5530,4206,5532,4213,5537,4215,5539,4288,5539,4290,5539,4348,5539,4359,5540,4368,5535,4373,5532,4384,5526,L,4432,5527,Q,4450,5527,4457,5521,4464,5515,4482,5515,4489,5515,4495,5518,4501,5523,4510,5524,4523,5525,4530,5528,4537,5531,4550,5541,4557,5545,4567,5551,4576,5556,4581,5565,4583,5568,4607,5600,L,4629,5627,Q,4632,5633,4647,5669,4661,5698,4675,5740,4675,5742,4676,5743,4677,5751,4681,5764,4686,5781,4689,5785,4700,5801,4711,5826,4730,5873,4748,5898,4751,5902,4757,5917,4763,5933,4767,5941,4777,5960,4796,5982,4803,5990,4816,6015,4830,6037,4843,6047,4844,6049,4847,6051,4849,6053,4854,6056,4859,6060,4866,6072,4883,6090,4895,6096,4899,6099,4907,6106,4915,6112,4924,6112,4934,6111,4958,6113,4990,6113,4997,6108,5014,6095,5039,6087,5048,6084,5072,6065,5073,6064,5090,6053,5097,6048,5101,6044,5103,6041,5104,6038,5118,6026,5121,6022,5126,6011,5127,6011,L,5155,5982,Q,5162,5967,5177,5955,5181,5951,5213,5912,5235,5885,5254,5875,5258,5873,5275,5861,5290,5850,5301,5846,5305,5845,5312,5844,5319,5843,5324,5837,5326,5834,5334,5832,5341,5830,5347,5830,5354,5830,5358,5823,5362,5817,5367,5816,L,5396,5816,Q,5399,5816,5406,5810,5412,5804,5415,5804,5442,5802,5452,5803,5457,5803,5459,5804,5471,5804,5506,5805,5523,5806,5529,5811,5534,5816,5547,5816,L,5564,5815,Q,5591,5815,5595,5818,5599,5820,5607,5825,5616,5830,5622,5830,L,5660,5831,Q,5664,5830,5668,5833,5670,5835,5673,5839,5675,5840,5681,5840,5687,5840,5689,5840,L,5711,5840,5711,5810,Q,5706,5806,5703,5799,5700,5793,5701,5788,5699,5774,5699,5765,L,5699,5762,Q,5698,5738,5691,5700,5682,5655,5679,5632,5677,5623,5676,5601,5675,5573,5674,5566,5674,5564,5666,5537,5661,5519,5662,5506,5662,5505,5663,5503,5664,5484,5657,5457,5648,5423,5648,5410,5648,5380,5641,5360,5639,5354,5638,5333,5636,5312,5634,5307,5629,5292,5627,5284,5623,5269,5624,5261,5624,5255,5621,5230,5618,5203,5617,5199,5608,5174,5608,5139,5603,5106,5602,5090,5602,5088,5602,5085,5600,5049,5583,4953,5576,4909,5571,4873,5552,4883,5546,4884,5536,4884,5524,4884,5517,4884,5501,4892,5488,4899,5461,4898,5444,4896,5422,4898,5394,4899,5393,4899,5390,4899,5382,4892,5374,4884,5370,4883,L,5333,4873,Q,5324,4870,5314,4856,5302,4840,5297,4834,5275,4807,5264,4783,5259,4772,5258,4758,5258,4757,5257,4735,5256,4734,5256,4733,5246,4721,5247,4694,5248,4683,5244,4673,5239,4662,5235,4654,5234,4651,5235,4644,5235,4637,5235,4635,5234,4632,5229,4626,L,5222,4617,Q,5217,4610,5203,4601,5189,4591,5187,4588,5182,4581,5172,4577,5162,4573,5156,4570,5141,4561,5116,4542,5110,4536,5107,4527,5103,4515,5098,4507,5094,4502,5094,4471,L,5092,4469,Q,5090,4466,5085,4458,5083,4456,5082,4453,5080,4450,5080,4448,5080,4444,5081,4442,5081,4437,5081,4433,5081,4420,5072,4407,5068,4402,5056,4388,5053,4385,5043,4380,L,5034,4369,Q,5030,4367,4999,4367,L,4998,4367,Q,4988,4366,4917,4367,4906,4367,4887,4363,4876,4357,4869,4357,4864,4354,4823,4354,Z]],label:"Lordegan County",shortLabel:"LO",labelPosition:[428.6,486.1],labelAlignment:[CEN,MID],nextId:"IR.CM.SK"},"IR.CM.SK":{outlines:[[M,4099,1446,Q,4093,1448,4079,1452,4065,1455,4056,1459,4041,1465,4015,1472,3984,1480,3976,1484,3951,1489,3942,1492,3938,1493,3926,1499,3916,1505,3909,1505,3891,1504,3851,1506,L,3816,1508,Q,3804,1508,3802,1507,3798,1504,3788,1498,3776,1491,3761,1485,3722,1468,3706,1453,3693,1441,3656,1412,3631,1393,3615,1373,3589,1336,3577,1336,3571,1336,3562,1344,3555,1352,3552,1357,3546,1367,3540,1371,3533,1377,3526,1382,L,3481,1419,Q,3475,1419,3471,1411,3468,1405,3468,1402,3468,1393,3468,1392,3466,1388,3461,1383,3445,1370,3430,1352,3405,1324,3395,1314,3365,1290,3357,1283,3330,1265,3316,1254,3303,1244,3293,1239,3281,1234,3272,1229,3238,1210,3222,1203,3182,1186,3170,1180,3117,1155,3055,1116,2986,1071,2958,1042,2936,1019,2890,938,2853,874,2827,851,2823,853,2819,857,2793,874,2770,886,2747,896,2728,909,2730,916,2734,924,2735,926,2736,932,2737,937,2740,942,2750,957,2759,976,2762,983,2763,995,2764,1e3,2772,1012,2773,1015,2774,1022,2776,1027,2778,1031,2780,1037,2787,1049,L,2787,1076,Q,2787,1078,2798,1100,2801,1105,2800,1114,L,2800,1197,Q,2800,1203,2800,1216,2800,1226,2797,1233,2794,1238,2787,1262,2781,1281,2772,1290,L,2762,1305,2756,1322,Q,2751,1329,2740,1339,2735,1345,2735,1357,2735,1379,2739,1386,2747,1401,2752,1421,2755,1431,2772,1450,2786,1465,2800,1477,2844,1514,2914,1552,2925,1559,2938,1581,2946,1593,2959,1616,L,2979,1651,Q,2984,1656,2991,1669,2998,1682,2998,1686,L,2998,1687,Q,3007,1697,3016,1712,3026,1725,3042,1730,3102,1746,3136,1779,3163,1804,3171,1818,3178,1827,3218,1860,3278,1922,3320,1953,3362,1984,3386,1991,3428,2008,3431,2010,3448,2020,3475,2028,3481,2030,3495,2035,3508,2040,3516,2045,3531,2054,3551,2074,3566,2088,3581,2112,3599,2141,3611,2155,3628,2176,3640,2192,3660,2212,3669,2226,3669,2231,3676,2241,3681,2247,3689,2256,3702,2272,3719,2285,3722,2287,3748,2309,3765,2322,3780,2331,3813,2347,3817,2347,3823,2346,3833,2353,3846,2360,3851,2361,3856,2362,3870,2362,3883,2363,3889,2367,3896,2372,3905,2375,3916,2379,3923,2377,3923,2384,3923,2403,3924,2420,3932,2433,3933,2435,3934,2444,3935,2451,3942,2457,3949,2462,3949,2469,3950,2472,3949,2480,3958,2481,3966,2501,3976,2525,3988,2532,3991,2534,3993,2538,3995,2542,3998,2544,L,4011,2552,Q,4026,2559,4039,2569,4047,2576,4068,2583,4096,2592,4097,2593,4102,2595,4126,2612,4133,2617,4151,2615,4153,2615,4179,2618,4182,2619,4188,2625,4193,2630,4197,2630,4249,2630,4261,2631,L,4264,2631,Q,4273,2631,4277,2629,4280,2628,4285,2623,4293,2613,4304,2613,4308,2613,4325,2610,4327,2610,4343,2600,4359,2588,4379,2556,4399,2524,4405,2502,4409,2486,4411,2480,4414,2471,4423,2460,4433,2446,4436,2435,4445,2420,4447,2416,4448,2414,4472,2369,4472,2367,4489,2357,4506,2346,4510,2346,4513,2346,4528,2356,L,4552,2365,Q,4559,2367,4572,2375,4586,2383,4593,2385,4608,2389,4615,2395,L,4638,2411,Q,4646,2416,4659,2426,4666,2432,4676,2432,4687,2432,4696,2426,4703,2421,4720,2408,4737,2396,4746,2388,4750,2386,4766,2386,4781,2386,4785,2389,4804,2404,4806,2405,4811,2408,4823,2419,4836,2431,4842,2435,4850,2440,4859,2450,4864,2455,4876,2469,4887,2481,4890,2486,4893,2491,4903,2509,4907,2518,4935,2545,4936,2546,4941,2554,4946,2560,4949,2563,4954,2566,4978,2566,L,4978,2568,Q,4987,2566,5e3,2566,5010,2564,5016,2554,5017,2537,5018,2535,5020,2528,5029,2515,5033,2508,5033,2501,5032,2493,5033,2489,5034,2483,5041,2467,5043,2460,5050,2447,5055,2435,5057,2426,5061,2409,5072,2387,5079,2374,5097,2341,5111,2312,5132,2288,L,5150,2271,Q,5150,2270,5155,2261,5159,2255,5161,2253,5162,2251,5162,2251,5179,2235,5197,2205,5202,2198,5237,2168,5240,2165,5253,2149,5264,2135,5275,2126,5288,2116,5317,2097,5317,2096,5316,2095,5280,2057,5270,2041,5260,2026,5251,2002,5233,1976,5216,1927,5196,1867,5188,1848,5149,1758,5070,1736,5012,1719,4983,1711,4932,1696,4893,1688,4845,1677,4808,1667,4798,1665,4733,1645,4689,1636,4640,1586,4633,1590,4598,1613,4567,1635,4545,1644,4526,1657,4518,1658,4513,1659,4505,1662,4495,1666,4491,1668,4479,1670,4459,1671,4437,1670,4427,1670,4380,1670,4373,1668,4353,1660,4309,1647,4299,1644,4288,1633,4271,1617,4269,1616,4255,1605,4235,1582,4230,1576,4221,1563,4214,1552,4207,1544,4193,1530,4189,1522,4184,1508,4176,1496,4153,1462,4144,1448,4139,1440,4134,1433,4133,1436,4126,1438,4119,1439,4118,1440,Q,4109,1441,4099,1446,Z]],label:"Shahrekord County",shortLabel:"SK",labelPosition:[407.9,198.8],labelAlignment:[CEN,MID],nextId:"IR.CM.BE"},"IR.CM.BE":{outlines:[[M,3817,344,Q,3805,347,3797,349,3748,361,3677,381,3601,403,3580,409,3569,412,3550,411,3544,410,3534,413,3523,418,3519,419,3507,421,3481,422,3461,423,3442,429,L,3283,429,Q,3272,431,3229,433,3204,434,3187,444,3170,452,3146,470,3122,488,3113,498,3087,527,3059,577,3031,631,3016,659,3015,662,3013,664,3004,679,2985,703,2956,739,2950,747,2948,751,2940,758,2933,763,2929,768,L,2909,792,Q,2904,798,2866,823,2859,828,2827,851,2853,874,2890,938,2936,1019,2958,1042,2986,1071,3055,1116,3117,1155,3170,1180,3182,1186,3222,1203,3238,1210,3272,1229,3281,1234,3293,1239,3303,1244,3316,1254,3330,1265,3357,1283,3365,1290,3395,1314,3405,1324,3430,1352,3445,1370,3461,1383,3466,1388,3468,1392,3468,1393,3468,1402,3468,1405,3471,1411,3475,1419,3481,1419,L,3526,1382,Q,3533,1377,3540,1371,3546,1367,3552,1357,3555,1352,3562,1344,3571,1336,3577,1336,3589,1336,3615,1373,3631,1393,3656,1412,3693,1441,3706,1453,3722,1468,3761,1485,3776,1491,3788,1498,3798,1504,3802,1507,3804,1508,3816,1508,3816,1506,3817,1507,3817,1508,3818,1508,L,3851,1506,Q,3891,1504,3909,1505,3916,1505,3926,1499,3938,1493,3942,1492,3951,1489,3976,1484,3984,1480,4015,1472,4041,1465,4056,1459,4065,1455,4079,1452,4093,1448,4099,1446,4109,1441,4118,1440,4119,1439,4126,1438,4133,1436,4134,1433,4125,1417,4119,1406,4108,1388,4102,1378,4089,1359,4080,1351,4076,1348,4070,1340,4065,1332,4059,1328,4050,1321,4048,1315,4047,1312,4047,1302,4047,1288,4069,1266,4073,1263,4099,1242,4101,1239,4107,1238,4114,1238,4117,1237,4126,1230,4132,1230,4167,1233,4163,1219,4165,1213,4159,1209,4153,1206,4153,1203,4153,1199,4151,1191,4145,1184,4144,1181,L,4124,1160,4099,1144,Q,4070,1132,4053,1124,4021,1108,4012,1089,4010,1084,4008,1057,4006,1032,4006,1022,4006,1019,4013,1006,4022,993,4022,990,4021,985,4024,975,4026,966,4029,961,4033,955,4033,943,4032,930,4032,925,4037,918,4041,909,4044,903,4044,897,4044,894,4041,882,4037,870,4037,868,4037,851,4030,845,4029,843,4010,828,4006,825,3998,821,3990,818,3983,812,3978,808,3960,801,3936,791,3929,788,3908,777,3899,766,3892,755,3895,742,L,3895,741,Q,3894,734,3884,706,3881,698,3881,686,3882,672,3882,663,L,3884,586,Q,3883,563,3884,554,3884,540,3879,532,3872,520,3869,504,3859,483,3858,479,3857,466,3850,451,3844,436,3842,432,3834,416,3833,410,3831,403,3831,390,3831,389,3830,387,3828,379,3821,365,Q,3816,354,3817,344,Z]],label:"Ben County",shortLabel:"BE",labelPosition:[349.5,87],labelAlignment:[CEN,MID],nextId:"IR.CM.SA"},"IR.CM.SA":{outlines:[[M,4409,655,Q,4351,544,4313,445,4251,343,4237,322,4202,273,4187,262,4168,249,4126,249,4114,249,4073,267,4032,284,4029,286,3981,302,3908,321,3850,335,3817,344,3816,354,3821,365,3828,379,3830,387,3831,389,3831,390,3831,403,3833,410,3834,416,3842,432,3844,436,3850,451,3857,466,3858,479,3859,483,3869,504,3872,520,3879,532,3884,540,3884,554,3883,563,3884,586,L,3882,663,Q,3882,672,3881,686,3881,698,3884,706,3894,734,3895,741,L,3895,742,Q,3892,755,3899,766,3908,777,3929,788,3936,791,3960,801,3978,808,3983,812,3990,818,3998,821,4006,825,4010,828,4029,843,4030,845,4037,851,4037,868,4037,870,4041,882,4044,894,4044,897,4044,903,4041,909,4037,918,4032,925,4032,930,4033,943,4033,955,4029,961,4026,966,4024,975,4021,985,4022,990,4022,993,4013,1006,4006,1019,4006,1022,4006,1032,4008,1057,4010,1084,4012,1089,4021,1108,4053,1124,4070,1132,4099,1144,L,4124,1160,4144,1181,Q,4145,1184,4151,1191,4153,1199,4153,1203,4153,1206,4159,1209,4165,1213,4163,1219,4167,1233,4132,1230,4126,1230,4117,1237,4114,1238,4107,1238,4101,1239,4099,1242,4073,1263,4069,1266,4047,1288,4047,1302,4047,1312,4048,1315,4050,1321,4059,1328,4065,1332,4070,1340,4076,1348,4080,1351,4089,1359,4102,1378,4108,1388,4119,1406,4125,1417,4134,1433,4139,1440,4144,1448,4153,1462,4176,1496,4184,1508,4189,1522,4193,1530,4207,1544,4214,1552,4221,1563,4230,1576,4235,1582,4255,1605,4269,1616,4271,1617,4288,1633,4299,1644,4309,1647,4353,1660,4373,1668,4380,1670,4427,1670,4437,1670,4459,1671,4479,1670,4491,1668,4495,1666,4505,1662,4513,1659,4518,1658,4526,1657,4545,1644,4567,1635,4598,1613,4633,1590,4640,1586,4636,1582,4632,1578,4589,1533,4565,1487,4525,1411,4530,1266,4530,1265,4530,1264,L,4528,1237,Q,4534,1213,4545,1179,4561,1131,4564,1119,4565,1114,4575,1095,4586,1075,4588,1068,4590,1060,4590,1038,L,4590,1011,Q,4590,957,4573,927,4545,889,4521,850,4520,848,4519,846,L,4458,762,Q,4426,690,4409,655,Z]],label:"Saman County",shortLabel:"SA",labelPosition:[428.4,96],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"chaharmahaalandbakhtiari",type:"maps"}}})});