// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var submit=d3.select("#submit");
console.log(tableData);


tableData.forEach(function(ufosightings) {
    console.log(ufosightings);
    var row = tbody.append("tr");
    Object.entries(ufosightings).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
    });
    });

   
submit.on("click", function() {

    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
    console.log(filteredData);
});