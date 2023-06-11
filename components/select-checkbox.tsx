import { FieldsSelect } from "@/app/sc-query";
import React, { useState } from "react";

interface props {
  select: FieldsSelect;
  setSelect: React.Dispatch<React.SetStateAction<FieldsSelect>>;
  className?: string;
}

export const allFalseSelect: FieldsSelect = {
  id: false,
  sno: false,
  sname: false,
  sex: false,
  age: false,
  dept: false,
  email: false,
  phone_num: false,
  address: false,
  cno: false,
  cname: false,
  credit: false,
  cpno: false,
  cpname: false,
  cpcredit: false,
  cnextno: false,
  cnextname: false,
  cnextcredit: false,
  grade: false,
};
export const allTrueSelect: FieldsSelect = {
  id: true,
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
  cpno: true,
  cpname: true,
  cpcredit: true,
  cnextno: true,
  cnextname: true,
  cnextcredit: true,
  grade: true,
};
export default function SelectCheckBox({
  select,
  setSelect,
  className,
}: props) {
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    setSelect(selectAll ? allFalseSelect : allTrueSelect);
    setSelectAll(!selectAll);
  };
  return (
    <div className={`${className}`}>
      <label className="label cursor-pointer">
        <span className="label-text">全选</span>
        <input
          type="checkbox"
          checked={Object.values(select).every(Boolean)}
          className="checkbox ml-2 mr-5"
          onChange={handleSelectAll}
        />
      </label>
      <label className="label cursor-pointer">
        <span className="label-text">学号</span>
        <input
          type="checkbox"
          checked={select.sno}
          className="checkbox ml-2 mr-5"
          onChange={() => {
            setSelect({ ...select, sno: !select.sno });
          }}
        />
      </label>
      <label className="label cursor-pointer">
        <span className="label-text">姓名</span>
        <input
          type="checkbox"
          checked={select.sname}
          className="checkbox ml-2 mr-5"
          onChange={() => {
            setSelect({ ...select, sname: !select.sname });
          }}
        />
      </label>
      <label className="label cursor-pointer">
        <span className="label-text">性别</span>
        <input
          type="checkbox"
          checked={select.sex}
          className="checkbox ml-2 mr-5"
          onChange={() => {
            setSelect({ ...select, sex: !select.sex });
          }}
        />
      </label>
      <label className="label cursor-pointer">
        <span className="label-text">年龄</span>
        <input
          type="checkbox"
          checked={select.age}
          className="checkbox ml-2 mr-5"
          onChange={() => {
            setSelect({ ...select, age: !select.age });
          }}
        />
      </label>

      <label className="label cursor-pointer">
        <span className="label-text">修读专业</span>
        <input
          type="checkbox"
          checked={select.dept}
          className="checkbox ml-2 mr-5"
          onChange={() => {
            setSelect({ ...select, dept: !select.dept });
          }}
        />
      </label>
      <label className="label cursor-pointer">
        <span className="label-text">电子邮箱</span>
        <input
          type="checkbox"
          checked={select.email}
          className="checkbox ml-2 mr-5"
          onChange={() => {
            setSelect({ ...select, email: !select.email });
          }}
        />
      </label>
      <label className="label cursor-pointer">
        <span className="label-text">电话号码</span>
        <input
          type="checkbox"
          checked={select.phone_num}
          className="checkbox ml-2 mr-5"
          onChange={() => {
            setSelect({ ...select, phone_num: !select.phone_num });
          }}
        />
      </label>
      <label className="label cursor-pointer">
        <span className="label-text">家庭地址</span>
        <input
          type="checkbox"
          checked={select.address}
          className="checkbox ml-2 mr-5"
          onChange={() => {
            setSelect({ ...select, address: !select.address });
          }}
        />
      </label>
      <label className="label cursor-pointer">
        <span className="label-text">课程号</span>
        <input
          type="checkbox"
          checked={select.cno}
          className="checkbox ml-2 mr-5"
          onChange={() => {
            setSelect({ ...select, cno: !select.cno });
          }}
        />
      </label>
      <label className="label cursor-pointer">
        <span className="label-text">课程名</span>
        <input
          type="checkbox"
          checked={select.cname}
          className="checkbox ml-2 mr-5"
          onChange={() => {
            setSelect({ ...select, cname: !select.cname });
          }}
        />
      </label>
      <label className="label cursor-pointer">
        <span className="label-text">学分</span>
        <input
          type="checkbox"
          checked={select.credit}
          className="checkbox ml-2 mr-5"
          onChange={() => {
            setSelect({ ...select, credit: !select.credit });
          }}
        />
      </label>
      <label className="label cursor-pointer">
        <span className="label-text">先行课课程号</span>
        <input
          type="checkbox"
          checked={select.cpno}
          className="checkbox ml-2 mr-5"
          onChange={() => {
            setSelect({ ...select, cpno: !select.cpno });
          }}
        />
      </label>
      <label className="label cursor-pointer">
        <span className="label-text">先行课课程名</span>
        <input
          type="checkbox"
          checked={select.cpname}
          className="checkbox ml-2 mr-5"
          onChange={() => {
            setSelect({ ...select, cpname: !select.cpname });
          }}
        />
      </label>
      <label className="label cursor-pointer">
        <span className="label-text">先行课学分</span>
        <input
          type="checkbox"
          checked={select.cpcredit}
          className="checkbox ml-2 mr-5"
          onChange={() => {
            setSelect({ ...select, cpcredit: !select.cpcredit });
          }}
        />
      </label>
      <label className="label cursor-pointer">
        <span className="label-text">后继课课程号</span>
        <input
          type="checkbox"
          checked={select.cnextno}
          className="checkbox ml-2 mr-5"
          onChange={() => {
            setSelect({ ...select, cnextno: !select.cnextno });
          }}
        />
      </label>
      <label className="label cursor-pointer">
        <span className="label-text">后继课课程名</span>
        <input
          type="checkbox"
          checked={select.cnextname}
          className="checkbox ml-2 mr-5"
          onChange={() => {
            setSelect({ ...select, cnextname: !select.cnextname });
          }}
        />
      </label>
      <label className="label cursor-pointer">
        <span className="label-text">后继课学分</span>
        <input
          type="checkbox"
          checked={select.cnextcredit}
          className="checkbox ml-2 mr-5"
          onChange={() => {
            setSelect({ ...select, cnextcredit: !select.cnextcredit });
          }}
        />
      </label>
      <label className="label cursor-pointer">
        <span className="label-text">成绩</span>
        <input
          type="checkbox"
          checked={select.grade}
          className="checkbox ml-2 mr-5"
          onChange={() => {
            setSelect({ ...select, grade: !select.grade });
          }}
        />
      </label>
    </div>
  );
}
