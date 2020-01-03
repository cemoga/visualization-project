(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=636)})({636:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(637);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},637:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright InfoSoft Global Pvt. Ltd.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author InfoSoft Global Pvt. Ltd.
 * @meta package_map_pack
 * @id fusionmaps.Waikato.18.08-16-2012 05:14:06
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Waikato",revision:18,standaloneInit:true,baseWidth:319,baseHeight:600,baseScaleFactor:10,entities:{1:{outlines:[[M,2708,4365,L,2643,4365,Q,2643,4348,2640,4344,2585,4354,2579,4268,2573,4178,2532,4180,L,2532,4142,2487,4142,Q,2487,4123,2483,4115,L,2445,4115,Q,2452,4085,2416,4085,2384,4088,2367,4089,L,2367,4108,2282,4108,2282,4140,2095,4140,2095,4157,2027,4157,2027,4115,1972,4115,1972,4098,1938,4098,1938,4060,1976,4060,1976,4040,Q,1969,3984,1908,3992,L,1908,3941,1880,3941,1880,3917,1836,3917,Q,1840,3932,1840,3959,L,1821,3958,1817,3958,1827,4064,1798,4064,1798,4102,Q,1752,4092,1759,4140,L,1708,4140,1708,4170,1687,4170,1687,4259,Q,1690,4282,1690,4327,1719,4344,1718,4356,1716,4368,1718,4385,1720,4401,1720,4406,L,1721,4474,Q,1722,4520,1690,4514,L,1690,4538,1666,4538,1666,4569,1632,4569,Q,1653,4690,1605,4677,L,1605,4705,Q,1572,4694,1574,4721,L,1575,4769,1541,4769,1541,4793,1514,4793,1514,4827,1548,4827,1548,4881,1571,4881,1571,4904,1605,4904,1605,4976,Q,1603,4992,1578,4993,L,1578,5112,1598,5112,1598,5195,Q,1582,5195,1578,5198,L,1578,5297,1677,5299,1677,5277,1748,5277,1748,5292,1778,5292,1778,5313,1744,5313,Q,1742,5328,1717,5321,L,1717,5418,1683,5418,1683,5454,1659,5454,1659,5495,1696,5495,1696,5532,1720,5532,1720,5572,Q,1694,5576,1690,5604,1688,5621,1690,5658,1690,5672,1666,5691,1659,5701,1659,5736,1625,5767,1618,5810,1595,5827,1547,5868,L,1547,5898,Q,1577,5888,1591,5905,1608,5924,1619,5924,1694,5920,1717,5953,L,1764,5953,1765,5924,Q,1841,5924,1877,5922,L,1877,5956,1984,5956,2007,5958,2007,5909,2035,5909,2035,5848,Q,2068,5861,2086,5828,2103,5798,2095,5772,L,2137,5772,2137,5738,2218,5738,2218,5661,Q,2259,5658,2256,5614,2255,5592,2263,5586,2273,5579,2273,5552,L,2303,5552,2303,5525,Q,2316,5525,2326,5529,L,2326,5500,2341,5500,2341,5568,2380,5568,Q,2380,5607,2392,5619,L,2435,5619,Q,2435,5580,2460,5590,L,2460,5563,2525,5563,2525,5529,2568,5529,2568,5483,2511,5483,2511,5437,2549,5437,2549,5395,Q,2629,5368,2678,5287,2701,5252,2718,5215,L,2718,4966,Q,2759,4894,2779,4838,2813,4852,2821,4824,2834,4779,2835,4777,2903,4719,2906,4711,2974,4596,2991,4544,2995,4543,2999,4540,3014,4532,3020,4506,3028,4470,3044,4463,3089,4443,3102,4406,L,3044,4405,3044,4365,2983,4365,2983,4340,2953,4340,2953,4367,2933,4367,2933,4421,2899,4421,Q,2899,4429,2902,4459,L,2843,4459,Q,2848,4442,2814,4429,L,2814,4382,2851,4382,2851,4319,2827,4319,2827,4285,2780,4285,2780,4323,2753,4323,2753,4348,2732,4348,Q,2724,4340,2708,4340,Z]],label:"Taupo District",shortLabel:"TP",labelPosition:[215.2,493.7],labelAlignment:[CEN,MID]},2:{outlines:[[M,2891,3864,Q,2855,3799,2817,3749,L,2734,3749,2734,3775,2698,3775,2698,3745,2668,3745,Q,2654,3701,2653,3694,L,2622,3694,2622,3721,2594,3713,Q,2592,3737,2559,3749,2556,3800,2537,3805,L,2537,3853,2566,3853,2566,3902,2564,3907,2525,3907,2525,3932,Q,2488,3935,2473,3939,2446,3943,2460,3975,L,2431,3975,2431,4002,2401,4002,2401,4035,2368,4035,2367,4089,Q,2384,4088,2416,4085,2452,4085,2445,4115,L,2483,4115,Q,2487,4123,2487,4142,L,2532,4142,2532,4180,Q,2573,4178,2579,4268,2585,4354,2640,4344,2643,4348,2643,4365,L,2708,4365,2708,4340,Q,2724,4340,2732,4348,L,2753,4348,2753,4323,2780,4323,2780,4285,2827,4285,2827,4319,2851,4319,2851,4382,2814,4382,2814,4429,Q,2848,4442,2843,4459,L,2902,4459,Q,2899,4429,2899,4421,L,2933,4421,2933,4367,2953,4367,2953,4340,2983,4340,2983,4365,3044,4365,3044,4405,3102,4406,Q,3105,4395,3106,4382,3126,4319,3129,4273,3133,4214,3146,4213,3157,4211,3157,4179,3157,4161,3124,4128,3124,4084,3110,4064,3082,4024,3082,4017,L,3082,3949,Q,3063,3949,3059,3945,L,3017,3945,3017,3975,2983,3975,Q,2957,3970,2933,3928,Q,2900,3874,2891,3864,Z]],label:"Rotorua District",shortLabel:"RR",labelPosition:[276.2,407.6],labelAlignment:[CEN,MID]},3:{outlines:[[M,791,3660,Q,791,3625,787,3608,779,3575,741,3592,742,3588,723,3550,L,668,3550,668,3635,612,3635,612,3609,486,3609,486,3643,442,3643,442,3512,Q,430,3512,421,3516,L,396,3516,396,3490,342,3490,342,3441,311,3441,311,3475,199,3475,199,3441,182,3441,182,3516,220,3516,220,3638,247,3638,247,3684,230,3684,226,3701,226,3772,250,3772,250,3796,226,3796,226,3888,186,3888,189,3948,159,3948,159,3975,132,3973,Q,131,3983,129,4004,124,4020,104,4011,L,104,4123,Q,102,4152,104,4200,102,4234,74,4232,L,74,4404,Q,73,4436,77,4504,77,4559,50,4569,L,50,4710,111,4710,111,4742,220,4742,227,4736,247,4736,247,4776,304,4776,304,4746,Q,316,4749,345,4739,L,362,4739,362,4768,389,4768,389,4797,420,4797,420,4845,444,4845,444,4824,474,4824,474,4793,510,4797,563,4797,563,4736,588,4736,588,4676,607,4676,607,4605,744,4605,744,4574,789,4574,789,4537,996,4537,996,4564,1039,4564,1040,4542,1063,4542,1063,4517,1116,4517,Q,1108,4493,1125,4472,1143,4450,1167,4456,L,1169,4432,Q,1198,4437,1203,4370,L,1218,4370,Q,1218,4379,1225,4408,L,1245,4408,1245,4425,1303,4425,1303,4401,1330,4401,1330,4364,Q,1340,4367,1354,4344,L,1393,4343,1393,4276,1415,4276,1418,4252,1480,4252,1480,4231,1561,4231,Q,1562,4232,1563,4234,L,1581,4234,1581,4200,Q,1547,4197,1506,4147,1465,4098,1459,4055,L,1326,4055,1326,4089,Q,1313,4089,1288,4081,L,1288,4055,1258,4055,1258,3985,1234,3985,Q,1230,3921,1230,3890,L,1191,3890,1191,3856,1054,3856,1054,3830,1037,3830,1037,3779,1013,3779,Q,1027,3652,894,3681,L,894,3660,Z]],label:"Waitomo District",shortLabel:"WO",labelPosition:[69.8,408.4],labelAlignment:[CEN,MID]},4:{outlines:[[M,1108,3415,L,1108,3378,1037,3378,1037,3274,1061,3274,1061,3240,954,3240,954,3301,920,3301,Q,919,3254,922,3234,L,898,3234,898,3179,869,3176,699,3176,699,3152,604,3152,604,3200,564,3200,564,3173,537,3173,534,3155,520,3155,520,3156,500,3156,500,3183,471,3183,471,3211,454,3211,454,3333,Q,472,3333,498,3343,L,498,3322,547,3322,547,3357,Q,537,3370,539,3380,L,556,3380,556,3408,517,3408,517,3428,396,3431,396,3461,342,3461,342,3490,396,3490,396,3516,421,3516,Q,430,3512,442,3512,L,442,3643,486,3643,486,3609,612,3609,612,3635,668,3635,668,3550,723,3550,Q,742,3588,741,3592,779,3575,787,3608,791,3625,791,3660,L,894,3660,894,3681,Q,1027,3652,1013,3779,L,1037,3779,1037,3830,1054,3830,1054,3856,1191,3856,1191,3890,1230,3890,Q,1230,3921,1234,3985,L,1258,3985,1258,4055,1288,4055,1288,4081,Q,1313,4089,1326,4089,L,1326,4055,1459,4055,Q,1465,4098,1506,4147,1547,4197,1581,4200,L,1581,4234,1563,4234,Q,1569,4246,1568,4258,L,1608,4258,1609,4282,1646,4282,1649,4259,1687,4259,1687,4170,1708,4170,1708,4140,1759,4140,Q,1752,4092,1798,4102,L,1798,4064,1827,4064,1817,3958,1821,3958,1819,3957,Q,1813,3955,1802,3953,L,1802,3928,Q,1792,3928,1773,3921,L,1773,3894,1827,3894,1827,3788,1806,3788,1805,3580,1775,3580,1775,3548,1747,3543,1745,3567,1681,3567,1681,3594,1625,3594,1625,3645,1608,3645,1608,3672,1591,3672,1591,3638,1574,3638,Q,1574,3598,1561,3585,1547,3572,1547,3534,L,1475,3534,1475,3486,1455,3486,1455,3454,1411,3454,1411,3432,1367,3432,Q,1364,3403,1299,3407,1234,3412,1199,3410,L,1196,3439,1173,3439,1173,3415,Z]],label:"Otorohanga District",shortLabel:"OH",labelPosition:[108.4,356.1],labelAlignment:[CEN,MID]},5:{outlines:[[M,2287,3027,Q,2278,3027,2261,3019,L,2261,3054,2142,3054,2142,3097,2044,3097,Q,2044,3085,2035,3054,1929,3067,1921,3044,L,1901,3044,Q,1892,3048,1863,3049,L,1863,3101,1796,3101,Q,1821,3247,1772,3258,L,1772,3295,1805,3295,1805,3371,Q,1802,3371,1802,3377,L,1765,3380,1765,3395,Q,1776,3392,1772,3414,L,1747,3414,1747,3543,1775,3548,1775,3580,1805,3580,1806,3788,1827,3788,1827,3894,1773,3894,1773,3921,Q,1792,3928,1802,3928,L,1802,3953,Q,1813,3955,1819,3957,L,1821,3958,1840,3959,Q,1840,3932,1836,3917,L,1880,3917,1880,3941,1908,3941,1908,3992,Q,1969,3984,1976,4040,L,1976,4060,1938,4060,1938,4098,1972,4098,1972,4115,2027,4115,2027,4157,2095,4157,2095,4140,2282,4140,2282,4108,2367,4108,2368,4035,2401,4035,2401,4002,2431,4002,2431,3975,2460,3975,Q,2446,3943,2473,3939,2488,3935,2525,3932,L,2525,3907,2564,3907,2566,3902,2566,3853,2537,3853,2537,3805,Q,2556,3800,2559,3749,2592,3737,2594,3713,L,2572,3707,2572,3669,Q,2551,3674,2540,3646,2531,3611,2525,3598,2471,3596,2464,3588,2460,3584,2460,3538,2460,3514,2481,3483,L,2481,3364,2445,3364,2445,3291,Q,2412,3300,2395,3269,2374,3230,2350,3223,2273,3200,2273,3125,2273,3091,2287,3084,Z]],label:"South Waikato District",shortLabel:"SW",labelPosition:[217,358.8],labelAlignment:[CEN,MID]},6:{outlines:[[M,1636,2760,L,1616,2760,1616,2799,Q,1575,2786,1581,2828,L,1536,2828,1536,2862,1483,2862,1483,2908,1428,2908,Q,1428,2956,1424,2981,1364,2981,1347,2985,1350,2965,1333,2966,L,1302,2968,Q,1298,2930,1298,2908,L,1271,2908,1271,2900,1203,2900,1203,2857,1145,2857,1145,2815,1075,2815,1075,2819,1037,2821,1034,2847,966,2847,966,2869,908,2869,908,2893,Q,860,2884,873,2927,L,860,2927,Q,854,2924,842,2924,L,842,2935,Q,815,2922,815,2998,815,2999,811,3030,812,3061,836,3067,829,3112,869,3131,L,869,3176,898,3179,898,3234,922,3234,Q,919,3254,920,3301,L,954,3301,954,3240,1061,3240,1061,3274,1037,3274,1037,3378,1108,3378,1108,3415,1173,3415,1173,3439,1196,3439,1199,3410,Q,1234,3412,1299,3407,1364,3403,1367,3432,L,1411,3432,1411,3454,1455,3454,1455,3486,1475,3486,1475,3534,1547,3534,Q,1547,3572,1561,3585,1574,3598,1574,3638,L,1591,3638,1591,3672,1608,3672,1608,3645,1625,3645,1625,3594,1681,3594,1681,3567,1745,3567,1747,3414,1772,3414,Q,1776,3392,1765,3395,L,1765,3380,1802,3377,Q,1802,3371,1805,3371,L,1805,3295,1772,3295,1772,3258,Q,1821,3247,1796,3101,L,1782,3101,1782,3036,1755,3036,1755,2978,1735,2978,1735,2906,Q,1721,2901,1713,2901,L,1713,2825,Q,1691,2826,1681,2825,1664,2822,1659,2798,1657,2785,1646,2782,Q,1637,2778,1636,2760,Z]],label:"Waipa District",shortLabel:"WP",labelPosition:[134.7,317.7],labelAlignment:[CEN,MID]},7:{outlines:[[M,1169,2646,Q,1165,2632,1165,2604,L,1141,2604,1141,2646,1088,2646,1088,2680,1060,2680,1060,2747,1075,2751,1075,2815,1145,2815,1145,2857,1203,2857,1203,2900,1271,2900,1271,2789,1241,2789,1241,2743,1207,2743,Q,1207,2676,1203,2646,Z]],label:"Hamilton City",shortLabel:"HM",labelPosition:[113.8,274.1],labelAlignment:[CEN,MID]},8:{outlines:[[M,1180,1565,L,1070,1565,1070,1599,1036,1599,1036,1649,986,1649,986,1689,Q,993,1689,1022,1699,L,1022,1737,951,1737,Q,924,1733,898,1733,L,898,1774,Q,854,1777,850,1780,847,1757,845,1740,L,830,1740,830,1827,811,1827,811,1938,Q,813,1940,847,1943,L,847,2039,745,2049,745,2074,726,2074,727,2137,Q,728,2175,693,2158,L,693,2190,Q,684,2187,666,2188,L,666,2243,632,2243,632,2275,604,2275,601,2299,584,2299,584,2329,554,2329,554,2299,508,2299,506,2273,491,2273,489,2305,447,2305,447,2329,413,2329,413,2363,360,2363,Q,361,2390,362,2423,L,391,2440,391,2481,Q,389,2529,420,2532,L,420,2659,Q,431,2663,442,2663,442,2665,441,2733,439,2768,464,2768,488,2768,508,2751,L,551,2754,551,2697,578,2697,578,2669,Q,595,2669,631,2666,L,659,2666,660,2673,660,2686,Q,631,2677,636,2710,L,622,2710,Q,622,2730,619,2741,L,619,2758,634,2758,634,2792,602,2792,602,2815,542,2815,542,2835,505,2835,505,2802,493,2802,Q,483,2789,483,2788,L,442,2788,442,2842,357,2842,357,2866,332,2866,332,3041,359,3041,357,3097,Q,357,3240,355,3306,L,355,3380,372,3384,416,3384,Q,420,3334,435,3339,L,435,3177,418,3177,418,3133,461,3133,461,3075,481,3075,481,3095,505,3098,503,3122,525,3122,Q,522,3133,520,3155,L,534,3155,537,3173,564,3173,564,3200,604,3200,604,3152,699,3152,699,3176,869,3176,869,3131,Q,829,3112,836,3067,812,3061,811,3030,815,2999,815,2998,815,2922,842,2935,L,842,2924,Q,854,2924,860,2927,L,873,2927,Q,860,2884,908,2893,L,908,2869,966,2869,966,2847,1034,2847,1037,2821,1075,2819,1075,2751,1060,2747,1060,2680,1088,2680,1088,2646,1141,2646,1141,2604,1165,2604,Q,1165,2632,1169,2646,L,1203,2646,Q,1207,2676,1207,2743,L,1241,2743,1241,2789,1271,2789,1271,2908,1298,2908,Q,1298,2930,1302,2968,L,1333,2966,Q,1350,2965,1347,2985,1364,2981,1424,2981,1428,2956,1428,2908,L,1483,2908,1483,2862,1536,2862,1536,2828,1581,2828,Q,1575,2786,1616,2799,L,1616,2764,1615,2750,Q,1592,2750,1582,2747,L,1588,2709,1588,2666,1562,2666,1562,2703,1490,2703,1490,2646,1465,2646,Q,1465,2571,1444,2552,1438,2464,1434,2434,1397,2396,1407,2325,1415,2248,1385,2227,L,1385,2134,1343,2134,1343,2104,1377,2104,1377,2046,1407,2046,1407,1999,1377,1999,1380,1902,1346,1902,Q,1354,1883,1337,1869,1317,1852,1319,1845,1322,1825,1308,1814,1292,1801,1292,1790,1286,1739,1268,1723,1261,1717,1261,1655,L,1262,1589,Q,1281,1584,1286,1572,1287,1568,1287,1565,1288,1553,1288,1538,L,1180,1538,Z]],label:"Waikato District",shortLabel:"WT",labelPosition:[97.4,238.3],labelAlignment:[CEN,MID]},9:{outlines:[[M,2006,2247,L,1984,2247,1984,2282,1965,2282,1965,2188,1999,2188,1999,2130,1883,2130,1883,2105,1802,2105,Q,1802,2068,1799,2046,L,1713,2046,1708,2015,1606,2015,1606,2049,1530,2049,1530,2079,1473,2079,1472,2100,1455,2100,1455,2076,1438,2076,1438,2043,1407,2043,1407,2046,1377,2046,1377,2104,1343,2104,1343,2134,1385,2134,1385,2227,Q,1415,2248,1407,2325,1397,2396,1434,2434,1438,2464,1444,2552,1465,2571,1465,2646,L,1490,2646,1490,2703,1562,2703,1562,2666,1588,2666,1588,2709,1582,2747,Q,1592,2750,1615,2750,L,1616,2760,1636,2760,Q,1637,2778,1646,2782,1657,2785,1659,2798,1664,2822,1681,2825,1691,2826,1713,2825,L,1713,2901,Q,1721,2901,1735,2906,L,1735,2978,1755,2978,1755,3036,1782,3036,1782,3101,1863,3101,1863,3049,Q,1892,3048,1901,3044,L,1921,3044,Q,1929,3067,2035,3054,2044,3085,2044,3097,L,2142,3097,2142,3054,2261,3054,2261,3019,2261,3019,2261,2917,Q,2231,2921,2225,2913,2224,2908,2224,2877,2224,2835,2242,2833,2260,2833,2261,2794,2260,2785,2248,2779,2234,2774,2231,2761,2222,2723,2220,2721,2205,2711,2205,2642,L,2166,2642,2166,2552,Q,2123,2522,2122,2518,2113,2496,2118,2431,2120,2391,2085,2389,L,2085,2303,Q,2019,2313,2006,2247,Z]],label:"Matamata-Piako District",shortLabel:"MP",labelPosition:[180.2,255.8],labelAlignment:[CEN,MID]},10:{outlines:[[M,1789,1734,L,1789,1771,1745,1771,1745,1715,1765,1715,1765,1654,1724,1654,1721,1686,1706,1686,1706,1664,1687,1664,1687,1531,1655,1531,1655,1511,1601,1511,1601,1542,1571,1542,1571,1566,1540,1566,1540,1600,1459,1600,1459,1624,1377,1624,1377,1599,1326,1599,1326,1572,1286,1572,Q,1281,1584,1262,1589,L,1261,1655,Q,1261,1717,1268,1723,1286,1739,1292,1790,1292,1801,1308,1814,1322,1825,1319,1845,1317,1852,1337,1869,1354,1883,1346,1902,L,1380,1902,1377,1999,1407,1999,1407,2043,1438,2043,1438,2076,1455,2076,1455,2100,1472,2100,1473,2079,1530,2079,1530,2049,1606,2049,1606,2015,1708,2015,1713,2046,1799,2046,Q,1802,2068,1802,2105,L,1883,2105,1883,2130,1999,2130,1999,2188,1965,2188,1965,2282,1984,2282,1984,2247,2006,2247,Q,2019,2313,2085,2303,L,2085,2287,2115,2287,2115,2250,Q,2100,2244,2091,2243,L,2091,2179,Q,2126,2190,2112,2162,L,2139,2162,2139,2200,Q,2174,2200,2161,2223,L,2229,2223,2229,2173,Q,2197,2169,2190,2168,2183,2168,2183,2141,2183,2131,2197,2096,L,2266,2096,2266,2060,Q,2265,2036,2258,2018,2279,2005,2290,2008,2285,1994,2285,1981,2283,1958,2307,1953,L,2307,1889,Q,2290,1889,2278,1885,L,2278,1831,Q,2252,1839,2251,1810,2253,1773,2252,1759,2251,1734,2241,1723,2231,1713,2231,1689,2231,1651,2252,1647,L,2252,1618,Q,2232,1619,2224,1595,L,2208,1596,2208,1652,2169,1652,2169,1681,2147,1681,2147,1742,2043,1742,2043,1771,1806,1771,1806,1734,Z]],label:"Hauraki District",shortLabel:"HK",labelPosition:[178.4,188.8],labelAlignment:[CEN,MID]},11:{outlines:[[M,1131,1363,L,1131,1388,1077,1388,1077,1423,1014,1423,1014,1447,893,1447,893,1474,850,1474,850,1501,815,1501,815,1532,785,1532,785,1570,741,1570,741,1593,721,1593,721,1570,710,1570,Q,704,1543,704,1532,L,683,1532,683,1502,680,1501,666,1501,666,1532,617,1532,617,1559,Q,619,1560,622,1566,L,622,1587,593,1587,593,1620,534,1620,534,1641,503,1641,Q,500,1637,500,1621,L,452,1620,Q,452,1600,449,1590,L,413,1590,413,1620,340,1620,340,1637,274,1637,274,1685,213,1685,213,1716,189,1716,189,1773,Q,197,1773,213,1783,L,213,1846,250,1848,250,1996,Q,247,2047,277,2045,279,2071,280,2125,302,2118,302,2144,L,301,2189,321,2189,325,2220,325,2280,Q,347,2280,355,2281,357,2309,360,2363,L,413,2363,413,2329,447,2329,447,2305,489,2305,491,2273,506,2273,508,2299,554,2299,554,2329,584,2329,584,2299,601,2299,604,2275,632,2275,632,2243,666,2243,666,2188,Q,684,2187,693,2190,L,693,2158,Q,728,2175,727,2137,L,726,2074,745,2074,745,2049,847,2039,847,1943,Q,813,1940,811,1938,L,811,1827,830,1827,830,1740,845,1740,Q,847,1757,850,1780,854,1777,898,1774,L,898,1733,Q,924,1733,951,1737,L,1022,1737,1022,1699,Q,993,1689,986,1689,L,986,1649,1036,1649,1036,1599,1070,1599,1070,1565,1180,1565,1180,1538,1288,1538,Q,1289,1516,1289,1487,1264,1489,1267,1448,1268,1409,1241,1417,L,1241,1365,Z]],label:"Franklin District",shortLabel:"FK",labelPosition:[54.4,186.3],labelAlignment:[CEN,MID]},12:{outlines:[[M,2075,522,L,2075,559,1989,559,1989,607,Q,1926,607,1904,610,1918,655,1854,648,L,1854,682,1820,682,1820,648,1806,648,1806,512,1717,512,1717,488,1683,488,1683,440,1700,440,1700,461,1744,461,Q,1748,449,1748,405,L,1752,357,1713,357,1713,326,1698,326,Q,1684,333,1630,333,L,1630,299,1662,299,1662,248,1691,248,1691,222,Q,1688,214,1689,190,L,1622,190,Q,1622,99,1585,110,1588,120,1577,132,L,1534,132,1534,113,1492,113,1492,68,1473,68,1473,39,1373,39,1373,71,1342,71,Q,1333,68,1312,68,L,1312,150,1342,150,Q,1322,238,1402,238,L,1402,259,1448,259,Q,1441,274,1470,290,1483,297,1485,330,L,1516,330,1516,347,1570,347,1570,372,1524,372,1524,497,1495,497,1495,555,1521,555,1524,566,1524,582,1555,582,1555,661,1588,661,1588,688,1628,688,1628,712,1604,712,1604,736,1540,736,Q,1540,675,1537,648,L,1509,648,1509,633,Q,1485,633,1473,627,L,1473,600,1431,600,1431,630,1455,630,1455,667,1516,667,1516,752,Q,1506,749,1492,749,L,1492,849,1458,849,1458,910,1482,913,Q,1485,927,1482,951,1483,970,1509,968,L,1509,992,Q,1537,985,1541,1005,1544,1016,1543,1056,1568,1062,1577,1062,L,1577,1093,1616,1093,1616,1160,Q,1613,1165,1609,1168,L,1609,1196,1638,1196,1638,1334,Q,1627,1339,1613,1339,L,1613,1376,Q,1619,1379,1630,1379,1627,1393,1628,1424,L,1662,1424,1662,1464,Q,1659,1479,1659,1511,L,1655,1511,1655,1531,1687,1531,1687,1664,1706,1664,1706,1686,1721,1686,1724,1654,1765,1654,1765,1715,1745,1715,1745,1771,1789,1771,1789,1734,1806,1734,1806,1771,2043,1771,2043,1742,2147,1742,2147,1681,2169,1681,2169,1652,2208,1652,2208,1596,2224,1595,Q,2220,1581,2220,1557,2219,1502,2235,1494,L,2235,1440,2210,1440,2210,1402,Q,2217,1402,2231,1388,L,2231,1235,2176,1235,2176,1260,Q,2167,1257,2142,1257,L,2142,1226,2163,1226,Q,2151,1196,2197,1171,L,2197,1001,2171,1001,2171,954,2152,954,2147,806,2129,806,2129,827,2079,827,2079,797,2023,797,2023,824,1955,824,1955,878,Q,1959,878,1959,874,L,1969,874,1969,916,1942,916,1942,950,1969,950,1969,973,1926,973,1926,930,1887,930,1888,840,1931,840,1931,743,1976,743,1976,721,2037,721,2037,661,Q,2048,661,2048,665,L,2069,665,2069,637,2091,637,2091,665,2142,665,2142,593,2108,593,2108,522,Z]],label:"Thames-Coromandel District",shortLabel:"TC",labelPosition:[187.1,129.5],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"waikato",type:"maps"}}})});