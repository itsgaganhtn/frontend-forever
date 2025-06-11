import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Star } from "lucide-react";

export const ProductCard = ({ product }) => {
  const currency = 'Rs.';

  const truncate = (text, maxLength = 80) =>
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return (
    <div className="group relative overflow-hidden rounded-2xl transition-all duration-500
                  bg-card-light dark:bg-card-dark backdrop-blur-sm
                  border border-pastel-blue/20 dark:border-teal-glow/20
                  hover:shadow-light-hover dark:hover:shadow-dark-hover
                  hover:scale-105 hover:-translate-y-2">
      
      {/* Product Image */}
      <Link to={`/products/${product._id}`} className="block relative overflow-hidden">
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image?.[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700
                     group-hover:scale-110"
          />
        </div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </Link>

      {/* Product Info */}
      <div className="p-6 space-y-3">
        {/* Product Name */}
        <Link
          to={`/products/${product._id}`}
          className="block text-lg font-semibold transition-colors duration-300
                   text-gray-800 dark:text-gray-100
                   hover:bg-gradient-to-r hover:from-pastel-blue hover:to-mint-green
                   dark:hover:from-neon-purple dark:hover:to-teal-glow
                   hover:bg-clip-text hover:text-transparent"
        >
          {truncate(product.name, 80)}
        </Link>

        {/* Rating & Price */}
        <div className="flex items-center justify-between">
          {/* Rating */}
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-amber-400 fill-current" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {product.averageRating.toFixed(2)}
            </span>
          </div>

          {/* Price */}
          <span className="text-xl font-bold
                         bg-gradient-to-r from-peach-tone to-soft-coral
                         dark:from-amber-glow dark:to-electric-blue
                         bg-clip-text text-transparent">
            {currency} {product.price?.toFixed(2)}
          </span>
        </div>

        {/* Hover Action Button */}
        <div className="absolute bottom-4 left-4 right-4 transform translate-y-full
                      group-hover:translate-y-0 transition-transform duration-300">
          <Link
            to={`/products/${product._id}`}
            className="block w-full py-2 px-4 rounded-full text-center font-medium
                     bg-gradient-to-r from-pastel-blue to-mint-green
                     dark:from-neon-purple dark:to-teal-glow
                     text-white transition-all duration-300
                     hover:shadow-light-hover dark:hover:shadow-dark-hover
                     hover:scale-105"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};