import React from "react";
import { User } from "../types/types";
import { useNavigate } from "react-router-dom";
interface UserItemProps {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

const Item: React.FC<UserItemProps> = ({ user, onEdit, onDelete }) => {
  const navigate = useNavigate();
  const handleNavigate = (data: any) => {
    navigate("/user", { state: data }); // Passing the object as state
  };
  return (
    <tr className=" border-b border-slate-300">
      <td className=" py-4 px-2">{user.name}</td>
      <td className=" py-4 px-2">{user.email}</td>
      <td className=" py-4 px-2">{user.phone}</td>
      <td className=" py-4 px-2">
        <button onClick={() => onEdit(user)}>Edit</button>
        <button className=" mx-2 w-max" onClick={() => onDelete(user.id)}>
          Delete
        </button>
        <button
          className="view w-max px-4 py-1 rounded-full bg-green-400 text-sm text-white "
          onClick={() => handleNavigate(user)}
        >
          View
        </button>
      </td>
    </tr>
  );
};

export default Item;
