var startData = [[{ 'value': '10705' }], [
    { "code": "NE", "dataLabels": { x: -15, y: 15 }, "value": "1570" },
    { "code": "NW", "dataLabels": { x: -5, y: -50 }, "value": "841" },
    { "code": "YH", "value": "818" },
    { "code": "EM", "dataLabels": { x: 5, y: -15 }, "value": "486" },
    { "code": "WM", "value": "1511" },
    { "code": "EE", "value": "793" },
    { "code": "LDN", "value": "2274" },
    { "code": "SE", "dataLabels": { x: -35, y: 25 }, "value": "1582" },
    { "code": "SW", "dataLabels": { x: 40, y: 10 }, "value": "829" }]];

var admissionsAll = [[{ 'value': '10705' }], [
    { "code": "NE", "dataLabels": { x: -15, y: 15 }, "value": "1570" },
    { "code": "NW", "dataLabels": { x: -5, y: -50 }, "value": "841" },
    { "code": "YH", "value": "818" },
    { "code": "EM", "dataLabels": { x: 5, y: -15 }, "value": "486" },
    { "code": "WM", "value": "1511" },
    { "code": "EE", "value": "793" },
    { "code": "LDN", "value": "2274" },
    { "code": "SE", "dataLabels": { x: -35, y: 25 }, "value": "1582" },
    { "code": "SW", "dataLabels": { x: 40, y: 10 }, "value": "829" }]];

var admissionsMale = [[{ 'value': '2959' }], [
    { "code": "NE", "dataLabels": { x: -15, y: 15 }, "value": "384" },
    { "code": "NW", "dataLabels": { x: -5, y: -50 }, "value": "279" },
    { "code": "YH", "value": "231" },
    { "code": "EM", "dataLabels": { x: 5, y: -15 }, "value": "130" },
    { "code": "WM", "value": "402" },
    { "code": "EE", "value": "283" },
    { "code": "LDN", "value": "607" },
    { "code": "SE", "dataLabels": { x: -35, y: 25 }, "value": "443" },
    { "code": "SW", "dataLabels": { x: 40, y: 10 }, "value": "219" }]];

var admissionsFemale = [[{ 'value': '7745' }], [
    { "code": "NE", "dataLabels": { x: -15, y: 15 }, "value": "1186" },
    { "code": "NW", "dataLabels": { x: -5, y: -50 }, "value": "562" },
    { "code": "YH", "value": "587" },
    { "code": "EM", "dataLabels": { x: 5, y: -15 }, "value": "356" },
    { "code": "WM", "value": "1109" },
    { "code": "EE", "value": "530" },
    { "code": "LDN", "value": "1667" },
    { "code": "SE", "dataLabels": { x: -35, y: 25 }, "value": "1138" },
    { "code": "SW", "dataLabels": { x: 40, y: 10 }, "value": "610" }]];

var admissionsPerAll = [[{ 'value': '20' }], [
    { "code": "NE", "value": "61", "dataLabels": { x: -15, y: 15 } },
    { "code": "NW", "value": "12", "dataLabels": { x: -5, y: -50 } },
    { "code": "YH", "value": "16" },
    { "code": "EM", "value": "11", "dataLabels": { x: 5, y: -15 } },
    { "code": "WM", "value": "27" },
    { "code": "EE", "value": "13" },
    { "code": "LDN", "value": "27" },
    { "code": "SE", "value": "18", "dataLabels": { x: -35, y: 25 } },
    { "code": "SW", "value": "16", "dataLabels": { x: 40, y: 10 } }]];

var admissionsPerMale = [[{ 'value': '11' }], [
    { "code": "NE", "dataLabels": { x: -15, y: 15 }, "value": "31" },
    { "code": "NW", "dataLabels": { x: -5, y: -50 }, "value": "8" },
    { "code": "YH", "value": "9" },
    { "code": "EM", "dataLabels": { x: 5, y: -15 }, "value": "6" },
    { "code": "WM", "value": "14" },
    { "code": "EE", "value": "9" },
    { "code": "LDN", "value": "15" },
    { "code": "SE", "dataLabels": { x: -35, y: 25 }, "value": "10" },
    { "code": "SW", "dataLabels": { x: 40, y: 10 }, "value": "8" }]];

