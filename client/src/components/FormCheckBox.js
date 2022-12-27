import React from 'react'

const FormCheckBox = ({ name, value, labelText, handleChange }) => {
    return (
        <div className='form-checkbox'>
            <input className='box' type="checkbox" name={name} value={value} onChange={handleChange} />
            <label htmlFor={name}>{labelText || name}</label>
        </div>
    )
}

export default FormCheckBox