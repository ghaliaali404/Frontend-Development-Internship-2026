import { useState } from 'react';
import { mockProducts } from './data/products';
import { ProductCard } from './components/ProductCard';
import { FAQAccordion } from './components/FAQAccordion';

function App() {
  // Active task state: 'task1' or 'task2'
  const [activeTask, setActiveTask] = useState<'task1' | 'task2'>('task1');

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation Bar / Task Switcher */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-gray-200 flex gap-2">
            <button
              onClick={() => setActiveTask('task1')}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer ${
                activeTask === 'task1'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Task 1: Product Cards
            </button>
            <button
              onClick={() => setActiveTask('task2')}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer ${
                activeTask === 'task2'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Task 2: FAQ Accordion
            </button>
          </div>
        </div>

        {/* View 1: Task 1 (Product Cards) */}
        {activeTask === 'task1' && (
          <div>
            <header className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Featured Products
              </h1>
              <p className="mt-2 text-base sm:text-lg text-gray-600">
                Reusable product card components built with React, TypeScript & Tailwind CSS.
              </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}

        {/* View 2: Task 2 (FAQ Accordion) */}
        {activeTask === 'task2' && (
          <div>
            <FAQAccordion />
          </div>
        )}

      </div>
    </div>
  );
}

export default App;