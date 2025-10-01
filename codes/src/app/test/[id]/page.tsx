"use client";

import Link from "next/link";
import { FiArrowLeft, FiCode, FiInfo, FiHash } from "react-icons/fi";

interface PageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function TestWithIdPage({ params, searchParams }: PageProps) {
  const { id } = params;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/test"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <FiArrowLeft className="mr-2" />
              Back to Test Page
            </Link>
            <h1 className="heading-1 text-white mb-4">Test Page with ID Parameter</h1>
            <p className="subheading text-white/90">
              Demonstrating dynamic routing with URL parameter: <span className="font-mono bg-white/20 px-2 py-1 rounded">{id}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Parameter Details */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* URL Parameter Details */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-6">
                  <FiHash className="text-primary mr-3" size={28} />
                  <h2 className="text-2xl font-bold">URL Parameter</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Route Pattern:</div>
                    <div className="font-mono text-lg">/test/[id]</div>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Current URL:</div>
                    <div className="font-mono text-lg">/test/{id}</div>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Parameter Value:</div>
                    <div className="font-mono text-xl font-bold text-primary">{id}</div>
                  </div>
                </div>

                {/* Parameter Analysis */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-bold mb-3">Parameter Analysis:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Type:</strong> {isNaN(Number(id)) ? 'String' : 'Number'}</li>
                    <li>• <strong>Length:</strong> {id.length} characters</li>
                    <li>• <strong>Contains Special Chars:</strong> {/[^a-zA-Z0-9]/.test(id) ? 'Yes' : 'No'}</li>
                    <li>• <strong>Is Numeric:</strong> {!isNaN(Number(id)) ? 'Yes' : 'No'}</li>
                  </ul>
                </div>
              </div>

              {/* Query Parameters */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-6">
                  <FiInfo className="text-primary mr-3" size={28} />
                  <h2 className="text-2xl font-bold">Query Parameters</h2>
                </div>

                {Object.keys(searchParams).length > 0 ? (
                  <div className="space-y-3">
                    {Object.entries(searchParams).map(([key, value]) => (
                      <div key={key} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start">
                          <span className="font-medium text-gray-700">{key}</span>
                          <span className="text-primary font-mono ml-4">
                            {Array.isArray(value) ? value.join(', ') : value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-gray-500 italic p-6 border-2 border-dashed border-gray-200 rounded-lg text-center">
                    No query parameters found
                    <div className="mt-2 text-sm">
                      Try adding: <span className="font-mono">?name=value&amp;key=data</span>
                    </div>
                  </div>
                )}

                {/* Add Query Params Examples */}
                <div className="mt-6">
                  <h3 className="font-bold mb-3">Try these examples:</h3>
                  <div className="space-y-2">
                    <Link 
                      href={`/test/${id}?name=John&age=25`}
                      className="block p-3 bg-blue-50 hover:bg-blue-100 rounded text-sm font-mono transition-colors"
                    >
                      ?name=John&age=25
                    </Link>
                    <Link 
                      href={`/test/${id}?category=electronics&price=100&available=true`}
                      className="block p-3 bg-green-50 hover:bg-green-100 rounded text-sm font-mono transition-colors"
                    >
                      ?category=electronics&price=100&available=true
                    </Link>
                    <Link 
                      href={`/test/${id}?tags=sale&tags=featured&tags=new`}
                      className="block p-3 bg-purple-50 hover:bg-purple-100 rounded text-sm font-mono transition-colors"
                    >
                      ?tags=sale&tags=featured&tags=new
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Code Examples */}
            <div className="mt-12 bg-gray-900 text-white p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <FiCode className="text-green-400 mr-3" size={28} />
                <h2 className="text-2xl font-bold">Code Implementation</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-3 text-green-400">Page Component Props:</h3>
                  <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
{`interface PageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Page({ params, searchParams }: PageProps) {
  const { id } = params;
  // Use the parameters...
}`}
                  </pre>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-3 text-green-400">Current Values:</h3>
                  <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
{`params: ${JSON.stringify(params, null, 2)}
searchParams: ${JSON.stringify(searchParams, null, 2)}`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 text-center">
              <h3 className="text-xl font-bold mb-6">Try Different IDs:</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {['123', 'abc', 'product-1', 'user-profile'].map((testId) => (
                  <Link 
                    key={testId}
                    href={`/test/${testId}`}
                    className={`btn-secondary text-center ${id === testId ? 'bg-primary text-white' : ''}`}
                  >
                    {testId}
                  </Link>
                ))}
              </div>
            </div>

            {/* API Testing Section */}
            <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <FiCode className="text-primary mr-3" size={28} />
                <h2 className="text-2xl font-bold">API Endpoints for Testing</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Basic API */}
                <div className="border rounded-lg p-4">
                  <h4 className="font-bold mb-3 text-green-600">Basic API</h4>
                  <div className="space-y-2 text-sm">
                    <div className="font-mono bg-gray-100 p-2 rounded">
                      GET /api/test
                    </div>
                    <div className="text-gray-600">
                      Test basic query parameters
                    </div>
                    <button 
                      onClick={() => window.open('/api/test?name=John&age=25&tags=demo&tags=test', '_blank')}
                      className="btn-secondary text-xs w-full"
                    >
                      Try API Call
                    </button>
                  </div>
                </div>

                {/* Dynamic ID API */}
                <div className="border rounded-lg p-4">
                  <h4 className="font-bold mb-3 text-blue-600">Dynamic ID API</h4>
                  <div className="space-y-2 text-sm">
                    <div className="font-mono bg-gray-100 p-2 rounded">
                      GET /api/test/item/{id}
                    </div>
                    <div className="text-gray-600">
                      Test with current ID parameter
                    </div>
                    <button 
                      onClick={() => window.open(`/api/test/item/${id}?fields=name,category&include=details`, '_blank')}
                      className="btn-secondary text-xs w-full"
                    >
                      Try with ID: {id}
                    </button>
                  </div>
                </div>

                {/* Category + ID API */}
                <div className="border rounded-lg p-4">
                  <h4 className="font-bold mb-3 text-purple-600">Category API</h4>
                  <div className="space-y-2 text-sm">
                    <div className="font-mono bg-gray-100 p-2 rounded">
                      GET /api/test/category/[category]/[id]
                    </div>
                    <div className="text-gray-600">
                      Test with category and ID
                    </div>
                    <button 
                      onClick={() => window.open(`/api/test/category/electronics/${id}?sort=price&order=desc&limit=5`, '_blank')}
                      className="btn-secondary text-xs w-full"
                    >
                      Electronics + {id}
                    </button>
                  </div>
                </div>
              </div>

              {/* API Documentation */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold mb-4">Available API Endpoints:</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-medium mb-2 text-green-600">Basic Test API</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• <code className="bg-white px-2 py-1 rounded">GET /api/test</code> - Test query params</li>
                      <li>• <code className="bg-white px-2 py-1 rounded">POST /api/test</code> - Test POST with body</li>
                      <li>• <code className="bg-white px-2 py-1 rounded">PUT /api/test</code> - Test PUT operations</li>
                      <li>• <code className="bg-white px-2 py-1 rounded">DELETE /api/test</code> - Test DELETE with ID</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-blue-600">Dynamic Routes</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• <code className="bg-white px-2 py-1 rounded">GET /api/test/item/[id]</code> - Get item by ID</li>
                      <li>• <code className="bg-white px-2 py-1 rounded">PUT /api/test/item/[id]</code> - Update item</li>
                      <li>• <code className="bg-white px-2 py-1 rounded">DELETE /api/test/item/[id]</code> - Delete item</li>
                      <li>• <code className="bg-white px-2 py-1 rounded">GET /api/test/category/[cat]/[id]</code> - Category item</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}