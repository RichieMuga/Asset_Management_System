import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { logOutUser } from "./loginAndregisterSlice";
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
    warranty: false,

    // get all jobs setup
    assets: [],
    totalAssets: 0,
    numOfPages: 1,
    page: 1
}
// create asset request
export const createAsset = createAsyncThunk('/api/v1/assets', async (currentAsset, thunkAPI) => {
    try {
        const res = await axios.post('/api/v1/assets', currentAsset)
        // console.log(res.data);
        return res.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data.msg)
    }
})
// get all Assets

export const getAssets = createAsyncThunk('/api/v1/assets', async (thunkAPI) => {
    try {
        const res = await axios.get('/api/v1/assets')
        console.log(res.data);
        return res.data
    } catch (error) {
        logOutUser()
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
    extraReducers:
        (builder) => {
            builder
                .addCase(getAssets.fulfilled, (state, action) => {
                    // console.log(action);
                    state.assets = action.payload.assetResult
                    state.totalAssets = action.payload.count
                    console.log(state.assets);
                })
        }

})

export const { toggleAssetSidebar, onClickNext, onClickPrevious, handleChange, reset } = assetsSlice.actions

export default assetsSlice.reducer