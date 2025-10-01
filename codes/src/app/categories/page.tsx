import type { Metadata } from "next";
import Link from "next/link";
import { FiShoppingBag, FiTrendingUp } from "react-icons/fi";

export const metadata: Metadata = {
  title: "All Categories - NextShop | Browse Product Categories",
  description: "Explore all product categories at NextShop. Find electronics, clothing, home goods, sports equipment, books, beauty products and more.",
  keywords: "categories, products, electronics, clothing, home, sports, books, beauty, shopping",
};

export default function CategoriesPage() {
  const categories = [
    {
      slug: "electronics",
      name: "Electronics",
      description: "Latest gadgets, smartphones, laptops, and tech accessories.",
      itemCount: 1250,
      image: "📱",
      featured: true
    },
    {
      slug: "clothing",
      name: "Clothing",
      description: "Fashion for every style and occasion, men's and women's wear.",
      itemCount: 890,
      image: "👕",
      featured: true
    },
    {
      slug: "home",
      name: "Home & Garden",
      description: "Furniture, decor, kitchen essentials, and garden supplies.",
      itemCount: 650,
      image: "🏠",
      featured: false
    },
    {
      slug: "sports",
      name: "Sports",
      description: "Sports equipment, fitness gear, and outdoor activities.",
      itemCount: 420,
      image: "⚽",
      featured: true
    },
    {
      slug: "books",
      name: "Books",
      description: "Fiction, non-fiction, educational, and children's books.",
      itemCount: 850,
      image: "📚",
      featured: false
    },
    {
      slug: "beauty",
      name: "Beauty",
      description: "Skincare, makeup, hair care, and beauty accessories.",
      itemCount: 320,
      image: "💄",
      featured: false
    }
  ];

  const featuredCategories = categories.filter(cat => cat.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 text-white mb-6">Shop by Category</h1>
            <p className="subheading text-white/90 mb-8">
              Discover amazing products across all our categories. From electronics to fashion, we have everything you need.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{categories.reduce((sum, cat) => sum + cat.itemCount, 0).toLocaleString()}+</div>
                <div className="text-white/80">Products Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{categories.length}</div>
                <div className="text-white/80">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-white/80">Quality Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Featured Categories</h2>
            <p className="subheading text-gray-600">
              Our most popular product categories with the best deals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">{category.image}</div>
                  <div className="flex items-center justify-center mb-2">
                    <h3 className="text-xl font-bold mr-2">{category.name}</h3>
                    <FiTrendingUp className="text-primary" size={20} />
                  </div>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-4">
                    <FiShoppingBag size={16} />
                    <span>{category.itemCount} products</span>
                  </div>
                  <div className="inline-flex items-center text-primary font-medium group-hover:text-primary-dark transition-colors">
                    Shop Now →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Categories */}
      <section className="section-spacing">
        <div className="container-custom">
          <h2 className="heading-2 mb-8 text-center">All Categories</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{category.image}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">{category.description}</p>
                    <div className="text-xs text-gray-500">
                      {category.itemCount} products
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Our search feature can help you find exactly what you need across all categories.
          </p>
          <Link href="/" className="btn-secondary inline-flex items-center space-x-2">
            <FiShoppingBag />
            <span>Start Shopping</span>
          </Link>
        </div>
      </section>
    </div>
  );
}