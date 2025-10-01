"use client";

import Link from "next/link";
import {
  FiUsers,
  FiTarget,
  FiHeart,
  FiStar,
  FiTruck,
  FiShield,
  FiClock,
  FiThumbsUp,
  FiInfo,
  FiCode
} from "react-icons/fi";

interface TestPageProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function TestPage({ params, searchParams }: TestPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 text-white mb-6">About NextShop</h1>
            <p className="subheading text-white/90 mb-8">
              Your trusted e-commerce destination for quality products and exceptional service since 2020
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">10K+</div>
                <div className="text-white/80">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50K+</div>
                <div className="text-white/80">Products Sold</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">99%</div>
                <div className="text-white/80">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parameters & Query Params Demo Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Parameters & Query Params Demo</h2>
              <p className="subheading text-gray-600">
                This section demonstrates how URL parameters and query parameters work in Next.js
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* URL Parameters */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <FiCode className="text-primary mr-3" size={24} />
                  <h3 className="text-xl font-bold">URL Parameters</h3>
                </div>
                <div className="space-y-3">
                  {Object.keys(params).length > 0 ? (
                    Object.entries(params).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center p-3 bg-white rounded border">
                        <span className="font-medium text-gray-700">{key}:</span>
                        <span className="text-primary font-mono">{value}</span>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500 italic p-3 bg-white rounded border">
                      No URL parameters found
                    </div>
                  )}
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded text-sm">
                  <strong>Example:</strong> /test/[id] → /test/123
                </div>
              </div>

              {/* Query Parameters */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <FiInfo className="text-primary mr-3" size={24} />
                  <h3 className="text-xl font-bold">Query Parameters</h3>
                </div>
                <div className="space-y-3">
                  {Object.keys(searchParams).length > 0 ? (
                    Object.entries(searchParams).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center p-3 bg-white rounded border">
                        <span className="font-medium text-gray-700">{key}:</span>
                        <span className="text-primary font-mono">
                          {Array.isArray(value) ? value.join(', ') : value}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500 italic p-3 bg-white rounded border">
                      No query parameters found
                    </div>
                  )}
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded text-sm">
                  <strong>Example:</strong> /test?name=john&age=25
                </div>
              </div>
            </div>

            {/* Demo Links */}
            <div className="mt-12 text-center">
              <h3 className="text-xl font-bold mb-6">Try These Examples:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link 
                  href="/test?name=John&age=25&category=electronics"
                  className="btn-secondary text-center block"
                >
                  With Query Params
                </Link>
                <Link 
                  href="/test?filter=popular&sort=price&page=2"
                  className="btn-secondary text-center block"
                >
                  E-commerce Filters
                </Link>
                <Link 
                  href="/test?theme=dark&lang=en&debug=true"
                  className="btn-secondary text-center block"
                >
                  Settings Example
                </Link>
                <Link 
                  href="/test/123?category=demo&type=url-param"
                  className="btn-primary text-center block"
                >
                  URL Parameter Demo
                </Link>
              </div>
              
              {/* Dynamic Route Examples */}
              <div className="mt-8">
                <h4 className="text-lg font-bold mb-4">Dynamic Route Examples (URL Parameters):</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <Link 
                    href="/test/product-123"
                    className="btn-secondary text-center block text-sm"
                  >
                    /test/product-123
                  </Link>
                  <Link 
                    href="/test/user-456"
                    className="btn-secondary text-center block text-sm"
                  >
                    /test/user-456
                  </Link>
                  <Link 
                    href="/test/category-electronics"
                    className="btn-secondary text-center block text-sm"
                  >
                    /test/category-electronics
                  </Link>
                  <Link 
                    href="/test/abc123xyz"
                    className="btn-secondary text-center block text-sm"
                  >
                    /test/abc123xyz
                  </Link>
                </div>
              </div>
            </div>

            {/* Current URL Info */}
            <div className="mt-8 p-6 bg-gray-900 text-white rounded-lg">
              <h4 className="text-lg font-bold mb-3">Current URL Information:</h4>
              <div className="font-mono text-sm space-y-2">
                <div><span className="text-gray-400">Pathname:</span> /test</div>
                <div><span className="text-gray-400">Full URL:</span> {typeof window !== 'undefined' ? window.location.href : 'N/A (SSR)'}</div>
                <div><span className="text-gray-400">Parameters Count:</span> {Object.keys(params).length}</div>
                <div><span className="text-gray-400">Query Params Count:</span> {Object.keys(searchParams).length}</div>
              </div>
            </div>

            {/* API Testing Section */}
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <div className="flex items-center mb-4">
                <FiCode className="text-blue-600 mr-3" size={24} />
                <h4 className="text-lg font-bold">API Endpoints for Testing</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Test the API endpoints with parameters and query parameters:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button 
                  onClick={() => window.open('/api/test/status', '_blank')}
                  className="btn-primary text-center"
                >
                  📊 API Status & Documentation
                </button>
                <button 
                  onClick={() => window.open('/api/test?name=John&age=25&category=demo', '_blank')}
                  className="btn-secondary text-center"
                >
                  🔗 Test Basic API
                </button>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <strong>💡 Tip:</strong> Click the buttons above to test the API endpoints in a new tab. 
                The APIs will return JSON responses showing how parameters are processed.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At NextShop, we believe shopping should be simple, enjoyable, and accessible to everyone. 
                Our mission is to provide high-quality products at competitive prices while delivering 
                exceptional customer service that exceeds expectations.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We strive to create a seamless online shopping experience that connects customers with 
                the products they love, backed by reliable service and support.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <FiTarget className="text-primary" size={32} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Customer-Centric Approach</h3>
                  <p className="text-gray-600">Every decision we make puts our customers first</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <FiHeart className="text-secondary mx-auto mb-4" size={64} />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Built with Passion</h3>
                  <p className="text-gray-600">Crafted by a team that cares about your experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Our Core Values</h2>
            <p className="subheading max-w-2xl mx-auto">
              These principles guide everything we do and shape the NextShop experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-primary/5 transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiStar className="text-primary" size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quality First</h3>
              <p className="text-gray-600">We carefully curate every product to ensure the highest standards</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-secondary/5 transition-colors">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiTruck className="text-secondary" size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and reliable shipping to get your orders to you on time</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-accent/5 transition-colors">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiShield className="text-accent" size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure Shopping</h3>
              <p className="text-gray-600">Your personal information and payments are always protected</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-primary/5 transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiThumbsUp className="text-primary" size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Customer Support</h3>
              <p className="text-gray-600">Friendly and helpful support team ready to assist you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Meet Our Team</h2>
            <p className="subheading max-w-2xl mx-auto">
              The passionate people behind NextShop who work hard to bring you the best shopping experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-dark rounded-full mx-auto mb-4 flex items-center justify-center">
                <FiUsers className="text-white" size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Sarah Johnson</h3>
              <p className="text-primary font-medium mb-2">CEO & Founder</p>
              <p className="text-gray-600 text-sm">
                Passionate about creating exceptional customer experiences and building lasting relationships.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-secondary to-secondary-dark rounded-full mx-auto mb-4 flex items-center justify-center">
                <FiUsers className="text-white" size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Michael Chen</h3>
              <p className="text-secondary font-medium mb-2">Head of Operations</p>
              <p className="text-gray-600 text-sm">
                Ensures every order is processed efficiently and delivered with care to our customers.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-accent to-accent-dark rounded-full mx-auto mb-4 flex items-center justify-center">
                <FiUsers className="text-white" size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Emily Rodriguez</h3>
              <p className="text-accent font-medium mb-2">Customer Success Manager</p>
              <p className="text-gray-600 text-sm">
                Dedicated to ensuring every customer has a positive and memorable shopping experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Why Choose NextShop?</h2>
            <p className="subheading max-w-2xl mx-auto">
              We go above and beyond to provide you with the best online shopping experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiClock className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">24/7 Customer Support</h3>
                  <p className="text-gray-600">
                    Our support team is available around the clock to help you with any questions or concerns.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiShield className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Secure Payments</h3>
                  <p className="text-gray-600">
                    Shop with confidence knowing your payment information is protected with industry-leading security.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiTruck className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Free Shipping</h3>
                  <p className="text-gray-600">
                    Enjoy free shipping on orders over $50 with fast delivery to your doorstep.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiHeart className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Easy Returns</h3>
                  <p className="text-gray-600">
                    Not satisfied? No problem. We offer hassle-free returns within 30 days of purchase.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🛒</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Shop with Confidence</h3>
                <p className="text-gray-600">Join thousands of satisfied customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-spacing bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-4">Ready to Start Shopping?</h2>
          <p className="subheading text-white/90 mb-8 max-w-2xl mx-auto">
            Discover amazing products and experience the NextShop difference today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products" 
              className="btn btn-secondary bg-white text-primary hover:bg-gray-100 px-8 py-3"
            >
              Browse Products
            </Link>
            <Link 
              href="/contact" 
              className="btn btn-outline border-white text-white hover:bg-white hover:text-primary px-8 py-3"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}