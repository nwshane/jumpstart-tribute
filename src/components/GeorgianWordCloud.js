import React, { Component } from 'react'
import * as d3 from 'd3'
import cloud from 'd3-cloud'
import './GeorgianWordCloud.css'

const data = [
  { text: 'ფეხები გაფშიკა', size: 15 },
  { text: 'წერილი წაიღო', size: 10 },
  { text: 'მარილზე წავიდა', size: 10 },
  { text: 'რა მუხტალია წუთისოფელი', size: 25 },
  { text: 'შემიჭამე???', size: 55 },
  { text: 'ეკრანის სიგანე', size: 10 },
  { text: 'რა გათამამებული კატაა!', size: 20 },
  { text: 'კაროჩე', size: 10 },
  { text: 'ცვეტში', size: 10 },
  { text: 'ფაფას ვიკეთებ დილაობით', size: 30 },
  { text: 'რამდენს ჩხუბობდნენ ხოლმე', size: 22 },
  { text: 'გოზინაყი', size: 15 },
  { text: 'კნუტი პატარა კატაა', size: 20 },
  { text: 'სამეგრელოში დიდი ტრადიციაა ეს გლოვა', size: 10 },
  { text: 'ჩანგალი გამირეცხე', size: 35 },
  { text: 'ამ ჩაის სტრანნი გემო აქვს', size: 10 },
  { text: 'მერე რისთვის გაქვს ბლოკნოტი?!', size: 15 },
  { text: 'ძაან ღადაობა იყო', size: 22 },
  { text: 'პანიკაში ჩავვარდი', size: 20 },
  { text: 'ის ხე როგორ გამწვანდა!', size: 20 },
  { text: 'არ მომკვდარა', size: 25 },
  { text: 'გადამდე ზმორება', size: 20 },
  { text: 'ყურძენი დამწიფებულა', size: 15 },
  { text: 'სოიოს სოუსი ფაფუ!', size: 15 },
  { text: 'ფაფუ სოიოს სოუსი!', size: 15 },
];

var fill = d3.schemeCategory20;
const width = 900;
const height = 500;

const draw = (words) => {
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

class GeorgianWordCloud extends Component {
  componentDidMount () {
    var layout = cloud()
    .size([width, height])
    .words(data)
    .padding(5)
    .rotate(function() { return (~~(Math.random() * 6) - 3) * 30; })
    .font("Impact")
    .fontSize(function(d) { return Math.sqrt(d.size) * 5; })
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
