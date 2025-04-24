import React from 'react'
import { useState } from 'react';
import './style.css'
import { Link } from 'react-router-dom';

const Home = () => {

  const [LoginisActive, setLoginIsActive] = useState(false);

  const LoginClick = () => {
    setLoginIsActive(!LoginisActive);
  };


  return (
    <>
      <div className="header-landing-page" style={{ backgroundColor: "#ED1C27" }}>

        {/* Header-Right-Side */}
        <div className='Registration-Header-Right-Side'>
          <div className='Registration-Header-Right-Side-img'></div>
          <div> 1-800-815-1943</div>
        </div>

        {/* Header-Right-Side */}
        <div className='Registration-Header-left-Side'>
          <div className='Registration-Header-left-Side-col2 d-flex' style={{ textDecoration: "none", color: "white" }}>
            <div style={{ cursor: "pointer" }}>(TTY:711) Mon-Fri. 9 AM-5 PM PST</div>
          </div>
        </div>

      </div>


      {/* Nav Bar */}
      <div className="nav-bar">
        <div className='my-3'><img src="Icons\Logo.svg" alt="" /></div>
        <div className="d-flex nav-bar-signin-opt-Links">
          <Link className='nav-bar-signin-opt-Link' to={'/'} style={{color:"#ED1C27", textDecoration:"underline"}}>Home</Link>
          <Link className='nav-bar-signin-opt-Link' to={'/'}>Find an Agent</Link>
          <Link className='nav-bar-signin-opt-Link' to={'/'}>Events</Link>
          <Link className='nav-bar-signin-opt-Link' to={'/'}>Locations</Link>
          <Link className='nav-bar-signin-opt-Link' to={'/'}>Medicare FAQs</Link>
          <Link className='nav-bar-signin-opt-Link' to={'/'}>About Us</Link>
        </div>

        <div className="d-flex">
          <div className="d-flex">
            <div className='nav-bar-signin-opt'><img src="Icons\user-solid.svg" alt="" />Healthcare Providers</div>
          </div>

          <div className="d-flex">
            <div className='nav-bar-signin-opt'><img src="Icons\user-solid.svg" alt="" />Signin</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
