import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [LoginisActive, setLoginIsActive] = useState(false);
    
    const LoginClick = () => {
      setLoginIsActive(!LoginisActive);
    };

    const [Home, setHome] = useState(false);
    const HomeClick = () => {
        setFindAnAgent(!FindAnAgent);
        setHome(!Home);
        setAboutUs(!AboutUs);
        setHome(!Events);
        setLocations(!Locations)
        setMedicare(!Medicare);

    };

    const [FindAnAgent, setFindAnAgent] = useState(false);
    const FindAnAgentClick = () => {
        setFindAnAgent(!FindAnAgent);
        setHome(!Home);
        setAboutUs(!AboutUs);
        setHome(!Events);
        setLocations(!Locations)
        setMedicare(!Medicare);

    };

    const [Events, setEvents] = useState(false);
    const EventsClick = () => {
        setFindAnAgent(!FindAnAgent);
        setHome(!Home);
        setAboutUs(!AboutUs);
        setHome(!Events);
        setLocations(!Locations)
        setMedicare(!Medicare);
    };

    const [Locations, setLocations] = useState(false);
    const LocationsClick = () => {
        setFindAnAgent(!FindAnAgent);
        setHome(!Home);
        setAboutUs(!AboutUs);
        setHome(!Events);
        setLocations(!Locations)
        setMedicare(!Medicare);
    };

    const [Medicare, setMedicare] = useState(false);
    const MedicareClick = () => {
        setFindAnAgent(!FindAnAgent);
        setHome(!Home);
        setAboutUs(!AboutUs);
        setHome(!Events);
        setLocations(!Locations)
        setMedicare(!Medicare);
    };

    const [AboutUs, setAboutUs] = useState(false);
    const AboutUsClick = () => {
        setFindAnAgent(!FindAnAgent);
        setHome(!Home);
        setAboutUs(!AboutUs);
        setHome(!Events);
        setLocations(!Locations)
        setMedicare(!Medicare);
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
                    <Link onClick={HomeClick} className='nav-bar-signin-opt-Link'style={Home ? {} : { color: "#ED1C27", textDecoration: "underline"  }} to={'/'}>Home</Link>
                    <Link onClick={FindAnAgentClick} className='nav-bar-signin-opt-Link'style={FindAnAgent ? { color: "#ED1C27", textDecoration: "underline"  } : {}} to={'/FindAgent'}>Find an Agent</Link>
                    <Link onClick={EventsClick} className='nav-bar-signin-opt-Link'style={FindAnAgent ? { color: "#ED1C27", textDecoration: "underline"  } : {}} to={'/events'}>Events</Link>
                    <Link onClick={LocationsClick} className='nav-bar-signin-opt-Link'style={FindAnAgent ? { color: "#ED1C27", textDecoration: "underline"  } : {}} to={'/locations'}>Locations</Link>
                    <Link onClick={MedicareClick} className='nav-bar-signin-opt-Link'style={FindAnAgent ? { color: "#ED1C27", textDecoration: "underline"  } : {}} to={'/FAQs'}>Medicare FAQs</Link>
                    <Link onClick={AboutUsClick} className='nav-bar-signin-opt-Link'style={FindAnAgent ? { color: "#ED1C27", textDecoration: "underline"  } : {}} to={'/'}> About Us</Link>
                </div>

                <div className="d-flex">
                    <div className="d-flex">
                        <div className='nav-bar-signin-opt'><img src="Icons\user-solid.svg" alt="" />Signin</div>
                    </div>

                    <div className="d-flex">
                        <button className='nav-bar-health-care-opt'><img src="Icons\health-care-button-img.svg" alt="" />Healthcare Providers</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
