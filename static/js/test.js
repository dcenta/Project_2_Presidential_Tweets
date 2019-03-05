
function buildPlot() {

  // Plot the default route once the page loads
  var stockApproval = "/approval";
  d3.json(stockApproval).then(function(response) {
    console.log(response)

    // Grab values from the response json object to build the plots

    var approval = response.map(data => data.Approval);
    var dates = response.map(data => data.Date);
    var disapproval = response.map(data => data.Disapproval);
    var closingPrices = response.map(data => data.St_Close);
    var openingPrices = response.map(data => data.St_Open);
    var highPrices = response.map(data => data.St_high);
    var lowPrices = response.map(data => data.St_low);
    
  var tweets = "/tweets";
  d3.json(tweets).then(function(response) {
    console.log(response)
    var datesTw = response.map(data => data.Date);
    var Retweet = response.map(data => data.Retweet_Count);
    var Tweets = response.map(data => data.Tweets.substring(0,80));
    
    var trace1 = {
      type: "scatter",
      mode: "lines",
      name: name,
      x: dates,
      y: approval,
      line: {
        color: "#17BECF",
      text: Tweets,
      hoverinfo: 'text'
      }
    };
    var trace2 = {
      type: "scatter",
      mode: "lines",
      name: name,
      x: dates,
      y: disapproval,
      text: Tweets,
      hoverinfo: 'text',
      line: {
        color: "#17BECF"
      }
    };
    var trace3 = {
      type: "scatter",
      mode: "lines",
      name: name,
      x: dates,
      y: (closingPrices)/5,
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
      close: closingPrices,
      text: Tweets,
      hoverinfo: 'text'
    };

    var approvalData = [trace1, trace2]
    var data = [trace];
   

    var layout1 = {
      title: `approval vs tweets`,
      xaxis: {
        //range: [startDate, endDate],
        type: "date"
      },
      yaxis: {
        range: [30, 70],
        type: "linear"
      }}
      
      
    var layout = {
      title: `SPY vs Tweets`,
      xaxis: {
        //range: [01/01/2018, 12/31/2018],
        type: "date"
      },
      yaxis: {
        range: [230, 300],
        type: "linear"
      }
    };

  // // Step 1: Append a div to the body to create tooltips, assign it a class
  // // =======================================================
  // var toolTip = d3.select("body").append("div")
  //   .attr("class", "tooltip");

  // // Step 2: Add an onmouseover event to display a tooltip
  // // ========================================================
  // circlesGroup.on("mouseover", function(d, i) {
  //   toolTip.style("display", "block");
  //   toolTip.html(`Pizzas eaten: <strong>${tweets[i]}</strong>`)
  //     .style("left", d3.event.pageX + "px")
  //     .style("top", d3.event.pageY + "px");
  // })
  //   // Step 3: Add an onmouseout event to make the tooltip invisible
  //   .on("mouseout", function() {
  //     toolTip.style("display", "none");
  //   });


    Plotly.newPlot("candle", data, layout);
    //Plotly.newPlot("approval", approvalData, layout1);
  })})}
  
//buildPlot()


// Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("#cs");
var button2 = d3.select("#123");
// // Getting a reference to the input element on the page with the id property set to 'input-field'
// var inputField = d3.select("#input-field");

// // This function is triggered when the button is clicked
// function handleClick() {
//   console.log("A button was clicked!");

//   // We can use d3 to see the object that dispatched the event
//   console.log(d3.event.target);
// }

// We can use the `on` function in d3 to attach an event to the handler function
button.on("click", buildPlot);


// // You can also define the click handler inline
// button.on("click", function() {
//   console.log("Hi, a button was clicked!");
//   console.log(d3.event.target);
// });

// // Event handlers are just normal functions that can do anything you want
// button.on("click", function() {
//   d3.select(".giphy-me").html("<img src='https://gph.to/2Krfn0w' alt='giphy'>");
// });

// // Input fields can trigger a change event when new text is entered.
// inputField.on("change", function() {
//   var newText = d3.event.target.value;
//   console.log(newText);
// });