var admissionsPerFemale = [[{ 'value': '28' }], [
    { "code": "NE", "dataLabels": { x: -15, y: 15 }, "value": "91" },
    { "code": "NW", "dataLabels": { x: -5, y: -50 }, "value": "16" },
    { "code": "YH", "value": "22" },
    { "code": "EM", "dataLabels": { x: 5, y: -15 }, "value": "15" },
    { "code": "WM", "value": "40" },
    { "code": "EE", "value": "17" },
    { "code": "LDN", "value": "40" },
    { "code": "SE", "dataLabels": { x: -35, y: 25 }, "value": "26" },
    { "code": "SW", "dataLabels": { x: 40, y: 10 }, "value": "23" }]];

var BMIAll = [[{ 'value': '27.7' }], [
    { "code": "NE", "dataLabels": { x: -15, y: 15 }, "value": "27.8" },
    { "code": "NW", "dataLabels": { x: -5, y: -50 }, "value": "27.5" },
    { "code": "YH", "value": "28.4" },
    { "code": "EM", "dataLabels": { x: 5, y: -15 }, "value": "27.9" },
    { "code": "WM", "value": "28.3" },
    { "code": "EE", "value": "27.7" },
    { "code": "LDN", "value": "26.7" },
    { "code": "SE", "dataLabels": { x: -35, y: 25 }, "value": "27.9" },
    { "code": "SW", "dataLabels": { x: 40, y: 10 }, "value": "27.6" }]];

var BMIMale = [[{ 'value': '27.6' }], [
    { "code": "NE", "dataLabels": { x: -15, y: 15 }, "value": "28.1" },
    { "code": "NW", "dataLabels": { x: -5, y: -50 }, "value": "27.3" },
    { "code": "YH", "value": "27.8" },
    { "code": "EM", "dataLabels": { x: 5, y: -15 }, "value": "27.8" },
    { "code": "WM", "value": "27.8" },
    { "code": "EE", "value": "27.6" },
    { "code": "LDN", "value": "26.9" },
    { "code": "SE", "dataLabels": { x: -35, y: 25 }, "value": "27.7" },
    { "code": "SW", "dataLabels": { x: 40, y: 10 }, "value": "28.2" }]];

var BMIFemale = [[{ 'value': '27.8' }], [
    { "code": "NE", "dataLabels": { x: -15, y: 15 }, "value": "27.5" },
    { "code": "NW", "dataLabels": { x: -5, y: -50 }, "value": "27.7" },
    { "code": "YH", "value": "28.9" },
    { "code": "EM", "dataLabels": { x: 5, y: -15 }, "value": "27.9" },
    { "code": "WM", "value": "28.8" },
    { "code": "EE", "value": "27.9" },
    { "code": "LDN", "value": "26.5" },
    { "code": "SE", "dataLabels": { x: -35, y: 25 }, "value": "28.1" },
    { "code": "SW", "dataLabels": { x: 40, y: 10 }, "value": "27.0" }]];

var all = [[
    {
        name: 'Underweight',
        value: 1.58,
        color: "#D0D0D0"
    }, {
        name: 'Normal',
        value: 34.11,
        color: "#ABABAB"
    }, {
        name: 'Overweight',
        value: 35.58,
        color: "#76D7C4"
    }, {
        name: 'Obese',
        value: 25.18,
        color: "#636363"
    }, {
        name: 'Morbidly Obese',
        value: 3.55,
        color: "#858585"
    }]];

var male = [[
    {
        name: 'Underweight',
        value: 1.36,
        color: "#D0D0D0"
    }, {
        name: 'Normal',
        value: 31.45,
        color: "#ABABAB"
    }, {
        name: 'Overweight',
        value: 39.81,
        color: "#76D7C4"
    }, {
        name: 'Obese',
        value: 24.92,
        color: "#636363"
    }, {
        name: 'Morbidly Obese',
        value: 2.47,
        color: "#858585"
    }]]

var female = [[
    {
        name: 'Underweight',
        value: 1.79,
        color: "#D0D0D0"
    }, {
        name: 'Normal',
        value: 36.69,
        color: "#ABABAB"
    }, {
        name: 'Overweight',
        value: 31.48,
        color: "#76D7C4"
    }, {
        name: 'Obese',
        value: 25.44,
        color: "#636363"
    }, {
        name: 'Morbidly Obese',
        value: 4.61,
        color: "#858585"
    }]]

