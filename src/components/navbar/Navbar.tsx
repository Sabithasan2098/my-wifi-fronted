import Link from "next/link";
import React from "react";
import { RiMenuUnfoldLine } from "react-icons/ri";

const Navbar = () => {
  const nav = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/Payment"}>Payment list</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-white max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <RiMenuUnfoldLine />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {nav}
          </ul>
        </div>
        <Link href={"/"}>
          <p className="btn btn-ghost text-xl hidden lg:block">My Wifi</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nav}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn text-white">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
