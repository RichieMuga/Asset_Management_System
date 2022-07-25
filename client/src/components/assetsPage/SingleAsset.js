import React from 'react'
import Wrapper from '../../assets/Wrappers/assetsPage/SingleAsset'
import { FiMoreVertical } from "react-icons/fi";
import { VscCalendar } from "react-icons/vsc";
import { HiTag } from "react-icons/hi"
import { FaCalendarAlt } from "react-icons/fa"
// FiMoreVertical
// HiOutlineTag

const SingleAsset = () => {
    return (
        <Wrapper>
            <div className="card">
                <div className="container">
                    <FiMoreVertical className='more-info' size={27} />
                    <h4 className='assetName'>Lenovo s145</h4>
                    <h4>Type:</h4>
                    <h4>Condition:</h4>
                    <h4>Tag No. :<HiTag size={25} className="icons" /> </h4>
                    <h4>Created: <FaCalendarAlt size={25} className="icons" /> </h4>
                </div>
            </div>
        </Wrapper>
    )
}

export default SingleAsset