import React, { Component } from 'react'
import { Chart } from 'react-google-charts';

const columns = [
  {
    type: 'string',
    label: ''
  },
  {
    type: 'string',
    label: 'Dev Tool'
  },
  {
    type: 'date',
    label: 'Start Date'
  },
  {
    type: 'date',
    label: 'End Date'
  },
]

const endDate = new Date()

const rows = [
  [ '', 'Functional Programming', new Date(2017, 1, 1), endDate ],
  [ '', 'React', new Date(2016, 9, 1), endDate ],
  [ '', 'JavaScript', new Date(2016, 1, 1), endDate ],
  [ '', 'Object-Oriented Programming', new Date(2015, 9, 1), endDate ],
  [ '', 'CSS', new Date(2015, 4, 1), endDate ],
  [ '', 'Rails', new Date(2014, 8, 1), endDate ]
]

class WebDevSkillsChart extends Component {
  render () {
    return (
      <div className='WebDevSkillsChart'>
        <Chart
          chartPackages={['corechart', 'timeline']}
          chartType='Timeline'
          columns={columns}
          rows={rows}
          options={{
            timeline: {
              groupByRowLabel: false,
              showRowLabels: false
            }
          }}
          graph_id="web-dev-skills-chart"
          width="100%"
          height="300px"
        />
      </div>
    )
  }
}

export default WebDevSkillsChart
