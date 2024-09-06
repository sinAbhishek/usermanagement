import React from "react";
import { useLocation } from "react-router-dom";
const User = () => {
  const location = useLocation();
  const data = location.state;
  return (
    <div className=" w-screen h-screen flex justify-center items-center bg-slate-100">
      {" "}
      {data && (
        <div className=" max-[500px]:w-[99%] mt-[40px] h-[90%] w-[65%] bg-white">
          <div className="">
            <h2 className=" py-1 px-2 bg-slate-200 font-medium">
              Personal Details
            </h2>
            <div className=" px-4 py-4">
              <p>Name - {data.name}</p>
              <p>Email - {data.email}</p>
              <p>Phone - {data.phone}</p>
            </div>
          </div>
          <div className="">
            <h2 className=" py-1 px-2 bg-slate-200 font-medium">Address</h2>
            <div className="px-4 py-4">
              <p>Street - {data.address.street}</p>
              <p>Suite - {data.address.suite}</p>
              <p>City - {data.address.city}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
