import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  return new NextResponse(
    JSON.stringify(
      {
        message: "Hello World",
      },
      {
        status: 200,
      }
    )
  );
};
