function buildCandle() {

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
        var Tweets = response.map(data => data.Tweets.substring(0, 100));

    //Candlestick Trace
    var trace = {
        type: "candlestick",
        name: name,
        x: dates,
        high: highPrices,
        low: lowPrices,
        open: openingPrices,
        close: closingPrices,
        text: Tweets,
        textposition: 'bottom',
        hoverinfo: 'trace'
    };

    var data = [trace];

    var layout = {
        title: `SPY ETF with Tweets`,
        xaxis: {
            type: "date"
        },
        yaxis: {
            range: [230, 300],
            type: "linear"
        }
    };
    var chartDiv = d3.select("#bigChart");
    chartDiv.html("");
    Plotly.newPlot("bigchart", data, layout);
    })
    })
}


function buildApproval() {

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
        var Tweets = response.map(data => data.Tweets.substring(0, 100));

    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: name,
        x: dates,
        y: approval,
        text: Tweets,
        textposition: 'bottom',
        hoverinfo: 'trace1',
        line: {
            color: "#dc3545",
        }
    };
    var trace2 = {
        type: "scatter",
        mode: "lines",
        name: name,
        x: dates,
        y: disapproval,
        //text: Tweets,
        //textposition: 'bottom',
        hoverinfo: 'trace2',
        line: {
            color: "#007bff"
        }
    };

    var approvalData = [trace1, trace2]

    var layout1 = {
        title: `President Approval/Disapproval with tweets`,
        xaxis: {
            type: "date"
        },
        yaxis: {
            range: [30, 70],
            type: "linear"
        }
    }

    var chartDiv = d3.select("#bigChart");
    chartDiv.html("");
    Plotly.newPlot("bigchart", approvalData, layout1);
    })
    })
}

// Getting a reference to the buttons on the page with the id property
var button = d3.select("#cs");
var button2 = d3.select("#ap");

// We can use the `on` function in d3 to attach an event to the handler function
button.on("click", buildCandle);
button2.on("click", buildApproval);
//button3.on("click", chartDiv = img src = '//assets/images/wordmap.png');

// buildPlot()
// buildPlot2()

// var chartDiv = d3.select("#bigchart");
// chartDiv.html("")

