import { Prisma } from "@prisma/client";

import { FieldsSelect } from "./sc-query";
import HavingInputNumber from "./having-input-number";
import { ThemeProvider, createTheme } from "@mui/material";

export interface HavingCollect {
  havingSno?: Prisma.IntFilter[];
  havingCno?: Prisma.IntFilter[];
  havingGrade?: Prisma.IntNullableFilter[];
  setHavingSno?: any;
  setHavingCno?: any;
  setHavingGrade?: any;
}

interface props {
  aggregateType: string;
  visible: FieldsSelect;
  compose: HavingCollect;
  className?: string;
}

const theme = createTheme({
  palette: {
    primary: { main: "#3d4451" },
  },
});

export default function HavingCompose({
  aggregateType,
  visible,
  compose,
  className,
}: props) {
  return (
    <ThemeProvider theme={theme}>
      <div className={` ${className}`}>
        {visible.sno && compose.havingSno && compose.setHavingSno ? (
          <HavingInputNumber
            aggregateType={aggregateType}
            field="学号"
            havingInput={compose.havingSno}
            setHavingInput={compose.setHavingSno}
          />
        ) : null}
        {visible.cno && compose.havingCno && compose.setHavingCno ? (
          <HavingInputNumber
            aggregateType={aggregateType}
            field="课程号"
            havingInput={compose.havingCno}
            setHavingInput={compose.setHavingCno}
          />
        ) : null}
        {visible.grade && compose.havingGrade && compose.setHavingGrade ? (
          <HavingInputNumber
            aggregateType={aggregateType}
            field="成绩"
            havingInput={compose.havingGrade}
            setHavingInput={compose.setHavingGrade}
          />
        ) : null}
      </div>
    </ThemeProvider>
  );
}
