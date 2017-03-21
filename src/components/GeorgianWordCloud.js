import React, { Component } from 'react'
import * as d3 from 'd3'
import cloud from 'd3-cloud'
import './GeorgianWordCloud.css'

const data = [
  { text: 'ფეხები გაფშიკა', size: 15 },
  { text: 'წერილი წაიღო', size: 10 },
  { text: 'მარილზე წავიდა', size: 10 },
  { text: 'რა მუხტალია წუთისოფელი', size: 30 },
  { text: 'შემიჭამე???', size: 50 },
  { text: 'ეკრანის სიგანე', size: 5 },
  { text: 'რა გათამამებული კატაა!', size: 25 },
  { text: 'კაროჩე', size: 5 },
  { text: 'ცვეტში', size: 10 },
];

class GeorgianWordCloud extends Component {
  componentDidMount () {
    const width = 500
    const height = 500
    var fill = d3.schemeCategory20;

    function draw(words) {
      d3.select(".GeorgianWordCloud-chart").append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
      .selectAll("text")
      .data(words)
      .enter().append("text")
      .style("font-size", function(d) { return d.size + "px"; })
      .style("font-family", "Impact")
      .style("fill", function(d, i) { return fill[i]; })
      .attr("text-anchor", "middle")
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })
      .text(function(d) { return d.text; });
    }

    var layout = cloud()
    .size([width, height])
    .words(data)
    .padding(5)
    .rotate(function() { return (~~(Math.random() * 6) - 3) * 30; })
    .font("Impact")
    .fontSize(function(d) { return Math.sqrt(d.size) * 7; })
    .on("end", draw);

    layout.start();
  }

  render () {
    return (
      <div className='GeorgianWordCloud'>
        <div className='GeorgianWordCloud-chart' />

        <aside className='GeorgianWordCloud-source'>
          <b>მონაცემების წყარო</b>: ნათანის პატარა ბლოკნოტები
        </aside>
      </div>
    )
  }
}

export default GeorgianWordCloud
