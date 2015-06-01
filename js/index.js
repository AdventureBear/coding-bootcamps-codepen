$(document).ready(function() {

  var city = "";
  var lastYearincome = 52000;

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




    <!--Prep the data for D3 -->
    var categoryNames = ['Tuition', 'Finance', 'Housing', 'Working Cost'];

    bootcamps.forEach(function(camp) {
      var y0=0;

      //this just checks against main city array.
      //when we refactor, this should check against this camp's cities array
      //should not be a difficult change
      if (cityArray.indexOf(city)>=0) {
        weeklyHousing =  0;
      }  else {
        weeklyHousing = 500;
      }

      camp.mapping = [{

        name: camp.name,
        label: 'Tuition',
        y0:  y0,
        y1: y0 += +camp.cost
      }, {
        name: camp.name,
        label: 'Finance',
        y0:  +camp.cost,
        y1: y0 += +Math.floor(camp.cost*.09519)
      }, {
        name: camp.name,
        label: 'Housing',
        y0:  +Math.floor(camp.cost*1.09519),
        y1: y0 += weeklyHousing *camp.weeks
      }, {
        name: camp.name,
        label: 'Working Cost',
        y0: +(Math.floor(camp.cost*1.09519) + weeklyHousing*camp.weeks),
        y1: y0 += +(Math.floor(camp.weeks * lastYearincome/50))
      }];
      camp.total = camp.mapping[camp.mapping.length - 1].y1;


    });


    console.log(bootcamps[0]);

    var margin = {top: 20, right: 55, bottom: 30, left: 40},
      width  = 800 - margin.left - margin.right,
      height = 600  - margin.top  - margin.bottom;

    var x = d3.scale.ordinal()
      .rangeRoundBands([0, width], .1);

    var y = d3.scale.linear()
      .rangeRound([height, 0]);

    x.domain(bootcamps.map(function (d) { return d.name; })); //E
    y.domain([0, d3.max(bootcamps, function (d) { return d.total; })]);

    var color = d3.scale.ordinal()
      .range(["#006ca0","#ff7e30","#a0c9e9","#ffbb82"])
      .domain(['Tuition', 'Finance', 'Housing', 'Working Cost']);

   // console.log(color);

    var svg = d3.select("svg")
      .attr("width",  width  + margin.left + margin.right)
      .attr("height", height + margin.top  + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



    var selection = svg.selectAll(".series")
      .data(bootcamps)
      .enter().append("g")
      .attr("class", "series")
      .attr("transform", function (d) { return "translate(" + x(d.name) + ",0)"; });

    selection.selectAll("rect")
      .data(function (d) { return d.mapping; })
      .enter().append("rect")
      .attr("width", x.rangeBand())
      .attr("y", function (d) { return y(d.y1); })
      .attr("height", function (d) { return y(d.y0) - y(d.y1); })
      .style("fill", function (d) { return color(d.label); })
      .style("stroke", "white")
      .on("mouseover", function (d) { showPopover.call(this, d); })
      .on("mouseout",  function (d) { removePopovers(); });



    //legends
    var legend = svg.selectAll(".legend")
      .data(categoryNames.slice().reverse())
      .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function (d, i) {
        return "translate(55," + i * 20 + ")";
      });

    legend.append("rect")
      .attr("x", width - 10)
      .attr("width", 10)
      .attr("height", 10)
      .style("fill", color)
      .style("stroke", "grey");

    legend.append("text")
      .attr("x", width - 12)
      .attr("y", 6)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function (d) { return d; });


    //axes
    var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

    var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left");

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Cost in $USD");



    //tooltips
    function removePopovers () {
      $('.popover').each(function() {
        $(this).remove();
      });
    }

    function showPopover (d) {
      $(this).popover({
        title: d.name,
        placement: 'auto top',
        container: 'body',
        trigger: 'manual',
        html : true,
        content: function() {
          return "School: " + d.label +
            "<br/>Cost $: " +
            d3.format(",")(d.value ? d.value: d.y1 - d.y0); }
      });
      $(this).popover('show')
    }









  });







});