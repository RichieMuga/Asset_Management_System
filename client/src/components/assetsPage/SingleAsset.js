import React from 'react'
import Wrapper from '../../assets/Wrappers/assetsPage/SingleAsset'
import { FiMoreVertical } from "react-icons/fi";
import { HiTag } from "react-icons/hi"
import { FaCalendarAlt } from "react-icons/fa"

// FiMoreVertical
// HiOutlineTag

const SingleAsset = ({
    asset_Name,
    assetType,
    tagNum,
    warranty,
    assetSN,
    model,
    address,
    user,
    condition,
    createdAt }) => {
    return (
        <Wrapper>
            <div className="card">
                <div className="container">
                    <FiMoreVertical className='more-info' size={27} />
                    <h4 className='assetName'>{asset_Name}</h4>
                    <h4>Type: {` ${assetType}`}</h4>
                    <h4>Condition: {` ${condition}`}</h4>
                    <h4>Tag No. :<HiTag size={25} className="icons" /> {` ${tagNum}`}</h4>
                    <h4>Created:<FaCalendarAlt size={25} className="icons" /> {` ${createdAt}`} </h4>
                </div>
            </div>
        </Wrapper>
    )
}

export default SingleAsset