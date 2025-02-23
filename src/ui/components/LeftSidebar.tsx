import { useState } from "react";
import { Home, Settings, User, ChevronRight, ChevronLeft } from "lucide-react";
import Button from './Button';

const menuItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: User, label: "Profile", path: "/profile" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

const LeftSidebar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside
      className={`h-screen p-4 bg-main transition-all duration-300 border-r-3 border-[var(--border)] bg-[var(--lilac)] dark:bg-[var(--bw)] relative ${expanded ? "w-60" : "w-22"}`}
    >
      <nav className="flex flex-col gap-4">
        {menuItems.map(({ icon: Icon, label, path }, index: number) => (
          <Button key={index} as='link' to={path} color='light-green'>
            <div className="w-6 h-6 flex-shrink-0">
              <Icon className="w-6 h-6 text-black" />
            </div>
            <span
              className={`overflow-hidden font-bold transition-opacity duration-300 ${expanded ? "opacity-100 w-auto ml-4" : "opacity-0 w-0 ml-0"}`}
            >
              {label}
            </span>
          </Button>
        ))}
      </nav>
      <div>
        <Button
          color='sky'
          className='absolute right--4 bottom-8'
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <ChevronLeft className='text-black' /> : <ChevronRight className='text-black' />}
        </Button>
      </div>
    </aside>
  );
}

export default LeftSidebar;
