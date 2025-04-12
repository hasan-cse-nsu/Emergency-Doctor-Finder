import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserHomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to Emergency Doctor Finder
      </h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
      <Link
        to="/updateUser"
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Update Profile
      </Link>
    </div>
  );
};

export default UserHomePage;
