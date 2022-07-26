import React from 'react'
import Wrapper from '../../assets/Wrappers/assetsPage/SingleAsset'
import { FiMoreVertical } from "react-icons/fi";
import { HiTag } from "react-icons/hi"
import { FaCalendarAlt } from "react-icons/fa"
import moment from 'moment'
import { BsCircleFill } from "react-icons/bs";

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
    let date = moment(createdAt)
    date = date.format("MMM Do YY");
    let color;
    if (condition === 'Excellent') {
        color = '#39FF14'
    }
    if (condition === 'Poor') {
        color = '#A92022'
    }
    if (condition === 'Bad') {
        color = '#FF160C'
    }
    if (condition === 'Good') {
        color = '#B78C0D'
        // color = 'Green'
    }
    if (condition === 'New') {
        color = '#D9DADB'
    }
    return (
        <Wrapper>
            <div className="card">
                <div className="container">
                    <FiMoreVertical className='more-info' size={27} />
                    <h4 className='assetName'>{asset_Name}</h4>
                    <h4>Type:&nbsp;&nbsp;{`${assetType}`}</h4>
                    <h4>Condition:&nbsp;&nbsp;<BsCircleFill size={12} color={color} className='circle' />&nbsp; {` ${condition}`}</h4>
                    <h4>Tag No. :&nbsp;&nbsp;<HiTag size={25} className="icons" /> &nbsp;{` ${tagNum}`}</h4>
                    <h4>Created:&nbsp;&nbsp;<FaCalendarAlt size={25} className="icons" /> &nbsp;{` ${date}`} </h4>
                </div>
            </div>
        </Wrapper>
    )
}

export default SingleAsset