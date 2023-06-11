"use client";

import { useState } from "react";
import SCCustom from "./sc-custom";
import CsvResults, { AggregateResult } from "@/components/query-results";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#3d4451" },
  },
});

export default function Home() {
  const [findResult, setFindResult] = useState([]);
  const [aggregateResult, setAggregateResult] = useState<AggregateResult>({
    _count: {
      _all: 0,
    },
  });
  const [groupByResult, setGroupByResult] = useState([]);

  const [fetchedFind, setFetchedFind] = useState(false);
  const [fetchedAggregate, setFetchedAggregate] = useState(false);
  const [fetchedGroupBy, setFetchedGroupBy] = useState(false);

  return (
    <div className="rounded-2xl bg-white m-4 p-4 shadow-xl">
      <ThemeProvider theme={theme}>
        <SCCustom
          setFindResult={setFindResult}
          setAggregateResult={setAggregateResult}
          setGroupByResult={setGroupByResult}
          setFetchedFind={setFetchedFind}
          setFetchedAggregate={setFetchedAggregate}
          setFetchedGroupBy={setFetchedGroupBy}
        />
      </ThemeProvider>
      <CsvResults
        findResult={findResult}
        aggregateResult={aggregateResult}
        groupByResult={groupByResult}
        fetchedFind={fetchedFind}
        fetchedAggregate={fetchedAggregate}
        fetchedGroupBy={fetchedGroupBy}
      />
    </div>
  );
}
