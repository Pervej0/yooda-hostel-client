import React from "react";

const Pagination = ({
  perPageItem,
  totalItem,
  handlePagination,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItem / perPageItem); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="mt-12">
      {pageNumbers.map((number) => (
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
  );
};

export default Pagination;
