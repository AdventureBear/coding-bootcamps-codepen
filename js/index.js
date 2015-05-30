$(document).ready(function() {

  $('#target').append("change it");

  var city = "test";
  var lastYearincome = 52000;

  //this is used before graphing to collect data for d3/chartist
  var bootcampData = [
    { names: [] },
    { costs: [] },
    { weeks: [] },
    { finance: [] },
    { housing: [] },
    { workingCost: [] }

  ];

  //major cities array to check against users location for housing costs
  var cityArray = ["San Fransisco","Los Angeles", "Chicago", "Austin", "New York City"];

  //this is the raw bootcamps file allowing easy addition of new code camps
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

    //console.log(city);

  });


  //step two event listener

  $('#income').on("change", function() {
    console.log("Income Updated");
    lastYearincome = parseInt($('#lastYearIncome').val());

    //make next step visible
    $('#three').css({opacity:'1'});
    $('#calculate').css({visibility:'visible'});

  });



  <!--Graph it-->
  $('#calculate').on("click", function() {
    //Make data logger visible
    $('#four').css({opacity:'1'});

//  Pivot & Calculate bootcamps to look like this:
//  [ { names: ['Free Code Camp', 'Costly Code Camp', 'Boring Code Camp'] },
//    { weeks: [18, 12, 20] },
//    { cost: [0, 20000, 5000] }  ]
//
// Fill the graphing arrays

    for (var i=0; i<bootcamps.length; i++) {
      bootcampData[0].names.push(bootcamps[i].name);
      bootcampData[1].costs.push(bootcamps[i].cost);
      bootcampData[2].weeks.push(bootcamps[i].weeks);

      //Based on a 3 year cost @ 6%APR of $.09519 interest for every $1
      bootcampData[3].finance.push((bootcamps[i].cost*.09519));

      //Check for housing costs
      if (cityArray.indexOf(city)>=0) {
        bootcampData[4].housing.push (0);
      }  else {
        bootcampData[4].housing.push( 2000);
      }

      //Calculate Workign Cost Opportunity
      bootcampData[5].workingCost.push((bootcamps[i].weeks * lastYearincome/50 ));
    }

    //console.log(lastYearincome, bootcampData);

    //just visual check our data arrays
    $("#four").html("<p>Names:"+ bootcampData[0].names + "</p>");
    $("#four").append("<p>Costs:"  + bootcampData[1].costs+ "</p>");
    $("#four").append("<p>Weeks:"  +bootcampData[2].weeks+ "</p>");
    $("#four").append("<p>Finance:"  +bootcampData[3].finance+ "</p>");
    $("#four").append("<p>Housing:"  +bootcampData[4].housing+ "</p>");
    $("#four").append("<p>Working Cost:"  +bootcampData[5].workingCost+ "</p>");

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
    var width = 600,
      barHeight = 20;

    console.log(Math.max.apply(null, bootcampData[1].costs));


    console.log(d3.max(bootcampData[1].costs));

    var x = d3.scale.linear()
      .domain([0, 21000])
      .range([0, width]);

    var chart = d3.select(".chart")
      .attr("width", width)
      .attr("height", barHeight * bootcampData[1].costs.length);

    var bar = chart.selectAll("g")
      .data(bootcampData[1].costs)
      .enter().append("g")
      .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

    bar.append("rect")
      .attr("width", function(d) { return x(d); })
      .attr("height", barHeight - 1);

    bar.append("text")
      .attr("x", function(d) { return x(d) - 3; })
      .attr("y", barHeight / 2)
      .attr("dy", ".35em")
      .text(function(d) { return d; });







  });







});