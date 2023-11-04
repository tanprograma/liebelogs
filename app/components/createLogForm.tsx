"use client";
import { Log } from "@/interfaces/interfaces";
import React, { useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";
interface Props {
  onAdd: (item: Log) => void;
}
const CreateLogForm = ({ onAdd }: Props) => {
  const { handleSubmit, register, reset } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data: FieldValues) => {
        onAdd({ content: data.content, title: data.title });
        reset();
      })}
    >
      <div className="form-control w-full max-w-2xl mt-1 ml-1">
        <div className="form-group">
          <label htmlFor="title" className="label">
            <span className="label-text">Title</span>
          </label>
          <textarea
            {...register("title")}
            className="textarea w-full max-w-2xl"
            name="title"
            id="title"
            rows={2}
            cols={30}
            placeholder="write your title.."
          ></textarea>
        </div>
        <label htmlFor="content" className="label">
          <span className="label-text">Content</span>
        </label>
        <textarea
          {...register("content")}
          className="textarea w-full max-w-2xl"
          name="content"
          id="content"
          rows={10}
          cols={30}
          placeholder="write your content entry..."
        ></textarea>
      </div>
      <button className="btn btn-secondary ml-1 mt-1 w-full max-w-xs">
        SUBMIT
      </button>
    </form>
  );
};

export default CreateLogForm;
