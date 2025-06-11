import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

// Unsplash image list
const bannerImages = [
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9ubGluZSUyMHNob3BwaW5nfGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D',
  'https://plus.unsplash.com/premium_photo-1661726457110-c43a88d74567?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3N8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const HeroBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[600px] overflow-hidden rounded-3xl mx-4 my-8
                      shadow-light-hover dark:shadow-dark-hover">
      {/* Background Image Transition */}
      <div className="absolute inset-0 z-0">
        {bannerImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Banner ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
              currentIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
          />
        ))}
        
        {/* Dynamic Overlay */}
        <div className="absolute inset-0 
                      bg-gradient-to-br from-black/40 via-transparent to-black/60
                      dark:from-black/60 dark:via-transparent dark:to-black/80"></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center container mx-auto px-6">
        <div className="max-w-3xl text-white space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-lg">
              <Sparkles className="w-6 h-6 text-amber-glow animate-pulse" />
              <span className="bg-gradient-to-r from-amber-glow to-teal-glow 
                             bg-clip-text text-transparent font-semibold">
                Premium Shopping Experience
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-pastel-blue to-mint-green
                             dark:from-white dark:via-teal-glow dark:to-neon-purple
                             bg-clip-text text-transparent">
                Discover
              </span>
              <br />
              <span className="text-white">Amazing Products</span>
              <br />
              <span className="bg-gradient-to-r from-peach-tone to-soft-coral
                             dark:from-amber-glow dark:to-electric-blue
                             bg-clip-text text-transparent">
                Unbeatable Prices
              </span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
            Browse through top categories and find your next favorite item with our 
            curated collection of premium products.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full
                       bg-gradient-to-r from-pastel-blue to-mint-green
                       dark:from-neon-purple dark:to-teal-glow
                       text-white font-semibold text-lg
                       hover:shadow-light-hover dark:hover:shadow-dark-hover
                       hover:scale-105 transition-all duration-300"
            >
              Shop Now 
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              to="/bestseller"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full
                       bg-white/20 backdrop-blur-sm border border-white/30
                       text-white font-semibold text-lg
                       hover:bg-white/30 hover:scale-105 
                       transition-all duration-300"
            >
              View Bestsellers
            </Link>
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex gap-2">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;