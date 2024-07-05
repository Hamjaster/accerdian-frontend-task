import React from "react";
import logo from "../assets/logo.png.png";
import Button from "@mui/material/Button";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Navbar() {
  return (
    <div className="flex flex-row items-center justify-between px-20 py-6">
      <div className="space-x-7 flex ">
        <img src={logo} alt="" />
        <Button
          endIcon={<IoMdArrowDropdown />}
          className="inline button"
          variant="contained"
        >
          Courses
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <Button className="inline button-text" variant="text">
          Refer & Earn
        </Button>
        <Button className="inline button-text" variant="text">
          Resources
        </Button>
        <Button className="inline button-text" variant="text">
          About us
        </Button>
        <Button className="inline button-gray ">Login</Button>
        <Button className="inline button" variant="contained">
          Try for free
        </Button>
      </div>
    </div>
  );
}
