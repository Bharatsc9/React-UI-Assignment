import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <div className='box1'>
            <input type="text" placeholder='Search'></input>
        </div>
        <div className='box2'>
            <img className='box' src='icon.jpg'></img>
            <img className='box' src='icon.jpg'></img>
            <img className='box' src='icon.jpg'></img>
            <img className='box' src='icon.jpg'></img>
        </div>
    </div>
  )
}

export default Header