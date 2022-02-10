import React from "react";

const FoodServingTable = ({ item, index, setShowModal, setSignleItem }) => {
  return (
    <tr>
      <td className="text-center border py-2">{index + 1}</td>
      <td className="py-2 border text-left px-4">{item.fullName}</td>
      <td className="py-2 border text-left px-4">{item.studentID}</td>
      <td className="py-2 border text-left px-4">
        <button
          onClick={() => {
            setSignleItem(item);
            setShowModal(true);
          }}
          className={`uppercase font-semibold text-white ml-2 rounded px-4 py-1 ${
            item.serveStatus === "Served" ? "bg-red-500" : "bg-green-500"
          }`}
          disabled={item.serveStatus === "Served" ? true : false}
        >
          {item.serveStatus === "Served" ? "Already Served" : "Serve food"}
        </button>
      </td>
    </tr>
  );
};

export default FoodServingTable;
