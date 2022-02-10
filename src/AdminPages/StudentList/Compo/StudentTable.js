import React from "react";

const StudentTable = ({
  item,
  index,
  handleCheckBox,
  getChecked,
  handleDelete,
  setShowModal,
  setSignleItem,
}) => {
  return (
    <tr>
      <td className="text-center border py-2">{index + 1}</td>
      <td className="py-2 border text-center px-4">{item.fullName}</td>
      <td className="py-2 border text-center px-4">{item.studentID}</td>
      <td className="py-2 border text-center px-4">{item.roll}</td>
      <td className="py-2 border text-center px-4">{item.age}</td>
      <td className="py-2 border text-center px-4">{item.class}</td>
      <td className="py-2 border text-center px-4">{item.hall}</td>
      <td className="py-2 border text-center px-4">
        <button
          className={`${
            item.status === "active" ? "text-green-600" : "text-red-600"
          } font-bold mr-3`}
        >
          {item.status}
        </button>
        <input
          onChange={(e) => handleCheckBox(e, item._id)}
          className="text-xl"
          title="Change Student Status"
          type="checkbox"
          ref={getChecked}
        />
      </td>
      <td className="py-2 border text-center px-4">
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
  );
};

export default StudentTable;
