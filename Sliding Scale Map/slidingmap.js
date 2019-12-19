FusionCharts.ready(function() {
  var salesMap = new FusionCharts({
    type: 'maps/usa',
    renderAt: 'chart-container',
    width: '600',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      "chart": {
        "caption": "College/University In-State Tuition Information",
        "subcaption": "2017",
        "entityFillHoverColor": "#cccccc",
        "numberPrefix": "$",
        "showLabels": "1",
        "theme": "fusion"
      },
      "colorrange": {
        "minvalue": "0",
        "startlabel": "Low",
        "endlabel": "High",
        "code": "#e44a00",
        "gradient": "1",
        "color": [{
          "maxvalue": "14835",
          "displayvalue": "Average",
          "code": "#f8bd19"
        }, {
          "maxvalue": "60000",
          "code": "#6baa01"
        }]
      },
      "data": [{
        "id": "HI",
        "value": "3189",
        "link": "j-drillDownState-HI|Hawaii"
      }, {
        "id": "DC",
        "value": "2879",
        "link": "j-drillDownState-DC|District of Columbia"
      }, {
        "id": "MD",
        "value": "33592",
        "link": "j-drillDownState-MD|Maryland"
      }, {
        "id": "DE",
        "value": "4607",
        "link": "j-drillDownState-DE|Delaware"
      }, {
        "id": "RI",
        "value": "4890",
        "link": "j-drillDownState-RI|Rhode Island"
      }, {
        "id": "WA",
        "value": "34927",
        "link": "j-drillDownState-WA|Washington"
      }, {
        "id": "OR",
        "value": "65798",
        "link": "j-drillDownState-OR|Oregon"
      }, {
        "id": "CA",
        "value": "61861",
        "link": "j-drillDownState-CA|California"
      }, {
        "id": "AK",
        "value": "58911",
        "link": "j-drillDownState-AK|Alaska"
      }, {
        "id": "ID",
        "value": "42662",
        "link": "j-drillDownState-ID|Idaho"
      }, {
        "id": "NV",
        "value": "78041",
        "link": "j-drillDownState-NV|Nevada"
      }, {
        "id": "AZ",
        "value": "41558",
        "link": "j-drillDownState-AZ|Arizona"
      }, {
        "id": "MT",
        "value": "62942",
        "link": "j-drillDownState-MT|Montana"
      }, {
        "id": "WY",
        "value": "78834",
        "link": "j-drillDownState-WY|Wyoming"
      }, {
        "id": "UT",
        "value": "50512",
        "link": "j-drillDownState-UT|Utah"
      }, {
        "id": "CO",
        "value": "73026",
        "link": "j-drillDownState-CO|Colorado"
      }, {
        "id": "NM",
        "value": "78865",
        "link": "j-drillDownState-NM|New Mexico"
      }, {
        "id": "ND",
        "value": "50554",
        "link": "j-drillDownState-ND|North Dakota"
      }, {
        "id": "SD",
        "value": "35922",
        "link": "j-drillDownState-SD|South Dakota"
      }, {
        "id": "NE",
        "value": "43736",
        "link": "j-drillDownState-NE|Nebraska"
      }, {
        "id": "KS",
        "value": "32681",
        "link": "j-drillDownState-KS|Kansas"
      }, {
        "id": "OK",
        "value": "79038",
        "link": "j-drillDownState-OK|Oklahoma"
      }, {
        "id": "TX",
        "value": "97344",
        "link": "j-drillDownState-TX|Texas"
      }, {
        "id": "MN",
        "value": "43485",
        "link": "j-drillDownState-MN|Minnesota"
      }, {
        "id": "IA",
        "value": "46515",
        "link": "j-drillDownState-IA|Iowa"
      }, {
        "id": "MO",
        "value": "63715",
        "link": "j-drillDownState-MO|Missouri"
      }, {
        "id": "AR",
        "value": "34497",
        "link": "j-drillDownState-AR|Arkansas"
      }, {
        "id": "LA",
        "value": "70706",
        "link": "j-drillDownState-LA|Louisiana"
      }, {
        "id": "WI",
        "value": "42382",
        "link": "j-drillDownState-WI|Wisconsin"
      }, {
        "id": "IL",
        "value": "73202",
        "link": "j-drillDownState-IL|Illinois"
      }, {
        "id": "KY",
        "value": "79118",
        "link": "j-drillDownState-KY|Kentucky"
      }, {
        "id": "TN",
        "value": "44657",
        "link": "j-drillDownState-TN|Tennessee"
      }, {
        "id": "MS",
        "value": "66205",
        "link": "j-drillDownState-MS|Mississippi"
      }, {
        "id": "AL",
        "value": "75873",
        "link": "j-drillDownState-AL|Alabama"
      }, {
        "id": "GA",
        "value": "76895",
        "link": "j-drillDownState-GA|Georgia"
      }, {
        "id": "MI",
        "value": "67695",
        "link": "j-drillDownState-MI|Michigan"
      }, {
        "id": "IN",
        "value": "920",
        "link": "j-drillDownState-IN|Indiana"
      }, {
        "id": "OH",
        "value": "32960",
        "link": "j-drillDownState-OH|Ohio"
      }, {
        "id": "PA",
        "value": "54346",
        "link": "j-drillDownState-PA|Pennsylvania"
      }, {
        "id": "NY",
        "value": "42828",
        "link": "j-drillDownState-NY|New York"
      }, {
        "id": "VT",
        "value": "77411",
        "link": "j-drillDownState-VT|Vermont"
      }, {
        "id": "NH",
        "value": "51403",
        "link": "j-drillDownState-NH|New Hampshire"
      }, {
        "id": "ME",
        "value": "64636",
        "link": "j-drillDownState-ME|Maine"
      }, {
        "id": "MA",
        "value": "51767",
        "link": "j-drillDownState-MA|Massachusetts"
      }, {
        "id": "CT",
        "value": "57353",
        "link": "j-drillDownState-CT|Connecticut"
      }, {
        "id": "NJ",
        "value": "80788",
        "link": "j-drillDownState-NJ|New Jersey"
      }, {
        "id": "WV",
        "value": "95890",
        "link": "j-drillDownState-WV|West Virginia"
      }, {
        "id": "VA",
        "value": "83140",
        "link": "j-drillDownState-VA|Virginia"
      }, {
        "id": "NC",
        "value": "75425",
        "link": "j-drillDownState-NC|North Carolina"
      }, {
        "id": "SC",
        "value": "88234",
        "link": "j-drillDownState-SC|South Carolina"
      }, {
        "id": "FL",
        "value": "88234",
        "link": "j-drillDownState-FL|Florida"
      }]
    },
    "events": {
      "renderComplete": function() {
        //Function that gets invoked when entity is clicked.
        function drillDownState(stateName) {
          //Get the name of state that was clicked
          var names = stateName && stateName.split('|'),
            sn = names && names[0],
            ln = names && names[1];
          //If Washington, do special case (just for example)
          if ((sn === 'WA' && ln === 'Washington')) {
            window.open("https://www.google.com/maps/place/USA-" + sn);
          } else {
            window.open("https://www.google.com/maps/place/USA-" + ln);
          }

        }
        //expose to the window scope
        window.drillDownState = drillDownState;
      }
    }
  }).render();
});
