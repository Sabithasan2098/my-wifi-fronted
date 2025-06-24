/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";

import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../../service/api/fetchUser";
import Link from "next/link";

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
      <div>
        <h1 className="text-xl md:text-5xl font-semibold md:font-bold text-center mb-2">
          Broadband User&apos;s List
        </h1>
        <table className="table text-center overflow-x-scroll">
          {/* head */}
          <thead>
            <tr className="bg-orange-500  text-white ">
              <th>#</th>
              <th className="text-sm font-light md:text-xl md:font-semibold text-start">
                Name
              </th>
              <th className="text-sm font-light md:text-xl md:font-semibold text-start">
                Mac Address
              </th>
              <th className="text-sm font-light md:text-xl md:font-semibold ">
                Date
              </th>
              <th className="text-sm font-light md:text-xl md:font-semibold ">
                Hold up
              </th>
              <th className="text-sm font-light md:text-xl md:font-semibold ">
                Status
              </th>
              <th className="text-sm font-light md:text-xl md:font-semibold ">
                Action
              </th>
            </tr>
          </thead>
          {data?.data?.map((item: any, index: number) => (
            <tbody key={index} className="mt-6">
              <tr className="text-xs md:text-base border border-orange-200 ">
                <td>
                  <p className="text-xs md:text-base ">{index + 1}</p>
                </td>
                {item.status === "Owner" ? (
                  <td>
                    <h1 className="text-xs md:text-base text-start text-red-500">
                      {item.name}
                    </h1>
                  </td>
                ) : (
                  <td>
                    <h1 className="text-xs md:text-base opacity-50 text-start">
                      {item.name}
                    </h1>
                  </td>
                )}
                <td>
                  <h1 className="text-xs md:text-base text-start">
                    {item.macAddress}
                  </h1>
                </td>
                <td>
                  <h1 className="text-xs md:text-base ">{item.date}</h1>
                </td>
                <td>
                  <p className="text-xs md:text-base ">{item.holdUp}</p>
                </td>
                <td>
                  <p className="text-xs md:text-base ">{item.payment}</p>
                </td>
                {item.status === "Owner" ? (
                  <th className="text-xs md:text-base ">no action</th>
                ) : (
                  <th>
                    <button className="text-xs md:text-base btn btn-ghost btn-xs">
                      action
                    </button>
                  </th>
                )}
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className="text-center mt-5">
        <Link href={"/createUser"}>
          <button className="px-5 md:px-14 py-2 md:py-3 bg-orange-500 text-white text-xs md:text-base">
            Add New User
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
