import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useState } from 'react'

const Events = () => {

    const [Question1, setQuestion1] = useState(false);
    const [Question2, setQuestion2] = useState(false);
    const [Question3, setQuestion3] = useState(false);
    const [Question4, setQuestion4] = useState(false);
    const [Question5, setQuestion5] = useState(false);

    const Question1Click = () => {
        setQuestion1(!Question1);
    };
    const Question2Click = () => {
        setQuestion2(!Question2);
    };
    const Question3Click = () => {
        setQuestion3(!Question3);
    };
    const Question4Click = () => {
        setQuestion4(!Question4);
    };
    const Question5Click = () => {
        setQuestion5(!Question5);
    };

    return (
        <>
            <Header />

            <div className="events-sec-1">
                <div className="events-sec-1-child">
                    <h3>Find Event</h3>
                    <div className="events-sec-1-input">
                        <img src="Icons\search.svg" alt="" />
                        <input type="text" name="" placeholder='Type Country / Address / Zip / Date / Location to find event' id="" />
                        <button className='event-button'>Find Event</button>
                    </div>
                </div>
            </div>

            <div className="events-sec-2">
                <h2 className="text-center">Online Virtual Meetings. Attend a free virtual meeting from the convenience of your home or work.</h2>
                <h6>You’re invited to a Virtual Meeting on Medicare and the Medicare health plans offered by Boomers Insurance Services.</h6>
                <h6>To pre-register for this event, please RSVP. We will email you the link to the virtual meeting with all the details. Please plan on joining the online meeting at least 5 minutes prior to the start of the presentation to ensure your computer is set up correctly</h6>
                <h6>There’s no cost to attend and no obligation to enroll.</h6>

                <div className="events-sec-2-questions">
                    <h2 className="text-center">We can provide some information to your questions like</h2>
                    <div onClick={Question1Click } className="events-questions">
                        <p>When am I eligible for Medicare?</p>
                        <p className={Question1? "d-block" : "d-none"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex suscipit, architecto possimus incidunt dolor saepe sint vero enim est odio pariatur! Nemo, nihil veritatis? Reiciendis, perspiciatis animi. Est, ex!</p>
                    </div>
                    <div onClick={Question2Click} className="events-questions">
                        <p>How and when do I sign up?</p>
                        <p className={Question2? "d-block" : "d-none"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex suscipit, architecto possimus incidunt dolor saepe sint vero enim est odio pariatur! Nemo, nihil veritatis? Reiciendis, perspiciatis animi. Est, ex!</p>
                    </div>
                    <div onClick={Question3Click} className="events-questions">
                        <p>How is it different from Original Medicare?</p>
                        <p className={Question3? "d-block" : "d-none"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex suscipit, architecto possimus incidunt dolor saepe sint vero enim est odio pariatur! Nemo, nihil veritatis? Reiciendis, perspiciatis animi. Est, ex!</p>
                    </div>
                    <div onClick={Question4Click} className="events-questions">
                        <p>Which plan has the best coverage for me?</p>
                        <p className={Question4? "d-block" : "d-none"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex suscipit, architecto possimus incidunt dolor saepe sint vero enim est odio pariatur! Nemo, nihil veritatis? Reiciendis, perspiciatis animi. Est, ex!</p>
                    </div>
                    <div onClick={Question5Click } className="events-questions">
                        <p>Are my doctors, hospitals and prescriptions covered?</p>
                        <p className={Question5? "d-block" : "d-none"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex suscipit, architecto possimus incidunt dolor saepe sint vero enim est odio pariatur! Nemo, nihil veritatis? Reiciendis, perspiciatis animi. Est, ex!</p>
                    </div>
                </div>
            </div>

            <div className="events-sec-3">
                <div className='events-sec-3-left-side'>
                    <h3>Live Sales Presentation</h3>
                    <p>Boomers Insurance Services presentations are conducted in accordance with CMS' Medicare Guidelines which specify requirements related to sales and marketing activities, including event reporting, locations, materials, and gifts/promotional items. Our events are either formal or informal sales presentations conducted by licensed agents.</p>
                    <p>Boomers Insurance  is committed to the health and safety of our employees and to the people we serve in our community. As we continue to follow the California Department of Public Health’s guidelines, we can ensure the following measures for in-person seminar events</p>
                </div>
                <div className='events-sec-3-right-side'>
                    <h3>Staff will</h3>
                    <ul>
                        <li>Conduct self-temperature checks</li>
                        <li>Ask pre-screening questions to all attendees</li>
                        <li>Wear/use Personal Protective Equipment (PPE) and follow infection control precautions</li>
                        <li>Maintain a distance of 6 feet at all times</li>
                        <li>Additional protocols, as needed and set by the CDHP and OSHA.</li>
                    </ul>
                    <p>A licensed Medicare health plan agent will be present with plan information and applications.  For accommodation of persons with special needs at sales meetings call 1-800-815-1943 (TTY Users: 711), 9:00 am – 5:00 pm, 5 days a week.</p>
                    <p>Boomers Insurance represents various Medicare Advantage (MA) plans as well as other types of health plans. Each of these Medicare Advantage organizations has a contract with Medicare to offer Medicare Advantage plans. Enrollment into a Medicare Advantage plan depends on contract renewal.</p>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Events
