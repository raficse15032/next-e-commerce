import { NextRequest, NextResponse } from 'next/server';

interface RouteParams {
  params: { 
    category: string;
    id: string;
  };
}

export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { category, id } = params;
    const { searchParams } = new URL(request.url);
    
    // Simulate category-specific data
    const categoryData = {
      electronics: { type: 'product', features: ['warranty', 'tech-support'] },
      clothing: { type: 'apparel', features: ['size-guide', 'return-policy'] },
      books: { type: 'media', features: ['preview', 'reviews'] },
      default: { type: 'general', features: ['basic-support'] }
    };

    const categoryInfo = categoryData[category as keyof typeof categoryData] || categoryData.default;
    
    // Simulate filtering and sorting based on query parameters
    const sort = searchParams.get('sort') || 'id';
    const order = searchParams.get('order') || 'asc';
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = parseInt(searchParams.get('offset') || '0');
    
    const mockItem = {
      id,
      category,
      name: `${category} item ${id}`,
      ...categoryInfo,
      price: category === 'electronics' ? 299.99 : 
             category === 'clothing' ? 49.99 : 
             category === 'books' ? 19.99 : 99.99,
      inStock: Math.random() > 0.3,
      rating: parseFloat((Math.random() * 2 + 3).toFixed(1)), // 3.0 - 5.0
      created: new Date().toISOString(),
      tags: [category, id.includes('pro') ? 'premium' : 'standard']
    };

    const response = {
      message: `Retrieved ${category} item with ID: ${id}`,
      data: mockItem,
      queryParameters: {
        sort,
        order,
        limit,
        offset,
        ...Object.fromEntries(searchParams.entries())
      },
      pagination: {
        limit,
        offset,
        total: 100, // Mock total count
        hasMore: offset + limit < 100
      },
      metadata: {
        timestamp: new Date().toISOString(),
        method: request.method,
        route: `/api/test/category/${category}/${id}`,
        categoryType: categoryInfo.type
      }
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { 
        error: 'Failed to retrieve category item',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { category, id } = params;
    const body = await request.json();
    const { searchParams } = new URL(request.url);
    
    // Validate category
    const validCategories = ['electronics', 'clothing', 'books', 'home', 'sports'];
    if (!validCategories.includes(category)) {
      return NextResponse.json(
        { 
          error: 'Invalid category',
          validCategories,
          provided: category
        },
        { status: 400 }
      );
    }

    // Create new item in category
    const newItem = {
      id,
      category,
      ...body,
      created: new Date().toISOString(),
      status: 'active'
    };

    const response = {
      message: `Created new ${category} item with ID: ${id}`,
      data: newItem,
      queryParameters: Object.fromEntries(searchParams.entries()),
      metadata: {
        timestamp: new Date().toISOString(),
        method: request.method,
        route: `/api/test/category/${category}/${id}`
      }
    };

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { 
        error: 'Failed to create category item',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 400 }
    );
  }
}

// Bulk operations endpoint
export async function PUT(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { category, id } = params;
    const body = await request.json();
    const { searchParams } = new URL(request.url);
    
    const bulk = searchParams.get('bulk') === 'true';
    
    if (bulk) {
      // Handle bulk update
      const bulkResults = {
        updated: [id],
        failed: [],
        total: 1,
        category
      };
      
      return NextResponse.json({
        message: `Bulk updated items in category: ${category}`,
        results: bulkResults,
        queryParameters: Object.fromEntries(searchParams.entries())
      }, { status: 200 });
    } else {
      // Handle single update
      const updatedItem = {
        id,
        category,
        ...body,
        updated: new Date().toISOString()
      };

      return NextResponse.json({
        message: `Updated ${category} item: ${id}`,
        data: updatedItem,
        queryParameters: Object.fromEntries(searchParams.entries())
      }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(
      { 
        error: 'Failed to update category item',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 400 }
    );
  }
}