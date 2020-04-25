var selectedPanelMetric = 'outlets';

var chart4;

var causesMapOptions = {

    chart: {
        backgroundColor: 'black'
    },
    title: {
        text: 'Food Outlets Per 100,000 of the Population',
        style: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: '14px'
        }
    },
    navigation: {
        buttonOptions: {
            theme: {
                stroke: 'white',
                fill: 'white',
                states: {
                    hover: {
                        stroke: '#76D7C4',
                        fill: '#76D7C4'
                    },
                    select: {
                        stroke: '#d1d1d1',
                        fill: '#76D7C4'
                    }
                }
            }
        }
    },
    tooltip: {
        headerFormat: '',
        pointFormat: '{series.name}: <b>{point.value}</b><br/>',
        valueSuffix: ''
    },
    colorAxis: {
        min: 74.6,
        max: 125.4,
        // type: 'logarithmic',
        minColor: '#FFFFFF',
        maxColor: '#595757'
    },
    legend: {
        title: {
            text: ''
        },
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        floating: true,
        y: 30,
        x: 40
    },
    plotOptions: {
        series: {
            allowPointSelect: false,
            point: {
                events: {
                    click: function () {
                        selectCauseRegionData(this.name, this.id, this.value);
                    }
                }
            }
        }
    },
    series: [{
        data: causesStartData[1],
        mapData: mapdata,
        name: 'Outlets',
        joinBy: ['id', 'code'],
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        },
        states: {
            hover: {
                color: '#76D7C4',
                borderColor: 'black'
            }
            // select: {
            //     color: '#76D7C4'
            // }
        },
        borderColor: '#76D7C4',
        borderWidth: 2,
    }]

}

var updatedCausesMapOptions = {

    chart: {
        backgroundColor: 'black'
    },

    title: {
        text: 'Food Outlets Per 100,000 of the Population',
        style: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: '14px'
        }
    },
    navigation: {
        buttonOptions: {
            theme: {
                stroke: 'white',
                fill: 'white',
                states: {
                    hover: {
                        stroke: '#76D7C4',
                        fill: '#76D7C4'
                    },
                    select: {
                        stroke: '#d1d1d1',
                        fill: '#76D7C4'
                    }
                }
            }
        }
    },

    tooltip: {
        headerFormat: '',
        pointFormat: '{series.name}: <b>{point.value}</b><br/>',
        valueSuffix: ''
    },

    colorAxis: {
        min: 74.6,
        max: 125.4,
        // type: 'logarithmic',
        minColor: '#FFFFFF',
        maxColor: '#595757'
    },

    legend: {
        title: {
            text: ''
        },
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        floating: true,
        y: 30,
        x: 40
    },

    plotOptions: {
        series: {
            allowPointSelect: false,
            point: {
                events: {
                    click: function () {
                        selectCauseRegionData(this.name, this.id, this.value);
                    }
                }
            }
        }
    },

    series: [{
        data: causesStartData[1],
        mapData: mapdata,
        name: 'Outlets',
        joinBy: ['id', 'code'],
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        },
        states: {
            hover: {
                color: '#76D7C4',
                borderColor: 'black'
            }
            // select: {
            //     color: '#76D7C4'
            // }
        },
        borderColor: '#76D7C4',
        borderWidth: 2,
    }]

}

