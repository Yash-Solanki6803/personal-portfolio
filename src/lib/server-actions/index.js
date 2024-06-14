"use server";

import prisma from "@/utils/connect";

export async function authorize(formData) {
  const secretkey = formData.get("secretkey");
  const validSecretKey = process.env.SECRET_KEY;
  if (secretkey === validSecretKey) {
    console.log("Valid");
    return {
      status: 200,
      authorized: true,
    };
  } else {
    console.log("Invalid");
    return {
      status: 401,
      authorized: false,
    };
  }
}

export async function createBlog(data) {
  const { title, content, thumbnailSrc, thumbnailAlt, slug } = data;
  const response = await prisma.blog.create({
    data: {
      title,
      content,
      thumbnailSrc,
      thumbnailAlt,
      slug,
    },
  });
  console.log("response:", response);
  return response;
}

export async function getSingleBlog(slug) {
  const response = await prisma.blog.findUnique({
    where: {
      slug,
    },
  });
  return response;
}
