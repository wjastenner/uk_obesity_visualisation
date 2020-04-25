var selectedRegion = "LDN";
var regionSelected = false;
var chart;
var chart2;
var chart3;

var mapdata = [
  {
    name: "North East",
    id: "NE",
    path:
      "M407,-1004,388,-975,378,-974,394,-941,378,-934L378,-927L374,-924,364,-924,348,-909,349,-903,343,-896,359,-875,364,-869,354,-864,352,-840,359,-829,372,-836,381,-825,376,-808,382,-803,380,-799L380,-793L395,-778L395,-769L406,-773,417,-767,428,-775,431,-772,435,-782,450,-778,457,-771L477,-771L490,-777,524,-775,533,-788,503,-799,491,-809,494,-813,482,-823,475,-857,459,-892,461,-896,454,-909,456,-920,450,-929,452,-943,447,-964,433,-974,430,-972,424,-981,412,-998z",
  },
  {
    name: "North West",
    id: "NW",
    path:
      "M343,-896,318,-873L308,-873L306,-863,302,-857,294,-857,281,-854,273,-844,270,-831,269,-824,261,-816,255,-805,254,-793,250,-784,246,-781,269,-750,267,-741,278,-725L284,-725L282,-714,289,-699,296,-702,296,-706,307,-724,309,-714,318,-718,323,-725,330,-712,317,-697,320,-690,323,-686,320,-683,317,-686,304,-680,303,-651,308,-646,314,-645,298,-622,304,-601,303,-597,288,-588,287,-584,296,-575,298,-565,301,-563,310,-559,315,-551,307,-547,314,-540,320,-532,320,-525,325,-519L330,-519L345,-518,355,-510,372,-520L372,-527L387,-536,396,-550,404,-548,413,-556,408,-582,412,-589,408,-594,421,-611,407,-627,406,-636,398,-634,394,-643,398,-655,406,-664,392,-680,386,-687,376,-689,372,-698L364,-698L362,-706,354,-713,365,-728,375,-733,377,-731,380,-749,375,-752,380,-757,380,-764,386,-769,395,-769L395,-778L380,-793,382,-803,376,-808,381,-825,372,-836,359,-829,352,-840,354,-864,364,-869z",
  },
  {
    name: "Yorkshire <br>and the <br>Humber",
    id: "YH",
    path:
      "M533,-788,547,-777,558,-771L558,-764L564,-761,574,-737,587,-730,584,-727,606,-713,602,-711,593,-705,594,-690,599,-679,610,-661,627,-639,632,-628,621,-632,612,-630,604,-631,597,-637,591,-643,588,-648L585,-648L584,-646,585,-644,588,-641,599,-627,607,-621,609,-623,617,-612,608,-610,605,-602,606,-598,602,-596,593,-606,592,-614,594,-618,583,-626,580,-615,571,-618,565,-614,574,-610,566,-607,566,-601,551,-599,550,-608,539,-609,534,-598,522,-599,523,-603,520,-606,515,-600,514,-594,511,-592,504,-592,498,-582,497,-577,491,-571,483,-573,482,-576,477,-573,470,-577,456,-572,449,-577,437,-592,431,-605,421,-611,407,-627,406,-636,398,-634,394,-643,398,-655,406,-664,395,-676,386,-687,376,-689,372,-698L364,-698L362,-706,354,-713,365,-728,375,-733,377,-731,380,-749,375,-752,380,-757,380,-764,386,-769,395,-769,406,-773,417,-767,428,-775,431,-772,435,-782,450,-778,455,-773,457,-771L477,-771L490,-777,524,-775z",
  },
  {
    name: "East Midlands",
    id: "EM",
    path:
      "M617,-612,629,-608,635,-599,639,-589,651,-567,653,-555L653,-540L641,-533,633,-523,627,-513,622,-506,633,-503,639,-497,641,-491,646,-492,645,-483,636,-477,624,-473,622,-465,609,-465,592,-461,582,-466,569,-459,567,-449,576,-448,584,-429,573,-414,569,-413,572,-404,565,-399,562,-392,553,-395,554,-387,551,-382,533,-371,527,-370,533,-360,527,-352,519,-360,503,-355,503,-349,495,-343,486,-345,481,-362,488,-365,481,-376,488,-383,487,-391,492,-401,488,-405,498,-409,483,-432,460,-447,457,-456,459,-461,452,-467,448,-467,443,-471,445,-482,454,-485,453,-491,448,-494,428,-498,425,-506,431,-517,436,-524,431,-533,429,-546,423,-552,413,-556,408,-582,412,-589,408,-594,421,-611,431,-605,437,-592,449,-577,456,-572,470,-577,477,-573,482,-576,483,-573,491,-571,497,-577,498,-582,504,-592,511,-592,514,-594,515,-600,520,-606,523,-603,522,-599,534,-598,539,-609,550,-608,551,-599,566,-601,566,-607,574,-610,565,-614,571,-618,580,-615,583,-626,594,-618,592,-614,593,-606,602,-596,606,-598,605,-602,608,-610z",
  },
  {
    name: "West Midlands",
    id: "WM",
    path:
      "M334,-519,335,-509,327,-503,325,-511,318,-514,314,-511,311,-515,302,-509,296,-509,291,-494,291,-486,297,-485,304,-478,307,-475,303,-472,301,-464,299,-457,293,-454,290,-450,294,-441,303,-445,306,-444,304,-439,301,-436,289,-434,280,-429,281,-425,286,-420,299,-409L309,-409L310,-406,308,-404,303,-402,305,-396,301,-393,296,-386,293,-373L293,-360L298,-345,307,-335L315,-335L320,-336,327,-329,333,-319,341,-317,353,-322,362,-329,364,-335,358,-340,359,-347,364,-350L374,-350L377,-343L386,-343L395,-348,406,-349,413,-353,421,-354,428,-348,430,-354,423,-360,435,-366,444,-354,450,-355,451,-351,446,-345,451,-341,461,-346,465,-365,481,-376,488,-383,487,-391,492,-401,488,-405,498,-409,483,-432,460,-447,457,-456,459,-461,452,-467,448,-467,443,-471,445,-482,454,-485,453,-491,448,-494,428,-498,425,-506,436,-524,431,-533,429,-546,423,-552,413,-556,404,-548,396,-550,387,-536,372,-527L372,-520L355,-510,345,-518,336,-519z",
  },
  {
    name: "London",
    id: "LDN",
    path:
      "M568,-282,573,-274,572,-263,570,-259,572,-256,577,-252,585,-247,591,-243,589,-241,589,-236,591,-234,593,-235,596,-243,599,-241,601,-239,601,-234,605,-235,608,-234,610,-230,613,-228,618,-233,622,-236,626,-234,627,-228,634,-229,636,-235,641,-240,641,-252,647,-258,648,-262,651,-270,660,-272,655,-277,648,-287,636,-285,632,-282,622,-288L622,-297L609,-297L598,-291,590,-287,582,-282,572,-284z",
  },
  {
    name: "South West",
    id: "SW",
    path:
      "M341,-317,353,-322,362,-329,364,-335,358,-340,359,-347,364,-350L374,-350L377,-343L386,-343L395,-348,406,-349,413,-353,421,-354,428,-348,430,-354,423,-360,435,-366,444,-354,450,-355,451,-351,446,-345,451,-341,450,-334,447,-325,444,-316,443,-310,444,-298,448,-294,443,-290,446,-282,444,-276,447,-273,452,-266,462,-254,461,-250,457,-247,459,-244,464,-239,465,-233,462,-233,462,-225,460,-219,452,-220,449,-214,443,-212,448,-201,451,-187,455,-178,452,-175,452,-172,452,-169,448,-166,441,-172,432,-174,428,-177,415,-174,425,-162,428,-164,431,-163,431,-159,426,-157,426,-152,431,-152,432,-144,434,-136,438,-137,442,-130,438,-126,433,-128,421,-126,416,-120,416,-115,420,-114,416,-110L416,-107L410,-106,406,-105,404,-104,399,-107,388,-111,384,-110,371,-112,364,-114,362,-112,364,-107,359,-106,354,-106,344,-115,331,-125,321,-128,312,-131,306,-127,299,-125,294,-126,291,-124,288,-122,277,-123,273,-121,270,-114,263,-110,256,-111,250,-102,246,-94,247,-88,248,-84,242,-84,241,-80,241,-76,249,-75,245,-69,244,-65,239,-64,234,-60,229,-56,229,-45,225,-43,220,-40,215,-46,212,-44,205,-48,205,-51,203,-56,195,-60,190,-60,187,-57,178,-62,176,-70,172,-69,172,-64,167,-61,165,-64,163,-67,157,-70L146,-70L142,-69,138,-66,118,-65,113,-69,108,-67,109,-60,106,-53,101,-48,96,-50,91,-46,85,-45,84,-40,81,-36,78,-37,77,-41L73,-41L73,-37L71,-33,71,-29,69,-28,73,-23,73,-19,69,-15,66,-11,64,-13,60,-11,58,-6,56,-4,51,-7,48,-12,48,-19,46,-25,40,-28,33,-30,28,-34,25,-35,22,-34,21,-30,20,-25,9,-21,2,-20,0,-27,2,-33L2,-39L10,-46,19,-50,27,-52,31,-48,37,-52,38,-56,45,-55,53,-63,56,-68,60,-69,61,-72,64,-74L64,-81L68,-85,77,-86,79,-99,79,-107,84,-106,90,-109,91,-112,96,-114,102,-114,106,-117,108,-123,109,-128L113,-128L119,-131,120,-136,123,-140,130,-142,133,-146,132,-160,132,-169,136,-180,138,-186,142,-187,146,-185,151,-181,155,-180,161,-180,165,-185,170,-190,168,-205,170,-213,178,-215,195,-217,208,-218,224,-219,236,-216,243,-219,255,-215,260,-210,271,-210,283,-213,291,-214,299,-213,302,-219,300,-227,304,-240,314,-247,320,-257,334,-263,338,-276,340,-289,338,-302z",
  },
  {
    name: "South East",
    id: "SE",
    path:
      "M442,-130,438,-137,434,-136,431,-152,426,-152,426,-157,431,-159,431,-163,428,-164,425,-162,415,-174,428,-177,432,-174,441,-172,448,-166,452,-169,452,-175,455,-178,451,-187,448,-201,443,-212,449,-214,452,-220,460,-219,462,-225,462,-233,465,-233,464,-239,457,-247,461,-250,462,-254,447,-273,444,-276,446,-282,443,-290,448,-294,444,-298,443,-310,450,-334,451,-341,461,-346,465,-365,481,-376,488,-365,481,-362,486,-345,495,-343,503,-349,503,-355,519,-360,527,-352,533,-360,527,-370,533,-371,551,-382,554,-380,559,-370,552,-360,554,-355,549,-333,557,-329,566,-321,562,-316,555,-317,548,-325,544,-321,553,-312,561,-305,569,-293,565,-289,568,-282,573,-274,572,-263,570,-259,577,-252,586,-247,591,-243,589,-241,589,-236,591,-234,593,-235,596,-243,599,-241,601,-239,601,-234,605,-235,608,-234,610,-230,613,-228,619,-234,622,-236,626,-234,627,-228,634,-229,636,-235,641,-240,641,-252,647,-258,648,-262,656,-260,662,-257,670,-259,674,-265,678,-266,682,-266,688,-266,695,-266,696,-265,697,-263,699,-262,704,-258,708,-258,713,-255L719,-255L725,-250,730,-245,733,-243,735,-246,742,-247,754,-248,759,-248,766,-250,772,-251,774,-252,777,-251,779,-249,779,-245,777,-241,774,-241,771,-240,771,-236,773,-232,776,-225,777,-216,774,-209,768,-203,756,-199,754,-197,751,-196,741,-194,734,-188,731,-182,730,-176,732,-169,732,-167,727,-167,716,-169,712,-170,708,-169,702,-163,699,-159,688,-155,671,-151,666,-149,660,-142,656,-136,654,-134,651,-134,649,-135,642,-138L639,-138L636,-140,632,-142,622,-144,615,-147,603,-149L596,-149L592,-147,586,-145,576,-144,566,-143,557,-141,548,-138,544,-133,542,-130,541,-130,536,-134,530,-138,522,-139,514,-141,510,-139,506,-140,504,-138,498,-140,494,-145,490,-146,484,-149,483,-147,485,-144,484,-141,480,-140,475,-138,464,-135,462,-132,463,-129,466,-127,470,-130,479,-132,482,-135,485,-137,489,-136,493,-133,500,-131,504,-130,509,-127,510,-122,508,-119,503,-118,500,-115,500,-111,499,-107,495,-105,488,-104,484,-104,479,-111,473,-114,467,-118,464,-119,457,-118,456,-121,459,-124,461,-126,458,-129,455,-128,450,-130,445,-131z",
  },
  {
    name: "East of England",
    id: "EE",
    path:
      "M646,-492,650,-493,657,-488,659,-495,665,-498,665,-506,668,-517,677,-520,698,-521,717,-521,729,-520,740,-518,747,-518,758,-514,773,-502,784,-493,793,-485,800,-469L800,-457L803,-441,800,-428,796,-412,792,-407,792,-389,788,-373,784,-369,777,-364,772,-354,765,-348,758,-344,756,-339,760,-335,759,-329,748,-319,739,-314,733,-314,731,-319,727,-318,720,-313,716,-310L721,-310L724,-308L724,-299L724,-290L724,-287L716,-278,706,-271,696,-273,695,-266,682,-266,674,-265,670,-259,662,-257,656,-260,648,-262,651,-270,660,-272,655,-277,648,-287,636,-285,632,-282,622,-288L622,-297L609,-297L603,-293,598,-291,592,-288,589,-286,582,-282,572,-284,568,-282,565,-289,569,-293,561,-305,544,-321,548,-325,555,-317,562,-316,566,-321,557,-329,549,-333,554,-355,552,-360,559,-370,554,-380,551,-382,554,-387,553,-395,562,-392,565,-399,572,-404,569,-413,573,-414,584,-429,576,-448,567,-449,569,-459,582,-466,592,-461,609,-465,622,-465,624,-473,636,-477,645,-483z",
  },
];

