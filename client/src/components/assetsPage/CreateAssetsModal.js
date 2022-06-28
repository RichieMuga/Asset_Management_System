import React from 'react'
import { toggleAssetSidebar } from '../../redux-toolkit/Dashboard'
import { useDispatch, useSelector } from 'react-redux'
import Wrapper from '../../assets/Wrappers/CreateAssetsModal'
import { FaTimes } from 'react-icons/fa'
import FormRow from '../FormRow'
import FormRowSelect from '../FormRowSelect'


const CreateAssetsModal = () => {
    const dispatch = useDispatch()

    const handleClose = (e) => {
        e.preventDefault()
        dispatch(toggleAssetSidebar())
    }

    return (
        <Wrapper>
            <div className='modal-content'>
                <button onClick={handleClose} className='close-btn'><FaTimes size={40} /></button>
                <div className='asset-stepper'>
                    <form className="form" >
                        {/* {showAlert && <Alert />} */}
                        <div className="form-center">
                            <FormRow type="text" name="asset_Name" labelText='Asset Name' />
                            {/* <FormRowSelect type="text" name="assetType" labelText='Asset Type' /> */}
                            <FormRow type="text" name="model" labelText='Model' />
                            <FormRow type="text" name="tagNum" labelText='Tag Number' />
                            <FormRow type="text" name="empId" labelText='Employee Id' />
                            <FormRow type="text" name="assetSN" labelText='Asset Serial Number' />
                            <button className='clear-btn'>Previous</button>
                            <button className="btn-purple2">Next</button>
                        </div>
                    </form>
                </div>
            </div>

        </Wrapper>

    )
}

export default CreateAssetsModal