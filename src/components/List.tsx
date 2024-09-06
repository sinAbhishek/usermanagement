import React, { useEffect, useState } from "react";
import { fetchUsers, createUser, updateUser, deleteUser } from "../api/api";
import { User } from "../types/types";
import UserItem from "./Item";
import EditModal from "./EditModal";
import CreateModal from "./CreateModal";

const List: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [openEdit, setOpen] = React.useState(false);
  const [openCreate, setCreateOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCreateOpen = () => setCreateOpen(true);
  const handleCreateClose = () => setCreateOpen(false);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const usersData = await fetchUsers();
      console.error(usersData);
      setUsers(usersData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreate = async (userData: Omit<User, "id">) => {
    try {
      const newUser = await createUser(userData);
      setUsers([...users, newUser]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (userData: Omit<User, "id">) => {
    if (!editingUser) return;
    try {
      const updatedUser = await updateUser(editingUser.id, userData);
      setUsers(
        users.map((user) => (user.id === editingUser.id ? updatedUser : user))
      );
      setEditingUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error(error);
    }
  };
  const openEditor = (user: any) => {
    handleOpen();
    setEditingUser(user);
    console.log(user);
  };

  return (
    <div className="w-[90%] max-[768px]:w-full bg-[#f8f6f6] px-8 ">
      <table className=" w-full ">
        <thead className="w-full border-b border-slate-500">
          <tr className="  w-full ">
            <th className=" text-start py-2 px-2 ">Name</th>
            <th className=" text-start py-2 px-2">Email</th>
            <th className=" text-start py-2 px-2">Phone</th>
            <th className=" text-start py-2 px-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserItem
              key={user.id}
              user={user}
              onEdit={() => openEditor(user)}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
      <EditModal
        data={editingUser}
        handleClose={handleClose}
        onSubmit={handleUpdate}
        open={openEdit}
      />
      <CreateModal
        onSubmit={handleCreate}
        handleClose={handleCreateClose}
        open={openCreate}
      />
      <button
        onClick={() => handleCreateOpen()}
        className="  fixed top-1 right-2 w-max px-4 py-2 rounded-md bg-orange-700 text-white font-medium"
      >
        Create
      </button>
    </div>
  );
};

export default List;
