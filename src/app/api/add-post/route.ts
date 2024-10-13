import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export const POST = async (request: NextRequest) => {
  const res = await request.json();

  const result = await prisma.post.create({
    data: res,
  });

  return NextResponse.json({ data: result });
};
