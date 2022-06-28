import React from 'react'
import { toggleAssetSidebar } from '../../redux-toolkit/Dashboard'
import { useDispatch, useSelector } from 'react-redux'
import Wrapper from '../../assets/Wrappers/CreateAssetsModal'
import { FaTimes } from 'react-icons/fa'


const CreateAssetsModal = () => {
    const dispatch = useDispatch()

    const handleClose = (e) => {
        e.preventDefault()
        dispatch(toggleAssetSidebar())
    }

    return (
        <Wrapper>
            <div className='modal-content'>
                <button onClick={handleClose}><FaTimes size={40} /></button>
                <div>pumpum</div>
            </div>

        </Wrapper>

    )
}

export default CreateAssetsModal