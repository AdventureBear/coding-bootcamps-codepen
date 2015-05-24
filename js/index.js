$(document).ready(function() {
  var city="test";

//Raw data on Bootcamps
//JSON file goes here?
  var bootcamps = [
    {
      "name": "App Academy",
      "cost": "18000",
      "weeks": "12",
      "finance": false,
      "cities": [
        "New York",
        "San Francisco"
      ]
    },
    {
      "name": "Viking Code School",
      "cost": "18000",
      "weeks": "14",
      "finance": false,
      "cities": [
        "online"
      ]
    },
    {
      "name": "Hack Reactor",
      "cost": "17780",
      "weeks": "12",
      "finance": true,
      "cities": [
        "New York",
        "San Francisco"
      ]
    },
    {
      "name": "Hackbright Academy",
      "cost": "15000",
      "weeks": "10",
      "finance": true,
      "cities": [
        "San Francisco"
      ]
    },
    {
      "name": "Dev Bootcamp",
      "cost": "13950",
      "finance": true,
      "weeks": "19",
      "cities": [
        "New York",
        "San Francisco",
        "Chicago"
      ]
    },
    {
      "name": "General Asssembly",
      "cost": "11500",
      "finance": true,
      "weeks": "12",
      "cities": [
        "Washington, DC",
        "Austin",
        "Boston",
        "Chicago",
        "Hong Kong",
        "London",
        "Los Angeles",
        "Melbourne",
        "New York cities",
        "San Francisco",
        "Seattle",
        "Singapore"
      ]
    },
    {
      "name": "Angel Hack",
      "cost": "14250",
      "finance": true,
      "weeks": "12",
      "cities": [
        "San Francisco"
      ]
    },
    {
      "name": "Bitmaker Labs",
      "cost": "12000",
      "finance": true,
      "weeks": "12",
      "cities": [
        "Toronto"
      ]
    },
    {
      "name": "CoderVox",
      "cost": "9980",
      "finance": true,
      "weeks": "12",
      "cities": [
        "Austin"
      ]
    },
    {
      "name": "Coding Dojo",
      "cost": "12500",
      "finance": true,
      "weeks": "12",
      "cities": [
        "New York",
        "San Francisco",
        "Chicago"
      ]
    },
    {
      "name": "Epicodus",
      "cost": "4500",
      "finance": false,
      "weeks": "15",
      "cities": [
        "Portland"
      ]
    },
    {
      "name": "Flat Iron School",
      "cost": "15000",
      "finance": true,
      "weeks": "12",
      "cities": [
        "New York"
      ]
    },
    {
      "name": "Galvanize",
      "cost": "21000",
      "finance": true,
      "weeks": "24",
      "cities": [
        "Boulder",
        "Denver",
        "Seattle",
        "San Francisco",
        "Fort Collins"
      ]
    },
    {
      "name": "The Iron Yard",
      "cost": "12000",
      "finance": true,
      "weeks": "19",
      "cities": [
        "Atlanta",
        "Austin",
        "Colombia, SC",
        "Charleston, SC",
        "Houston",
        "Greenville, SC",
        "Las Vegas",
        "Little Rock",
        "Nashville",
        "Orlando",
        "Raleigh - Durham",
        "Tampa - St. Petersburg",
        "Washington DC"
      ]
    },
    {
      "name": "Launch Academy",
      "cost": "12500",
      "finance": true,
      "weeks": "10",
      "cities": [
        "Boston"
      ]
    },
    {
      "name": "Maker Square",
      "cost": "16920",
      "finance": true,
      "weeks": "12",
      "cities": [
        "Los Angeles",
        "San Francisco",
        "Austin"
      ]
    },
    {
      "name": "Refactor U",
      "cost": "13500",
      "finance": true,
      "weeks": "10",
      "cities": [
        "Boulder"
      ]
    },
    {
      "name": "Rocket U",
      "cost": "12500",
      "finance": true,
      "weeks": "12",
      "cities": [
        "New York",
        "San Francisco",
        "Chicago"
      ]
    },
    {
      "name": "Sabio",
      "cost": "13450",
      "finance": true,
      "weeks": "12",
      "cities": [
        "Los Angeles"
      ]
    },
    {
      "name": "Shillington School",
      "cost": "12950",
      "finance": true,
      "weeks": "12",
      "cities": [
        "New York",
        "Sydney",
        "Brisbane",
        "London",
        "Manchester",
        "Melbourne"
      ]
    },
    {
      "name": "The Tech Academy",
      "cost": "9000",
      "finance": true,
      "weeks": "20",
      "cities": [
        "Portland"
      ]
    },
    {
      "name": "Turing School",
      "cost": "17500",
      "finance": true,
      "weeks": "27",
      "cities": [
        "Denver"
      ]
    },
    {
      "name": "Free Code Camp",
      "cost": "0",
      "finance": true,
      "weeks": "0",
      "cities": [
        "Online"
      ]
    }
  ];
  //var campNameLabels = [];
  var campNameLabels = getBootcamps(bootcamps);


  //console.log(campNameLabels);

  function init(){
    console.log(city);
    console.log(campNameLabels);
    //trying to reset the animation--doesn't work
    //$('#city-buttons').removeClass( "animate" );
  }

  $('#city-buttons').on("click", "span", function(){
    $(this).addClass('animated tada');
    city = getCity($(this));
    //campNameLabels = getBootcamps(bootcamps);
    init();
  });


  function getCity(element){
    //console.log(element.attr("id"));
    //element.removeClass('animated tada');
    return element.attr("id");
  };

  function getBootcamps(bootCampObject) {
    var bootcampNames = [];
    for (var camp in bootCampObject) {
      bootcampNames.push(bootCampObject[camp].name);
      // bootcampCosts.push(bootCampObject[camp].cost);
    }
    return bootcampNames;
  }





  $('#calculate').on("click", function() {

    var income = $('#income').val();
    var weeklyIncome = income / 50;


//Parse the JSON file to get the labels & other data for the chart

    var data = {
      labels: campNameLabels, //['test', 'Q2', 'Q3', 'Q4'],
      series: [
        [800000, 1200000, 1400000, 1300000],
        [200000, 400000, 500000, 300000],
        [100000, 200000, 400000, 600000]
      ]

    };

// We are setting a few options for our chart and override the defaults
    var options = {

      axisY: {
// Lets offset the chart a bit from the labels
        offset: 30,

        labelInterpolationFnc: function(value) {
          return '$' + value;
        }
      }
    };


    new Chartist.Bar('.ct-chart', data, options);


  });
});