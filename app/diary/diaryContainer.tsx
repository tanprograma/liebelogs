"use client";
import React, { useState } from "react";
import FilterDate from "../components/filterDate";
import DisplayDiary from "./displayDiary";
import { Diary } from "@/interfaces/interfaces";
import axios from "axios";
interface Props {
  data: Diary[];
}
const DiaryContainer = ({ data }: Props) => {
  const route = `${process.env.NEXT_PUBLIC_BASE_URL}/api/diary`;
  const filterDate = (date: string) => {
    const filter = new Date(date).toLocaleDateString();

    if (!filter) return;
    setDiaries(
      data.filter((i) => i.created_at?.toLocaleDateString() == filter)
    );
  };
  const clear = () => {
    setDiaries(data);
  };
  const refresh = () => {
    console.log("refreshed");
    axios.get(route).then((res) => {
      setDiaries(
        res.data
          .map((i: any) => {
            i.created_at = new Date(i.created_at);
            return i;
          })
          .sort((a: Diary, b: Diary) => {
            const time1 = a.created_at?.getTime();
            const time2 = a.created_at?.getTime();
            if (time1 && time2) {
              if (time1 > time2) return 1;
              if (time1 < time2) return -1;
              return 0;
            }
          })
      );
    });
  };
  const [diaries, setDiaries] = useState<Diary[]>(data);
  return (
    <div>
      <FilterDate filterDate={filterDate} clear={clear} refresh={refresh} />
      <DisplayDiary diaries={diaries} />
    </div>
  );
};

export default DiaryContainer;
