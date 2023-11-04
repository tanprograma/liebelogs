"use client";
import { Diary } from "@/interfaces/interfaces";
import React from "react";
interface Props {
  diaries: Diary[];
}
const DisplayCreated = ({ diaries }: Props) => {
  return (
    <table className="table table-bordered max-w-2xl">
      <thead>
        <tr>
          <th>sn</th>
          <th>diary</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        {diaries.map((i, index) => (
          <tr key={i._id ? i._id : index}>
            <td>{index + 1}</td>
            <td>{i.content}</td>
            <td>{i._id ? "created" : "submitted"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DisplayCreated;
