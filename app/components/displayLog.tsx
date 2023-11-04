import { Log } from "@/interfaces/interfaces";
import React from "react";
import LogEntry from "./logEntry";
interface Props {
  logs: Log[];
}
const DisplayLog = ({ logs }: Props) => {
  return (
    <div className="scroll max-h-80">
      {logs.map((log) => (
        <LogEntry key={log._id} log={log} />
      ))}
    </div>
  );
};

export default DisplayLog;
