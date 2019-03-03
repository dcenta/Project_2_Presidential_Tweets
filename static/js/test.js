/**
 * Helper function to select stock data
 * Returns an array of values
 * @param {array} rows
 * @param {integer} index
 * index 0 - Date
 * index 1 - Open
 * index 2 - High
 * index 3 - Low
 * index 4 - Close
 * index 5 - Volume
 */
// function unpack(rows, index) {
//   return rows.map(function(row) {
//     return row[index];
//   });
// }

// // Submit Button handler
// function handleSubmit() {
//   // Prevent the page from refreshing
//   d3.event.preventDefault();

//   // Select the input value from the form
//   var stock = d3.select("#stockInput").node().value;
//   console.log(stock);

//   // clear the input value
//   d3.select("#stockInput").node().value = "";

//   // Build the plot with the new stock
//   buildPlot(stock);
// }


// Plot the default route once the page loads
var defaultURL = "/approval";
d3.json(defaultURL).then(function(data) {
  console.log(d3.json)

  // Grab values from the response json object to build the plots

  var approval = unpack(data.dataset.data, 0);
  var dates = upack(data.dataset.data, 1);
  var disapproval = unpack(data.dataset.data, 2);
  var closingPrices = unpack(data.dataset.data, 3);
  var openingPrices = unpack(data.dataset.data, 4);
  var highPrices = unpack(data.dataset.data, 5);
  var lowPrices = unpack(data.dataset.data, 6);

var defaultURL = "/tweets";
d3.json(defaultURL).then(function(data) {
  console.log(d3.json)
  var dateTw = unpack(data.dataset.data, 0);
  var Retweet = unpack(data.dataset.data, 1);
  var Tweets = unpack(data.dataset.data, 2);

  var trace1 = {
    type: "scatter",
    mode: "lines",
    name: name,
    x: dates,
    y: closingPrices,
    line: {
      color: "#17BECF"
    }
  };

  // Candlestick Trace
  var trace = {
    type: "candlestick",
    x: dates,
    high: highPrices,
    low: lowPrices,
    open: openingPrices,
    close: closingPrices
  };

  var approvalData = [trace1]
  var data = [trace];


  var layout1 = {
    title: `approval vs tweets`,
    xaxis: {
      range: [startDate, endDate],
      type: "date"
    },
    yaxis: {
      autorange: true,
      type: "linear"
    }}
    
  var layout = {
    title: `Hover To Check For Tweets`,
    xaxis: {
      range: [startDate, endDate],
      type: "date"
    },
    yaxis: {
      autorange: true,
      type: "linear"
    }
  };

  Plotly.newPlot("stock_SPY_ETF", data, layout);
  Plotly.newPlot("approval", approvalData, layout1);
});


// // Update the plot with new data
// function updatePlotly(newdata) {
//   Plotly.restyle("bar", "x", [newdata.x]);
//   Plotly.restyle("bar", "y", [newdata.y]);
// }

// // Get new data whenever the dropdown selection changes
// function getData(route) {
//   console.log(route);
//   d3.json(`/${route}`).then(function(data) {
//     console.log("newdata", data);
//     updatePlotly(data);
//   });
// }


// // Add event listener for submit button
// d3.select("#submit").on("click", handleSubmit);



"Date": result[0],
"Retweet Count": result[1],
"Tweets": result[2]