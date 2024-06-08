import { NextResponse } from "next/server";

export async function POST(request) {
  const { secretKey } = await request.json();
  const validSecretKey = process.env.SECRET_KEY;

  if (secretKey === validSecretKey) {
    return NextResponse.json({ message: "Authorized" }, { status: 200 });
  } else {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
}
