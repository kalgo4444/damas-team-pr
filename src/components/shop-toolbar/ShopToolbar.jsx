import React, { useState, useEffect } from 'react';
import { FiSearch, FiFilter, FiGrid, FiList } from 'react-icons/fi';

const ShopToolbar = ({ onSearch, show = 16, total = 32, sortBy = 'default', onShowChange, onSortChange }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const delay = setTimeout(() => {
      onSearch?.(query.trim());
    }, 300);

    return () => clearTimeout(delay);
  }, [query]);

  return (
    <div className="w-full space-y-4 mb-[80px]">


      <div className='bg-second '>
        <div className="flex flex-wrap justify-between items-center container p-4  h-[100px] rounded-md text-sm">
        <div className="flex items-center gap-4 flex-wrap max-[900px]:hidden">
          <button className="flex items-center gap-1 text-gray-700 hover:text-black">
            <FiFilter />
            <span>Filter</span>
          </button>

          <div className="flex items-center gap-2 max-[900px]:hidden">
            <button className="p-1 border rounded hover:bg-gray-200">
              <FiGrid />
            </button>
            <button className="p-1 border rounded hover:bg-gray-200">
              <FiList />
            </button>
          </div>

          <span className="text-gray-500">
            Showing 1–{show} of {total} results
          </span>
        </div>
                <form onSubmit={(e) => e.preventDefault()} className="flex items-center max-w-full mx-auto border rounded-md overflow-hidden">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-2 outline-none"
        />
        <button type="submit" className="bg-second-text hover:bg-amber-300 text-white px-4 py-2">
          <FiSearch size={18} />
        </button>
      </form>
        <div className="flex items-center gap-4 flex-wrap max-[900px]:hidden">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Show</span>
            <input
              type="number"
              value={show}
              onChange={(e) => onShowChange?.(parseInt(e.target.value))}
              className="w-14 px-2 py-1 border rounded text-center"
            />
          </div>

          <div className="flex items-center gap-2 max-[900px]:hidden">
            <span className="text-gray-600">Sort by</span>
            <select
              value={sortBy}
              onChange={(e) => onSortChange?.(e.target.value)}
              className="border rounded px-3 py-1"
            >
              <option value="default">Default</option>
              <option value="price">Price</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ShopToolbar;
