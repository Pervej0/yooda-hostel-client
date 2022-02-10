import React, { useEffect, useState } from "react";
import Pagination from "../SharedPage/Pagination";
import FoodItemModify from "./Compo/FoodItemModify";

const FoodList = () => {
  const [foodData, setFoodData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [singleItem, setSignleItem] = useState({});
  const [productCount, setProductCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const perPageItem = 2;

  useEffect(() => {
    fetch(
      `http://localhost:5000/foodlist?currentPage=${currentPage}&&perPageItem=${perPageItem}`
    )
      .then((res) => res.json())
      .then((data) => {
        setFoodData(data.products);
        setProductCount(Math.ceil(data.count / perPageItem));
      });
  }, [currentPage, isDone]);

  const handleDelete = (id) => {
    const confirm = window.confirm("Are sure want to delete this item?");
    if (confirm) {
      fetch(`http://localhost:5000/foodlist/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            alert("Successfully Deleted");
            setIsDone(true);
          }
        });
    }
  };

  const handlePagination = (num) => {
    setCurrentPage(num);
  };

  // const lastItemIndex = currentPage * perPageItem;
  // const firstItemIndex = lastItemIndex - perPageItem;
  // const displayedItem = foodData.slice(firstItemIndex, lastItemIndex);

  return (
    <section className="md-px-22 px-4">
      <div className="flex flex-col mt-12">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="w-full">
                <thead>
                  <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                    <th className="px-4 py-3">S/N</th>
                    <th className="px-4 py-3">Food Name</th>
                    <th className="px-4 py-3">Food Cost</th>
                    <th className="px-4 py-3">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {foodData?.map((item, index) => (
                    <tr key={item._id}>
                      <td className="border py-2 px-4">{index + 1}</td>
                      <td className="py-2 border px-4">{item.foodName}</td>
                      <td className="py-2 border px-4">{item.foodCost}</td>
                      <td className="py-2 px-4 border">
                        <button
                          className="bg-yellow-500 text-white font-bold uppercase text-sm px-4 py-1 rounded shadow hover:shadow-lg outline-none mr-1 mb-1 "
                          type="button"
                          onClick={() => {
                            setShowModal(true);
                            setSignleItem(item);
                          }}
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(item._id)}
                          className="bg-red-500 text-sm font-bold text-white uppercase rounded shadow py-1 px-4"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {showModal ? (
                <FoodItemModify
                  setShowModal={setShowModal}
                  setIsDone={setIsDone}
                  item={singleItem}
                />
              ) : null}
              {[...Array(productCount)?.keys()]?.map((number) => (
                <button
                  key={number}
                  onClick={() => handlePagination(number)}
                  className={`border border-black px-4 py-2 ${
                    number === currentPage ? "bg-gray-700 text-white" : ""
                  }`}
                >
                  {number}
                </button>
              ))}
              {/*    <Pagination
                perPageItem={perPageItem}
                totalItem={foodData.length}
                handlePagination={handlePagination}
                currentPage={currentPage}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodList;
