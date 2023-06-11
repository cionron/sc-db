"use client";

import {
  fallbackCourse,
  fallbackGender,
  fallbackMajor,
  translateOperator,
} from "@/lib/utils/translate";
import { MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Prisma } from "@prisma/client";
import { useState } from "react";

interface props {
  addWhere: any;
  field: "Course" | "Major" | "Gender";
  options: string[];
  className?: string;
}

export const enumFilterPayload = (operator: string, value: string) =>
  ({ [operator]: value } satisfies
    | Prisma.EnumCourseFilter
    | Prisma.EnumMajorFilter
    | Prisma.EnumGenderFilter);

export default function NumberFilterOption({
  addWhere,
  field,
  options,
  className,
}: props) {
  const [operator, setOperator] = useState("");
  const [value, setValue] = useState("");

  const operators = ["=", "!="];

  const handleAddWhere = () => {
    if (field === "Course") {
      const where = enumFilterPayload(
        translateOperator(operator),
        fallbackCourse(value)
      );
      addWhere(where);
    } else if (field === "Major") {
      const where = enumFilterPayload(
        translateOperator(operator),
        fallbackMajor(value)
      );
      addWhere(where);
    } else if (field === "Gender") {
      const where = enumFilterPayload(
        translateOperator(operator),
        fallbackGender(value)
      );
      addWhere(where);
    }
  };

  return (
    <div className="flex">
      <TextField
        select
        label="Operator"
        size="small"
        defaultValue=""
        onChange={(event) => {
          setOperator(event.target.value);
        }}
        className="my-auto mx-1 w-32 self-center"
      >
        {operators.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Options"
        defaultValue=""
        variant="outlined"
        size="small"
        onChange={(event) => {
          setValue(event.target.value);
        }}
        className="my-auto mx-1 w-48 self-center"
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <button
        onClick={handleAddWhere}
        className="btn btn-sm btn-neutral my-auto mx-1"
      >
        添加
      </button>
    </div>
  );
}
