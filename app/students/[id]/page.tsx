"use client";

import {
  fallbackGender,
  fallbackMajor,
  translateMajor,
  trnaslateGender,
} from "@/lib/utils/translate";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ChangeEvent, useEffect, useState } from "react";
import { Gender, Major } from "@prisma/client";
import { useRouter } from "next/navigation";
import { Student } from "@/lib/types";

const theme = createTheme({
  palette: {
    primary: { main: "#3d4451" },
  },
});

const fetchStudentById = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/queryStudent/${id}`
  );
  return res.json();
};

export default function UserUpdatePage({ params }: { params: { id: string } }) {
  const router = useRouter();

  const [updateSno, setUpdateSno] = useState("");
  const [updateSname, setUpdateSname] = useState("");
  const [updateSex, setUpdateSex] = useState("");
  const [updateAge, setUpdateAge] = useState(0);
  const [updateDept, setUpdateDept] = useState("");
  const [updateEmail, setUpdateEmail] = useState("");
  const [updatePhoneNum, setUpdatePhoneNum] = useState("");
  const [updateAddress, setUpdateAddress] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let componentMounted = true;
    if (params.id != null) {
      fetchStudentById(params.id).then((student: Student) => {
        if (componentMounted) {
          setUpdateSno(student.sno);
          setUpdateSname(student.sname);
          setUpdateSex(trnaslateGender(student.sex));
          setUpdateAge(student.age);
          setUpdateDept(translateMajor(student.dept));
          setUpdateEmail(student.email);
          setUpdatePhoneNum(student.phone_num);
          setUpdateAddress(student.address);
          setLoading(false);
        }
      });
    }
    return () => {
      componentMounted = false;
    };
  }, [params.id]);

  function handChangeSno(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const input = event.target.value;
    // validate fun
    setUpdateSno(input);
  }

  function handleChangeName(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const input = event.target.value;
    // validate fun
    setUpdateSname(input);
  }

  function handleChangeSex(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const input = event.target.value;
    // validate fun
    setUpdateSex(input);
  }

  function handleChangeAge(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const input = event.target.value;
    // validate fun
    if (Number(input) < 10) {
      setUpdateAge(10);
    } else if (Number(input) > 100) {
      setUpdateAge(100);
    } else {
      setUpdateAge(Number(input));
    }
  }
  function handleChangeMajor(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const input = event.target.value;
    // validate fun
    setUpdateDept(input);
  }

  function handleChangeEmail(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const input = event.target.value;
    // validate fun
    setUpdateEmail(input);
  }

  function handleChangPhoneNum(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const input = event.target.value;
    // validate fun
    setUpdatePhoneNum(input);
  }

  function handleChangeAddress(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const input = event.target.value;
    // validate fun
    setUpdateAddress(input);
  }
  const handleSubmit = () => {
    const sexF = fallbackGender(updateSex);
    const deptF = fallbackMajor(updateDept);
    const reqStudent = {
      id: Number(params.id),
      sno: updateSno,
      sname: updateSname,
      sex: sexF,
      age: updateAge,
      dept: deptF,
      email: updateEmail,
      phone_num: updateEmail,
      address: updateAddress,
    };

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/updateStudent/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqStudent),
    });
    router.back();
  };

  const handleDelete = () => {
    const reqStudent = {
      id: Number(params.id),
    };
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/deleteStudent/${params.id}`, {
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
          <p className="text-4xl pt-5 px-5 font-bold col-span-2">编辑学生</p>
          <label className="input-group ">
            <TextField
              type="text"
              label="学号"
              defaultValue={updateSno}
              onChange={handChangeSno}
              variant="outlined"
              className="w-full"
            />
          </label>

          <label className="input-group">
            <TextField
              type="text"
              label="姓名"
              defaultValue={updateSname}
              onChange={handleChangeName}
              variant="outlined"
              className="w-full"
            />
          </label>
          <label className="input-group">
            <TextField
              select
              label="性别"
              defaultValue={updateSex}
              className="w-full"
              onChange={handleChangeSex}
            >
              {Object.values(Gender)
                .map(trnaslateGender)
                .map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
            </TextField>
          </label>
          <label className="input-group">
            <TextField
              type="number"
              label="年龄"
              InputProps={{ inputProps: { min: 10, max: 100 } }}
              defaultValue={updateAge}
              onChange={handleChangeAge}
              variant="outlined"
              className="w-full"
            />
          </label>
          <label className="input-group ">
            <TextField
              select
              label="修读专业"
              defaultValue={updateDept}
              onChange={handleChangeMajor}
              className="w-full"
            >
              {Object.values(Major)
                .map(translateMajor)
                .map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
            </TextField>
          </label>
          <label className="input-group">
            <TextField
              type="email"
              label="电子邮箱"
              defaultValue={updateEmail}
              onChange={handleChangeEmail}
              variant="outlined"
              className="w-full"
            />
          </label>
          <label className="input-group">
            <TextField
              type="text"
              label="联系电话"
              defaultValue={updatePhoneNum}
              onChange={handleChangPhoneNum}
              variant="outlined"
              className="w-full"
            />
          </label>
          <label className="input-group ">
            <TextField
              type="text"
              label="家庭地址"
              defaultValue={updateAddress}
              onChange={handleChangeAddress}
              variant="outlined"
              className="w-full"
            />
          </label>
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
            删除此学生
          </button>
        </div>
      )}
    </ThemeProvider>
  );
}
