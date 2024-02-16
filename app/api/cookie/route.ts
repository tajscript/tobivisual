import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const token = request.cookies.get('token')?.value

    return NextResponse.json({
        message: "Fetched",
        success: true,
        token
    }, {status: 200})
}