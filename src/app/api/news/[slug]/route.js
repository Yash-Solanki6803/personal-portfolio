import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { slug } = params;
  //fetch the News Article and increment the views
  try {
    const newsArticle = await prisma.newsArticle.update({
      where: { slug },
      data: {
        views: {
          increment: 1,
        },
      },
    });
    return new NextResponse(JSON.stringify(newsArticle, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
