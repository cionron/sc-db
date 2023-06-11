import { allFalseSelect } from "@/components/select-checkbox";
import { Prisma } from "@prisma/client";
import { cache, useState } from "react";
import {
  FieldsSelect,
  whereCnoPayload,
  whereCreditPayload
} from "../sc-query";
import WhereCompose, { WhereCollect } from "../../components/where-compose";

interface props {
  setData: any;
}

const getCourse = cache((input: Prisma.CFindManyArgs) =>
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/queryCourse`, {
    method: "POST",
    body: JSON.stringify(input),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json())
);

export default function CourseFilter({ setData }: props) {
  const [whereCno, setWhereCno] = useState<Prisma.StringFilter[]>([]);
  const [whereCredit, setWhereCredit] = useState<Prisma.DecimalFilter[]>([]);

  const whereCourse: WhereCollect = {
    whereCno: whereCno,
    whereCredit: whereCredit,
    setWhereCno: setWhereCno,
    setWhereCredit: setWhereCredit,
    whereSex: [],
    whereAge: [],
    whereDept: [],
    whereEmail: [],
    wherePhoneNum: [],
    whereAddress: [],
    whereCname: [],
    whereCpno: [],
    whereCpname: [],
    whereCpcredit: [],
    whereCnextno: [],
    whereCnextname: [],
    whereCnextcredit: [],
    whereGrade: [],
    setWhereSex: undefined,
    setWhereAge: undefined,
    setWhereDept: undefined,
    setWhereEmail: undefined,
    setWherePhoneNum: undefined,
    setWhereAddress: undefined,
    setWhereCname: undefined,
    setWhereCpno: undefined,
    setWhereCpname: undefined,
    setWhereCpcredit: undefined,
    setWhereCnextno: undefined,
    setWhereCnextname: undefined,
    setWhereCnextcredit: undefined,
    setWhereGrade: undefined,
    whereSno: [],
    whereSname: [],
    setWhereSno: undefined,
    setWhereSname: undefined,
  };
  const coursesWhereVisible: FieldsSelect = {
    ...allFalseSelect,
    cno: true,
    credit: true,
  };

  const handleQuery = async () => {
    const whereInput: Prisma.CWhereInput = {
      AND: [
        ...whereCno.map(whereCnoPayload),
        ...whereCredit.map(whereCreditPayload),
      ],
    };
    setData(
      await getCourse({
        where: whereInput,
        orderBy: {
          cno: "asc",
        },
      })
    );
  };

  async function handleRefresh() {
    setData(
      await getCourse({
        orderBy: {
          cno: "asc",
        },
      })
    );
  }

  return (
    <div className="rounded-2xl bg-white m-4 py-4 shadow-xl">
      <WhereCompose
        visible={coursesWhereVisible}
        compose={whereCourse}
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
