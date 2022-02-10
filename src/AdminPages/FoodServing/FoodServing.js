import React, { useEffect, useState } from "react";
import FoodServingModified from "./Compo/FoodServingModified";
import FoodServingTable from "./Compo/FoodServingTable";
import SearchFoodServeList from "./Compo/SearchFoodServeList";

const FoodServing = () => {
  const [data, setData] = useState([]);
  const [studentRoll, setStudentRoll] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [singleItem, setSignleItem] = useState({});
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/studentlist")
      .then((res) => res.json())
      .then((data) => {
        setData(data.products);
      });
  }, [isDone]);

  const handleSearchByRoll = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/studentlist/${studentRoll}?type="roll"`)
      .then((res) => res.json())
      .then((data) => {
        setIsSearched(true);
        setData(data);
      });
  };

  const handleSelectChange = (e) => {
    const status = e.target.value;
    console.log(status);
    fetch(`http://localhost:5000/studentlist/${status}?type="status"`)
      .then((res) => res.json())
      .then((data) => {
        setIsSearched(true);
        setData(data);
      });
  };

  const handleDateSearch = (e) => {
    const dateVal = e.target.value;
    fetch(`http://localhost:5000/studentlist/${dateVal}?type="dateValue"`)
      .then((res) => res.json())
      .then((data) => {
        setIsSearched(true);
        setData(data);
      });
  };

  return (
    <div className="md-px-18 px-4">
      <div className="flex flex-col border-b py-10 border-gray-200">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden sm:rounded-lg">
              <div className="flex gap-3">
                <SearchFoodServeList
                  handleSearchByRoll={handleSearchByRoll}
                  setStudentRoll={setStudentRoll}
                  handleSelectChange={handleSelectChange}
                  handleDateSearch={handleDateSearch}
                />
              </div>
              {isSearched && (
                <div className="text-right px-4">
                  <button
                    onClick={() => {
                      if (isDone == true) {
                        setIsDone(false);
                      } else {
                        setIsDone(true);
                      }
                    }}
                    className="text-black font-bold bg-gray-300 py-1 px-6 uppercase rounded rounded-full"
                  >
                    Refresh
                  </button>
                </div>
              )}
              <table className="w-full mt-5">
                <thead>
                  <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                    <th className="px-4  py-3">S/N</th>
                    <th className="px-4 py-3">Full Name</th>
                    <th className="px-4 py-3">Student ID</th>
                    <th className="px-4 py-3">Status</th>
                  </tr>
                </thead>

                <tbody className="bg-white">
                  {!data[0] && (
                    <tr className="text-center">
                      <td>search result dosen't found!</td>
                    </tr>
                  )}
                  {data?.map((item, index) => (
                    <FoodServingTable
                      key={item._id}
                      item={item}
                      index={index}
                      setShowModal={setShowModal}
                      setSignleItem={setSignleItem}
                    />
                  ))}
                </tbody>
              </table>
              {showModal ? (
                <FoodServingModified
                  setShowModal={setShowModal}
                  setIsDone={setIsDone}
                  item={singleItem}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodServing;
