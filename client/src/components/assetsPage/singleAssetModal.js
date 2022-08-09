import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { editIsOn, reset, toggleSingleAssetModal, getSingleAsset, deleteAsset } from '../../redux-toolkit/assets'
import { useDispatch, useSelector } from 'react-redux'
import Wrapper from '../../assets/Wrappers/assetsPage/Modal'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import { clearAlert, customAlert } from '../../redux-toolkit/features.js/Alert'
import { closeAssetModal } from '../../redux-toolkit/Dashboard'
import Alert from '../Alert'

const SingleAssetModal = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {
        assetId,
        asset_Name,
        assetType,
        model,
        tagNum,
        assetSN,
        condition,
        address,
        warranty,
        createdAt } = useSelector((store => store.assets))
    const { showAlert } = useSelector((store => store.alert))
    let date = moment(createdAt)
    date = date.format("MMM Do YY");
    const handleClose = (e) => {
        e.preventDefault()
        dispatch(toggleSingleAssetModal())
        dispatch(reset())
        // console.log("object");
    }
    const handleEdit = (e) => {
        e.preventDefault()
        dispatch(getSingleAsset(assetId))
        dispatch(editIsOn())
        navigate('/edit')
    }
    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(customAlert({ type: 'danger', msg: "Asset Deleted!" }))
        setTimeout(() => {
            dispatch(clearAlert())
            dispatch(closeAssetModal())
            dispatch(deleteAsset(assetId))
        }, 3000);
        // dispatch(getAssetId({ assetId }))
        // console.log("hi");
    }
    return (
        <Wrapper>
            <div className='modal-content'>
                <button className='close-btn' onClick={handleClose}><FaTimes size={40} /></button>
                {showAlert && <Alert />}
                <main className='form-content'>
                    <section>
                        Name: <span>{asset_Name}</span>
                    </section>
                    <section>
                        Asset Type: <span>{assetType}</span></section>
                    <section>
                        Tag Number: <span>{tagNum}</span></section>
                    <section>
                        Model: <span>{model}</span>
                    </section>
                    <section>
                        Asset Serial Number: <span>{assetSN}</span>
                    </section>
                    <section>
                        Condition: <span>{condition}</span>
                    </section>
                    <section>
                        Address: <span>{address}</span>
                    </section>
                    <section>Warranty: <span>{warranty ? "valid" : "none"}</span>
                    </section>
                    <section>Created: <span>{date}</span>
                    </section>
                    <button className='grid-start both-btns green-btn' onClick={handleEdit}>Edit</button>
                    <button className='both-btns red-btn' onClick={handleDelete}>Delete</button>
                </main>
            </div>
        </Wrapper>
    )
}

export default SingleAssetModal