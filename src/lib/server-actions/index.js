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
  if (response) {
    return {
      status: 200,
      message: "Blog created successfully",
    };
  }
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

export async function getAllBlogs(page = 1) {
  const BLOG_PER_PAGE = 3;
  const blogs = await prisma.blog.findMany({
    skip: (page - 1) * BLOG_PER_PAGE,
    take: BLOG_PER_PAGE,
  });
  const totalBlogs = await prisma.blog.count();
  // const blogs = await prisma.blog.findMany();
  return {
    blogs,
    totalBlogs,
  };
}
