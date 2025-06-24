"use client";
import { createUser } from "@/service/api/createUser";
import React, { useState } from "react";
import { toast } from "react-toastify";

export interface UserFormData {
  name: string;
  macAddress: string;
  date: string;
  holdUp: string;
}

const CreateUserForm = () => {
  const [formData, setFormData] = useState<UserFormData>({
    name: "",
    macAddress: "",
    date: "",
    holdUp: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    try {
      const result = await createUser(formData);
      console.log("User created:", result);
      toast.success("User created successfully!");

      // Reset form
      setFormData({
        name: "",
        macAddress: "",
        date: "",
        holdUp: "",
      });
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error("Failed to create user.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-xl md:text-5xl font-semibold md:font-bold text-center mb-3 md:mb-8">
        Create New User
      </h1>
      <div className="w-[300px] md:w-[500px] space-y-5">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">User Name*</legend>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input input-warning w-full bg-white text-black"
            placeholder="John"
            required
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Mac Address*</legend>
          <input
            type="text"
            name="macAddress"
            value={formData.macAddress}
            onChange={handleChange}
            className="input input-warning w-full bg-white text-black"
            placeholder="00:1A:2B:3C:4D:5E"
            required
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Date*</legend>
          <input
            type="string"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="input input-warning w-full bg-white text-black"
            required
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Hold Up*</legend>
          <input
            type="text"
            name="holdUp"
            value={formData.holdUp}
            onChange={handleChange}
            className="input input-warning w-full bg-white text-black"
            placeholder="$100"
            required
          />
        </fieldset>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-700 transition"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreateUserForm;
