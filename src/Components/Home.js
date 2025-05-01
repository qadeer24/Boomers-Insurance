import React from 'react'
import { useState } from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Home = () => {
    

  return (
    <>

      <Header/>

      {/* Hero Section */}
      <div className="home-hero-section">
        <div className='text-center'>
          <h2>Your Medicare journey should be simple and stress-free—Boomers Insurance is here to provide expert advice with a personal touch.</h2>
          <p>For over 15 years, Boomers Insurance has been a trusted partner for Baby Boomers like you, helping Medicare beneficiaries in 46 states make confident healthcare choices. Our experienced, licensed agents provide clear, unbiased guidance, ensuring you find the right Medicare plan that fits your needs, lifestyle, and budget—so you can enjoy retirement with peace of mind.</p>
        </div>

        <div className="d-flex" style={{ marginLeft: "33px" }}>
          <div className="home-hero-section-box">
            <p className='text-center mt-4 pt-2'><img src="Images\home-image-1.png" alt="" /></p>
            <h3 className='text-center'>Talk to an agent</h3>
            <p className='text-center'>Your Agent helps you enroll, compare Medicare options, and choose the coverage that best fits your needs.</p>
            <div className='d-flex justify-content-center'>
              <div className='home-hero-section-box-img'></div>
              <div style={{ color: "#5F5F5F", fontWeight: "600" }}> 1-800-815-1943</div>
            </div>
            <p className='home-hero-section-box-p mt-3'>(TTY:711)</p>
            <p className='home-hero-section-box-p'>Mon-Fri. 9 AM-5 PM PST</p>
          </div>

          <div className="home-hero-section-box">
            <p className='text-center mt-4 pt-2'><img src="Images\home-image-2.png" alt="" /></p>
            <h3 className='text-center'>Shop and Explore online</h3>
            <p className='text-center mx-4'>See and compare Medicare Advantage plans available near you and apply online.</p>
            <p style={{ marginLeft: "70px" }}>Enter zip Code</p>
            <div className="d-flex">
              <input type="text" placeholder='' className='home-hero-section-box-input' />
              <button className='home-hero-section-box-button d-flex'>Get Started <img src="Icons\arrow-right-solid.svg" alt="" /></button>
            </div>
          </div>
        </div>
      </div>


      {/* Section-1 */}
      <div className="home-section-1">
        <h2 className='text-center'>We recommend plans from every single insurance carrier, including</h2>

        <div className="home-section-1-logos">
          <img src="Images\section-1-logo-1.png" alt="" />
          <img src="Images\section-1-logo-2.png" alt="" />
          <img src="Images\section-1-logo-3.png" alt="" />
          <img src="Images\section-1-logo-4.png" alt="" />
        </div>

        <h2 className='text-center'>Why Boomers Insurance?</h2>
        <p className='text-center'>Choosing the right Medicare plan can feel overwhelming, but you don’t have to navigate it alone. At Boomers Insurance, we simplify the process by offering expert guidance, personalized recommendations, and access to top insurance providers. With our dedicated support, you can make informed decisions about your healthcare with confidence.</p>

        <div className="home-section-1-boxes">
          <div className="home-section-1-box-1">
            <h5>A Wide Range of Plan Options</h5>
            <p>We partner with top-rated insurance carriers to offer a variety of Medicare Advantage, Medicare Supplement, and Prescription Drug Plans, ensuring you get the best coverage possible.</p>
          </div>

          <div className="home-section-1-box-2">
            <h5>Personalized, One-on-One Support</h5>
            <p>Every individual’s healthcare needs are unique, and we take the time to understand your specific situation. Our agents will walk you through your options and help you find the plan that best suits you.</p>
          </div>

          <div className="home-section-1-box-1">
            <h5>Unbiased & Transparent Guidance</h5>
            <p>As an independent agency, we work for you—not the insurance companies. Our goal is to provide honest, impartial recommendations so you can make informed decisions about your healthcare.</p>
          </div>

          <div className="home-section-1-box-2">
            <h5>No-Cost Consultation</h5>
            <p>Our services are 100% free to you. There’s no cost, no obligation—just expert advice to help you find the right Medicare plan.</p>
          </div>
        </div>
        <h2 className='text-center pt-5'>Find Your Match, Your Way</h2>
        <p className='text-center px-5'>Choosing the right health plan should be easy and convenient. Whether you prefer speaking with an advisor, comparing plans online, or scheduling a call, we’re here to help in the way that works best for you.</p>

        <div className="home-sec-1-images-sections">
          <div className="home-sec-1-images-sec">
            <img src="Images\section-1-image-1.png" className='home-sec-1-images-sec-img' alt="" />
            <h4>Speak with an Agent</h4>
            <p>Get guidance from licensed e-health with Boomers benefit advisors over the phone.</p>
            <h6>Availability:</h6>
            <h5>Monday - Friday, 5 AM - 6 PM PT</h5>
            <div className='d-flex justify-content-center'>
              <div className='home-hero-section-box-img'></div>
              <div style={{ color: "#5F5F5F", fontWeight: "600" }}> 1-800-815-1943</div>
            </div>
          </div>
          <div className="home-sec-1-images-sec">
            <div className='home-sec-1-images-sec-img-2-wrap'><img src="Images\section-1-image-2.png" className='home-sec-1-images-sec-img-2' alt="" /></div>
            <h4>Explore Plans Online</h4>
            <p>Discover and explore plans that include your preferred doctors, prescriptions, and benefits.</p>
            <h6>🔍 See Plans in My Area</h6>
          </div>
          <div className="home-sec-1-images-sec">
            <img src="Images\section-1-image-3.png" className='home-sec-1-images-sec-img' alt="" />
            <h4>Make an Appointment</h4>
            <p>Schedule a call with a licensed Boomer Agent advisor at your convenience.</p>
            <h6>📅 Book Appointment</h6>
          </div>
        </div>
      </div>

      {/* section-2 */}
      <div className="home-section-2">
        <h3 className='text-center'>Learn about your Medicare options</h3>
        <p className='text-center'>Medicare isn’t one-size-fits-all, and finding the right plan depends on your unique healthcare needs. Whether you're looking for additional benefits, lower out-of-pocket costs, or prescription drug coverage, we’re here to help you compare options and choose the plan that works best for you.</p>
        <div className="home-section-2-boxes">
          <div className="home-section-2-box">
            <div className="home-section-2-box-img-1"></div>
            <h5>Medicare Advantage Plans</h5>
            <p>These plans offer additional benefits beyond Original Medicare, such as dental, vision, hearing, and prescription drug coverage. Some plans may have premiums as low as $0 per month.</p>
          </div>
          <div className="home-section-2-box">
            <div className="home-section-2-box-img-2"></div>
            <h5>Medicare Advantage Plans</h5>
            <p>These plans offer additional benefits beyond Original Medicare, such as dental, vision, hearing, and prescription drug coverage. Some plans may have premiums as low as $0 per month.</p>
          </div>
          <div className="home-section-2-box">
            <div className="home-section-2-box-img-3"></div>
            <h5>Medicare Advantage Plans</h5>
            <p>These plans offer additional benefits beyond Original Medicare, such as dental, vision, hearing, and prescription drug coverage. Some plans may have premiums as low as $0 per month.</p>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default Home
