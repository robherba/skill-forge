import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import NoPage from './pages/NoPage';
import Layout from './pages/Layout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

function App() {
  const [isAuthenticated] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="profile" element={isAuthenticated ? <Profile /> : <Login />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
