"use client";
import { Student } from "@/lib/types";
import { use, useState } from "react";
import UserData from "./student-data";
import StudentFilter from "./filter-student";

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

export default function StudentHome() {
  const students = use(
    queryClient<Student[]>("students", () =>
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/queryStudent`).then((res) =>
        res.json()
      )
    )
  );
  const [data, setData] = useState<Student[]>(students);

  return (
    <>
      <StudentFilter setData={setData} />
      <UserData students={data} />
    </>
  );
}
