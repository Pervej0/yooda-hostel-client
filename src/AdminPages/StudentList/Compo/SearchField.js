import React, { useState } from "react";

const SearchField = ({ setStudentData }) => {
  const [studentName, setStudentName] = useState("");
  const [isSearched, setIsSearched] = useState(false);

  const handleSearchByName = (e) => {
    e.preventDefault();

    console.log(studentName);
    fetch(
      `https://tranquil-sierra-69613.herokuapp.com/studentlist/${studentName.toLowerCase()}?type="studentName"`
    )
      .then((res) => res.json())
      .then((data) => {
        setIsSearched(true);
        setStudentData(data);
      });
  };

  const handleSchoolSearch = (e) => {
    const school = e.target.value;

    fetch(
      `https://tranquil-sierra-69613.herokuapp.com/studentlist/${school}?type="school"`
    )
      .then((res) => res.json())
      .then((data) => {
        setIsSearched(true);
        setStudentData(data);
      });
  };

  const handleDivisionSearch = (e) => {
    const division = e.target.value;

    fetch(
      `https://tranquil-sierra-69613.herokuapp.com/studentlist/${division}?type="division"`
    )
      .then((res) => res.json())
      .then((data) => {
        setIsSearched(true);
        setStudentData(data);
      });
  };
  const handleClassSearch = (e) => {
    const studentClass = e.target.value;

    fetch(
      `https://tranquil-sierra-69613.herokuapp.com/studentlist/${studentClass}?type="studentClass"`
    )
      .then((res) => res.json())
      .then((data) => {
        setIsSearched(true);
        setStudentData(data);
      });
  };

  return (
    <div>
      <div className="grid md:grid-cols-4 grid-cols-2 items-baseline gap-6">
        <form className="my-3 p-2 w-full" onSubmit={handleSearchByName}>
          <div>
            <label className="text-lg block font-mono font-semibold mb-2">
              Search by Name
            </label>
            <input
              className="py-2 w-full px-2"
              type="roll"
              required
              onBlur={(e) => setStudentName(e.target.value)}
              placeholder="Enter roll"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-1 flex-auto block border border-black mt-3 font-semibold bg-black text-white rounded"
          >
            Search
          </button>
        </form>
        <div className="w-full">
          <label className="text-lg block font-mono font-semibold mb-2">
            Search by School
          </label>
          <select
            onChange={handleSchoolSearch}
            className="px-4 py-2 w-full bg-white"
          >
            <option selected disabled>
              Select
            </option>
            <option value="The Doon School">The Doon School</option>
            <option value="The Scindia School">The Scindia School</option>
            <option value="Rashtriya Military School">
              Rashtriya Military School
            </option>
            <option value="Goethals Memorial School">
              Goethals Memorial School
            </option>
          </select>
        </div>
        <div className="w-full">
          <label className="text-lg block font-mono font-semibold mb-2">
            Search by Class
          </label>
          <select
            onChange={handleClassSearch}
            className="px-4 py-2 w-full bg-white"
          >
            <option selected disabled>
              Select
            </option>
            <option value="class 1">Class 1</option>
            <option value="class 2">Class 2</option>
            <option value="class 3">Class 3</option>
            <option value="class 4">Class 4</option>
            <option value="class 5">Class 5</option>
          </select>
        </div>
        <div className="w-full">
          <label className="text-lg block font-mono font-semibold mb-2">
            Search by Division
          </label>
          <select
            onChange={handleDivisionSearch}
            className="px-4 py-2 w-full bg-white"
          >
            <option selected disabled>
              Select
            </option>
            <option value="goa">Goa</option>
            <option value="class gujrat">Gujrat</option>
            <option value="kerala">Kerala</option>
            <option value="medinipur">Medinipur</option>
            <option value="malda">Malda</option>
            <option value="jalpaiguri">Jalpaiguri</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchField;
