"use client";

import { Prisma } from "@prisma/client";

interface SCAggregateParams {
  _count: Prisma.SCCountAggregateInputType;
  _sum?: Prisma.SCSumAggregateInputType;
  _avg?: Prisma.SCAvgAggregateInputType;
  _max?: Prisma.SCMaxAggregateInputType;
  _min?: Prisma.SCMinAggregateInputType;
}

// SELECT

const GloablEnum = {
  ...Prisma.SScalarFieldEnum,
  ...Prisma.CScalarFieldEnum,
  ...Prisma.SCScalarFieldEnum,
};

export type FieldsEnum = (typeof GloablEnum)[keyof typeof GloablEnum];

export interface FieldsSelect {
  id?: boolean;
  sno?: boolean;
  sname?: boolean;
  sex?: boolean;
  age?: boolean;
  dept?: boolean;
  email?: boolean;
  phone_num?: boolean;
  address?: boolean;
  cno?: boolean;
  cname?: boolean;
  credit?: boolean;
  cpno?: boolean;
  cpname?: boolean;
  cpcredit?: boolean;
  cnextno?: boolean;
  cnextname?: boolean;
  cnextcredit?: boolean;
  grade?: boolean;
}

export const SCSelectPayload = (params: FieldsSelect) =>
  ({
    id: true,
    sno: params.sno,
    cno: params.cno,
    grade: params.grade,
    snoToS: {
      select: {
        id: true,
        sno: params.sno,
        sname: params.sname,
        sex: params.sex,
        age: params.age,
        dept: params.dept,
        email: params.email,
        phone_num: params.phone_num,
        address: params.address,
      },
    },
    cnoToC: {
      select: {
        id: true,
        cno: params.cno,
        cname: params.cname,
        credit: params.credit,
        cpre: {
          select: {
            id: true,
            cno: params.cpno,
            cname: params.cpname,
            credit: params.cpcredit,
          },
        },
        cnext: {
          select: {
            id: true,
            cno: params.cnextno,
            cname: params.cnextname,
            credit: params.cnextcredit,
          },
        },
      },
    },
  } satisfies Prisma.SCSelect);

// WHERE

export const whereSnoPayload = (filter: Prisma.StringFilter) =>
  ({
    sno: filter,
  } satisfies Prisma.SWhereInput);

export const whereSnamePayload = (filter: Prisma.StringFilter) =>
  ({
    sname: filter,
  } satisfies Prisma.SWhereInput);

export const whereSexPayload = (filter: Prisma.EnumGenderFilter) =>
  ({
    sex: filter,
  } satisfies Prisma.SWhereInput);

export const whereAgePayload = (filter: Prisma.IntFilter) =>
  ({
    age: filter,
  } satisfies Prisma.SWhereInput);

export const whereDeptPayload = (filter: Prisma.EnumMajorFilter) =>
  ({
    dept: filter,
  } satisfies Prisma.SWhereInput);

export const whereEmailPayload = (filter: Prisma.StringFilter) =>
  ({
    email: filter,
  } satisfies Prisma.SWhereInput);

export const wherePhoneNumPayload = (filter: Prisma.StringFilter) =>
  ({
    phone_num: filter,
  } satisfies Prisma.SWhereInput);

export const whereAddressPayload = (filter: Prisma.StringFilter) =>
  ({
    address: filter,
  } satisfies Prisma.SWhereInput);

export const whereCnoPayload = (filter: Prisma.StringFilter) =>
  ({
    cno: filter,
  } satisfies Prisma.CWhereInput);

export const whereCnamePayload = (filter: Prisma.EnumCourseFilter) =>
  ({
    cname: filter,
  } satisfies Prisma.CWhereInput);

export const whereCreditPayload = (filter: Prisma.DecimalFilter) =>
  ({
    credit: filter,
  } satisfies Prisma.CWhereInput);

export const whereGradePayload = (filter: Prisma.IntNullableFilter) =>
  ({
    grade: filter,
  } satisfies Prisma.SCWhereInput);

export const SCOrderByPayload = (params: FieldsEnum) => {
  let sort = {};
  switch (params) {
    case "sno":
      sort = {
        sno: "desc",
      };
      break;
    case "cno":
      sort = {
        cno: "desc",
      };
      break;
    case "grade":
      sort = {
        grade: "desc",
      };
      break;
    case "sname":
      sort = {
        snoToS: {
          sname: "desc",
        },
      };
      break;
    case "sex":
      sort = {
        snoToS: {
          sex: "desc",
        },
      };
      break;
    case "age":
      sort = {
        snoToS: {
          age: "desc",
        },
      };
      break;
    case "dept":
      sort = {
        snoToS: {
          dept: "desc",
        },
      };
      break;
    case "email":
      sort = {
        snoToS: {
          email: "desc",
        },
      };
      break;
    case "phone_num":
      sort = {
        snoToS: {
          phone_num: "desc",
        },
      };
      break;
    case "address":
      sort = {
        snoToS: {
          address: "desc",
        },
      };
      break;
    case "cname":
      sort = {
        cnoToS: {
          cname: "desc",
        },
      };
      break;
    case "credit":
      sort = {
        cnoToS: {
          credit: "desc",
        },
      };
      break;
  }
  return sort satisfies Prisma.SCOrderByWithRelationInput;
};

