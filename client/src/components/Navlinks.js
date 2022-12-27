import links from '../utils/links'
import { NavLink } from 'react-router-dom'
// import Logo from './Logo'

const Navlinks = ({ toggleSidebar }) => {
    return (
        <div className='nav-links'>
            {links.map((link) => {
                const { path, icon, id, text } = link
                return (
                    <NavLink key={id} to={path} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                        onClick={toggleSidebar}>
                        <span className='icon'>{icon}</span>
                        {text}
                    </NavLink>
                )
            })}
        </div>
    )
}

export default Navlinks