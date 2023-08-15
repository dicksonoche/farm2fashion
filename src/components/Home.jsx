import React from 'react';
import '../index.css';
import Header from './Header.jsx';
import CarryImg from '../images/femCar.png'
import Macbook from '../images/Macbook.png'

const Home = () => {
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
                <div className='section_2'>
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
                    <img src={Macbook} alt="" />
                    <div className='req_segment'>
                        <h3>Say Hello <br /> To Tracebale</h3>
                        <p>CottonConnect offers a unique and <br /> customizable platform - TraceBale, designed <br />
                            specifically for the textile industry.
                        </p>
                        <button>Request a Demo</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home