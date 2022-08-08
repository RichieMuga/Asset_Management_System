import React from 'react'
import Wrapper from '../../assets/Wrappers/DashboardFormLayout'
import FormRow from '../../components/FormRow'
import FormRowSelect from '../../components/FormRowSelect'
import FormCheckBox from '../../components/FormCheckBox'
import { useDispatch, useSelector } from 'react-redux'
import assetTypes from '../../utils/frontEnd/assetTypes'
import conditions from '../../utils/frontEnd/condition'
import { handleChange, reset } from '../../redux-toolkit/assets';
import { customAlert, clearAlert } from '../../redux-toolkit/features.js/Alert'
import Alert from '../../components/Alert'

const EditAsset = () => {
    const {
        asset_Name,
        assetType,
        model,
        tagNum,
        assetSN,
        condition,
        address,
        warranty,
        isEdit
    } = useSelector((store => store.assets))
    // useEffect(() => {
    //     dispatch(getSingleAsset(assetId))
    // }, [])

    const { showAlert } = useSelector((store => store.alert))
    const dispatch = useDispatch()

    const handleInputs = (e) => {
        const name = e.target.name
        const value = e.target.value
        dispatch(handleChange({ name, value }))
    }
    const handleClear = (e) => {
        e.preventDefault()
        dispatch(reset())
    }
    const saveChanges = (e) => {
        e.preventDefault()
        if (!asset_Name || !assetType || !model || !tagNum || !assetSN || !condition || !address) {
            dispatch(customAlert({ type: 'danger', msg: "Please fill in all fields" }))
            setTimeout(() => {
                dispatch(clearAlert())
            }, 2000);
        }

        dispatch(customAlert({ type: "success", msg: "Successfully updated asset!" }))

        setTimeout(() => {
            dispatch(reset())
            dispatch(clearAlert())
        }, 3000);

    }
    // const saveChangesForUpdate = (e) => {
    //     e.preventDefault()
    //     console.log("object");
    // }
    return (
        <div>
            <h1 className='heading-dashboard'>{isEdit ? "Edit Asset" : "Create Asset"}</h1>
            <Wrapper>
                {showAlert && <Alert />}
                <form className="form">
                    <section>
                        <div className="form-center">
                            <FormRow type="text" name="asset_Name" labelText='Asset Name' value={asset_Name} handleChange={handleInputs} />
                            <FormRowSelect type="text" name="assetType" list={assetTypes} labelText='Asset Type' value={assetType} handleChange={handleInputs} />
                            <FormRow type="text" name="model" labelText='Model' value={model} handleChange={handleInputs} />
                            <FormRow type="text" name="tagNum" labelText='Tag Number' value={tagNum} handleChange={handleInputs} />
                            <FormRow type="text" name="assetSN" labelText='Asset SN.' value={assetSN} handleChange={handleInputs} />
                            <FormRowSelect type="text" name="condition" list={conditions} value={condition} labelText='Condition' handleChange={handleInputs} />
                            <FormRow type="text" name="address" labelText='Address' value={address} handleChange={handleInputs} />
                            <FormCheckBox labelText="Warranty" name="warranty" value={warranty} handleChange={handleInputs} />
                            <button className='grid-start clear-btn' onClick={handleClear}>clear</button>
                            <button type='submit' className="btn-both btn-purple2" onClick={saveChanges}>Save</button>
                        </div>
                    </section>
                </form>
            </Wrapper>
        </div>
    )
}

export default EditAsset