import React from "react";
import { useForm } from "react-hook-form";

const AddStudent = () => {
  const { register, reset, handleSubmit } = useForm();

  const onSubmit = (data) => {
    data.status = "active";
    fetch("http://localhost:5000/studentlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Successfully added");
        }
      });
    reset();
  };

  return (
    <section className="md:px-18 px-3">
      <h1 className="text-3xl text-center font-semibold my-2 mb-10 font-mono">
        Add a New Student
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border w-full mx-auto p-4"
      >
        <input
          className="block border border-black w-full px-3 py-3 text-lg my-3"
          type="text"
          placeholder="Full name"
          {...register("fullName", { required: true })}
        />
        <input
          className="block border border-black w-full px-3 py-3 text-lg my-3"
          type="text"
          placeholder="Student id"
          {...register("studentID", { required: true })}
        />
        <input
          className="block border border-black w-full px-3 py-3 text-lg my-3"
          type="number"
          placeholder="Roll"
          {...register("roll", { required: true })}
        />
        <input
          className="block border border-black w-full px-3 py-3 text-lg my-3"
          type="number"
          placeholder="Age"
          {...register("age", { required: true })}
        />
        <input
          className="block border border-black w-full px-3 py-3 text-lg my-3"
          type="text"
          placeholder="Class"
          {...register("class", { required: true })}
        />
        <input
          className="block border border-black w-full px-3 py-3 text-lg my-3"
          type="text"
          placeholder="Hall"
          {...register("hall", { required: true })}
        />
        <button
          type="submit"
          className="uppercase font-semibold border bg-black text-white rounded border-black px-5 py-2"
        >
          Add
        </button>
      </form>
    </section>
  );
};

export default AddStudent;
