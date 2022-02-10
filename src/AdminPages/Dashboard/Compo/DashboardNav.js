import React from "react";
import { Link } from "react-router-dom";

const DashboardNav = () => {
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-900">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full text-white relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <h1 className="font-serif text-3xl italic">Yooda Hostel</h1>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
