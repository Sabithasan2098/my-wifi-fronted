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
const shortMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const getCurrentMonthRange = () => {
  const currentMonthIndex = new Date().getMonth(); // Get the current month index (0-11)
  const prevMonthIndex = (currentMonthIndex - 1 + 12) % 12; // Previous month (wrap around)
  const nextMonthIndex = (currentMonthIndex + 1) % 12; // Next month (wrap around)

  return [
    shortMonths[prevMonthIndex],
    shortMonths[currentMonthIndex],
    shortMonths[nextMonthIndex],
  ];
};

const Payment = () => {
  const currentMonth = getCurrentMonthRange();
  return (
    <div>
      <h1 className="text-2xl md:text-5xl font-bold text-center mb-2">
        Payment
      </h1>
      <div className="hidden md:block max-w-7xl mx-auto mt-5">
        <table className="table text-center">
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
      <div className="block lg:hidden md:hidden max-w-3xl mx-auto mt-5">
        <table className="table text-center">
          {/* head */}
          <thead>
            <tr className="bg-orange-500  text-white  ">
              <th className="text-start">Name</th>
              {currentMonth.map((month, index) => (
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
