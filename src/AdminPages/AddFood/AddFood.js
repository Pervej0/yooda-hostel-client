import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const AddFood = () => {
  const { register, reset, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    fetch("http://localhost:5000/foodlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          alert("Successfully added");
          reset();
        }
      });
  };

  return (
    <section className="md:px-18 px-3 text-center">
      <h1 className="text-3xl mt-10 text-center font-semibold my-2 mb-10 font-mono">
        Add Your New Food Collection
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border mx-auto p-4 md:w-2/3 w-full"
      >
        <input
          className="block border border-black w-full px-3 py-3 text-lg my-3"
          type="text"
          placeholder="Food name"
          {...register("foodName", { required: true })}
        />
        <input
          className="block border border-black w-full px-3 py-3 text-lg my-3"
          type="number"
          placeholder="Food cost"
          {...register("foodCost", { required: true })}
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

export default AddFood;