var regionAll = [

    {
        'code': 'NE', 'data': [
            { name: "Underweight", value: 2.03, color: '#D0D0D0' },
            { name: "Normal", value: 31.72, color: '#ABABAB' },
            { name: "Overweight", value: 36.48, color: '#76D7C4' },
            { name: "Obese", value: 26.12, color: '#636363' },
            { name: "Morbidly Obese", value: 3.65, color: '#858585' }]
    },
    {
        'code': 'NW', 'data': [
            { name: "Underweight", value: 1.88, color: '#D0D0D0' },
            { name: "Normal", value: 34.65, color: '#ABABAB' },
            { name: "Overweight", value: 35.87, color: '#76D7C4' },
            { name: "Obese", value: 24.33, color: '#636363' },
            { name: "Morbidly Obese", value: 3.28, color: '#858585' }]
    },
    {
        'code': 'YH', 'data': [
            { name: "Underweight", value: 0.80, color: '#D0D0D0' },
            { name: "Normal", value: 28.07, color: '#ABABAB' },
            { name: "Overweight", value: 38.97, color: '#76D7C4' },
            { name: "Obese", value: 28.58, color: '#636363' },
            { name: "Morbidly Obese", value: 3.58, color: '#858585' }]
    },
    {
        'code': 'EM', 'data': [
            { name: "Underweight", value: 0.72, color: '#D0D0D0' },
            { name: "Normal", value: 34.15, color: '#ABABAB' },
            { name: "Overweight", value: 36.01, color: '#76D7C4' },
            { name: "Obese", value: 25.43, color: '#636363' },
            { name: "Morbidly Obese", value: 3.69, color: '#858585' }]
    },
    {
        'code': 'WM', 'data': [
            { name: "Underweight", value: 2.09, color: '#D0D0D0' },
            { name: "Normal", value: 28.67, color: '#ABABAB' },
            { name: "Overweight", value: 36.04, color: '#76D7C4' },
            { name: "Obese", value: 28.86, color: '#636363' },
            { name: "Morbidly Obese", value: 4.34, color: '#858585' }]
    },
    {
        'code': 'EE', 'data': [
            { name: "Underweight", value: 1.73, color: '#D0D0D0' },
            { name: "Normal", value: 35.27, color: '#ABABAB' },
            { name: "Overweight", value: 33.07, color: '#76D7C4' },
            { name: "Obese", value: 26.00, color: '#636363' },
            { name: "Morbidly Obese", value: 3.93, color: '#858585' }]
    },
    {
        'code': 'LDN', 'data': [
            { name: "Underweight", value: 2.04, color: '#D0D0D0' },
            { name: "Normal", value: 40.77, color: '#ABABAB' },
            { name: "Overweight", value: 33.73, color: '#76D7C4' },
            { name: "Obese", value: 20.89, color: '#636363' },
            { name: "Morbidly Obese", value: 2.22, color: '#858585' }]
    },
    {
        'code': 'SE', 'data': [
            { name: "Underweight", value: 1.20, color: '#D0D0D0' },
            { name: "Normal", value: 33.81, color: '#ABABAB' },
            { name: "Overweight", value: 35.80, color: '#76D7C4' },
            { name: "Obese", value: 24.67, color: '#636363' },
            { name: "Morbidly Obese", value: 4.52, color: '#858585' }]
    },
    {
        'code': 'SW', 'data': [
            { name: "Underweight", value: 1.05, color: '#D0D0D0' },
            { name: "Normal", value: 33.86, color: '#ABABAB' },
            { name: "Overweight", value: 33.61, color: '#76D7C4' },
            { name: "Obese", value: 25.65, color: '#636363' },
            { name: "Morbidly Obese", value: 3.13, color: '#858585' }]
    }

];

