import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type Props = {
  open: boolean;
  handleOpen: any;
  handleClose: any;
};

export default function PopupModal({ open, handleOpen, handleClose }: Props) {
  const [referrerName, setReferrerName] = useState("");
  const [referrerEmail, setReferrerEmail] = useState("");
  const [friendName, setFriendName] = useState("");
  const [friendEmail, setFriendEmail] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const referralData = {
      referrerName,
      referrerEmail,
      friendName,
      friendEmail,
    };

    try {
      const response = await fetch(
        "https://accerdian-backend-task.vercel.app/api/referrals/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(referralData),
        }
      );

      if (response.ok) {
        alert("Referral submitted successfully");
        handleClose();
      } else {
        alert("Failed to submit referral");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the referral");
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="relative bg-white rounded-lg p-6 w-full max-w-md">
            <div
              onClick={handleClose}
              className="absolute top-3 right-3 text-3xl cursor-pointer"
            >
              <IoIosClose />
            </div>
            <h2 className="text-2xl font-bold mb-4">Refer a Course</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  value={referrerName}
                  onChange={(e) => setReferrerName(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Your Email</label>
                <input
                  type="email"
                  value={referrerEmail}
                  onChange={(e) => setReferrerEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Friend's Name
                </label>
                <input
                  type="text"
                  value={friendName}
                  onChange={(e) => setFriendName(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Friend's Email
                </label>
                <input
                  type="email"
                  value={friendEmail}
                  onChange={(e) => setFriendEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-[#1a73e8] text-white px-6 py-2 pb-3 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
