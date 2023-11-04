"use client";
import React, { useState } from "react";

import CreateLogForm from "./createLogForm";
import { Log } from "@/interfaces/interfaces";

import axios from "axios";
import DisplayCreatedLog from "./displayCreatedLog";
interface Props {
  category: string;
}
const CreateLogContainer = ({ category }: Props) => {
  const route = `${process.env.NEXT_PUBLIC_BASE_URL}/api/logs`;
  let [created, setCreated] = useState<Log[]>([]);
  let original = created;
  const onAdd = ({ content, title }: Log) => {
    const item: Log = { content, title, category };
    setCreated([...created, item]);

    axios
      .post(route, item)
      .then(({ data: SavedItem }) => {
        setCreated([...created, SavedItem]);
      })
      .catch((e) => {
        setCreated(original);
      });
  };
  return (
    <div>
      <h1>CREATE {category.toUpperCase()}</h1>
      <CreateLogForm onAdd={onAdd} />
      <DisplayCreatedLog logs={created} />
    </div>
  );
};

export default CreateLogContainer;
