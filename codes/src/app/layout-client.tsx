"use client";

import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { Navigation } from "../components/Navigation";
import { 
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiYoutube 
} from "react-icons/fi";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function RootLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navigation />

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <h3 className="text-xl font-bold mb-4">NextShop</h3>
                <p className="text-gray-400 mb-4">
                  Your trusted e-commerce destination for quality products and exceptional service.
                </p>
                <div className="space-y-2 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <FiPhone size={16} />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FiMail size={16} />
                    <span>support@nextshop.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FiMapPin size={16} />
                    <span>123 Commerce St, City, State 12345</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/products" className="hover:text-white transition-colors">All Products</Link></li>
                  <li><Link href="/categories" className="hover:text-white transition-colors">Categories</Link></li>
                  <li><Link href="/deals" className="hover:text-white transition-colors">Special Deals</Link></li>
                  <li><Link href="/new-arrivals" className="hover:text-white transition-colors">New Arrivals</Link></li>
                  <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                </ul>
              </div>

              {/* Customer Service */}
              <div>
                <h4 className="font-semibold mb-4">Customer Service</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                  <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping Info</Link></li>
                  <li><Link href="/returns" className="hover:text-white transition-colors">Returns</Link></li>
                  <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="font-semibold mb-4">Stay Updated</h4>
                <p className="text-gray-400 mb-4">Subscribe to get special offers and updates.</p>
                <div className="flex mb-4">
                  <input 
                    type="email" 
                    placeholder="Enter email" 
                    className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button className="bg-primary px-4 py-2 rounded-r-lg hover:bg-primary-dark transition-colors">
                    Subscribe
                  </button>
                </div>
                <div>
                  <h5 className="font-semibold mb-3">Follow Us</h5>
                  <div className="flex space-x-3">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <FiFacebook size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <FiTwitter size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <FiInstagram size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <FiYoutube size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 NextShop. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}