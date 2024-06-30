import prisma from "@/utils/connect";
import { revalidatePath } from "next/cache";
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

export const PUT = async (req, { params }) => {
  const { slug } = params;
  const data = await req.json();
  try {
    const newsArticle = await prisma.newsArticle.update({
      where: { slug },
      data: data,
    });
    if (newsArticle) {
      revalidatePath(`/gallery/news/${slug}`);
    }
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

export const DELETE = async (req, { params }) => {
  const { slug } = params;
  try {
    const newsArticle = await prisma.newsArticle.delete({
      where: { slug },
    });
    if (newsArticle) {
      revalidatePath(`/`);
    }
    return new NextResponse(
      JSON.stringify(
        { newsArticle, message: "Successfully Deleted Article" },
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
