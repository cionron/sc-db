import { prisma } from "@/lib/utils/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const students = await prisma.sC.findUnique({
    select: {
      sno: true,
      cno: true,
      grade: true,
      snoToS: {
        select: {
          sname: true,
          dept: true,
        },
      },
      cnoToC: {
        select: {
          cname: true,
          credit: true,
        },
      },
    },
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(students);
}
