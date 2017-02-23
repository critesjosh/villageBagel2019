var data;
var baseTemp = 8.66;

var margin = {top: 20, right: 30, bottom: 70, left: 100},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var chart = d3.select(".chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.time.scale()
  .domain([1753, 2015])
  .range([0, width]);

var y = d3.scale.ordinal()
  .domain(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"])
  .rangeBands([0, height]);

var xAxis = d3.svg.axis()
  .scale(x)
  .tickFormat(d => d3.time.format('%Y')(new Date(d, 0)))
  .orient("bottom");

var yAxis = d3.svg.axis()
  .scale(y)
  .orient("left");

var getData = function() {
    $.ajax("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/global-temperature.json", {
      dataType: 'json'
  }).done(function(returnedData){
    data = returnedData;

    data.monthlyVariance.forEach(function(element) {

      var color;
      if (element.variance <= -5) {
        color = "#4256f4";
      } else if (-5 < element.variance && element.variance <= -3) {
        color = "#42eef4";
      } else if (-3 < element.variance && element.variance <= -1) {
        color = "#42f46e";
      } else if (-1 < element.variance && element.variance <= 0.5) {
        color = "#eef442";
      } else if (0.5 < element.variance && element.variance <= 3) {
        color = "#f4c542";
      } else if (3 < element.variance && element.variance <= 5) {
        color = "#f48c42";
      } else {
        color = "#f44842";
      }
      element.color = color;

      var month;
      switch(element.month) {
        case 1:
        month = "January";
        break;
        case 2:
        month = "February";
        break;
        case 3:
        month = "March";
        break;
        case 4:
        month = "April";
        break;
        case 5:
        month = "May";
        break;
        case 6:
        month = "June";
        break;
        case 7:
        month = "July";
        break;
        case 8:
        month = "August";
        break;
        case 9:
        month = "September";
        break;
        case 10:
        month = "October";
        break;
        case 11:
        month = "November";
        break;
        case 12:
        month = "December";
        break;
      }
      element.monthString = month;

    });

    var map = chart.selectAll("g")
       .data(data.monthlyVariance)
     .enter();

     var tip = d3.tip()
       .attr('class', 'd3-tip')
       .offset([-10, 0])
       .html(function(d) {
         return `<span>${d.monthString} ${d.year}</span> <br>
           <span>Temp: ${(baseTemp + d.variance).toFixed(2)}</span> <br>
           <span>Variance: ${(d.variance).toFixed(2)}</span>`;
       });

     chart.call(tip);

     map.append("rect")
      .attr("class", "data-point")
      .attr("width", width / (data.monthlyVariance.length / 12) )
      .attr("height", height / 12)
      .style("fill", d => d3.rgb(d.color))
      .attr("x", d => x(d.year) )
      .attr("y", d => y(d.monthString))
      .on("mouseover", function(d) {
        tip.show(d);
      })
      .on("mouseout", function(d) {

      });

     chart.append("g")
       .attr("class", "x axis")
       .style("fill", "black")
       .attr("transform", "translate(0," + height + ")")
       .call(xAxis)
       .append("text")
         .style("fill", "black")
         .attr("x", width / 2)
         .attr("y", 40)
         .style("font-size", "20px")
         .style("text-anchor", "middle")
         .text("Year");

     chart.append("g")
       .attr("class", "y axis")
         .call(yAxis)
       .append("text")
         .style("fill", "black")
         .attr("transform", "rotate(-90)")
         .attr("y", -80)
         .attr("x", -height / 2)
         .style("text-anchor", "end")
         .style("font-size", "20px")
         .text("Month");
  });
}

getData();
