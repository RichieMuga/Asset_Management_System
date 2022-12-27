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
    createdAt: '',

    // get all jobs setup
    assets: [],
    totalAssets: 0,
    numOfPages: 1,
    page: 1,
    // trigger-refresh
    refresh: false,
    // toggle single page modal
    singlePageModal: false,
    // get assetId
    assetId: '',
    // is editing on?
    isEdit: false,
    // search
    search: "",
    sort: "latest"

}
// create asset request
export const createAsset = createAsyncThunk('/api/v1/assets/createAsset', async (currentAsset, thunkAPI) => {
    try {
        const res = await axios.post('/api/v1/assets', currentAsset)
        // console.log(res.data);
        return res.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data.msg)
    }
})
// get all Assets

export const getAssets = createAsyncThunk('/api/v1/assets/getAsset', async ({ page, search, sort }, thunkAPI) => {
    let url = ``
    if (search) {
        url = `&search=${search}`
    }
    if (sort) {
        url = url + `&sort=${sort}`
    }

    try {
        const res = await axios.get(`/api/v1/assets?page=${page}${url}`)
        return res.data
    } catch (error) {
        logOutUser()
        thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const getSingleAsset = createAsyncThunk('/api/v1/assets/getSingleAsset', async (assetId, thunkAPI) => {
    try {
        const res = await axios.get(`/api/v1/assets/${assetId}`)
        // console.log(res.data);
        return res.data.asset
    } catch (error) {
        logOutUser()
        thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const editAsset = createAsyncThunk('/api/v1/assets/editAsset', async (currentAsset, thunkAPI) => {
    try {
        const res = await axios.patch(`/api/v1/assets/${currentAsset}`)
        // console.log(res.data);
        return res.data
    } catch (error) {
        logOutUser()
        thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const deleteAsset = createAsyncThunk('/api/v1/assets/deleteAsset', async (currentAsset, thunkAPI) => {
    try {
        const res = await axios.delete(`/api/v1/assets/${currentAsset}`)
        // console.log(res.data);
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
        setRefreshTofalse: (state, action) => {
            state.refresh = false
        },
        toggleSingleAssetModal: (state) => {
            state.singlePageModal = !state.singlePageModal
        },
        getAssetId: (state, action) => {
            // state.assetId = action.payload.assetId
            const assetFind = state.assets.find((asset) => asset._id === action.payload.assetId)
            const { asset_Name, assetType, tagNum, warranty, assetSN, model, address, condition, createdAt, _id } = assetFind
            // console.log(address);
            state.asset_Name = asset_Name
            state.assetType = assetType
            state.tagNum = tagNum
            state.warranty = warranty
            state.assetSN = assetSN
            state.model = model
            state.address = address
            state.condition = condition
            state.createdAt = createdAt
            state.assetId = _id
        },
        editIsOn: (state) => {
            state.isEdit = true
        },
        changePage: (state, action) => {
            // console.log(action.payload);
            state.page = action.payload
        }
    },
    extraReducers:
        (builder) => {
            builder
                .addCase(getAssets.fulfilled, (state, action) => {
                    // console.log(action);
                    state.assets = action.payload.assetResult
                    state.totalAssets = action.payload.totalAssets
                    state.refresh = true
                    state.numOfPages = action.payload.numOfPages
                    // console.log(state.assets);
                })
                .addCase(getSingleAsset.fulfilled, (state, action) => {
                    // console.log(action.payload);
                    state.asset_Name = action.payload.asset_Name
                    state.assetType = action.payload.assetType
                    state.tagNum = action.payload.tagNum
                    state.warranty = action.payload.warranty
                    state.assetSN = action.payload.assetSN
                    state.model = action.payload.model
                    state.address = action.payload.address
                    state.condition = action.payload.condition
                    state.createdAt = action.payload.createdAt
                    state.assetId = action.payload._id
                    // console.log(state.assetSN);
                })
        }

})

export const { changePage, editIsOn, toggleAssetSidebar, onClickNext, onClickPrevious, handleChange, reset, setRefreshTofalse, toggleSingleAssetModal, getAssetId, } = assetsSlice.actions

export default assetsSlice.reducer