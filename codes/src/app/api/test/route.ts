import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Get query parameters from URL
    const { searchParams } = new URL(request.url);
    
    // Extract common query parameters
    const name = searchParams.get('name');
    const age = searchParams.get('age');
    const category = searchParams.get('category');
    const tags = searchParams.getAll('tags'); // Get multiple values for same parameter
    
    // Get all parameters as an object
    const allParams: { [key: string]: string | string[] } = {};
    searchParams.forEach((value, key) => {
      if (allParams[key]) {
        // If key already exists, convert to array or add to existing array
        if (Array.isArray(allParams[key])) {
          (allParams[key] as string[]).push(value);
        } else {
          allParams[key] = [allParams[key] as string, value];
        }
      } else {
        allParams[key] = value;
      }
    });

    // Simulate some processing based on parameters
    const response = {
      message: 'Test API endpoint successfully called',
      timestamp: new Date().toISOString(),
      queryParameters: allParams,
      processedData: {
        user: name ? {
          name,
          age: age ? parseInt(age) : null,
          isAdult: age ? parseInt(age) >= 18 : null
        } : null,
        category: category ? {
          name: category,
          type: category.includes('electronics') ? 'tech' : 'general'
        } : null,
        tags: tags.length > 0 ? {
          count: tags.length,
          list: tags,
          formatted: tags.join(', ')
        } : null
      },
      metadata: {
        method: request.method,
        url: request.url,
        userAgent: request.headers.get('user-agent'),
        totalParams: Object.keys(allParams).length
      }
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { searchParams } = new URL(request.url);
    
    const response = {
      message: 'Test POST endpoint called',
      timestamp: new Date().toISOString(),
      receivedData: body,
      queryParameters: Object.fromEntries(searchParams.entries()),
      metadata: {
        method: request.method,
        contentType: request.headers.get('content-type')
      }
    };

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { 
        error: 'Invalid JSON body',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 400 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { searchParams } = new URL(request.url);
    
    const response = {
      message: 'Test PUT endpoint called',
      timestamp: new Date().toISOString(),
      updatedData: body,
      queryParameters: Object.fromEntries(searchParams.entries())
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { 
        error: 'Invalid request',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 400 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { error: 'ID parameter is required for deletion' },
        { status: 400 }
      );
    }

    const response = {
      message: `Test DELETE endpoint called for ID: ${id}`,
      timestamp: new Date().toISOString(),
      deletedId: id,
      queryParameters: Object.fromEntries(searchParams.entries())
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { 
        error: 'Delete operation failed',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}