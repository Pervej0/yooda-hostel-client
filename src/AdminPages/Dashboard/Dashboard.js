import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="border-b border-t">
      <div className="bg-gray-100 font-sans leading-normal">
        <div className="flex md:flex-no-wrap flex-wrap bg-gray-200">
          <div className="w-full dashboard-sidebar py-4 sm:block md:w-1/5 bg-gray-900 md:bg-gray-900 relative px-2 text-center md:pt-8 md:left-0 lg:relative">
            <div className="mx-auto lg:float-right lg:px-10">
              <ul className="list-reset flex flex-row md:flex-col text-center md:text-left">
                <li>
                  <Link
                    className="block py-1 px-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-gray-400"
                    to="dashboard"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    className="block py-1 px-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-gray-400"
                    to="dashboard/addFood"
                  >
                    Add Food
                  </Link>
                </li>
                <Link
                  className="block py-1 px-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-gray-400"
                  to="dashboard/addStudent"
                >
                  Add Student
                </Link>
                <Link
                  className="block py-1 px-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-gray-400"
                  to="dashboard/foodlist"
                >
                  Food List
                </Link>
                <Link
                  className="block py-1 px-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-gray-400"
                  to="dashboard/studentlist"
                >
                  Student List
                </Link>
                <Link
                  className="block py-1 px-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-gray-400"
                  to="/dashboard/foodserving"
                >
                  Food Serving
                </Link>
              </ul>
            </div>
          </div>
          <div className="flex-auto">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
