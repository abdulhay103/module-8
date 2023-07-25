import React, { useState } from "react";
import Button from "../utilities/Button";

const ExpanseFile = () => {
  const [expanseParticulars, setExpanseParticulars] = useState({
    name: "",
    amount: "",
  });

  const [expanseList, setexpanseList] = useState([]);

  const addexpanseDetails = () => {
    const amountValue = parseFloat(expanseParticulars.amount);
    if (Number.isNaN(amountValue)) {
      alert("Amount is not a number");
    }
    if (
      expanseParticulars.name !== "" &&
      expanseParticulars.amount !== "" &&
      !Number.isNaN(amountValue)
    ) {
      setexpanseList([...expanseList, expanseParticulars]);
      setExpanseParticulars({ name: "", amount: "" });
    }
  };
  const totalAmount = expanseList.reduce(
    (total, item) => total + parseFloat(item.amount),
    0
  );

  return (
    <div className="grid grid-cols-2 gap-9">
      <div className="bg-slate-100 rounded border-2 border-sky-300 shadow-slate-600">
        <h1 className="bg-slate-200 py-3 border-b-2 border-sky-300 text-center text-lg font-bold text-sky-500 shadow">
          Source of expanse
        </h1>
        <div className="w-2/3 mx-auto">
          <div className="flex justify-around items-center py-4">
            <label
              className="text-orange-500 text-lg font-semibold"
              htmlFor="expanseType"
            >
              Name:
            </label>
            <input
              onChange={(e) =>
                setExpanseParticulars({
                  ...expanseParticulars,
                  name: e.target.value,
                })
              }
              value={expanseParticulars.name}
              className="w-3/4 p-2 rounded outline-orange-300"
              type="text"
              placeholder="Type of expanse"
              name="expanseType"
            />
          </div>
          <div className="flex justify-around items-center py-4">
            <label
              className="text-orange-500 text-lg font-semibold"
              htmlFor="amount"
            >
              Amount:
            </label>
            <input
              onChange={(e) =>
                setExpanseParticulars({
                  ...expanseParticulars,
                  amount: e.target.value,
                })
              }
              value={expanseParticulars.amount}
              className="w-3/4 p-2 rounded outline-orange-300"
              type="text"
              placeholder="Total expanse"
              name="amount"
            />
          </div>
          <div className="flex justify-end mb-3">
            <Button
              handler={addexpanseDetails}
              customStyle="bg-orange-400 text-sky-800"
            >
              Add expanse
            </Button>
          </div>
        </div>
      </div>
      <div className="border-2 border-sky-300 bg-slate-100">
        <h1 className="bg-slate-200 py-3 border-b-2 border-sky-300 text-center text-lg font-bold text-sky-500 shadow">
          expanse details
        </h1>
        <ul className=" w-2/3 mx-auto my-3">
          {expanseList.map((item, index) => {
            return (
              <li
                key={index}
                className="flex justify-around bg-white py-2 border-b-2 border-sky-200"
              >
                <p className=" w-1/3">{item.name}</p>
                <p className=" w-1/3 text-right">{item.amount}</p>
              </li>
            );
          })}
        </ul>
        {expanseList.length !== 0 ? (
          <div className="w-1/2 mx-auto">
            <p className="py-2 px-4 bg-slate-300 text-center text-orange-500 text-lg font-black rounded">
              Your total expanse: {totalAmount}
            </p>
          </div>
        ) : (
          <div className="w-1/2 mx-auto">
            <p className="pt-14 text-center text-orange-500 text-lg font-black">
              Your have no expanse yet!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpanseFile;
