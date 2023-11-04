import React from "react";
import DisplayDiary from "./displayDiary";
import { Diary } from "@/interfaces/interfaces";
import DiaryContainer from "./diaryContainer";
import Link from "next/link";

const page = async () => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/diary`;
  let diaries: Diary[];
  try {
    const req = await fetch(url, { cache: "no-store" });
    diaries = (await req.json())
      .map((i: any) => {
        i.created_at = new Date(i.created_at);
        return i;
      })
      .sort((a: Diary, b: Diary) => {
        const time1 = a.created_at?.getTime();
        const time2 = a.created_at?.getTime();
        if (time1 && time2) {
          if (time1 > time2) return -1;
          if (time1 < time2) return 1;
          return 0;
        }
      });
  } catch (error) {
    diaries = [];
  }

  return (
    <div>
      <div>
        <Link href={"/diary/create"}>create</Link>
      </div>
      <DiaryContainer data={diaries} />;
    </div>
  );
};

export default page;
