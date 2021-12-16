import React from 'react'
import './footer.css'
import logoImg from '../../../assets/logo.svg'

function Footer() {
    return (
        <div className='footer__container section__padding'>
            <div className="footer__header">
                <h1 className="gradient__text">
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                </h1>
            </div>
            <div className="footer__btn">
                <p>Request Early Access</p>
            </div>
            <div className="footer__content">
                <div className="footer__logo">
                    <img src={logoImg} alt="footer-pics" />
                    <p>Crechterwood K12 182 DK Alknjkcb, All Right Reserved</p>
                </div>
                <div className="footer__other">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>contact</p>
                </div>
                <div className="footer__other">
                    <h4>Company</h4>
                    <p>Terms & Condition</p>
                    <p>Privacy Policy</p>
                    <p>contact</p>
                </div>
                <div className="footer__other">
                    <h4>Get In Tounch</h4>
                    <p>Crechterwood K12 182 DK Alknjkcb</p>
                    <p>081-123456</p>
                    <p>info@payme.net</p>
                
                </div>
               
            </div>
            <div className="footer__last__child">
                <p>&copy; 2021 GTP-3. All right reserved. </p>
            </div>
        </div>
    )
}

export default Footer