var regionMale = [

    {
        'code': 'NE', 'data': [
            { name: "Underweight", value: 2.31, color: '#D0D0D0' },
            { name: "Normal", value: 27.42, color: '#ABABAB' },
            { name: "Overweight", value: 40.20, color: '#76D7C4' },
            { name: "Obese", value: 26.55, color: '#636363' },
            { name: "Morbidly Obese", value: 3.52, color: '#858585' }]
    },
    {
        'code': 'NW', 'data': [
            { name: "Underweight", value: 1.44, color: '#D0D0D0' },
            { name: "Normal", value: 32.78, color: '#ABABAB' },
            { name: "Overweight", value: 40.18, color: '#76D7C4' },
            { name: "Obese", value: 23.53, color: '#636363' },
            { name: "Morbidly Obese", value: 2.07, color: '#858585' }]
    },
    {
        'code': 'YH', 'data': [
            { name: "Underweight", value: 0.37, color: '#D0D0D0' },
            { name: "Normal", value: 29.97, color: '#ABABAB' },
            { name: "Overweight", value: 42.27, color: '#76D7C4' },
            { name: "Obese", value: 25.71, color: '#636363' },
            { name: "Morbidly Obese", value: 1.68, color: '#858585' }]
    },
    {
        'code': 'EM', 'data': [
            { name: "Underweight", value: 0.56, color: '#D0D0D0' },
            { name: "Normal", value: 31.22, color: '#ABABAB' },
            { name: "Overweight", value: 40.09, color: '#76D7C4' },
            { name: "Obese", value: 25.37, color: '#636363' },
            { name: "Morbidly Obese", value: 2.76, color: '#858585' }]
    },
    {
        'code': 'WM', 'data': [
            { name: "Underweight", value: 2.49, color: '#D0D0D0' },
            { name: "Normal", value: 29.16, color: '#ABABAB' },
            { name: "Overweight", value: 38.77, color: '#76D7C4' },
            { name: "Obese", value: 26.18, color: '#636363' },
            { name: "Morbidly Obese", value: 3.41, color: '#858585' }]
    },
    {
        'code': 'EE', 'data': [
            { name: "Underweight", value: 1.83, color: '#D0D0D0' },
            { name: "Normal", value: 33.39, color: '#ABABAB' },
            { name: "Overweight", value: 36.30, color: '#76D7C4' },
            { name: "Obese", value: 24.52, color: '#636363' },
            { name: "Morbidly Obese", value: 3.96, color: '#858585' }]
    },
    {
        'code': 'LDN', 'data': [
            { name: "Underweight", value: 1.60, color: '#D0D0D0' },
            { name: "Normal", value: 36.40, color: '#ABABAB' },
            { name: "Overweight", value: 39.05, color: '#76D7C4' },
            { name: "Obese", value: 22.03, color: '#636363' },
            { name: "Morbidly Obese", value: 0.93, color: '#858585' }]
    },
    {
        'code': 'SE', 'data': [
            { name: "Underweight", value: 0.72, color: '#D0D0D0' },
            { name: "Normal", value: 31.53, color: '#ABABAB' },
            { name: "Overweight", value: 40.23, color: '#76D7C4' },
            { name: "Obese", value: 24.74, color: '#636363' },
            { name: "Morbidly Obese", value: 2.78, color: '#858585' }]
    },
    {
        'code': 'SW', 'data': [
            { name: "Underweight", value: 1.39, color: '#D0D0D0' },
            { name: "Normal", value: 24.54, color: '#ABABAB' },
            { name: "Overweight", value: 42.54, color: '#76D7C4' },
            { name: "Obese", value: 29.32, color: '#636363' },
            { name: "Morbidly Obese", value: 2.22, color: '#858585' }]
    }

];

