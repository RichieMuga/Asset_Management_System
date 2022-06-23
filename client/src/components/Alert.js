import React from 'react'
import { useSelector } from 'react-redux';
import Wrapper from '../assets/Wrappers/Alertcss';

const Alert = () => {
    const { alertType, alertText } = useSelector((store) => store.alert)
    return (
        <Wrapper>
            <div className={`alert alert-${alertType}`}>{alertText}</div>
        </Wrapper>
    )
}

export default Alert