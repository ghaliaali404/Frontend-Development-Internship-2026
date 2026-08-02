import React from 'react';
import type { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 flex flex-col h-full group">
      {/* Product Image Container */}
      <div className="relative overflow-hidden bg-gray-100 h-48 sm:h-52">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
          {product.category}
        </span>
      </div>

      {/* Product Details */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-800 line-clamp-1 group-hover:text-indigo-600 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-sm text-gray-500 mt-2 line-clamp-2 flex-grow">
          {product.description}
        </p>

        {/* Price & Action Button */}
        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xl font-extrabold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => alert(`Added "${product.name}" to cart!`)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};