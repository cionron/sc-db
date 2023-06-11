import { prisma } from "@/lib/utils/client";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const students = await prisma.s.findMany({
    orderBy: {
      updatedAt: "desc",
    },
    take: 49,
  });
  return NextResponse.json(students);
}

export async function POST(req: NextRequest) {
  try {
    const args: Prisma.SFindManyArgs = await req.json();
    const students = await prisma.s.findMany(args);
    return NextResponse.json(students);
  } catch (error) {
    return NextResponse.json(error);
  }
}
