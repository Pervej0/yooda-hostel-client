import React from "react";

const SearchFoodServeList = ({
  handleSearchByRoll,
  setStudentRoll,
  handleSelectChange,
  handleDateSearch,
}) => {
  return (
    <div>
      <div className="grid md:grid-cols-3 grid-cols-2 items-baseline gap-6">
        <form className="my-3 p-2 w-full" onSubmit={handleSearchByRoll}>
          <div>
            <label className="text-lg block font-mono font-semibold mb-2">
              Search by Roll to Serve Food
            </label>
            <input
              className="py-2 w-full px-2"
              type="roll"
              required
              onBlur={(e) => setStudentRoll(e.target.value)}
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
            Search by status
          </label>
          <select
            onChange={handleSelectChange}
            className="px-4 py-2 w-full bg-white"
          >
            <option disabled value="Shift">
              Select status
            </option>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
          </select>
        </div>
        <div>
          <label className="text-lg block font-mono font-semibold mb-2">
            Search by Date
          </label>
          <input
            required
            className="block border border-black w-full px-3 py-1 text-lg"
            type="date"
            placeholder="dd-mm-yyyy"
            min="1997-01-01"
            onChange={handleDateSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchFoodServeList;
