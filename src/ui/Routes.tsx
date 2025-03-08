import { useEffect, useState } from 'react';
import useAuthContext from './hooks/use-auth-context';
import { BrowserRouter, Route, Routes as ReactRoutes } from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import NoPage from './pages/NoPage';
import Layout from './pages/Layout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

function Routes() {
  const { user } = useAuthContext();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    setIsAuthenticated(!!user);
  }, [user]);

  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="profile" element={isAuthenticated ? <Profile /> : <Login />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<NoPage />} />
        </Route>
    </ReactRoutes>
  </BrowserRouter>
  );
}

export default Routes;
