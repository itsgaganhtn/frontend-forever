import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Shield, Truck } from 'lucide-react';
import { ProductCard } from '../components/ui/ProductCard';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeroBanner from '../components/ui/HeroBanner';
import OurPolicy from '../components/OurPolicy';
import { fetchBestsellers } from '../context/productSlice';

export const HomePage = () => {
  const dispatch = useDispatch();
  const bestsellers = useSelector((state) => state.product.bestsellers);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchBestsellers());
  }, [dispatch]);

  useEffect(() => {
    setFeaturedProducts(bestsellers.slice(0, 4));
  }, [bestsellers]);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Delivery",
      description: "Get your orders delivered in record time with our express shipping.",
      gradient: "from-pastel-blue to-mint-green dark:from-neon-purple dark:to-teal-glow"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Shopping",
      description: "Shop with confidence using our advanced security measures.",
      gradient: "from-mint-green to-peach-tone dark:from-teal-glow dark:to-amber-glow"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Curated products that meet our highest quality standards.",
      gradient: "from-peach-tone to-subtle-lavender dark:from-amber-glow dark:to-neon-purple"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Free Returns",
      description: "Easy returns within 30 days, no questions asked.",
      gradient: "from-subtle-lavender to-soft-coral dark:from-neon-purple dark:to-electric-blue"
    }
  ];

  return (
    <div className="space-y-20 py-8">
      {/* Hero Section */}
      <HeroBanner />

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4
                       bg-gradient-to-r from-pastel-blue via-mint-green to-peach-tone
                       dark:from-neon-purple dark:via-teal-glow dark:to-amber-glow
                       bg-clip-text text-transparent">
            Why Choose Shopstore?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Experience shopping like never before with our premium features and services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl transition-all duration-500
                       bg-card-light dark:bg-card-dark backdrop-blur-sm
                       border border-pastel-blue/20 dark:border-teal-glow/20
                       hover:shadow-light-hover dark:hover:shadow-dark-hover
                       hover:scale-105 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center
                             bg-gradient-to-r ${feature.gradient}
                             group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Star className="h-8 w-8 text-amber-glow animate-pulse" />
              <h2 className="text-4xl font-bold
                           bg-gradient-to-r from-pastel-blue to-mint-green
                           dark:from-neon-purple dark:to-teal-glow
                           bg-clip-text text-transparent">
                Bestsellers This Week
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Discover what everyone's talking about
            </p>
          </div>
          
          <Link
            to="/bestseller"
            className="group flex items-center gap-2 px-6 py-3 rounded-full
                     bg-gradient-to-r from-peach-tone to-soft-coral
                     dark:from-amber-glow dark:to-electric-blue
                     text-white font-medium transition-all duration-300
                     hover:shadow-light-hover dark:hover:shadow-dark-hover
                     hover:scale-105"
          >
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4
                       bg-gradient-to-r from-mint-green via-peach-tone to-subtle-lavender
                       dark:from-teal-glow dark:via-amber-glow dark:to-neon-purple
                       bg-clip-text text-transparent">
            Shop by Category
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Explore our diverse range of premium categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              category: "Electronics",
              image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
              emoji: "📱",
              gradient: "from-pastel-blue to-mint-green dark:from-neon-purple dark:to-teal-glow"
            },
            {
              category: "Fashion",
              image: "https://images.unsplash.com/photo-1521334884684-d80222895322",
              emoji: "👗",
              gradient: "from-mint-green to-peach-tone dark:from-teal-glow dark:to-amber-glow"
            },
            {
              category: "Home & Living",
              image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
              emoji: "🏡",
              gradient: "from-peach-tone to-subtle-lavender dark:from-amber-glow dark:to-neon-purple"
            }
          ].map((item, index) => (
            <Link
              key={index}
              to={`/products?category=${encodeURIComponent(item.category)}`}
              className="group relative h-80 rounded-3xl overflow-hidden shadow-light-soft dark:shadow-dark-glow
                       hover:shadow-light-hover dark:hover:shadow-dark-hover
                       hover:scale-105 transition-all duration-500"
            >
              <img
                src={item.image}
                alt={item.category}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20
                            group-hover:from-black/70 transition-all duration-300"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center text-4xl
                                 bg-gradient-to-r ${item.gradient}
                                 group-hover:scale-110 transition-transform duration-300
                                 shadow-light-soft dark:shadow-dark-glow`}>
                    {item.emoji}
                  </div>
                  
                  <h3 className="text-white text-2xl font-bold group-hover:scale-105 transition-transform duration-300">
                    {item.category}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <OurPolicy />
    </div>
  );
};