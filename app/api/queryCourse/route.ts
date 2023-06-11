import { prisma } from "@/lib/utils/client";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const course = await prisma.c.findMany({
    orderBy: {
      cno: "asc",
    },
  });
  return NextResponse.json(course);
}
export async function POST(req: NextRequest) {
  try {
    const args: Prisma.CFindManyArgs = await req.json();
    const course = await prisma.c.findMany(args);
    return NextResponse.json(course);
  } catch (error) {
    return NextResponse.json(error);
  }
}
