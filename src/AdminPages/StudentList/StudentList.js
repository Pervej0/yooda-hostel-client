import React, { useEffect, useRef, useState } from "react";
import Pagination from "../SharedPage/Pagination";
import StudentModify from "./Compo/StudentModify";
import StudentTable from "./Compo/StudentTable";

const StudentList = () => {
  const [studentData, setStudentData] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [singleItem, setSignleItem] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const [studentCount, setStudentCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const perPageItem = 2;
  const getChecked = useRef(null);

  useEffect(() => {
    fetch(
      `http://localhost:5000/studentlist?currentPage=${currentPage}&&perPageItem=${perPageItem}`
    )
      .then((res) => res.json())
      .then((data) => {
        setStudentData(data.products);
        setStudentCount(Math.ceil(data.count / perPageItem));
      });
  }, [isDone, currentPage]);

  const handleCheckBox = (e, id) => {
    setIsChecked(true);
    // setCheckedID([...isChecked, id]);
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("Are sure want to delete this item?");
    if (confirm) {
      fetch(`http://localhost:5000/studentlist/${id}`, {
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

  const handleAllChecked = () => {
    console.log(getChecked.current.offsetWidth);
  };

  return (
    <div className="md-px-22 px-4">
      <div className="flex flex-col mt-12">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              {isChecked && (
                <div className="my-3 text-right">
                  <button
                    onClick={handleAllChecked}
                    className="py-1 px-4 bg-black text-white rounded mr-3"
                  >
                    Select All
                  </button>
                  <button className="py-1 px-4 bg-green-600 text-white rounded mr-3">
                    Change Status
                  </button>
                </div>
              )}

              <table className="w-full">
                <thead>
                  <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                    <th className="px-4  py-3">S/N</th>
                    <th className="px-4 py-3">Full Name</th>
                    <th className="px-4 py-3">Student ID</th>
                    <th className="px-4 py-3">Roll</th>
                    <th className="px-4 py-3">Age</th>
                    <th className="px-4 py-3">Class</th>
                    <th className="px-4 py-3">Hall</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {studentData?.map((item, index) => (
                    <StudentTable
                      key={item._id}
                      item={item}
                      index={index}
                      handleCheckBox={handleCheckBox}
                      getChecked={getChecked}
                      handleDelete={handleDelete}
                      setShowModal={setShowModal}
                      setSignleItem={setSignleItem}
                    />
                  ))}
                </tbody>
              </table>
              {showModal ? (
                <StudentModify
                  setShowModal={setShowModal}
                  setIsDone={setIsDone}
                  item={singleItem}
                />
              ) : null}
              {[...Array(studentCount)?.keys()]?.map((number) => (
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentList;
