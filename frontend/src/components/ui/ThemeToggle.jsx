import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../context/themeSlice';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      onClick={handleToggle}
      className="relative p-2 rounded-full transition-all duration-300 ease-in-out
                 bg-gradient-to-r from-pastel-blue to-mint-green dark:from-neon-purple to-teal-glow
                 hover:scale-110 hover:shadow-lg dark:hover:shadow-neon-purple/30
                 focus:outline-none focus:ring-2 focus:ring-pastel-blue dark:focus:ring-teal-glow"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Sun
          className={`absolute inset-0 w-6 h-6 text-amber-600 transition-all duration-300 ${
            currentTheme === 'light' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-180 scale-0'
          }`}
        />
        <Moon
          className={`absolute inset-0 w-6 h-6 text-teal-glow transition-all duration-300 ${
            currentTheme === 'dark' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-180 scale-0'
          }`}
        />
      </div>
    </button>
  );
};