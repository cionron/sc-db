"use client";

import type { Student } from "@/lib/types";
import Link from "next/link";

export default function UserCircle({ user }: { user: Student }) {
  return (
    <Link href={`/students/${user.id}`} passHref legacyBehavior>
      <button className="btn btn-circle w-24 h-24">
        <span className="text-xl">{user.sname}</span>
      </button>
    </Link>
  );
}
