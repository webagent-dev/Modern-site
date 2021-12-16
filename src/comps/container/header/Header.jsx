import React from 'react'
import './header.css'
import people from '../../../assets/people.png'
import aiImg from '../../../assets/ai.png'

function Header() {
    return (
        <div className='header__container section__padding' id='home'>
        <div className="header__wrapper">
            <h1 className='gradient__text'>Lorem ipsum dolor sit amet,</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ipsam ratione iste blanditiis iusto cum corporis veritatis repudiandae beatae voluptas.</p>
            <div className="header__content__input">
                <input type="email" placeholder='Your Email Address'/>
                <button type='button'> Get Started</button>
            </div>
            <div className="header__image__container">
                <img src={people} alt="header__prople" />
                <p>1,600, people requested access a visit in last 24 hours</p>
            </div>
        </div>
        <div className="header__ai__image">
                <img src={aiImg} alt="header_ai" />
            </div>
        </div>
    )
}

export default Header
