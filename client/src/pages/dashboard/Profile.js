import Wrapper from '../../assets/Wrappers/DashboardFormLayout';
import FormRow from '../../components/FormRow';
import { useSelector, useDispatch } from 'react-redux';
import FormRowSelect from '../../components/FormRowSelect';
import roleList from '../../utils/role';
import { useState } from 'react';
import { displayDanger, clearAlert } from '../../redux-toolkit/features.js/Alert';
import { updateUser, logOutUser } from '../../redux-toolkit/loginAndregisterSlice';
import Alert from '../../components/Alert';


const Profile = () => {
    const dispatch = useDispatch()
    // const [name, setName] = useState('')

    const { user } = useSelector((store) => store.auth)
    const { showAlert } = useSelector((store) => store.alert);

    // const { name, email, role } = user


    const [name, setName] = useState(user?.name)
    const [role, setRole] = useState(user?.role)
    const [email, setEmail] = useState(user?.email)

    const handleClear = (e) => {
        e.preventDefault()
        setName('');
        setRole("user");
        setEmail('');
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !role || !email) {
            dispatch(displayDanger())
        }
        // console.log("testing");
        const user = { name, role, email }
        dispatch(updateUser(user))

        setTimeout(() => {
            dispatch(clearAlert());
        }, 3000);
        setTimeout(() => {
            dispatch(logOutUser())
        }, 4000);


    }


    return (
        <div>
            <h1 className='heading-dashboard'>Profile</h1>
            <Wrapper>
                <form className="form" >
                    {showAlert && <Alert />}
                    <div className="form-center">
                        <FormRow type="text" name="name" value={name} labelText='Name' handleChange={(e) => setName(e.target.value)} />
                        <FormRowSelect type="text" name="role" value={role} labelText='Role' list={roleList} handleChange={(e) => setRole(e.target.value)} />
                        <FormRow type="email" name="email" value={email} labelText='Email' handleChange={(e) => setEmail(e.target.value)} />
                        <button className='clear-btn' onClick={handleClear}>clear</button>
                        <button className="btn-purple2" onClick={handleSubmit}>submit</button>

                    </div>
                </form>
            </Wrapper>
        </div>
    )
}

export default Profile