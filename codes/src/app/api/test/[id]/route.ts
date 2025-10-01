import { NextRequest, NextResponse } from 'next/server';

interface RouteParams {
  params: { id: string };
}

export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { id } = params;
    const { searchParams } = new URL(request.url);
    
    // Simulate data based on ID
    const mockData = {
      id,
      name: `Test Item ${id}`,
      category: searchParams.get('category') || 'general',
      status: 'active',
      created: new Date().toISOString(),
      details: {
        isNumeric: !isNaN(Number(id)),
        length: id.length,
        hasSpecialChars: /[^a-zA-Z0-9]/.test(id),
        uppercase: id.toUpperCase(),
        lowercase: id.toLowerCase()
      }
    };

    // Add filtering based on query parameters
    const include = searchParams.get('include');
    const fields = searchParams.get('fields');
    
    let response = {
      message: `Retrieved test data for ID: ${id}`,
      data: mockData,
      queryParameters: Object.fromEntries(searchParams.entries()),
      metadata: {
        timestamp: new Date().toISOString(),
        method: request.method,
        route: `/api/test/${id}`
      }
    };

    // Apply field filtering if requested
    if (fields) {
      const requestedFields = fields.split(',');
      const filteredData: any = { id: mockData.id };
      requestedFields.forEach(field => {
        if (field in mockData) {
          filteredData[field] = (mockData as any)[field];
        }
      });
      response.data = filteredData;
    }

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { 
        error: 'Failed to retrieve test data',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { id } = params;
    const body = await request.json();
    const { searchParams } = new URL(request.url);
    
    // Simulate updating data
    const updatedData = {
      id,
      ...body,
      updated: new Date().toISOString(),
      version: parseInt(searchParams.get('version') || '1') + 1
    };

    const response = {
      message: `Updated test data for ID: ${id}`,
      data: updatedData,
      queryParameters: Object.fromEntries(searchParams.entries()),
      metadata: {
        timestamp: new Date().toISOString(),
        method: request.method,
        route: `/api/test/${id}`
      }
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { 
        error: 'Failed to update test data',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 400 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { id } = params;
    const { searchParams } = new URL(request.url);
    
    const force = searchParams.get('force') === 'true';
    
    if (!force && id === 'protected') {
      return NextResponse.json(
        { 
          error: 'Cannot delete protected item',
          message: 'Use force=true parameter to override protection'
        },
        { status: 403 }
      );
    }

    const response = {
      message: `Deleted test data for ID: ${id}`,
      deletedId: id,
      queryParameters: Object.fromEntries(searchParams.entries()),
      metadata: {
        timestamp: new Date().toISOString(),
        method: request.method,
        route: `/api/test/${id}`,
        forced: force
      }
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { 
        error: 'Failed to delete test data',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { id } = params;
    const body = await request.json();
    const { searchParams } = new URL(request.url);
    
    // Simulate partial update
    const patchedData = {
      id,
      patches: body,
      patchedAt: new Date().toISOString(),
      operation: 'partial_update'
    };

    const response = {
      message: `Partially updated test data for ID: ${id}`,
      data: patchedData,
      queryParameters: Object.fromEntries(searchParams.entries()),
      metadata: {
        timestamp: new Date().toISOString(),
        method: request.method,
        route: `/api/test/${id}`
      }
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { 
        error: 'Failed to patch test data',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 400 }
    );
  }
}