import prisma from "@/utils/connect";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

//Get the latest 3 news articles

export const GET = async (req) => {
  try {
    const newsArticles = await prisma.newsArticle.findMany({
      take: 3,
      orderBy: {
        createdAt: "desc",
      },
    });
    return new NextResponse(JSON.stringify({ newsArticles }, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

// create a news article

export const POST = async (req) => {
  const { title, content, slug } = await req.json();

  //check cookies
  const authToken = cookies().get("yash-portfolio-auth")?.value || "";
  if (authToken !== process.env.AUTH_TOKEN) {
    return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  try {
    const response = await prisma.newsArticle.create({
      data: {
        title,
        slug,
        content,
      },
    });
    return new NextResponse(
      JSON.stringify(
        {
          response,
          message: "News Article created successfully",
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
