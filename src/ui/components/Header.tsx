import { Moon, Sun } from "lucide-react";
import { useState } from 'react';
import AppIcon from '../assets/icons/app-icon.svg?react';
import GithubIcon from '../assets/icons/github.svg?react';
import useAuthContext from "../hooks/use-auth-context";
import Button from './Button';
import useOSThemeDetector from '../hooks/use-os-theme-detector';

const Header = () => {
  const defaultOSTheme = useOSThemeDetector();
  const userTheme = document.documentElement.classList.contains("dark");

  const [isDarkMode, setIsDarkMode] = useState(userTheme || defaultOSTheme);
  const { user: userData } = useAuthContext();

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

      <div className='flex gap-4 items-center'>
        {/* Github repository */}
        <Button color="lilac" as="link" to="https://github.com/robherba/skill-forge" target="_blank">
          <GithubIcon className='w-6'/>
        </Button>

        {/* Dark/Light Mode Toggle */}
        <Button onClick={toggleDarkMode} color="lilac">
          {isDarkMode ? <Sun className="text-black" /> : <Moon className="text-black" />}
        </Button>

        {userData && <img src={userData.picture || 'prueba'} className='w-13 h-13 rounded-lg border-[var(--border)] border-2 shadow-[4px_4px_0px_black]' />}
      </div>
    </header>
  );
};

export default Header;
