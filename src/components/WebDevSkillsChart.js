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
  [ '', 'React', new Date(2016, 9, 1), endDate ],
  [ '', 'JavaScript', new Date(2016, 1, 1), endDate ],
  [ '', 'CSS', new Date(2015, 7, 1), endDate ],
  [ '', 'Rails', new Date(2014, 8, 1), endDate ]
]

class WebDevSkillsChart extends Component {
  render () {
    return (
      <Chart
        chartPackages={['corechart', 'timeline']}
        chartType="Timeline"
        columns={columns}
        rows={rows}
        options={{timeline: { groupByRowLabel: false, showRowLabels: false }}}
        graph_id="web-dev-skills-chart"
        width="100%"
        height="250px"
      />
    )
  }
}

export default WebDevSkillsChart