var mapOptions = {
  chart: {
    backgroundColor: "black",
  },

  title: {
    text: "Obesity Admissions (All)",
    style: {
      color: "white",
      fontWeight: "bold",
    },
  },
  navigation: {
    buttonOptions: {
      theme: {
        stroke: "white",
        fill: "white",
        states: {
          hover: {
            stroke: "#76D7C4",
            fill: "#76D7C4",
          },
          select: {
            stroke: "#d1d1d1",
            fill: "#76D7C4",
          },
        },
      },
    },
  },

  tooltip: {
    headerFormat: "",
    pointFormat: "{series.name}: <b>{point.value}</b><br/>",
  },

  colorAxis: {
    min: 486,
    max: 2274,
    // type: 'logarithmic',
    minColor: "#FFFFFF",
    maxColor: "#595757",
  },

  legend: {
    title: {
      text: "",
    },
    layout: "vertical",
    align: "left",
    verticalAlign: "top",
    floating: true,
    y: 30,
  },

  plotOptions: {
    series: {
      allowPointSelect: false,
      point: {
        events: {
          click: function () {
            selectRegionData(this.name, this.id, this.value, this.series.name);
          },
        },
      },
    },
  },

  series: [
    {
      data: startData[1],
      mapData: mapdata,
      name: "Admissions",
      joinBy: ["id", "code"],
      dataLabels: {
        enabled: true,
        format: "{point.name}",
      },
      states: {
        hover: {
          color: "#76D7C4",
          borderColor: "black",
        },
        // select: {
        //     color: '#76D7C4'
        // }
      },
      borderColor: "#76D7C4",
      borderWidth: 2,
    },
  ],
};

