import { prisma } from "@/lib/utils/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const student = await req.json();
  await prisma.s.create({
    data: student,
  });
  return NextResponse.json({ success: true });
}
