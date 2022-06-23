import { useState, useEffect } from 'react'
import Wrapper from '../assets/Wrappers/RegisterAndLogin'
import { useSelector, useDispatch } from 'react-redux';
import { displayDanger, clearAlert } from '../redux-toolkit/features.js/Alert';
import { getRegisteredUser, getLoginUser } from '../redux-toolkit/loginAndregisterSlice'
import FormRow from '../components/FormRow';
import Header from '../components/Header';
import FooterNotComplicated from '../components/FooterNotComplicated';
import Alert from '../components/Alert';
import { useNavigate } from 'react-router-dom'




const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: false,
}

const RegisterAndLogin = () => {
  const [values, setValues] = useState(initialState)
  //get show alert from global store
  const { showAlert } = useSelector((store) => store.alert);
  //get user from global store
  const { user } = useSelector((store) => store.auth);
  //navigate to dashboard component needed
  const navigate = useNavigate()

  // console.log(useSelector((store) => store.alert))
  const dispatch = useDispatch()


  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  // toggle member checks if member is customer is signed up or not
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
    // console.log(setValues({ ...values, isMember: true }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { isMember, name, email, password } = values
    if ((!isMember && !name) || !email || !password) {
      dispatch(displayDanger());
      setTimeout(() => {
        dispatch(clearAlert());
      }, 4000);
      return
    }
    const currentUser = { name, email, password }
    if (isMember) {
      dispatch(getLoginUser(currentUser))
      setTimeout(() => {
        dispatch(clearAlert());
      }, 6000);
    }
    else {
      dispatch(getRegisteredUser(currentUser))
      setTimeout(() => {
        dispatch(clearAlert());
      }, 6000);
    }
  }
  //render on changing user value or when navigate is called upon

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/")
      }, 2000);
    }

  }, [user, navigate])



  return (

    <Wrapper>
      <Header className='width-max' />
      <form className='form'>
        {/* control h3 */}

        <h3 className='blue-heading'>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert />}
        {/* toggle name */}

        {!values.isMember && (
          <FormRow
            type='text' name='name' value={values.name} handleChange={handleChange} />
        )}

        <FormRow type='text' name='email' value={values.email} handleChange={handleChange} />
        <FormRow type='password' name='password' value={values.password} handleChange={handleChange} />

        {/* right after submit btn */}
        <button type='submit' className='btn-purple' onClick={handleSubmit} >submit</button>
        {/* toggle button */}

        <p>
          {values.isMember ? 'Not a member yet?  ' : 'Already a member?  '}

          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? ' Register *' : ' Login *'}
          </button>
        </p>
      </form>
      <FooterNotComplicated />
    </Wrapper >
  )
}

export default RegisterAndLogin