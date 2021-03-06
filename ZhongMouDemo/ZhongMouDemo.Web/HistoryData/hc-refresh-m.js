$(function() {
	$(document).ready(function() {
		Highcharts.setOptions({
			global: {
				useUTC: false
			}
		});
		$('#container').highcharts({
			chart: {
				type: 'spline',
				animation: Highcharts.svg, // don't animate in old IE
				marginRight: 10,
				events: {
					load: function() {
						// set up the updating of the chart each second
						var series = this.series[0];
						setInterval(function() {
							var x = (new Date()).getTime(), // current time
								y = 20 * Math.random();
							series.addPoint([x, y], true, true);
						}, 1000);
					}
				}
			},
			title: {
				text: '实时曲线'
			},
			xAxis: {
				type: 'datetime',
				tickPixelInterval: 150
			},
			yAxis: {
				title: {
					text: null
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]
			},
			tooltip: {
				formatter: function() {
					return '<b>' + this.series.name + '</b><br/>' +
						Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
						Highcharts.numberFormat(this.y, 2);
				}
			},
			legend: {
				enabled: true
			},
			exporting: {
				enabled: false
			},
 credits: {
            enabled: false
        },
			
			colors: ['#ff3333', '#33ff66', '#8bbc21', '#910000', '#1aadce',
				'#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'
			],
			series: [{
				name: '土湿',
				data: (function() {
					// generate an array of random data
					var data = [],
						time = (new Date()).getTime(),
						i;
					for(i = -19; i <= 0; i += 1) {
						data.push({
							x: time + i * 1000,
							y: 20 * Math.random()
						});
					}
					return data;
				}())
			}]
		});
	});
});