"use client";
import React, { useState } from "react";

import CreateDiaryForm from "./createDiaryForm";
import { Diary } from "@/interfaces/interfaces";
import DisplayCreated from "./displayCreated";
import axios from "axios";

const CreateDiaryContainer = () => {
  const route = `${process.env.NEXT_PUBLIC_BASE_URL}/api/diary`;
  let [created, setCreated] = useState<Diary[]>([]);
  let original = created;
  const onAdd = (item: Diary) => {
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
      <CreateDiaryForm onAdd={onAdd} />
      <DisplayCreated diaries={created} />
    </div>
  );
};

export default CreateDiaryContainer;
