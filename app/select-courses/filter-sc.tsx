import { allFalseSelect } from "@/components/select-checkbox";
import { Prisma } from "@prisma/client";
import { cache, useState } from "react";
import {
  FieldsSelect,
  whereCnamePayload,
  whereCnoPayload,
  whereDeptPayload,
  whereSnoPayload,
} from "../sc-query";
import WhereCompose, { WhereCollect } from "../../components/where-compose";

interface props {
  setData: any;
}

const getSC = cache((input: Prisma.SCFindManyArgs) =>
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/querySC`, {
    method: "POST",
    body: JSON.stringify(input),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json())
);

export default function SCFilter({ setData }: props) {
  const [whereSno, setWhereSno] = useState<Prisma.StringFilter[]>([]);
  const [whereDept, setWhereDept] = useState<Prisma.EnumMajorFilter[]>([]);
  const [whereCno, setWhereCno] = useState<Prisma.StringFilter[]>([]);
  const [whereCname, setWhereCname] = useState<Prisma.EnumCourseFilter[]>([]);

  const whereSC: WhereCollect = {
    whereSno: whereSno,
    whereDept: whereDept,
    whereCno: whereCno,
    whereCname: whereCname,
    setWhereSno: setWhereSno,
    setWhereDept: setWhereDept,
    setWhereCno: setWhereCno,
    setWhereCname: setWhereCname,
    whereSex: [],
    whereAge: [],
    whereEmail: [],
    wherePhoneNum: [],
    whereAddress: [],
    whereCredit: [],
    whereCpno: [],
    whereCpname: [],
    whereCpcredit: [],
    whereCnextno: [],
    whereCnextname: [],
    whereCnextcredit: [],
    whereGrade: [],
    setWhereSex: undefined,
    setWhereAge: undefined,
    setWhereEmail: undefined,
    setWherePhoneNum: undefined,
    setWhereAddress: undefined,
    setWhereCredit: undefined,
    setWhereCpno: undefined,
    setWhereCpname: undefined,
    setWhereCpcredit: undefined,
    setWhereCnextno: undefined,
    setWhereCnextname: undefined,
    setWhereCnextcredit: undefined,
    setWhereGrade: undefined,
    whereSname: [],
    setWhereSname: undefined,
  };
  const SCWhereVisible: FieldsSelect = {
    ...allFalseSelect,
    sno: true,
    dept: true,
    cno: true,
    cname: true,
  };

  const handleQuery = async () => {
    const whereInput: Prisma.SCWhereInput = {
      AND: [...whereSno.map(whereSnoPayload), ...whereCno.map(whereCnoPayload)],
      snoToS: {
        AND: [...whereDept.map(whereDeptPayload)],
      },
      cnoToC: {
        AND: [...whereCname.map(whereCnamePayload)],
      },
    };
    setData(
      await getSC({
        select: {
          id: true,
          sno: true,
          cno: true,
          grade: true,
          snoToS: {
            select: {
              sname: true,
              dept: true,
            },
          },
          cnoToC: {
            select: {
              cname: true,
              credit: true,
            },
          },
        },
        where: whereInput,
        orderBy: {
          updatedAt: "desc",
        },
        take: 100,
      })
    );
  };

  async function handleRefresh() {
    setData(
      await getSC({
        select: {
          id: true,
          sno: true,
          cno: true,
          grade: true,
          snoToS: {
            select: {
              sname: true,
              dept: true,
            },
          },
          cnoToC: {
            select: {
              cname: true,
              credit: true,
            },
          },
        },
        orderBy: {
          updatedAt: "desc",
        },
        take: 100,
      })
    );
  }

  return (
    <div className="rounded-2xl bg-white m-4 py-4 shadow-xl">
      <WhereCompose
        visible={SCWhereVisible}
        compose={whereSC}
        className="grid grid-cols-2 "
      />
      <div className="grid grid-cols-4">
        <button
          className="btn btn-sm btn-wide text-lg mt-3 mx-3 col-start-2"
          onClick={handleRefresh}
        >
          刷新
        </button>
        <button
          className="btn btn-sm btn-wide btn-success text-lg mt-3 mx-3 col-start-3"
          onClick={handleQuery}
        >
          查询
        </button>
      </div>
    </div>
  );
}
