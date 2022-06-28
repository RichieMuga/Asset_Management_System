import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isSidebarOpen: false,
    showSidebar: false,
    isAssetModalOpen: false,
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
        }
    }

})

export const { toggleSidebar, toggleAssetSidebar } = dashboardSlice.actions

export default dashboardSlice.reducer
