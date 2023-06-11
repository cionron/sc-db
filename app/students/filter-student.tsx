import { allFalseSelect } from "@/components/select-checkbox";
import { Prisma } from "@prisma/client";
import { cache, useState } from "react";
import { FieldsSelect, whereSnamePayload, whereSnoPayload } from "../sc-query";
import WhereCompose, { WhereCollect } from "../../components/where-compose";

interface props {
  setData: any;
}

const getStudents = cache((input: Prisma.SFindManyArgs) =>
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/queryStudent`, {
    method: "POST",
    body: JSON.stringify(input),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json())
);

export default function StudentFilter({ setData }: props) {
  const [whereSno, setWhereSno] = useState<Prisma.StringFilter[]>([]);
  const [whereSname, setWhereSname] = useState<Prisma.StringFilter[]>([]);

  const whereStudents: WhereCollect = {
    whereSno: whereSno,
    whereSname: whereSname,
    setWhereSno: setWhereSno,
    setWhereSname: setWhereSname,
    whereSex: [],
    whereAge: [],
    whereDept: [],
    whereEmail: [],
    wherePhoneNum: [],
    whereAddress: [],
    whereCno: [],
    whereCname: [],
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
    setWhereDept: undefined,
    setWhereEmail: undefined,
    setWherePhoneNum: undefined,
    setWhereAddress: undefined,
    setWhereCno: undefined,
    setWhereCname: undefined,
    setWhereCredit: undefined,
    setWhereCpno: undefined,
    setWhereCpname: undefined,
    setWhereCpcredit: undefined,
    setWhereCnextno: undefined,
    setWhereCnextname: undefined,
    setWhereCnextcredit: undefined,
    setWhereGrade: undefined,
  };
  const studentsWhereVisible: FieldsSelect = {
    ...allFalseSelect,
    sno: true,
    sname: true,
  };

  const handleQuery = async () => {
    const whereInput: Prisma.SWhereInput = {
      AND: [
        ...whereSno.map(whereSnoPayload),
        ...whereSname.map(whereSnamePayload),
      ],
    };
    setData(
      await getStudents({
        where: whereInput,
        orderBy: {
          updatedAt: "desc",
        },
        take: 49,
      })
    );
  };

  async function handleRefresh() {
    setData(
      await getStudents({
        orderBy: {
          updatedAt: "desc",
        },
        take: 49,
      })
    );
  }

  return (
    <div className="rounded-2xl bg-white m-4 py-4 shadow-xl">
      <WhereCompose
        visible={studentsWhereVisible}
        compose={whereStudents}
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
