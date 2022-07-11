const FormRowSelect = ({ labelText, name, value, handleChange, list, defaultValue }) => {
    return (
        <div className='form-row'>
            <label htmlFor={name} className='form-label'>
                {labelText || name}
            </label>

            <select
                name={name}
                value={value}
                onChange={handleChange}
                className='form-select'
            // defaultValue={defaultValue}
            >
                {list.map((itemValue, index) => {
                    return (
                        <option key={index} value={itemValue}>
                            {itemValue}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default FormRowSelect