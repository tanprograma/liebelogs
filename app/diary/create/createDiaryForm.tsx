"use client";
import { Diary } from "@/interfaces/interfaces";
import React, { useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";
interface Props {
  onAdd: (item: Diary) => void;
}
const CreateDiaryForm = ({ onAdd }: Props) => {
  const { handleSubmit, register, reset } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data: FieldValues) => {
        onAdd({ content: data.diary.toUpperCase() });
        reset();
      })}
    >
      <div className="form-control w-full max-w-2xl mt-1 ml-1">
        {/* <label htmlFor="diary" className="label">
          <span className="label-text"></span>
        </label> */}
        <textarea
          {...register("diary")}
          className="textarea w-full max-w-2xl"
          name="diary"
          id="diary"
          rows={10}
          cols={30}
          placeholder="write your diary entry"
        ></textarea>
      </div>
      <button className="btn btn-secondary ml-1 mt-1 w-full max-w-xs">
        SUBMIT
      </button>
    </form>
  );
};

export default CreateDiaryForm;
