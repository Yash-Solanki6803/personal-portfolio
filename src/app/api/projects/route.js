import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

//Get all Projects

export const GET = async (req) => {
  try {
    const projects = await prisma.project.findMany({
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

//Create a Project
export const POST = async (req) => {
  const { title, content, thumbnailSrc, thumbnailAlt, slug, tags } =
    await req.json();

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
};
