import React from 'react'
import Wrapper from '../../assets/Wrappers/DashboardFormLayout';
import FormRow from '../../components/FormRow';
import { useState } from 'react';


const Profile = () => {
    const [name, setName] = useState('')
    return (
        <div>
            <h1>Profile</h1>
            <Wrapper>
                <form className="form" >
                    {/* {showAlert && <Alert />} */}
                    <div className="form-center">
                        <FormRow type="text" name="name" value={name} labelText='Name' />
                        <FormRow type="text" name="name" value={name} labelText='Role' />
                        <FormRow type="email" name="name" value={name} labelText='Email' />
                        <button className='clear-btn'>clear</button>
                        <button className="btn-purple2">submit</button>

                    </div>
                </form>
            </Wrapper>
        </div>
    )
}

export default Profile