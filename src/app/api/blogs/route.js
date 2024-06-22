import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  let blogPage = searchParams.get("blogPage") || 1;
  const POST_PER_PAGE = 3;
  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (blogPage - 1),
    orderBy: { createdAt: "desc" },
  };
  try {
    const [blogs, totalBlogs] = await prisma.$transaction([
      prisma.blog.findMany(query),
      prisma.blog.count(),
    ]);
    // blogs.reverse();
    return new NextResponse(
      JSON.stringify({ blogs, totalBlogs }, { status: 200 })
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

export const POST = async (req) => {
  const { title, content, thumbnailSrc, thumbnailAlt, slug } = await req.json();
  try {
    const response = await prisma.blog.create({
      data: {
        title,
        content,
        thumbnailSrc,
        thumbnailAlt,
        slug,
      },
    });
    return new NextResponse(
      JSON.stringify(
        {
          response,
          message: "Blog created successfully",
        },
        { status: 200 }
      )
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
