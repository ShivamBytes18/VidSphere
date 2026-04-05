// import { useEffect, useState } from "react";
// import { API } from "../api/axios.js";

// export default function Profile() {
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await API.get("/users/current-user");
//         setUser(res.data.data);
//       } catch (err) {
//         console.log(err);

//         // 🔥 fallback to localStorage
//         const storedUser = JSON.parse(localStorage.getItem("user"));

//         if (storedUser) {
//           setUser(storedUser);
//         } else {
//           setError("Not logged in");
//         }
//       }
//     };

//     fetchUser();
//   }, []);

//   // ❌ not logged in
//   if (error) {
//     return (
//       <div className="text-center text-red-500 mt-10">
//         {error}
//       </div>
//     );
//   }

//   // ⏳ loading
//   if (!user) {
//     return (
//       <div className="text-center mt-10">
//         Loading...
//       </div>
//     );
//   }

//   // ✅ profile UI
//   return (
//     <div className="p-6 text-white flex flex-col items-center gap-4">

//       {/* COVER IMAGE */}
//       {user.coverImage && (
//         <img
//           src={user.coverImage}
//           className="w-full h-40 object-cover rounded-lg"
//         />
//       )}

//       {/* AVATAR */}
//       <img
//         src={user.avatar}
//         className="w-24 h-24 rounded-full border-2 border-white -mt-12"
//       />

//       {/* NAME */}
//       <h2 className="text-2xl font-bold">
//         {user.fullName}
//       </h2>

//       {/* USERNAME */}
//       <p className="text-gray-400">
//         @{user.username}
//       </p>

//       {/* EMAIL */}
//       <p className="text-sm">
//         {user.email}
//       </p>

//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { API } from "../api/axios";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // 🔥 NEW
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await API.get("/users/current-user");   
   // console.log("FULL RESPONSE 👉", res.data);
        setUser(res.data.data);
      } catch (err) {
        console.log("PROFILE ERROR 👉", err);

        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser) {
          setUser(storedUser);
        } else {
          setError("Not logged in");
        }
      } finally {
        setLoading(false); // 🔥 THIS FIXES YOUR ISSUE
      }
    };

    fetchUser();
  }, []);

  // ⏳ loading
  if (loading) {
    return <p className="text-white text-center mt-10">Loading...</p>;
  }

  // ❌ not logged in
  if (error) {
    return (
      <div className="text-center text-red-500 mt-10">
        {error}
      </div>
    );
  }

  // ❌ fallback safety
  if (!user) {
    return <p className="text-center">No user data</p>;
  }

  // ✅ profile UI
  return (
    <div className="p-6 text-white flex flex-col items-center gap-4">

      {user.coverImage && (
        <img
          src={user.coverImage}
          className="w-full h-40 object-cover rounded-lg"
        />
      )}

      <img
        src={user.avatar}
        className="w-24 h-24 rounded-full border-2 border-white -mt-12"
      />

      <h2 className="text-2xl font-bold">
        {user.fullName}
      </h2>

      <p className="text-gray-400">
        @{user.username}
      </p>

      <p className="text-sm">
        {user.email}
      </p>
    </div>
  );
}