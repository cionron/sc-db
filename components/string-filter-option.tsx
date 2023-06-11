"use client";

import { translateOperator } from "@/lib/utils/translate";
import { MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Prisma } from "@prisma/client";
import { useState } from "react";

interface props {
  addWhere: any;
  className?: string;
}

export const stringFilterPayload = (operator: string, value: string) =>
  ({ [operator]: value } satisfies Prisma.StringFilter);

export default function StringFilterOption({ addWhere, className }: props) {
  const [operator, setOperator] = useState("");
  const [value, setValue] = useState("");

  const operators = [
    "CONTAINS",
    "=",
    "!=",
    "STARTS WITH",
    "ENDS WITH",
  ];

  const handleAddWhere = () => {
    const where = stringFilterPayload(translateOperator(operator), value);
    addWhere(where);
  };

  return (
    <div className="flex">
      <TextField
        select
        label="Operator"
        defaultValue={""}
        size="small"
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
        type="text"
        label="Value"
        defaultValue=""
        variant="outlined"
        size="small"
        onChange={(event) => {
          setValue(event.target.value);
        }}
        className="my-auto mx-1 w-48 self-center"
      />
      <button
        onClick={handleAddWhere}
        className="btn btn-sm btn-neutral my-auto mx-1"
      >
        添加
      </button>
    </div>
  );
}
