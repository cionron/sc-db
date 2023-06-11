"use client";

import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ChangeEvent, useEffect, useState } from "react";
import { Prisma } from "@prisma/client";
import { useRouter } from "next/navigation";
import { FormControlLabel, Switch } from "@mui/material";
import { translateCourse } from "@/lib/utils/translate";
import { fetchSCById } from "../sc-row";

const theme = createTheme({
  palette: {
    primary: { main: "#3d4451" },
  },
});

export default function SCUpdatePage({ params }: { params: { id: string } }) {
  const router = useRouter();

  const [sno, setSno] = useState("");
  const [cno, setCno] = useState("");
  const [sname, setSname] = useState("");
  const [cname, setCname] = useState("");
  const [updateGrade, setUpdateGrade] = useState<number | undefined>(0);
  const [nullGrade, setNullGrade] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let componentMounted = true;
    if (params.id != null) {
      fetchSCById(params.id).then((sc) => {
        if (componentMounted) {
          setSno(sc.sno);
          setCno(sc.cno);
          setSname(sc.snoToS.sname);
          setCname(translateCourse(sc.cnoToC.cname));
          if (sc.grade !== null) {
            setUpdateGrade(sc.grade);
          } else {
            setNullGrade(true);
          }
          setLoading(false);
        }
      });
    }
    return () => {
      componentMounted = false;
    };
  }, [params.id]);

  function handleChangeGrade(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const input = event.target.value;
    // validate fun
    if (Number(input) < 0) {
      setUpdateGrade(0);
    } else if (Number(input) > 100) {
      setUpdateGrade(100);
    } else {
      setUpdateGrade(Number(input));
    }
  }

  function handleNullGrade() {
    setNullGrade(!nullGrade);
  }

  const handleSubmit = () => {
    const reqSC: Prisma.SCUpdateInput = {};
    if (!nullGrade) {
      reqSC.grade = updateGrade;
    } else {
      reqSC.grade = null;
    }

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/updateSC/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqSC),
    });
    router.back();
  };

  const handleDelete = () => {
    const reqStudent = {
      id: Number(params.id),
    };
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/deleteSC/${params.id}`, {
      method: "DELETE",
    });
    router.back();
  };

  return (
    <ThemeProvider theme={theme}>
      {loading ? (
        <p> {"Loading..."} </p>
      ) : (
        <div className="rounded-2xl bg-white m-4 p-4 shadow-xl grid grid-cols-2 gap-8 justify-between items-center">
          <p className="text-4xl pt-5 px-5 font-bold col-span-2">编辑记录</p>
          <label className="input-group ">
            <TextField
              type="text"
              label="学号"
              disabled
              value={sno}
              variant="outlined"
              className="w-full"
            />
          </label>
          <label className="input-group ">
            <TextField
              type="text"
              label="姓名"
              disabled
              value={sname}
              variant="outlined"
              className="w-full"
            />
          </label>
          <label className="input-group ">
            <TextField
              type="text"
              label="课程号"
              disabled
              value={cno}
              variant="outlined"
              className="w-full"
            />
          </label>
          <label className="input-group ">
            <TextField
              type="text"
              label="课程名"
              disabled
              value={cname}
              variant="outlined"
              className="w-full"
            />
          </label>
          <label className="input-group ">
            <TextField
              type="number"
              label="成绩"
              InputProps={{ inputProps: { min: 0, max: 100 } }}
              defaultValue={updateGrade}
              disabled={nullGrade}
              onChange={handleChangeGrade}
              variant="outlined"
              className="w-full"
            />
          </label>
          <FormControlLabel
            control={<Switch checked={nullGrade} onChange={handleNullGrade} />}
            label="成绩录入为空值"
          />
          <button onClick={handleSubmit} className="btn btn-success">
            确定
          </button>
          <button className="btn" onClick={() => router.back()}>
            放弃编辑
          </button>

          <button
            onClick={handleDelete}
            className="btn btn-error w-full col-span-2"
          >
            删除此记录
          </button>
        </div>
      )}
    </ThemeProvider>
  );
}
