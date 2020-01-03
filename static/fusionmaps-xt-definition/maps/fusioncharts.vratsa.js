(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=630)})({630:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(631);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},631:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright InfoSoft Global Pvt. Ltd.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author InfoSoft Global Pvt. Ltd.
 * @meta package_map_pack
 * @id fusionmaps.Vratsa.18.08-16-2012 05:40:44
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Vratsa",revision:18,standaloneInit:true,baseWidth:567,baseHeight:594,baseScaleFactor:10,entities:{10:{outlines:[[M,1908,1224,Q,1894,1213,1892,1213,1857,1216,1841,1208,1835,1180,1815,1166,1811,1125,1803,1119,1782,1100,1769,1094,1749,1083,1698,1087,L,1387,1087,Q,1386,1387,1384,1423,1390,1456,1360,1482,1315,1522,1310,1528,1296,1548,1210,1642,L,1208,1805,Q,1208,1835,1368,1911,1403,1908,1428,1925,1443,1935,1467,1959,1482,1970,1523,1975,1543,1987,1577,2010,1594,2013,1624,2028,1668,2048,1672,2052,1695,2069,1721,2077,1734,2090,1734,2137,1735,2169,1730,2180,1751,2201,1793,2241,1792,2251,1795,2248,1835,2244,1830,2224,L,1881,2224,1881,2203,1913,2203,Q,1920,2216,1934,2227,1931,2243,1943,2259,L,1990,2259,1996,2232,2146,2232,Q,2172,2258,2174,2265,2175,2270,2175,2311,L,2175,2355,Q,2173,2374,2164,2376,2157,2379,2157,2390,2157,2407,2158,2408,2159,2410,2180,2411,2193,2411,2215,2433,L,2282,2388,Q,2352,2343,2383,2336,2398,2314,2398,2252,2395,2185,2396,2160,2399,2103,2439,2094,2461,2087,2503,2056,2504,2010,2505,2006,2526,1992,2527,1967,L,2528,1916,Q,2551,1883,2550,1870,2551,1867,2550,1864,2547,1852,2533,1842,2511,1826,2507,1816,2476,1810,2465,1805,2456,1801,2456,1761,2456,1714,2480,1715,2479,1694,2480,1684,2480,1668,2495,1668,L,2495,1606,Q,2344,1621,2242,1576,2144,1519,2080,1501,L,2078,1395,Q,2060,1369,2060,1359,2059,1329,2042,1314,2028,1298,2025,1270,2022,1227,1939,1234,Q,1922,1236,1908,1224,Z]],label:"Hayredin",shortLabel:"HA",labelPosition:[187.9,175.9],labelAlignment:[CEN,MID]},"04":{outlines:[[M,2415,143,Q,2378,143,2369,155,2361,166,2330,166,2275,166,2171,103,2090,54,2064,42,1955,45,1943,52,1931,59,1890,61,1849,62,1834,71,1794,93,1741,89,1727,88,1691,103,1656,118,1632,113,1589,105,1569,117,1537,137,1507,145,1477,154,1464,165,1451,175,1455,209,1460,243,1455,314,1464,348,1450,363,1439,376,1439,400,1439,433,1487,492,1534,549,1535,592,1534,623,1527,674,1525,700,1469,730,1463,740,1417,790,1387,822,1387,850,1387,984,1387,1087,L,1699,1087,Q,1749,1083,1769,1094,1782,1100,1803,1119,1811,1125,1815,1166,1835,1180,1841,1209,1857,1216,1892,1214,1894,1213,1909,1225,1922,1236,1940,1235,2022,1227,2025,1271,2028,1298,2043,1314,2059,1329,2060,1359,2060,1369,2079,1395,L,2079,1415,2125,1415,Q,2117,1389,2157,1391,2195,1392,2192,1369,L,2227,1369,2227,1322,Q,2274,1314,2276,1305,2281,1287,2310,1288,2325,1288,2341,1292,L,2496,1292,2496,1262,2522,1262,Q,2524,1254,2525,1238,2563,1243,2584,1196,2629,1165,2640,1164,2650,1161,2685,1164,2711,1164,2720,1155,2763,1113,2766,1110,2806,1032,2877,1033,2946,1033,2956,1030,2972,1022,2968,1004,2977,997,3e3,985,L,3e3,925,Q,2982,925,2974,923,L,2974,753,Q,2974,750,2975,746,2978,728,2995,713,3013,697,3004,669,3003,661,3018,652,3035,641,3035,632,3030,616,3041,606,L,3060,589,Q,3059,581,3077,547,3095,511,3100,475,3106,439,3102,421,3084,414,3080,410,3069,397,3061,397,3029,395,3019,384,2967,354,2942,333,2892,312,2856,293,2810,249,2787,245,L,2787,242,2659,242,2659,266,2599,266,Q,2592,252,2512,199,2492,185,2468,154,Q,2459,143,2415,143,Z]],label:"Kozloduy",shortLabel:"KO",labelPosition:[224.5,72.8],labelAlignment:[CEN,MID]},"07":{outlines:[[M,3102,421,Q,3106,439,3100,475,3095,511,3077,547,3059,581,3060,589,L,3041,606,Q,3030,616,3035,632,3035,641,3018,652,3003,661,3004,669,3013,697,2995,713,2978,728,2975,746,2974,750,2974,753,L,2974,923,Q,2982,925,3e3,925,L,3e3,985,Q,2977,997,2968,1004,2972,1022,2956,1030,2946,1033,2877,1033,2806,1032,2766,1110,2763,1113,2720,1155,2711,1164,2685,1164,2650,1161,2640,1164,2629,1165,2584,1196,2563,1243,2525,1238,2524,1254,2522,1262,L,2496,1262,2496,1292,2341,1292,Q,2325,1288,2310,1288,2281,1287,2276,1305,2274,1314,2227,1322,L,2227,1369,2192,1369,Q,2195,1392,2157,1391,2117,1389,2125,1415,L,2079,1415,2080,1502,Q,2144,1519,2243,1576,2344,1621,2495,1606,L,2495,1668,Q,2480,1668,2480,1684,2479,1694,2480,1715,2456,1714,2456,1761,2456,1801,2465,1805,2476,1810,2507,1816,2511,1826,2533,1842,2547,1852,2550,1864,2590,1864,2598,1851,2605,1837,2643,1837,L,2676,1837,Q,2680,1837,2694,1861,2696,1864,2762,1864,2813,1864,2822,1877,2830,1888,2860,1888,2895,1888,2924,1858,2953,1828,3002,1775,3050,1722,3107,1657,3131,1655,3190,1655,3247,1652,3290,1638,3310,1632,3398,1637,3474,1642,3490,1621,3496,1611,3537,1612,3546,1610,3558,1585,3587,1592,3605,1575,3626,1556,3655,1559,3690,1561,3766,1559,3777,1559,3798,1541,3798,1541,3799,1541,3799,1517,3788,1494,3775,1473,3776,1448,3775,1426,3763,1405,3752,1385,3752,1366,3752,1348,3721,1348,3681,1348,3674,1342,3650,1322,3628,1320,3620,1320,3620,1286,3631,1257,3631,1246,3618,1232,3613,1219,L,3613,1178,Q,3602,1173,3599,1139,3579,1115,3573,1107,L,3573,1060,Q,3573,1056,3574,1054,3577,1047,3583,1046,3590,1044,3592,1038,L,3594,1e3,Q,3594,986,3547,927,3497,866,3492,857,3483,842,3394,725,3377,702,3327,676,3266,643,3255,635,3198,590,3199,570,3203,505,3167,488,L,3167,435,Q,3162,432,3156,430,Q,3132,418,3102,421,Z]],label:"Miziya",shortLabel:"MI",labelPosition:[307.3,128.8],labelAlignment:[CEN,MID]},"08":{outlines:[[M,4446,742,L,4331,742,Q,4147,734,4131,728,4035,651,3995,632,3918,572,3872,544,3871,543,3740,486,3729,467,3705,467,L,3656,467,Q,3609,452,3592,446,3583,443,3582,442,L,3205,442,Q,3187,442,3167,435,L,3167,488,Q,3203,505,3199,570,3198,590,3255,635,3266,643,3327,676,3377,702,3394,725,3483,842,3492,857,3497,866,3547,927,3594,986,3594,1e3,L,3592,1038,Q,3590,1044,3583,1046,3577,1047,3574,1054,3573,1056,3573,1060,L,3573,1107,Q,3579,1115,3599,1139,3602,1173,3613,1178,L,3613,1219,Q,3618,1232,3631,1246,3631,1257,3620,1286,3620,1320,3628,1320,3650,1322,3674,1342,3681,1348,3721,1348,3752,1348,3752,1366,3752,1385,3763,1405,3775,1426,3776,1448,3775,1473,3788,1494,3799,1517,3799,1541,3806,1538,3839,1538,3879,1538,3885,1544,3901,1562,3926,1561,3927,1561,3961,1591,3964,1593,3983,1594,3996,1594,4e3,1610,L,4061,1610,Q,4061,1605,4067,1589,L,4161,1589,Q,4163,1562,4168,1558,4173,1553,4198,1530,4205,1514,4230,1502,4247,1483,4272,1483,4300,1483,4302,1484,L,4323,1509,4441,1509,4444,1497,4484,1497,Q,4492,1522,4547,1532,4606,1543,4614,1550,4624,1560,4689,1561,4754,1563,4767,1571,L,4807,1571,Q,4816,1545,4830,1539,4841,1533,4865,1509,4870,1505,4921,1448,4938,1427,4974,1392,4983,1381,5007,1361,5020,1349,5022,1346,L,5062,1346,5062,1363,5281,1363,5281,1346,Q,5286,1346,5348,1342,5350,1298,5351,1219,L,5392,1219,Q,5392,1232,5397,1242,5405,1243,5429,1242,5449,1243,5448,1263,L,5503,1263,5503,1251,5525,1251,Q,5513,1225,5528,1220,5552,1213,5557,1191,5557,1165,5559,1149,5554,1134,5563,1128,5579,1117,5580,1114,5593,1093,5590,1025,5588,966,5615,951,L,5615,819,Q,5549,818,5506,815,5477,811,5467,800,5460,789,5440,789,5420,789,5415,801,5409,812,5385,812,L,5311,812,Q,5298,812,5291,825,5283,837,5260,837,L,5183,837,Q,5165,837,5153,848,5139,858,5127,858,L,5055,858,Q,5020,858,4997,872,4968,889,4948,893,L,4849,893,Q,4841,909,4818,909,4798,909,4753,869,4707,857,4700,851,4682,832,4670,824,4637,827,4628,816,4615,802,4593,795,4563,756,4518,763,4497,765,4484,754,Q,4469,741,4446,742,Z]],label:"Oryahovo",shortLabel:"OR",labelPosition:[439.1,112.3],labelAlignment:[CEN,MID]},"01":{outlines:[[M,2578,2104,L,2504,2056,Q,2461,2087,2439,2094,2399,2103,2397,2160,2395,2185,2398,2252,2398,2314,2383,2336,2352,2343,2282,2389,L,2215,2433,Q,2193,2411,2181,2411,2159,2410,2158,2409,2157,2407,2157,2390,2157,2379,2164,2376,2173,2374,2176,2355,L,2176,2312,Q,2175,2270,2174,2266,2172,2258,2146,2232,L,1997,2232,1991,2259,1943,2259,Q,1931,2243,1935,2227,1920,2216,1913,2204,L,1881,2204,1881,2225,1830,2225,Q,1835,2244,1795,2248,1794,2248,1794,2248,1795,2272,1784,2269,L,1761,2297,Q,1753,2300,1747,2310,1702,2372,1697,2385,1695,2392,1646,2452,1627,2474,1612,2489,1615,2497,1640,2529,1646,2541,1665,2574,1666,2589,1680,2635,1690,2669,1684,2699,L,1684,2787,Q,1713,2815,1707,2845,1696,2885,1751,2878,1773,2874,1835,2878,1848,2877,1902,2905,1926,2908,1986,2905,2036,2907,2051,2929,2060,2943,2055,3004,2056,3010,2074,3023,2090,3036,2084,3061,2264,3056,2295,3127,2305,3150,2364,3210,2395,3241,2399,3250,2408,3268,2420,3300,2440,3325,2501,3355,2566,3386,2592,3415,2675,3505,2780,3525,2774,3484,2807,3474,2821,3444,2840,3426,L,2881,3379,Q,2895,3362,2905,3328,2963,3256,2985,3237,2994,3228,3063,3228,3084,3227,3123,3223,3129,3193,3130,3069,L,3130,2980,Q,3129,2964,3118,2955,3101,2941,3097,2935,3090,2921,3070,2923,3042,2923,3039,2922,3015,2904,3007,2905,2985,2905,2977,2898,L,2977,2782,Q,2984,2761,3038,2689,3067,2663,3072,2654,3080,2637,3080,2591,3080,2539,3075,2534,3051,2510,3054,2494,3055,2484,3038,2438,3041,2398,3033,2382,3009,2365,2992,2348,2980,2336,2945,2323,2884,2297,2848,2273,2829,2261,2653,2166,Q,2607,2141,2578,2104,Z]],label:"Borovan",shortLabel:"BO",labelPosition:[247.1,272.3],labelAlignment:[CEN,MID]},"02":{outlines:[[M,3605,1575,Q,3587,1592,3558,1585,3546,1610,3537,1612,3496,1611,3490,1621,3474,1642,3398,1637,3310,1632,3290,1638,3247,1652,3190,1655,3131,1655,3107,1657,3050,1722,3002,1775,2953,1828,2924,1858,2895,1888,2860,1888,2830,1888,2822,1877,2813,1864,2762,1864,2696,1864,2694,1861,2680,1837,2676,1837,L,2643,1837,Q,2605,1837,2598,1851,2590,1864,2550,1864,2551,1867,2551,1871,2551,1883,2528,1917,L,2527,1968,Q,2526,1992,2505,2006,2504,2010,2504,2056,L,2578,2104,Q,2607,2141,2653,2166,2829,2261,2848,2273,2884,2297,2945,2323,2980,2336,2992,2348,3009,2365,3033,2382,3041,2398,3038,2438,3055,2484,3054,2494,3051,2510,3075,2534,3080,2539,3080,2591,3080,2637,3072,2654,3067,2663,3038,2689,2984,2761,2977,2782,L,2977,2898,Q,2985,2905,3007,2905,3015,2904,3039,2922,3042,2923,3070,2923,3090,2921,3097,2935,3101,2941,3118,2955,3129,2964,3130,2980,L,3130,3069,Q,3129,3193,3123,3223,3084,3227,3063,3228,2994,3228,2985,3237,2963,3256,2905,3328,2895,3362,2881,3379,L,2840,3426,Q,2821,3444,2807,3474,2774,3484,2780,3525,L,2781,3525,2781,3530,Q,2789,3526,2818,3549,2864,3549,2850,3576,L,2896,3576,2896,3648,Q,2877,3656,2877,3703,2877,3743,2890,3755,2898,3762,2899,3808,2900,3810,2913,3818,2927,3831,2927,3846,L,2927,3902,Q,2935,3906,2936,3910,2941,3924,3009,3924,3075,3924,3084,3909,3092,3894,3179,3894,3262,3894,3271,3905,3291,3930,3305,3976,3331,4005,3347,4047,3359,4058,3373,4066,3402,4080,3438,4081,3481,4080,3491,4047,3496,4022,3502,4006,L,3788,4008,Q,3792,4001,3799,3996,3809,3987,3818,3959,L,3818,3740,Q,3841,3730,3841,3712,3839,3685,3867,3677,L,3867,3666,Q,3862,3648,3846,3617,3823,3570,3821,3566,3795,3534,3795,3513,3795,3477,3766,3463,L,3766,3350,3798,3350,Q,3804,3347,3819,3331,3849,3328,3870,3310,3891,3313,3894,3297,3897,3278,3907,3276,L,3941,3274,Q,3957,3273,3956,3254,3985,3267,3993,3240,3993,3234,3995,3187,3993,3179,4007,3170,4021,3162,4017,3148,4019,3131,4019,3094,4040,3095,4044,3076,4105,3073,4102,3052,4160,3054,4230,2966,4286,2928,4294,2918,4337,2915,4337,2861,4337,2857,4321,2811,L,4321,2780,4366,2780,Q,4357,2764,4376,2756,4394,2750,4397,2740,L,4393,2691,Q,4384,2685,4272,2579,4259,2565,4230,2561,4201,2556,4193,2546,4174,2541,4156,2532,4133,2517,4121,2504,L,4121,2451,Q,4088,2422,4089,2421,L,4089,2371,Q,4066,2362,4070,2336,4072,2312,4059,2288,4041,2261,4040,2256,4040,2222,4039,2209,4037,2182,4019,2176,L,4019,2114,Q,4040,2121,4040,2086,L,4060,2086,Q,4095,2053,4094,2027,L,4094,1944,Q,4094,1878,4097,1869,4118,1849,4118,1825,4119,1822,4118,1819,4117,1788,4116,1770,4116,1735,4128,1720,4134,1713,4139,1664,4159,1633,4161,1616,4160,1600,4161,1589,L,4067,1589,Q,4061,1605,4061,1610,L,4e3,1610,Q,3996,1594,3983,1594,3964,1593,3961,1591,3927,1561,3926,1561,3901,1562,3885,1544,3879,1538,3839,1538,3806,1538,3799,1541,3798,1541,3798,1541,3777,1559,3766,1559,3690,1561,3655,1559,Q,3626,1556,3605,1575,Z]],label:"Byala Slatina",shortLabel:"BS",labelPosition:[355.1,270.9],labelAlignment:[CEN,MID]},"05":{outlines:[[M,1486,2161,Q,1487,2180,1465,2181,1481,2237,1442,2249,1430,2253,1426,2274,1423,2300,1414,2309,1410,2313,1408,2346,1405,2372,1382,2367,L,1382,2428,1152,2428,Q,1147,2403,1123,2403,1090,2402,1086,2400,1040,2364,1024,2335,979,2226,926,2226,915,2226,901,2242,885,2257,867,2258,810,2258,816,2293,783,2289,742,2316,706,2318,693,2325,674,2344,664,2349,620,2355,619,2356,594,2382,587,2386,553,2386,542,2396,515,2416,507,2416,487,2416,465,2432,444,2447,421,2447,407,2472,398,2477,384,2478,378,2479,367,2481,363,2493,352,2524,315,2556,306,2571,275,2583,254,2592,264,2618,L,238,2618,238,2786,Q,271,2847,267,2893,263,2946,272,2957,279,2966,292,2975,298,2979,298,2996,299,3052,275,3053,258,3105,189,3098,189,3107,184,3120,L,168,3120,Q,167,3143,169,3197,169,3247,161,3269,156,3280,152,3329,149,3371,131,3392,116,3407,123,3472,115,3497,93,3528,91,3535,91,3602,96,3618,83,3634,74,3647,71,3658,L,71,3694,Q,65,3726,59,3731,54,3736,54,3754,54,3771,55,3772,56,3774,72,3776,L,72,3800,Q,125,3818,164,3848,190,3848,218,3871,233,3871,250,3880,275,3892,308,3912,342,3932,397,3927,451,3922,461,3934,472,3946,496,3944,L,554,3944,Q,568,3942,598,3968,L,656,3968,Q,679,3969,693,3987,711,3993,728,4013,734,4020,743,4025,745,3961,746,3926,749,3863,775,3842,788,3832,834,3765,848,3743,864,3665,862,3605,882,3567,886,3551,888,3541,894,3524,906,3524,935,3522,963,3524,977,3524,1e3,3503,1033,3509,1037,3479,1039,3467,1070,3447,L,1070,3396,1085,3396,Q,1079,3348,1136,3342,1174,3339,1203,3314,1238,3279,1277,3279,L,1382,3279,Q,1450,3277,1459,3260,1465,3247,1491,3247,1518,3247,1523,3238,1528,3230,1555,3226,1579,3222,1579,3201,1599,3177,1600,3175,L,1600,3132,Q,1600,3105,1579,3059,L,1579,2985,Q,1578,2949,1544,2903,1486,2869,1486,2841,1502,2818,1505,2807,L,1505,2759,Q,1535,2729,1534,2719,1535,2675,1537,2670,1554,2656,1555,2636,1556,2593,1560,2590,1570,2579,1573,2546,1576,2515,1584,2510,1596,2503,1611,2489,1627,2474,1646,2452,1695,2392,1697,2385,1702,2372,1747,2310,1753,2300,1760,2296,L,1784,2269,Q,1795,2272,1793,2248,1793,2245,1793,2241,1751,2201,1730,2180,1729,2182,1728,2183,L,1659,2183,Q,1662,2156,1614,2159,1564,2161,1565,2128,L,1500,2128,Q,1486,2129,1486,2161,Z]],label:"Krivodol",shortLabel:"KR",labelPosition:[75.6,307.6],labelAlignment:[CEN,MID]},"03":{outlines:[[M,2051,2929,Q,2036,2907,1986,2905,1926,2908,1902,2905,1848,2877,1835,2878,1773,2874,1751,2878,1696,2885,1707,2845,1713,2815,1684,2787,L,1684,2699,Q,1690,2669,1680,2635,1666,2589,1665,2574,1646,2541,1640,2529,1615,2497,1612,2489,1596,2503,1584,2510,1576,2515,1573,2546,1570,2579,1561,2590,1556,2593,1556,2636,1554,2656,1537,2671,1535,2675,1535,2719,1535,2729,1505,2759,L,1505,2807,Q,1502,2818,1486,2841,1486,2869,1545,2903,1578,2949,1579,2985,L,1579,3059,Q,1600,3105,1600,3133,L,1600,3175,Q,1599,3177,1579,3201,1579,3222,1556,3226,1528,3230,1523,3238,1518,3247,1491,3247,1465,3247,1459,3261,1450,3277,1382,3279,L,1277,3279,Q,1238,3279,1203,3314,1174,3339,1136,3343,1079,3348,1085,3396,L,1070,3396,1070,3447,Q,1039,3467,1038,3479,1033,3509,1e3,3503,977,3524,963,3524,935,3522,906,3524,894,3524,889,3541,886,3551,882,3568,862,3605,864,3666,848,3743,834,3765,788,3832,776,3842,749,3863,746,3926,745,3961,743,4025,754,4030,768,4032,788,4051,814,4051,817,4060,822,4069,825,4075,845,4078,855,4080,880,4099,896,4099,920,4125,L,920,4248,Q,721,4248,705,4273,691,4292,685,4310,677,4329,654,4341,640,4360,629,4376,617,4378,614,4413,600,4412,591,4421,581,4430,587,4441,578,4453,567,4456,561,4456,561,4476,561,4493,664,4601,664,4602,665,4602,855,4803,875,4808,895,4812,946,4853,998,4894,1035,4897,1077,4887,1140,4887,1207,4887,1223,4892,1244,4899,1290,4941,1383,5025,1420,5036,L,1514,5036,Q,1528,5036,1551,5051,1572,5064,1598,5061,1646,5053,1685,5080,1719,5104,1758,5095,1810,5017,1836,4990,1890,4942,1896,4933,1900,4928,1900,4872,1900,4777,1840,4714,1759,4603,1759,4571,1823,4382,1823,4343,L,1877,4343,Q,1889,4310,1951,4299,2004,4289,2004,4244,2004,4227,1992,4218,1980,4211,1982,4177,1982,4152,1972,4133,1961,4111,1961,4103,1961,4082,1991,4041,2007,4020,2017,4009,2027,3998,2077,3999,2125,3999,2179,3999,2219,4002,2233,3958,2236,3955,2270,3944,2286,3938,2296,3920,L,2330,3920,Q,2330,3923,2343,3953,2356,3980,2351,3996,2382,3992,2559,4054,2563,4054,2690,3963,2721,3944,2753,3910,2785,3889,2863,3895,2865,3895,2869,3895,2911,3896,2927,3902,L,2927,3846,Q,2927,3831,2913,3818,2900,3810,2899,3808,2898,3762,2890,3755,2877,3743,2877,3703,2877,3656,2896,3648,L,2896,3576,2850,3576,Q,2864,3549,2818,3549,2789,3526,2781,3530,L,2781,3528,Q,2780,3526,2780,3525,2675,3505,2592,3415,2566,3386,2501,3355,2440,3325,2420,3300,2408,3268,2399,3250,2395,3241,2364,3210,2305,3150,2295,3127,2264,3056,2084,3061,2090,3036,2074,3023,2056,3010,2055,3004,Q,2060,2943,2051,2929,Z]],label:"Vratsa",shortLabel:"VR",labelPosition:[174.4,365.8],labelAlignment:[CEN,MID]},"06":{outlines:[[M,2863,3895,Q,2785,3889,2753,3910,2721,3944,2690,3963,2563,4054,2559,4054,2382,3992,2351,3996,2356,3980,2343,3953,2330,3923,2330,3920,L,2296,3920,Q,2286,3938,2270,3944,2236,3955,2233,3958,2219,4002,2179,3999,2125,3999,2077,3999,2027,3998,2017,4009,2007,4020,1991,4041,1961,4082,1961,4103,1961,4111,1972,4133,1982,4152,1982,4177,1980,4211,1992,4218,2004,4227,2004,4244,2004,4289,1951,4299,1889,4310,1877,4343,L,1823,4343,Q,1823,4382,1759,4571,1759,4603,1840,4714,1900,4777,1900,4872,1900,4928,1896,4933,1890,4942,1836,4990,1810,5017,1758,5095,1719,5104,1685,5080,1646,5053,1598,5061,1572,5064,1551,5051,1528,5036,1514,5036,L,1420,5036,Q,1383,5025,1290,4941,1244,4899,1223,4892,1207,4887,1140,4887,1077,4887,1035,4897,L,1035,4943,Q,1020,4949,1007,5001,1005,5003,988,5027,985,5037,982,5059,962,5073,958,5089,957,5098,953,5115,935,5152,935,5175,935,5213,981,5274,1004,5307,1039,5345,1137,5479,1153,5505,1197,5559,1292,5694,1318,5725,1367,5791,1389,5819,1453,5887,L,1630,5887,1630,5844,Q,1660,5850,1658,5802,1655,5754,1679,5756,L,1677,5707,Q,1677,5677,1690,5673,1701,5669,1705,5643,1707,5612,1718,5601,1727,5592,1758,5594,1790,5595,1802,5585,1825,5561,1836,5561,L,1886,5561,Q,1958,5561,1986,5596,1995,5608,2015,5636,2020,5642,2046,5682,2092,5753,2268,5740,2304,5710,2317,5697,2336,5657,2366,5639,2453,5586,2501,5534,2525,5506,2566,5512,2609,5516,2630,5490,L,2710,5490,Q,2728,5490,2736,5474,2742,5472,2774,5472,2803,5472,2823,5484,2817,5457,2830,5443,2849,5421,2851,5408,2867,5397,2875,5381,2876,5352,2886,5344,2907,5324,2928,5267,2949,5243,2949,5235,2949,5212,2974,5205,L,2974,5184,Q,2964,5186,2958,5177,2952,5166,2947,5165,2919,5157,2912,5149,2911,5147,2851,5104,L,2851,5042,Q,2970,5042,3e3,5039,3009,5036,3009,5005,3010,5001,3030,4981,L,3030,4856,Q,3010,4844,3009,4844,3003,4842,3003,4818,3003,4795,3019,4786,3034,4779,3030,4746,L,3051,4746,Q,3040,4720,3060,4715,3081,4709,3075,4687,L,3126,4687,Q,3127,4687,3158,4668,3216,4677,3203,4623,L,3203,4564,Q,3207,4536,3182,4518,3180,4502,3166,4497,3147,4490,3147,4483,3146,4463,3137,4458,3128,4453,3128,4435,3143,4421,3143,4390,L,3143,4341,3277,4341,3277,4216,3310,4216,3310,4195,Q,3379,4194,3384,4192,3400,4186,3400,4146,3400,4123,3373,4118,L,3373,4066,Q,3359,4058,3347,4047,3331,4005,3305,3976,3291,3930,3271,3905,3262,3894,3179,3894,3092,3894,3084,3909,3075,3924,3009,3924,2941,3924,2936,3910,2935,3906,2927,3902,2911,3896,2869,3895,Q,2865,3895,2863,3895,Z]],label:"Mezdra",shortLabel:"ME",labelPosition:[230.2,489],labelAlignment:[CEN,MID]},"09":{outlines:[[M,4002,4093,L,3948,4093,Q,3949,4114,3902,4117,3885,4116,3882,4130,3880,4144,3860,4144,3834,4144,3809,4112,3782,4112,3764,4074,L,3764,4040,3783,4040,Q,3784,4027,3784,4020,3785,4013,3788,4008,L,3502,4006,Q,3496,4022,3491,4047,3481,4080,3438,4081,3402,4080,3373,4066,L,3373,4118,Q,3400,4123,3400,4146,3400,4186,3384,4192,3379,4194,3310,4195,L,3310,4216,3277,4216,3277,4341,3143,4341,3143,4390,Q,3143,4421,3128,4435,3128,4453,3137,4458,3146,4463,3147,4483,3147,4490,3166,4497,3180,4502,3182,4518,3207,4536,3203,4564,L,3203,4623,Q,3216,4677,3158,4668,3127,4687,3126,4687,L,3075,4687,Q,3081,4709,3060,4715,3040,4720,3051,4746,L,3030,4746,Q,3034,4779,3019,4786,3003,4795,3003,4818,3003,4842,3009,4844,3010,4844,3030,4856,L,3030,4981,Q,3010,5001,3009,5005,3009,5036,3e3,5039,2970,5042,2851,5042,L,2851,5104,Q,2911,5147,2912,5149,2919,5157,2947,5165,2952,5166,2958,5177,2964,5186,2974,5184,L,2974,5205,Q,2949,5212,2949,5235,2949,5243,2928,5267,2907,5324,2886,5344,2876,5352,2875,5381,2867,5397,2851,5408,2849,5421,2830,5443,2817,5457,2823,5484,2837,5492,2846,5507,2855,5510,2876,5536,2888,5551,2905,5559,2910,5562,2916,5564,3054,5560,3312,5551,3313,5551,3315,5551,3389,5551,3394,5555,3395,5556,3399,5565,3406,5573,3424,5574,L,3461,5574,Q,3477,5597,3482,5597,3517,5597,3526,5600,3543,5603,3554,5621,3572,5618,3589,5623,3593,5638,3618,5638,3645,5638,3651,5648,3657,5659,3676,5663,3695,5667,3705,5680,3707,5684,3726,5687,3743,5689,3754,5712,3755,5712,3793,5712,3814,5711,3808,5736,L,3833,5736,3835,5715,3861,5715,Q,3855,5681,3886,5685,3902,5686,3907,5679,3910,5675,3915,5664,3927,5651,3947,5637,3947,5613,3961,5597,3978,5573,3974,5490,3998,5412,3998,5402,3998,5364,3966,5336,3933,5309,3933,5288,3933,5264,3956,5253,3953,5246,3966,5221,3966,5196,3977,5171,3987,5146,3987,5121,L,4051,5121,Q,4050,5091,4105,5092,4136,5092,4195,5095,L,4361,5095,Q,4363,5079,4363,5036,L,4363,4994,Q,4352,4981,4342,4966,4337,4959,4337,4889,4316,4860,4316,4822,L,4316,4748,Q,4280,4729,4289,4687,4295,4651,4275,4620,4276,4574,4267,4545,4261,4526,4240,4500,L,4241,4344,Q,4247,4300,4229,4278,4226,4273,4183,4237,Q,4059,4143,4002,4093,Z]],label:"Roman",shortLabel:"RO",labelPosition:[359.2,487.1],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"vratsa",type:"maps"}}})});