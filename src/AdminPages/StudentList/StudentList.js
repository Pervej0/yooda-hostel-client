import React, { useEffect, useRef, useState } from "react";
import SearchField from "./Compo/SearchField";
import StudentModify from "./Compo/StudentModify";
import StudentTable from "./Compo/StudentTable";

const StudentList = () => {
  const [studentData, setStudentData] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [singleItem, setSignleItem] = useState({});
  const [studentCount, setStudentCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const perPageItem = 4;

  useEffect(() => {
    fetch(
      `https://tranquil-sierra-69613.herokuapp.com/studentlist?currentPage=${currentPage}&&perPageItem=${perPageItem}`
    )
      .then((res) => res.json())
      .then((data) => {
        setStudentData(data.products);
        setStudentCount(Math.ceil(data.count / perPageItem));
      });
  }, [isDone, currentPage]);

  const handleDelete = (id) => {
    const confirm = window.confirm("Are sure want to delete this item?");
    if (confirm) {
      fetch(`https://tranquil-sierra-69613.herokuapp.com/studentlist/${id}`, {
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

  return (
    <div className="md-px-22 px-4">
      <SearchField setStudentData={setStudentData} />
      <div className="flex flex-col mt-12">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="w-full">
                <thead>
                  <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                    <th className="px-4  py-3">i/d</th>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Age</th>
                    <th className="px-4 py-3">School</th>
                    <th className="px-4 py-3">Class</th>
                    <th className="px-4 py-3">Division</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {console.log(studentData.length)}
                  {studentData.length === 0 && <h4>No Result Found</h4>}
                  {studentData?.map((item, index) => (
                    <StudentTable
                      key={item._id}
                      item={item}
                      index={index}
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
              {studentData.length > 0 &&
                [...Array(studentCount)?.keys()]?.map((number) => (
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
