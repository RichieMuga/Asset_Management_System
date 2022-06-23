import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar, BigSideBar, SmallSideBar } from '../../components';
import Wrapper from '../../assets/Wrappers/SharedLayout';
// import { SmallSideBar } from '../../components';


const SharedLayout = () => {
    return (
        <>
            <Wrapper>
                <main className='dashboard'>
                    <SmallSideBar />
                    <BigSideBar />
                    <div>
                        <NavBar />
                        <div className='dashboard-page'>
                            <Outlet />
                        </div>
                    </div>
                </main>
            </Wrapper>
        </>
    )
}

export default SharedLayout