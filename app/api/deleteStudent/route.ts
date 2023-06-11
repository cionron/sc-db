import { prisma } from "@/lib/utils/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const student = await req.json();
  const result = await prisma.s.delete({
    where: {
      id: student.id,
    },
  });
  return NextResponse.json(result);
}
