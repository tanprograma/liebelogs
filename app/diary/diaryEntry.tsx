import { Diary } from "@/interfaces/interfaces";
import React from "react";
interface Props {
  diary: Diary;
}
const DiaryEntry = ({ diary }: Props) => {
  return (
    <div className="prose w-full max-w-2xl border-2 p-2 mt-1 mb-1 ml-1 rounded">
      <h3 className="text-xs bg-slate-300 text-right">
        created :
        {diary.created_at
          ? `${diary.created_at.toLocaleDateString()} ${diary.created_at.toLocaleTimeString()}`
          : ""}
      </h3>
      <p>{diary.content}</p>
    </div>
  );
};

export default DiaryEntry;
