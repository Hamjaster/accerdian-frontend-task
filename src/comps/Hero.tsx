import { Button, Modal } from "@mui/material";
import React from "react";
import image from "../../src/assets/image.png";
import money from "../../src/assets/money.png";
import PopupModal from "./PopupModal";

export default function Hero() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="overflow-hidden relative my-5 mb-14 bg-[#eef5ff] rounded-xl shadow-2xl items-center text-black flex w-3/4 mx-auto">
        <img
          className="absolute w-24 -top-7 left-0 transform scale-x-[-1]"
          src={money}
          alt=""
        />
        <img
          className="absolute w-24 -top-7 right-5 transform scale-x-[1]"
          src={money}
          alt=""
        />
        <div className="left p-10 space-y-10">
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Let's Learn & Earn
          </div>
          <div className="text-2xl sm:text-3xl font-normal">
            Get a change to win up-to{" "}
            <span className="font-bold text-2xl sm:text-3xl md:text-4xl text-blue-500">
              Rs. 15,000
            </span>
          </div>
          <button onClick={handleOpen} className="button text-white px-8 py-2 ">
            Refer Now
          </button>
        </div>

        <div className="relative right">
          <img
            className="absolute w-24 z-10 top-[35%] right-0 transform scale-x-[-1]"
            src={money}
            alt=""
          />
          <img
            className="absolute w-24 z-10 top-1 right-[55%] transform scale-x-[1]"
            src={money}
            alt=""
          />
          <img
            className="absolute w-24 z-30 bottom-9 left-5 transform scale-y-[-1]"
            src={money}
            alt=""
          />
          <img className="w-[49rem] z-20 relative" src={image} />
        </div>
      </div>
      <PopupModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
    </>
  );
}
