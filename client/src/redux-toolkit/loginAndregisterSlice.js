import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { clearAlert } from './features.js/Alert';


const user = localStorage.getItem('user')

const initialState = {
    user: user ? JSON.parse(user) : null,
    isMember: false,
}


export const getRegisteredUser = createAsyncThunk('auth/getRegistrationRes', async (currentUser, thunkAPI) => {
    try {
        const response = await axios.post('/api/v1/auth/register', currentUser)
        return response.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data.msg)
    }
})


export const getLoginUser = createAsyncThunk('auth/getLoginRes', async (currentUser, thunkAPI) => {
    try {
        const response = await axios.post('/api/v1/auth/login', currentUser)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const updateUser = createAsyncThunk('auth/updateUserRes', async (updatedUser, thunkAPI) => {
    try {
        const res = await axios.patch('/api/v1/auth/update', updatedUser)
        // console.log(res.data.findUser);
        return res.data.findUser
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})



const authenticationSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        logOutUser: (state) => {
            state.user = null
            localStorage.removeItem('user')
            // document.cookie = 'cookieYaKwanza;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
            clearAlert()
        },
        //   handleChange: (state,action) => {
        //     [action.payload.name]:action.payload.value
        // }
        // updateUser: (state, action) => {
        //     state.user.name = action.payload.name
        //     state.user.role = action.payload.role
        //     state.user.email = action.payload.email
        // }
    },
    extraReducers: (builder) => {
        builder
            //register user
            .addCase(getRegisteredUser.fulfilled, (state, action) => {
                state.user = action.payload.user
                const addUserToLocalStorage = (user) => {
                    localStorage.setItem('user', JSON.stringify(user))
                }
                addUserToLocalStorage(action.payload.user)
                // const oneDay = 1000 * 60 * 60 * 24
                // const removeAfterCookieExpires=()=>{
                //     localStorage.removeItem()
                // }
                // removeAfterCookieExpires()
            })
            // login
            .addCase(getLoginUser.fulfilled, (state, action) => {
                state.user = action.payload.user
                const addUserToLocalStorage = (user) => {
                    localStorage.setItem('user', JSON.stringify(user))
                }
                addUserToLocalStorage(action.payload.user)
            })
            //updateUser
            .addCase(updateUser.fulfilled, (state, action) => {
                state.user.name = action.payload.name
                state.user.email = action.payload.email
                state.user.role = action.payload.role
            })

    },
})

export const { registerUser, loginUser, logOutUser } = authenticationSlice.actions

export default authenticationSlice.reducer



