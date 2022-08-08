import Landing from "./pages/Landing";
import Error from "./pages/Error"
import RegisterAndLogin from "./pages/RegisterAndLogin";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Assets, DisposeAsset, SharedLayout, EditAsset, Profile } from './pages/dashboard'
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <SharedLayout />
          </ProtectedRoute>} >
          <Route path="assets" index element={<Assets />}></Route>
          <Route path="edit" element={<EditAsset />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="dispose" element={<DisposeAsset />}></Route>
        </Route>
        <Route path="/register" element={<RegisterAndLogin />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
