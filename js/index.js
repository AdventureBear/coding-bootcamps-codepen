$(document).ready(function() {

  $('#target').append("change it");

  var city = "test";
  var lastYearincome = 52000;
  //var workingCosts = [];
  //var workingCostOpportunity = [];

  var bootcamps = [{
    "name": "App Academy",
    "cost": "18000",
    "weeks": "12",
    "finance": false,
    "cities": [
      "New York",
      "San Francisco"
    ]
  }, {
    "name": "Viking Code School",
    "cost": "18000",
    "weeks": "14",
    "finance": false,
    "cities": [
      "online"
    ]
  }, {
    "name": "Hack Reactor",
    "cost": "17780",
    "weeks": "12",
    "finance": true,
    "cities": [
      "New York",
      "San Francisco"
    ]
  }, {
    "name": "Hackbright Academy",
    "cost": "15000",
    "weeks": "10",
    "finance": true,
    "cities": [
      "San Francisco"
    ]
  }, {
    "name": "Dev Bootcamp",
    "cost": "13950",
    "finance": true,
    "weeks": "19",
    "cities": [
      "New York",
      "San Francisco",
      "Chicago"
    ]
  }, {
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
  }, {
    "name": "Angel Hack",
    "cost": "14250",
    "finance": true,
    "weeks": "12",
    "cities": [
      "San Francisco"
    ]
  }, {
    "name": "Bitmaker Labs",
    "cost": "12000",
    "finance": true,
    "weeks": "12",
    "cities": [
      "Toronto"
    ]
  }, {
    "name": "CoderVox",
    "cost": "9980",
    "finance": true,
    "weeks": "12",
    "cities": [
      "Austin"
    ]
  }, {
    "name": "Coding Dojo",
    "cost": "12500",
    "finance": true,
    "weeks": "12",
    "cities": [
      "New York",
      "San Francisco",
      "Chicago"
    ]
  }, {
    "name": "Epicodus",
    "cost": "4500",
    "finance": false,
    "weeks": "15",
    "cities": [
      "Portland"
    ]
  }, {
    "name": "Flat Iron School",
    "cost": "15000",
    "finance": true,
    "weeks": "12",
    "cities": [
      "New York"
    ]
  }, {
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
  }, {
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
  }, {
    "name": "Launch Academy",
    "cost": "12500",
    "finance": true,
    "weeks": "10",
    "cities": [
      "Boston"
    ]
  }, {
    "name": "Maker Square",
    "cost": "16920",
    "finance": true,
    "weeks": "12",
    "cities": [
      "Los Angeles",
      "San Francisco",
      "Austin"
    ]
  }, {
    "name": "Refactor U",
    "cost": "13500",
    "finance": true,
    "weeks": "10",
    "cities": [
      "Boulder"
    ]
  }, {
    "name": "Rocket U",
    "cost": "12500",
    "finance": true,
    "weeks": "12",
    "cities": [
      "New York",
      "San Francisco",
      "Chicago"
    ]
  }, {
    "name": "Sabio",
    "cost": "13450",
    "finance": true,
    "weeks": "12",
    "cities": [
      "Los Angeles"
    ]
  }, {
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
  }, {
    "name": "The Tech Academy",
    "cost": "9000",
    "finance": true,
    "weeks": "20",
    "cities": [
      "Portland"
    ]
  }, {
    "name": "Turing School",
    "cost": "17500",
    "finance": true,
    "weeks": "27",
    "cities": [
      "Denver"
    ]
  }, {
    "name": "Free Code Camp",
    "cost": "0",
    "finance": true,
    "weeks": "0",
    "cities": [
      "Online"
    ]
  }];

  //var campNameLabels = getBootcamps(bootcamps);
  //var campCostsArray = getBootcampsCosts(bootcamps);

  //reduce opacity for steps 2 through 4
  //the actual elements start out hidden via CSS
  $('#two').css({opacity:'0.25'});
  $('#three').css({opacity:'0.25'});
  $('#four').css({opacity:'0.25'});


  //step one event listener
  $('#city-buttons').on("click", "span", function() {
    $(this).addClass('animated tada');
    city = $(this).attr("id");

    //make next step visible
    $('#two').css({opacity:'1'});
    $('#income').css({visibility:'visible'});



    console.log(city);
    //console.log(campNameLabels);

  });

  /*
  var housingArray = bootCampLocation(city, bootcamps);
  function bootCampLocation(city, bootCampObject){
    var housingCosts=[];
    if (city!=='sf'){
      for (var i = 0; i < bootCampObject.length; i++)
      {
        housingCosts.push(2000);
      }
    }
    return housingCosts;
  }
*/
  //step two event listener

  $('#income').on("change", function() {
    console.log("Income Updated");
    lastYearincome = parseInt($('#lastYearIncome').val());

    //console.log(lastYearincome);

    //workingCostOpportunity = getWorkingCosts(bootcamps, lastYearincome);

    //console.log("Income Array", workingCostOpportunity);

    //make next step visible
    $('#three').css({opacity:'1'});
    $('#calculate').css({visibility:'visible'});

  });

  /*
  function getWorkingCosts(bootCampObject, annualIncome) {
    //console.log("BootCamp Object", bootcamps)
    console.log("last years income", annualIncome);
    var income = ($('#lastYearIncome').val())/50;
    for (var camp in bootCampObject) {
      workingCosts.push(Math.floor(bootCampObject[camp].weeks*income));
    }

    console.log("Working Costs Array:", workingCosts);
    return workingCosts;
  }

  function getBootcamps(bootCampObject) {
    var bootcampNames = [];
    for (var camp in bootCampObject) {
      bootcampNames.push(bootCampObject[camp].name);
      // bootcampCosts.push(bootCampObject[camp].cost);
    }
    return bootcampNames;
  }

  function getBootcampsCosts(bootCampObject) {
    var bootcampCosts = [];
    for (var camp in bootCampObject) {
      bootcampCosts.push(bootCampObject[camp].cost);
      // bootcampCosts.push(bootCampObject[camp].cost);
    }
    return bootcampCosts;
  }


*/


  <!--Graph it-->
  $('#calculate').on("click", function() {

    //Fill the graphing arrays
    var bootcampData = [
      { names: [] },
      { costs: [] },
      { weeks: [] },
      { finance: [] },
      { housing: [] },
      { workingCost: [] }

    ], cityArray = ["San Fransisco","Los Angeles", "Chicago", "Austin", "New York City"];


//  I want my array to look like this:
//  [ { names: ['Free Code Camp', 'Costly Code Camp', 'Boring Code Camp'] },
//    { weeks: [18, 12, 20] },
//    { cost: [0, 20000, 5000] }  ]

    for (var i=0; i<bootcamps.length; i++) {
      bootcampData[0].names.push(bootcamps[i].name);
      bootcampData[1].costs.push(bootcamps[i].cost);
      bootcampData[2].weeks.push(bootcamps[i].weeks);

      //Based on a 3 year cost @ 6%APR of $.09519 interest for every $1
      bootcampData[3].finance.push((bootcamps[i].cost*.09519));


      /*
       bootcampData[4].housing.push(function(){
       if (cityArray.indexOf(city)>=0) {
       return 2000;
       }  else {
       return 0;
       }
       });
       */
      bootcampData[5].workingCost.push((bootcamps[i].weeks * lastYearincome/50 ));


    }

    console.log(lastYearincome, bootcampData);










    //pass in our arrays to the data for the chart
    var data = {
      labels: bootcampData[0].names,
      series: [
        bootcampData[1].costs,
        bootcampData[3].finance,
        bootcampData[5].workingCost
      ]

    };

    //override chartist.js defaults
    var options = {
      axisY: {
        offset: 30,
        labelInterpolationFnc: function(value) {
          return '$' + value;
        }
      }
    };

    //create chart passing in the data & options
    new Chartist.Bar('.ct-chart', data, options);

  });







});