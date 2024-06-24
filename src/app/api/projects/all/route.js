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
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        Tags: {
          select: {
            tag: true,
          },
        },
      },
    });

    return new NextResponse(
      JSON.stringify(
        { projects, message: "Successfully fetched Projects" },
        { status: 200 }
      )
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Error Fetching Projects" }),
      { status: 500 }
    );
  }
};
