import React from "react";
import { useForm } from "react-hook-form";

const AddStudent = () => {
  const { register, reset, handleSubmit } = useForm();

  const onSubmit = (data) => {
    data.fullName = data.fullName.toLowerCase();
    fetch("https://tranquil-sierra-69613.herokuapp.com/studentlist", {
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
      <h1 className="text-3xl text-left border border-0 border-b-2 border-black mx-3 font-semibold my-2 font-mono">
        Add a New Student
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border w-5/6 me-auto p-4"
      >
        <label className="text-black font-semibold my-1 inline-block">
          Full Name
        </label>
        <input
          className="block border border-black w-full px-3 py-1 text-lg mb-2"
          type="text"
          placeholder="Name"
          {...register("fullName", { required: true })}
        />
        <label className="text-black font-semibold my-1 inline-block">
          Date Of Birth
        </label>
        <input
          className="block border border-black w-full px-3 py-1 text-lg mb-2"
          type="date"
          placeholder="DOB"
          {...register("dob", { required: true })}
        />
        <label className="text-black font-semibold my-1 inline-block">
          Age
        </label>
        <input
          className="block border border-black w-full px-3 py-1 text-lg mb-2"
          type="number"
          placeholder="Age"
          {...register("age", { required: true })}
        />
        <label
          htmlFor="School"
          className="text-black font-semibold my-1 inline-block"
        >
          School
        </label>

        <select
          {...register("school", { required: true })}
          className="block border border-black w-full px-3 py-1 text-lg mb-2"
        >
          <option selected disabled>
            Select
          </option>
          <option value="The Doon School">The Doon School</option>
          <option value="The Scindia School">The Scindia School</option>
          <option value="Rashtriya Military School">
            Rashtriya Military School
          </option>
          <option value="Goethals Memorial School">
            Goethals Memorial School
          </option>
        </select>
        <label className="text-black font-semibold my-1 inline-block">
          Class
        </label>
        <select
          {...register("class", { required: true })}
          className="block border border-black w-full px-3 py-1 text-lg mb-2"
        >
          <option selected disabled>
            Select
          </option>
          <option value="class 1">Class 1</option>
          <option value="class 2">Class 2</option>
          <option value="class 3">Class 3</option>
          <option value="class 4">Class 4</option>
          <option value="class 5">Class 5</option>
        </select>
        <label className="text-black font-semibold my-1 inline-block">
          Division
        </label>
        <select
          {...register("division", { required: true })}
          className="block border border-black w-full px-3 py-1 text-lg mb-2"
        >
          <option selected disabled>
            Select
          </option>
          <option value="goa">Goa</option>
          <option value="class gujrat">Gujrat</option>
          <option value="kerala">Kerala</option>
          <option value="medinipur">Medinipur</option>
          <option value="malda">Malda</option>
          <option value="jalpaiguri">Jalpaiguri</option>
        </select>
        <div className="mt-2">
          <label className="text-black font-semibold my-1 inline-block mr-12">
            Status
          </label>
          <div className="form-check">
            <label htmlFor="active">
              <input
                {...register("status", { required: true })}
                type="radio"
                name="status"
                value="active"
                className="form-check-input"
                id="active"
              />
              &nbsp;Active
            </label>
            <label htmlFor="inactive" className="ml-10">
              <input
                {...register("status", { required: true })}
                type="radio"
                name="status"
                value="inactive"
                className="form-check-input"
                id="inactive"
              />
              &nbsp;Inactive
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="uppercase font-semibold border bg-black text-white rounded border-black px-5 py-1 mt-3"
        >
          Save
        </button>
      </form>
    </section>
  );
};

export default AddStudent;
