import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { slug } = params;
  //fetch the blog and increment the views
  try {
    const blog = await prisma.blog.update({
      where: { slug },
      data: {
        views: {
          increment: 1,
        },
      },
    });
    return new NextResponse(JSON.stringify(blog, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
