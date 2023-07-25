import React, { useState } from "react";
import Button from "../utilities/Button";

const ExpanseFile = () => {
  const [incomeParticulars, setIncomeParticulars] = useState({
    name: "",
    amount: "",
  });
  const [incomeList, setincomeList] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);

  const addIncomeDetails = () => {
    const incomeValue = parseFloat(incomeParticulars.amount);
    if (Number.isNaN(incomeValue)) {
      alert("Amount is not a number");
    }
    if (
      incomeParticulars.name !== "" &&
      incomeParticulars.amount !== "" &&
      !Number.isNaN(incomeValue)
    ) {
      setincomeList([...incomeList, incomeParticulars]);
      setIncomeParticulars({ name: "", amount: "" });
    }

    setTotalIncome(totalIncome + incomeValue);
  };

  const [expanseParticulars, setExpanseParticulars] = useState({
    name: "",
    amount: "",
  });

  const [expanseList, setExpanseList] = useState([]);
  const [totalExpance, toTalExpance] = useState(0);
  const addExpanseDetails = () => {
    const amountValue = parseFloat(expanseParticulars.amount);
    if (Number.isNaN(amountValue)) {
      alert("Amount is not a number");
    }
    if (
      expanseParticulars.name !== "" &&
      expanseParticulars.amount !== "" &&
      !Number.isNaN(amountValue)
    ) {
      setExpanseList([...expanseList, expanseParticulars]);
      setExpanseParticulars({ name: "", amount: "" });
    }

    toTalExpance(totalExpance + amountValue);
  };

  let availableAmount = totalIncome - totalExpance;

  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="flex gap-3">
          <div className="bg-slate-100 rounded border-2 border-sky-300 shadow-slate-600">
            <h1 className="bg-slate-200 py-3 border-b-2 border-sky-300 text-center text-lg font-bold text-sky-500 shadow">
              Source of Income
            </h1>
            <div className="">
              <div className="flex justify-around items-center py-4">
                <label
                  className="text-orange-500 text-lg font-semibold"
                  htmlFor="incomeType"
                >
                  Name:
                </label>
                <input
                  onChange={(e) =>
                    setIncomeParticulars({
                      ...incomeParticulars,
                      name: e.target.value,
                    })
                  }
                  value={incomeParticulars.name}
                  className=" p-2 rounded outline-orange-300"
                  type="text"
                  placeholder="Type of Income"
                  name="incomeType"
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
                    setIncomeParticulars({
                      ...incomeParticulars,
                      amount: e.target.value,
                    })
                  }
                  value={incomeParticulars.amount}
                  className="w-3/4 p-2 rounded outline-orange-300"
                  type="text"
                  placeholder="Total Income"
                  name="amount"
                />
              </div>
              <div className="flex justify-end mb-3">
                <Button
                  handler={addIncomeDetails}
                  customStyle="bg-orange-400 text-sky-800"
                >
                  Add Income
                </Button>
              </div>
            </div>
          </div>
          <div className="border-2 border-sky-300 bg-slate-100">
            <h1 className="bg-slate-200 py-3 border-b-2 border-sky-300 text-center text-lg font-bold text-sky-500 shadow">
              Income details
            </h1>
            <ul className="my-3">
              {incomeList.map((item, index) => {
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
            {incomeList.length !== 0 ? (
              <div className="w-1/2 mx-auto">
                <p className="py-2 px-4 bg-slate-300 text-center text-green-500 text-lg font-black rounded">
                  Your total Income: {totalIncome}
                </p>
              </div>
            ) : (
              <div className="w-1/2 mx-auto">
                <p className="pt-14 text-center text-orange-500 text-lg font-black">
                  Your have no Income yet!
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-3">
          <div className="bg-slate-100 rounded border-2 border-sky-300 shadow-slate-600">
            <h1 className="bg-slate-200 py-3 border-b-2 border-sky-300 text-center text-lg font-bold text-sky-500 shadow">
              Source of Expanse
            </h1>
            <div className="">
              <div className="flex justify-around items-center py-4">
                <label
                  className="text-orange-500 text-lg font-semibold"
                  htmlFor="ExpanseType"
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
                  placeholder="Type of Expanse"
                  name="ExpanseType"
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
                  placeholder="Total Expanse"
                  name="amount"
                />
              </div>
              <div className="flex justify-end mb-3">
                <Button
                  handler={addExpanseDetails}
                  customStyle="bg-orange-400 text-sky-800"
                >
                  Add Expanse
                </Button>
              </div>
            </div>
          </div>
          <div className="border-2 border-sky-300 bg-slate-100">
            <h1 className="bg-slate-200 py-3 border-b-2 border-sky-300 text-center text-lg font-bold text-sky-500 shadow">
              Expanse details
            </h1>
            <ul className=" my-3">
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
                <p className="py-2 px-4 bg-slate-300 text-center text-red-500 text-lg font-black rounded">
                  Your total Expanse: {totalExpance}
                </p>
              </div>
            ) : (
              <div className="w-1/2 mx-auto">
                <p className="pt-14 text-center text-green-500 text-lg font-black">
                  Your have no Expanse yet!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="py-3 bg-green-500 mt-8">
        <h1 className=" text-lg text-center text-white">
          available balance:{availableAmount}
        </h1>
      </div>
    </div>
  );
};

export default ExpanseFile;