var mapUpdateOptions = {
  chart: {
    backgroundColor: "black",
  },

  title: {
    text: "Obesity Admissions (All)",
    style: {
      color: "white",
      fontWeight: "bold",
    },
  },
  navigation: {
    buttonOptions: {
      theme: {
        stroke: "white",
        fill: "white",
        states: {
          hover: {
            stroke: "#76D7C4",
            fill: "#76D7C4",
          },
          select: {
            stroke: "#d1d1d1",
            fill: "#76D7C4",
          },
        },
      },
    },
  },

  tooltip: {
    headerFormat: "",
    pointFormat: "{series.name}: <b>{point.value}</b><br/>",
  },

  colorAxis: {
    min: 486,
    max: 2274,
    // type: 'logarithmic',
    minColor: "#FFFFFF",
    maxColor: "#595757",
  },

  legend: {
    title: {
      text: "",
    },
    layout: "vertical",
    align: "left",
    verticalAlign: "top",
    floating: true,
    y: 30,
  },

  plotOptions: {
    series: {
      allowPointSelect: false,
      point: {
        events: {
          click: function () {
            selectRegionData(this.name, this.id, this.value, this.series.name);
          },
        },
      },
    },
  },

  series: [
    {
      data: startData[1],
      mapData: mapdata,
      name: "Admissions",
      joinBy: ["id", "code"],
      dataLabels: {
        enabled: true,
        format: "{point.name}",
      },
      states: {
        hover: {
          color: "#76D7C4",
          borderColor: "black",
        },
        // select: {
        //     color: '#76D7C4'
        // }
      },
      borderColor: "#76D7C4",
      borderWidth: 2,
    },
  ],
};

