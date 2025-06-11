import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { Layout } from './components/layout/Layout';
import { ProtectedRoute } from './components/utils/ProtectedRoute';

import { fetchUser } from './context/userSlice';
import { setTheme } from './context/themeSlice';
import './App.css';
import { HomePage } from './pages/HomePage';
import { ProductsPage as ShopProductsPage } from './pages/ProductsPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { ProfilePage } from './pages/ProfilePage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { OrderConfirmationPage } from './pages/OrderConfirmationPage';
import { BestSellers } from './pages/BestSeller';
import FAQ from './pages/FAQ';

function App() {
  const dispatch = useDispatch();
  const { user, authLoading } = useSelector((state) => state.user);
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  useEffect(() => {
    dispatch(fetchUser());
    
    // Initialize theme on app start
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      dispatch(setTheme(savedTheme));
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      dispatch(setTheme(prefersDark ? 'dark' : 'light'));
    }
  }, [dispatch]);

  useEffect(() => {
    // Apply theme class to document
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [currentTheme]);

  if (authLoading) {
    return (
      <div className="h-screen flex justify-center items-center
                    bg-gradient-to-br from-cream-white to-warm-gray
                    dark:from-dark-surface dark:to-midnight-blue">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full border-4 border-pastel-blue/30 
                        dark:border-teal-glow/30 border-t-pastel-blue dark:border-t-teal-glow 
                        animate-spin"></div>
          <p className="text-gray-600 dark:text-gray-300 font-medium text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  const isLoggedIn = !!user;

  return (
    <div className="transition-colors duration-300">
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={currentTheme}
        toastClassName="backdrop-blur-sm"
      />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          {/* Protected Routes */}
          <Route
            path="products"
            element={
              <ProtectedRoute isAllowed={isLoggedIn}>
                <ShopProductsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="products/:id"
            element={
              <ProtectedRoute isAllowed={isLoggedIn}>
                <ProductDetailsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="bestseller"
            element={
              <ProtectedRoute isAllowed={isLoggedIn}>
                <BestSellers />
              </ProtectedRoute>
            }
          />
          <Route
            path="cart"
            element={
              <ProtectedRoute isAllowed={isLoggedIn}>
                <CartPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="checkout"
            element={
              <ProtectedRoute isAllowed={isLoggedIn}>
                <CheckoutPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedRoute isAllowed={isLoggedIn}>
                <ProfilePage />
              </ProtectedRoute>
            }
          />

         <Route path="/order-success/:userId/:orderId" element={<OrderConfirmationPage />} />

          {/* Public Routes */}
          <Route
            path="login"
            element={
              <GoogleOAuthProvider clientId='889165511247-v2r6frdj65fhfabrjh5r71e5ngstmjhl.apps.googleusercontent.com'>
                <LoginPage />
              </GoogleOAuthProvider>
            }
          />
          <Route path="signup" element={<RegisterPage />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;