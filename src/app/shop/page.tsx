'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { products } from '@/data/products';
import { categories } from '@/data/categories';
import { ProductCard } from '@/components/common/ProductCard';
import { Filter, Grid, List, Search, X, ChevronDown, RotateCcw } from 'lucide-react';
import { Product } from '@/types';

function ShopContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const initialCategory = searchParams.get('category') || 'all';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState<number>(6000);
  const [minRating, setMinRating] = useState<number>(0);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search match
      if (
        searchQuery &&
        !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !product.category.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !product.description.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Category match
      if (
        selectedCategory !== 'all' &&
        product.categorySlug !== selectedCategory &&
        product.category.toLowerCase() !== selectedCategory.toLowerCase()
      ) {
        return false;
      }

      // Price match
      if (product.price > priceRange) return false;

      // Rating match
      if (product.rating < minRating) return false;

      // Stock match
      if (inStockOnly && product.stock <= 0) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      return 0; // default featured
    });
  }, [searchQuery, selectedCategory, priceRange, minRating, inStockOnly, sortBy]);

  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setPriceRange(6000);
    setMinRating(0);
    setInStockOnly(false);
    setSortBy('featured');
  };

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm mb-8">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Shop All Craft Supplies & Gifts
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Browse resin moulds, air-dry clay, pipe cleaners, embroidery floss, beads, jewellery supplies & gift items in Sri Lanka.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block lg:col-span-3 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-royal-600" />
                  <span>Filter Products</span>
                </h3>
                <button
                  onClick={handleResetFilters}
                  className="text-xs text-royal-600 hover:text-royal-800 font-bold flex items-center space-x-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Categories
                </label>
                <div className="space-y-1.5 max-h-60 overflow-y-auto pr-1">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors ${
                      selectedCategory === 'all'
                        ? 'bg-royal-600 text-white'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <span>All Categories</span>
                    <span className="text-[10px]">{products.length}</span>
                  </button>

                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.slug)}
                      className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors ${
                        selectedCategory === cat.slug
                          ? 'bg-royal-600 text-white'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <span className="truncate pr-2">{cat.name}</span>
                      <span className="text-[10px] opacity-75">{cat.itemCount}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-slate-800 mb-2">
                  <span>Max Price</span>
                  <span className="text-royal-700">Rs. {priceRange.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="6000"
                  step="100"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-royal-600 cursor-pointer"
                />
              </div>

              {/* Rating Filter */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Minimum Rating
                </label>
                <div className="space-y-1">
                  {[4, 3, 0].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => setMinRating(rating)}
                      className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center space-x-2 ${
                        minRating === rating
                          ? 'bg-royal-100 text-royal-800 border border-royal-300'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <span>{rating === 0 ? 'All Ratings' : `${rating}★ & above`}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Availability Filter */}
              <div className="pt-2 border-t border-slate-100">
                <label className="flex items-center space-x-2 text-xs font-bold text-slate-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="rounded text-royal-600 focus:ring-royal-500 w-4 h-4"
                  />
                  <span>In Stock Only</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Main Product Grid Area */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Top Toolbar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Product Count & Mobile Drawer Trigger */}
              <div className="flex items-center justify-between w-full sm:w-auto space-x-4">
                <button
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="lg:hidden bg-royal-600 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2"
                >
                  <Filter className="w-4 h-4" />
                  <span>Filters</span>
                </button>

                <span className="text-xs font-bold text-slate-600">
                  Showing <span className="text-royal-700">{filteredProducts.length}</span> Products
                </span>
              </div>

              {/* Sorting & Grid/List Switcher */}
              <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
                
                {/* Sort Dropdown */}
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-semibold text-slate-500 hidden sm:inline">Sort:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-slate-100 border border-slate-300 text-slate-800 text-xs font-bold px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal-500"
                  >
                    <option value="featured">Featured Items</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="newest">New Arrivals</option>
                  </select>
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded-lg transition-colors ${
                      viewMode === 'grid' ? 'bg-white shadow-sm text-royal-700' : 'text-slate-400'
                    }`}
                    aria-label="Grid View"
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 rounded-lg transition-colors ${
                      viewMode === 'list' ? 'bg-white shadow-sm text-royal-700' : 'text-slate-400'
                    }`}
                    aria-label="List View"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Listing Grid / List */}
            {paginatedProducts.length > 0 ? (
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'
                    : 'space-y-4'
                }
              >
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 rounded-3xl border border-slate-200 text-center space-y-4">
                <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">No products match your filters</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Try adjusting your price range, clearing your search query, or choosing a different category.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="bg-royal-600 text-white font-bold text-xs px-6 py-2.5 rounded-xl hover:bg-royal-700 transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            )}

            {/* Pagination UI */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center space-x-2 pt-6">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-xl font-bold text-xs transition-colors ${
                      currentPage === page
                        ? 'bg-royal-700 text-white shadow-md'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm"
            onClick={() => setIsMobileFilterOpen(false)}
          />
          <div className="relative w-4/5 max-w-xs bg-white h-full shadow-2xl p-6 flex flex-col z-10 overflow-y-auto space-y-6">
            <div className="flex items-center justify-between border-b pb-4">
              <h3 className="font-black text-slate-900 uppercase tracking-wider text-sm">Filters</h3>
              <button onClick={() => setIsMobileFilterOpen(false)}>
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2 border rounded-xl text-xs"
              >
                <option value="all">All Categories</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase mb-2">Max Price: Rs. {priceRange}</label>
              <input
                type="range"
                min="200"
                max="6000"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-full bg-royal-600 text-white py-3 rounded-2xl font-bold text-xs uppercase"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-sm font-semibold">Loading Shop...</div>}>
      <ShopContent />
    </Suspense>
  );
}