function changeMap() {
  var selectedMetric = document.getElementById("selectedMetric").value;

  var selectedGroup = document.getElementById("selectedGroup").value;

  var chartTitle =
    $("#selectedMetric option:selected").text() +
    " (" +
    $("#selectedGroup option:selected").text() +
    ")";

  var seriesName = $("#selectedMetric option:selected")
    .text()
    .replace("Obesity", "");

  var dataName = selectedMetric + selectedGroup;

  var data = window[dataName];

  var statsTitle = $("#selectedMetric option:selected").text();

  var statsData = data[0][0].value;

  $(".stats-metric.prevalence").empty();
  $(".stats-metric.prevalence").append(statsTitle);
  $("#statsEngNum").empty();
  $("#statsEngNum").append(statsData);
  $("#statsSelectedNum").empty();

  function region(locateRegion) {
    return locateRegion.code === selectedRegion;
  }

  var selectedRegionStat = data[1].find(region).value;

  $("#statsSelectedNum").append(selectedRegionStat);

  var max = Math.max.apply(
    Math,
    data[1].map(function (o) {
      return o.value;
    })
  );

  var min = Math.min.apply(
    Math,
    data[1].map(function (o) {
      return o.value;
    })
  );

  mapUpdateOptions.title.text = chartTitle;

  mapUpdateOptions.series[0].name = seriesName;

  mapUpdateOptions.colorAxis.min = min;

  mapUpdateOptions.colorAxis.max = max;

  mapUpdateOptions.series[0].data = data[1];

  chart = Highcharts.mapChart("container", mapUpdateOptions);

  // setTimeout(function () { chart.get(selectedRegion).select(); }, 3000);
}

