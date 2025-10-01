"use client";

import Link from "next/link";
import { useState } from "react";
import { 
  FiSearch, 
  FiUser, 
  FiShoppingCart, 
  FiMenu,
  FiChevronDown,
  FiX 
} from "react-icons/fi";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMegaMenu = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 header-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="nav-link">
              <h1 className="text-2xl font-bold text-primary">NextShop</h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link href="/" className="nav-link text-gray-600 hover:text-primary transition-colors py-2">
              Home
            </Link>
            
            {/* Products with Mega Menu */}
            <div className="relative group">
              <button 
                className="nav-link text-gray-600 hover:text-primary transition-colors py-2 flex items-center space-x-1"
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onMouseLeave={() => setIsMegaMenuOpen(false)}
              >
                <span>Products</span>
                <FiChevronDown size={16} className={`transform transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Mega Menu */}
              {isMegaMenuOpen && (
                <div 
                  className="mega-menu active absolute left-0 top-full mt-2 w-screen max-w-5xl bg-white border border-gray-200 shadow-xl rounded-lg z-50 animate-fade-in-scale"
                  onMouseEnter={() => setIsMegaMenuOpen(true)}
                  onMouseLeave={() => setIsMegaMenuOpen(false)}
                >
                  <div className="p-6">
                    <div className="grid grid-cols-4 gap-6">
                      {/* Categories */}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
                        <ul className="space-y-2">
                          <li><Link href="/category/electronics" className="mega-menu-item text-gray-600 hover:text-primary transition-colors">Electronics</Link></li>
                          <li><Link href="/category/clothing" className="mega-menu-item text-gray-600 hover:text-primary transition-colors">Clothing</Link></li>
                          <li><Link href="/category/home" className="mega-menu-item text-gray-600 hover:text-primary transition-colors">Home & Garden</Link></li>
                          <li><Link href="/category/sports" className="mega-menu-item text-gray-600 hover:text-primary transition-colors">Sports</Link></li>
                          <li><Link href="/category/books" className="mega-menu-item text-gray-600 hover:text-primary transition-colors">Books</Link></li>
                          <li><Link href="/category/beauty" className="mega-menu-item text-gray-600 hover:text-primary transition-colors">Beauty</Link></li>
                        </ul>
                      </div>
                      
                      {/* Brands */}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Popular Brands</h3>
                        <ul className="space-y-2">
                          <li><Link href="/brand/apple" className="mega-menu-item text-gray-600 hover:text-primary transition-colors">Apple</Link></li>
                          <li><Link href="/brand/samsung" className="mega-menu-item text-gray-600 hover:text-primary transition-colors">Samsung</Link></li>
                          <li><Link href="/brand/nike" className="mega-menu-item text-gray-600 hover:text-primary transition-colors">Nike</Link></li>
                          <li><Link href="/brand/adidas" className="mega-menu-item text-gray-600 hover:text-primary transition-colors">Adidas</Link></li>
                          <li><Link href="/brand/sony" className="mega-menu-item text-gray-600 hover:text-primary transition-colors">Sony</Link></li>
                          <li><Link href="/brands" className="mega-menu-item text-primary hover:text-primary-dark transition-colors font-medium">View All Brands →</Link></li>
                        </ul>
                      </div>
                      
                      {/* Quick Links */}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                          <li><Link href="/deals" className="mega-menu-item text-gray-600 hover:text-primary transition-colors">Special Deals</Link></li>
                          <li><Link href="/new-arrivals" className="mega-menu-item text-gray-600 hover:text-primary transition-colors">New Arrivals</Link></li>
                          <li><Link href="/bestsellers" className="mega-menu-item text-gray-600 hover:text-primary transition-colors">Best Sellers</Link></li>
                          <li><Link href="/trending" className="mega-menu-item text-gray-600 hover:text-primary transition-colors">Trending Now</Link></li>
                          <li><Link href="/clearance" className="mega-menu-item text-gray-600 hover:text-primary transition-colors">Clearance</Link></li>
                          <li><Link href="/gift-cards" className="mega-menu-item text-gray-600 hover:text-primary transition-colors">Gift Cards</Link></li>
                        </ul>
                      </div>
                      
                      {/* Featured */}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Featured</h3>
                        <div className="space-y-3">
                          <div className="bg-gradient-to-r from-primary to-primary-light p-4 rounded-lg text-white transform hover:scale-105 transition-transform">
                            <h4 className="font-semibold text-sm">Summer Sale</h4>
                            <p className="text-xs opacity-90">Up to 50% off</p>
                            <Link href="/summer-sale" className="text-xs underline hover:no-underline">
                              Shop Now →
                            </Link>
                          </div>
                          <div className="bg-gradient-to-r from-secondary to-accent p-4 rounded-lg text-white transform hover:scale-105 transition-transform">
                            <h4 className="font-semibold text-sm">Free Shipping</h4>
                            <p className="text-xs opacity-90">On orders over $50</p>
                            <Link href="/shipping-info" className="text-xs underline hover:no-underline">
                              Learn More →
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/categories" className="nav-link text-gray-600 hover:text-primary transition-colors py-2">
              Categories
            </Link>
            <Link href="/deals" className="nav-link text-gray-600 hover:text-primary transition-colors py-2">
              Deals
            </Link>
            <Link href="/about" className="nav-link text-gray-600 hover:text-primary transition-colors py-2">
              About
            </Link>
            <Link href="/contact" className="nav-link text-gray-600 hover:text-primary transition-colors py-2">
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="btn-hover-lift text-gray-600 hover:text-primary transition-colors p-2" aria-label="Search">
              <FiSearch size={20} />
            </button>
            <button className="btn-hover-lift text-gray-600 hover:text-primary transition-colors p-2" aria-label="Account">
              <FiUser size={20} />
            </button>
            <button className="cart-button bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors flex items-center space-x-2 btn-hover-lift">
              <FiShoppingCart size={18} />
              <span className="hidden sm:inline">Cart (0)</span>
              <span className="sm:hidden">(0)</span>
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="lg:hidden text-gray-600 hover:text-primary transition-colors p-2 btn-hover-lift"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`mobile-menu lg:hidden bg-white border-t border-gray-200 shadow-lg ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="px-4 py-2 space-y-1" style={{ maxHeight: 'calc(100vh - 80px)', overflowY: 'auto' }}>
          <Link 
            href="/" 
            className="mobile-menu-item block px-3 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          
          {/* Mobile Products Dropdown */}
          <div className="mobile-menu-item">
            <button 
              className="w-full flex items-center justify-between px-3 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
              onClick={toggleMegaMenu}
            >
              <span>Products</span>
              <FiChevronDown size={16} className={`transform transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isMegaMenuOpen && (
              <div className={`mobile-mega-dropdown ${isMegaMenuOpen ? 'active' : ''} pl-4 space-y-1`}>
                {/* Categories Section */}
                <div className="py-2">
                  <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-2">Categories</h4>
                  <Link 
                    href="/category/electronics" 
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Electronics
                  </Link>
                  <Link 
                    href="/category/clothing" 
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Clothing
                  </Link>
                  <Link 
                    href="/category/home" 
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home & Garden
                  </Link>
                  <Link 
                    href="/category/sports" 
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sports
                  </Link>
                  <Link 
                    href="/category/books" 
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Books
                  </Link>
                  <Link 
                    href="/category/beauty" 
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Beauty
                  </Link>
                </div>

                {/* Brands Section */}
                <div className="py-2 border-t border-gray-100">
                  <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-2">Popular Brands</h4>
                  <Link 
                    href="/brand/apple" 
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Apple
                  </Link>
                  <Link 
                    href="/brand/samsung" 
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Samsung
                  </Link>
                  <Link 
                    href="/brand/nike" 
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Nike
                  </Link>
                  <Link 
                    href="/brand/adidas" 
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Adidas
                  </Link>
                  <Link 
                    href="/brand/sony" 
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sony
                  </Link>
                  <Link 
                    href="/brands" 
                    className="block px-3 py-2 text-sm text-primary hover:text-primary-dark hover:bg-gray-50 rounded-md transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    View All Brands →
                  </Link>
                </div>

                {/* Quick Links Section */}
                <div className="py-2 border-t border-gray-100">
                  <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-2">Quick Links</h4>
                  <Link 
                    href="/deals" 
                    className="block px-3 py-2 text-sm text-primary hover:text-primary-dark hover:bg-gray-50 rounded-md transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Special Deals
                  </Link>
                  <Link 
                    href="/new-arrivals" 
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    New Arrivals
                  </Link>
                  <Link 
                    href="/bestsellers" 
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Best Sellers
                  </Link>
                  <Link 
                    href="/trending" 
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Trending Now
                  </Link>
                  <Link 
                    href="/clearance" 
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Clearance
                  </Link>
                  <Link 
                    href="/gift-cards" 
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Gift Cards
                  </Link>
                </div>

                {/* Featured Promotions */}
                <div className="py-2 border-t border-gray-100">
                  <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-2">Featured</h4>
                  <Link 
                    href="/summer-sale" 
                    className="block px-3 py-2 text-sm bg-gradient-to-r from-primary to-primary-light text-white rounded-md transition-colors mb-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    🔥 Summer Sale - Up to 50% off
                  </Link>
                  <Link 
                    href="/shipping-info" 
                    className="block px-3 py-2 text-sm bg-gradient-to-r from-secondary to-accent text-white rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    🚚 Free Shipping on orders over $50
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          <Link 
            href="/categories" 
            className="mobile-menu-item block px-3 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Categories
          </Link>
          <Link 
            href="/deals" 
            className="mobile-menu-item block px-3 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Deals
          </Link>
          <Link 
            href="/about" 
            className="mobile-menu-item block px-3 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="mobile-menu-item block px-3 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}