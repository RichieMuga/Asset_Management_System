import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    // assets in modal state
    isAssetStepperNext: false,

    // assets values and name
    asset_Name: '',
    assetType: 'monitor',
    model: '',
    tagNum: '',
    assetSN: '',
    condition: 'Good',
    address: 'Nairobi, Kenya',
    warranty: false
}
// create asset request
export const createAsset = createAsyncThunk('/api/v1/assets', async (currentAsset, thunkAPI) => {
    try {
        const res = await axios.post('/api/v1/assets', currentAsset)
        console.log(res.data);
        return res.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

const assetsSlice = createSlice({
    name: 'assets',
    initialState,
    reducers: {
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
            const { name, value } = action.payload
            // console.log(`${name}:${value}`);
            state[name] = value
            // console.log(state.asset_Name);
            // console.log(action.payload);
        },
        reset: () => initialState,
    },
    // extraReducers:
    //     (builder) => {
    //         builder
    //             .addCase(createAsset.fulfilled, (state, action) => {
    //                 console.log("success");
    //             })
    //     }

})

export const { toggleAssetSidebar, onClickNext, onClickPrevious, handleChange, reset } = assetsSlice.actions

export default assetsSlice.reducer