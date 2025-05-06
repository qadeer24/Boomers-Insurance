import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Locations = () => {
    return (
        <>
            <Header />

            {/* Section-1 */}
            <div className="location-sec1"></div>

            {/* Section-2 */}
            <div className="location-sec-2">
                <h2 className='text-center'>Locations</h2>
                <p className='text-center'>Find a location near you.</p>

                {/* Locations */}
                <div>
                    <div className="d-flex justify-content-between">
                        <div className="location-option">
                            <div className="location-opt-top">Boomers Insurance Los Angeles (Downey)</div>
                            <div className="location-opt-img"></div>
                            <div className='location-opt-info'>
                                <div>
                                    <img src="Icons\calendar-days-solid.svg" alt="" />
                                    Monday-Friday 
                                </div>
                                <div className=' my-2'>
                                    <img src="Icons\clock.svg" alt="" />
                                    09:00 - 05:00
                                </div>
                                <div className='d-flex'>
                                    <img src="Icons\location-mark.svg" alt="" />
                                    <div>
                                        <div>8408 Florence Ave</div>
                                        <div>Downey, CA. 90240</div>
                                    </div>
                                </div>
                                <div className=' my-2'>
                                    <img src="Icons\red-phone-solid.svg" alt="" />
                                    562.904.9209
                                </div>
                            </div>
                        </div>

                        <div className="location-option">
                            <div className="location-opt-top">Boomers Insurance Riverside (Menifee)</div>
                            <div className="location-opt-img"></div>
                            <div className='location-opt-info'>
                                <div>
                                    <img src="Icons\calendar-days-solid.svg" alt="" />
                                    Monday-Friday 
                                </div>
                                <div className=' my-2'>
                                    <img src="Icons\clock.svg" alt="" />
                                    09:00 - 04:00
                                </div>
                                <div className='d-flex'>
                                    <img src="Icons\location-mark.svg" alt="" />
                                    <div>
                                        <div>28093 Bradley Road.</div>
                                        <div>Menifee, CA. 92586</div>
                                    </div>
                                </div>
                                <div className=' my-2'>
                                    <img src="Icons\red-phone-solid.svg" alt="" />
                                    951.301.6270
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between my-4">
                        <div className="location-option">
                            <div className="location-opt-top">Boomers Insurance Orange (Santa Ana)</div>
                            <div className="location-opt-img"></div>
                            <div className='location-opt-info-2'>
                                <div>
                                    <img src="Icons\calendar-days-solid.svg" alt="" />
                                    Monday-Friday by appointment only
                                </div>
                                <div className=' my-2'>
                                    <img src="Icons\clock.svg" alt="" />
                                    09:00 - 05:00
                                </div>
                                <div className='d-flex'>
                                    <img src="Icons\location-mark.svg" alt="" />
                                    <div style={{display: "grid"}}>
                                        <div>1820 E. Garry Ave. #109</div>
                                        <div>Santa Ana, CA. 92705</div>
                                    </div>
                                </div>
                                <div className=' my-2'>
                                    <img src="Icons\red-phone-solid.svg" alt="" />
                                    949.752.6524
                                </div>
                            </div>
                        </div>

                        <div className="location-option">
                            <div className="location-opt-top">Boomers Insurance Orange (Santa Ana)</div>
                            <div className="location-opt-img"></div>
                            <div className='location-opt-info-2'>
                                <div>
                                    <img src="Icons\calendar-days-solid.svg" alt="" />
                                    Monday-Friday by appointment only
                                </div>
                                <div className=' my-2'>
                                    <img src="Icons\clock.svg" alt="" />
                                    09:00 - 05:00
                                </div>
                                <div className='d-flex'>
                                    <img src="Icons\location-mark.svg" alt="" />
                                    <div style={{display: "grid"}}>
                                        <div>801 Franklin Street Unit 15</div>
                                        <div>Oakland Ca. 94612</div>
                                    </div>
                                </div>
                                <div className=' my-2'>
                                    <img src="Icons\red-phone-solid.svg" alt="" />
                                    800.794.7976
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="location-option">
                            <div className="location-opt-top">Boomers Insurance Los Angeles (Downey)</div>
                            <div className="location-opt-img"></div>
                            <div className='location-opt-info'>
                                <div>
                                    <img src="Icons\calendar-days-solid.svg" alt="" />
                                    Monday-Friday 
                                </div>
                                <div className=' my-2'>
                                    <img src="Icons\clock.svg" alt="" />
                                    09:00 - 05:00
                                </div>
                                <div className='d-flex'>
                                    <img src="Icons\location-mark.svg" alt="" />
                                    <div>
                                        <div>1201 E. Florida Ave</div>
                                        <div>Hemet, Ca 92543</div>
                                    </div>
                                </div>
                                <div className=' my-2'>
                                    <img src="Icons\red-phone-solid.svg" alt="" />
                                    951-357-2332
                                </div>
                            </div>
                        </div>

                        <div className="location-option">
                            <div className="location-opt-top">Boomers Insurance Riverside (Menifee)</div>
                            <div className="location-opt-img"></div>
                            <div className='location-opt-info'>
                                <div>
                                    <img src="Icons\calendar-days-solid.svg" alt="" />
                                    Monday-Friday 
                                </div>
                                <div className=' my-2'>
                                    <img src="Icons\clock.svg" alt="" />
                                    09:00 - 04:00
                                </div>
                                <div className='d-flex'>
                                    <img src="Icons\location-mark.svg" alt="" />
                                    <div>
                                        <div>8408 Florence Ave</div>
                                        <div>Downey, CA. 90240</div>
                                    </div>
                                </div>
                                <div className=' my-2'>
                                    <img src="Icons\red-phone-solid.svg" alt="" />
                                    562.904.9209
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <Footer/>
        </>
    )
}

export default Locations
