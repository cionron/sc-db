import UserCircle from "./user-circle";
import { translateMajor, trnaslateGender } from "@/lib/utils/translate";

import type { Student } from "@/lib/types";

export default function UserCard({ user }: { user: Student }) {
  return (
    <div className=" rounded-full  bg-white p-2 shadow-2xl ring-[#3D4451] ring-2 hover:ring-4">
      <div className=" font-bold w-full grid grid-cols-2 items-center ">
        <UserCircle user={user} />
        <div>
          <div className="text-sm font-black">{user.sno}</div>
          <div className="text-sm">
            {trnaslateGender(user.sex)} {user.age.toString()}岁
          </div>
          <div className="text-sm">{translateMajor(user.dept)}</div>
        </div>
      </div>
    </div>
  );
}
