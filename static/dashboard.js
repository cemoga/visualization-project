
var url = "/bill"
var url2 = "/counts"

// format numbers to show thousands w/ a comma
function comma(x){
    var number = x.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    return number
}

//Returns most and least expensive schools + count of schools
d3.json(url).then(function(data){
    data.forEach(data=> data.tuition = comma(data.tuition));
    var First = data[0];
    var Last= data[data.length-1];
    var schools = comma(data.length);

    

    var high = d3.select(".highest");
    high.append('p').text(`${Last.name}`)
    .append('p').text(`${Last.city}, ${Last.state}`)
    .append('p').attr("class","card_num").text(`$${Last.tuition}`);

    var low = d3.select(".lowest");
    low.append('p').text(`${First.name}`)
    .append('p').text(`${First.city}, ${First.state}`)
    .append('p').attr("class","card_num").text(`$${First.tuition}`);

    var total_schools = d3.select(".schools");
    total_schools.attr("style","text-align:center")
    total_schools.append('p').attr("class","card_num").text(`${schools}`)
});

//Returns count of unique states
d3.json(url2).then(function(data){
    var state = data[0].count;

    var total_states = d3.select(".states");
    total_states.attr("style","text-align:center")
    total_states.append('p').attr("class","card_num").text(`${state}`)
});