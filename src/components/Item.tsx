import React from "react";
import { User } from "../types/types";

interface UserItemProps {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

const Item: React.FC<UserItemProps> = ({ user, onEdit, onDelete }) => {
  return (
    <tr className=" border-b border-slate-300">
      <td className=" py-4 px-2">{user.name}</td>
      <td className=" py-4 px-2">{user.email}</td>
      <td className=" py-4 px-2">{user.phone}</td>
      <td className=" py-4 px-2">
        <button onClick={() => onEdit(user)}>Edit</button>
        <button onClick={() => onDelete(user.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default Item;
