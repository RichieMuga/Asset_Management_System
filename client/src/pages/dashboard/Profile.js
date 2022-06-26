import Wrapper from '../../assets/Wrappers/DashboardFormLayout';
import FormRow from '../../components/FormRow';
import { useSelector } from 'react-redux';
import FormRowSelect from '../../components/FormRowSelect';
import roleList from '../../utils/role';
import { useState } from 'react';
import { displayDanger } from '../../redux-toolkit/features.js/Alert';


const Profile = () => {
    // const [name, setName] = useState('')

    const { user } = useSelector((store) => store.auth)
    // const { name, email, role } = user


    const { name, setName } = useState(user?.name)
    const { role, setRole } = useState(role)
    const { email, setEmail } = useState(user?.email)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !role || !email) {
            displayDanger()
        }

    }


    return (
        <div>
            <h1>Profile</h1>
            <Wrapper>
                <form className="form" >
                    {/* {showAlert && <Alert />} */}
                    <div className="form-center">
                        <FormRow type="text" name="name" value={name} labelText='Name' handleChange={(e) => setName(e.target.value)} />
                        <FormRowSelect type="text" name="role" value={role} labelText='Role' list={roleList} />
                        <FormRow type="email" name="email" value={email} labelText='Email' handleChange={(e) => setEmail(e.target.value)} />
                        <button className='clear-btn'>clear</button>
                        <button className="btn-purple2">submit</button>

                    </div>
                </form>
            </Wrapper>
        </div>
    )
}

export default Profile