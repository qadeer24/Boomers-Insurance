import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="home-section-3">
                <div className="home-section-3-text">
                    <span>Get in Touch</span>
                    <h3>Get Expert Support from a Licensed Agent in Your Area</h3>
                    <p>What to Expect When You Call:</p>
                    <p>✅ Answer a few simple questions, such as your Medicare number, doctors, and medications.</p>
                    <p>✅ Compare local plans tailored to your needs.</p>
                    <p>✅ Discover discounts and savings opportunities.</p>
                    <p>✅ Get the same plan at the same price as the insurance provider.</p>
                    <span>Speak to an Licensed Agent Today</span>
                    <div className='d-flex'>
                        <div className='home-section-3-box-img'></div>
                        <div style={{ color: "#202020", fontWeight: "700", fontSize: "21px" }}> 1-800-815-1943</div>
                    </div>
                    <div className='d-flex'>
                        <div className='home-section-3-box-img-2'></div>
                        <div style={{ color: "#202020", fontWeight: "700", fontSize: "21px" }}> Monday – Friday | 9 AM – 5 PM PST</div>
                    </div>
                </div>
                <div className="home-sec-3-img"></div>
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

export default Footer
