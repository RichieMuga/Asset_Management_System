import React from 'react'

const FormCheckBox = ({ name, value, labelText }) => {
    return (
        <div className='form-checkbox'>
            <input className='box' type="checkbox" name={name} value={value} />
            <label htmlFor={name}>{labelText || name}</label>
        </div>
    )
}

export default FormCheckBox