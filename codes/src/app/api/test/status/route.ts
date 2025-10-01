import { NextResponse } from 'next/server';

export async function GET() {
  const apiEndpoints = [
    {
      path: '/api/test',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      description: 'Basic test API with query parameters',
      example: '/api/test?name=John&age=25&tags=demo&tags=test'
    },
    {
      path: '/api/test/[id]',
      methods: ['GET', 'PUT', 'DELETE', 'PATCH'],
      description: 'Dynamic API with ID parameter',
      example: '/api/test/123?fields=name,category&include=details'
    },
    {
      path: '/api/test/[category]/[id]',
      methods: ['GET', 'POST', 'PUT'],
      description: 'Category-based API with multiple parameters',
      example: '/api/test/electronics/123?sort=price&order=desc&limit=5'
    }
  ];

  const response = {
    message: 'Test API Status - All endpoints are operational',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    endpoints: apiEndpoints,
    features: {
      queryParameters: 'Supported on all endpoints',
      urlParameters: 'Dynamic routing with [id] and [category]/[id]',
      httpMethods: 'GET, POST, PUT, DELETE, PATCH',
      responseFormat: 'JSON',
      errorHandling: 'Structured error responses'
    },
    examples: {
      basicQuery: '/api/test?name=value&key=data',
      dynamicRoute: '/api/test/123',
      categoryRoute: '/api/test/electronics/product-456',
      multipleParams: '/api/test?tags=sale&tags=featured&category=electronics'
    }
  };

  return NextResponse.json(response, { 
    status: 200,
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json'
    }
  });
}