import React from 'react'
import { Link } from 'react-router-dom'
function Landing() {
  return (
    <div className='landing'>
        <div className='landing-image'>
            <img src={require('../imag/nature.jpg')} alt="StartPage"/>
        </div>
        <div className='landing-action'>
            <div className='text'>10x Team 04</div>
            <Link to="/PostViews">
                <div className='btn'><button>Enter</button></div>
            </Link>
        </div>
    </div>
  )
}

export default Landing