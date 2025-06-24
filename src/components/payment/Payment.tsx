import React from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Payment = () => {
  return (
    <div className="mt-5">
      <h1 className="text-2xl md:text-5xl font-bold text-center mb-2">
        Payment List
      </h1>
      <div className="max-w-7xl mx-auto mt-5">
        <table className="table text-center overflow-x-auto">
          {/* head */}
          <thead>
            <tr className="bg-orange-500  text-white text-sm font-normal ">
              <th className="text-start">Name</th>
              {months.map((month, index) => (
                <th key={index}>{month}</th>
              ))}
              <th>Pay</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default Payment;
