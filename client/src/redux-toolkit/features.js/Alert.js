import { createSlice } from "@reduxjs/toolkit";
import { getRegisteredUser, getLoginUser, updateUser } from '../loginAndregisterSlice'
const initialState = {
    showAlert: false,
    alertText: '',
    alertType: '',
}
const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        displayDanger: (state) => {
            state.showAlert = !state.showAlert
            state.alertText = 'please enter appropriate values!'
            state.alertType = 'danger'
        },
        clearAlert: (state) => {
            // setTimeout(() => {
            state.showAlert = false;
            // }, 4000);
        }
    },
    extraReducers: (builder) => {
        builder
            //login
            .addCase(getLoginUser.fulfilled, (state, action) => {
                state.showAlert = true
                state.alertType = action.payload.status
                state.alertText = 'Logged in successfully. Redirecting...'
            }
            )
            .addCase(getLoginUser.rejected, (state, action) => {
                state.alertType = 'danger'
                state.showAlert = true
                state.alertText = action.payload
            })
            //register
            .addCase(getRegisteredUser.fulfilled, (state, action) => {
                state.showAlert = true
                state.alertType = action.payload.status
                state.alertText = ' Registered successfully. Redirecting...'
            }
            )
            //update user
            .addCase(getRegisteredUser.rejected, (state, action) => {
                state.alertType = 'danger'
                state.showAlert = true
                state.alertText = action.payload
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.showAlert = true
                state.alertType = 'success'
                state.alertText = ' Updated profile successfully...'
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.alertType = 'danger'
                state.showAlert = true
                state.alertText = action.payload
            })
    }
})

export const { displayDanger, clearAlert, displayIncorrectEmail } = alertSlice.actions

export default alertSlice.reducer