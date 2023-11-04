"use client";
import React, { useState } from "react";
import FilterDate from "../components/filterDate";
import DisplayLog from "./displayLog";
import { Log } from "@/interfaces/interfaces";
import axios from "axios";
interface Props {
  data: Log[];
  route: string;
}
const PageContainer = ({ data, route }: Props) => {
  const filterDate = (date: string) => {
    const filter = new Date(date).toLocaleDateString();

    if (!filter) return;
    setLogs(data.filter((i) => i.created_at?.toLocaleDateString() == filter));
  };
  const clear = () => {
    setLogs(data);
  };
  const refresh = () => {
    console.log("refreshed");
    axios.get(route).then((res) => {
      setLogs(
        res.data.map((i: any) => {
          i.created_at = new Date(i.created_at);
          return i;
        })
      );
    });
  };
  const [logs, setLogs] = useState<Log[]>(data);
  return (
    <div>
      <FilterDate filterDate={filterDate} clear={clear} refresh={refresh} />
      <DisplayLog logs={logs} />
    </div>
  );
};

export default PageContainer;
