"use client";

import { SC } from "@prisma/client";
import ScRow from "./sc-row";
import SCModal from "./sc-modal";

export default function SCData({ sc }: { sc: SC[] }) {
  if (sc.length !== 0) {
    return (
      <main className="px-12 py-0">
        <SCModal />
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr className="text-center">
                <th className="text-xl">学号</th>
                <th className="text-xl">姓名</th>
                <th className="text-xl">专业</th>
                <th className="text-xl">课程号</th>
                <th className="text-xl">课程名</th>
                <th className="text-xl">学分</th>
                <th className="text-xl">成绩</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {sc.map((record) => (
                <ScRow key={record.id} record={record} />
              ))}
            </tbody>
          </table>
          <div className="divider">超过100条记录请使用综合查询</div>
        </div>
      </main>
    );
  } else
    return (
      <div className="p-12 grid grid-cols-5 gap-8 ">
        <p>没有查询到</p>
      </div>
    );
}
