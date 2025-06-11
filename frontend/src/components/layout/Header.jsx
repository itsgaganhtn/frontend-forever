import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Lock, LogOut, Menu, X } from "lucide-react";
import { SearchBar } from "../ui/SearchBar";
import { ThemeToggle } from "../ui/ThemeToggle";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../context/userSlice";

export const Header = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  const authLoading = useSelector((state) => state.user.authLoading);
  const totalCount = useSelector((state) => state.cart.totalCount);

  const isAdmin = user?.isAdmin || false;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md transition-all duration-300
                     bg-white/90 dark:bg-dark-surface/90 
                     border-b border-pastel-blue/20 dark:border-teal-glow/20
                     shadow-light-soft dark:shadow-dark-glow">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold transition-all duration-300 hover:scale-105
                   bg-gradient-to-r from-pastel-blue via-mint-green to-peach-tone 
                   dark:from-neon-purple dark:via-teal-glow dark:to-amber-glow
                   bg-clip-text text-transparent hover:animate-pulse"
        >
          🛍️ Shopstore
        </Link>

        {/* Desktop Search */}
        <div className="hidden lg:block flex-1 max-w-2xl mx-8">
          <SearchBar />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-5">
          {user ? (
            <Link 
              to="/products?category=All" 
              className="relative px-4 py-2 rounded-full transition-all duration-300
                       text-gray-700 dark:text-gray-200
                       hover:bg-gradient-to-r hover:from-pastel-blue/20 hover:to-mint-green/20
                       dark:hover:from-neon-purple/20 dark:hover:to-teal-glow/20
                       hover:shadow-light-soft dark:hover:shadow-dark-glow
                       hover:scale-105"
            >
              🧾 Products
            </Link>
          ) : (
            <span
              onClick={() => toast.info("Please login to view products")}
              className="px-4 py-2 rounded-full cursor-not-allowed opacity-50 
                       text-gray-500 dark:text-gray-400"
            >
              🧾 Products
            </span>
          )}

          {user ? (
            <Link 
              to="/cart" 
              className="relative p-3 rounded-full transition-all duration-300
                       hover:bg-gradient-to-r hover:from-soft-coral/20 hover:to-peach-tone/20
                       dark:hover:from-amber-glow/20 dark:hover:to-electric-blue/20
                       hover:shadow-light-soft dark:hover:shadow-dark-glow
                       hover:scale-110 group"
            >
              <ShoppingCart className="w-6 h-6 text-gray-700 dark:text-gray-200 
                                     group-hover:text-pastel-blue dark:group-hover:text-teal-glow
                                     transition-colors duration-300" />
              {totalCount > 0 && (
                <span className="absolute -top-1 -right-1 w-6 h-6 flex items-center justify-center
                               bg-gradient-to-r from-soft-coral to-peach-tone
                               dark:from-neon-purple dark:to-amber-glow
                               text-white text-xs font-bold rounded-full
                               animate-pulse shadow-lg">
                  {totalCount}
                </span>
              )}
            </Link>
          ) : (
            <span
              onClick={() => toast.info("Please login to access your cart")}
              className="relative p-3 rounded-full cursor-not-allowed opacity-50
                       text-gray-500 dark:text-gray-400"
            >
              <ShoppingCart className="w-6 h-6" />
            </span>
          )}

          {isAdmin && (
            <Link
              to="/admin"
              className="flex items-center gap-2 px-4 py-2 rounded-full
                       bg-gradient-to-r from-subtle-lavender to-pastel-blue
                       dark:from-neon-purple dark:to-electric-blue
                       text-white font-medium transition-all duration-300
                       hover:shadow-light-hover dark:hover:shadow-dark-hover
                       hover:scale-105"
            >
              <Lock size={16} />
              🔐 Admin
            </Link>
          )}

          <ThemeToggle />

          {user ? (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-full
                       bg-gradient-to-r from-pastel-blue to-mint-green
                       dark:from-teal-glow dark:to-neon-purple
                       text-white font-medium transition-all duration-300
                       hover:shadow-light-hover dark:hover:shadow-dark-hover
                       hover:scale-105"
            >
              <LogOut size={16} />
              🚪 Logout
            </button>
          ) : (
            <div className="flex gap-3">
              <Link 
                to="/login" 
                className="px-4 py-2 rounded-full font-medium transition-all duration-300
                         bg-gradient-to-r from-pastel-blue to-mint-green
                         dark:from-neon-purple dark:to-teal-glow
                         text-white hover:shadow-light-hover dark:hover:shadow-dark-hover
                         hover:scale-105"
              >
                🔑 Login
              </Link>
              <Link 
                to="/signup" 
                className="px-4 py-2 rounded-full font-medium transition-all duration-300
                         bg-gradient-to-r from-peach-tone to-soft-coral
                         dark:from-amber-glow dark:to-electric-blue
                         text-white hover:shadow-light-hover dark:hover:shadow-dark-hover
                         hover:scale-105"
              >
                ✍️ Sign Up
              </Link>
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="p-2 rounded-full transition-all duration-300
                     text-gray-600 dark:text-gray-300
                     hover:bg-pastel-blue/20 dark:hover:bg-teal-glow/20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden backdrop-blur-md
                      bg-white/95 dark:bg-dark-surface/95
                      border-t border-pastel-blue/20 dark:border-teal-glow/20
                      shadow-light-soft dark:shadow-dark-glow
                      px-6 pb-6 space-y-4">
          <SearchBar />
          
          {user ? (
            <Link 
              to="/products" 
              className="block p-3 rounded-lg transition-all duration-300
                       text-gray-700 dark:text-gray-200
                       hover:bg-gradient-to-r hover:from-pastel-blue/10 hover:to-mint-green/10
                       dark:hover:from-neon-purple/10 dark:hover:to-teal-glow/10"
            >
              🧾 Products
            </Link>
          ) : (
            <span
              onClick={() => toast.info("Please login to view products")}
              className="block p-3 rounded-lg text-gray-400 cursor-not-allowed"
            >
              🧾 Products
            </span>
          )}

          {user ? (
            <Link 
              to="/cart" 
              className="block p-3 rounded-lg transition-all duration-300
                       text-gray-700 dark:text-gray-200
                       hover:bg-gradient-to-r hover:from-soft-coral/10 hover:to-peach-tone/10
                       dark:hover:from-amber-glow/10 dark:hover:to-electric-blue/10"
            >
              🛒 Cart ({totalCount})
            </Link>
          ) : (
            <span
              onClick={() => toast.info("Please login to access your cart")}
              className="block p-3 rounded-lg text-gray-400 cursor-not-allowed"
            >
              🛒 Cart
            </span>
          )}

          {isAdmin && (
            <Link 
              to="/admin" 
              className="block p-3 rounded-lg transition-all duration-300
                       text-gray-700 dark:text-gray-200
                       hover:bg-gradient-to-r hover:from-subtle-lavender/10 hover:to-pastel-blue/10
                       dark:hover:from-neon-purple/10 dark:hover:to-electric-blue/10"
            >
              🔐 Dashboard
            </Link>
          )}

          {user ? (
            <button
              onClick={handleLogout}
              className="block w-full text-left p-3 rounded-lg
                       bg-gradient-to-r from-pastel-blue to-mint-green
                       dark:from-teal-glow dark:to-neon-purple
                       text-white font-medium transition-all duration-300
                       hover:shadow-light-hover dark:hover:shadow-dark-hover"
            >
              🚪 Logout
            </button>
          ) : (
            <div className="space-y-3">
              <Link 
                to="/login" 
                className="block p-3 rounded-lg text-center
                         bg-gradient-to-r from-pastel-blue to-mint-green
                         dark:from-neon-purple dark:to-teal-glow
                         text-white font-medium transition-all duration-300
                         hover:shadow-light-hover dark:hover:shadow-dark-hover"
              >
                🔑 Login
              </Link>
              <Link 
                to="/signup" 
                className="block p-3 rounded-lg text-center
                         bg-gradient-to-r from-peach-tone to-soft-coral
                         dark:from-amber-glow dark:to-electric-blue
                         text-white font-medium transition-all duration-300
                         hover:shadow-light-hover dark:hover:shadow-dark-hover"
              >
                ✍️ Sign Up
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
};