var foodPurchasesChart = {
    title: {
        text: 'Solar Employment Growth by Sector, 2010-2016'
    },

    subtitle: {
        text: 'Source: thesolarfoundation.com'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2007
        }
    },

    series: [{
        name: 'Installation',
        data: []
    }, {
        name: 'Manufacturing',
        data: []
    }, {
        name: 'Sales & Distribution',
        data: []
    }, {
        name: 'Project Development',
        data: []
    }, {
        name: 'Other',
        data: []
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
}

var macroNutrientIncomeChart = {

}

$(function () {

    chart4 = Highcharts.mapChart('container4', causesMapOptions);

    Highcharts.chart('container5', {
        chart: {
            type: 'bar',
            backgroundColor: 'black'
        },
        title: {
            text: 'Macronutrient Consumption by Gross Income Quintile',
            style: {
                color: 'white',
                fontWeight: 'bold'
            }
        },
        navigation: {
            buttonOptions: {
                theme: {
                    stroke: 'white',
                    fill: 'white',
                    states: {
                        hover: {
                            stroke: '#76D7C4',
                            fill: '#76D7C4'
                        },
                        select: {
                            stroke: '#d1d1d1',
                            fill: '#76D7C4'
                        }
                    }
                }
            }
        },
        xAxis: {
            categories: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
            title: {
                enabled: false
            },
            labels: {
                style: {
                    color: 'white',
                    fontWeight: 'bold'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Macronutrient Consumption (grams)',
                style: {
                    color: '#76D7C4',
                    fontWeight: 'bold'
                }
            },
            labels: {
                style: {
                    color: 'white',
                    fontWeight: 'bold'
                }
            }
        },
        tooltip: {
            valueSuffix: ' grams'
        },
        legend: {
            reversed: true,
            itemStyle: {
                color: '#76D7C4',
                fontWeight: 'bold'
            },
            itemHoverStyle: {
                color: '#76D7C4'
            },
            itemHiddenStyle: {
                color: 'rgba(118,215,196, 0.5)'
            }
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            type: 'column',
            name: 'Carbohydrate',
            data: [248, 237, 244, 231, 216],
            color: '#76D7C4'
        }, {
            type: 'column',
            name: 'Fat',
            data: [84, 81, 82, 77, 74],
            color: 'white'
        }, {
            type: 'column',
            name: 'Protein',
            data: [69, 65, 68, 65, 64],
            color: '#A0A0A0'
        }]
    });

    Highcharts.chart('container6', {

        chart: {
            backgroundColor: 'black'
        },
        title: {
            text: 'Food Purchases Per Person Per Week',
            style: {
                color: 'white',
                fontWeight: 'bold'
            }
        },
        navigation: {
            buttonOptions: {
                theme: {
                    stroke: 'white',
                    fill: 'white',
                    states: {
                        hover: {
                            stroke: '#76D7C4',
                            fill: '#76D7C4'
                        },
                        select: {
                            stroke: '#d1d1d1',
                            fill: '#76D7C4'
                        }
                    }
                }
            }
        },
        yAxis: {
            title: {
                text: 'Average (grams)',
                style: {
                    color: '#76D7C4',
                    fontWeight: 'bold'
                }
            },
            labels: {
                style: {
                    color: 'white',
                    fontWeight: 'bold'
                }
            }
        },
        tooltip: {
            split: true,
            valueSuffix: ' grams'
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            itemStyle: {
                color: '#76D7C4',
                fontWeight: 'bold'
            },
            itemHoverStyle: {
                color: '#76D7C4'
            },
            itemHiddenStyle: {
                color: 'rgba(118,215,196, 0.5)'
            }
        },
        xAxis: {
            categories: ['07/08', '08/09', '09/10', '10/11', '11/12', '12/13', '13/14', '14/15', '15/16', '16/17'],
            title: {
                enabled: false
            },
            labels: {
                style: {
                    color: 'white',
                    fontWeight: 'bold'
                }
            }
        },
        plotOptions: {
            series: {
                lineWidth: 4
            }
        },
        series: [{
            name: 'Cheese',
            data: [110.7, 117.0, 119.1, 120.8, 115.9, 119.7, 112.8, 113.1, 115.5, 122.5],
            color: '#76D7C4'
        }, {
            name: 'Chocolate Biscuits',
            data: [50.5, 53.8, 49.9, 50.9, 48.1, 50.4, 49.2, 51.2, 54.5, 58.2],
            color: '#A0A0A0'
        }, {
            name: 'Takeaway Pizza',
            data: [20.3, 15.5, 21.8, 20.3, 23.7, 19.8, 22.4, 26.1, 28.8, 28.3],
            color: 'white'
        }, {
            name: 'Chocolate',
            data: [30.5, 29.9, 31.0, 31.3, 32.3, 34.0, 35.2, 33.7, 34.0, 35.5],
            color: '#F1948A'
        }]

    });

});

function changeCauseMap() {

    var selectedMetric = document.getElementById("selectedCausesMetric").value;

    selectedPanelMetric = selectedMetric;

    var chartTitle = $("#selectedCausesMetric option:selected").text();

    var selectedMetaData = window[selectedMetric][0];

    var selectedMetricData = window[selectedMetric][1];

    updatedCausesMapOptions.series[0].data = selectedMetricData;

    switch (selectedMetric) {
        case ('vegFruitPurchases'):
        case ('walking'):
        case ('income'):
            updatedCausesMapOptions.colorAxis.minColor = '#595757';
            updatedCausesMapOptions.colorAxis.maxColor = '#FFFFFF';
        default:
            updatedCausesMapOptions.colorAxis.maxColor = '#595757';
            updatedCausesMapOptions.colorAxis.minColor = '#FFFFFF';
            break;
    }

    updatedCausesMapOptions.tooltip.valueSuffix = selectedMetaData[2].toolTipSuffix;

    updatedCausesMapOptions.series[0].name = selectedMetaData[1].seriesName;

    var max = Math.max.apply(Math, selectedMetricData.map(function (o) { return o.value; }))

    var min = Math.min.apply(Math, selectedMetricData.map(function (o) { return o.value; }))

    updatedCausesMapOptions.colorAxis.min = min;

    updatedCausesMapOptions.colorAxis.max = max;

    updatedCausesMapOptions.title.text = chartTitle;

    $('.stats-metric.causes').empty();
    $('.stats-metric.causes').append(selectedMetaData[1].seriesName);

    $('#statsEngNumCauses').empty();



    $('#statsSelectedNumCauses').empty();

    function region(locateRegion) {
        return locateRegion.code === selectedRegion;
    }

    var selectedRegionStat = (selectedMetricData.find(region)).value;



    if (selectedMetric === "income") {
        $('#statsEngNumCauses').append('£' + selectedMetaData[0].value + selectedMetaData[2].toolTipSuffix);
        $('#statsSelectedNumCauses').append('£' + selectedRegionStat + selectedMetaData[2].toolTipSuffix);
    } else {
        $('#statsEngNumCauses').append(selectedMetaData[0].value + selectedMetaData[2].toolTipSuffix);
        $('#statsSelectedNumCauses').append(selectedRegionStat + selectedMetaData[2].toolTipSuffix);
    }


    chart4 = Highcharts.mapChart('container4', updatedCausesMapOptions);


}

function selectCauseRegionData(name, id, value) {

    $('#statsSelectedNameCauses').empty();

    $('#statsSelectedNameCauses').append(name);

    $('#statsSelectedNumCauses').empty();

    var suffix = '';

    var prefix = '';

    switch (selectedPanelMetric) {
        case 'outlet':
            suffix = '';
            prefix = '';
            break;
        case 'vegFruitPurchases':
            suffix = " (grams)";
            break;
        case 'bingeDrinking':
        case 'physicallyInactive':
        case 'walking':
            suffix = " %";
            break;
        case 'alcoholPurchases':
            suffix = " (ml)";
            break;
        case 'income':
            prefix = "£";
            break;
    }

    $('#statsSelectedNumCauses').append(prefix + value + suffix);

    selectedRegion = id;



}

