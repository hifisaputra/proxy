import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { url, method, headers, data } = body;

  console.log(body);

  const response = await fetch(url, {
    method,
    headers,
    body: JSON.stringify(data),
  });

  const responseBody = await response.json();

  return NextResponse.json(responseBody);
}
