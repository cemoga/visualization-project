(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=22)})({22:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(23);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},23:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright InfoSoft Global Pvt. Ltd.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author InfoSoft Global Pvt. Ltd.
 * @meta package_map_pack
 * @id fusionmaps.RiverNile.1.06-20-2019 07:53:47
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"RiverNile",revision:1,creditLabel:false,standaloneInit:false,baseWidth:401,baseHeight:700,baseScaleFactor:10,firstEntity:"SD.RN.AH",entities:{"SD.RN.AH":{outlines:[[M,1244,36,Q,1108,36,1048,36,1046,36,1045,36,967,34,932,34,827,36,791,36,L,674,36,Q,657,36,649,36,633,35,625,39,619,42,618,55,618,62,618,76,617,235,616,400,616,403,616,406,475,3457,474,3489,473,3520,475,3541,475,3555,471,3591,469,3626,488,3650,507,3673,545,3719,584,3765,669,3867,754,3968,766,3991,804,4059,804,4171,804,4190,800,4213,797,4232,797,4258,796,4264,797,4271,789,4313,776,4368,766,4424,766,4481,766,4519,768,4557,818,4537,878,4530,914,4526,994,4517,1046,4510,1113,4508,1141,4508,1245,4508,1329,4508,1378,4510,1397,4481,1455,4387,1500,4314,1535,4276,1559,4249,1626,4168,1680,4103,1707,4074,1709,4072,1711,4068,1719,4058,1736,4034,1757,4003,1773,3984,1779,3976,1812,3939,1838,3911,1846,3896,1872,3855,1897,3812,1946,3726,1946,3699,1946,3690,1943,3678,1941,3665,1941,3652,1941,3597,2001,3553,2022,3538,2097,3502,2092,3489,2086,3477,2027,3338,1999,3249,1997,3246,1995,3243,1923,3083,1916,2811,1913,2672,1905,2581,1895,2457,1874,2360,1874,2359,1874,2357,1867,2283,1873,2137,1879,1992,1886,1923,1893,1854,1892,1818,1891,1783,1888,1765,1884,1743,1879,1732,1867,1715,1861,1706,1850,1690,1839,1615,1827,1541,1710,1421,1707,1419,1705,1417,1614,1342,1578,1306,1513,1240,1513,1157,1513,1098,1515,1089,1525,1054,1542,993,1546,979,1571,923,1579,903,1582,844,1582,774,1575,752,1555,706,1528,636,1526,631,1525,628,1515,599,1515,591,1515,562,1561,518,1598,483,1624,470,1649,459,1693,408,1739,353,1739,329,1739,284,1614,189,1605,183,1533,121,1482,78,1442,59,1400,38,1350,36,Q,1287,38,1244,36,Z]],label:"Abu Hamad",shortLabel:"AH",labelPosition:[120,229.6],labelAlignment:[CEN,MID],nextId:"SD.RN.BE"},"SD.RN.BE":{outlines:[[M,2170,3670,Q,2149,3625,2097,3502,2022,3538,2001,3553,1941,3597,1941,3652,1941,3665,1943,3678,1946,3690,1946,3699,1946,3726,1897,3812,1872,3855,1846,3896,1838,3911,1812,3939,1779,3976,1773,3984,1757,4003,1736,4034,1719,4058,1711,4068,1709,4072,1707,4074,1680,4103,1626,4168,1559,4249,1535,4276,1500,4314,1455,4387,1397,4481,1378,4510,1416,4511,1433,4513,1517,4527,1538,4581,1552,4614,1563,4649,1565,4656,1585,4725,1591,4745,1591,4789,1590,4837,1596,4864,L,1789,4857,Q,1966,4837,2125,4836,2165,4836,2220,4829,2245,4825,2273,4820,2322,4812,2848,4756,2853,4756,2857,4755,2950,4744,2976,4740,3047,4730,3106,4712,3086,4684,3060,4643,3009,4565,2929,4505,2840,4427,2757,4375,2673,4322,2565,4276,2548,4269,2460,4247,2409,4235,2383,4199,2332,4127,2296,4022,2294,4020,2294,4018,2259,3958,2232,3841,Q,2193,3720,2170,3670,Z]],label:"Berber",shortLabel:"BE",labelPosition:[207.4,442.1],labelAlignment:[CEN,MID],nextId:"SD.RN.ED"},"SD.RN.ED":{outlines:[[M,1538,4581,Q,1517,4527,1433,4513,1416,4511,1378,4510,1329,4508,1245,4508,1141,4508,1113,4508,1046,4510,994,4517,914,4526,878,4530,818,4537,768,4557,770,4632,779,4706,786,4763,818,4802,851,4841,856,4869,861,4897,777,5021,692,5143,670,5172,660,5185,648,5198,L,654,5198,Q,740,5228,913,5311,1086,5393,1105,5409,1124,5425,1215,5467,1305,5509,1388,5524,1452,5537,1528,5538,1573,5538,1665,5536,1752,5536,1780,5533,1808,5530,1947,5509,1963,5507,1982,5505,2019,5502,2062,5501,2101,5499,2200,5495,2243,5494,2323,5480,2423,5464,2427,5463,2505,5453,2516,5449,2564,5435,2598,5397,2589,5391,2580,5385,2549,5364,2501,5321,2471,5296,2462,5284,2447,5263,2451,5238,2456,5203,2452,5182,2448,5164,2433,5139,2412,5104,2368,5071,2315,5036,2289,5014,2263,4992,2251,4980,2226,4953,2227,4933,2230,4868,2220,4829,2165,4836,2125,4836,1966,4837,1789,4857,L,1596,4864,Q,1590,4837,1591,4789,1591,4745,1585,4725,1565,4656,1563,4649,Q,1552,4614,1538,4581,Z]],label:"Ad Damer",shortLabel:"ED",labelPosition:[148.3,514.9],labelAlignment:[CEN,MID],nextId:"SD.RN.AT"},"SD.RN.AT":{outlines:[[M,3106,4712,Q,3047,4730,2976,4740,2950,4744,2857,4755,2853,4756,2848,4756,2322,4812,2273,4820,2245,4825,2220,4829,2230,4868,2227,4933,2226,4953,2251,4980,2263,4992,2289,5014,2315,5036,2368,5071,2412,5104,2433,5139,2448,5164,2452,5182,2456,5203,2451,5238,2447,5263,2462,5284,2471,5296,2501,5321,2549,5364,2580,5385,2589,5391,2598,5397,2635,5420,2662,5430,2729,5447,2790,5467,2849,5486,2886,5528,2922,5570,3010,5641,3098,5712,3189,5752,3202,5767,3215,5798,3227,5827,3241,5882,3242,5887,3243,5894,3266,5949,3309,6010,3340,6052,3408,6142,3434,6179,3503,6276,3560,6367,3560,6430,3560,6466,3555,6472,L,3555,6497,Q,3555,6497,3556,6498,3576,6507,3599,6531,3634,6565,3661,6569,3687,6573,3762,6536,3838,6498,3872,6454,3906,6411,3907,6410,3925,6386,3932,6376,3945,6353,3949,6332,3965,6246,3966,6136,3965,6013,3965,5944,3965,5941,3966,5939,L,3966,5720,Q,3962,5705,3961,5687,3961,5665,3960,5651,3960,5647,3951,5621,3942,5594,3942,5590,3941,5551,3910,5534,3870,5519,3853,5505,3810,5468,3789,5451,3787,5449,3785,5447,3756,5430,3721,5400,3685,5369,3660,5340,3635,5310,3618,5298,3600,5284,3550,5242,3499,5199,3434,5130,3372,5066,3327,5002,3307,4975,3277,4940,3239,4897,3227,4881,3216,4866,3190,4826,3165,4785,3138,4754,Q,3125,4738,3106,4712,Z]],label:"Atbara",shortLabel:"AT",labelPosition:[309.3,531.9],labelAlignment:[CEN,MID],nextId:"SD.RN.SH"},"SD.RN.SH":{outlines:[[M,2886,5528,Q,2849,5486,2790,5467,2729,5447,2662,5430,2635,5420,2598,5397,2564,5435,2516,5449,2505,5453,2427,5463,2423,5464,2323,5480,2243,5494,2200,5495,2101,5499,2062,5501,2019,5502,1982,5505,1986,5533,1970,5571,1953,5611,1954,5625,1955,5711,1954,5731,1950,5775,1949,5782,1945,5803,1933,5831,1929,5841,1904,5879,1887,5905,1881,5925,1881,5927,1881,5929,1804,6051,1799,6058,1753,6116,1682,6140,1635,6157,1546,6185,1519,6195,1476,6223,1421,6260,1413,6265,1385,6281,1347,6305,1314,6322,1279,6330,1258,6334,1199,6336,1155,6336,1131,6350,1097,6368,1068,6399,1023,6447,1019,6450,994,6472,953,6495,942,6501,928,6516,920,6524,901,6545,917,6553,936,6563,972,6584,1017,6608,1115,6648,1260,6691,1405,6734,1479,6758,1554,6782,1593,6781,1633,6781,1653,6795,1672,6809,1714,6827,1749,6839,1810,6869,1873,6901,1910,6928,1951,6939,1992,6951,2019,6958,2061,6958,2160,6958,2177,6956,2216,6951,2314,6921,2399,6896,2448,6857,2497,6816,2521,6754,2523,6747,2525,6741,2535,6721,2551,6690,2574,6647,2577,6640,2591,6609,2616,6597,2638,6586,2674,6587,2716,6588,2812,6585,2903,6582,2948,6584,3e3,6586,3104,6572,3161,6564,3260,6548,L,3402,6529,Q,3404,6529,3458,6508,3515,6487,3540,6493,3547,6493,3555,6497,L,3555,6472,Q,3560,6466,3560,6430,3560,6367,3503,6276,3434,6179,3408,6142,3340,6052,3309,6010,3266,5949,3243,5894,3242,5887,3241,5882,3227,5827,3215,5798,3202,5767,3189,5752,3098,5712,3010,5641,Q,2922,5570,2886,5528,Z]],label:"Shendi",shortLabel:"SH",labelPosition:[242.6,617.7],labelAlignment:[CEN,MID],nextId:"SD.RN.EM"},"SD.RN.EM":{outlines:[[M,1105,5410,Q,1086,5393,913,5311,739,5229,654,5199,L,647,5199,Q,631,5216,610,5235,574,5270,503,5369,432,5469,365,5586,297,5703,251,5796,209,5879,183,5921,182,5923,115,6023,48,6128,48,6155,48,6179,109,6233,171,6288,181,6302,182,6303,183,6304,251,6383,365,6446,485,6512,580,6515,623,6516,714,6527,784,6536,820,6531,855,6527,900,6546,919,6525,927,6516,941,6502,952,6495,993,6473,1018,6451,1022,6448,1068,6399,1097,6368,1130,6350,1154,6337,1198,6336,1258,6335,1279,6330,1314,6323,1346,6305,1385,6281,1412,6266,1421,6261,1476,6223,1518,6195,1546,6186,1634,6157,1681,6141,1752,6117,1798,6059,1804,6051,1880,5929,1880,5927,1881,5925,1886,5906,1903,5879,1928,5842,1932,5832,1945,5803,1948,5782,1949,5776,1953,5731,1955,5712,1953,5626,1953,5611,1970,5571,1986,5534,1981,5506,1963,5508,1946,5510,1808,5530,1779,5534,1752,5537,1665,5537,1572,5539,1527,5538,1452,5538,1388,5525,1305,5509,1214,5468,Q,1123,5425,1105,5410,Z]],label:"Al Matammah",shortLabel:"EM",labelPosition:[100.3,587.2],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"rivernile",type:"maps"}}})});