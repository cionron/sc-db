import { prisma } from "@/lib/utils/client";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const args: Prisma.SCAggregateArgs = await req.json();
    const aggregateResult = await prisma.sC.aggregate(args);
    return NextResponse.json(aggregateResult);
  } catch (error) {
    return NextResponse.json(error);
  }
}
