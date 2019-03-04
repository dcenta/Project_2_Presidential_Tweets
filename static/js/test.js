
function buildPlot() {

  // Plot the default route once the page loads
  var stockApproval = "/approval";
  d3.json(stockApproval).then(function(response) {
    console.log(response)

    // Grab values from the response json object to build the plots

    // var approval = unpack(data.dataset, 0);
    // var dates = upack(data.dataset.data, 1);
    // var disapproval = unpack(data.dataset.data, 2);
    // var closingPrices = unpack(data.dataset.data, 3);
    // var openingPrices = unpack(data.dataset.data, 4);
    // var highPrices = unpack(data.dataset.data, 5);
    // var lowPrices = unpack(data.dataset.data, 6);

    var approval = response.map(data => data.Approval);
    var dates = response.map(data => data.Date);
    var disapproval = response.map(data => data.Disapproval);
    var closingPrices = response.map(data => data.St_Close);
    var openingPrices = response.map(data => data.St_Open);
    var highPrices = response.map(data => data.St_high);
    var lowPrices = response.map(data => data.St_low);
    console.log(dates)
    console.log(openingPrices)
    
  var tweets = "/tweets";
  d3.json(tweets).then(function(response) {
    console.log(response)
    var dateTw = response.map(data => data.Date);
    var Retweet = response.map(data => data.Retweet_Count);
    var Tweets = response.map(data => data.Tweets);
    
    var trace1 = {
      type: "scatter",
      mode: "lines",
      name: name,
      x: dates,
      y: disapproval,
      line: {
        color: "#17BECF"
      }
    }
    var trace2 = {
      type: "scatter",
      mode: "lines",
      name: name,
      x: dates,
      y: approval,
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

    Plotly.newPlot("candle", data, layout);
    Plotly.newPlot("approval", approvalData, layout1);
  })})}
  
buildPlot()