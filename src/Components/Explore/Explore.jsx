import React, { useState, useEffect } from "react"
import background from "./background.jpg"
import ItemsCarousel from 'react-items-carousel';
import AOS from 'aos';
import group27 from "../Homepage/Images/Group 2.7.png"
import group26 from "../Homepage/Images/Group 2.6.png"
import "./Explore.css"
import { Link } from "react-router-dom";
import Opensource from "../Fields/Open-source/Opensource"
import Ai from "../Fields/AI/Ai"

const Explore = () => {

    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, []);

    return (
        <div id="explore">
            <div className="welcome-section">
                <span className="stars"></span>
                <span className="stars"></span>
                <span className="stars"></span>
                <span className="stars"></span>
                <span className="stars"></span>
                <span className="stars"></span>
                <span className="stars"></span>
                <span className="stars"></span>
                <img src={background} alt="" id="bgimage" />
                <div className="content">
                    <h2>Welcome to</h2>
                    <h1><Link to="/" style={{ textDecoration: 'none' }}> <span>Guidance/Hub </span></Link>Explore</h1>
                    <p>This is explore section where you will get lot of field.</p>
                </div>
            </div>

            <div className="field-section tool-section" >
                <div className="content" data-aos="fade-right">
                    <h1>Tools</h1>
                    <p>We have provided tools for students to make thier profile and work more Professional. Just Have a look!</p>
                </div>
                <div className="field-container cardcontainermain">

                    <ItemsCarousel
                        requestToChangeActive={setActiveItemIndex}
                        activeItemIndex={activeItemIndex}
                        numberOfCards={3}
                        gutter={15}
                        leftChevron={<button style={{ fontSize: '2rem', padding: '40px 10px', border: 'none', background: 'rgb(40 44 52 / 47%)', marginLeft: '-2px', color: 'white', cursor: 'pointer' }}>{'<'}</button>}
                        rightChevron={<button style={{ fontSize: '2rem', padding: '40px 10px', border: 'none', background: 'rgb(40 44 52 / 47%)', color: 'white', cursor: 'pointer', marginRight: '0' }}>{'>'}</button>}
                        outsideChevron
                        chevronWidth={chevronWidth}
                    >

                        <div className="card">
                            <div className="card-content">
                                <h2 className="card-title">Resume Maker</h2>
                                <p className="card-body">Resume Maker is tool where you can generate your resume for free. It has functionality like dynamic preview, color themes, responsive ,etc.</p>
                                <Link to="/resume_maker" className="button">Learn More</Link>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-content">
                                <h2 className="card-title">Smart PDF</h2>
                                <p className="card-body">Smart Pdf is a Project made using React. You can use this project to create your pdf very easily. It have varios features Just Use it!!!.</p>
                                <Link to="/Smart_pdf" className="button">Learn More</Link>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-content">
                                <h2 className="card-title">Repository Readme.md Generator</h2>
                                <p className="card-body">This is Repository Readme.md Generator Which you can use to create your repostory readme which represent your repo more interesting..</p>
                                <Link to="/markdown_generator" className="button">Learn More</Link>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-content">
                                <h2 className="card-title">Github Profile Readme Generator</h2>
                                <p className="card-body">This is Profile Readme Generator Which you can use to create your github profile readme.It has so many section which will make your profile cooler then ever.</p>
                                <Link to="/github_profile_readme" className="button">Learn More</Link>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-content">
                                <h2 className="card-title">Certificate Generator</h2>
                                <p className="card-body">This is Certificate Generator which you can use to make e-certificate and download as a pdf and then you can distribute the certificates to the students.</p>
                                <Link to="/certificate_generator" className="button">Learn More</Link>
                            </div>
                        </div>
                    </ItemsCarousel>
                </div>
            </div>

            <div className="field-section">
                <div className="content">
                    <h1 data-aos="fade-right">Fields</h1>
                    <p data-aos="fade-right">This section will provide you with Respective Field's Roadmaps,Resources and Many informative Things. Just Check it Out!!</p>
                </div>
                <div style={{ padding: `2rem 1rem`, marginTop: '1rem', }} className="cardcontainermain" >

                    <ItemsCarousel
                        requestToChangeActive={setActiveItemIndex}
                        activeItemIndex={activeItemIndex}
                        numberOfCards={3}
                        gutter={15}
                        leftChevron={<button style={{ fontSize: '2rem', padding: '40px 10px', border: 'none', background: 'rgb(40 44 52 / 47%)', marginLeft: '-2px', color: 'white', cursor: 'pointer' }}>{'<'}</button>}
                        rightChevron={<button style={{ fontSize: '2rem', padding: '40px 10px', border: 'none', background: 'rgb(40 44 52 / 47%)', color: 'white', cursor: 'pointer', marginRight: '0' }}>{'>'}</button>}
                        outsideChevron
                        chevronWidth={chevronWidth}

                    >

                        <div className="card">
                            <div className="card-content">

                                <h2 className="card-title">Open-Source</h2>
                                <p className="card-body">Open-source code is extremely well-adapted to service-oriented architecture. Want to explore more then have a look and deep dive into this endless ocean.</p>
                                <Link to="/Opensource" className="button">Learn More</Link>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-content">

                                <h2 className="card-title">Machine Learning</h2>
                                <p className="card-body">The field of Machine Learning seeks to answer the question ‘How can we build computer systems that automatically improve with experience,.....</p>
                                <Link to="/ml" className="button">Learn More</Link>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-content">

                                <h2 className="card-title">AI</h2>
                                <p className="card-body">Artificial Intelligence (AI) involves using computers to do things that traditionally require human intelligence. This means creating algorithms to classify, analyze, and draw predictions from data.</p>
                                <Link to="/Ai" className="button">Learn More</Link>
                            </div>
                        </div>
                    </ItemsCarousel>
                </div>
            </div>

            <div className="footer" id="explore-footer">
                <img src={group26} alt="" />
                <div>
                    <h1>Guidance/Hub</h1>
                    <h3>Copyright © 2022 — 2023</h3>
                </div>
                <img src={group27} alt="" />
            </div>
        </div>
    )
}
export default Explore;
