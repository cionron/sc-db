"use client";

import { FormControlLabel, Switch } from "@mui/material";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Prisma } from "@prisma/client";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

const theme = createTheme({
  palette: {
    primary: { main: "#3d4451" },
  },
});

export default function SCAddForm() {
  const router = useRouter();
  const [sno, setSno] = useState("");
  const [cno, setCno] = useState("");
  const [grade, setGrade] = useState(0);
  const [nullGrade, setNullGrade] = useState(false);

  function handChangeSno(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const input = event.target.value;
    // validate fun
    setSno(input);
  }

  function handChangeCno(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const input = event.target.value;
    // validate fun
    setCno(input);
  }

  function handChangeGrade(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const input = event.target.value;
    setGrade(Number(input));
  }

  function handleNullGrade() {
    setNullGrade(!nullGrade);
  }

  const handleSubmit = () => {
    const reqSC: Prisma.SCCreateInput = {
      snoToS: {
        connect: {
          sno: sno,
        },
      },
      cnoToC: {
        connect: {
          cno: cno,
        },
      },
    };
    if (!nullGrade) {
      reqSC.grade = grade;
    }

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/createSC`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqSC),
    });
    router.push("/select-courses");
    router.refresh();
  };

  return (
    <ThemeProvider theme={theme}>
      <p className="text-4xl py-5 font-bold">新增选课</p>
      <form className="form-control grid grid-cols-2 gap-8 justify-between items-center">
        <label className="input-group ">
          <TextField
            type="text"
            label="学号"
            placeholder="AC100001"
            onChange={handChangeSno}
            variant="outlined"
            className="w-full"
          />
        </label>
        <label className="input-group ">
          <TextField
            type="text"
            label="课程号"
            placeholder="A1001"
            onChange={handChangeCno}
            variant="outlined"
            className="w-full"
          />
        </label>

        <label className="input-group ">
          <TextField
            type="number"
            label="成绩"
            placeholder="0"
            InputProps={{ inputProps: { min: 0, max: 100 } }}
            disabled={nullGrade}
            onChange={handChangeGrade}
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
        <label htmlFor="my-add-sc-modal" className="btn">
          存为草稿
        </label>
      </form>
    </ThemeProvider>
  );
}
