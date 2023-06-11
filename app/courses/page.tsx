"use client";
import { cache, use, useState } from "react";
import CourseData from "./course-data";
import { C } from "@prisma/client";
import CourseFilter from "./fiter-course";

function makeQueryClient() {
  const fetchMap = new Map<string, Promise<any>>();
  return function queryClient<QueryResult>(
    name: string,
    query: () => Promise<QueryResult>
  ): Promise<QueryResult> {
    if (!fetchMap.has(name)) {
      fetchMap.set(name, query());
    }
    return fetchMap.get(name)!;
  };
}
const queryClient = makeQueryClient();

export default function CourseHome() {
  const courses = use(
    queryClient<C[]>("courses", () =>
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/queryCourse`).then((res) => res.json())
    )
  );
  const [data, setData] = useState(courses);
  return (
    <>
      <CourseFilter setData={setData} />
      <CourseData courses={data} />
    </>
  );
}
