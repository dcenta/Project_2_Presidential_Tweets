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
        name: name,//
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
        var Tweets = response.map(data => data.Tweets.substring(0, 95));
        var Tweets2 = response.map(data => data.Tweets.substring(96, 190));
        var Tweets3 = response.map(data => data.Tweets.substring(191, 280));

        //hovertext: ['A<br>a', 'B<br>b', 'C<br>c'],
        //hoverinfo: 'text'
        
    var trace1 = {
        type: "scatter",
        mode: "lines",
        //customdata: Tweets,
        name: 'Approval',
        x: dates,
        y: approval,
        hovertext: [`${Tweets}<br>${Tweets2}<br>${Tweets3}`],
        //textposition: 'bottom',
        hoverinfo: 'text',
        line: {
            color: "#dc3545",
        }
    };
    var trace2 = {
        type: "scatter",
        mode: "lines",
        name: 'Dissapproval',
        x: dates,
        y: disapproval,
        text: Tweets,
        textposition: 'bottom',
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


// Event handlers are just normal functions that can do anything you want

// function wordCloud() {
//     var chartDiv = d3.select("#bigChart");
//     chartDiv.html("");
//     chartDiv.innerHTML="<img src='wordcloud.svg' />";
// }
// function wordCloud() {
//     var chartDiv = d3.select("#bigChart");
//     chartDiv.html("");
//     document.getElementById("bigChart").html="<img src='wordcloud.svg' />";
// }
//document.getElementById("surprise").innerHTML="<img src='images/aftersurprise.png' />";

// Getting a reference to the buttons on the page with the id property
var button = d3.select("#cs");
var button2 = d3.select("#ap");
var button3 = d3.select("#wc");

// We can use the `on` function in d3 to attach an event to the handler function
button.on("click", buildCandle);
button2.on("click", buildApproval);
//button3.on("click", wordCloud);

button3.on("click", function() {
    //document.getElementById('secondchart').style.display = "true";
    d3.select("#bigchart").html("<img src='https://www.prgarnett.net/wp-content/uploads/2017/12/TrumpWords.png'' alt='giphy'>");
  });
// var chartDiv = d3.select("#bigchart");
// chartDiv.html("")

