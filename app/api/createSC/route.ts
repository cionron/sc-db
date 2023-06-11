import { prisma } from "@/lib/utils/client";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const sc: Prisma.SCCreateInput = await req.json();
  await prisma.sC.create({
    data: sc,
  });
  return NextResponse.json({ success: true });
}
