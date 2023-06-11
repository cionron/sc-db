"use client";

import { MenuItem, TextField } from "@mui/material";
import { ChangeEvent } from "react";

interface FilterBarParams {
  ranges: Array<string>;
  defaultValue: string;
  label: string;
  onSelect: any;
  className: string;
}

export default function FilterOption({
  ranges,
  defaultValue,
  label,
  onSelect,
  className,
}: FilterBarParams) {
  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const select = event.target.value;
    onSelect(select);
  }

  return (
    <TextField
      select
      label={label}
      defaultValue={defaultValue}
      onChange={handleChange}
      size="small"
      className={className}
    >
      {ranges.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
}
