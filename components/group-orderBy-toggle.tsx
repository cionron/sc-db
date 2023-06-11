"use client";

interface props {
  visible: any;
  orderBy: string[];
  setOrderBy: any;
  className?: string;
}

export default function GroupOrderByToggle({
  visible,
  orderBy,
  setOrderBy,
  className,
}: props) {
  const handleChangeOrder = (field: string) => {
    if (!orderBy.includes(field)) {
      const nextOrderBy: string[] = [...orderBy, field];
      setOrderBy(nextOrderBy);
    } else {
      const index = orderBy.indexOf(field);
      const nextOrderBy: string[] = [
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
        {visible.countGrade ? (
          <label className="label cursor-pointer">
            <span className="label-text">count 成绩</span>
            <input
              type="checkbox"
              checked={orderBy.includes("count Grade")}
              className="toggle ml-2 mr-5"
              onChange={() => {
                handleChangeOrder("count Grade");
              }}
            />
          </label>
        ) : null}
        {visible.sumGrade ? (
          <label className="label cursor-pointer">
            <span className="label-text">sum 成绩</span>
            <input
              type="checkbox"
              checked={orderBy.includes("sum Grade")}
              className="toggle ml-2 mr-5"
              onChange={() => {
                handleChangeOrder("sum Grade");
              }}
            />
          </label>
        ) : null}
        {visible.avgGrade ? (
          <label className="label cursor-pointer">
            <span className="label-text">avg 成绩</span>
            <input
              type="checkbox"
              checked={orderBy.includes("avg Grade")}
              className="toggle ml-2 mr-5"
              onChange={() => {
                handleChangeOrder("avg Grade");
              }}
            />
          </label>
        ) : null}
        {visible.maxGrade ? (
          <label className="label cursor-pointer">
            <span className="label-text">max 成绩</span>
            <input
              type="checkbox"
              checked={orderBy.includes("max Grade")}
              className="toggle ml-2 mr-5"
              onChange={() => {
                handleChangeOrder("max Grade");
              }}
            />
          </label>
        ) : null}
        {visible.minGrade ? (
          <label className="label cursor-pointer">
            <span className="label-text">min 成绩</span>
            <input
              type="checkbox"
              checked={orderBy.includes("min Grade")}
              className="toggle ml-2 mr-5"
              onChange={() => {
                handleChangeOrder("min Grade");
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
