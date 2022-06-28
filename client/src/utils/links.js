// FaHome
// FaUsers
// FaExchangeAlt
// RiDeleteBin5Fill
// ImProfile
import { FaHome, FaUsers, FaExchangeAlt } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { ImProfile } from "react-icons/im";



const links = [
    {
        id: 1,
        text: 'Assets',
        path: 'assets',
        icon: <FaHome />,
    },
    {
        id: 2,
        text: 'Users',
        path: 'users',
        icon: <FaUsers />,
    },
    {
        id: 3,
        text: 'Transfer',
        path: 'transfer',
        icon: <FaExchangeAlt />
    },
    {
        id: 4,
        text: 'Dispose',
        path: 'dispose',
        icon: <RiDeleteBin5Fill />,
    },
    {
        id: 5,
        text: 'Profile',
        path: 'profile',
        icon: <ImProfile />,
    },
]

export default links