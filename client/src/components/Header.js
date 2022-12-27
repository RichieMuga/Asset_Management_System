import React from 'react'
import logo from '../assets/svg/logo.svg'
import headers from '../utils/header'
import { HiClipboardCopy } from "react-icons/hi";
import Wrapper from "../assets/Wrappers/Headercss"
import { useState, useRef } from 'react';



const Header = () => {
    const buttonRef = useRef(null)
    const [copy, setcopy] = useState(false)
    const copyClipbaord = (e) => {
        e.preventDefault()
        const emailString = ['amskenya254@gmail.com']
        setcopy(true)
        if (copy) {
            navigator.clipboard.writeText(emailString)
        }
        setTimeout(() => {
            setcopy(false)
        }, 1000);
    }
    return (
        <Wrapper>
            <header>
                <img src={logo} alt="A|M|S" />
                <nav>
                    <ul className='nav_links'>
                        {headers.map((headerItem) => {
                            const { id, navItem, link } = headerItem
                            return (
                                <li key={id} >
                                    <a href={link}> {navItem} </a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <button id="button-copy" ref={buttonRef} className={`${copy ? "button-copy" : ""}`} onClick={copyClipbaord}>
                    <span className="email-svg"><HiClipboardCopy size={28} /></span>
                    <span className="email-big-screen">amskenya254@gmail.com</span>
                </button>
            </header>
        </Wrapper>
    )
}

export default Header