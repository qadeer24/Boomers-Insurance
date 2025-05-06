import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const FindAgent = () => {

    const [GridSelected, setGridSelected] = useState(false);
        
    const GridClick = () => {
        setGridSelected(!GridSelected);
    };
    
    return (
        <>
            <Header />
            {/* Hero Section */}
            <div className="Find-agent-section">
                <div className='text-center'>
                    <h2> Find a Local Insurance Agent</h2>
                    <h2>We're here to help you every step of the way</h2>
                    <p>Whether you're looking for Medicare plans, life insurance, or retirement options — our experienced agents are ready to guide you.</p>
                </div>
                <div className="find-agent-Selection-sec">
                    <div className="d-flex">
                        <div>Country</div>
                        <div style={{ marginLeft: "17.6rem" }}>Language</div>
                    </div>
                    <div className='d-flex'>
                        <div class="dropdown">
                            <button class="btn find-Agent-hero-button " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Select your country
                                <img src="Icons\arrow-down.png" alt="" />
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <div class="dropdown mx-3">
                            <button class="btn find-Agent-hero-button " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Select your Language
                                <img src="Icons\arrow-down.png" alt="" />
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <button className='find-agent-dropdown-button'>Find Agent</button>
                    </div>
                </div>
            </div>

            <div className='agent-section'>
                <h2>Results for Agents from <span>Los Angeles </span>who speak <span>English</span></h2>
                <div className='d-flex justify-content-between my-4' style={{ width: "100%" }}>
                    <div></div>
                    <div className='agent-list-grid'>
                        <img onClick={GridClick} src={GridSelected ? "Icons/grid-selected.svg" : "Icons/grid.png"} className='mx-2' alt="" />
                        <img onClick={GridClick} src={GridSelected ? "Icons/list.svg" : "Icons/list-selected.svg"} alt="" />
                    </div>
                </div>

                <div className={ GridSelected ? "d-none": "d-block"}>

                    <div className="agent">
                        <div className='d-flex'>
                            <div><img src="Images\agent-1.png" className='agent-img' alt="" /></div>
                            <div>
                                <h4>Roberto Gaspar Jr.</h4>
                                <p>Los Angeles, Orange</p>
                                <div><img className='agents-info-img' src="Icons\License-id.svg" alt="" />License ID: 0D18273</div>
                                <div><img className='agents-info-img' src="Icons\red-phone-solid.svg" alt="" />Phone No: 949-205-5532</div>
                                <div><img className='agents-info-img' src="Icons\language-icon.svg" alt="" />Languages spoken: English, Spanish</div>
                                <button>Message</button>
                            </div>
                        </div>
                        <div className='agent-info'>
                            <div className="agent-info-line"></div>
                            <div className='agent-info-text'>
                                <h4>About Roberto</h4>
                                <p>I help explain the different parts of Medicare (A, B, C & D), and the differences between Original Medicare, Medicare Supplements, and Advantage plans. I also provide expert, unbiased assistance to Medicare recipients who expect and deserve a high-quality health plan with a provider that best suits their specific needs.</p>
                            </div>
                        </div>
                    </div>

                    <div className="agent my-4">
                        <div className='d-flex'>
                            <div><img src="Images\agent-2.png" className='agent-img' alt="" /></div>
                            <div>
                                <h4>Jose Toscano</h4>
                                <p>Los Angeles, Riverside, Orange</p>
                                <div><img className='agents-info-img' src="Icons\License-id.svg" alt="" /> License ID: 0H65749</div>
                                <div><img className='agents-info-img' src="Icons\red-phone-solid.svg" alt="" />Phone No: 714-724-8995</div>
                                <div><img className='agents-info-img' src="Icons\language-icon.svg" alt="" />Languages spoken: English, Spanish</div>
                                <button>Message</button>
                            </div>
                        </div>
                        <div className='agent-info'>
                            <div className="agent-info-line"></div>
                            <div className='agent-info-text'>
                                <h4>About Roberto</h4>
                                <p>I help explain the different parts of Medicare (A, B, C & D), and the differences between Original Medicare, Medicare Supplements, and Advantage plans. I also provide expert, unbiased assistance to Medicare recipients who expect and deserve a high-quality health plan with a provider that best suits their specific needs.</p>
                            </div>
                        </div>
                    </div>

                    <div className="agent">
                        <div className='d-flex'>
                            <div><img src="Images\agent-3.png" className='agent-img' alt="" /></div>
                            <div>
                                <h4>Marvin Cervantes</h4>
                                <p>Los Angeles, Riverside, Orange, San Diego, San Bernardino</p>
                                <div><img className='agents-info-img' src="Icons\License-id.svg" alt="" />License ID: 0H83089</div>
                                <div><img className='agents-info-img' src="Icons\red-phone-solid.svg" alt="" />Phone No: 323-637-9202</div>
                                <div><img className='agents-info-img' src="Icons\language-icon.svg" alt="" />Languages spoken: English, Spanish</div>
                                <button>Message</button>
                            </div>
                        </div>
                        <div className='agent-info'>
                            <div className="agent-info-line"></div>
                            <div className='agent-info-text'>
                                <h4>About Roberto</h4>
                                <p>I help explain the different parts of Medicare (A, B, C & D), and the differences between Original Medicare, Medicare Supplements, and Advantage plans. I also provide expert, unbiased assistance to Medicare recipients who expect and deserve a high-quality health plan with a provider that best suits their specific needs.</p>
                            </div>
                        </div>
                    </div>

                    <div className="agent my-4">
                        <div className='d-flex'>
                            <div><img src="Images\agent-1.png" className='agent-img' alt="" /></div>
                            <div>
                                <h4>Andre Scott</h4>
                                <p>Los Angeles, Riverside, Orange, San Bernardino</p>
                                <div><img className='agents-info-img' src="Icons\License-id.svg" alt="" />License ID: 0H16381</div>
                                <div><img className='agents-info-img' src="Icons\red-phone-solid.svg" alt="" />Phone No: 949-400-1477</div>
                                <div><img className='agents-info-img' src="Icons\language-icon.svg" alt="" />Languages spoken: English</div>
                                <button>Message</button>
                            </div>
                        </div>
                        <div className='agent-info'>
                            <div className="agent-info-line"></div>
                            <div className='agent-info-text'>
                                <h4>About Roberto</h4>
                                <p>I help explain the different parts of Medicare (A, B, C & D), and the differences between Original Medicare, Medicare Supplements, and Advantage plans. I also provide expert, unbiased assistance to Medicare recipients who expect and deserve a high-quality health plan with a provider that best suits their specific needs.</p>
                            </div>
                        </div>
                    </div>

                    <div className="agent">
                        <div className='d-flex'>
                            <div><img src="Images\agent-5.png" className='agent-img' alt="" /></div>
                            <div>
                                <h4>Ayde Huerta</h4>
                                <p>Los Angeles</p>
                                <div><img className='agents-info-img' src="Icons\License-id.svg" alt="" />License ID: 0F19449</div>
                                <div><img className='agents-info-img' src="Icons\red-phone-solid.svg" alt="" />Phone No: 562-900-0841</div>
                                <div><img className='agents-info-img' src="Icons\language-icon.svg" alt="" />Languages spoken: English, Spanish</div>
                                <button>Message</button>
                            </div>
                        </div>
                        <div className='agent-info'>
                            <div className="agent-info-line"></div>
                            <div className='agent-info-text'>
                                <h4>About Roberto</h4>
                                <p>I help explain the different parts of Medicare (A, B, C & D), and the differences between Original Medicare, Medicare Supplements, and Advantage plans. I also provide expert, unbiased assistance to Medicare recipients who expect and deserve a high-quality health plan with a provider that best suits their specific needs.</p>
                            </div>
                        </div>
                    </div>

                    <div className="agent my-4">
                        <div className='d-flex'>
                            <div><img src="Images\agent-1.png" className='agent-img' alt="" /></div>
                            <div>
                                <h4>Obdulia Molina</h4>
                                <p>Los Angeles, Riverside, Orange</p>
                                <div><img className='agents-info-img' src="Icons\License-id.svg" alt="" />License ID: 678036</div>
                                <div><img className='agents-info-img' src="Icons\red-phone-solid.svg" alt="" />Phone No: 562-642-9470 | 213-880-2362</div>
                                <div><img className='agents-info-img' src="Icons\language-icon.svg" alt="" />Languages spoken: English, Spanish</div>
                                <button>Message</button>
                            </div>
                        </div>
                        <div className='agent-info'>
                            <div className="agent-info-line"></div>
                            <div className='agent-info-text'>
                                <h4>About Roberto</h4>
                                <p>I help explain the different parts of Medicare (A, B, C & D), and the differences between Original Medicare, Medicare Supplements, and Advantage plans. I also provide expert, unbiased assistance to Medicare recipients who expect and deserve a high-quality health plan with a provider that best suits their specific needs.</p>
                            </div>
                        </div>
                    </div>

                    <div className="agent">
                        <div className='d-flex'>
                            <div><img src="Images\agent-7.png" className='agent-img' alt="" /></div>
                            <div>
                                <h4>Sawsan Beshai</h4>
                                <p>Los Angeles, Orange</p>
                                <div><img className='agents-info-img' src="Icons\License-id.svg" alt="" />License ID: 0C66583</div>
                                <div><img className='agents-info-img' src="Icons\red-phone-solid.svg" alt="" />Phone No: 714-749-4300 | 714-624-2686</div>
                                <div><img className='agents-info-img' src="Icons\language-icon.svg" alt="" />Languages spoken: English</div>
                                <button>Message</button>
                            </div>
                        </div>
                        <div className='agent-info'>
                            <div className="agent-info-line"></div>
                            <div className='agent-info-text'>
                                <h4>About Roberto</h4>
                                <p>I help explain the different parts of Medicare (A, B, C & D), and the differences between Original Medicare, Medicare Supplements, and Advantage plans. I also provide expert, unbiased assistance to Medicare recipients who expect and deserve a high-quality health plan with a provider that best suits their specific needs.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={ GridSelected ? "d-block": "d-none"}>
                    <div className="d-flex justify-content-between">

                        <div className="agent-grid">
                            <div className='d-flex'>
                                <div><img src="Images\agent-1.png" className='agent-grid-img' alt="" /></div>
                                <div>
                                    <h5>Roberto Gaspar Jr.</h5>
                                    <p>Los Angeles, Orange</p>
                                    <div><img className='agents-info-img' src="Icons\License-id.svg" alt="" />License ID: 0D18273</div>
                                    <div><img className='agents-info-img' src="Icons\red-phone-solid.svg" alt="" />Phone No: 949-205-5532</div>
                                    <div><img className='agents-info-img' src="Icons\language-icon.svg" alt="" />Languages spoken: English, Spanish</div>
                                    <button className='agent-grid-button agent-grid-button-1'>Message</button>
                                </div>
                            </div>
                        </div>

                        <div className="agent-grid">
                            <div className='d-flex'>
                                <div><img src="Images\agent-2.png" className='agent-grid-img' alt="" /></div>
                                <div>
                                    <h5>Jose Toscano</h5>
                                    <p>Los Angeles, Riverside, Orange</p>
                                    <div><img className='agents-info-img' src="Icons\License-id.svg" alt="" />License ID: 0H65749</div>
                                    <div><img className='agents-info-img' src="Icons\red-phone-solid.svg" alt="" />Phone No: 714-724-8995</div>
                                    <div><img className='agents-info-img' src="Icons\language-icon.svg" alt="" />Languages spoken: English, Spanish</div>
                                    <button className='agent-grid-button agent-grid-button-1'>Message</button>
                                </div>
                            </div>
                        </div>

                        <div className="agent-grid">
                            <div className='d-flex'>
                                <div><img src="Images\agent-3.png" className='agent-grid-img' alt="" /></div>
                                <div>
                                    <h5>Marvin Cervantes</h5>
                                    <p>Los Angeles, Riverside, Orange, San Diego, San Bernardino</p>
                                    <div><img className='agents-info-img' src="Icons\License-id.svg" alt="" />License ID: 0H83089</div>
                                    <div><img className='agents-info-img' src="Icons\red-phone-solid.svg" alt="" />Phone No: 323-637-9202</div>
                                    <div><img className='agents-info-img' src="Icons\language-icon.svg" alt="" />Languages spoken: English, Spanish</div>
                                    <button className='agent-grid-button agent-grid-button-1'>Message</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="d-flex justify-content-between my-4">

                        <div className="agent-grid">
                            <div className='d-flex'>
                                <div><img src="Images\agent-1.png" className='agent-grid-img' alt="" /></div>
                                <div>
                                    <h5>Andre Scott</h5>
                                    <p>Los Angeles, Riverside, Orange, San Bernardino</p>
                                    <div><img className='agents-info-img' src="Icons\License-id.svg" alt="" />License ID: 0H16381</div>
                                    <div><img className='agents-info-img' src="Icons\red-phone-solid.svg" alt="" />Phone No: 949-400-1477</div>
                                    <div><img className='agents-info-img' src="Icons\language-icon.svg" alt="" />Languages spoken: English</div>
                                    <button className='agent-grid-button agent-grid-button-2'>Message</button>
                                </div>
                            </div>
                        </div>

                        <div className="agent-grid">
                            <div className='d-flex'>
                                <div><img src="Images\agent-5.png" className='agent-grid-img' alt="" /></div>
                                <div>
                                    <h5>Ayde Huerta</h5>
                                    <p>Los Angeles</p>
                                    <div><img className='agents-info-img' src="Icons\License-id.svg" alt="" />License ID: 0F19449</div>
                                    <div><img className='agents-info-img' src="Icons\red-phone-solid.svg" alt="" />Phone No: 562-900-0841</div>
                                    <div><img className='agents-info-img' src="Icons\language-icon.svg" alt="" />Languages spoken: English, Spanish</div>
                                    <button className='agent-grid-button agent-grid-button-2'>Message</button>
                                </div>
                            </div>
                        </div>

                        <div className="agent-grid">
                            <div className='d-flex'>
                                <div><img src="Images\agent-1.png" className='agent-grid-img' alt="" /></div>
                                <div>
                                    <h5>Obdulia Molina</h5>
                                    <p>Los Angeles, Riverside, Orange</p>
                                    <div><img className='agents-info-img' src="Icons\License-id.svg" alt="" />License ID: 678036</div>
                                    <div><img className='agents-info-img' src="Icons\red-phone-solid.svg" alt="" />Phone No: 562-642-9470213-880-2362</div>
                                    <div><img className='agents-info-img' src="Icons\language-icon.svg" alt="" />Languages spoken: English, Spanish</div>
                                    <button className='agent-grid-button agent-grid-button-2'>Message</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="d-flex justify-content-between">

                        <div className="agent-grid">
                            <div className='d-flex'>
                                <div><img src="Images\agent-7.png" className='agent-grid-img' alt="" /></div>
                                <div>
                                    <h5>Sawsan Beshai</h5>
                                    <p>Los Angeles, Orange</p>
                                    <div><img className='agents-info-img' src="Icons\License-id.svg" alt="" />License ID: 0C66583</div>
                                    <div><img className='agents-info-img' src="Icons\red-phone-solid.svg" alt="" />Phone No: 714-749-4300714-624-2686</div>
                                    <div><img className='agents-info-img' src="Icons\language-icon.svg" alt="" />Languages spoken: English</div>
                                    <button className='agent-grid-button agent-grid-button-3'>Message</button>
                                </div>
                            </div>
                        </div>

                        <div className="agent-grid">
                            <div className='d-flex'>
                                <div><img src="Images\agent-1.png" className='agent-grid-img' alt="" /></div>
                                <div>
                                    <h5>Araceli Perez</h5>
                                    <p>Los Angeles, Riverside, Orange</p>
                                    <div><img className='agents-info-img' src="Icons\License-id.svg" alt="" />License ID: 0I07676</div>
                                    <div><img className='agents-info-img' src="Icons\red-phone-solid.svg" alt="" />Phone No: 323-697-4520</div>
                                    <div><img className='agents-info-img' src="Icons\language-icon.svg" alt="" />Languages spoken: English</div>
                                    <button className='agent-grid-button agent-grid-button-3'>Message</button>
                                </div>
                            </div>
                        </div>

                        <div className="agent-grid">
                            <div className='d-flex'>
                                <div><img src="Images\agent-1.png" className='agent-grid-img' alt="" /></div>
                                <div>
                                    <h5>Alejandro Solorio</h5>
                                    <p>Los Angeles, Riverside, Orange, San Diego, San Bernardino</p>
                                    <div><img className='agents-info-img' src="Icons\License-id.svg" alt="" />License ID: 0I84262</div>
                                    <div><img className='agents-info-img' src="Icons\red-phone-solid.svg" alt="" />Phone No: 323-562-2082</div>
                                    <div><img className='agents-info-img' src="Icons\language-icon.svg" alt="" />Languages spoken: English, Spanish</div>
                                    <button className='agent-grid-button agent-grid-button-3'>Message</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="d-flex justify-content-between my-4">

                        <div className="agent-grid">
                            <div className='d-flex'>
                                <div><img src="Images\agent-10.png" className='agent-grid-img' alt="" /></div>
                                <div>
                                    <h5>Karen Preston</h5>
                                    <p>Los Angeles</p>
                                    <div><img className='agents-info-img' src="Icons\License-id.svg" alt="" />License ID: 0I39816</div>
                                    <div><img className='agents-info-img' src="Icons\red-phone-solid.svg" alt="" /> Phone No: 310-200-5116</div>
                                    <div><img className='agents-info-img' src="Icons\language-icon.svg" alt="" />Languages spoken: English</div>
                                    <button className='agent-grid-button agent-grid-button-4'>Message</button>
                                </div>
                            </div>
                        </div>

                        <div className="agent-grid">
                            <div className='d-flex'>
                                <div><img src="Images\agent-11.png" className='agent-grid-img' alt="" /></div>
                                <div>
                                    <h5>Nelly Chavez</h5>
                                    <p>Los Angeles</p>
                                    <div><img className='agents-info-img' src="Icons\License-id.svg" alt="" />License ID: 0F63831</div>
                                    <div><img className='agents-info-img' src="Icons\red-phone-solid.svg" alt="" />Phone No: 323-695-9967</div>
                                    <div><img className='agents-info-img' src="Icons\language-icon.svg" alt="" />Languages spoken: English, Spanish</div>
                                    <button className='agent-grid-button agent-grid-button-4'>Message</button>
                                </div>
                            </div>
                        </div>

                        <div className="agent-grid">
                            <div className='d-flex'>
                                <div><img src="Images\agent-12.png" className='agent-grid-img' alt="" /></div>
                                <div>
                                    <h5>Alfonso Muniz</h5>
                                    <p>Los Angeles</p>
                                    <div><img className='agents-info-img' src="Icons\License-id.svg" alt="" />License ID: 0G31562</div>
                                    <div><img className='agents-info-img' src="Icons\red-phone-solid.svg" alt="" />Phone No: 562-904-9209</div>
                                    <div><img className='agents-info-img' src="Icons\language-icon.svg" alt="" />Languages spoken: English, Spanish</div>
                                    <button className='agent-grid-button agent-grid-button-4'>Message</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="d-flex justify-content-between">

                        <div className="agent-grid">
                            <div className='d-flex'>
                                <div><img src="Images\agent-1.png" className='agent-grid-img' alt="" /></div>
                                <div>
                                    <h5>Victor Delgado</h5>
                                    <p>Los Angeles, Riverside, Orange</p>
                                    <div><img className='agents-info-img' src="Icons\License-id.svg" alt="" />License ID: 0J10555</div>
                                    <div><img className='agents-info-img' src="Icons\red-phone-solid.svg" alt="" /> Phone No: 562-242-5054</div>
                                    <div><img className='agents-info-img' src="Icons\language-icon.svg" alt="" />Languages spoken: English</div>
                                    <button className='agent-grid-button agent-grid-button-5'>Message</button>
                                </div>
                            </div>
                        </div>

                        <div className="agent-grid">
                            <div className='d-flex'>
                                <div><img src="Images\agent-14.png" className='agent-grid-img' alt="" /></div>
                                <div>
                                    <h5>Wendy Hanks</h5>
                                    <p>Los Angeles</p>
                                    <div><img className='agents-info-img' src="Icons\License-id.svg" alt="" />License ID: 0H67999</div>
                                    <div><img className='agents-info-img' src="Icons\red-phone-solid.svg" alt="" />Phone No: 562-413-5654</div>
                                    <div><img className='agents-info-img' src="Icons\language-icon.svg" alt="" />Languages spoken: English, Spanish</div>
                                    <button className='agent-grid-button agent-grid-button-5'>Message</button>
                                </div>
                            </div>
                        </div>

                        <div className="agent-grid">
                            <div className='d-flex'>
                                <div><img src="Images\agent-12.png" className='agent-grid-img' alt="" /></div>
                                <div>
                                    <h5>Rosa Madrid</h5>
                                    <p>Los Angeles</p>
                                    <div><img className='agents-info-img' src="Icons\License-id.svg" alt="" />License ID: 0K59054</div>
                                    <div><img className='agents-info-img' src="Icons\red-phone-solid.svg" alt="" />Phone No: 562-577-3854</div>
                                    <div><img className='agents-info-img' src="Icons\language-icon.svg" alt="" />Languages spoken: English, Spanish</div>
                                    <button className='agent-grid-button agent-grid-button-5'>Message</button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className="footer">
                <div className="footer-sec-1">
                    <div>
                        <div className="d-flex" style={{ alignItems: "center" }}>
                            <img src="Icons\Logo.svg" alt="" />
                            <h5>BOOMERS INSURANCE</h5>
                        </div>
                        <p>National Producer ID: #139800001-800-815-1943 (TTY: 711)Licensed in 46 States</p>
                    </div>

                    <div style={{ display: "grid" }}>
                        <h5>LINKS</h5>
                        <Link style={{ color: "white", marginBottom: "0.5rem" }}>Home</Link>
                        <Link style={{ color: "white", marginBottom: "0.5rem" }}>Find an Agent</Link>
                        <Link style={{ color: "white", marginBottom: "0.5rem" }}>Events</Link>
                        <Link style={{ color: "white", marginBottom: "0.5rem" }}>Locations</Link>
                        <Link style={{ color: "white", marginBottom: "0.5rem" }}>Medicare FAQs</Link>
                        <Link style={{ color: "white", marginBottom: "0.5rem" }}>Enroll Online</Link>
                    </div>

                    <div style={{ display: "grid" }}>
                        <h5>HELPFUL LINKS</h5>
                        <Link style={{ color: "white", textDecoration: "underline", marginBottom: "0.5rem" }}>SocialSecurity.gov</Link>
                        <Link style={{ color: "white", textDecoration: "underline", marginBottom: "0.5rem" }}>Medicare & You —</Link>
                        <Link style={{ color: "white", textDecoration: "underline", marginBottom: "0.5rem" }}>Handbook</Link>
                        <Link style={{ color: "white", textDecoration: "underline", marginBottom: "0.5rem" }}>Dental & Vision Plans</Link>
                        <Link style={{ color: "white", textDecoration: "underline", marginBottom: "0.5rem" }}>Covered California Info</Link>
                        <Link style={{ color: "white", textDecoration: "underline", marginBottom: "0.5rem" }}>Commission</Link>
                    </div>

                    <div>
                        <h5>ARE YOU AN AGENT?</h5>
                        <p>Boomers is always looking for licensed agents.</p>
                        <button className='footer-button d-flex'>Apply Here</button>
                    </div>
                </div>

                <div className="footer-sec-2">
                    <p>This website contains information about and access to insurance plans for Medicare beneficiaries, individuals soon eligible for Medicare and those advising on behalf of Medicare beneficiaries. It is operated by Boomers Insurance Services, a licensed health insurance agency certified to sell Medicare products. Boomers Insurance Services, is not endorsed by the Centers for Medicare & Medicaid Services (CMS), the Department of Health and Human Services (DHHS), or any other government agency.</p>
                    <p>Boomers Insurance Services, is a licensed and certified representative of Medicare Advantage HMO, POS, PPO and PFFS organizations and a stand-alone prescription drug plans with a Medicare contract. Enrollment in any plan depends on contract renewal. This is not a complete list of plans available in your service area. For a complete listing, please contact 1-800-MEDICARE (1-800-633-4227), 24 hours day, 7 days a week or visit www.Medicare.gov. You must continue to pay your Medicare Part B premium. This information is not a complete description of benefits. Contact the plan for more information. Limitations, copayments and restrictions may apply. Benefits, premiums and/or member cost-share may change on January 1 of each year.</p>
                    <p>We do not offer every plan available in your area. Currently, we represent 16 organizations which offer47 products in your area. Please contact Medicare.gov, 1-800-MEDICARE, or your local State Health Insurance Program (SHIP) to get information on all of your options. Plans are insured or covered by a Medicare Advantage (HMO, PPO and PFFS) organization with a Medicare contract and/or a Medicare approved Part D sponsor. Enrollment in the plan depends on the plan’s contract renewal with Medicare.</p>
                    <p>Medicare Supplement plans are not connected with or endorsed by the U.S. Government or the federal Medicare program.</p>
                    <p>The purpose of this communication is the solicitation of insurance. Contact will be made by an insurance agent/producer or insurance company.</p>
                    <p>This information is available for free in other languages. Please contact a licensed Boomers sales agent at 1-800-815-1943 (TTY: 711). Esta información está disponible gratuitamente en otros idiomas. Póngase en contacto con un agente de ventas certificado de Boomers al 1-800-815-1943 (TTY: 711). 本資訊也有其他語言的免費版本可供選擇。請撥1-800-815-1943（聽障專線：711）與持照 Boomers 銷售代理聯絡。Boomers Insurance services complies with applicable Federal civil rights laws and does not discriminate on the basis of race, color,national origin,age, disability, or sex.</p>
                </div>

                <div className="footer-sec-3">
                    <p className='text-center'>© 2025. Boomers Insurance Services. Privacy PolicyMULTIPLAN_13980000website_M_Approved, last update 4/1/2025</p>
                    <p className='text-center'>Created by Stream Design Studio</p>
                </div>
            </div>
        </>
    )
}

export default FindAgent
