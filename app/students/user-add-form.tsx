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
import { Gender, Major, Prisma } from "@prisma/client";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

const theme = createTheme({
  palette: {
    primary: { main: "#3d4451" },
  },
});

export default function UserAddForm() {
  const router = useRouter();
  const [sno, setSno] = useState("");
  const [sname, setSname] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState(0);
  const [dept, setDept] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [address, setAddress] = useState("");

  function handChangeSno(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const input = event.target.value;
    // validate fun
    setSno(input);
  }

  function handleChangeName(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const input = event.target.value;
    // validate fun
    setSname(input);
  }

  function handleChangeSex(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const input = event.target.value;
    // validate fun
    setSex(input);
  }

  function handleChangeAge(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const input = event.target.value;
    // validate fun
    if (Number(input) < 10) {
      setAge(10);
    } else if (Number(input) > 100) {
      setAge(100);
    } else {
      setAge(Number(input));
    }
  }
  function handleChangeMajor(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const input = event.target.value;
    // validate fun
    setDept(input);
  }

  function handChangeEmail(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const input = event.target.value;
    // validate fun
    setEmail(input);
  }

  function handChangPhoneNum(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const input = event.target.value;
    // validate fun
    setPhoneNum(input);
  }

  function handChangeAddress(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const input = event.target.value;
    // validate fun
    setAddress(input);
  }
  const handleSubmit = () => {
    const sexF = fallbackGender(sex);
    const deptF = fallbackMajor(dept);
    const reqStudent = {
      sno: sno,
      sname: sname,
      sex: sexF,
      age: age,
      dept: deptF,
      email: email,
      phone_num: phoneNum,
      address: address,
    };

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/createStudent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqStudent),
    });
    router.push("/students");
    router.refresh();
  };

  return (
    <ThemeProvider theme={theme}>
      <p className="text-4xl py-5 font-bold">新增学生</p>
      <form className="form-control grid grid-cols-2 gap-8 justify-between items-center">
        <label className="input-group ">
          <TextField
            type="text"
            id="inputSno"
            name="sno"
            label="学号"
            placeholder="AC100001"
            onChange={handChangeSno}
            variant="outlined"
            className="w-full"
          />
        </label>

        <label className="input-group">
          <TextField
            type="text"
            id="inputSname"
            name="sname"
            label="姓名"
            placeholder="张三"
            onChange={handleChangeName}
            variant="outlined"
            className="w-full"
          />
        </label>
        <label className="input-group">
          <TextField
            id="inputSex"
            select
            label="性别"
            className="w-full"
            defaultValue=""
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
            id="inputAge"
            name="age"
            label="年龄"
            InputProps={{ inputProps: { min: 10, max: 100 } }}
            onChange={handleChangeAge}
            variant="outlined"
            className="w-full"
          />
        </label>
        <label className="input-group ">
          <TextField
            id="inputMajor"
            select
            label="修读专业"
            onChange={handleChangeMajor}
            defaultValue=""
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
            id="inputEmail"
            name="email"
            label="电子邮箱"
            placeholder="user@example.com"
            onChange={handChangeEmail}
            variant="outlined"
            className="w-full"
          />
        </label>
        <label className="input-group">
          <TextField
            type="text"
            id="inputPhoneNum"
            name="phone_num"
            label="联系电话"
            placeholder="13000000000"
            onChange={handChangPhoneNum}
            variant="outlined"
            className="w-full"
          />
        </label>
        <label className="input-group ">
          <TextField
            type="text"
            id="inputAddress"
            name="address"
            label="家庭地址"
            placeholder="江苏省南京市江宁区"
            onChange={handChangeAddress}
            variant="outlined"
            className="w-full"
          />
        </label>
        <button onClick={handleSubmit} className="btn btn-success">
          确定
        </button>
        <label htmlFor="my-add-user-modal" className="btn">
          存为草稿
        </label>
      </form>
    </ThemeProvider>
  );
}
