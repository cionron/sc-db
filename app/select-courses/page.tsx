"use client";

import { use, useState } from "react";
import SCData from "../select-courses/sc-data";
import SCFilter from "./filter-sc";
import { SC } from "@prisma/client";

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

export default function SCHome() {
  const sc: SC[] = use(
    queryClient<SC[]>("sc", () =>
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/querySC`).then((res) => res.json())
    )
  );
  const [data, setData] = useState<SC[]>(sc);

  return (
    <>
      <SCFilter setData={setData} />
      <SCData sc={data} />
    </>
  );
}
