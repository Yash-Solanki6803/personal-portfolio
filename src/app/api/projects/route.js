import prisma from "@/utils/connect";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

//Get  Projects

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  let projectPage = searchParams.get("projectPage") || 1;
  const POST_PER_PAGE = 3;

  try {
    const [projects, totalProjects] = await prisma.$transaction([
      prisma.project.findMany({
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (projectPage - 1),
        orderBy: { createdAt: "desc" },
        include: {
          Tags: {
            select: {
              tag: true,
            },
          },
        },
      }),
      prisma.project.count(),
    ]);
    return new NextResponse(
      JSON.stringify(
        { projects, totalProjects, message: "Successfully fetched Projects" },
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

//Create a Project
export const POST = async (req) => {
  const { title, content, thumbnailSrc, thumbnailAlt, slug, tags } =
    await req.json();

  //check cookies
  const authToken = cookies().get("yash-portfolio-auth")?.value || "";
  if (authToken !== process.env.AUTH_TOKEN) {
    return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  //create tags array

  const Tags = tags.map((tag) => {
    const newTag = {
      assignedBy: "Bob",
      assignedAt: new Date(),
      tag: {
        connectOrCreate: {
          where: {
            slug: tag.slug,
          },
          create: {
            title: tag.title,
            slug: tag.slug,
          },
        },
      },
    };

    return newTag;
  });

  //   console.dir(Tags, { depth: null });

  try {
    const project = await prisma.project.create({
      data: {
        title,
        content,
        thumbnailSrc,
        thumbnailAlt,
        slug,
        Tags: {
          create: Tags,
        },
      },
    });
    return new NextResponse(
      JSON.stringify(
        {
          project,
          message: "Project created successfully",
        },
        { status: 200 }
      )
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Error Creating Project" }),
      { status: 500 }
    );
  }

  // return new NextResponse(JSON.stringify({ message: "Creating Project" }), {
  //   status: 200,
  // });
};
