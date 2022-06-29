import React from 'react'
import { toggleAssetSidebar } from '../../redux-toolkit/Dashboard'
import { useDispatch, useSelector } from 'react-redux'
import Wrapper from '../../assets/Wrappers/CreateAssetsModal'
import { FaTimes } from 'react-icons/fa'
import FormRow from '../FormRow'
import FormRowSelect from '../FormRowSelect'
import Stepper from '../../assets/images/Stepper.png';


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
                    <h1 className='header'>Create Asset</h1>
                    <img src={Stepper} alt="steps" className='stepper-image' />
                    <form className="form" >
                        {/* {showAlert && <Alert />} */}
                        <div className="form-content">
                            <FormRow type="text" name="asset_Name" labelText='Asset Name' />
                            <FormRowSelect type="text" name="assetType" list={['chicken', 'berries']} labelText='Asset Type' />
                            <FormRow type="text" name="model" labelText='Model' />
                            <FormRow type="text" name="tagNum" labelText='Tag Number' />
                            <FormRow type="text" name="empId" labelText='Employee Id' />
                            <FormRow type="text" name="assetSN" labelText='Asset SN.' />

                            <button className='btn-both btn-purple2-alt'>Previous</button>
                            <button className="btn-both btn-purple2">Next</button>
                        </div>
                    </form>
                </div>
            </div>

        </Wrapper>

    )
}

export default CreateAssetsModal