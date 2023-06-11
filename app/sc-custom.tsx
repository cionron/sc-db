"use client";

import { cache, useState } from "react";
import {
  FieldsEnum,
  FieldsSelect,
  SCAggregatePayload,
  SCDistinctPayload,
  SCGroupByFieldPayload,
  SCGroupOrderByPaylod,
  SCOrderByPayload,
  SCSelectPayload,
  havingAvgPayload,
  havingCnoPayload,
  havingCountIntPayload,
  havingCountStringPayload,
  havingGradePayload,
  havingMaxPayload,
  havingMinPayload,
  havingSnoPayload,
  havingSumPayload,
  whereAddressPayload,
  whereAgePayload,
  whereCnamePayload,
  whereCnoPayload,
  whereCreditPayload,
  whereDeptPayload,
  whereEmailPayload,
  whereGradePayload,
  wherePhoneNumPayload,
  whereSexPayload,
  whereSnamePayload,
  whereSnoPayload,
} from "./sc-query";
import { Prisma } from "@prisma/client";
import SelectCheckBox, { allFalseSelect } from "@/components/select-checkbox";
import WhereCompose, { WhereCollect } from "../components/where-compose";
import OrderByToggle from "@/components/orderBy-toggle";
import FieldCheckBox from "@/components/field-checkbox";
import HavingCompose, { HavingCollect } from "./having-compose";
import GroupOrderByToggle from "@/components/group-orderBy-toggle";
import { TextField } from "@mui/material";

