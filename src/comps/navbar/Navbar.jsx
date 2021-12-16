import { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css'
const Menu = () => {
    return(
    <>
                    <p><a href="#home">Home</a></p>
                  <p><a href="#gpt">What is GPT3?</a></p>
                  <p><a href="#possibility">Open AI</a></p>
                  <p><a href="#features">Case Studies</a></p>
                  <p><a href="#blog">Library</a></p> 
    </>
    )
}

function Navbar() {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='navbar__container'>
          <div className="navbar__link">
              <div className="navbar__logo">
                  <img src={logo} alt="nav-logo" />
              </div>
              <div className="navbar__links__container">
                  <Menu />
              </div>
          </div>
            <div className="navbar__signin">
                <p>sign in</p>
                <button type='button'>sign up</button>
            </div>
            <div className="navbar__menu__container ">
                {
                    toggle ? <RiCloseLine color='white' size='27px' onClick={() => setToggle(false)}/>
                    : <RiMenu3Line color='white' size='27px' onClick={() => setToggle(true)}/>
                }
                {
                    toggle && (
                        <div className='navbar__toggle__container scale-up-center'>
                            <div className="navbar__toggle__wrapper">
                                <Menu />
                                <div className="navbar__toggle__signin">
                                 <p>sign in</p>
                              <button type='button'>sign up</button>
                            </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar
