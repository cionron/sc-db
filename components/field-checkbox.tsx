"use client";

import { FieldsSelect } from "@/app/sc-query";

interface props {
  visible: FieldsSelect;
  fields: FieldsSelect;
  setFields: React.Dispatch<React.SetStateAction<FieldsSelect>>;
  className?: string;
}

export default function FieldCheckBox({
  visible,
  fields,
  setFields,
  className,
}: props) {
  return (
    <div className={`${className} `}>
      {visible.sno ? (
        <label className="label cursor-pointer">
          <span className="label-text">学号</span>
          <input
            type="checkbox"
            checked={fields.sno}
            className="checkbox ml-2 mr-5"
            onChange={() => {
              setFields({ ...fields, sno: !fields.sno });
            }}
          />
        </label>
      ) : null}

      {visible.sname ? (
        <label className="label cursor-pointer">
          <span className="label-text">姓名</span>
          <input
            type="checkbox"
            checked={fields.sname}
            className="checkbox ml-2 mr-5"
            onChange={() => {
              setFields({ ...fields, sname: !fields.sname });
            }}
          />
        </label>
      ) : null}

      {visible.sex ? (
        <label className="label cursor-pointer">
          <span className="label-text">性别</span>
          <input
            type="checkbox"
            checked={fields.sex}
            className="checkbox ml-2 mr-5"
            onChange={() => {
              setFields({ ...fields, sex: !fields.sex });
            }}
          />
        </label>
      ) : null}
      {visible.age ? (
        <label className="label cursor-pointer">
          <span className="label-text">年龄</span>
          <input
            type="checkbox"
            checked={fields.age}
            className="checkbox ml-2 mr-5"
            onChange={() => {
              setFields({ ...fields, age: !fields.age });
            }}
          />
        </label>
      ) : null}
      {visible.dept ? (
        <label className="label cursor-pointer">
          <span className="label-text">修读专业</span>
          <input
            type="checkbox"
            checked={fields.dept}
            className="checkbox ml-2 mr-5"
            onChange={() => {
              setFields({ ...fields, dept: !fields.dept });
            }}
          />
        </label>
      ) : null}
      {visible.email ? (
        <label className="label cursor-pointer">
          <span className="label-text">电子邮箱</span>
          <input
            type="checkbox"
            checked={fields.email}
            className="checkbox ml-2 mr-5"
            onChange={() => {
              setFields({ ...fields, email: !fields.email });
            }}
          />
        </label>
      ) : null}
      {visible.phone_num ? (
        <label className="label cursor-pointer">
          <span className="label-text">电话号码</span>
          <input
            type="checkbox"
            checked={fields.phone_num}
            className="checkbox ml-2 mr-5"
            onChange={() => {
              setFields({ ...fields, phone_num: !fields.phone_num });
            }}
          />
        </label>
      ) : null}
      {visible.address ? (
        <label className="label cursor-pointer">
          <span className="label-text">家庭地址</span>
          <input
            type="checkbox"
            checked={fields.address}
            className="checkbox ml-2 mr-5"
            onChange={() => {
              setFields({ ...fields, address: !fields.address });
            }}
          />
        </label>
      ) : null}
      {visible.cno ? (
        <label className="label cursor-pointer">
          <span className="label-text">课程号</span>
          <input
            type="checkbox"
            checked={fields.cno}
            className="checkbox ml-2 mr-5"
            onChange={() => {
              setFields({ ...fields, cno: !fields.cno });
            }}
          />
        </label>
      ) : null}
      {visible.cname ? (
        <label className="label cursor-pointer">
          <span className="label-text">课程名</span>
          <input
            type="checkbox"
            checked={fields.cname}
            className="checkbox ml-2 mr-5"
            onChange={() => {
              setFields({ ...fields, cname: !fields.cname });
            }}
          />
        </label>
      ) : null}
      {visible.credit ? (
        <label className="label cursor-pointer">
          <span className="label-text">学分</span>
          <input
            type="checkbox"
            checked={fields.credit}
            className="checkbox ml-2 mr-5"
            onChange={() => {
              setFields({ ...fields, credit: !fields.credit });
            }}
          />
        </label>
      ) : null}
      {visible.cpno ? (
        <label className="label cursor-pointer">
          <span className="label-text">先行课课程号</span>
          <input
            type="checkbox"
            checked={fields.cpno}
            className="checkbox ml-2 mr-5"
            onChange={() => {
              setFields({ ...fields, cpno: !fields.cpno });
            }}
          />
        </label>
      ) : null}
      {visible.cpname ? (
        <label className="label cursor-pointer">
          <span className="label-text">先行课课程名</span>
          <input
            type="checkbox"
            checked={fields.cpname}
            className="checkbox ml-2 mr-5"
            onChange={() => {
              setFields({ ...fields, cpname: !fields.cpname });
            }}
          />
        </label>
      ) : null}
      {visible.cpcredit ? (
        <label className="label cursor-pointer">
          <span className="label-text">先行课学分</span>
          <input
            type="checkbox"
            checked={fields.cpcredit}
            className="checkbox ml-2 mr-5"
            onChange={() => {
              setFields({ ...fields, cpcredit: !fields.cpcredit });
            }}
          />
        </label>
      ) : null}
      {visible.cnextno ? (
        <label className="label cursor-pointer">
          <span className="label-text">后继课课程号</span>
          <input
            type="checkbox"
            checked={fields.cnextno}
            className="checkbox ml-2 mr-5"
            onChange={() => {
              setFields({ ...fields, cnextno: !fields.cnextno });
            }}
          />
        </label>
      ) : null}
      {visible.cnextname ? (
        <label className="label cursor-pointer">
          <span className="label-text">后继课课程名</span>
          <input
            type="checkbox"
            checked={fields.cnextname}
            className="checkbox ml-2 mr-5"
            onChange={() => {
              setFields({ ...fields, cnextname: !fields.cnextname });
            }}
          />
        </label>
      ) : null}
      {visible.cnextcredit ? (
        <label className="label cursor-pointer">
          <span className="label-text">后继课学分</span>
          <input
            type="checkbox"
            checked={fields.cnextcredit}
            className="checkbox ml-2 mr-5"
            onChange={() => {
              setFields({ ...fields, cnextcredit: !fields.cnextcredit });
            }}
          />
        </label>
      ) : null}
      {visible.grade ? (
        <label className="label cursor-pointer">
          <span className="label-text">成绩</span>
          <input
            type="checkbox"
            checked={fields.grade}
            className="checkbox ml-2 mr-5"
            onChange={() => {
              setFields({ ...fields, grade: !fields.grade });
            }}
          />
        </label>
      ) : null}
    </div>
  );
}
