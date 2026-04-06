// import { useNavigate } from "react-router-dom";

// export default function Sidebar() {
//   const navigate = useNavigate();

//   return (
//     <div className="w-48 h-screen bg-black p-4 flex flex-col gap-4">

//       <p onClick={() => navigate("/")} className="cursor-pointer">
//         Home
//       </p>
      
//       <p onClick={() => navigate("/upload")}className="cursor-pointer">
//         Upload
//         </p> {/* 🔥 ADD */}


//       <p onClick={() => navigate("/history")} className="cursor-pointer">
//         History
//       </p>

//       {/* 🔥 ADD THESE */}
//       <p onClick={() => navigate("/subscriptions")} className="cursor-pointer">
//         Subscriptions
//       </p>

//       <p onClick={() => navigate("/profile")} className="cursor-pointer">
//         Profile
//       </p>

//       <p onClick={() => navigate("/settings")} className="cursor-pointer">
//         Settings
//       </p>
      
//       <p onClick={() => navigate("/my-videos")}>
//       My Videos
//     </p>
    
//     </div>
//   );
// }


import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menu = [
    { name: "Home 🏠", path: "/" },
    { name: "Upload 🎬", path: "/upload" },
    { name: "My Videos 🎥", path: "/my-videos" },
    { name: "History 📜", path: "/history" },
    { name: "Subscriptions 🔔", path: "/subscriptions" },
    { name: "Profile 👤", path: "/profile" },
     { name: "Settings ⚙️", path: "/settings" }
  ];

  return (
    <div className="w-60 h-screen bg-black p-4 flex flex-col gap-3">

      {menu.map((item) => (
        <button
          key={item.name}
          onClick={() => navigate(item.path)}
          className={`text-left px-4 py-3 rounded-xl transition-all duration-300 transform
          hover:scale-105 hover:bg-gray-800 hover:shadow-lg
          ${location.pathname === item.path
            ? "bg-blue-800"
            : "bg-gray-900"
          }`}
        >
          {item.name}
        </button>
      ))}

    </div>
  );
}