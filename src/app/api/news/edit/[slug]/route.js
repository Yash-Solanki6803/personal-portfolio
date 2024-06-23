import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// Api to edit an News Article

export const PUT = async (req, { params }) => {
  const { slug } = params;
  const data = await req.json();
  try {
    const newsArticle = await prisma.newsArticle.update({
      where: { slug },
      data: data,
    });
    return new NextResponse(
      JSON.stringify(
        { newsArticle, message: "Successfully Updated" },
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