function changeOtherCharts() {
  if (!regionSelected) {
    var selectedGroup = document.getElementById("selectedGroup").value;

    var otherChartGroup = selectedGroup.toLowerCase();

    var treeMapData = window[otherChartGroup];

    updatedTreeMap.series[0].data = treeMapData[0];

    updatedTreeMap.title.text = "Weight Categorisation (" + selectedGroup + ")";

    chart2 = Highcharts.mapChart("container2", updatedTreeMap);
  } else {
    selectRegionTreeMapData();
  }
}

$(function () {
  chart = Highcharts.mapChart("container", mapOptions);

  chart2 = Highcharts.chart("container2", treeMap);

  chart3 = Highcharts.chart("container3", lineChart);
});

function switchPages(event) {
  var currentPage = $(".page.active");

  $(".nav-item.active").attr("onclick", "switchPages(event)");

  $(".nav-item").removeClass("active");

  $(".page.active").removeClass("active");

  var currentPageNumber = parseInt(currentPage.attr("value"));

  var selectedSlide = event.target.id;

  $("#" + selectedSlide).removeAttr("onclick");

  $("#" + selectedSlide).addClass("active");

  $("." + selectedSlide).addClass("active");

  var selectedPage = $("." + selectedSlide);

  if (selectedSlide === "prevalence") {
    $("#previous-btn").removeClass("hide");
    $("#next-btn").removeClass("hide");
    $(".page.home").css({ left: "-100%" });
    $(".page.prevalence").css({ left: "120px" });
    $(".page.causes").css({ left: "100%" });
  } else if (selectedSlide === "causes") {
    $("#previous-btn").removeClass("hide");
    $("#next-btn").addClass("hide");
    $(".page.causes").css({ left: "120px" });
    $(".page.prevalence").css({ left: "-100%" });
    $(".page.home").css({ left: "-200%" });
  } else if (selectedSlide === "home") {
    $("#previous-btn").addClass("hide");
    $("#next-btn").removeClass("hide");
    $(".page.home").css({ left: "120px" });
    $(".page.causes").css({ left: "200%" });
    $(".page.prevalence").css({ left: "100%" });
  }
}

