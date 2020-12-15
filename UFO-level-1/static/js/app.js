// from data.js
var ufo = data;
console.log(ufo);

var tbody = d3.select("tbody");

// Use d3 to update each cell's text with ufoSiting values 
//(`date/time`, `city`, `state`, `country`, `shape`, and `comment`)
data.forEach(function(ufoSiting) {
    console.log(ufoSiting);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");
    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(ufoSiting).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});

// BONUS: Refactor to use Arrow Functions!
// data.forEach((ufoSiting) => {
//   var row = tbody.append("tr");
//   Object.entries(ufoSiting).forEach(([key, value]) => {
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });

// Select the button
var button = d3.select("#filter-btn");
var form = d3.select("#datetime");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {

    d3.event.preventDefault();

    tbody.html("");
    // Select the input date get the raw HTML nodes
    var inputElement = d3.select("#datetime");
    // Get the value property of the input date
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    // Filter Data with datetime equal to input value
    var filteredData = ufo.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);

    // add filtered sightings to table

    filteredData.forEach(function(selections) {
        console.log(selections);

        var row = tbody.append("tr");

        Object.entries(selections).forEach(function([key, value]) {
            console.log(key, value);
            // Append a cell to the row for each value
            var cell = row.append("td");
            cell.text(value)
        });
    });
};
