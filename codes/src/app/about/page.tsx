import type { Metadata } from "next";
import Link from "next/link";
import {
  FiUsers,
  FiTarget,
  FiHeart,
  FiStar,
  FiTruck,
  FiShield,
  FiClock,
  FiThumbsUp
} from "react-icons/fi";

export const metadata: Metadata = {
  title: "About Us - NextShop | Learn About Our Mission & Values",
  description: "Discover NextShop's story, mission, and values. Learn about our commitment to quality products, exceptional customer service, and creating the best online shopping experience.",
  keywords: "about nextshop, our mission, company values, customer service, online shopping, e-commerce team",
  openGraph: {
    title: "About NextShop - Your Trusted E-commerce Partner",
    description: "Learn about NextShop's mission to provide quality products and exceptional customer service. Meet our team and discover why thousands choose us.",
    type: "website",
  },
};

export default function AboutPage() {
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