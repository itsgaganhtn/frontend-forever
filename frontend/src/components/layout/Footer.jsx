import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="mt-20 bg-gradient-to-br from-warm-gray to-cream-white 
                     dark:from-dark-surface dark:to-midnight-blue
                     border-t border-pastel-blue/20 dark:border-teal-glow/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* About Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4
                         bg-gradient-to-r from-pastel-blue to-mint-green
                         dark:from-neon-purple dark:to-teal-glow
                         bg-clip-text text-transparent">
              About Us
            </h3>
            <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
              Shopstore is your go-to destination for premium shopping. We offer exclusive deals, 
              fast shipping, and top-quality products across all categories.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4
                         bg-gradient-to-r from-mint-green to-peach-tone
                         dark:from-teal-glow dark:to-amber-glow
                         bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  to="/products" 
                  className="text-gray-600 dark:text-gray-300 
                           hover:text-pastel-blue dark:hover:text-teal-glow
                           transition-colors duration-300"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link 
                  to="/cart" 
                  className="text-gray-600 dark:text-gray-300 
                           hover:text-pastel-blue dark:hover:text-teal-glow
                           transition-colors duration-300"
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link 
                  to="/profile" 
                  className="text-gray-600 dark:text-gray-300 
                           hover:text-pastel-blue dark:hover:text-teal-glow
                           transition-colors duration-300"
                >
                  My Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4
                         bg-gradient-to-r from-peach-tone to-subtle-lavender
                         dark:from-amber-glow dark:to-neon-purple
                         bg-clip-text text-transparent">
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  to="/faq" 
                  className="text-gray-600 dark:text-gray-300 
                           hover:text-pastel-blue dark:hover:text-teal-glow
                           transition-colors duration-300"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4
                         bg-gradient-to-r from-subtle-lavender to-soft-coral
                         dark:from-neon-purple dark:to-electric-blue
                         bg-clip-text text-transparent">
              Contact Us
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Email us at:{" "}
              <a 
                href="mailto:support@forevershop.com" 
                className="text-pastel-blue dark:text-teal-glow 
                         hover:text-mint-green dark:hover:text-amber-glow
                         transition-colors duration-300 underline"
              >
                support@forevershop.com
              </a>
            </p>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-pastel-blue/20 dark:border-teal-glow/20 
                      mt-12 pt-6 text-sm text-center">
          <p className="text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} ForEver. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};