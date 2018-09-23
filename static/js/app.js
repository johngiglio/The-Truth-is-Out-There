// from data.js
var tableData = data;

// Select the filter button
var filter = d3.select("#filter-btn");

filter.on("click", function() {

    // Prevent the page from refreshing on click
    d3.event.preventDefault();

    // capture search date from form input
    var searchDate = d3.select("#datetime").property("value");
    var searchCity = d3.select("#city").property("value");
    var searchState = d3.select("#state").property("value");
    var searchCountry = d3.select("#country").property("value");
    var searchShape = d3.select("#shape").property("value");
    // console.log(searchDate);

    // filter data set to match non-blank search criteria
    
    sightings = tableData;

    if (searchDate != ""){
    sightings = sightings.filter(sighting => sighting.datetime === searchDate);
    }
    if (searchCity !=""){
    sightings = sightings.filter(sighting => sighting.city.toLowerCase() === searchCity.toLowerCase());
    }
    if (searchState !=""){
        sightings = sightings.filter(sighting => sighting.state.toLowerCase() === searchState.toLowerCase());
        }
    if (searchCountry !=""){
        sightings = sightings.filter(sighting => sighting.country.toLowerCase() === searchCountry.toLowerCase());
        }
    if (searchShape !=""){
        sightings = sightings.filter(sighting => sighting.shape.toLowerCase() === searchShape.toLowerCase());
        }
    console.log(searchDate != "");
// 
    // remove any existing results from the previous search
    d3.selectAll("tbody").remove();
    d3.select("#ufo-table").append("tbody");

    // append search results to table body
    var tbody = d3.select("tbody");

    sightings.forEach(function(sighting){
        var row = tbody.append("tr");

    // append data points to row
        Object.entries(sighting).forEach(function([key, value]) {

            var cell = row.append("td");

            cell.text(value);
        })
    })

});