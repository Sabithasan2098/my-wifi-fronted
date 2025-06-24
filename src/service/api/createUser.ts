import { UserFormData } from "@/components/CreateUser/CreateUserForm";

// api/userApi.ts
export const createUser = async (userData: UserFormData) => {
  const res = await fetch("http://localhost:5000/api/wifi/create-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!res.ok) {
    throw new Error("Failed to create user");
  }

  return res.json(); // success message বা created user return হতে পারে
};
