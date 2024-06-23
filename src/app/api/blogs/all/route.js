import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// get all blogs
export const GET = async (req) => {
  //check cookies
  const authToken = req.cookies.get("yash-portfolio-auth")?.value || "";
  console.log("authToken:", authToken);
  if (authToken !== process.env.AUTH_TOKEN) {
    return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  try {
    const blogs = await prisma.blog.findMany({
      orderBy: { createdAt: "desc" },
    });
    return new NextResponse(JSON.stringify(blogs), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
