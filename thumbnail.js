FusionCharts.ready(function() {
    // write a function which creates a thumbnail of the required dimensions but turning off some of the properties which are not required in a thumbnail, for some other charts there might be a few more additional proeprties that need to be turned off.
    var createThumbNail = function(chartId, width, height, divId) {
        // we clone the chart first and then set new width and height
        var chartRef = FusionCharts(chartId),
            clonedChart = chartRef.clone({
                "width": width,
                "height": height
            });
        // turn off properties which are not required
        clonedChart.setChartAttribute({
            "showValues": "0",
            "showLabels": "0",
            "animation": "0",
            "exportEnabled": "0",
            "showTooltip": "0",
            "showHoverEffect": "0",
            "showYAxisValues": "0",
            "caption": "",
            "subCaption": "",
            "xAxisName": "",
            "yAxisName": "",
            "showXAxisLine": "0",
            "showYAxisLine": "0",
            "numDivLines": "0",
            "enableSlicing": "0",
            "enableRotation": "0"
        });
        // listend for the chartClick event to render the detailed chart
        clonedChart.addEventListener('chartClick', function() {
            FusionCharts(chartId).render('chart-container');
        });
        // create the thumbnail
        clonedChart.render(divId, 'append');
    };

    // since data is common for all three charts, we store it in a common variable
    var chartData = {
        "chart": {
            "caption": "Harry's SuperMart",
            "subCaption": "Monthly revenue for last year",
            "xAxisName": "Month",
            "yAxisName": "Amount",
            "numberPrefix": "$",
            "theme": "fint",
            "rotateValues": "1",
            "exportEnabled": "1"
        },

        "data": [{
            "label": "Jan",
            "value": "420000"
        }, {
            "label": "Feb",
            "value": "810000"
        }, {
            "label": "Mar",
            "value": "720000"
        }, {
            "label": "Apr",
            "value": "550000"
        }, {
            "label": "May",
            "value": "910000",
            "anchorRadius": "10",
            "anchorBorderColor": "0372AB",
            "anchorBgColor": "E1f5ff"
        }, {
            "label": "Jun",
            "value": "510000"
        }, {
            "label": "Jul",
            "value": "680000"
        }, {
            "label": "Aug",
            "value": "620000"
        }, {
            "label": "Sep",
            "value": "610000"
        }, {
            "label": "Oct",
            "value": "490000"
        }, {
            "label": "Nov",
            "value": "900000"
        }, {
            "label": "Dec",
            "value": "730000"
        }]
    };
    // create all the three chart instances of column, pir, bar
    var revenueChartColumn = new FusionCharts({
        type: 'column2d',
        renderAt: 'chart-container',
        width: '400',
        height: '300',
        dataFormat: 'json',
        id: 'revenue-chart-column',
        dataSource: chartData
    });
    var revenueChartPie = new FusionCharts({
        type: 'pie2d',
        renderAt: 'chart-container',
        width: '400',
        height: '300',
        dataFormat: 'json',
        id: 'revenue-chart-pie',
        dataSource: chartData
    });
    var revenueChartBar = new FusionCharts({
        type: 'bar2d',
        renderAt: 'chart-container',
        width: '400',
        height: '300',
        dataFormat: 'json',
        id: 'revenue-chart-bar',
        dataSource: chartData
    });
    // create thumbnails for all the three charts
    createThumbNail('revenue-chart-column', 100, 100, 'thumbnail-column');
    createThumbNail('revenue-chart-pie', 100, 100, 'thumbnail-pie');
    createThumbNail('revenue-chart-bar', 100, 100, 'thumbnail-bar');

    // render column chart by default
    revenueChartColumn.render();
});