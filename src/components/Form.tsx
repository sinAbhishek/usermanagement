import React, { useState } from "react";
import { User } from "../types/types";

interface UserFormProps {
  initialData?: Omit<User, "id">;
  onSubmit: (data: Omit<User, "id">) => void;
}

const Form: React.FC<UserFormProps> = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState<Omit<User, "id">>(
    initialData || { name: "", email: "", phone: "" } //change here
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
