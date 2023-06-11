import { prisma } from "@/lib/utils/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const data = await req.json();
  const sc = await prisma.sC.update({
    where: {
      id: Number(params.id),
    },
    data: data,
  });
  return NextResponse.json(sc);
}
