"use client";

import { translateCourse, translateMajor } from "@/lib/utils/translate";
import { SC } from "@prisma/client";
import Link from "next/link";
import { useState, useEffect } from "react";

export const fetchSCById = async (id: string | number) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/querySC/${id}`);
  return res.json();
};

export default function ScRow({ record }: { record: SC }) {
  const [sno, setSno] = useState("");
  const [sname, setSname] = useState("");
  const [dept, setDept] = useState("");
  const [cno, setCno] = useState("");
  const [cname, setCname] = useState("");
  const [credit, setCredit] = useState<number | undefined>(undefined);
  const [grade, setGrade] = useState<number | undefined>(undefined);

  useEffect(() => {
    let componentMounted = true;
    if (record.id != null) {
      fetchSCById(record.id).then((sc) => {
        if (componentMounted) {
          setSno(sc.sno);
          setCno(sc.cno);
          setSname(sc.snoToS.sname);
          setDept(translateMajor(sc.snoToS.dept));
          setCname(translateCourse(sc.cnoToC.cname));
          setCredit(sc.cnoToC.credit);
          if (sc.grade !== null) {
            setGrade(sc.grade);
          } else {
            setGrade(undefined);
          }
        }
      });
    }
    return () => {
      componentMounted = false;
    };
  }, [record]);
  return (
    <tr className="text-center">
      <td>
        <div className="text-lg font-bold ">{sname}</div>
      </td>
      <td>
        <div className="">{sno}</div>
      </td>
      <td>
        <div className="">{dept}</div>
      </td>
      <td>
        <div className="text-lg font-bold">{cno} </div>
      </td>
      <td>
        <div className="">{cname}</div>
      </td>
      <td>
        <div className="">{credit}</div>
      </td>
      <td>
        <div className="">{grade}</div>
      </td>
      <th>
        <Link href={`/select-courses/${record.id}`} passHref legacyBehavior>
          <button className="btn">详情</button>
        </Link>
      </th>
    </tr>
  );
}
