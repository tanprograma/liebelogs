import React from "react";
import { Diary } from "@/interfaces/interfaces";
import DiaryEntry from "./diaryEntry";
interface Props {
  diaries: Diary[];
}
const DisplayDiary = ({ diaries }: Props) => {
  return (
    <div className="scroll max-h-80">
      {diaries.map((diary) => (
        <DiaryEntry key={diary._id} diary={diary} />
      ))}
    </div>
  );
};

export default DisplayDiary;
