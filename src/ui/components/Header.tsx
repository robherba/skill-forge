import { useState } from 'react';
import { Moon, Sun } from "lucide-react";
import Button from './Button';
import AppIcon from '../assets/icons/app-icon.svg?react';
import GithubIcon from '../assets/icons/github.svg?react';

const Header = () => {
  const theme = document.documentElement.classList.contains("dark");
  const [isDarkMode, setIsDarkMode] = useState(theme);

  // Function to toggle between dark and light mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <header className="w-full p-4 flex justify-between items-center">
      {/* Branding and app name */}
      <div className="flex flex-1 items-center space-x-4">
        <AppIcon className="w-12 h-12 text-[var(--sky)]" />
        <h1 className="text-xl font-semibold">Skill Forge</h1>
      </div>

      {/* Github repository */}
      <Button color="lilac" className='mr-4' as='link' to="https://github.com/robherba/skill-forge" target="_blank">
        <GithubIcon className='w-6'/>
      </Button>

      {/* Dark/Light Mode Toggle */}
      <Button onClick={toggleDarkMode} color="lilac">
        {isDarkMode ? <Sun className="text-black" /> : <Moon className="text-black" />}
      </Button>
    </header>
  );
};

export default Header;
