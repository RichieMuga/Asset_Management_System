import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    // assets modal
    isSidebarOpen: false,
    showSidebar: false,
    isAssetModalOpen: false,
    isAssetStepperNext: false,

    // assets
    asset_Name: '',
    assetType: '',
    model: '',
    tagNum: '',
    empId: '',
    assetSN: '',
    condition: '',
    address: '',
    warranty: false
}
// create user request
export const createUser = createAsyncThunk('/api/v1/assets', async (assetDetails, thunkAPI) => {
    try {
        const res = await axios.post('/api/v1/assets', assetDetails)
        return res.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data.msg)
    }
})
//function for handling change
// const handleChange=(name,value)=>{
//     [name]:value
// }
const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen
            state.showSidebar = !state.showSidebar
        },
        toggleAssetSidebar: (state) => {
            state.isAssetModalOpen = !state.isAssetModalOpen
        },
        onClickNext: (state) => {
            state.isAssetStepperNext = true
        },
        onClickPrevious: (state) => {
            state.isAssetStepperNext = false
        },
        handleChange: (state, action) => {
            action.payload.name = action.payload.value
        }
    }

})

export const { toggleSidebar, toggleAssetSidebar, onClickNext, onClickPrevious } = dashboardSlice.actions

export default dashboardSlice.reducer
