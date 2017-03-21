import React, { Component } from 'react'
import './PulsingHeart.css'

class PulsingHeart extends Component {
  render () {
    return (
      <div style={{fontSize: `${this.props.size/10}px` }}className='PulsingHeart'></div>
    )
  }
}

export default PulsingHeart
