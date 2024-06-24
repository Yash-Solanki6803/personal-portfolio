import prisma from "@/utils/connect";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  //check cookies
  const authToken = cookies().get("yash-portfolio-auth")?.value || "";
  if (authToken !== process.env.AUTH_TOKEN) {
    return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }
  try {
    const newsArticles = await prisma.newsArticle.findMany({
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
