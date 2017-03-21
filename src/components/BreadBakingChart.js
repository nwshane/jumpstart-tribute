import {
  VictoryAxis,
  VictoryChart,
  VictoryLabel,
  VictoryLine,
  VictoryScatter
} from 'victory'

import React, { Component } from 'react';

const breadBakedByMonth = [
  {x: 'Sep, 2014', y: 0},
  {x: 'Oct, 2014', y: 1},
  {x: 'Dec, 2014', y: 3},
  {x: 'Jan, 2015', y: 4},
  {x: 'Feb, 2015', y: 5},
  {x: 'Mar, 2015', y: 3},
  {x: 'Apr, 2015', y: 2},
  {x: 'May, 2015', y: 1},
  {x: 'June, 2015', y: 1},
  {x: 'July, 2015', y: 1},
  {x: 'Aug, 2015', y: 1},
  {x: 'Sep, 2015', y: 0},
  {x: 'Oct, 2015', y: 0},
  {x: 'Nov, 2015', y: 0},
  {x: 'Dec, 2015', y: 0},
  {x: 'Jan, 2016', y: 0},
  {x: 'Feb, 2016', y: 0},
  {x: 'Mar, 2016', y: 0},
  {x: 'Apr, 2016', y: 0},
  {x: 'May, 2016', y: 0},
  {x: 'June, 2016', y: 0},
  {x: 'July, 2016', y: 0},
  {x: 'Aug, 2016', y: 0},
  {x: 'Sep, 2016', y: 0},
  {x: 'Oct, 2016', y: 0},
  {x: 'Nov, 2016', y: 0},
  {x: 'Dec, 2016', y: 0},
  {x: 'Jan, 2017', y: 0},
  {x: 'Feb, 2017', y: 0},
  {x: 'Mar, 2017', y: 0}
]

const axisStyle = {
  tickLabels: {
    fontSize: 10
  },
  ticks: {
    stroke: 'grey'
  },
  axisLabel: {
    fontSize: 10
  }
}

class BreadBakingChart extends Component {
  render() {
    return (
      <div className='BreadBakingChart'>
        <VictoryChart
          height={150}
          padding={{top: 10, bottom: 25, left: 40, right: 20}}
        >
          <VictoryAxis
            fixLabelOverlap
            style={axisStyle}
          />

          <VictoryAxis
            dependentAxis
            label='Loaves of bread per month'
            style={axisStyle}
            tickFormat={tick => tick.toPrecision(1)}
          />

          <VictoryLine
            data={breadBakedByMonth}
          />

          <VictoryScatter
            data={[
              {
                x: "Mar, 2015",
                y: 3
              },
              {
                x: "Sep, 2015",
                y: 0
              }
            ]}
            symbol='star'
            style={{
              labels: {
                fontSize: 12
              }
            }}
            labelComponent={<VictoryLabel dx={85} />}
            labels={['March, 2015: Internship ends', 'Sep. 2015: New office, broken oven :(']}
          />
        </VictoryChart>
      </div>
    )

  }
}

export default BreadBakingChart
