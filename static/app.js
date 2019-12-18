function buildSlider(value){
  console.log("Slider value: ", value);
  var data = [
    {
      domain: { x: [0, 1], y: [0, 1] },
      value: value,
      title: { text: "Belly Button Washing Frequency" },
      type: "indicator",
      mode: "gauge+number",
      gauge: {
        axis: { range: [null, 9] },
        steps: [
          { range: [0, 1], color: "#EFE5D6" },
          { range: [1, 2], color: "#F4F1E4" },
          { range: [2, 3], color: "#F4F1E4" },
          { range: [3, 4], color: "#E9E7C9" },
          { range: [4, 5], color: "#E5E7AF" },
          { range: [5, 6], color: "#D5E599" },
          { range: [6, 7], color: "#BDD293" },
          { range: [7, 8], color: "#B7CD8F" },
          { range: [8, 10], color: "#FFFFFF" },
        ],
        threshold: {
          line: { color: "red", width: 4 },
          thickness: 0.75,
          value: value
        }
      }
    }];
  var layout = { width: 600, height: 450, margin: { t: 0, b: 0 } };
  
  Plotly.newPlot("gauge", data, layout);
}

function buildGauge(value){
  console.log("Gauge value ", value);
  var traceA = {
    type: "pie",
    showlegend: false,
    hole: 0.4,
    rotation: 90,
    values: [100 / 6, 100 / 6, 100 / 6, 100 / 6, 100 / 6, 100 / 6, 100],
    text: ["1-2", "3-4", "5-6", "7-8", "9-10", "10+",""],
    direction: "clockwise",
    textinfo: "text",
    textposition: "inside",
    marker: {
      colors: ["rgba(255, 0, 0, 0.6)", "rgba(255, 165, 0, 0.6)", "rgba(255, 255, 0, 0.6)", "rgba(144, 238, 144, 0.6)", "rgba(154, 205, 50, 0.6)", "purple","white"]
    },
    labels: ["1-2", "3-4", "4-5", "5-6", "7-8", "9+",""],
    hovertext: ["1-2", "3-4", "4-5", "5-6", "7-8", "9+",""],
    hoverinfo:"text"
  };

  var degrees = 115, radius = .6;
  var radians = degrees * Math.PI / 180;

  if((value>=1) && (value <=2)){
     var x = .27;
     var y = .55;
  }
  else if ((value >= 3) && (value <= 4)){
    x = .32;
    y = .64;
  }
  else if ((value >= 5) && (value <= 6)){
    x = .42;
    y = .74;
  }
  else if ((value >= 7) && (value <= 8)){
    x = .57;
    y = .74;
  }
  else if ((value >= 9) && (value <= 10)){
    x = .68;
    y = .64;
  }
  else if (value >10){
    x = .63;
    y = .57;
  }
  else{
    x = .25;
    y = .5;
  }
  console.log("x: ",x);
  console.log("y: ",y);
  var layout = {
    shapes:[{
        type: 'line',
        x0: 0.5,
        y0: 0.5,
        x1: x,
        y1: y,
        line: {
          color: 'black',
          width: 8
        }
      }],
    title: 'Belly Button Washing Frequency',
    xaxis: {visible: false, range: [-1, 1]},
    yaxis: {visible: false, range: [-1, 1]},

  };

  var data = [traceA];
  
  Plotly.newPlot("gauge", data, layout);      
}


function buildMetadata(sample) {
  var url = `/metadata/${sample}`;
  // Use `d3.json` to fetch the metadata for a sample
  
  d3.json(url).then((metaObj)=>{
    console.log("original: ", metaObj);
    var gauge = d3.select("#gauge");
    var option =  d3.select("#selDataGraph");
    gauge.html("");
    option.property("value","--");
    // Use d3 to select the panel with id of `#sample-metadata`
      var meta = d3.select("#metaTable");
      // Use `.html("") to clear any existing metadata
      meta.html("");
  
      // Use `Object.entries` to add each key and value pair to the panel
    Object.entries(metaObj).forEach(([key,value])=>{
      // console.log("inside the reponse")
      var trow = meta.append("tr").attr("style","width:auto");
      trow.append("strong").append("td").text(key+" : ").attr('style',"padding-bottom:10px")
      trow.append("strong").append("td").text(value).attr('style',"padding-bottom:10px")
    });
    
    
    
    //switch on dropdown change to display either gauge or slider
    option.on("change",function(){
      switch (option.property("value")){
        //Display slider style gauge
        case "Slider":
          gauge.html("");
          buildSlider(parseInt(metaObj.WFREQ));
        break;
        //display pointer style gauge
        case "Gauge":
          gauge.html("");
          buildGauge(parseInt(metaObj.WFREQ));
        break;
        //default to gauge
        default:
          gauge.html("");
          
      }
    });
  });

}



function buildCharts(sample) {

  // @TODO: Use `d3.json` to fetch the sample data for the plots
  var url = `/samples/${sample}`;
  // Use `d3.json` to fetch the metadata for a sample
  d3.json(url).then((response)=>{
    // console.log(response);
    // @TODO: Build a Bubble Chart using the sample data  
    var trace1 = {
      x: response.otu_ids,
      y: response.sample_values,
      text:response.otu_labels,
      mode: 'markers',
      marker: {
        size: response.sample_values,
        color: response.otu_ids,
        sizeref:0.09,
        sizemode:'area'

      }
    };
    
    var data = [trace1];
    
    var layout = {
      showlegend: false,
    };
    
    Plotly.newPlot('bubble', data, layout);

    // @TODO: Build a Pie Chart
    // HINT: You will need to use slice() to grab the top 10 sample_values,
    // otu_ids, and labels (10 each).
    var data = [{
      values: response.sample_values.slice(0,10),
      labels: response.otu_ids.slice(0,10),
      type: 'pie',
      textinfo: "percent",
      hovertext :response.otu_labels.slice(0,10),
      hoverinfo: "text",
      automargin: true
    }];
    // console.log("10", response.otu_labels.slice(0,10))
    var layout = {
      showlegend: true,
    }
    
    Plotly.newPlot('pie', data, layout);
  });   
}

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}
// Initialize the dashboard
init();
