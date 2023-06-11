"use client";

import UserCard from "@/components/user-card";
import UserModal from "@/app/students/user-modal";
import { Student } from "@/lib/types";

export default function UserData({ students }: { students: Student[] }) {
  if (students.length !== 0) {
    return (
      <div className="px-12 pt-6">
        <div className="grid grid-cols-5 gap-8 ">
          <UserModal />
          {students.map((student: Student) => (
            <UserCard key={student.id} user={student} />
          ))}
        </div>
        <div className="divider my-8">多于50条记录请前往综合查询</div>
      </div>
    );
  } else
    return (
      <div className="p-12 grid grid-cols-5 gap-8 ">
        <UserModal />
        <p>没有查询到</p>
      </div>
    );
}
