var json = "/json"
var name = "/names"



d3.json(json).then((data) => {
    data.forEach((item) => {
      console.log(item)
    });
});

