// FaHome
// FaUsers
// FaExchangeAlt
// RiDeleteBin5Fill
// ImProfile
import { FaHome, FaEdit } from "react-icons/fa";
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
        text: 'Create/Edit asset',
        path: 'edit',
        icon: <FaEdit />
    },
    {
        id: 3,
        text: 'Profile',
        path: 'profile',
        icon: <ImProfile />,
    },
]

export default links