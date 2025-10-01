import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft, FiGrid, FiList, FiFilter } from "react-icons/fi";

interface CategoryPageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const categoryName = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);
  return {
    title: `${categoryName} - NextShop | Shop ${categoryName} Products`,
    description: `Browse our wide selection of ${categoryName.toLowerCase()} products. Find the best deals and quality items in the ${categoryName.toLowerCase()} category.`,
  };
}

export default function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { slug } = params;
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);
  
  // Mock data - in a real app, this would come from an API
  const categoryData = {
    electronics: {
      name: "Electronics",
      description: "Discover the latest in electronics, from smartphones to laptops and smart home devices.",
      itemCount: 1250,
      subcategories: ["Smartphones", "Laptops", "Tablets", "Smart Home", "Audio", "Gaming"]
    },
    clothing: {
      name: "Clothing",
      description: "Fashion for every style and occasion. From casual wear to formal attire.",
      itemCount: 890,
      subcategories: ["Men's Clothing", "Women's Clothing", "Shoes", "Accessories", "Sportswear", "Formal Wear"]
    },
    home: {
      name: "Home & Garden",
      description: "Everything you need to make your house a home and garden a paradise.",
      itemCount: 650,
      subcategories: ["Furniture", "Decor", "Kitchen", "Garden", "Tools", "Storage"]
    },
    sports: {
      name: "Sports",
      description: "Gear up for your favorite sports and outdoor activities.",
      itemCount: 420,
      subcategories: ["Fitness", "Outdoor", "Team Sports", "Water Sports", "Winter Sports", "Equipment"]
    },
    books: {
      name: "Books",
      description: "Expand your knowledge with our vast collection of books across all genres.",
      itemCount: 850,
      subcategories: ["Fiction", "Non-Fiction", "Educational", "Children's", "Comics", "E-books"]
    },
    beauty: {
      name: "Beauty",
      description: "Beauty products and cosmetics to help you look and feel your best.",
      itemCount: 320,
      subcategories: ["Skincare", "Makeup", "Hair Care", "Fragrances", "Tools", "Men's Grooming"]
    }
  };

  const category = categoryData[slug as keyof typeof categoryData] || {
    name: categoryName,
    description: `Browse our ${categoryName.toLowerCase()} category for great products.`,
    itemCount: 0,
    subcategories: []
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-custom py-6">
          <div className="flex items-center mb-4">
            <Link 
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-primary mr-4 transition-colors"
            >
              <FiArrowLeft className="mr-2" />
              Back to Home
            </Link>
            <nav className="text-sm text-gray-500">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/categories" className="hover:text-primary">Categories</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">{category.name}</span>
            </nav>
          </div>
          
          <div className="flex justify-between items-start">
            <div>
              <h1 className="heading-1 mb-3">{category.name}</h1>
              <p className="subheading text-gray-600 mb-4">{category.description}</p>
              <div className="text-sm text-gray-500">
                {category.itemCount} products available
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="btn-secondary flex items-center space-x-2">
                <FiFilter size={16} />
                <span>Filters</span>
              </button>
              <div className="flex border border-gray-300 rounded-lg">
                <button className="p-2 hover:bg-gray-100 border-r border-gray-300">
                  <FiGrid size={16} />
                </button>
                <button className="p-2 hover:bg-gray-100">
                  <FiList size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subcategories */}
      {category.subcategories.length > 0 && (
        <section className="bg-white border-b border-gray-200">
          <div className="container-custom py-4">
            <h3 className="text-lg font-semibold mb-3">Shop by Category</h3>
            <div className="flex flex-wrap gap-2">
              {category.subcategories.map((subcategory) => (
                <Link
                  key={subcategory}
                  href={`/category/${slug}?subcategory=${subcategory.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-4 py-2 bg-gray-100 hover:bg-primary hover:text-white rounded-full text-sm transition-colors"
                >
                  {subcategory}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Mock Product Cards */}
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4">
                <div className="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-400">Product Image</span>
                </div>
                <h3 className="font-semibold mb-2">Sample {category.name} Product {index + 1}</h3>
                <p className="text-gray-600 text-sm mb-3">High-quality product description goes here.</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-primary">${(Math.random() * 200 + 10).toFixed(2)}</span>
                  <button className="btn-primary px-4 py-2 text-sm">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50">Previous</button>
              <button className="px-3 py-2 bg-primary text-white rounded-md">1</button>
              <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50">2</button>
              <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50">3</button>
              <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50">Next</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}