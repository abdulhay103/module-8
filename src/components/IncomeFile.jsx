import React from "react";

const IncomeFile = () => {
  return (
    <div className=" w-1/3 h-96 bg-slate-50 rounded">
      <h1 className=" bg-slate-200 py-3 border-b-2 border-sky-300 text-center text-lg font-bold text-sky-500 shadow">
        List of Income Source
      </h1>
      <form className=" w-full">
        <div>
          <label htmlFor=""></label>
          <input
            className=" w-3/4 p-2"
            type="text"
            placeholder="Type of income"
          />
        </div>
      </form>
    </div>
  );
};

export default IncomeFile;
