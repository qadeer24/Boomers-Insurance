import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useState } from 'react'

const FAQs = () => {

    const [Question1, setQuestion1] = useState(false);
    const [Question2, setQuestion2] = useState(false);
    const [Question3, setQuestion3] = useState(false);
    const [Question4, setQuestion4] = useState(false);
    const [Question5, setQuestion5] = useState(false);
    const [Question6, setQuestion6] = useState(false);
    const [Question7, setQuestion7] = useState(false);
    const [Question8, setQuestion8] = useState(false);
    const [Question9, setQuestion9] = useState(false);
    const [Question10, setQuestion10] = useState(false);
    const [Question11, setQuestion11] = useState(false);
    const [Question12, setQuestion12] = useState(false);
    const [Question13, setQuestion13] = useState(false);
    const [Question14, setQuestion14] = useState(false);
    const [Question15, setQuestion15] = useState(false);
    const [Question16, setQuestion16] = useState(false);
    const [Question17, setQuestion17] = useState(false);
    const [Question18, setQuestion18] = useState(false);
    const [Question19, setQuestion19] = useState(false);
    const [Question20, setQuestion20] = useState(false);
    const [Question21, setQuestion21] = useState(false);
    const [Question22, setQuestion22] = useState(false);
    const [Question23, setQuestion23] = useState(false);
    const [Question24, setQuestion24] = useState(false);
    const [Question25, setQuestion25] = useState(false);
    const [Question26, setQuestion26] = useState(false);
    
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
    const Question6Click = () => {
        setQuestion6(!Question6);
    };
    const Question7Click = () => {
        setQuestion7(!Question7);
    };
    const Question8Click = () => {
        setQuestion8(!Question8);
    };
    const Question9Click = () => {
        setQuestion9(!Question9);
    };
    const Question10Click = () => {
        setQuestion10(!Question10);
    };
    const Question11Click = () => {
        setQuestion11(!Question11);
    };
    const Question12Click = () => {
        setQuestion12(!Question12);
    };
    const Question13Click = () => {
        setQuestion13(!Question13);
    };
    const Question14Click = () => {
        setQuestion14(!Question14);
    };
    const Question15Click = () => {
        setQuestion15(!Question15);
    };
    const Question16Click = () => {
        setQuestion16(!Question16);
    };
    const Question17Click = () => {
        setQuestion17(!Question17);
    };
    const Question18Click = () => {
        setQuestion18(!Question18);
    };
    const Question19Click = () => {
        setQuestion19(!Question19);
    };
    const Question20Click = () => {
        setQuestion20(!Question20);
    };
    const Question21Click = () => {
        setQuestion21(!Question21);
    };
    const Question22Click = () => {
        setQuestion22(!Question22);
    };
    const Question23Click = () => {
        setQuestion23(!Question23);
    };
    const Question24Click = () => {
        setQuestion24(!Question24);
    };
    const Question25Click = () => {
        setQuestion25(!Question25);
    };
    const Question26Click = () => {
        setQuestion26(!Question26);
    };
 
    return (
        <>
            <Header />

            {/* Hero section */}
            <div className="FAQs-sec-1">
                <div className="events-sec-1-child">
                    <h3>Medicare FAQs</h3>
                    <div className="events-sec-1-input">
                        <img src="Icons\search.svg" alt="" />
                        <input type="text" name="" placeholder='Start typing find your answers' id="" />
                        <button className='FAQs-button'>Find Answers</button>
                    </div>
                </div>
            </div>

            <div className="FAQs-sec-2">
                <h2 className="text-center">Medicare FAQs</h2>
                <h6 className="text-center">Improve your understanding of Medicare with these answers to some</h6>
                <h6 className="text-center">frequently asked questions.</h6>

                <div className="FAQs-sec2-questions">
                    <div onClick={Question1Click} className="FAQs-questions FAQs-sec-2-questions">
                        <div className="d-flex justify-content-between">
                            <span>Who is eligible for Medicare?</span>
                            <img src={Question1 ? "Icons/minus.svg" : "Icons/plus.svg"} alt="" />
                        </div>
                        <div className={Question1 ? "d-block" : "d-none"}>
                            <p className='text-left'>You’re eligible for Medicare if you are 65 or older, a U.S. citizen or permanent resident, and if Medicare taxes were taken out of your or your spouse’s paycheck for at least 10 years. If you’re under 65, you may still qualify for Medicare if you have a disability or permanent kidney failure or ALS (Amyotrophic Lateral Sclerosis also known as Lou Gehrigs disease).</p>
                            <p className='text-left'>Learn more about Medicare here:</p>
                            <ul className='text-left'>
                                <li className='text-left'>Medicare & You</li>
                                <p className='text-left'>Click on the Helpful Links on our website, Download Medicare & You to access Medicare & You 2016 publication.</p>
                            </ul>
                        </div>
                    </div>

                    <div onClick={Question2Click} className="FAQs-questions">
                        <div className="d-flex justify-content-between">
                            <span>What is Medicare Parts A & B?</span>
                            <img src={Question2 ? "Icons/minus.svg" : "Icons/plus.svg"} alt="" />
                        </div>
                        <div className={Question2 ? "d-block" : "d-none"}>
                            <p className='text-left'>In most cases, Medicare is a federal health insurance program for people 65 years old or over and for certain disabled people under 65 years of age. You are automatically enrolled in Medicare hospital insurance (Part A) when you apply for Social Security benefits – usually upon reaching 65 years of age. Part A covers inpatient care in a hospital or a limited stay in a skilled nursing facility. Part B covers physician and outpatient hospital services. The premium you pay for Part B is deducted from your Social Security benefits.</p>
                            <p className='text-left'>Medicare pays for many healthcare services and supplies, but it doesn't cover all of your healthcare costs. For example, you pay a deductible for each hospital stay and coinsurance anytime you use the services of a physician or surgeon. Also, drug coverage is limited. Because Medicare rarely pays the full cost of covered services, you may want to consider a Medicare Advantage or Medicare Supplement insurance plan.</p>
                        </div>
                    </div>

                    <div onClick={Question3Click} className="FAQs-questions">
                        <div className="d-flex justify-content-between">
                            <span>What is a Medicare Supplement insurance plan?</span>
                            <img src={Question3 ? "Icons/minus.svg" : "Icons/plus.svg"} alt="" />
                        </div>
                        <div className={Question3 ? "d-block" : "d-none"}>
                            <p className='text-left'>A Medicare Supplement insurance plan helps cover the costs that are left unpaid after Medicare Parts A and B pay their portion of your healthcare expenses. Unlike a Medicare Advantage plan, which is an alternative to your Medicare Parts A and B benefits, a Medicare Supplement plan is purchased in addition to your Medicare Parts A and B benefits.</p>
                            <p className='text-left'>Medicare Supplement policies are standardized into 10 plans - labeled "A" through "N", each with its own set of benefits. Plan A covers the most basic benefits. These basic benefits are also covered in each of the remaining Medicare Supplement plans - B through N. Plans B through N provide additional coverage beyond the basics.</p>
                            <p className='text-left'>Medicare Supplement policies are sold by private insurance companies. While the costs of these policies may vary, individual insurance companies must provide the same standardized benefits. Some companies may offer innovative benefits. To purchase a policy, in general you must be enrolled in Medicare Part A and Part B. In addition to paying the monthly Medicare Part B premium to Medicare, you will have to pay a premium to the insurance company providing your coverage.</p>
                        </div>
                    </div>
                    
                    <div onClick={Question4Click} className="FAQs-questions">
                        <div className="d-flex justify-content-between">
                            <span>What is the difference between Medicare Advantage and Medicare Supplement plans?</span>
                            <img src={Question4 ? "Icons/minus.svg" : "Icons/plus.svg"} alt="" />
                        </div>
                        <div className={Question4 ? "d-block" : "d-none"}>
                            <p className='text-left'>Medicare Advantage (MA) plans are available through private health insurance companies and replace Original Medicare. MA plans may or may not include a Medicare prescription drug benefit. Medicare Supplement plans supplement Original Medicare, providing secondary coverage for out-of-pocket costs. Only beneficiaries with Original Medicare may enroll in Medicare Supplement plans. Beneficiaries cannot enroll in an MA plan and a Medicare Supplement plan. However, beneficiaries can enroll in a Medicare Supplement plan and a Medicare prescription drug plan (PDP), also known as Medicare Part D.</p>
                        </div>
                    </div>
                    
                    <div onClick={Question5Click} className="FAQs-questions">
                        <div className="d-flex justify-content-between">
                            <span>Am I eligible to purchase a Medicare Supplement insurance plan?</span>
                            <img src={Question5 ? "Icons/minus.svg" : "Icons/plus.svg"} alt="" />
                        </div>
                        <div className={Question5 ? "d-block" : "d-none"}>
                            <p className='text-left'>If you're enrolled in Medicare Part A and Part B, you're probably eligible to buy a Medicare Supplement policy. During your Medicare Supplement Open Enrollment Period – for people 65 or older, that’s six months after you sign up for Medicare Part B – a company must allow you to buy any Medicare Supplement insurance plan offered. In some states these plans may be available to those under age 65.</p>
                        </div>
                    </div>
                    
                    <div onClick={Question6Click} className="FAQs-questions">
                        <div className="d-flex justify-content-between">
                            <span>What are the dates for enrollment in Medicare plans?</span>
                            <img src={Question6 ? "Icons/minus.svg" : "Icons/plus.svg"} alt="" />
                        </div>
                        <div className={Question6 ? "d-block" : "d-none"}>
                            <p className='text-left'>Here are key enrollment dates: October 15 – December 7 (Annual Election Period) If you're eligible, you can enroll in Medicare health benefits, such as a Medicare Advantage plan, for the following year. During this period, you can also change plans or enroll in a separate prescription drug plan.</p>
                        </div>
                    </div>
                    
                    <div onClick={Question7Click} className="FAQs-questions">
                        <div className="d-flex justify-content-between">
                            <span>When can I enroll in a Medicare Advantage or a Prescription Drug Plan?</span>
                            <img src={Question7 ? "Icons/minus.svg" : "Icons/plus.svg"} alt="" />
                        </div>
                        <div className={Question7 ? "d-block" : "d-none"}>
                            <p className='text-left'>You can enroll in a Medicare Advantage (MA) or a prescription drug plan (PDP) during the Annual Election Period (AEP), Initial Enrollment Period (IEP), Initial Coverage Enrollment Period (ICEP) or Special Enrollment Period (SEP).</p>
                        </div>
                    </div>
                    
                    <div onClick={Question8Click} className="FAQs-questions">
                        <div className="d-flex justify-content-between">
                            <span>I will be turning 65 in a few months. When can I enroll in a Medicare Advantage plans?</span>
                            <img src={Question8 ? "Icons/minus.svg" : "Icons/plus.svg"} alt="" />
                        </div>
                        <div className={Question8 ? "d-block" : "d-none"}>
                            <p className='text-left'>You may enroll anytime during the first three months immediately preceding the month your enrollment in Medicare Parts A and B becomes effective. This time is called your Initial Coverage Election Period. It generally coincides with the month you turn 65 years old; however, some people choose to delay Part B coverage for a while if they have other coverage through their employer. In that case, it would be the month that your Part B coverage goes into effect, assuming you already have Part A.</p>
                        </div>
                    </div>
                    
                    <div onClick={Question9Click} className="FAQs-questions">
                        <div className="d-flex justify-content-between">
                            <span>What are the Medicare Supplement enrollment dates?</span>
                            <img src={Question9 ? "Icons/minus.svg" : "Icons/plus.svg"} alt="" />
                        </div>
                        <div className={Question9 ? "d-block" : "d-none"}>
                            <p className='text-left'>There are no specific enrollment dates for a Medicare Supplement insurance plan. The best time to buy an insurance policy is during your Medicare Supplement Open Enrollment Period which lasts six months. It starts on the first day of the month in which you are BOTH age 65 or older AND enrolled in Medicare Part B. In some states, these plans may be available to those under age 65. For those enrolling in a Medicare Supplement insurance plan prior to the age of 65, your Medicare Supplement Open Enrollment Period begins on the first day you're enrolled in Medicare Part B. Once your Medicare Supplement Open Enrollment Period starts it cannot be changed.</p>
                        </div>
                    </div>
                    
                    <div onClick={Question10Click} className="FAQs-questions">
                        <div className="d-flex justify-content-between">
                            <span>When can I change my Medicare plan?</span>
                            <img src={Question10 ? "Icons/minus.svg" : "Icons/plus.svg"} alt="" />
                        </div>
                        <div className={Question10 ? "d-block" : "d-none"}>
                            <p className='text-left'>You can change your Medicare plan during the Annual Election Period (AEP),Oct.15-Dec7th.</p>
                        </div>
                    </div>
                    
                    <div onClick={Question11Click} className="FAQs-questions">
                        <div className="d-flex justify-content-between">
                            <span>When can I enroll in a Medicare Advantage or a Prescription Drug Plan?</span>
                            <img src={Question11 ? "Icons/minus.svg" : "Icons/plus.svg"} alt="" />
                        </div>
                        <div className={Question11 ? "d-block" : "d-none"}>
                            <p className='text-left'>You can enroll in a Medicare Advantage (MA) or a prescription drug plan (PDP) during the Annual Election Period (AEP), Initial Enrollment Period (IEP), Initial Coverage Enrollment Period (ICEP) or Special Enrollment Period (SEP). Go to When to Enroll in Medicare Advantage or Prescription Drug Plans for more information.</p>
                        </div>
                    </div>
                    
                    <div onClick={Question12Click} className="FAQs-questions">
                        <div className="d-flex justify-content-between">
                            <span>What is a Medicare Advantage PFFS plan?</span>
                            <img src={Question12 ? "Icons/minus.svg" : "Icons/plus.svg"} alt="" />
                        </div>
                        <div className={Question12 ? "d-block" : "d-none"}>
                            <p className='text-left'>PFFS plans feature limits on out-of-pocket expenses, coverage for emergency and urgent care, and in some cases, a prescription drug benefit. If you select a PFFS plan, it is an alternative to your Medicare coverage. However, you can return to Medicare down the road if you wish.</p>
                        </div>
                    </div>
                    
                    <div onClick={Question13Click} className="FAQs-questions">
                        <div className="d-flex justify-content-between">
                            <span>Is it better to enroll in an all-in-one plan that provides both medical and drug coverage?</span>
                            <img src={Question13 ? "Icons/minus.svg" : "Icons/plus.svg"} alt="" />
                        </div>
                        <div className={Question13 ? "d-block" : "d-none"}>
                            <p className='text-left'>The answer depends on your personal preferences and budget. For many people, the main reasons for choosing a Medicare Advantage plan are: (1) the simplicity of dealing with one company and (2) additional benefits and services not available with Medicare Parts A and B. For others, the choice comes down to price. In some areas, the all-in-one plan is less expensive than prescription coverage alone.</p>
                        </div>
                    </div>
                    
                    <div onClick={Question14Click} className="FAQs-questions">
                        <div className="d-flex justify-content-between">
                            <span>What factors should I consider when choosing a Medicare health plan?</span>
                            <img src={Question14 ? "Icons/minus.svg" : "Icons/plus.svg"} alt="" />
                        </div>
                        <div className={Question14 ? "d-block" : "d-none"}>
                            <p className='text-left'>Before you select a plan, carefully consider the following questions. Your answers will help guide you to the plan that's right for you.</p>
                            <ul style={{display: "grid"}}>
                                <span className="text-left">Do you already have a doctor you like?</span>
                                <span className="text-left">Are you choosing a new doctor?</span>
                                <span className="text-left">Is freedom to choose doctors and hospitals very important to you?</span>
                                <span className="text-left">Do you need a prescription drug plan?</span>
                                <span className="text-left">Do you have health problems today or old problems that may recur?</span>
                                <span className="text-left">What drugs does the plan cover?</span>
                                <span className="text-left">Does your doctor feel comfortable with the plan's guidelines for your treatment?</span>
                            </ul>
                        </div>
                    </div>
                    
                    <div onClick={Question15Click} className="FAQs-questions">
                        <div className="d-flex justify-content-between">
                            <span>What if my open enrollment period is over?</span>
                            <img src={Question15 ? "Icons/minus.svg" : "Icons/plus.svg"} alt="" />
                        </div>
                        <div className={Question15 ? "d-block" : "d-none"}>
                            <p className='text-left'>You can still apply for a Medicare Supplement insurance plan after your Medicare Supplement Open Enrollment Period has expired. However, your application may be subject to medical underwriting (i.e., a review of your medical history and current health) unless you qualify under guaranteed issue rights.</p>
                            <p className='text-left'>You also may have the right to buy a Medicare Supplement policy outside of your Medicare Supplement Open Enrollment Period if you lose certain types of health coverage. In general, this right is for 63 days from the date coverage ends or from the date you receive notice that your coverage will end. Colorado residents receive a guaranteed right to purchase a Medicare Supplement insurance plan for six months if their current coverage is involuntarily terminated and 63 days if terminated voluntarily. You must provide proof of the loss of your previous coverage. Otherwise, applying after your guaranteed issue period has expired may subject your application to medical underwriting which will help determine if your application will be accepted. More details can be found at Medicare Supplement Enrollment and Eligibility.</p>
                        </div>
                    </div>
                    
                    <div onClick={Question16Click} className="FAQs-questions">
                        <div className="d-flex justify-content-between">
                            <span>What is a Medicare Prescription Drug (Part D) plan?</span>
                            <img src={Question16 ? "Icons/minus.svg" : "Icons/plus.svg"} alt="" />
                        </div>
                        <div className={Question16 ? "d-block" : "d-none"}>
                            <p className='text-left'>Medicare prescription drug coverage is insurance that covers both brand-name and generic prescription drugs at participating pharmacies in your area.</p>
                        </div>
                    </div>
                    
                    <div onClick={Question17Click} className="FAQs-questions">
                        <div className="d-flex justify-content-between">
                            <span>What is a Medicare late enrollment penalty (LEP)?</span>
                            <img src={Question17 ? "Icons/minus.svg" : "Icons/plus.svg"} alt="" />
                        </div>
                        <div className={Question17 ? "d-block" : "d-none"}>
                            <p className='text-left'>A late enrollment penalty (LEP) is a monthly premium penalty calculated and assessed by the Centers for Medicare & Medicaid Services (CMS).</p>
                            <p className='text-left'>If you do not enroll in a Medicare prescription drug plan (PDP) by the end of your Medicare Initial Enrollment Period (IEP) for Part D and do not have creditable prescription drug coverage for any continuous period 63 days or longer, you may have to pay an LEP.</p>
                            <p className='text-left'>You may choose to continue your drug coverage in another plan and not enroll in a Medicare Part D plan without an LEP if the other coverage is at least as good as the Medicare drug benefit.</p>
                        </div>
                    </div>
                    
                    <div onClick={Question18Click} className="FAQs-questions">
                        <div className="d-flex justify-content-between">
                            <span>How can I avoid a Medicare late enrollment penalty (LEP)?</span>
                            <img src={Question18 ? "Icons/minus.svg" : "Icons/plus.svg"} alt="" />
                        </div>
                        <div className={Question18 ? "d-block" : "d-none"}>
                            <p className='text-left'>You can avoid a late enrollment penalty (LEP) by:</p>
                            <ul style={{display: "grid"}}>
                                <span className='text-left'>Enrolling in a Medicare prescription drug plan (PDP) before the end of your Medicare Initial Enrollment Period (IEP) for Part D</span>
                                <span className='text-left'>Continuing your drug coverage in another plan with coverage that is at least as good as the Medicare drug benefit</span>
                            </ul>

                            <p className='text-left'>Other LEP exceptions may include:</p>
                            <ul style={{display: "grid"}}>
                                <span className='text-left'>Members with a low income subsidy (LIS)</span>
                                <span className='text-left'>Members affected by Hurricane Katrina</span>
                                <span className='text-left'> Members receiving assistance from a state pharmaceutical assistance program (SPAP)</span>
                            </ul>
                        </div>
                    </div>
                    
                    <div onClick={Question19Click} className="FAQs-questions">
                        <div className="d-flex justify-content-between">
                            <span>What is a formulary?</span>
                            <img src={Question19 ? "Icons/minus.svg" : "Icons/plus.svg"} alt="" />
                        </div>
                        <div className={Question19 ? "d-block" : "d-none"}>
                            <p className='text-left'>A formulary is a list of prescription medications approved for coverage by a health plan.</p>
                        </div>
                    </div>
                    
                    <div onClick={Question20Click} className="FAQs-questions">
                        <div className="d-flex justify-content-between">
                            <span>Is there really such a thing as a zero-premium plan? How does that work?</span>
                            <img src={Question20 ? "Icons/minus.svg" : "Icons/plus.svg"} alt="" />
                        </div>
                        <div className={Question20 ? "d-block" : "d-none"}>
                            <p className='text-left'>Yes. The government pays the health plan to administer Medicare Advantage plans. In some areas, the amount we receive from the government covers the entire plan premium – so it's possible to get all-in-one medical and prescription drug coverage for less than drug coverage alone. If you enroll in a zero-premium plan, you're still responsible for out-of-pocket costs like doctor's office copayments, as well as your Medicare Part B premium.</p>
                        </div>
                    </div>
                    
                    <div onClick={Question21Click} className="FAQs-questions">
                        <div className="d-flex justify-content-between">
                            <span>What is creditable coverage?</span>
                            <img src={Question21 ? "Icons/minus.svg" : "Icons/plus.svg"} alt="" />
                        </div>
                        <div className={Question21 ? "d-block" : "d-none"}>
                            <p className='text-left'>Creditable coverage is prescription drug coverage that is at least as good as the Medicare drug benefit.</p>
                            <p className='text-left'>Prescription drug coverage is insurance. Prescription drug coverage is not drug samples, discount cards, free clinics or drug discount websites. A Health Insurance Portability & Accountability Act (HIPAA) Portability Creditable Coverage statement is not proof that prescription drug coverage is as good as Medicare’s drug benefit.</p>
                        </div>
                    </div>
                    
                    <div onClick={Question22Click} className="FAQs-questions">
                        <div className="d-flex justify-content-between">
                            <span className='text-left'>I have coverage through Veterans Affairs (VA). Will my prescriptions continue to becovered?</span>
                            <img src={Question22 ? "Icons/minus.svg" : "Icons/plus.svg"} alt="" />
                        </div>
                        <div className={Question22 ? "d-block" : "d-none"}>
                            <p className='text-left'>As long as you still qualify for TRICARE, Veterans Affairs (VA), or the Federal Employee Health Benefits (FEHB) Program, your drug coverage did not change with the introduction of the Medicare Part D plan. Contact your benefits administrator or your FEHB insurer before making any changes to your coverage. It will almost always be to your advantage to keep your current coverage without any changes.</p>
                            <p className='text-left'>If you lose your TRICARE, VA, or FEHB coverage and join a Medicare Part D plan, in most cases you won't have to pay a penalty as long as you join within 63 days of losing benefits.</p>
                        </div>
                    </div>
                    
                    <div onClick={Question23Click} className="FAQs-questions">
                        <div className="d-flex justify-content-between">
                            <span>Are generic drugs as safe and strong as brand-name drugs?</span>
                            <img src={Question23 ? "Icons/minus.svg" : "Icons/plus.svg"} alt="" />
                        </div>
                        <div className={Question23 ? "d-block" : "d-none"}>
                            <p className='text-left'>Yes. The U.S. Food and Drug Administration (FDA) requires that all drugs be safe and effective. Generics use the same active ingredients and are shown to work the same way to cure, treat, or prevent your illness or health condition. So they have the same quality, strength, and purity as their brand-name counterparts.</p>
                            <p className='text-left'>Source: FDA</p>
                        </div>
                    </div>
                    
                    <div onClick={Question24Click} className="FAQs-questions">
                        <div className="d-flex justify-content-between">
                            <span>If I’m still working, should I still sign up for Medicare Part A and B?</span>
                            <img src={Question24 ? "Icons/minus.svg" : "Icons/plus.svg"} alt="" />
                        </div>
                        <div className={Question24 ? "d-block" : "d-none"}>
                            <p className='text-left'>You should definitely sign up for Medicare Part A, the part of Medicare that covers inpatient hospital costs. In fact, Part A may even cover some costs that aren’t covered by your group plan. But you don’t need to sign up for Part B, which is the part that covers doctor visits, outpatient care, and other medical services. Those benefits are probably already covered by your group plan. After you stop working, you’ll be able sign up for Part B. If you work for a small company (fewer than 20 people), you may want to talk to your human resources manager about what you need to do.</p>
                            <p className='text-left'>Source: Medicare.gov</p>
                        </div>
                    </div>
                    
                    <div onClick={Question25Click} className="FAQs-questions">
                        <div className="d-flex justify-content-between">
                            <span>What are the enrollment periods for Medicare Advantage and Prescription Drug plans?</span>
                            <img src={Question25 ? "Icons/minus.svg" : "Icons/plus.svg"} alt="" />
                        </div>
                        <div className={Question25 ? "d-block" : "d-none"}>
                            <p className='text-left'>You can sign up for a Medicare Advantage or Prescription Drug plans during your initial enrollment period, which is the seven-month period that starts three months before you turn 65. You can also switch from your Original Medicare plan to a Medicare Advantage or Prescription Drug plan during open enrollment, which is October 15 to December 7 every year. You can also sign up for these plans during special circumstances — if you move from one state to another or you lose coverage through another insurance company.</p>
                            <p className='text-left'>Source: Medicare.gov</p>
                        </div>
                    </div>
                    
                    <div onClick={Question26Click} className="FAQs-questions">
                        <div className="d-flex justify-content-between">
                            <span>What is the Special Enrollment Period?</span>
                            <img src={Question26 ? "Icons/minus.svg" : "Icons/plus.svg"} alt="" />
                        </div>
                        <div className={Question26 ? "d-block" : "d-none"}>
                            <p className='text-left'>Didn’t sign up for Medicare when you first became eligible? Then you may qualify for the Special Enrollment Period if you lost your job or your group health coverage — or your spouse did. If that’s the case, then you have eight months after your group coverage ends to sign up for both parts A and B.</p>
                            <p className='text-left'>Source: Medicare.gov</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default FAQs
