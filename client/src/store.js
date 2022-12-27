import { configureStore } from '@reduxjs/toolkit'
import authSlice from './redux-toolkit/loginAndregisterSlice'
import alertSlice from './redux-toolkit/features.js/Alert';
import loadingSlice from './redux-toolkit/features.js/Loading';
import dashboard from './redux-toolkit/Dashboard'
import assets from './redux-toolkit/assets';
export const store = configureStore({
    reducer: {
        loading: loadingSlice,
        auth: authSlice,
        alert: alertSlice,
        dashboard: dashboard,
        assets: assets
    }
})