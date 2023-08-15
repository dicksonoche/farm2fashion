import React from 'react'
import '../index.css';
import FooterLogo from "../images/logo_big.png"
import LinkedIn from "../images/linkedin.png"
import Twitter from "../images/twitter.png"
import Rock from "../images/rock.png"
import Paper from "../images/paper.png"
import Scissors from "../images/scissors.png"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <img src={FooterLogo} alt="" />
                <div className='foot_box'>
                    <div className='first'>
                        <p>
                            United Kingdom (Global headquarters) <br />
                            WeWork, New Kings Beam House, <br />
                            22 Upper Ground, London, SE1 9PD <br />
                            T: +44 (0)203 865 7038 <br />
                            E: info@cottonconnect.org

                        </p>
                    </div>
                    <div className='second'>
                        <p>
                            India (India Headoffice) <br />
                            Gurugram <br />
                            T: +44 (0)203 865 7038 <br />
                            E: info@cottonconnect.org
                        </p>
                    </div>
                </div>
                <div className='quicklinks'>
                    <ul className='links_list'>
                        <li>
                            <Link to="#">Platform</Link>
                        </li>
                        <li>
                            <Link to="#">Challenges</Link>
                        </li>
                        <li>
                            <Link to="#">Advantages</Link>
                        </li>
                        <li>
                            <Link to="#">News</Link>
                        </li>
                        <li>
                            <Link to="#">Resources</Link>
                        </li>
                        <li>
                            <Link to="#">Terms & Conditions</Link>
                        </li>
                        <li>
                            <Link to="#">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
                <hr />
                <div className='final_footer'>
                    <p>© 2023 CottonConnect</p>
                    <div className='socials'>
                        <Link to="#"><img src={LinkedIn} alt="" /></Link>
                        <Link to="#"><img src={Twitter} alt="" /></Link>
                    </div>
                    <div className='credits'>
                        <p>Designed by:</p>
                        <div className='rps_footer'>
                            <img src={Rock} alt="" />
                            <img src={Paper} alt="" />
                            <img src={Scissors} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer