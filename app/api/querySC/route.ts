import { prisma } from "@/lib/utils/client";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const sc = await prisma.sC.findMany({
    orderBy: {
      updatedAt: "desc",
    },
    take: 25,
  });
  return NextResponse.json(sc);
}

export async function POST(req: NextRequest) {
  try {
    const args: Prisma.SCFindManyArgs = await req.json();
    const sc = await prisma.sC.findMany(args);
    return NextResponse.json(sc);
  } catch (error) {
    return NextResponse.json(error);
  }
}
