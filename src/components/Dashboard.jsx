import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/"); // Redirect to login page after logout
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100"
    style={{ backgroundImage: "url('/img.jpg')" }}
>
      <div className="bg-white p-8 rounded-2xl shadow-lg w-80 md:w-96 lg:w-96 text-center opacity-70">
        <h2 className="text-2xl font-semibold mb-4">Welcome to Your Dashboard</h2>
        <p className="text-gray-600 mb-5">You are now logged in.</p>
        <button
          onClick={handleLogout}
          className="w-full bg-black text-white p-2 rounded hover:bg-gray-800 transition"
          >
          Logout
        </button>
      </div>
    </div>
  );
}
