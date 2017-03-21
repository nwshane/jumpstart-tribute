import React, { Component } from 'react'
import './NathanLovesJumpStart.css'
import PulsingHeart from './PulsingHeart.js'

class NathanLovesJumpStart extends Component {
  render () {
    return (
      <div className='NathanLovesJumpStart'>
        <div>
          <img
            src='/nathan-funny.png'
            alt='Silly Nathan'
            style={{ maxHeight: '200px' }}
          />
        </div>
        <PulsingHeart size={125} />
        <div>
          <img
            src='/jumpstart-logo.svg'
            alt='JumpStart Logo'
            style={{ height: '80px' }}
          />
        </div>
      </div>
    )
  }
}

export default NathanLovesJumpStart
