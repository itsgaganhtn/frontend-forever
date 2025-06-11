import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../context/userSlice';
import { setTheme } from '../../context/themeSlice';

export const Layout = () => {
  const dispatch = useDispatch();
  const authLoading = useSelector((state) => state.user.authLoading);
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    // Apply theme to document on mount and theme change
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        dispatch(setTheme(e.matches ? 'dark' : 'light'));
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [currentTheme, dispatch]);

  if (authLoading) {
    return (
      <div className="h-screen flex justify-center items-center text-lg
                    bg-gradient-to-br from-cream-white to-warm-gray
                    dark:from-dark-surface dark:to-midnight-blue">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 mx-auto rounded-full border-4 border-pastel-blue/30 
                        dark:border-teal-glow/30 border-t-pastel-blue dark:border-t-teal-glow 
                        animate-spin"></div>
          <p className="text-gray-600 dark:text-gray-300 font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300
                  bg-gradient-to-br from-cream-white via-warm-gray to-pastel-blue/10
                  dark:from-dark-surface dark:via-midnight-blue dark:to-deep-charcoal">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};