var regionFemale = [

    {
        'code': 'NE', 'data': [
            { name: "Underweight", value: 1.78, color: '#D0D0D0' },
            { name: "Normal", value: 35.42, color: '#ABABAB' },
            { name: "Overweight", value: 33.28, color: '#76D7C4' },
            { name: "Obese", value: 25.75, color: '#636363' },
            { name: "Morbidly Obese", value: 3.76, color: '#858585' }]
    },
    {
        'code': 'NW', 'data': [
            { name: "Underweight", value: 2.30, color: '#D0D0D0' },
            { name: "Normal", value: 36.49, color: '#ABABAB' },
            { name: "Overweight", value: 31.64, color: '#76D7C4' },
            { name: "Obese", value: 25.12, color: '#636363' },
            { name: "Morbidly Obese", value: 4.45, color: '#858585' }]
    },
    {
        'code': 'YH', 'data': [
            { name: "Underweight", value: 1.19, color: '#D0D0D0' },
            { name: "Normal", value: 26.33, color: '#ABABAB' },
            { name: "Overweight", value: 35.93, color: '#76D7C4' },
            { name: "Obese", value: 31.21, color: '#636363' },
            { name: "Morbidly Obese", value: 5.33, color: '#858585' }]
    },
    {
        'code': 'EM', 'data': [
            { name: "Underweight", value: 0.88, color: '#D0D0D0' },
            { name: "Normal", value: 37.21, color: '#ABABAB' },
            { name: "Overweight", value: 31.75, color: '#76D7C4' },
            { name: "Obese", value: 25.50, color: '#636363' },
            { name: "Morbidly Obese", value: 4.66, color: '#858585' }]
    },
    {
        'code': 'WM', 'data': [
            { name: "Underweight", value: 1.64, color: '#D0D0D0' },
            { name: "Normal", value: 28.13, color: '#ABABAB' },
            { name: "Overweight", value: 33.04, color: '#76D7C4' },
            { name: "Obese", value: 31.81, color: '#636363' },
            { name: "Morbidly Obese", value: 5.37, color: '#858585' }]
    },
    {
        'code': 'EE', 'data': [
            { name: "Underweight", value: 1.62, color: '#D0D0D0' },
            { name: "Normal", value: 37.14, color: '#ABABAB' },
            { name: "Overweight", value: 29.88, color: '#76D7C4' },
            { name: "Obese", value: 27.45, color: '#636363' },
            { name: "Morbidly Obese", value: 3.91, color: '#858585' }]
    },
    {
        'code': 'LDN', 'data': [
            { name: "Underweight", value: 3.14, color: '#D0D0D0' },
            { name: "Normal", value: 44.85, color: '#ABABAB' },
            { name: "Overweight", value: 28.76, color: '#76D7C4' },
            { name: "Obese", value: 19.83, color: '#636363' },
            { name: "Morbidly Obese", value: 3.42, color: '#858585' }]
    },
    {
        'code': 'SE', 'data': [
            { name: "Underweight", value: 1.68, color: '#D0D0D0' },
            { name: "Normal", value: 36.02, color: '#ABABAB' },
            { name: "Overweight", value: 31.50, color: '#76D7C4' },
            { name: "Obese", value: 24.60, color: '#636363' },
            { name: "Morbidly Obese", value: 6.21, color: '#858585' }]
    },
    {
        'code': 'SW', 'data': [
            { name: "Underweight", value: 0.74, color: '#D0D0D0' },
            { name: "Normal", value: 42.23, color: '#ABABAB' },
            { name: "Overweight", value: 30.73, color: '#76D7C4' },
            { name: "Obese", value: 22.36, color: '#636363' },
            { name: "Morbidly Obese", value: 3.95, color: '#858585' }]
    }

];

var causesStartData = [[{ 'value': '125.4' }, { 'seriesName': 'Fast Food Outlets' }, { 'toolTipSuffix': '' }], [
    { "code": "NE", "dataLabels": { x: -15, y: 15 }, "value": "118.2" },
    { "code": "NW", "dataLabels": { x: -5, y: -50 }, "value": "114.2" },
    { "code": "YH", "value": "89.9" },
    { "code": "EM", "dataLabels": { x: 5, y: -15 }, "value": "88.4" },
    { "code": "WM", "value": "83.3" },
    { "code": "EE", "value": "92.7" },
    { "code": "LDN", "value": "74.6" },
    { "code": "SE", "dataLabels": { x: -35, y: 25 }, "value": "77.1" },
    { "code": "SW", "dataLabels": { x: 40, y: 10 }, "value": "90.8" }]];

var outlets = [[{ 'value': '125.4' }, { 'seriesName': 'Fast Food Outlets' }, { 'toolTipSuffix': '' }], [
    { "code": "NE", "dataLabels": { x: -15, y: 15 }, "value": "118.2" },
    { "code": "NW", "dataLabels": { x: -5, y: -50 }, "value": "114.2" },
    { "code": "YH", "value": "89.9" },
    { "code": "EM", "dataLabels": { x: 5, y: -15 }, "value": "88.4" },
    { "code": "WM", "value": "83.3" },
    { "code": "EE", "value": "92.7" },
    { "code": "LDN", "value": "74.6" },
    { "code": "SE", "dataLabels": { x: -35, y: 25 }, "value": "77.1" },
    { "code": "SW", "dataLabels": { x: 40, y: 10 }, "value": "90.8" }]];

var vegFruitPurchases = [[{ 'value': '2285' }, { 'seriesName': 'Fruit & Veg Purchases' }, { 'toolTipSuffix': ' (grams)' }], [
    { "code": "NE", "dataLabels": { x: -15, y: 15 }, "value": "1784" },
    { "code": "NW", "dataLabels": { x: -5, y: -50 }, "value": "2029" },
    { "code": "YH", "value": "2136" },
    { "code": "EM", "dataLabels": { x: 5, y: -15 }, "value": "2355" },
    { "code": "WM", "value": "2101" },
    { "code": "EE", "value": "2371" },
    { "code": "LDN", "value": "2447" },
    { "code": "SE", "dataLabels": { x: -35, y: 25 }, "value": "2505" },
    { "code": "SW", "dataLabels": { x: 40, y: 10 }, "value": "2505" }]];

