$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $("#main_header").addClass("active1");
        $(".nav-link").addClass('active2');
        $(".login-register").addClass('active2');
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $("#main_header").removeClass("active1");
       $(".nav-link").removeClass('active2');
       $(".login-register").removeClass('active2');
    }
});

$(window).on("scroll", function() {
    if($(window).scrollTop() > 450) {
        $(".aa").addClass("fadeInRight");
       
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".aa").addClass("fadeInRight");
    }
});
// optional
$('#blogCarousel').carousel({
    interval: 5000
});

/* chart 1 */

window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title:{
		text: "chart-1"
	},
	axisX:{
		valueFormatString: "DD MMM",
		crosshair: {
			enabled: true,
			snapToDataPoint: true
		}
	},
	axisY: {
		title: "Closing Price (in USD)",
		valueFormatString: "$##0.00",
		crosshair: {
			enabled: true,
			snapToDataPoint: true,
			labelFormatter: function(e) {
				return "$" + CanvasJS.formatNumber(e.value, "##0.00");
			}
		}
	},
	data: [{
		type: "area",
		xValueFormatString: "DD MMM",
		yValueFormatString: "$##0.00",
		dataPoints: [
			{ x: new Date(2016, 07, 01), y: 76.727997 },
			{ x: new Date(2016, 07, 02), y: 75.459999 },
			{ x: new Date(2016, 07, 03), y: 76.011002 },
			{ x: new Date(2016, 07, 04), y: 75.751999 },
			{ x: new Date(2016, 07, 05), y: 77.500000 },
			{ x: new Date(2016, 07, 08), y: 77.436996 },
			{ x: new Date(2016, 07, 09), y: 79.650002 },
			{ x: new Date(2016, 07, 10), y: 79.750999 },
			{ x: new Date(2016, 07, 11), y: 80.169998 },
			{ x: new Date(2016, 07, 12), y: 79.570000 },
			{ x: new Date(2016, 07, 15), y: 80.699997 },
			{ x: new Date(2016, 07, 16), y: 79.686996 },
			{ x: new Date(2016, 07, 17), y: 78.996002 },
			{ x: new Date(2016, 07, 18), y: 78.899002 },
			{ x: new Date(2016, 07, 19), y: 77.127998 },
			{ x: new Date(2016, 07, 22), y: 76.759003 },
			{ x: new Date(2016, 07, 23), y: 77.480003 },
			{ x: new Date(2016, 07, 24), y: 77.623001 },
			{ x: new Date(2016, 07, 25), y: 76.408997 },
			{ x: new Date(2016, 07, 26), y: 76.041000 },
			{ x: new Date(2016, 07, 29), y: 76.778999 },
			{ x: new Date(2016, 07, 30), y: 78.654999 },
			{ x: new Date(2016, 07, 31), y: 77.667000 }
		]
	}]
});
chart.render();

var chart = new CanvasJS.Chart("chartContainer1", {
    exportEnabled: true,
    animationEnabled: true,
    title:{
        text: "Chart-2"
    },
    subtitles: [{
        text: "Click Legend to Hide or Unhide Data Series"
    }], 
    axisX: {
        title: "States"
    },
    axisY: {
        title: "Oil Filter - Units",
        titleFontColor: "#4F81BC",
        lineColor: "#4F81BC",
        labelFontColor: "#4F81BC",
        tickColor: "#4F81BC",
        includeZero: true
    },
    axisY2: {
        title: "Clutch - Units",
        titleFontColor: "#C0504E",
        lineColor: "#C0504E",
        labelFontColor: "#C0504E",
        tickColor: "#C0504E",
        includeZero: true
    },
    toolTip: {
        shared: true
    },
    legend: {
        cursor: "pointer",
        itemclick: toggleDataSeries
    },
    data: [{
        type: "column",
        name: "Oil Filter",
        showInLegend: true,      
        yValueFormatString: "#,##0.# Units",
        dataPoints: [
            { label: "New Jersey",  y: 19034.5 },
            { label: "Texas", y: 20015 },
            { label: "Oregon", y: 25342 },
            { label: "Montana",  y: 20088 },
            { label: "Massachusetts",  y: 28234 }
        ]
    },
    {
        type: "column",
        name: "Clutch",
        axisYType: "secondary",
        showInLegend: true,
        yValueFormatString: "#,##0.# Units",
        dataPoints: [
            { label: "New Jersey", y: 210.5 },
            { label: "Texas", y: 135 },
            { label: "Oregon", y: 425 },
            { label: "Montana", y: 130 },
            { label: "Massachusetts", y: 528 }
        ]
    }]
});
chart.render();

function toggleDataSeries(e) {
    if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
    } else {
        e.dataSeries.visible = true;
    }
    e.chart.render();
}
}