function changePage(direction) {
  var currentPage = parseInt($(".page.active").attr("value"));

  $(".nav-item.active").attr("onclick", "switchPages(event)");

  $(".nav-item").removeClass("active");

  $(".page.active").removeClass("active");

  var selectedSlide;

  console.log(currentPage);

  if (direction === "next") {
    if (currentPage === 1) {
      selectedSlide = "prevalence";
    } else if (currentPage === 2) {
      selectedSlide = "causes";
    }
  } else if (direction === "back") {
    if (currentPage === 3) {
      selectedSlide = "prevalence";
    } else if (currentPage === 2) {
      selectedSlide = "home";
    }
  }

  $("#" + selectedSlide).removeAttr("onclick");

  $("#" + selectedSlide).addClass("active");

  $("." + selectedSlide).addClass("active");

  var selectedPage = $("." + selectedSlide);

  if (selectedSlide === "prevalence") {
    $("#previous-btn").removeClass("hide");
    $("#next-btn").removeClass("hide");
    $(".page.home").css({ left: "-100%" });
    $(".page.prevalence").css({ left: "120px" });
    $(".page.causes").css({ left: "100%" });
  } else if (selectedSlide === "causes") {
    $("#previous-btn").removeClass("hide");
    $("#next-btn").addClass("hide");
    $(".page.causes").css({ left: "120px" });
    $(".page.prevalence").css({ left: "-100%" });
    $(".page.home").css({ left: "-200%" });
  } else if (selectedSlide === "home") {
    $("#previous-btn").addClass("hide");
    $("#next-btn").removeClass("hide");
    $(".page.home").css({ left: "120px" });
    $(".page.causes").css({ left: "200%" });
    $(".page.prevalence").css({ left: "100%" });
  }
}

function selectRegionData(name, id, value, metric) {
  if (id != selectedRegion || (id === selectedRegion && !regionSelected)) {
    var find = "<br>";
    var re = new RegExp(find, "g");

    name = name.replace(re, "");

    $("#statsSelectedName, #statsSelectedNum, #statsSelectedMetric").empty();
    $("#statsSelectedName").append(name);
    $("#statsSelectedNum").append(value);
    $("#statsSelectedMetric").append(metric);

    selectedRegion = id;

    // could add functionality to change tree map depending on what part of the map is selected

    regionSelected = true;

    selectRegionTreeMapData();
  }
}

function selectRegionTreeMapData() {
  var selectedGroup = document.getElementById("selectedGroup").value;

  var dataName = "region" + selectedGroup;

  console.log(dataName);

  var data = window[dataName];

  var selectedData = data.find(function (data) {
    return data.code === selectedRegion;
  });

  console.log(selectedData.data);

  updatedTreeMap.series[0].data = selectedData.data;

  updatedTreeMap.title.text =
    "Weight Categorisation (" + selectedRegion + " " + selectedGroup + ")";

  chart2 = Highcharts.mapChart("container2", updatedTreeMap);
}

function deselectRegion() {
  if (regionSelected) {
    regionSelected = false;
    changeOtherCharts();
  }
}

