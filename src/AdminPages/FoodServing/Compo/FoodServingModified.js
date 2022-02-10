import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const FoodServingModified = ({ setShowModal, setIsDone, item }) => {
  const { register, handleSubmit } = useForm();
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/foodlist")
      .then((res) => res.json())
      .then((data) => setFoodItems(data.products));
  }, []);

  const onSubmit = (data) => {
    data.serveStatus = "Served";
    console.log(data);
    fetch(`http://localhost:5000/studentlist/servelist/${item._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Successfully updated");
          setIsDone(true);
        }
      });

    setShowModal(false);
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-12 mx-auto md:w-2/5 w-full">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 mt-14 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-2xl font-mono font-semibold mt-16">
                Serve food
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
              className="border mx-auto p-4 w-full"
            >
              <input
                className="block border border-black w-full px-3 py-1 text-lg my-3"
                type="text"
                defaultValue={item.fullName}
                placeholder="Full name"
                {...register("fullName", { required: true })}
              />
              <input
                className="block border border-black w-full px-3 py-1 text-lg my-3"
                type="text"
                defaultValue={item.studentID}
                placeholder="Student id"
                {...register("studentID", { required: true })}
              />
              <input
                className="block border border-black w-full px-3 py-1 text-lg my-3"
                type="number"
                defaultValue={item.roll}
                placeholder="Roll"
                {...register("roll", { required: true })}
              />
              <input
                className="block border border-black w-full px-3 py-1 text-lg my-3"
                type="number"
                defaultValue={item.age}
                placeholder="Age"
                {...register("age", { required: true })}
              />
              <input
                className="block border border-black w-full px-3 py-1 text-lg my-3"
                type="text"
                defaultValue={item.class}
                placeholder="Class"
                {...register("class", { required: true })}
              />
              <input
                className="block border border-black w-full px-3 py-1 text-lg my-3"
                type="text"
                defaultValue={item.hall}
                placeholder="Hall"
                {...register("hall", { required: true })}
              />
              <label className="text-sm font-bold">Select Shift</label>
              <select
                className="block border border-black w-full px-3 py-1 text-lg my-3"
                {...register("shift", { required: true })}
              >
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
              </select>
              <label className="text-sm font-bold">Enter data</label>
              <input
                className="block border border-black w-full px-3 py-1 text-lg my-3"
                type="date"
                placeholder="dd-mm-yyyy"
                min="1997-01-01"
                {...register("date", { required: true })}
              />
              <label className="text-sm font-bold">Food Items</label>
              <select
                className="block border border-black w-full px-3 py-1 text-lg my-3"
                {...register("foodItem", { required: true })}
              >
                {foodItems.map((item) => (
                  <option key={item._id} value={item.foodName}>
                    {item.foodName}
                  </option>
                ))}
              </select>
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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

export default FoodServingModified;
