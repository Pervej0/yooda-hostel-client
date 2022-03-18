import React from "react";
import { useForm } from "react-hook-form";

const StudentModify = ({ setShowModal, setIsDone, item }) => {
  const { register, reset, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.fullName = data.fullName.toLowerCase();
    console.log(data);
    fetch(
      `https://tranquil-sierra-69613.herokuapp.com/studentlist/${item._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Successfully updated");
          setIsDone(true);
        }
      });
    reset();
    setShowModal(false);
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-2xl font-mono font-semibold">
                Edit Student Details
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="border mx-auto p-4"
            >
              <label className="text-black font-semibold my-1 inline-block">
                Full Name
              </label>
              <input
                className="block border border-black capitalize w-full px-3 py-1 text-lg my-1"
                type="text"
                defaultValue={item.fullName}
                placeholder="Full name"
                {...register("fullName", { required: true })}
              />
              <label className="text-black font-semibold my-1 inline-block">
                Age
              </label>
              <input
                className="block border border-black w-full px-3 py-1 text-lg my-1"
                type="number"
                defaultValue={item.age}
                placeholder="age"
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
                  {item.school}
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
                  {item.class}
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
                  {item.division}
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
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Save Changes
                </button>
              </div>
            </form>
            {/*footer*/}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default StudentModify;