var bingeDrinking = [[{ 'value': '4.02' }, { 'seriesName': 'Percentage of Region' }, { 'toolTipSuffix': ' %' }], [
    { "code": "NE", "dataLabels": { x: -15, y: 15 }, "value": "5.14" },
    { "code": "NW", "dataLabels": { x: -5, y: -50 }, "value": "4.66" },
    { "code": "YH", "value": "4.15" },
    { "code": "EM", "dataLabels": { x: 5, y: -15 }, "value": "3.76" },
    { "code": "WM", "value": "4.45" },
    { "code": "EE", "value": "4.64" },
    { "code": "LDN", "value": "2.03" },
    { "code": "SE", "dataLabels": { x: -35, y: 25 }, "value": "2.97" },
    { "code": "SW", "dataLabels": { x: 40, y: 10 }, "value": "4.33" }]];

var alcoholPurchases = [[{ 'value': '719' }, { 'seriesName': 'Alcohol Purchases' }, { 'toolTipSuffix': ' (ml)' }], [
    { "code": "NE", "dataLabels": { x: -15, y: 15 }, "value": "832" },
    { "code": "NW", "dataLabels": { x: -5, y: -50 }, "value": "1111" },
    { "code": "YH", "value": "784" },
    { "code": "EM", "dataLabels": { x: 5, y: -15 }, "value": "726" },
    { "code": "WM", "value": "627" },
    { "code": "EE", "value": "704" },
    { "code": "LDN", "value": "366" },
    { "code": "SE", "dataLabels": { x: -35, y: 25 }, "value": "741" },
    { "code": "SW", "dataLabels": { x: 40, y: 10 }, "value": "738" }]];

var physicallyInactive = [[{ 'value': '22.2' }, { 'seriesName': 'Inactive Adults' }, { 'toolTipSuffix': ' %' }], [
    { "code": "NE", "dataLabels": { x: -15, y: 15 }, "value": "23.4" },
    { "code": "NW", "dataLabels": { x: -5, y: -50 }, "value": "24.1" },
    { "code": "YH", "value": "22.7" },
    { "code": "EM", "dataLabels": { x: 5, y: -15 }, "value": "25.5" },
    { "code": "WM", "value": "22.2" },
    { "code": "EE", "value": "22.0" },
    { "code": "LDN", "value": "19.0" },
    { "code": "SE", "dataLabels": { x: -35, y: 25 }, "value": "18.7" },
    { "code": "SW", "dataLabels": { x: 40, y: 10 }, "value": "22.2" }]];

var walking = [[{ 'value': '22.9' }, { 'seriesName': 'Adults Walking' }, { 'toolTipSuffix': ' %' }], [
    { "code": "NE", "dataLabels": { x: -15, y: 15 }, "value": "20.4" },
    { "code": "NW", "dataLabels": { x: -5, y: -50 }, "value": "21.0" },
    { "code": "YH", "value": "19.8" },
    { "code": "EM", "dataLabels": { x: 5, y: -15 }, "value": "18.8" },
    { "code": "WM", "value": "19.0" },
    { "code": "EE", "value": "21.3" },
    { "code": "LDN", "value": "35.2" },
    { "code": "SE", "dataLabels": { x: -35, y: 25 }, "value": "22.1" },
    { "code": "SW", "dataLabels": { x: 40, y: 10 }, "value": "20.7" }]];

var income = [[{ 'value': '19045' }, { 'seriesName': 'Average Income' }, { 'toolTipSuffix': '' }], [
    { "code": "NE", "dataLabels": { x: -15, y: 15 }, "value": "15595" },
    { "code": "NW", "dataLabels": { x: -5, y: -50 }, "value": "16761" },
    { "code": "YH", "value": "16365" },
    { "code": "EM", "dataLabels": { x: 5, y: -15 }, "value": "17042" },
    { "code": "WM", "value": "16766" },
    { "code": "EE", "value": "20275" },
    { "code": "LDN", "value": "27151" },
    { "code": "SE", "dataLabels": { x: -35, y: 25 }, "value": "22375" },
    { "code": "SW", "dataLabels": { x: 40, y: 10 }, "value": "19077" }]];

