(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=12)})({12:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(13);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},13:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright InfoSoft Global Pvt. Ltd.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author InfoSoft Global Pvt. Ltd.
 * @meta package_map_pack
 * @id fusionmaps.CagayanValley.1.03-02-2017 04:08:28
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"CagayanValley",revision:1,standaloneInit:true,baseWidth:200,baseHeight:600,baseScaleFactor:10,entities:{"PH.CA.BN":{outlines:[[M,1207,759,Q,1198,758,1198,752,1198,746,1197,744,L,1193,744,Q,1187,755,1187,762,L,1190,778,Q,1196,778,1200,775,1202,772,1207,768,Z],[M,1243,725,Q,1237,725,1228,739,1221,753,1221,760,1221,768,1230,772,1238,776,1238,789,1238,792,1237,801,1235,812,1235,818,1235,823,1240,826,1243,827,1251,830,1255,802,1269,799,1281,797,1281,775,1281,759,1261,747,1254,742,1251,732,Q,1248,725,1243,725,Z],[M,1325,302,Q,1316,302,1316,323,1316,327,1330,327,L,1330,326,Q,1333,325,1334,323,1334,323,1334,319,Q,1334,302,1325,302,Z],[M,1418,567,Q,1414,567,1411,569,1407,574,1404,574,1395,574,1391,574,1387,574,1384,578,1379,585,1367,586,1358,586,1358,593,1358,599,1363,603,1367,607,1367,615,1367,628,1334,664,1321,669,1316,684,1312,694,1312,715,1312,722,1318,723,1325,724,1330,726,1335,727,1342,727,1346,722,1352,703,1353,703,1366,703,1374,703,1377,698,L,1377,687,Q,1371,687,1368,687,1367,687,1367,683,L,1367,673,Q,1347,674,1347,666,1380,632,1383,625,1388,613,1405,611,1420,610,1422,599,1431,599,1433,599,1436,598,1436,592,L,1434,576,Q,1427,578,1424,572,Q,1422,567,1418,567,Z],[M,1206,236,Q,1204,241,1184,267,1166,288,1166,299,L,1166,308,Q,1177,306,1177,313,1177,317,1177,326,1182,330,1201,330,1199,322,1221,305,1245,286,1245,279,1245,259,1247,256,1251,253,1261,250,1266,248,1266,241,1266,235,1262,231,1257,228,1257,218,1257,214,1262,204,1268,197,1268,190,1268,180,1268,179,1265,173,1260,175,1259,162,1257,160,L,1247,160,Q,1240,160,1239,166,1239,172,1224,174,1228,190,1220,206,Q,1207,230,1206,236,Z],[M,1309,64,L,1326,64,Q,1326,63,1330,56,1335,50,1335,47,1335,36,1321,36,1310,36,1309,37,1305,39,1305,51,Q,1305,63,1309,64,Z]],label:"Batanes",shortLabel:"BN",labelPosition:[73.3,27.7],labelAlignment:[RGT,MID],labelConnectors:[[M,733,277,L,1213,277]]},"PH.CA.CG":{outlines:[[M,594,2419,Q,591,2420,588,2424,587,2428,583,2431,578,2434,578,2437,578,2444,588,2445,593,2445,600,2443,L,600,2443,Q,601,2437,605,2434,L,605,2417,604,2417,Z],[M,726,2396,Q,724,2396,720,2402,719,2408,716,2408,714,2408,709,2402,703,2396,697,2396,694,2396,691,2400,689,2406,682,2406,674,2407,670,2410,665,2414,659,2414,L,635,2411,Q,632,2411,631,2413,629,2414,625,2423,621,2429,617,2429,616,2429,616,2435,616,2441,619,2441,624,2441,628,2449,630,2454,637,2454,641,2454,650,2454,L,696,2454,Q,700,2441,707,2441,L,748,2441,Q,753,2441,761,2441,765,2441,768,2433,770,2424,807,2429,814,2430,818,2427,819,2426,821,2421,823,2417,828,2416,836,2414,837,2414,L,837,2409,809,2409,Q,805,2409,799,2404,795,2399,792,2399,781,2399,777,2385,775,2377,767,2376,760,2376,760,2379,748,2379,748,2380,744,2380,743,2387,740,2393,738,2394,Q,731,2394,726,2396,Z],[M,547,2289,Q,547,2295,549,2297,550,2297,557,2297,L,567,2295,Q,570,2292,571,2292,573,2290,573,2288,571,2277,567,2277,561,2283,557,2284,Q,547,2285,547,2289,Z],[M,571,2098,Q,569,2098,563,2091,557,2084,553,2084,547,2084,544,2104,543,2112,543,2128,540,2133,538,2136,534,2142,534,2150,L,534,2173,Q,534,2174,534,2196,534,2203,536,2207,539,2209,544,2212,546,2213,546,2216,547,2222,549,2223,L,558,2226,Q,571,2227,571,2243,571,2247,571,2251,L,571,2253,Q,584,2257,591,2256,593,2249,593,2243,593,2235,586,2233,577,2232,577,2223,577,2219,584,2215,590,2213,590,2203,590,2199,588,2192,587,2184,586,2182,583,2182,581,2182,579,2182,577,2179,575,2175,576,2165,577,2149,571,2137,563,2125,563,2117,563,2113,567,2107,Q,571,2100,571,2098,Z],[M,853,1851,Q,853,1852,852,1857,849,1862,846,1862,840,1862,840,1857,842,1851,842,1849,831,1854,823,1846,813,1839,808,1839,798,1840,787,1839,773,1837,768,1837,767,1827,767,1825,765,1824,757,1824,748,1824,748,1835,748,1849,743,1858,740,1860,734,1859,724,1857,721,1858,716,1856,711,1857,704,1858,703,1864,L,703,1869,Q,707,1869,711,1874,713,1877,716,1881,716,1883,730,1885,735,1885,741,1893,744,1897,748,1899,748,1900,748,1906,L,747,1927,Q,747,1929,761,1940,765,1947,770,1947,774,1947,781,1947,784,1947,789,1950,795,1954,795,1959,795,1968,812,1968,816,1968,818,1967,819,1965,823,1965,828,1965,830,1968,835,1976,835,1976,837,1980,840,1980,843,1980,849,1980,853,1980,856,1984,857,1988,860,1988,863,1988,863,1980,863,1973,868,1971,L,871,1967,Q,873,1965,877,1965,L,889,1967,Q,897,1967,901,1964,904,1961,904,1955,904,1941,897,1938,888,1934,888,1927,887,1921,883,1919,877,1918,876,1916,873,1913,873,1898,873,1892,880,1889,886,1888,886,1876,L,884,1864,Q,884,1860,880,1858,876,1856,876,1852,874,1837,871,1831,869,1831,869,1832,L,869,1848,Q,863,1846,860,1846,Q,854,1846,853,1851,Z],[M,879,1774,Q,876,1773,876,1769,L,874,1757,Q,868,1757,868,1766,867,1776,866,1778,L,866,1786,Q,869,1786,876,1788,881,1788,881,1779,Q,881,1776,879,1774,Z],[M,1662,2859,Q,1662,2847,1659,2843,1650,2831,1646,2825,L,1645,2825,Q,1643,2832,1631,2833,L,1592,2833,Q,1587,2833,1585,2829,1585,2825,1581,2825,1576,2825,1574,2833,1571,2839,1570,2845,L,1560,2845,Q,1558,2852,1565,2853,1572,2854,1572,2858,1572,2863,1568,2873,1562,2887,1554,2891,1551,2894,1544,2911,1535,2928,1535,2932,1535,2937,1540,2940,1544,2944,1544,2948,L,1544,2988,Q,1544,2991,1544,2993,1540,3e3,1534,3e3,1527,3e3,1520,2996,1518,2994,1517,2993,1514,2991,1512,2991,1510,2991,1507,2993,1501,2997,1490,3013,1473,3036,1471,3039,1469,3039,1462,3050,1457,3057,1452,3058,1445,3058,1441,3066,1438,3068,1433,3077,1422,3093,1385,3108,1352,3122,1332,3122,1321,3122,1271,3108,1233,3098,1214,3092,L,1051,3027,Q,962,2995,893,2956,876,2944,843,2924,802,2898,785,2886,781,2883,769,2878,758,2873,755,2870,751,2864,747,2862,740,2856,728,2858,716,2862,699,2849,678,2833,666,2826,648,2817,641,2812,630,2806,614,2795,587,2773,586,2771,575,2762,563,2751,553,2737,538,2730,519,2724,506,2718,482,2712,475,2706,468,2702,455,2702,448,2703,444,2703,L,442,2703,Q,416,2703,411,2709,410,2717,406,2723,400,2734,390,2734,373,2734,367,2726,360,2718,353,2718,342,2718,340,2727,338,2738,326,2738,317,2738,312,2739,305,2742,299,2751,L,298,2751,299,2770,287,2820,Q,287,2835,285,2843,284,2849,279,2872,L,279,2904,312,2904,Q,317,2901,319,2891,319,2882,320,2879,328,2882,332,2877,336,2872,336,2866,336,2857,342,2856,L,353,2854,Q,360,2850,361,2828,361,2809,380,2817,382,2811,382,2808,L,402,2808,Q,423,2811,424,2832,424,2845,420,2866,419,2878,434,2878,442,2878,453,2877,465,2880,489,2894,495,2897,522,2911,546,2924,559,2930,611,2948,619,2973,625,2980,633,2986,644,2995,654,2995,666,2994,691,3008,720,3024,763,3044,764,3044,801,3061,822,3072,832,3084,840,3093,840,3107,840,3126,842,3130,847,3148,853,3159,857,3165,857,3174,857,3183,854,3191,850,3200,849,3212,848,3220,848,3233,848,3241,848,3254,848,3271,832,3299,816,3328,816,3330,816,3336,818,3342,819,3344,819,3346,819,3348,821,3350,818,3364,799,3374,L,763,3395,Q,757,3400,753,3414,748,3431,744,3438,741,3442,731,3459,720,3476,719,3483,700,3517,697,3523,694,3530,692,3543,690,3558,687,3564,669,3604,648,3639,655,3639,670,3640,683,3640,692,3639,711,3633,726,3657,L,757,3694,Q,775,3714,779,3732,781,3736,781,3738,781,3745,781,3759,781,3768,781,3774,781,3782,781,3786,790,3785,790,3793,L,789,3809,Q,794,3809,799,3810,802,3810,811,3792,L,829,3792,Q,852,3824,888,3856,L,923,3885,Q,927,3890,938,3901,948,3913,955,3917,999,3955,1013,3974,1016,3979,1027,3986,1044,3984,1091,3983,1135,3983,1150,3975,1157,3972,1179,3972,1191,3971,1211,3971,1219,3971,1235,3965,1251,3959,1268,3959,L,1298,3959,Q,1302,3959,1313,3955,1324,3951,1330,3951,1349,3953,1373,3951,1407,3948,1429,3948,L,1602,3948,Q,1602,3942,1602,3936,1602,3928,1596,3921,1589,3914,1589,3912,1589,3908,1593,3907,1595,3904,1595,3900,1595,3893,1589,3891,1581,3890,1578,3875,1577,3870,1570,3861,L,1564,3851,Q,1564,3841,1574,3838,1584,3835,1584,3826,1584,3802,1576,3791,1570,3779,1570,3778,1570,3776,1573,3769,1576,3763,1576,3758,1576,3752,1564,3734,1552,3715,1552,3711,1552,3687,1552,3677,1552,3674,1548,3673,1544,3670,1544,3667,1543,3663,1543,3649,1543,3633,1556,3628,1570,3624,1570,3621,1570,3618,1561,3615,1552,3612,1552,3606,1552,3598,1562,3595,1569,3592,1578,3591,1577,3586,1574,3584,1571,3583,1571,3581,L,1570,3558,Q,1570,3546,1587,3537,1604,3527,1604,3519,1604,3514,1595,3510,1587,3509,1587,3499,1587,3467,1587,3464,1584,3441,1588,3431,1589,3426,1596,3421,1601,3417,1601,3410,1601,3401,1591,3394,1581,3385,1581,3377,1581,3367,1585,3365,1591,3363,1591,3357,1591,3349,1584,3345,1576,3340,1576,3326,1576,3312,1585,3311,1595,3310,1593,3284,1608,3287,1613,3278,1623,3265,1626,3264,1622,3237,1654,3231,L,1678,3224,Q,1684,3223,1684,3214,1686,3204,1687,3201,1690,3197,1706,3186,1717,3177,1721,3169,1718,3156,1731,3149,1746,3141,1744,3122,1746,3119,1753,3110,1759,3102,1758,3094,1758,3087,1759,3080,1762,3073,1762,3066,1762,3060,1759,3055,1755,3050,1755,3044,1753,3037,1747,3034,1742,3032,1742,3027,1742,3019,1748,3018,1753,3016,1753,3010,1753,3008,1748,3002,1744,2998,1744,2992,1742,2980,1735,2974,1714,2954,1703,2945,1691,2935,1683,2928,1674,2920,1668,2915,1663,2911,1659,2896,1653,2881,1653,2879,1653,2877,1657,2872,Q,1662,2866,1662,2859,Z],[M,1568,2761,L,1562,2760,Q,1554,2760,1548,2763,1540,2767,1538,2771,1537,2771,1527,2779,1518,2785,1518,2788,1518,2796,1521,2796,1523,2796,1532,2794,1540,2791,1540,2802,1540,2812,1524,2833,1524,2840,1529,2840,L,1532,2840,Q,1532,2838,1531,2835,1533,2833,1537,2833,1540,2832,1540,2825,1540,2821,1543,2820,1543,2819,1547,2819,1553,2818,1554,2812,1554,2803,1554,2801,1557,2802,1562,2801,1570,2798,1570,2792,Q,1568,2778,1568,2761,Z],[M,1293,2281,Q,1288,2288,1285,2289,1276,2290,1275,2290,1274,2291,1272,2297,1272,2301,1268,2302,L,1260,2307,1261,2339,Q,1261,2352,1252,2355,1244,2355,1244,2360,1244,2365,1251,2367,1252,2367,1254,2371,1255,2376,1255,2377,1260,2382,1264,2386,1265,2388,1265,2394,1265,2408,1257,2408,1252,2408,1251,2413,1247,2419,1243,2420,1241,2421,1231,2421,1225,2421,1224,2424,1221,2428,1216,2433,1214,2435,1214,2440,1214,2447,1219,2449,1221,2450,1223,2457,1223,2460,1223,2466,1223,2474,1225,2474,1231,2477,1233,2479,1239,2488,1241,2488,1242,2488,1247,2485,1251,2482,1251,2478,1252,2474,1257,2474,1264,2471,1264,2470,1266,2467,1266,2458,1265,2449,1266,2448,1266,2445,1265,2443,1265,2440,1268,2438,1269,2438,1274,2438,1276,2438,1278,2437,1281,2435,1281,2428,1281,2420,1282,2419,1284,2417,1293,2417,1299,2417,1301,2416,1302,2414,1310,2410,1316,2406,1320,2402,1332,2387,1335,2385,1340,2380,1354,2380,L,1354,2376,Q,1343,2373,1341,2371,1341,2370,1341,2362,1341,2351,1344,2349,1349,2345,1363,2346,L,1371,2346,Q,1373,2346,1376,2339,1378,2335,1383,2333,1385,2332,1391,2331,L,1391,2326,Q,1387,2316,1371,2316,1367,2311,1363,2310,1358,2308,1357,2301,1354,2294,1347,2293,1340,2290,1340,2287,1339,2277,1334,2275,1330,2274,1324,2274,1308,2274,1302,2275,Q,1297,2275,1293,2281,Z],[M,1374,1634,L,1374,1619,1360,1619,Q,1359,1627,1358,1629,1354,1634,1350,1634,1344,1634,1337,1636,1330,1638,1327,1638,L,1317,1637,Q,1312,1637,1310,1641,1308,1645,1301,1646,1298,1647,1289,1647,1286,1647,1286,1650,L,1288,1655,1291,1655,Q,1292,1658,1291,1667,1291,1674,1296,1677,1299,1679,1308,1686,1315,1692,1317,1695,1323,1703,1326,1705,1327,1706,1332,1708,1335,1708,1339,1712,L,1352,1724,Q,1358,1729,1363,1729,1367,1723,1373,1708,1381,1692,1394,1691,L,1394,1678,Q,1387,1674,1387,1662,1387,1651,1393,1640,L,1393,1636,Q,1387,1634,1374,1634,Z]],label:"Cagayan",shortLabel:"CG",labelPosition:[114.6,352.2],labelAlignment:[CEN,MID]},"PH.CA.IB":{outlines:[[M,1601,3951,Q,1601,3950,1602,3948,L,1429,3948,Q,1407,3948,1373,3951,1349,3953,1330,3951,1324,3951,1313,3955,1302,3959,1298,3959,L,1268,3959,Q,1251,3959,1235,3965,1219,3971,1211,3971,1191,3971,1179,3972,1157,3972,1150,3975,1135,3983,1091,3983,1044,3984,1027,3986,1029,3987,1031,3987,1041,3994,1041,4e3,L,1042,4042,Q,1042,4045,1042,4049,1043,4056,1040,4061,1033,4061,1030,4065,1029,4065,1029,4069,1029,4070,1029,4073,1026,4079,1022,4081,1021,4081,1016,4081,1007,4081,1005,4085,1e3,4091,999,4091,979,4092,979,4095,978,4098,975,4108,975,4112,971,4116,968,4119,966,4126,966,4130,965,4140,964,4147,955,4159,955,4175,951,4184,950,4189,944,4201,940,4208,938,4210,937,4214,937,4219,937,4225,927,4239,924,4247,924,4258,L,924,4267,Q,917,4270,915,4275,911,4282,910,4292,910,4300,910,4314,910,4316,910,4317,907,4485,909,4491,909,4494,910,4494,911,4498,915,4501,921,4504,921,4520,921,4524,920,4532,920,4540,921,4543,923,4549,929,4552,934,4556,934,4560,L,931,4583,Q,931,4593,938,4606,946,4618,946,4630,946,4667,937,4668,929,4670,928,4671,926,4674,924,4675,923,4680,921,4682,917,4684,910,4684,901,4685,900,4685,900,4692,900,4708,898,4723,890,4725,888,4726,887,4735,887,4737,887,4745,L,871,4755,854,4755,Q,849,4755,845,4757,843,4757,835,4763,830,4766,827,4770,822,4776,822,4777,819,4778,805,4780,804,4780,802,4780,777,4780,768,4783,753,4786,746,4794,740,4806,733,4811,726,4817,714,4818,702,4820,692,4824,680,4828,680,4840,682,4845,682,4858,682,4864,680,4867,692,4871,697,4878,702,4882,709,4894,711,4897,720,4906,729,4915,732,4922,738,4932,740,4954,741,4967,744,4990,L,816,4989,Q,825,4989,839,4989,864,4989,909,4990,918,4997,938,5022,956,5048,969,5060,981,5073,996,5092,1005,5103,1025,5128,1049,5155,1087,5216,1118,5267,1122,5267,1131,5267,1135,5262,1138,5257,1146,5252,1156,5246,1163,5240,1170,5236,1181,5232,1190,5228,1198,5225,1210,5218,1235,5203,1259,5189,1279,5182,1285,5179,1370,5137,1448,5100,1453,5100,L,1666,5102,Q,1672,5102,1676,5102,1681,5096,1692,5087,1718,5066,1725,5049,1729,5035,1732,5028,1737,5012,1745,5002,1749,4997,1758,4980,1767,4958,1770,4953,1785,4927,1820,4864,1870,4790,1870,4780,1870,4776,1867,4769,1864,4762,1864,4759,1864,4749,1868,4746,1874,4743,1877,4732,1874,4722,1886,4708,1898,4691,1898,4682,1898,4679,1894,4675,1890,4673,1890,4668,1890,4662,1894,4660,1899,4658,1899,4643,1901,4640,1905,4639,1911,4637,1911,4634,L,1914,4619,Q,1914,4609,1906,4606,1898,4603,1898,4589,1898,4583,1901,4582,1905,4579,1909,4573,1911,4571,1912,4552,L,1933,4519,Q,1942,4514,1943,4500,1945,4485,1952,4480,1960,4471,1966,4445,L,1962,4436,Q,1958,4429,1958,4423,L,1956,4399,1949,4399,Q,1936,4407,1932,4420,1929,4427,1919,4427,1912,4427,1908,4421,L,1899,4421,Q,1901,4424,1898,4429,1897,4435,1894,4436,1890,4436,1886,4436,1882,4439,1878,4439,1874,4439,1872,4430,1870,4420,1867,4418,1854,4396,1853,4395,1844,4389,1841,4383,1837,4377,1837,4364,1837,4352,1848,4343,1860,4333,1860,4314,1860,4308,1857,4306,1853,4305,1851,4296,1850,4292,1850,4279,1851,4268,1851,4267,1851,4244,1853,4239,1855,4222,1867,4228,L,1868,4258,1870,4259,Q,1878,4238,1878,4235,1878,4228,1875,4227,1870,4224,1870,4221,1866,4212,1861,4212,1855,4214,1853,4214,1851,4214,1848,4212,1845,4210,1841,4210,1840,4212,1839,4222,1837,4230,1834,4230,1826,4230,1820,4227,1816,4222,1816,4218,1816,4212,1816,4211,L,1826,4209,Q,1824,4204,1813,4203,1805,4201,1805,4195,1805,4187,1812,4186,1817,4186,1831,4184,L,1831,4201,1846,4201,1846,4208,1851,4208,Q,1854,4205,1854,4203,1854,4198,1847,4189,1839,4180,1837,4171,1820,4171,1810,4164,L,1803,4157,Q,1800,4157,1797,4167,1795,4177,1791,4177,1787,4177,1783,4171,1781,4164,1775,4164,1758,4164,1750,4167,1748,4167,1745,4175,1742,4183,1738,4183,1732,4183,1727,4177,1722,4171,1717,4170,1709,4167,1710,4147,1701,4144,1701,4144,1698,4144,1693,4152,1689,4160,1686,4160,1680,4160,1676,4152,1672,4144,1671,4144,1668,4140,1663,4139,1662,4137,1662,4133,1662,4125,1667,4125,1671,4125,1671,4119,1671,4112,1660,4109,1650,4106,1650,4100,1650,4098,1659,4094,1664,4092,1664,4082,1664,4078,1650,4062,1634,4048,1632,4041,1628,4026,1613,3991,L,1612,3990,Q,1601,3987,1598,3983,1598,3982,1598,3970,Q,1598,3960,1601,3951,Z]],label:"Isabela",shortLabel:"IB",labelPosition:[139.5,460.7],labelAlignment:[CEN,MID]},"PH.CA.NV":{outlines:[[M,697,4878,Q,692,4871,680,4867,678,4871,674,4874,665,4881,662,4892,660,4898,656,4913,653,4925,645,4926,641,4926,638,4927,632,4927,630,4930,624,4946,618,4947,615,4949,600,4958,587,4967,580,4969,575,4970,539,4983,522,4988,501,4984,L,415,4994,Q,404,4997,386,5004,373,5009,360,5008,343,5005,338,5005,328,5007,317,5012,303,5018,276,5021,263,5022,251,5027,242,5031,233,5031,L,207,5031,207,5030,Q,204,5039,192,5059,183,5079,186,5096,186,5099,188,5100,L,186,5162,Q,186,5167,189,5175,192,5185,192,5192,192,5218,188,5226,175,5246,165,5270,165,5273,159,5291,155,5303,151,5308,146,5312,143,5324,142,5334,135,5338,128,5343,117,5343,104,5342,96,5342,88,5342,83,5352,76,5370,74,5372,71,5375,67,5392,64,5396,56,5405,56,5406,56,5413,56,5420,52,5423,47,5425,42,5428,40,5430,40,5436,40,5443,45,5446,52,5450,52,5454,L,52,5479,Q,56,5482,60,5484,70,5487,77,5494,82,5498,100,5500,118,5503,125,5508,127,5511,134,5514,140,5516,143,5519,147,5523,147,5529,148,5536,151,5539,151,5543,154,5562,155,5573,165,5577,L,204,5577,Q,206,5577,210,5572,213,5567,221,5567,L,243,5567,Q,278,5566,291,5561,302,5558,326,5558,332,5558,336,5560,343,5564,351,5566,353,5566,367,5566,375,5564,379,5569,384,5573,394,5574,406,5575,410,5577,430,5584,437,5586,L,462,5586,Q,468,5584,472,5587,476,5590,485,5596,488,5597,499,5601,505,5603,508,5610,509,5614,508,5622,508,5627,508,5636,508,5655,513,5693,518,5724,516,5747,513,5775,525,5805,534,5835,554,5856,564,5874,583,5900,587,5907,594,5926,600,5943,605,5951,608,5953,608,5955,720,5875,808,5794,786,5780,768,5766,761,5760,747,5744,731,5729,726,5723,704,5706,675,5679,666,5671,660,5662,658,5660,649,5660,L,646,5640,Q,650,5611,650,5598,650,5584,648,5580,645,5577,645,5564,L,648,5541,Q,648,5539,641,5529,635,5521,635,5502,L,635,5462,Q,636,5448,635,5440,635,5434,633,5433,631,5428,629,5424,628,5419,630,5389,644,5378,656,5372,659,5372,670,5369,682,5366,687,5364,696,5359,720,5348,735,5341,746,5334,751,5331,758,5327,768,5324,774,5320,775,5318,779,5317,784,5314,784,5310,L,784,5297,Q,784,5288,784,5283,784,5276,788,5271,790,5268,790,5256,790,5246,798,5245,L,798,5230,788,5230,788,5223,747,5223,Q,746,5216,741,5209,735,5203,731,5202,721,5201,720,5195,719,5192,719,5181,719,5166,720,5162,721,5162,728,5155,732,5149,732,5146,L,732,5100,Q,733,5087,740,5076,L,740,5046,752,5022,Q,754,5010,754,4990,L,744,4990,Q,741,4967,740,4954,738,4932,732,4922,729,4915,720,4906,711,4897,709,4894,Q,702,4882,697,4878,Z]],label:"Nueva Vizcaya",shortLabel:"NV",labelPosition:[44.7,527.3],labelAlignment:[CEN,MID]},"PH.CA.QR":{outlines:[[M,996,5092,Q,981,5073,969,5060,956,5048,938,5022,918,4997,909,4990,864,4989,839,4989,825,4989,816,4989,L,754,4990,Q,754,5010,752,5022,L,740,5046,740,5076,Q,733,5087,732,5100,L,732,5146,Q,732,5149,728,5155,721,5162,720,5162,719,5166,719,5181,719,5192,720,5195,721,5201,731,5202,735,5203,741,5209,746,5216,747,5223,L,788,5223,788,5230,798,5230,798,5245,Q,790,5246,790,5256,790,5268,788,5271,784,5276,784,5283,784,5288,784,5297,L,784,5310,Q,784,5314,779,5317,775,5318,774,5320,768,5324,758,5327,751,5331,746,5334,735,5341,720,5348,696,5359,687,5364,682,5366,670,5369,659,5372,656,5372,644,5378,630,5389,628,5419,629,5424,631,5428,633,5433,635,5434,635,5440,636,5448,635,5462,L,635,5502,Q,635,5521,641,5529,648,5539,648,5541,L,645,5564,Q,645,5577,648,5580,650,5584,650,5598,650,5611,646,5640,L,649,5660,Q,658,5660,660,5662,666,5671,675,5679,704,5706,726,5723,731,5729,747,5744,761,5760,768,5766,786,5780,808,5794,814,5787,822,5780,840,5763,922,5692,979,5640,1207,5447,1220,5430,1247,5406,1271,5385,1284,5366,1321,5311,1347,5281,1401,5213,1424,5182,1455,5140,1474,5100,L,1453,5100,Q,1448,5100,1370,5137,1285,5179,1279,5182,1259,5189,1235,5203,1210,5218,1198,5225,1190,5228,1181,5232,1170,5236,1163,5240,1156,5246,1146,5252,1138,5257,1135,5262,1131,5267,1122,5267,1118,5267,1087,5216,1049,5155,1025,5128,Q,1005,5103,996,5092,Z]],label:"Quirino",shortLabel:"QR",labelPosition:[93.6,539.1],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"cagayanvalley",type:"maps"}}})});