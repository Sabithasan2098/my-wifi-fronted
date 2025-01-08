/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";

import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../../service/api/fetchUser";

const Home = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  if (isLoading)
    return (
      <div className="h-screen flex items-center justify-center">
        Loading........
      </div>
    );
  if (error) return <div>Error:{error.message}</div>;
  console.log(data.data.map((a: any) => a.name));

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <h1 className="text-2xl md:text-5xl font-bold text-center mb-2">
        Broadband users
      </h1>
      <table className="table text-center">
        {/* head */}
        <thead>
          <tr className="bg-orange-500  text-white text-2xl font-normal ">
            <th>#</th>
            <th className="text-start">Name</th>
            <th className="text-start">Mac Address</th>
            <th>Date</th>
            <th>Hold up</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {data?.data?.map((item: any, index: number) => (
          <tbody key={index} className="mt-6">
            <tr className="border border-orange-200 ">
              <td>
                <p>{index + 1}</p>
              </td>
              {item.status === "Owner" ? (
                <td>
                  <h1 className="text-sm text-start text-red-500">
                    {item.name}
                  </h1>
                </td>
              ) : (
                <td>
                  <h1 className="text-sm opacity-50 text-start">{item.name}</h1>
                </td>
              )}
              <td>
                <h1 className="text-start">{item.macAddress}</h1>
              </td>
              <td>
                <h1>{item.date}</h1>
              </td>
              <td>
                <p>{item.holdUp}</p>
              </td>
              <td>
                <p>{item.payment}</p>
              </td>
              {item.status === "Owner" ? (
                <th>no action</th>
              ) : (
                <th>
                  <button className="btn btn-ghost btn-xs">action</button>
                </th>
              )}
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Home;
