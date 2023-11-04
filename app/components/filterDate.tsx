"use client";
import React, { useRef } from "react";
interface Props {
  filterDate: (date: string) => void;
  clear: () => void;
  refresh: () => void;
}
const FilterDate = ({ filterDate, clear, refresh }: Props) => {
  const dateRef = useRef<HTMLInputElement>(null);
  const onClear = () => {
    if (dateRef.current) {
      dateRef.current.value = "";
    }
    clear();
  };
  return (
    <div className="flex mt-1 mb-1 ml-1">
      <input
        ref={dateRef}
        className="input input-primary w-full max-w-xs"
        type="date"
        name="date"
        id="date"
        onChange={(e) => filterDate(e.target.value)}
      />
      <button className="btn btn-secondary ml-1" onClick={() => onClear()}>
        CLEAR fILTER
      </button>
      <button className="btn btn-secondary ml-1" onClick={() => refresh()}>
        REFRESH
      </button>
    </div>
  );
};

export default FilterDate;
