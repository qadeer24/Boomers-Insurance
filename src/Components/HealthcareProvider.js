import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const HealthcareProvider = () => {
    return (
        <>
            <Header />

            <div className="HealthCare-hero-section">
                <div className='healthcare-sec-1-child text-center'>
                    <h2> Supporting Health Systems & Their </h2>
                    <h2>Medicare Population</h2>
                    <p>Boomers Insurance partners with health systems, physician groups, and community pharmacies to provide clear, compliant Medicare information at every patient touchpoint. Our mission is to protect continuity of care while empowering patients to make confident, informed decisions about their Medicare options.</p>
                </div>

            </div>
        
            <div className="healthcare-sec-2">

                <div className='d-flex justify-space-between'>
                    <div className="healthcare1-part-1">
                        <h2>A Trusted Medicare Communication Platform</h2>
                        <p>Boomers Insurance pioneered the provider-branded Medicare Insurance Helpline—a central tool trusted by hospitals, clinics, and pharmacies nationwide.</p>
                        <h5>Our helpline features</h5>

                        <div className="d-flex justify-space-between">
                            <div className='healthcare-features'>
                                <img src="Icons\healthcare-icon-1.svg" alt="" />
                                <div className="healthcare-spans">
                                    <span className="healthcare-span">A <span className='healthcare-highlight-span'>unique toll-free number </span>branded for your organization</span>
                                </div>
                            </div>
                            <div className='healthcare-features'>
                                <img src="Icons\healthcare-icon-2.svg" alt="" />
                                <div className="healthcare-spans">
                                    <span className="healthcare-span">A <span className='healthcare-highlight-span'>personalized experience </span>that helps patients understand Medicare</span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-space-between">
                            <div className='healthcare-features'>
                                <img src="Icons\healthcare-icon-3.svg" alt="" />
                                <div className="healthcare-spans">
                                    <span className="healthcare-span"><span className='healthcare-highlight-span'>Easy access to plan comparisons </span>and enrollment support for your accepted Medicare plans</span>
                                </div>
                            </div>
                            <div className='healthcare-features'>
                                <img src="Icons\healthcare-icon-4.svg" alt="" />
                                <div className="healthcare-spans">
                                    <span className="healthcare-span">A <span className='healthcare-highlight-span'>Real-time tracking and reporting </span>through our secure CRM</span>
                                </div>
                            </div>
                        </div>

                        <p className='my-3'>Your staff can confidently refer Medicare-related questions to the helpline, ensuring consistent and compliant communication across departments and patient interactions.</p>
                        <div className='my-4'><Link className='healthcare-features-Link'>Schedule a Free Consultation</Link></div>
                    </div>
                    <div className="healthcare1-part-2"></div>
                </div>

                <div className='d-flex justify-space-between my-5'>
                    <div className="healthcare2-part-2"></div>

                    <div className="healthcare2-part-1">
                        <h2>Complete Medicare Communication Support</h2>
                        <p>We help your organization develop clear and compliant Medicare messaging for every stage of the patient journey, including.</p>
                        <h5>Our helpline features</h5>

                        <div className="d-flex justify-space-between">
                            <div className='healthcare-features'>
                                <img src="Icons\healthcare-icon-5.svg" alt="" />
                                <div className="healthcare-spans">
                                    <span className="healthcare-span">Direct <span className='healthcare-highlight-span'>Mail </span>campaigns</span>
                                </div>
                            </div>
                            <div className='healthcare-features'>
                                <img src="Icons\healthcare-icon-6.svg" alt="" />
                                <div className="healthcare-spans">
                                    <span className="healthcare-span">Medicare <span className='healthcare-highlight-span'>helpline </span>brochures</span>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-space-between my-3">
                            <div className='healthcare-features'>
                                <img src="Icons\healthcare-icon-7.svg" alt="" />
                                <div className="healthcare-spans">
                                    <span className="healthcare-span">Annual Enrollment <span className='healthcare-highlight-span'>Period (AEP) </span>outreach</span>
                                </div>
                            </div>
                            <div className='healthcare-features'>
                                <img src="Icons\healthcare-icon-8.svg" alt="" />
                                <div className="healthcare-spans">
                                    <span className="healthcare-span"><span className='healthcare-highlight-span'>“Turning 65” </span>awareness campaigns</span>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-space-between">
                            <div className='healthcare-features'>
                                <img src="Icons\healthcare-icon-9.svg" alt="" />
                                <div className="healthcare-spans" style={{marginTop: "0"}}>
                                    <span className="healthcare-span">Plan affiliation <span className='healthcare-highlight-span'>letters & Medicare </span>newsletters</span>
                                </div>
                            </div>
                        </div>

                        <p className='my-3'>These communications not only support your patients and staff—they strengthen relationships across your entire physician community.</p>
                        <div className='my-4'><Link className='healthcare-features-Link'>Schedule a Free Consultation</Link></div>
                    </div>
                </div>

                <div className='d-flex justify-space-between'>
                    <div className="healthcare1-part-1">
                        <h2>Strategic Medicare Consulting</h2>
                        <p>Our consulting division serves health systems of all sizes—from national hospital networks and community pharmacies to individual physician practices.</p>
                        <h5>We help you</h5>

                        <div className="d-flex justify-space-between">
                            <div className='healthcare-features'>
                                <img src="Icons\healthcare-icon-10.svg" alt="" />
                                <div className="healthcare-spans">
                                    <span className="healthcare-span">Reignite Your <span className='healthcare-highlight-span'>online Marketing </span>for Maximum Impact</span>
                                </div>
                            </div>
                            <div className='healthcare-features'>
                                <img src="Icons\healthcare-icon-11.svg" alt="" />
                                <div className="healthcare-spans">
                                    <span className="healthcare-span">Enhance <span className='healthcare-highlight-span'>Patient Engagement </span>with proven outreach strategies</span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-space-between">
                            <div className='healthcare-features'>
                                <img src="Icons\healthcare-icon-12.svg" alt="" />
                                <div className="healthcare-spans">
                                    <span className="healthcare-span">Navigate <span className='healthcare-highlight-span'>Medicare Advantage </span>network changes</span>
                                </div>
                            </div>
                            <div className='healthcare-features'>
                                <img src="Icons\healthcare-icon-13.svg" alt="" />
                                <div className="healthcare-spans">
                                    <span className="healthcare-span">Analyze Medicare enrollment data <span className='healthcare-highlight-span'>(Advantage & Supplement) </span>by state and county </span>
                                </div>
                            </div>
                        </div>

                        <p className='my-3'>We also provide strategic support when patients must change plans due to contract changes, consolidations, or market exits—ensuring continuity of care is never compromised.</p>
                        <div className='my-4'><Link className='healthcare-features-Link'>Schedule a Free Consultation</Link></div>
                    </div>
                    <div className="healthcare3-part-2"></div>
                </div>

                <div className='d-flex justify-space-between my-5'>
                    <div className="healthcare4-part-2"></div>

                    <div className="healthcare2-part-1">
                        <h2>Tools & Resources for Patient Retention</h2>
                        <p>Your organization will have access to a full suite of retention tools</p>

                        <div className="d-flex justify-space-between">
                            <div className='healthcare-features'>
                                <img src="Icons\healthcare-icon-14.svg" alt="" />
                                <div className="healthcare-spans">
                                    <span className="healthcare-span">Medicare <span className='healthcare-highlight-span'>communication </span>materials library</span>
                                </div>
                            </div>
                            <div className='healthcare-features'>
                                <img src="Icons\healthcare-icon-15.svg" alt="" />
                                <div className="healthcare-spans">
                                    <span className="healthcare-span">Medicare <span className='healthcare-highlight-span'>helpline </span>brochures</span>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-space-between">
                            <div className='healthcare-features'>
                                <img src="Icons\healthcare-icon-16.svg" alt="" />
                                <div className="healthcare-spans" style={{marginTop: "0"}}>
                                    <span className="healthcare-span">Patient <span className='healthcare-highlight-span'>consultation </span>scheduling support</span>
                                </div>
                            </div>
                        </div>

                        <p className='my-3'>These communications not only support your patients and staff—they strengthen relationships across your entire physician community.</p>
                        <div className='my-4'><Link className='healthcare-features-Link'>Schedule a Free Consultation</Link></div>
                    </div>
                </div>

            </div>

            <Footer/>
        
        </>
    )
}

export default HealthcareProvider
