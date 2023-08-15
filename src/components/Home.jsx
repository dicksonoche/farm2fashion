import React, { useState, useEffect } from "react";
import '../index.css';
import Header from './Header';
import Footer from "./Footer";
import CarryImg from '../images/femCar.png'
import Macbook from '../images/Macbook.png'
import Sew from '../images/Group.png'
import FirstIsolate from '../images/Isolation_1.png'
import SecondIsolate from '../images/Isolation_2.png'
import ThirdIsolate from '../images/Isolation_3.png'
import FourthIsolate from '../images/Isolation_4.png'

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Calculate the position of the section_2 relative to the viewport
            const revealDiv = document.querySelector(".section_2", ".mac_image", "req_segment");
            const revealDivPosition = revealDiv.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // If the top of the section_2 is visible within the viewport
            if (revealDivPosition < windowHeight) {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Header />
            <div className='home'>
                <div className='section_1'>
                    <div className='hero_bg'>
                        <div className='intro_segment'>
                            <h4>Trace It:</h4>
                            <h2>From Farm to Fashion</h2>
                            <p>TraceBale is an innovative traceability platform specifically designed <br />
                                for the fashion and textile industry, leading the way in its field.
                            </p>
                        </div>
                        <button>Request a Demo</button>
                    </div>
                </div>
                <div className={`section_2 ${isVisible ? "show" : ""}`}>
                    <img src={CarryImg} alt="" />
                    <div className='stat_segment'>
                        <div className='stat'>
                            <div className='stat_rect'>
                                <p>Farmer <br /> Registered</p>
                            </div>
                            <h3>9Lacs</h3>
                        </div>
                        <div className='stat'>
                            <div className='stat_rect'>
                                <p>T-Shirt <br /> Mapped</p>
                            </div>
                            <h3>1.4 <br /> BILLION</h3>
                        </div>
                        <div className='stat'>
                            <div className='stat_rect'>
                                <p>Retailers <br /> Onboard</p>
                            </div>
                            <h3>18</h3>
                        </div>
                        <div className='stat'>
                            <div className='stat_rect'>
                                <p>MTS of <br /> Sustainable <br /> Cotton <br /> Processed</p>
                            </div>
                            <h3>12.5Lacs</h3>
                        </div>
                    </div>
                </div>
                <div className='section_3'>
                    <img className={`mac_image ${isVisible ? "show" : ""}`} src={Macbook} alt="" />
                    <div className={`req_segment ${isVisible ? "show" : ""}`}>
                        <h3>Say Hello <br /> To Tracebale</h3>
                        <p>CottonConnect offers a unique and <br /> customizable platform - TraceBale, designed <br />
                            specifically for the textile industry.
                        </p>
                        <button>Request a Demo</button>
                    </div>
                </div>
                <div className='section_4'>
                    <div className='trace'>
                        <div className='origin'>
                            <h4>Trace The Origin</h4>
                        </div>
                        <div className='text'>
                            <p>By incorporating profiles of the processors involved at each stage, TraceBale <br />
                                empowers brands to gain insights into the origins of their products. Retailers can now <br />
                                understand and verify the precise sources of their materials, enhancing transparency <br />
                                and accountability.
                            </p>
                        </div>
                    </div>
                    <div className='trace_able'>
                        <h3>Traceable - One Platform to Navigate <br />
                            The Challenges of The Textile Industry
                        </h3>
                        <p>TraceBale by CottonConnect revolutionizes supply chain management, by providing complete traceability <br />
                            in the supply chain and help brands target sustainability goals and validate claims.
                        </p>
                    </div>
                    <div className='apart'>
                        <div className='sewing'>
                            <img src={Sew} alt="" />
                        </div>
                        <div className='platform'>
                            <div>
                                <img src={FirstIsolate} alt='' />
                                <p><b>Regular data intake</b> at farm/gin level – <br />
                                    <b>real-time availability</b> of seed cotton/lint.
                                </p>
                            </div>
                            <div>
                                <img src={SecondIsolate} alt='' />
                                <p>Every <b>transaction</b> at every stage<br />
                                    <b>recorded</b> - proof of Chain of Custody.
                                </p>
                            </div>
                            <div>
                                <img src={ThirdIsolate} alt='' />
                                <p><b>Process</b> and <b>sale differentiation</b> for all<br />
                                    processors.
                                </p>
                            </div>
                            <div>
                                <img src={FourthIsolate} alt='' />
                                <p>Bale tracking back to farm level – <br />
                                    <b>Unique farmer/bale/yarn IDs.</b>
                                </p>
                            </div>
                            <div>
                                <button>Know your platform in detail</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section_5'>
                    <div className='hero_bg'>
                        <div className='final_segment'>
                            <h3>TraceBale Powered by CottonConnect</h3>
                            <p>CottonConnect help brands access more sustainable cotton and other natural fibres to create <br />
                                transparent, traceable and resilient supply chains that will continue to deliver the best raw materials <br />
                                – now and in the future.
                            </p>
                        </div>
                        <button>Know more about cottonconnect</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;