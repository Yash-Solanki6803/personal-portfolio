import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// export const PUT = async (req, { params }) => {
//   const { slug } = params;

//   const data = await req.json();

//   try {
//     const project = await prisma.project.update({
//       where: { slug },
//       data: data,
//     });
//     return new NextResponse(
//       JSON.stringify(
//         { project, message: "Successfully Updated" },
//         { status: 200 }
//       )
//     );
//   } catch (err) {
//     console.log(err);
//     return new NextResponse(
//       JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
//     );
//   }
// };

export const PUT = async (req, { params }) => {
  const { slug } = params;
  //   const { title, content, thumbnailSrc, thumbnailAlt, slug, tags } =
  //     await req.json();

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