var treeMap = {
  chart: {
    backgroundColor: "black",
    plotBorderColor: "white",
    plotBorderWidth: 2,
    marginBottom: 45,
  },
  title: {
    text: "Weight Categorisation (All)",
    style: {
      color: "white",
      fontWeight: "bold",
    },
  },

  navigation: {
    buttonOptions: {
      theme: {
        stroke: "white",
        fill: "white",
        states: {
          hover: {
            stroke: "#76D7C4",
            fill: "#76D7C4",
          },
          select: {
            stroke: "#d1d1d1",
            fill: "#76D7C4",
          },
        },
      },
    },
  },

  exporting: {
    buttons: {
      customButton: {
        text: "Deselect Region",
        onclick: function () {
          deselectRegion();
        },
        align: "left",
        verticalAlign: "bottom",
        x: 0,
        y: 0,
      },
    },
  },

  series: [
    {
      type: "treemap",
      layoutAlgorithm: "squarified",
      data: all[0],
      borderWidth: 0,
      states: {
        hover: {
          color: "white",
          borderColor: "white",
          borderWidth: 3,
        },
      },
      tooltip: {
        valueSuffix: "%",
      },
    },
  ],
};

var updatedTreeMap = {
  chart: {
    backgroundColor: "black",
    plotBorderColor: "white",
    plotBorderWidth: 2,
    marginBottom: 45,
  },
  title: {
    text: "Weight Categorisation (All)",
    style: {
      color: "white",
      fontWeight: "bold",
    },
  },

  navigation: {
    buttonOptions: {
      theme: {
        stroke: "white",
        fill: "white",
        states: {
          hover: {
            stroke: "#76D7C4",
            fill: "#76D7C4",
          },
          select: {
            stroke: "#d1d1d1",
            fill: "#76D7C4",
          },
        },
      },
    },
  },

  exporting: {
    buttons: {
      customButton: {
        text: "Deselect Region",
        onclick: function () {
          deselectRegion();
        },
        align: "left",
        verticalAlign: "bottom",
        x: 0,
        y: 0,
      },
    },
  },

  series: [
    {
      type: "treemap",
      layoutAlgorithm: "squarified",
      data: all[0],
      borderWidth: 0,
      states: {
        hover: {
          color: "white",
          borderColor: "white",
          borderWidth: 3,
        },
      },
      tooltip: {
        valueSuffix: "%",
      },
    },
  ],
};

var lineChart = {
  chart: {
    type: "area",
    backgroundColor: "black",
  },
  title: {
    text: "Obesity Admissions Over Time",
    style: {
      color: "white",
      fontWeight: "bold",
    },
  },
  navigation: {
    buttonOptions: {
      theme: {
        stroke: "white",
        fill: "white",
        states: {
          hover: {
            stroke: "#76D7C4",
            fill: "#76D7C4",
          },
          select: {
            stroke: "#d1d1d1",
            fill: "#76D7C4",
          },
        },
      },
    },
  },
  xAxis: {
    categories: [
      "07/08",
      "08/09",
      "09/10",
      "10/11",
      "11/12",
      "12/13",
      "13/14",
      "14/15",
      "15/16",
      "16/17",
    ],
    tickmarkPlacement: "on",
    title: {
      enabled: false,
      style: {
        color: "white",
        fontWeight: "bold",
      },
    },
    labels: {
      style: {
        color: "white",
        fontWeight: "bold",
      },
    },
  },
  yAxis: {
    title: {
      text: "Admissions",
      style: {
        color: "#76D7C4",
        fontWeight: "bold",
      },
    },
    labels: {
      style: {
        color: "white",
        fontWeight: "bold",
      },
    },
  },
  tooltip: {
    split: true,
    valueSuffix: " ",
  },
  plotOptions: {
    area: {
      stacking: "normal",
      lineColor: "#76D7C4",
      lineWidth: 3,
      marker: {
        lineWidth: 1,
        lineColor: "white",
        fillColor: "#76D7C4",
        lineWidth: 2,
      },
    },
    series: {
      fillOpacity: 0.9,
      marker: {
        enabled: true,
      },
    },
  },
  legend: {
    itemStyle: {
      color: "#76D7C4",
      fontWeight: "bold",
    },
    itemHoverStyle: {
      color: "#76D7C4",
    },
    itemHiddenStyle: {
      color: "rgba(118,215,196, 0.5)",
    },
  },
  series: [
    {
      id: "Male",
      name: "Male",
      data: [1405, 2077, 2495, 2919, 2993, 2950, 2598, 2496, 2573, 2959],
      color: "white",
    },
    {
      id: "Female",
      name: "Female",
      data: [3613, 5910, 8074, 8654, 8740, 8007, 6746, 6633, 7356, 7745],
      color: "#636363",
    },
  ],
};
