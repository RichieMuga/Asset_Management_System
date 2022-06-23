// import { useAppContext } from '../context/appContext'
// import NavLinks from './NavLinks'
// import NavLinks from '../utils/links'

// import Logo from '../components/Logo'
import Wrapper from '../assets/Wrappers/BigSideBarcss'
import { useSelector } from 'react-redux';
import Navlinks from './Navlinks'
import logoDark from '../assets/images/A_M_S(dark).png';


const BigSidebar = () => {
    // const { showSidebar } = useAppContext()

    const { showSidebar } = useSelector((store) => store.dashboard)

    return (
        <Wrapper>
            <div
                className={
                    showSidebar ? 'sidebar-container ' : 'sidebar-container show-sidebar'
                }
            >
                <div className='content'>
                    <header>
                        {/* <Logo /> */}<img src={logoDark} alt='A|M|S' className='logo' />
                    </header>
                    <Navlinks />
                </div>
            </div>
        </Wrapper>
    )
}

export default BigSidebar