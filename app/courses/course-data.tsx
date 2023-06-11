"use client";

import CourseCard from "@/components/course-card";
import { C } from "@prisma/client";

export default function CourseData({ courses }: { courses: C[] }) {
  if (courses.length !== 0) {
    return (
      <div className="px-12 py-8">
        <div className="grid grid-cols-3 gap-12 ">
          {courses.map((course) => (
            <CourseCard key={course.cno} course={course} />
          ))}
        </div>
      </div>
    );
  } else
    return (
      <div className="p-12 grid grid-cols-5 gap-8 ">
        <p>没有查询到</p>
      </div>
    );
}
