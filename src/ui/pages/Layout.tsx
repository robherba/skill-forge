import { Outlet } from "react-router-dom";
import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar';

const Layout = () => {
  return (
    <div className="flex bg-[var(--bg)] text-[var(--text)]">
      <LeftSidebar />
      <main className="flex flex-col flex-1">
        <Header />
        <div className="flex-1 p-6 bg-[var(--peach)] dark:bg-[var(--bw)]">
          <Outlet />
        </div>
      </main>
    </div>
  )
};

export default Layout;
