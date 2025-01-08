export const fetchUsers = async () => {
  const res = await fetch("http://localhost:5000/api/wifi/get-users");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};
