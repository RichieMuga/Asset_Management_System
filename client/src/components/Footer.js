import React from 'react'
import Wrapper from '../assets/Wrappers/Footercss'
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";


const Footer = () => {
    return (
        <Wrapper>
            <div className="footer">
                <div className="decoration-line"></div>
                <div className="socials">
                    <ul>
                        <li>
                            <BsFacebook size={30} />
                        </li>
                        <li>
                            <BsInstagram size={30} />
                        </li>
                        <li>
                            <BsTwitter size={30} />
                        </li>
                    </ul>
                </div>
                <div className="links">
                    <div className="footer-grid-2">
                        <div className="vertical-line"></div>
                        <div className="footer-grid-2-section-1">
                            <a href="login.html"><h4>Login</h4></a>
                            <a href="Contacts.html"><h4>Contact Us</h4></a>
                            <h4>Tutorial</h4>
                        </div>
                        <div className="vertical-line"></div>
                        <div className="footer-grid-2-section-1">
                            <a href="About.html"><h4>About</h4></a>
                            <h4>Help</h4>
                            <h4>Legal</h4>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>Copyright © 2021 Richie Mugambi Ireri.</p>
                </div>
            </div>
        </Wrapper>
    )
}

export default Footer