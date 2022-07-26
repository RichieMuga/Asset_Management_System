import React from 'react'
import { onClickNext, onClickPrevious, handleChange, reset, setRefreshTofalse } from '../../redux-toolkit/assets'
import { customAlert, clearAlert } from '../../redux-toolkit/features.js/Alert'
import { toggleAssetSidebar, closeAssetModal } from '../../redux-toolkit/Dashboard'
import { useDispatch, useSelector } from 'react-redux'
import { createAsset } from '../../redux-toolkit/assets'
import Wrapper from '../../assets/Wrappers/CreateAssetsModal'
import { FaTimes } from 'react-icons/fa'
import FormRow from '../FormRow'
import FormRowSelect from '../FormRowSelect'
import FormCheckBox from '../FormCheckBox'
import Stepper from '../../assets/images/Stepper.png';
import Stepper2 from '../../assets/images/Stepper2.png';
import assetTypes from '../../utils/frontEnd/assetTypes'
import conditions from '../../utils/frontEnd/condition'
import Alert from '../Alert'



const CreateAssetsModal = () => {
    const dispatch = useDispatch()
    // import from asset slice
    const { isAssetStepperNext } = useSelector((store => store.assets))
    const {
        asset_Name,
        assetType,
        model,
        tagNum,
        assetSN,
        condition,
        address,
        warranty } = useSelector((store => store.assets))

    // import showAlert
    const { showAlert } = useSelector((store) => store.alert)


    const handleClose = (e) => {
        e.preventDefault()
        // console.log("close");
        dispatch(toggleAssetSidebar())
    }



    const handleNext = (e) => {
        e.preventDefault()
        if (!asset_Name || !assetTypes || !model || !tagNum || !assetSN) {
            // console.log("please enter all values before proceeding!");
            dispatch(customAlert({ type: 'danger', msg: "Please fill in all fields" }))
            setTimeout(() => {
                dispatch(clearAlert())
            }, 2000);
        }
        else {
            dispatch(onClickNext())
        }

    }
    const handlePrevious = (e) => {
        e.preventDefault()
        dispatch(onClickPrevious())
    }

    const handleSave = (e) => {
        e.preventDefault()
        if (!address) {
            dispatch(customAlert({ type: 'danger', msg: "Please fill in all fields" }))
            setTimeout(() => {
                dispatch(clearAlert())
            }, 2000);
        }
        else {
            // console.log('save');
            const currentAsset = {
                asset_Name,
                assetType,
                model,
                tagNum,
                assetSN,
                condition,
                address,
                warranty
            }
            dispatch(setRefreshTofalse())
            dispatch(createAsset(currentAsset))
            // setTimeout(() => {
            //     dispatch(clearAlert())
            // }, 2000);
            setTimeout(() => {
                dispatch(clearAlert())
                dispatch(closeAssetModal())
                dispatch(reset())
            }, 3000);

        }
    }

    const handleInputs = (e) => {
        // dispatch(handleChange({ name: e.target.name, value: e.target.value }))
        const name = e.target.name
        const value = e.target.value
        // console.log(`${name}:${value}`);
        dispatch(handleChange({ name, value }))
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
                        {showAlert && <Alert />}
                        {/* {changeform from current to next step but save current items} */}
                        {!isAssetStepperNext ?
                            <section>
                                <h3 className='green-header'>Asset details</h3>
                                <div className="form-content">
                                    <FormRow type="text" name="asset_Name" labelText='Asset Name' value={asset_Name} handleChange={handleInputs} />
                                    <FormRowSelect type="text" name="assetType" list={assetTypes} labelText='Asset Type' value={assetType} handleChange={handleInputs} />
                                    <FormRow type="text" name="model" labelText='Model' value={model} handleChange={handleInputs} />
                                    <FormRow type="text" name="tagNum" labelText='Tag Number' value={tagNum} handleChange={handleInputs} />
                                    <FormRow type="text" name="assetSN" labelText='Asset SN.' value={assetSN} handleChange={handleInputs} />
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
                                    <FormRowSelect type="text" name="condition" list={conditions} value={condition} labelText='Condition' handleChange={handleInputs} />
                                    <FormRow type="text" name="address" labelText='Address' value={address} handleChange={handleInputs} />
                                    <FormCheckBox labelText="Warranty" name="warranty" value={warranty} handleChange={handleInputs} />
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