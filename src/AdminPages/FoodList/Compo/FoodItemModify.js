import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const FoodItemModify = ({ setShowModal, setIsDone, item }) => {
  const { register, reset, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch(`https://tranquil-sierra-69613.herokuapp.com/foodlist/${item._id}`, {
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
                Edit your food item
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
              <input
                className="block border border-black w-full px-3 py-3 text-lg my-3"
                type="text"
                defaultValue={item.foodName}
                placeholder="Food name"
                {...register("foodName", { required: true })}
              />
              <input
                className="block border border-black w-full px-3 py-3 text-lg my-3"
                type="number"
                defaultValue={item.foodCost}
                placeholder="Food cost"
                {...register("foodCost", { required: true })}
              />
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
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodItemModify;
