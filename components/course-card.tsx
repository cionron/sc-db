"use client";

import type {} from "@/lib/types";
import { translateCourse } from "@/lib/utils/translate";
import { C } from "@prisma/client";

export default function CourseCard({ course }: { course: C }) {
  return (
    <div className="card w-96 h-48 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-3xl font-black">
          {translateCourse(course.cname)}
        </h2>
        <div className="flex text-2xl justify-between">
          <span className="flex font-black">{course.cno}</span>
          <span className="flex ">{course.credit.toString()} 学分</span>
        </div>
        <div className="card-actions justify-end">
          <button className="btn ">课程详情</button>
        </div>
      </div>
    </div>
  );
}
