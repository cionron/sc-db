import { prisma } from "@/lib/utils/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const students = await prisma.s.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(students);
}
