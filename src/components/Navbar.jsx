import React from 'react'
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav>
      <div>
        <div>
          <a href="https://clarusway.com/" target='true' className='flex items-center'>
            <img src={logo} alt="clarusway" width={50} height={50}/>
            <span>Clarusway</span>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar