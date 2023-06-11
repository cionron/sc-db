"use client";

import { FieldsEnum, FieldsSelect } from "@/app/sc-query";

interface props {
  visible: FieldsSelect;
  orderBy: FieldsEnum[];
  setOrderBy: any;
  className?: string;
}

export default function OrderByToggle({
  visible,
  orderBy,
  setOrderBy,
  className,
}: props) {
  const handleChangeOrder = (field: FieldsEnum) => {
    if (!orderBy.includes(field)) {
      const nextOrderBy: FieldsEnum[] = [...orderBy, field];
      setOrderBy(nextOrderBy);
    } else {
      const index = orderBy.indexOf(field);
      const nextOrderBy: FieldsEnum[] = [
        ...orderBy.slice(0, index),
        ...orderBy.slice(index + 1),
      ];
      setOrderBy(nextOrderBy);
    }
  };
  return (
    <div>
      <div className={`${className}`}>
        {visible.sno ? (
          <label className="label cursor-pointer">
            <span className="label-text"> 学号</span>
            <input
              type="checkbox"
              checked={orderBy.includes("sno")}
              className="toggle ml-2 mr-5 "
              onChange={() => {
                handleChangeOrder("sno");
              }}
            />
          </label>
        ) : null}
        {visible.sname ? (
          <label className="label cursor-pointer">
            <span className="label-text">姓名</span>
            <input
              type="checkbox"
              checked={orderBy.includes("sname")}
              className="toggle ml-2 mr-5"
              onChange={() => {
                handleChangeOrder("sname");
              }}
            />
          </label>
        ) : null}
        {visible.sex ? (
          <label className="label cursor-pointer">
            <span className="label-text">性别</span>
            <input
              type="checkbox"
              checked={orderBy.includes("sex")}
              className="toggle ml-2 mr-5"
              onChange={() => {
                handleChangeOrder("sex");
              }}
            />
          </label>
        ) : null}
        {visible.age ? (
          <label className="label cursor-pointer">
            <span className="label-text">年龄</span>
            <input
              type="checkbox"
              checked={orderBy.includes("age")}
              className="toggle ml-2 mr-5"
              onChange={() => {
                handleChangeOrder("age");
              }}
            />
          </label>
        ) : null}
        {visible.dept ? (
          <label className="label cursor-pointer">
            <span className="label-text">修读专业</span>
            <input
              type="checkbox"
              checked={orderBy.includes("dept")}
              className="toggle ml-2 mr-5"
              onChange={() => {
                handleChangeOrder("dept");
              }}
            />
          </label>
        ) : null}
        {visible.email ? (
          <label className="label cursor-pointer">
            <span className="label-text">电子邮箱</span>
            <input
              type="checkbox"
              checked={orderBy.includes("email")}
              className="toggle ml-2 mr-5"
              onChange={() => {
                handleChangeOrder("email");
              }}
            />
          </label>
        ) : null}
        {visible.phone_num ? (
          <label className="label cursor-pointer">
            <span className="label-text">电话号码</span>
            <input
              type="checkbox"
              checked={orderBy.includes("phone_num")}
              className="toggle ml-2 mr-5"
              onChange={() => {
                handleChangeOrder("phone_num");
              }}
            />
          </label>
        ) : null}
        {visible.address ? (
          <label className="label cursor-pointer">
            <span className="label-text">家庭地址</span>
            <input
              type="checkbox"
              checked={orderBy.includes("address")}
              className="toggle ml-2 mr-5"
              onChange={() => {
                handleChangeOrder("address");
              }}
            />
          </label>
        ) : null}
        {visible.cno ? (
          <label className="label cursor-pointer">
            <span className="label-text">课程号</span>
            <input
              type="checkbox"
              checked={orderBy.includes("cno")}
              className="toggle ml-2 mr-5"
              onChange={() => {
                handleChangeOrder("cno");
              }}
            />
          </label>
        ) : null}
        {visible.cname ? (
          <label className="label cursor-pointer">
            <span className="label-text">课程名</span>
            <input
              type="checkbox"
              checked={orderBy.includes("cname")}
              className="toggle ml-2 mr-5"
              onChange={() => {
                handleChangeOrder("cname");
              }}
            />
          </label>
        ) : null}
        {visible.credit ? (
          <label className="label cursor-pointer">
            <span className="label-text">学分</span>
            <input
              type="checkbox"
              checked={orderBy.includes("credit")}
              className="toggle ml-2 mr-5"
              onChange={() => {
                handleChangeOrder("credit");
              }}
            />
          </label>
        ) : null}
        {visible.grade ? (
          <label className="label cursor-pointer">
            <span className="label-text">成绩</span>
            <input
              type="checkbox"
              checked={orderBy.includes("grade")}
              className="toggle ml-2 mr-5"
              onChange={() => {
                handleChangeOrder("grade");
              }}
            />
          </label>
        ) : null}
      </div>
      {orderBy.map((order, index) => (
        <div
          key={index}
          onClick={() => handleChangeOrder(order)}
          className="btn btn-sm  mx-3 my-1  hover:bg-red-500 hover:border-red-500"
        >
          {index + 1} {". "} {order} {"[DESC]"}
        </div>
      ))}
    </div>
  );
}
