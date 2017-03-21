import React, { Component } from 'react'
import { Chart } from 'react-google-charts';

const columns = [{
  label: 'Time',
  type: 'date'
}, {
  label: 'English',
  type: 'number'
}, {
  label: 'Georgian',
  type: 'number'
}, {
  label: 'Russian',
  type: 'number'
}, {
  label: 'German',
  type: 'number'
}]

const rows = [
  [new Date(2014, 8, 1), 10, 4, 0, 6],
  [new Date(2014, 9, 1), 10, 4.2, 0, 6],
  [new Date(2014, 10, 1), 10, 4.5, 0, 5.95],
  [new Date(2014, 11, 1), 10, 4.7, 0, 5.9],
  [new Date(2014, 12, 1), 9.9, 5, 0, 5.87],
  [new Date(2015, 1, 1), 9.9, 5, 0.2, 5.85],
  [new Date(2015, 2, 1), 9.9, 4.8, 0.5, 5.8],
  [new Date(2015, 3, 1), 9.8, 4.65, 0.8, 5.7],
  [new Date(2015, 4, 1), 9.8, 4.4, 1.3, 5.65],
  [new Date(2015, 5, 1), 9.7, 4.4, 1.1, 5.6],
  [new Date(2015, 6, 1), 9.6, 4.8, 0.7, 5.55],
  [new Date(2015, 7, 1), 9.5, 5.2, 0.2, 5.5],
  [new Date(2015, 8, 1), 9.4, 5.4, 0.1, 5.42],
  [new Date(2015, 9, 1), 9.3, 5.6, 0.05, 5.35],
  [new Date(2015, 10, 1), 9.3, 5.7, 0, 5.24],
  [new Date(2015, 11, 1), 9.2, 5.9, 0, 5.1],
  [new Date(2015, 12, 1), 9.1, 6.1, 0, 5.0],
  [new Date(2016, 1, 1), 8.9, 6.25, 0, 4.87],
  [new Date(2016, 2, 1), 8.6, 6.4, 0, 4.7],
  [new Date(2016, 3, 1), 8.4, 6.6, 0, 4.55],
  [new Date(2016, 4, 1), 8.2, 6.8, 0, 4.42],
  [new Date(2016, 5, 1), 7.9, 7.1, 0, 5.1],
  [new Date(2016, 6, 1), 7.55, 7.3, 0, 5.09],
  [new Date(2016, 7, 1), 7.3, 7.5, 0, 5.07],
  [new Date(2016, 8, 1), 7.1, 7.4, 0, 5.02],
  [new Date(2016, 9, 1), 7, 7.4, 0, 4.9],
  [new Date(2016, 10, 1), 6.5, 7.3, 0, 4.75],
  [new Date(2016, 11, 1), 6.4, 7.4, 0, 4.65],
  [new Date(2016, 12, 1), 6.2, 7.3, 0, 4.6],
  [new Date(2017, 1, 1), 6.05, 7.4, 0, 4.45],
  [new Date(2017, 2, 1), 5.9, 7.5, 0, 4.3],
  [new Date(2017, 3, 1), 5.8, 7.7, 0, 4.1]
]

class LanguageFluencyChart extends Component {
  render () {
    return (
      <Chart
        chartType='LineChart'
        columns={columns}
        rows={rows}
        options={{
          selectionMode: 'multiple',
          curveType: 'function',
          aggregationTarget: 'category',
          lineWidth: 4,
          vAxis: {
            maxValue: 10,
            minValue: 0,
            ticks: [
              {v: 2, f: 'Low Fluency'},
              {v: 5, f: 'Moderate Fluency'},
              {v: 8, f: 'High Fluency'}
            ]
          }
        }}
        graph_id="language-fluency-chart"
        width="100%"
        height="350px"
      />
    )
  }
}

export default LanguageFluencyChart
