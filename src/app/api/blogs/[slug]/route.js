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

export const PUT = async (req, { params }) => {
  const { slug } = params;
  const data = await req.json();
  if (!data)
    return new NextResponse(
      JSON.stringify(
        {
          message: "Nothing to update",
        },
        {
          status: 500,
        }
      )
    );
  try {
    const blog = await prisma.blog.update({
      where: { slug },
      data: data,
    });
    return new NextResponse(
      JSON.stringify({ blog, message: "Successfully Updated" }, { status: 200 })
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

export const DELETE = async (req, { params }) => {
  const { slug } = params;
  try {
    const blog = await prisma.blog.delete({
      where: { slug },
    });
    return new NextResponse(
      JSON.stringify({ blog, message: "Successfully Deleted" }, { status: 200 })
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
