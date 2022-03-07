import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/shared/logo.svg'
import open from "../assets/shared/icon-hamburger.svg"
import close from '../assets/shared/icon-close.svg'
import { HEADER } from '../utils/tailwindClasses'


export default function Navbar() {

    //handling toggling navbar menu
    const handleToggle = (btnType) => {
        const openBtn = document.getElementById('open')
        const navbar = document.getElementById('main-nav')

        navbar.classList.toggle('translate-x-full')
        navbar.classList.toggle('hidden')

        if(btnType === 'open'){
            openBtn.style.visibility = 'hidden'
            return
        }
        if(btnType === 'close'){
            openBtn.style.visibility = 'visible'
            return
        }
    }
  return (
    <header
        className={HEADER.headerClasses.join(" ")}>
        <Link to="/space-tourism">
            <img 
                className={HEADER.brandClasses.join(' ')}
                src={logo} 
                alt="brand logo">
            </img>
        </Link>
        
        <hr className={HEADER.hrClasses.join(' ')}></hr>

        <nav 
            id="main-nav" 
            className={HEADER.navClasses.join(' ')}
            aria-label="primary-navigation">

            <button 
                id="close" 
                className='mr-[2.4rem] mb-[3rem] tablet:hidden'
                onClick={()=>handleToggle("close")}>
                <img src={close} alt="close nav list"></img>
            </button>

            <ul className={HEADER.navListClasses.join(' ')}>
                <li className={HEADER.navItemClasses.join(' ')}>
                    <Link className={HEADER.navLinkClasses.join('')} to="/space-tourism">
                        <span className={HEADER.navLinkSpan.join(' ')}>00</span> Home
                    </Link>
                </li>

                <li className={HEADER.navItemClasses.join(' ')}>
                    <Link className={HEADER.navLinkClasses.join('')} to="/space-tourism/destination">
                        <span className={HEADER.navLinkSpan.join(' ')}>01</span> Destination
                    </Link>
                </li>

                <li className={HEADER.navItemClasses.join(' ')}>
                    <Link className={HEADER.navLinkClasses.join('')} to="/space-tourism/crew">
                        <span className={HEADER.navLinkSpan.join(' ')}>02</span> Crew
                    </Link>
                </li>

                <li className={HEADER.navItemClasses.join(' ')}>
                    <Link className={HEADER.navLinkClasses.join('')} to="/space-tourism/technology">
                        <span className={HEADER.navLinkSpan.join(' ')}>03</span> Technology
                    </Link>
                </li>
            </ul>
        </nav>

        <button 
            id="open" 
            className='ml-auto transition-all duration-400 ease-in-out tablet:hidden'
            onClick={()=>handleToggle("open")}>
            <img src={open} alt="open nav list"></img>
        </button>
    </header>
  )
}