interface props {
  setFindResult: any;
  setAggregateResult: any;
  setGroupByResult: any;
  setFetchedFind: any;
  setFetchedAggregate: any;
  setFetchedGroupBy: any;
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

const getSCAggragate = cache((input: Prisma.SCAggregateArgs) =>
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/aggregateSC`, {
    method: "POST",
    body: JSON.stringify(input),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json())
);

const getSCGroupBy = cache((input: Prisma.SCAggregateArgs) =>
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/groupBySC`, {
    method: "POST",
    body: JSON.stringify(input),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json())
);

export default function SCCustom({
  setFindResult,
  setAggregateResult,
  setGroupByResult,
  setFetchedFind: setFetchededFind,
  setFetchedAggregate,
  setFetchedGroupBy,
}: props) {
  const [select, setSelect] = useState<FieldsSelect>(allFalseSelect);

  // WHERE AND

  const whereVisible: FieldsSelect = {
    id: false,
    sno: true,
    sname: true,
    sex: true,
    age: true,
    dept: true,
    email: true,
    phone_num: true,
    address: true,
    cno: true,
    cname: true,
    credit: true,
    cpno: false,
    cpname: false,
    cpcredit: false,
    cnextno: false,
    cnextname: false,
    cnextcredit: false,
    grade: true,
  };

  const [whereSnoAND, setWhereSnoAND] = useState<Prisma.StringFilter[]>([]);
  const [whereSnameAND, setWhereSnameAND] = useState<Prisma.StringFilter[]>([]);
  const [whereSexAND, setWhereSexAND] = useState<Prisma.EnumGenderFilter[]>([]);
  const [whereAgeAND, setWhereAgeAND] = useState<Prisma.IntFilter[]>([]);
  const [whereDeptAND, setWhereDeptAND] = useState<Prisma.EnumMajorFilter[]>(
    []
  );
  const [whereEmailAND, setWhereEmailAND] = useState<Prisma.StringFilter[]>([]);
  const [wherePhoneNumAND, setWherePhoneNumAND] = useState<
    Prisma.StringFilter[]
  >([]);
  const [whereAddressAND, setWhereAddressAND] = useState<Prisma.StringFilter[]>(
    []
  );
  const [whereCnoAND, setWhereCnoAND] = useState<Prisma.StringFilter[]>([]);
  const [whereCnameAND, setWhereCnameAND] = useState<Prisma.EnumCourseFilter[]>(
    []
  );
  const [whereCreditAND, setWhereCreditAND] = useState<Prisma.DecimalFilter[]>(
    []
  );
  const [whereCpnoAND, setWhereCpnoAND] = useState<Prisma.StringFilter[]>([]);
  const [whereCpnameAND, setWhereCpnameAND] = useState<
    Prisma.EnumCourseFilter[]
  >([]);
  const [whereCpcreditAND, setWhereCpcreditAND] = useState<
    Prisma.DecimalFilter[]
  >([]);
  const [whereCnextnoAND, setWhereCnextnoAND] = useState<Prisma.StringFilter[]>(
    []
  );
  const [whereCnextnameAND, setWhereCnextnameAND] = useState<
    Prisma.EnumCourseFilter[]
  >([]);
  const [whereCnextcreditAND, setWhereCnextcreditAND] = useState<
    Prisma.DecimalFilter[]
  >([]);
  const [whereGradeAND, setWhereGradeAND] = useState<
    Prisma.IntNullableFilter[]
  >([]);

  const whereAND: WhereCollect = {
    whereSno: whereSnoAND,
    whereSname: whereSnameAND,
    whereSex: whereSexAND,
    whereAge: whereAgeAND,
    whereDept: whereDeptAND,
    whereEmail: whereEmailAND,
    wherePhoneNum: wherePhoneNumAND,
    whereAddress: whereAddressAND,
    whereCno: whereCnoAND,
    whereCname: whereCnameAND,
    whereCredit: whereCreditAND,
    whereCpno: whereCpnoAND,
    whereCpname: whereCpnameAND,
    whereCpcredit: whereCpcreditAND,
    whereCnextno: whereCnextnoAND,
    whereCnextname: whereCnextnameAND,
    whereCnextcredit: whereCnextcreditAND,
    whereGrade: whereGradeAND,
    setWhereSno: setWhereSnoAND,
    setWhereSname: setWhereSnameAND,
    setWhereSex: setWhereSexAND,
    setWhereAge: setWhereAgeAND,
    setWhereDept: setWhereDeptAND,
    setWhereEmail: setWhereEmailAND,
    setWherePhoneNum: setWherePhoneNumAND,
    setWhereAddress: setWhereAddressAND,
    setWhereCno: setWhereCnoAND,
    setWhereCname: setWhereCnameAND,
    setWhereCredit: setWhereCreditAND,
    setWhereCpno: setWhereCpnoAND,
    setWhereCpname: setWhereCpnameAND,
    setWhereCpcredit: setWhereCpcreditAND,
    setWhereCnextno: setWhereCnextnoAND,
    setWhereCnextname: setWhereCnextnameAND,
    setWhereCnextcredit: setWhereCnextcreditAND,
    setWhereGrade: setWhereGradeAND,
  };

  // WHERE NOT

  const [whereSnoNOT, setWhereSnoNOT] = useState<Prisma.StringFilter[]>([]);
  const [whereSnameNOT, setWhereSnameNOT] = useState<Prisma.StringFilter[]>([]);
  const [whereSexNOT, setWhereSexNOT] = useState<Prisma.EnumGenderFilter[]>([]);
  const [whereAgeNOT, setWhereAgeNOT] = useState<Prisma.IntFilter[]>([]);
  const [whereDeptNOT, setWhereDeptNOT] = useState<Prisma.EnumMajorFilter[]>(
    []
  );
  const [whereEmailNOT, setWhereEmailNOT] = useState<Prisma.StringFilter[]>([]);
  const [wherePhoneNumNOT, setWherePhoneNumNOT] = useState<
    Prisma.StringFilter[]
  >([]);
  const [whereAddressNOT, setWhereAddressNOT] = useState<Prisma.StringFilter[]>(
    []
  );
  const [whereCnoNOT, setWhereCnoNOT] = useState<Prisma.StringFilter[]>([]);
  const [whereCnameNOT, setWhereCnameNOT] = useState<Prisma.EnumCourseFilter[]>(
    []
  );
  const [whereCreditNOT, setWhereCreditNOT] = useState<Prisma.DecimalFilter[]>(
    []
  );
  const [whereCpnoNOT, setWhereCpnoNOT] = useState<Prisma.StringFilter[]>([]);
  const [whereCpnameNOT, setWhereCpnameNOT] = useState<
    Prisma.EnumCourseFilter[]
  >([]);
  const [whereCpcreditNOT, setWhereCpcreditNOT] = useState<
    Prisma.DecimalFilter[]
  >([]);
  const [whereCnextnoNOT, setWhereCnextnoNOT] = useState<Prisma.StringFilter[]>(
    []
  );
  const [whereCnextnameNOT, setWhereCnextnameNOT] = useState<
    Prisma.EnumCourseFilter[]
  >([]);
  const [whereCnextcreditNOT, setWhereCnextcreditNOT] = useState<
    Prisma.DecimalFilter[]
  >([]);
  const [whereGradeNOT, setWhereGradeNOT] = useState<
    Prisma.IntNullableFilter[]
  >([]);

  const whereNOT: WhereCollect = {
    whereSno: whereSnoNOT,
    whereSname: whereSnameNOT,
    whereSex: whereSexNOT,
    whereAge: whereAgeNOT,
    whereDept: whereDeptNOT,
    whereEmail: whereEmailNOT,
    wherePhoneNum: wherePhoneNumNOT,
    whereAddress: whereAddressNOT,
    whereCno: whereCnoNOT,
    whereCname: whereCnameNOT,
    whereCredit: whereCreditNOT,
    whereCpno: whereCpnoNOT,
    whereCpname: whereCpnameNOT,
    whereCpcredit: whereCpcreditNOT,
    whereCnextno: whereCnextnoNOT,
    whereCnextname: whereCnextnameNOT,
    whereCnextcredit: whereCnextcreditNOT,
    whereGrade: whereGradeNOT,
    setWhereSno: setWhereSnoNOT,
    setWhereSname: setWhereSnameNOT,
    setWhereSex: setWhereSexNOT,
    setWhereAge: setWhereAgeNOT,
    setWhereDept: setWhereDeptNOT,
    setWhereEmail: setWhereEmailNOT,
    setWherePhoneNum: setWherePhoneNumNOT,
    setWhereAddress: setWhereAddressNOT,
    setWhereCno: setWhereCnoNOT,
    setWhereCname: setWhereCnameNOT,
    setWhereCredit: setWhereCreditNOT,
    setWhereCpno: setWhereCpnoNOT,
    setWhereCpname: setWhereCpnameNOT,
    setWhereCpcredit: setWhereCpcreditNOT,
    setWhereCnextno: setWhereCnextnoNOT,
    setWhereCnextname: setWhereCnextnameNOT,
    setWhereCnextcredit: setWhereCnextcreditNOT,
    setWhereGrade: setWhereGradeNOT,
  };

  // ORDER BY

  const orderByVisibleField: FieldsSelect = {
    ...allFalseSelect,
    sno: select.sno,
    sname: select.sname,
    sex: select.sex,
    age: select.age,
    dept: select.dept,
    email: select.email,
    phone_num: select.phone_num,
    address: select.address,
    cno: select.cno,
    cname: select.cname,
    credit: select.credit,
    grade: select.grade,
  };

  const [orderBy, setOrderBy] = useState<FieldsEnum[]>([]);

  // DISTICT

  const distinctVisibleField: FieldsSelect = {
    ...allFalseSelect,
    sno: select.sno,
    cno: select.cno,
    grade: select.grade,
  };

  const [distinct, setDistinct] = useState<FieldsSelect>(allFalseSelect);

  // Aggregate

  const aggregateCountVisible: FieldsSelect = {
    ...allFalseSelect,
    grade: select.grade,
    sno: select.sno,
    cno: select.cno,
  };

  const [aggregateCount, setAggregateCount] =
    useState<FieldsSelect>(allFalseSelect);

  const aggregateSumVisible: FieldsSelect = {
    ...allFalseSelect,
    grade: select.grade,
  };

  const [aggregateSum, setAggregateSum] =
    useState<FieldsSelect>(allFalseSelect);

  const aggregateAvgVisible: FieldsSelect = {
    ...allFalseSelect,
    grade: select.grade,
  };
  const [aggregateAvg, setAggregateAvg] =
    useState<FieldsSelect>(allFalseSelect);

  const aggregateMaxVisible: FieldsSelect = {
    ...allFalseSelect,
    grade: select.grade,
  };
  const [aggregateMax, setAggregateMax] =
    useState<FieldsSelect>(allFalseSelect);

  const aggregateMinVisible: FieldsSelect = {
    ...allFalseSelect,
    grade: select.grade,
  };
  const [aggregateMin, setAggregateMin] =
    useState<FieldsSelect>(allFalseSelect);

  const [findSkip, setFindSkip] = useState(0);
  const [findTake, setFindTake] = useState(30000);

  // GROUP BY

  const groupByVisibleField: FieldsSelect = {
    ...allFalseSelect,
    sno: select.sno,
    cno: select.cno,
    grade: select.grade,
  };

  const [groupBy, setGroupBy] = useState<FieldsSelect>(allFalseSelect);

  const aggregateGroupCountVisible: FieldsSelect = {
    ...allFalseSelect,
    grade: select.grade,
    sno: select.sno,
    cno: select.cno,
  };
  const [aggregateGroupCount, setAggregateGroupCount] =
    useState<FieldsSelect>(allFalseSelect);

  const aggregateGroupSumVisible: FieldsSelect = {
    ...allFalseSelect,
    grade: select.grade,
  };

  const [aggregateGroupSum, setAggregateGroupSum] =
    useState<FieldsSelect>(allFalseSelect);

  const aggregateGroupAvgVisible: FieldsSelect = {
    ...allFalseSelect,
    grade: select.grade,
  };
  const [aggregateGroupAvg, setAggregateGroupAvg] =
    useState<FieldsSelect>(allFalseSelect);

  const aggregateGroupMaxVisible: FieldsSelect = {
    ...allFalseSelect,
    grade: select.grade,
  };
  const [aggregateGroupMax, setAggregateGroupMax] =
    useState<FieldsSelect>(allFalseSelect);

  const aggregateGroupMinVisible: FieldsSelect = {
    ...allFalseSelect,
    grade: select.grade,
  };
  const [aggregateGroupMin, setAggregateGroupMin] =
    useState<FieldsSelect>(allFalseSelect);

  // Count

  const havingCountVisible: FieldsSelect = {
    ...allFalseSelect,
    sno: aggregateGroupCount.sno,
    cno: aggregateGroupCount.cno,
    grade: aggregateGroupCount.grade,
  };

  const [havingCountSno, setHavingCountSno] = useState<Prisma.IntFilter[]>([]);

  const [havingCountCno, setHavingCountCno] = useState<Prisma.IntFilter[]>([]);

  const [havingCountGrade, setHavingCountGrade] = useState<
    Prisma.IntNullableFilter[]
  >([]);

  const havingCount: HavingCollect = {
    havingSno: havingCountSno,
    havingCno: havingCountCno,
    havingGrade: havingCountGrade,
    setHavingSno: setHavingCountSno,
    setHavingCno: setHavingCountCno,
    setHavingGrade: setHavingCountGrade,
  };

  // Sum

  const havingSumVisible: FieldsSelect = {
    ...allFalseSelect,
    grade: aggregateGroupSum.grade,
  };

  const [havingSumGrade, setHavingSumGrade] = useState<
    Prisma.IntNullableFilter[]
  >([]);

  const havingSum: HavingCollect = {
    havingGrade: havingSumGrade,
    setHavingGrade: setHavingSumGrade,
  };

  // Avg

  const havingAvgVisible: FieldsSelect = {
    ...allFalseSelect,
    grade: aggregateGroupAvg.grade,
  };

  const [havingAvgGrade, setHavingAvgGrade] = useState<
    Prisma.IntNullableFilter[]
  >([]);

  const havingAvg: HavingCollect = {
    havingGrade: havingAvgGrade,
    setHavingGrade: setHavingAvgGrade,
  };

  // Max

  const havingMaxVisible: FieldsSelect = {
    ...allFalseSelect,
    grade: aggregateGroupMax.grade,
  };

  const [havingMaxGrade, setHavingMaxGrade] = useState<
    Prisma.IntNullableFilter[]
  >([]);

  const havingMax: HavingCollect = {
    havingGrade: havingMaxGrade,
    setHavingGrade: setHavingMaxGrade,
  };

  // Min

  const havingMinVisible: FieldsSelect = {
    ...allFalseSelect,
    grade: aggregateGroupMin.grade,
  };

  const [havingMinGrade, setHavingMinGrade] = useState<
    Prisma.IntNullableFilter[]
  >([]);

  const havingMin: HavingCollect = {
    havingGrade: havingMinGrade,
    setHavingGrade: setHavingMinGrade,
  };

  const [groupOrderBy, setGroupOrderBy] = useState<string[]>([]);

  const groupOrderByVisible = {
    sno: groupBy.sno,
    cno: groupBy.cno,
    grade: groupBy.grade,
    countGrade: aggregateGroupCount.grade,
    sumGrade: aggregateGroupSum.grade,
    avgGrade: aggregateGroupAvg.grade,
    maxGrade: aggregateGroupMax.grade,
    minGrade: aggregateGroupMin.grade,
  };

  const handleQuery = async () => {
    if (!Object.values(select).some(Boolean)) {
      alert("无效查询参数");
      return;
    }
    const whereInput: Prisma.SCWhereInput = {
      AND: [...whereGradeAND.map(whereGradePayload)],
      NOT: [...whereGradeNOT.map(whereGradePayload)],
      snoToS: {
        AND: [
          ...whereSnoAND.map(whereSnoPayload),
          ...whereSnameAND.map(whereSnamePayload),
          ...whereSexAND.map(whereSexPayload),
          ...whereAgeAND.map(whereAgePayload),
          ...whereDeptAND.map(whereDeptPayload),
          ...whereEmailAND.map(whereEmailPayload),
          ...wherePhoneNumAND.map(wherePhoneNumPayload),
          ...whereAddressAND.map(whereAddressPayload),
        ],
        NOT: [
          ...whereSnoNOT.map(whereSnoPayload),
          ...whereSnameNOT.map(whereSnamePayload),
          ...whereSexNOT.map(whereSexPayload),
          ...whereAgeNOT.map(whereAgePayload),
          ...whereDeptNOT.map(whereDeptPayload),
          ...whereEmailNOT.map(whereEmailPayload),
          ...wherePhoneNumNOT.map(wherePhoneNumPayload),
          ...whereAddressNOT.map(whereAddressPayload),
        ],
      },
      cnoToC: {
        AND: [
          ...whereCnoAND.map(whereCnoPayload),
          ...whereCnameAND.map(whereCnamePayload),
          ...whereCreditAND.map(whereCreditPayload),
        ],
        NOT: [
          ...whereCnoNOT.map(whereCnoPayload),
          ...whereCnameNOT.map(whereCnamePayload),
          ...whereCreditNOT.map(whereCreditPayload),
        ],
      },
    };
    const SCFindInput: Prisma.SCFindManyArgs = {
      select: SCSelectPayload(select),
      where: whereInput,
      orderBy: orderBy.map(SCOrderByPayload),
      distinct: SCDistinctPayload(distinct),
      skip: findSkip,
      take: findTake,
    };

    getSC(SCFindInput).then((res) => {
      setFindResult(res);
      setFetchededFind(true);
    });

    const SCAggregateParams: Prisma.SCAggregateArgs = SCAggregatePayload([
      aggregateCount,
      aggregateSum,
      aggregateAvg,
      aggregateMax,
      aggregateMin,
    ]);

    const SCAggregateInput: Prisma.SCAggregateArgs = Object.assign(
      {
        where: whereInput,
        orderBy: orderBy.map(SCOrderByPayload),
      },
      SCAggregateParams
    );

    getSCAggragate(SCAggregateInput).then((res) => {
      setAggregateResult(res);
      setFetchedAggregate(true);
    });

    const SCGroupByField: FieldsEnum[] = SCGroupByFieldPayload(groupBy);

    if (SCGroupByField.length !== 0) {
      const SCAggregateGroupParams: Prisma.SCAggregateArgs = SCAggregatePayload(
        [
          aggregateGroupCount,
          aggregateGroupSum,
          aggregateGroupAvg,
          aggregateGroupMax,
          aggregateGroupMin,
        ]
      );
      const SCAggregateGroupInput: Prisma.SCAggregateArgs = Object.assign(
        {
          where: whereInput,
          orderBy: orderBy.map(SCOrderByPayload),
          _count: true,
        },
        SCAggregateGroupParams
      );
      const SCHavingInput = {
        AND: [
          ...havingCountSno.map(havingCountStringPayload).map(havingSnoPayload),
          ...havingCountCno.map(havingCountStringPayload).map(havingCnoPayload),
          ...havingCountGrade
            .map(havingCountIntPayload)
            .map(havingGradePayload),
          ...havingSumGrade.map(havingSumPayload).map(havingGradePayload),
          ...havingAvgGrade.map(havingAvgPayload).map(havingGradePayload),
          ...havingMaxGrade.map(havingMaxPayload).map(havingGradePayload),
          ...havingMinGrade.map(havingMinPayload).map(havingGradePayload),
        ],
      } satisfies Prisma.SCScalarWhereWithAggregatesInput;

      const SCGroupByInput: Prisma.SCGroupByArgs = {
        where: whereInput,
        by: SCGroupByFieldPayload(groupBy),
        having: SCHavingInput,
        _count: SCAggregateGroupInput._count,
        _sum: SCAggregateGroupInput._sum,
        _avg: SCAggregateGroupInput._avg,
        _max: SCAggregateGroupInput._max,
        _min: SCAggregateGroupInput._min,
        orderBy: groupOrderBy.map(SCGroupOrderByPaylod),
      };
      getSCGroupBy(SCGroupByInput).then((res) => {
        setGroupByResult(res);
        setFetchedGroupBy(true);
      });
    }
  };

  return (
    <div className="">
      <div className="alert justify-center">
        <span className="font-bold text-2xl">1. SELECT</span>
      </div>
      <SelectCheckBox
        select={select}
        setSelect={setSelect}
        className="flex flex-wrap font-bold m-3"
      />
      <div className="alert justify-center">
        <span className="font-bold text-2xl">2. WHERE</span>
      </div>

      <div className="collapse collapse-plus bg-base-200 m-5 rounded-2xl">
        <input type="checkbox" />
        <div className="collapse-title text-2xl font-medium">AND</div>
        <div className="collapse-content">
          <WhereCompose
            visible={whereVisible}
            compose={whereAND}
            className="grid grid-cols-2 gap-4"
          />
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 m-5 rounded-2xl">
        <input type="checkbox" />
        <div className="collapse-title text-2xl font-medium">NOT</div>
        <div className="collapse-content">
          <WhereCompose
            visible={whereVisible}
            compose={whereNOT}
            className="grid grid-cols-2 gap-4"
          />
        </div>
      </div>
      <div className="alert justify-center">
        <span className="font-bold text-2xl">3. ORDER BY</span>
      </div>
      <OrderByToggle
        visible={orderByVisibleField}
        orderBy={orderBy}
        setOrderBy={setOrderBy}
        className="flex flex-wrap font-bold m-3"
      />
      <div className="alert justify-center">
        <span className="font-bold text-2xl">4. DISTINCT</span>
      </div>
      <FieldCheckBox
        visible={distinctVisibleField}
        fields={distinct}
        setFields={setDistinct}
        className="flex flex-wrap font-bold m-3"
      />
      <div className="alert justify-center">
        <span className="font-bold text-2xl">5. AGGRAGATE</span>
      </div>
      <div className="flex my-3 ">
        <span className="m-auto mx-6 w-32 text-center font-bold badge badge-lg badge-outline">
          COUNT
        </span>
        <FieldCheckBox
          visible={aggregateCountVisible}
          fields={aggregateCount}
          setFields={setAggregateCount}
          className="flex flex-wrap font-bold m-3"
        />
      </div>
      <div className="flex my-3 ">
        <span className="m-auto mx-6 w-32 text-center font-bold badge badge-lg badge-outline">
          SUM
        </span>
        <FieldCheckBox
          visible={aggregateSumVisible}
          fields={aggregateSum}
          setFields={setAggregateSum}
          className="flex flex-wrap font-bold m-3"
        />
      </div>
      <div className="flex my-3">
        <span className="m-auto mx-6 w-32 text-center font-bold badge badge-lg badge-outline">
          AVG
        </span>
        <FieldCheckBox
          visible={aggregateAvgVisible}
          fields={aggregateAvg}
          setFields={setAggregateAvg}
          className="flex flex-wrap font-bold m-3"
        />
      </div>
      <div className="flex my-3">
        <span className="m-auto mx-6 w-32 text-center font-bold badge badge-lg badge-outline">
          Max
        </span>
        <FieldCheckBox
          visible={aggregateMaxVisible}
          fields={aggregateMax}
          setFields={setAggregateMax}
          className="flex flex-wrap font-bold m-3"
        />
      </div>
      <div className="flex my-3">
        <span className="m-auto mx-6 w-32 text-center font-bold badge badge-lg badge-outline">
          Min
        </span>
        <FieldCheckBox
          visible={aggregateMinVisible}
          fields={aggregateMin}
          setFields={setAggregateMin}
          className="flex flex-wrap font-bold m-3"
        />
      </div>
      <div className="flex justify-evenly">
        <label className="input-group w-48">
          <TextField
            type="number"
            label="OFFSET"
            InputProps={{ inputProps: { min: 0 } }}
            defaultValue={0}
            onChange={(event) => {
              if (Number(event.target.value) < 0) {
                setFindSkip(0);
              } else {
                setFindSkip(Number(event.target.value));
              }
            }}
            variant="outlined"
            size="small"
            className="w-full"
          />
        </label>
        <label className="input-group w-48">
          <TextField
            type="number"
            label="LIMIT"
            InputProps={{ inputProps: { min: 0, max: 30000 } }}
            defaultValue={30000}
            onChange={(event) => {
              if (Number(event.target.value) > 30000) {
                setFindTake(3000);
              } else {
                setFindTake(Number(event.target.value));
              }
            }}
            variant="outlined"
            size="small"
            className="w-full"
          />
        </label>
      </div>
      <div className="divider ">如无需分组结果, 以下选项请留空d</div>

      <div className="alert justify-center">
        <span className="font-bold text-2xl">6. GROUP BY</span>
      </div>
      <FieldCheckBox
        visible={groupByVisibleField}
        fields={groupBy}
        setFields={setGroupBy}
        className="flex flex-wrap font-bold m-3"
      />
      <div className="collapse collapse-plus bg-base-200 m-5 rounded-2xl">
        <input type="checkbox" />
        <div className="collapse-title text-2xl font-medium">
          GROUP AGGREGATE
        </div>
        <div className="collapse-content">
          <div className="flex my-3 ">
            <span className="m-auto mx-6 w-32 text-center font-bold badge badge-lg badge-outline">
              COUNT
            </span>
            <FieldCheckBox
              visible={aggregateGroupCountVisible}
              fields={aggregateGroupCount}
              setFields={setAggregateGroupCount}
              className="flex flex-wrap font-bold m-3"
            />
          </div>
          <div className="flex my-3 ">
            <span className="m-auto mx-6 w-32 text-center font-bold badge badge-lg badge-outline">
              SUM
            </span>
            <FieldCheckBox
              visible={aggregateGroupSumVisible}
              fields={aggregateGroupSum}
              setFields={setAggregateGroupSum}
              className="flex flex-wrap font-bold m-3"
            />
          </div>
          <div className="flex my-3">
            <span className="m-auto mx-6 w-32 text-center font-bold badge badge-lg badge-outline">
              AVG
            </span>
            <FieldCheckBox
              visible={aggregateGroupAvgVisible}
              fields={aggregateGroupAvg}
              setFields={setAggregateGroupAvg}
              className="flex flex-wrap font-bold m-3"
            />
          </div>
          <div className="flex my-3">
            <span className="m-auto mx-6 w-32 text-center font-bold badge badge-lg badge-outline">
              Max
            </span>
            <FieldCheckBox
              visible={aggregateGroupMaxVisible}
              fields={aggregateGroupMax}
              setFields={setAggregateGroupMax}
              className="flex flex-wrap font-bold m-3"
            />
          </div>
          <div className="flex my-3">
            <span className="m-auto mx-6 w-32 text-center font-bold badge badge-lg badge-outline">
              Min
            </span>
            <FieldCheckBox
              visible={aggregateGroupMinVisible}
              fields={aggregateGroupMin}
              setFields={setAggregateGroupMin}
              className="flex flex-wrap font-bold m-3"
            />
          </div>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 m-5 rounded-2xl">
        <input type="checkbox" />
        <div className="collapse-title text-2xl font-medium">HAVING</div>
        <div className="collapse-content">
          COUNT
          <HavingCompose
            aggregateType="COUNT"
            visible={havingCountVisible}
            compose={havingCount}
            className="grid grid-cols-2 gap-4"
          />
          SUM
          <HavingCompose
            aggregateType="SUM"
            visible={havingSumVisible}
            compose={havingSum}
            className="grid grid-cols-2 gap-4"
          />
          AVG
          <HavingCompose
            aggregateType="AVG"
            visible={havingAvgVisible}
            compose={havingAvg}
            className="grid grid-cols-2 gap-4"
          />
          MAX
          <HavingCompose
            aggregateType="MAX"
            visible={havingMaxVisible}
            compose={havingMax}
            className="grid grid-cols-2 gap-4"
          />
          MIN
          <HavingCompose
            aggregateType="MIN"
            visible={havingMinVisible}
            compose={havingMin}
            className="grid grid-cols-2 gap-4"
          />
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 m-5 rounded-2xl">
        <input type="checkbox" />
        <div className="collapse-title text-2xl font-medium">GROUP ORDER</div>
        <div className="collapse-content">
          <GroupOrderByToggle
            visible={groupOrderByVisible}
            orderBy={groupOrderBy}
            setOrderBy={setGroupOrderBy}
            className="flex flex-wrap font-bold m-3"
          />
        </div>
      </div>
      <button className="btn btn-success w-full text-2xl" onClick={handleQuery}>
        查询
      </button>
    </div>
  );
}
