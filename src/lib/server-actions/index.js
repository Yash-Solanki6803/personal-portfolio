"use server";

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
