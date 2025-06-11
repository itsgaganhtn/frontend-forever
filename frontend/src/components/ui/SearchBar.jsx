import React from 'react';
import { Search } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from '../../context/uiSlice';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.ui.search);

  return (
    <div className="relative group">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        className="w-full pl-12 pr-4 py-3 rounded-full transition-all duration-300
                 bg-white/80 dark:bg-dark-elevated/80 backdrop-blur-sm
                 border border-pastel-blue/30 dark:border-teal-glow/30
                 text-gray-700 dark:text-gray-200
                 placeholder-gray-500 dark:placeholder-gray-400
                 focus:outline-none focus:ring-2 focus:ring-pastel-blue/50 dark:focus:ring-teal-glow/50
                 focus:border-transparent focus:bg-white dark:focus:bg-dark-elevated
                 hover:shadow-light-soft dark:hover:shadow-dark-glow
                 focus:shadow-light-hover dark:focus:shadow-dark-hover"
      />
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 
                       text-gray-400 dark:text-gray-500 h-5 w-5
                       group-focus-within:text-pastel-blue dark:group-focus-within:text-teal-glow
                       transition-colors duration-300" />
    </div>
  );
};