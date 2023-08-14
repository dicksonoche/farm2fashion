import React from 'react';
import '../index.css';
import Header from './Header.jsx';

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
            </div>
        </>
    )
}

export default Home