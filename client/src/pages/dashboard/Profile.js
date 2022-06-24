import Wrapper from '../../assets/Wrappers/DashboardFormLayout';
import FormRow from '../../components/FormRow';
import { useSelector } from 'react-redux';


const Profile = () => {
    // const [name, setName] = useState('')

    const { user } = useSelector((store) => store.auth)
    const { name, email, role } = user

    const handleChange = (e) => {
        console.log(e);
    }


    return (
        <div>
            <h1>Profile</h1>
            <Wrapper>
                <form className="form" >
                    {/* {showAlert && <Alert />} */}
                    <div className="form-center">
                        <FormRow type="text" name="name" value={name} labelText='Name' />
                        <FormRow type="text" name="role" value={role} labelText='Role' />
                        <FormRow type="email" name="email" value={email} labelText='Email' />
                        <button className='clear-btn'>clear</button>
                        <button className="btn-purple2">submit</button>

                    </div>
                </form>
            </Wrapper>
        </div>
    )
}

export default Profile