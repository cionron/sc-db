import { Prisma } from "@prisma/client";
import WhereInputString from "./where-input-string";
import WhereInputNumber from "./where-input-number";
import WhereInputEnum from "./where-input-enum";
import { FieldsSelect } from "../app/sc-query";
import { ThemeProvider, createTheme } from "@mui/material";
import WhereInputNumberNullable from "./where-input-number-nullable";

export interface WhereCollect {
  whereSno: Prisma.StringFilter[];
  whereSname: Prisma.StringFilter[];
  whereSex: Prisma.EnumGenderFilter[];
  whereAge: Prisma.IntFilter[];
  whereDept: Prisma.EnumMajorFilter[];
  whereEmail: Prisma.StringFilter[];
  wherePhoneNum: Prisma.StringFilter[];
  whereAddress: Prisma.StringFilter[];
  whereCno: Prisma.StringFilter[];
  whereCname: Prisma.EnumCourseFilter[];
  whereCredit: Prisma.DecimalFilter[];
  whereCpno: Prisma.StringFilter[];
  whereCpname: Prisma.EnumCourseFilter[];
  whereCpcredit: Prisma.DecimalFilter[];
  whereCnextno: Prisma.StringFilter[];
  whereCnextname: Prisma.EnumCourseFilter[];
  whereCnextcredit: Prisma.DecimalFilter[];
  whereGrade: Prisma.IntNullableFilter[];
  setWhereSno: any;
  setWhereSname: any;
  setWhereSex: any;
  setWhereAge: any;
  setWhereDept: any;
  setWhereEmail: any;
  setWherePhoneNum: any;
  setWhereAddress: any;
  setWhereCno: any;
  setWhereCname: any;
  setWhereCredit: any;
  setWhereCpno: any;
  setWhereCpname: any;
  setWhereCpcredit: any;
  setWhereCnextno: any;
  setWhereCnextname: any;
  setWhereCnextcredit: any;
  setWhereGrade: any;
}

interface props {
  visible: FieldsSelect;
  compose: WhereCollect;
  className?: string;
}

const theme = createTheme({
  palette: {
    primary: { main: "#3d4451" },
  },
});

export default function WhereCompose({ visible, compose, className }: props) {
  return (
    <ThemeProvider theme={theme}>
      <div className={`${className}`}>
        {visible.sno ? (
          <WhereInputString
            field="学号"
            whereInput={compose.whereSno}
            setWhereInput={compose.setWhereSno}
          />
        ) : null}
        {visible.sname ? (
          <WhereInputString
            field="姓名"
            whereInput={compose.whereSname}
            setWhereInput={compose.setWhereSname}
          />
        ) : null}
        {visible.sex ? (
          <WhereInputEnum
            field="Gender"
            fieldText="性别"
            whereInput={compose.whereSex}
            setWhereInput={compose.setWhereSex}
          />
        ) : null}
        {visible.age ? (
          <WhereInputNumber
            field="年龄"
            whereInput={compose.whereAge}
            setWhereInput={compose.setWhereAge}
          />
        ) : null}
        {visible.dept ? (
          <WhereInputEnum
            field="Major"
            fieldText="修读专业"
            whereInput={compose.whereDept}
            setWhereInput={compose.setWhereDept}
          />
        ) : null}
        {visible.email ? (
          <WhereInputString
            field="电子邮箱"
            whereInput={compose.whereEmail}
            setWhereInput={compose.setWhereEmail}
          />
        ) : null}
        {visible.phone_num ? (
          <WhereInputString
            field="电话号码"
            whereInput={compose.wherePhoneNum}
            setWhereInput={compose.setWherePhoneNum}
          />
        ) : null}
        {visible.address ? (
          <WhereInputString
            field="家庭地址"
            whereInput={compose.whereAddress}
            setWhereInput={compose.setWhereAddress}
          />
        ) : null}
        {visible.cno ? (
          <WhereInputString
            field="课程号"
            whereInput={compose.whereCno}
            setWhereInput={compose.setWhereCno}
          />
        ) : null}
        {visible.cname ? (
          <WhereInputEnum
            field="Course"
            fieldText="课程名"
            whereInput={compose.whereCname}
            setWhereInput={compose.setWhereCname}
          />
        ) : null}
        {visible.credit ? (
          <WhereInputNumber
            field="学分"
            whereInput={compose.whereCredit}
            setWhereInput={compose.setWhereCredit}
          />
        ) : null}
        {visible.cpno ? (
          <WhereInputString
            field="先行课课程号"
            whereInput={compose.whereCpno}
            setWhereInput={compose.setWhereCpno}
          />
        ) : null}
        {visible.cpname ? (
          <WhereInputEnum
            field="Course"
            fieldText="先行课课程名"
            whereInput={compose.whereCpname}
            setWhereInput={compose.setWhereCpname}
          />
        ) : null}
        {visible.cpcredit ? (
          <WhereInputNumber
            field="先行课学分"
            whereInput={compose.whereCpcredit}
            setWhereInput={compose.setWhereCpcredit}
          />
        ) : null}
        {visible.cnextno ? (
          <WhereInputString
            field="后继课课程号"
            whereInput={compose.whereCnextno}
            setWhereInput={compose.setWhereCnextno}
          />
        ) : null}
        {visible.cnextname ? (
          <WhereInputEnum
            field="Course"
            fieldText="后继课课程名"
            whereInput={compose.whereCnextname}
            setWhereInput={compose.setWhereCnextname}
          />
        ) : null}
        {visible.cnextcredit ? (
          <WhereInputNumber
            field="后继课学分"
            whereInput={compose.whereCnextcredit}
            setWhereInput={compose.setWhereCnextcredit}
          />
        ) : null}
        {visible.grade ? (
          <WhereInputNumberNullable
            field="成绩"
            whereInput={compose.whereGrade}
            setWhereInput={compose.setWhereGrade}
          />
        ) : null}
      </div>
    </ThemeProvider>
  );
}
