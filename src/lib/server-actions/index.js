"use server";

import { cookies } from "next/headers";

export async function handleAuth(formData) {
  const secretKey = formData.get("secretKey");
  const validSecretKey = process.env.SECRET_KEY;
  if (secretKey === validSecretKey) {
    console.log("Valid");
    cookies().set("yash-portfolio-auth", process.env.AUTH_TOKEN);
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
