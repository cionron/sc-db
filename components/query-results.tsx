import { CSVLink } from "react-csv";

export interface AggregateResult {
  _count: {
    _all: number;
    sno?: number;
    cno?: number;
    grade?: number;
  };
  _sum?: {
    sno?: number;
    cno?: number;
    grade?: number;
  };
  _avg?: {
    sno?: number;
    cno?: number;
    grade?: number;
  };
  _max?: {
    sno?: number;
    cno?: number;
    grade?: number;
  };
  _min?: {
    sno?: number;
    cno?: number;
    grade?: number;
  };
}

interface props {
  findResult: any;
  aggregateResult: AggregateResult;
  groupByResult: any;
  fetchedFind: boolean;
  fetchedAggregate: boolean;
  fetchedGroupBy: boolean;
}

export default function CsvResults({
  findResult,
  aggregateResult,
  groupByResult,
  fetchedFind,
  fetchedAggregate,
  fetchedGroupBy,
}: props) {
  const findHeaders = [
    {
      label: "学号",
      key: "sno",
    },
    {
      label: "课程号",
      key: "cno",
    },
    {
      label: "成绩",
      key: "grade",
    },
    {
      label: "学号",
      key: "snoToS.sno",
    },
    {
      label: "姓名",
      key: "snoToS.sname",
    },
    {
      label: "性别",
      key: "snoToS.sex",
    },
    {
      label: "年龄",
      key: "snoToS.age",
    },
    {
      label: "专业",
      key: "snoToS.dept",
    },
    {
      label: "电子邮箱",
      key: "snoToS.email",
    },
    {
      label: "电话号码",
      key: "snoToS.phone_num",
    },
    {
      label: "家庭地址",
      key: "snoToS.address",
    },
    {
      label: "课程号",
      key: "cnoToC.cno",
    },
    {
      label: "课程名",
      key: "cnoToC.cname",
    },
    {
      label: "学分",
      key: "cnoToC.credit",
    },
    {
      label: "先行课(1)课程号",
      key: "cnoToC.cpre[0].cno",
    },
    {
      label: "先行课(1)课程名",
      key: "cnoToC.cpre[0].cname",
    },
    {
      label: "先行课(1)学分",
      key: "cnoToC.cpre[0].credit",
    },
    {
      label: "先行课(2)课程号",
      key: "cnoToC.cpre[1].cno",
    },
    {
      label: "先行课(2)课程名",
      key: "cnoToC.cpre[1].cname",
    },
    {
      label: "先行课(2)学分",
      key: "cnoToC.cpre[1].credit",
    },
    {
      label: "先行课(3)课程号",
      key: "cnoToC.cpre[2].cno",
    },
    {
      label: "先行课(3)课程名",
      key: "cnoToC.cpre[2].cname",
    },
    {
      label: "先行课(3)学分",
      key: "cnoToC.cpre[2].credit",
    },
    {
      label: "后继课(1)课程号",
      key: "cnoToC.cnext[0].cno",
    },
    {
      label: "后继课(1)课程名",
      key: "cnoToC.cnext[0].cname",
    },
    {
      label: "后继课(1)学分",
      key: "cnoToC.cnext[0].credit",
    },
    {
      label: "后继课(2)课程号",
      key: "cnoToC.cnext[1].cno",
    },
    {
      label: "后继课(2)课程名",
      key: "cnoToC.cnext[1].cname",
    },
    {
      label: "后继课(2)学分",
      key: "cnoToC.cnext[1].credit",
    },
    {
      label: "后继课(3)课程号",
      key: "cnoToC.cnext[2].cno",
    },
    {
      label: "后继课(3)课程名",
      key: "cnoToC.cnext[2].cname",
    },
    {
      label: "后继课(3)学分",
      key: "cnoToC.cnext[2].credit",
    },
    {
      label: "后继课(4)课程号",
      key: "cnoToC.cnext[3].cno",
    },
    {
      label: "后继课(4)课程名",
      key: "cnoToC.cnext[3].cname",
    },
    {
      label: "后继课(4)学分",
      key: "cnoToC.cnext[3].credit",
    },
    {
      label: "后继课(5)课程号",
      key: "cnoToC.cnext[4].cno",
    },
    {
      label: "后继课(5)课程名",
      key: "cnoToC.cnext[4].cname",
    },
    {
      label: "后继课(5)学分",
      key: "cnoToC.cnext[4].credit",
    },
    {
      label: "后继课(6)课程号",
      key: "cnoToC.cnext[5].cno",
    },
    {
      label: "后继课(6)课程名",
      key: "cnoToC.cnext[5].cname",
    },
    {
      label: "后继课(6)学分",
      key: "cnoToC.cnext[5].credit",
    },
    {
      label: "后继课(7)课程号",
      key: "cnoToC.cnext[6].cno",
    },
    {
      label: "后继课(7)课程名",
      key: "cnoToC.cnext[6].cname",
    },
    {
      label: "后继课(7)学分",
      key: "cnoToC.cnext[6].credit",
    },
  ];

  const groupByHeaders = [
    {
      label: "分组学号",
      key: "sno",
    },
    {
      label: "分组课程",
      key: "cno",
    },
    {
      label: "分组成绩",
      key: "grade",
    },
    {
      label: "COUNT 学号",
      key: "_count.sno",
    },
    {
      label: "COUNT 课程号",
      key: "_count.cno",
    },
    {
      label: "COUNT 成绩",
      key: "_count.grade",
    },
    {
      label: "SUM 成绩",
      key: "_sum.grade",
    },
    {
      label: "AVG 成绩",
      key: "_avg.grade",
    },
    {
      label: "MAX 成绩",
      key: "_max.grade",
    },
    {
      label: "MIN 成绩",
      key: "_min.grade",
    },
    {
      label: "COUNT(计入空值)",
      key: "_count._all",
    },
  ];

  if (fetchedAggregate === true) {
    if (aggregateResult._count._all === 0) {
      return <p className="alert mt-5 text-xl">未查询到任何记录</p>;
    } else {
      return (
        <div className="collapse collapse-open border border-base-300 bg-base-200 mt-5 rounded-2xl">
          <div className="collapse-content">
            <div className="collapse-title text-2xl font-medium">
              查询到 {aggregateResult._count._all} 条记录
            </div>
            {aggregateResult._count.sno ||
            aggregateResult._count.cno ||
            aggregateResult._count.grade ||
            aggregateResult._sum ||
            aggregateResult._avg ||
            aggregateResult._max ||
            aggregateResult._min ? (
              <div className="m-3 text-lg">
                <p>聚集结果</p>
                {aggregateResult._count.sno ? (
                  <p>
                    {"COUNT Sno: "}
                    {aggregateResult._count.sno.toString()}
                  </p>
                ) : null}
                {aggregateResult._count.cno ? (
                  <p>
                    {"COUNT Cno: "}
                    {aggregateResult._count.cno.toString()}
                  </p>
                ) : null}
                {aggregateResult._count.grade ? (
                  <p>
                    {"COUNT Grade: "}
                    {aggregateResult._count.grade.toString()}
                  </p>
                ) : null}
                {aggregateResult._sum?.grade ? (
                  <p>
                    {"SUM Grade: "}
                    {aggregateResult._sum.grade.toString()}
                  </p>
                ) : null}
                {aggregateResult._avg?.grade ? (
                  <p>
                    {"AVG Grade: "}
                    {aggregateResult._avg.grade.toString()}
                  </p>
                ) : null}
                {aggregateResult._max?.grade ? (
                  <p>
                    {"MAX Grade: "}
                    {aggregateResult._max.grade.toString()}
                  </p>
                ) : null}
                {aggregateResult._min?.grade ? (
                  <p>
                    {"MIN Grade: "}
                    {aggregateResult._min.grade.toString()}
                  </p>
                ) : null}
              </div>
            ) : null}
            {fetchedFind && findResult.length > 0 ? (
              <CSVLink data={findResult} headers={findHeaders}>
                <button className="btn m-1">{"下载记录表格 ( .csv )"}</button>
              </CSVLink>
            ) : null}
            {fetchedGroupBy && groupByResult.length > 0 ? (
              <CSVLink data={groupByResult} headers={groupByHeaders}>
                <button className="btn m-1">{"下载分组表格 ( .csv )"}</button>
              </CSVLink>
            ) : null}

            {fetchedAggregate ? (
              <p className="mx-3">请耐心等待生成表格, 仅返回前 30000 条记录</p>
            ) : null}
          </div>
        </div>
      );
    }
  } else {
    return <></>;
  }
}
