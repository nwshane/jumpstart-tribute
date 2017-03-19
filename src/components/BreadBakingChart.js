import { Line, VictoryAxis, VictoryChart, VictoryLine, VictoryScatter } from 'victory'
import React, { Component } from 'react';

const breadBakedByMonth = [
  {x: 'September, 2014', y: 0},
  {x: 'October, 2014', y: 1},
  {x: 'December, 2014', y: 3},
  {x: 'January, 2015', y: 4},
  {x: 'February, 2015', y: 4},
  {x: 'March, 2015', y: 3},
  {x: 'April, 2015', y: 2},
  {x: 'May, 2015', y: 1},
  {x: 'June, 2015', y: 1},
  {x: 'July, 2015', y: 1},
  {x: 'August, 2015', y: 1},
  {x: 'September, 2015', y: 0},
  {x: 'October, 2015', y: 0},
  {x: 'November, 2015', y: 0},
  {x: 'December, 2015', y: 0},
  {x: 'January, 2016', y: 0},
  {x: 'February, 2016', y: 0},
  {x: 'March, 2016', y: 0},
  {x: 'April, 2016', y: 0},
  {x: 'May, 2016', y: 0},
  {x: 'June, 2016', y: 0},
  {x: 'July, 2016', y: 0},
  {x: 'August, 2016', y: 0},
  {x: 'September, 2016', y: 0},
  {x: 'October, 2016', y: 0},
  {x: 'November, 2016', y: 0},
  {x: 'December, 2016', y: 0},
  {x: 'January, 2017', y: 0},
  {x: 'February, 2017', y: 0},
  {x: 'March, 2017', y: 0}
]

const axisStyle = {
  tickLabels: {
    fontSize: 12
  }
}

class EventLine extends Component {
  render() {
    return (
      <Line
        x1={this.props.x}
        x2={this.props.x}
        y1={0}
        y2={4}
        {...this.props}
      />
    )
  }
}

class BreadBakingChart extends Component {
  render() {
    return (
      <div>
        <h2>
          Amount of Bread Baked at JumpStart Office
        </h2>

        <VictoryChart height={200}>
          <VictoryAxis
            fixLabelOverlap
            style={axisStyle}
          />

          <VictoryAxis
            dependentAxis
            label='Loaves of bread'
            style={axisStyle}
            tickFormat={tick => tick.toPrecision(1)}
          />

          <VictoryLine
            data={breadBakedByMonth}
          />

          <VictoryScatter
            data={[
              {
                x: "March, 2015",
                y: 0
              },
              {
                x: "September, 2015",
                y: 2
              }
            ]}
            dataComponent={<EventLine />}

            labels={['Internship ends', 'Moved office']}
          />
        </VictoryChart>
      </div>
    )

  }
}

export default BreadBakingChart
