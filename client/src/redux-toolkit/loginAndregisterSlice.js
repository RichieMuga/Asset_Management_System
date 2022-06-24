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

const authenticationSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        logOutUser: (state) => {
            state.user = null
            localStorage.removeItem('user')
            clearAlert()
        }
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
            })
            // login
            .addCase(getLoginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user
                const addUserToLocalStorage = (user) => {
                    localStorage.setItem('user', JSON.stringify(user))
                }
                addUserToLocalStorage(action.payload.user)
            })

    },
})

export const { registerUser, loginUser, getCurrentUser, logOutUser } = authenticationSlice.actions

export default authenticationSlice.reducer



