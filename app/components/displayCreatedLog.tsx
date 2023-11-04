"use client";
import { Log } from "@/interfaces/interfaces";
import React from "react";
interface Props {
  logs: Log[];
}
const DisplayCreatedLog = ({ logs }: Props) => {
  return (
    <table className="table table-bordered max-w-2xl">
      <thead>
        <tr>
          <th>sn</th>
          <th>Log</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((i, index) => (
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

export default DisplayCreatedLog;
