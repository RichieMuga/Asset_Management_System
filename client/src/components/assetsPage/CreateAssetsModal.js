import React from 'react'
import { toggleAssetSidebar, onClickNext, onClickPrevious } from '../../redux-toolkit/Dashboard'
import { useDispatch, useSelector } from 'react-redux'
import Wrapper from '../../assets/Wrappers/CreateAssetsModal'
import { FaTimes } from 'react-icons/fa'
import FormRow from '../FormRow'
import FormRowSelect from '../FormRowSelect'
import FormCheckBox from '../FormCheckBox'
import Stepper from '../../assets/images/Stepper.png';
import Stepper2 from '../../assets/images/Stepper2.png';
import assetTypes from '../../utils/frontEnd/assetTypes'
import conditions from '../../utils/frontEnd/condition'



const CreateAssetsModal = () => {
    const dispatch = useDispatch()
    const { isAssetStepperNext } = useSelector((store => store.dashboard))

    const {
        asset_Name,
        assetType,
        model,
        tagNum,
        empId,
        assetSN,
        condition,
        address,
        warranty } = useSelector((store => store.dashboard))

    const handleClose = (e) => {
        e.preventDefault()
        dispatch(toggleAssetSidebar())
    }



    const handleNext = (e) => {
        e.preventDefault()

        dispatch(onClickNext())
    }
    const handlePrevious = (e) => {
        e.preventDefault()
        dispatch(onClickPrevious())
    }

    const handleSave = (e) => {
        e.preventDefault()
        console.log('save');
    }

    return (
        <Wrapper>
            <div className='modal-content'>
                <button onClick={handleClose} className='close-btn'><FaTimes size={40} /></button>
                <div className='asset-stepper'>
                    <h1 className='header'>Create Asset</h1>
                    {/* {change stepper from stepper to stepper2} */}
                    {!isAssetStepperNext ? <img src={Stepper} alt="steps" className='stepper-image' /> :
                        <img src={Stepper2} alt="steps" className='stepper-image' />}
                    <form className="form">
                        {/* {showAlert && <Alert />} */}
                        {/* {changeform from current to next step but save current items} */}
                        {!isAssetStepperNext ?
                            <section>
                                <h3 className='green-header'>Asset details</h3>
                                <div className="form-content">
                                    <FormRow type="text" name="asset" labelText='Asset Name' value={asset_Name} />
                                    <FormRowSelect type="text" name="assetType" list={assetTypes} labelText='Asset Type' value={assetType} />
                                    <FormRow type="text" name="model" labelText='Model' value={model} />
                                    <FormRow type="text" name="tagNum" labelText='Tag Number' value={tagNum} />
                                    <FormRow type="text" name="empId" labelText='Employee Id' value={empId} />
                                    <FormRow type="text" name="assetSN" labelText='Asset SN.' value={assetSN} />
                                    <button className='btn-both btn-purple2-alt' onClick={handlePrevious}>Previous</button>
                                    <button className="btn-both btn-purple2" onClick={handleNext}>Next</button>
                                </div>
                            </section>
                            :
                            <section>
                                <h3 className='green-header'> Address,warranty,condition and Save</h3>
                                <div className='form-content2'>
                                    {/* <h3> Address,warranty and Save</h3> */}
                                    {/* <FormRow type="text" name="asset_Name" labelText='Asset Name' /> */}
                                    <FormRowSelect type="text" name="condition" list={conditions} value={condition} labelText='Condition' />
                                    <FormRow type="text" name="address" labelText='Address' value={address} />
                                    <FormCheckBox labelText="Warranty" name="warranty" value={warranty} />
                                    <button className='btn-both btn-purple2-alt' onClick={handlePrevious}>Previous</button>
                                    <button type='submit' className="btn-both btn-purple2" onClick={handleSave}>Save</button>
                                </div>
                            </section>

                        }
                    </form>
                </div>
            </div>

        </Wrapper>

    )
}

export default CreateAssetsModal