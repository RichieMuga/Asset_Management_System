import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isSidebarOpen: false,
    showSidebar: false
}
const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen
            state.showSidebar = !state.showSidebar
        }
    }

})

export const { toggleSidebar } = dashboardSlice.actions

export default dashboardSlice.reducer
