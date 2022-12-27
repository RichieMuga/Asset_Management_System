import { createSlice } from "@reduxjs/toolkit";
import { getRegisteredUser, getLoginUser } from '../loginAndregisterSlice'
const initialState = {
    isLoading: false,
}
const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            //register
            .addCase(getRegisteredUser.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(getRegisteredUser.rejected, (state) => {
                state.isLoading = false;
            })

            //login
            .addCase(getLoginUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getLoginUser.rejected, (state) => {
                state.isLoading = false;
            })
    }

})


export default loadingSlice.reducer