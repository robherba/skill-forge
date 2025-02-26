import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthProvider } from './hooks/auth-context-provider';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Login from './pages/Login';
import NoPage from './pages/NoPage';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

function App() {
  const [isAuthenticated] = useState<boolean>(false);

  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default App;
