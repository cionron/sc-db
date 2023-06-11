import { prisma } from "@/lib/utils/client";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const args: Prisma.SCGroupByArgs = await req.json();
    //@ts-ignore
    const result = await prisma.sC.groupBy(args);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(error);
  }
}
