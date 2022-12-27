import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    // assets modal
    isSidebarOpen: false,
    showSidebar: false,
    isAssetModalOpen: false,
    isAssetStepperNext: false,
}

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
        closeAssetModal: (state) => {
            state.isAssetModalOpen = false
        }
    }

})

export const { toggleSidebar, toggleAssetSidebar, closeAssetModal } = dashboardSlice.actions

export default dashboardSlice.reducer
