import { Outlet } from "react-router-dom";
import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar';

const Layout = () => {
  return (
    <div className="flex max-h-screen bg-[var(--bg)] text-[var(--text)]">
      <LeftSidebar />
      <main className="flex flex-col flex-1">
        <Header />
        <div className="flex-1 p-6 pb-4 bg-[var(--peach)] dark:bg-[var(--bw)] overflow-y-auto">
          <div className='mb-4'>
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  )
};

export default Layout;
