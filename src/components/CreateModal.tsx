import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { User } from "../types/types";
import { borderRadius } from "@mui/system";

interface UserFormProps {
  initialData?: Omit<User, "id">;
  onSubmit: (data: Omit<User, "id">) => void;
}
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  backgroundColor: "#041530",
  p: 4,
};
const CreateModal = ({ handleClose, open, onSubmit }: any) => {
  const [formData, setFormData] = useState<Omit<User, "id">>({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    handleClose();
  };
  return (
    <div>
      {" "}
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {formData && (
            <form
              onSubmit={handleSubmit}
              className=" flex flex-col items-center "
            >
              <div className=" w-full">
                <p className=" text-xs text-slate-100 font-semibold mb-1">
                  Name
                </p>
                <input
                  className=" w-full py-2 px-2 outline-none border border-slate-300 rounded-md mb-2"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              </div>
              <div className=" w-full mt-4">
                <p className=" text-xs text-slate-100 font-semibold mb-1">
                  Email
                </p>
                <input
                  className=" w-full py-2 px-2 outline-none border border-slate-300 rounded-md mb-2"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>
              <div className=" w-full mt-4">
                <p className=" text-xs text-slate-100 font-semibold mb-1">
                  Phone
                </p>
                <input
                  className=" w-full py-2 px-2 outline-none border border-slate-300 rounded-md mb-2"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  required
                />
              </div>

              <button
                className=" bg-cyan-700 mt-4 px-4 py-2 w-max rounded-md text-white font-semibold"
                type="submit"
              >
                Submit
              </button>
            </form>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default CreateModal;
