import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { slug } = params;
  //fetch the Project and increment the views
  try {
    const project = await prisma.project.update({
      where: { slug },
      data: {
        views: {
          increment: 1,
        },
      },
      include: {
        Tags: {
          include: {
            tag: true,
          },
        },
      },
    });

    //Removing extra data from the response
    const formattedProject = {
      ...project,
      Tags: project.Tags.map((tagOnProject) => tagOnProject.tag),
    };
    return new NextResponse(JSON.stringify(formattedProject, { status: 200 }));
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

  const tags = data.tags;

  //check cookies
  const authToken = req.cookies.get("yash-portfolio-auth")?.value || "";
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
    //delete existing tags of the project so that news ones don't Clash
    await prisma.tagsOnProjects.deleteMany({
      where: { projectSlug: slug },
    });

    const project = await prisma.project.update({
      where: { slug },
      data: {
        title: data.title,
        content: data.content,
        thumbnailSrc: data.thumbnailSrc,
        thumbnailAlt: data.thumbnailAlt,
        slug: data.slug,
        Tags: {
          create: Tags,
        },
      },
    });
    return new NextResponse(
      JSON.stringify(
        {
          project,
          message: "Project updated successfully",
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

export const DELETE = async (req, { params }) => {
  const { slug } = params;

  //check cookies
  const authToken = req.cookies.get("yash-portfolio-auth")?.value || "";
  if (authToken !== process.env.AUTH_TOKEN) {
    return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  try {
    await prisma.project.delete({
      where: {
        slug,
      },
    });
    return new NextResponse(
      JSON.stringify({
        message: "Project Deleted Successfully",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify(
        {
          message: "Something went horribly wrong from the server",
        },
        {
          status: 500,
        }
      )
    );
  }
};
