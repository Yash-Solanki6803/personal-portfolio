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