export const SCDistinctPayload = (params: FieldsSelect) => {
  //@ts-ignore
  let results: Prisma.SCScalarFieldEnum[] = Object.keys(params).filter(
    //@ts-ignore
    (key) => params[key] === true
  );
  if (params.sno === false && params.cno === false && params.grade === false) {
    results = ["sno", "cno"];
  }
  return results satisfies Prisma.SCScalarFieldEnum[];
};

// 0: count
// 1: sum
// 2: avg
// 3: max
// 4: min

export const SCAggregatePayload = (params: FieldsSelect[]) => {
  const results: SCAggregateParams = {
    _count: {
      _all: true,
    },
  };

  if (params[0].grade === true) {
    Object.assign(results._count, {
      grade: true,
    }) satisfies Prisma.SCCountAggregateInputType;
  }
  if (params[0].sno === true) {
    Object.assign(results._count, {
      sno: true,
    }) satisfies Prisma.SCCountAggregateInputType;
  }
  if (params[0].cno === true) {
    Object.assign(results._count, {
      cno: true,
    }) satisfies Prisma.SCCountAggregateInputType;
  }
  if (Object.values(params[1]).some(Boolean)) {
    if (params[1].grade === true) {
      results._sum = { grade: true } satisfies Prisma.SCSumAggregateInputType;
    }
  }

  if (Object.values(params[2]).some(Boolean)) {
    if (params[2].grade === true) {
      results._avg = { grade: true } satisfies Prisma.SCAvgAggregateInputType;
    }
  }
  if (Object.values(params[3]).some(Boolean)) {
    if (params[3].grade === true) {
      results._max = { grade: true } satisfies Prisma.SCMaxAggregateInputType;
    }
  }
  if (Object.values(params[4]).some(Boolean)) {
    if (params[4].grade === true) {
      results._min = { grade: true } satisfies Prisma.SCMinAggregateInputType;
    }
  }
  return results;
};
export const SCGroupByFieldPayload = (params: FieldsSelect) => {
  //@ts-ignore
  let results: Prisma.SCScalarFieldEnum[] = Object.keys(params).filter(
    //@ts-ignore
    (key) => params[key] === true
  );
  return results satisfies Prisma.SCScalarFieldEnum[];
};

export const havingCountIntPayload = (filter: Prisma.IntNullableFilter) =>
  ({
    _count: filter,
  } satisfies Prisma.IntNullableWithAggregatesFilter);

export const havingCountStringPayload = (filter: Prisma.IntFilter) =>
  ({
    _count: filter,
  } satisfies Prisma.StringWithAggregatesFilter);

export const havingSumPayload = (filter: Prisma.IntNullableFilter) =>
  ({
    _sum: filter,
  } satisfies Prisma.IntNullableWithAggregatesFilter);
export const havingAvgPayload = (filter: Prisma.IntNullableFilter) =>
  ({
    _avg: filter,
  } satisfies Prisma.IntNullableWithAggregatesFilter);
export const havingMaxPayload = (filter: Prisma.IntNullableFilter) =>
  ({
    _max: filter,
  } satisfies Prisma.IntNullableWithAggregatesFilter);
export const havingMinPayload = (filter: Prisma.IntNullableFilter) =>
  ({
    _min: filter,
  } satisfies Prisma.IntNullableWithAggregatesFilter);

export const havingSnoPayload = (filter: Prisma.StringWithAggregatesFilter) =>
  ({
    sno: filter,
  } satisfies Prisma.SCScalarWhereWithAggregatesInput);

export const havingCnoPayload = (filter: Prisma.StringWithAggregatesFilter) =>
  ({
    cno: filter,
  } satisfies Prisma.SCScalarWhereWithAggregatesInput);

export const havingGradePayload = (
  filter: Prisma.IntNullableWithAggregatesFilter
) =>
  ({
    grade: filter,
  } satisfies Prisma.SCScalarWhereWithAggregatesInput);

export const SCGroupOrderByPaylod = (params: string) => {
  let sort = {};
  switch (params) {
    case "sno":
      sort = {
        sno: "desc",
      };
      break;
    case "cno":
      sort = {
        cno: "desc",
      };
      break;
    case "grade":
      sort = {
        grade: "desc",
      };
      break;
    case "count Grade":
      sort = {
        _count: {
          grade: "desc",
        },
      };
      break;
    case "sum Grade":
      sort = {
        _sum: {
          grade: "desc",
        },
      };
      break;
    case "avg Grade":
      sort = {
        _avg: {
          grade: "desc",
        },
      };
      break;
    case "max Grade":
      sort = {
        _max: {
          grade: "desc",
        },
      };
      break;
    case "min Grade":
      sort = {
        _min: {
          grade: "desc",
        },
      };
      break;
  }
  return sort satisfies Prisma.SCOrderByWithAggregationInput;
};
