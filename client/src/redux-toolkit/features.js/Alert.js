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
        },
        clearAlertAfterSomeTime: (state) => {
            setTimeout(() => {
                state.showAlert = false
            }, 3000);
        },
        customAlert: (state, action) => {
            state.showAlert = true
            state.alertType = action.payload.type
            state.alertText = action.payload.msg
        }
    },
    extraReducers: (builder) => {
        builder
            //login
            .addCase(getLoginUser.fulfilled, (state, action) => {
                state.showAlert = true
                state.alertType = action.payload.status
                state.alertText = 'Logged in successfully. Redirecting...'
                clearAlertAfterSomeTime();
            }
            )
            .addCase(getLoginUser.rejected, (state, action) => {
                state.alertType = 'danger'
                state.showAlert = true
                state.alertText = action.payload
                clearAlertAfterSomeTime();

            })
            //register
            .addCase(getRegisteredUser.fulfilled, (state, action) => {
                state.showAlert = true
                state.alertType = action.payload.status
                state.alertText = ' Registered successfully. Redirecting...'
                clearAlertAfterSomeTime();

            }
            )
            //update user
            .addCase(getRegisteredUser.rejected, (state, action) => {
                state.alertType = 'danger'
                state.showAlert = true
                state.alertText = action.payload
                clearAlertAfterSomeTime();

            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.showAlert = true
                state.alertType = 'success'
                state.alertText = ' Updated profile successfully...'
                clearAlertAfterSomeTime();

            })
            .addCase(updateUser.rejected, (state, action) => {
                state.alertType = 'danger'
                state.showAlert = true
                state.alertText = action.payload
                clearAlertAfterSomeTime();

            })
    }
})

export const { displayDanger, clearAlert, displayIncorrectEmail, clearAlertAfterSomeTime, customAlert } = alertSlice.actions

export default alertSlice.reducer