import React from 'react'
import Wrapper from '../assets/Wrappers/smallSideBarcss'
import { FaTimes } from 'react-icons/fa'
import Navlinks from './Navlinks'
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../redux-toolkit/Dashboard'
// import logo from '../assets/svg/logo.svg'


const SmallSideBar = () => {
    const dispatch = useDispatch()
    const { showSidebar } = useSelector((store) => store.dashboard)

    // const handleToggle = (e) => {
    //     e.preventDefault()
    //     dispatch(toggleSidebar())
    // }
    return (
        <Wrapper>
            <div
                className={
                    showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
                }
            >
                <div className='content'>
                    <button type='button' className='close-btn' onClick={() => dispatch(toggleSidebar())}>
                        <FaTimes />
                    </button>
                    <header>
                        {/* <img src={logo} alt="A|M|S" className='logo' /> */}
                        {/* <Logo />logo */}
                    </header>
                    <Navlinks />
                </div>
            </div>
        </Wrapper>
    )
}

export default SmallSideBar