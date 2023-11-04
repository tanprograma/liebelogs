import { Log } from "@/interfaces/interfaces";
import React from "react";
interface Props {
  log: Log;
}
const LogEntry = ({ log }: Props) => {
  return (
    <div className="prose w-full max-w-2xl border-2 p-2 mt-1 mb-1 ml-1 rounded">
      <h3 className="text-xs bg-slate-300 text-right">
        created :
        {log.created_at
          ? `${log.created_at.toLocaleDateString()} ${log.created_at.toLocaleTimeString()}`
          : ""}
      </h3>
      <h3 className="text-xs bg-orange-50 ">{log.title}</h3>
      <p>{log.content}</p>
    </div>
  );
};

export default LogEntry;
