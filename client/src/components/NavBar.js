import React from 'react'
import Wrapper from '../assets/Wrappers/Navbarcss'
// import { useState } from 'react'
import { FaAlignLeft, FaUserAlt } from 'react-icons/fa'
// import logo from '../assets/svg/logo.svg'
// import { useAppContext } from '../context/appContext'
// import { FaUserAlt } from "react-icons/fa";
import { toggleSidebar } from '../redux-toolkit/Dashboard'
import { clearAlert } from '../redux-toolkit/features.js/Alert';
import { logOutUser } from '../redux-toolkit/loginAndregisterSlice'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {
    const dispatch = useDispatch()
    const { user } = useSelector((store) => store.auth);

    const handleToggle = (e) => {
        e.preventDefault()
        dispatch(toggleSidebar())
    }
    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(clearAlert())
        dispatch(logOutUser())
    }
    return (
        <Wrapper>
            <div className='nav-center'>
                <button
                    className='toggle-btn'
                    onClick={handleToggle}
                >
                    <FaAlignLeft />
                </button>

                <div>
                    <h3 className='logo-text'>Dashboard</h3>
                </div>

                <div className='logout-section'>
                    <FaUserAlt size={35} />
                    <section>
                        <h4>{user?.name}</h4>
                        {/* <p>role: user</p> */}
                        <button className='btn-purple2' onClick={handleLogout}> logout</button>
                    </section>
                </div>
            </div>
        </Wrapper>
    )
}

export default Navbar