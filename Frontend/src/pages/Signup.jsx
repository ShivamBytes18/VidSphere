// import { useState } from "react";
// import { API } from "../api/axios.js";
// import { useNavigate } from "react-router-dom";

// export default function Signup() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     fullName: "",
//     email: "",
//     username: "",
//     password: ""
//   });

//   const [avatar, setAvatar] = useState(null);
//   const [coverImage, setCover] = useState(null);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // const handleSignup = async () => {
//   //   try {
//   //     const fd = new FormData();

//   //     fd.append("fullName", form.fullName);
//   //     fd.append("email", form.email);
//   //     fd.append("username", form.username);
//   //     fd.append("password", form.password);

//   //     if (avatar) fd.append("avatar", avatar);
//   //     if (coverImage) fd.append("coverImage", coverImage);

//   //     await API.post("/users/register", fd);

//   //     alert("Signup successful 🚀");
//   //     navigate("/login");

//   //   } catch (err) {
//   //     alert(err.response?.data?.message || "Signup failed");
//   //   }
//   // };
//   const handleSignup = async () => {
//   console.log("Clicked signup"); // 👈 add this

//   try {
//     const fd = new FormData();

//     fd.append("fullName", form.fullName);
//     fd.append("email", form.email);
//     fd.append("username", form.username);
//     fd.append("password", form.password);

//     if (avatar) fd.append("avatar", avatar);
//     if (coverImage) fd.append("coverImage", coverImage);

//     console.log("FormData ready"); // 👈

//     const res = await API.post("/users/register", fd);

//     console.log(res); // 👈

//     alert("Signup successful 🚀");
//     navigate("/login");

//   } catch (err) {
//     console.log(err); // 👈 VERY IMPORTANT
//     alert(err.response?.data?.message || "Signup failed");
//   }
// };

//   return (
//     <div className="flex justify-center items-center h-screen bg-youtubeBlack">
//       <div className="bg-youtubeDark p-6 rounded-lg w-96 flex flex-col gap-3">

//         <h2 className="text-xl font-bold text-center">Signup</h2>

//         <input
//           name="fullName"
//           placeholder="Full Name"
//           className="p-2 bg-gray-800 rounded"
//           onChange={handleChange}
//         />

//         <input
//           name="email"
//           placeholder="Email"
//           className="p-2 bg-gray-800 rounded"
//           onChange={handleChange}
//         />

//         <input
//           name="username"
//           placeholder="Username"
//           className="p-2 bg-gray-800 rounded"
//           onChange={handleChange}
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           className="p-2 bg-gray-800 rounded"
//           onChange={handleChange}
//         />

//         <label className="text-sm">Avatar</label>
//         <input type="file" onChange={(e) => setAvatar(e.target.files[0])} />

//         <label className="text-sm">Cover Image</label>
//         <input type="file" onChange={(e) => setCover(e.target.files[0])} />

//         <button
//           onClick={handleSignup}
//           className="bg-red-500 p-2 rounded hover:bg-red-600"
//         >
//           Signup
//         </button>

//         <p
//           className="text-sm text-gray-400 text-center cursor-pointer"
//           onClick={() => navigate("/login")}
//         >
//           Already have an account? Login
//         </p>
//       </div>
//     </div>
//   );
// }



import { useState } from "react";
import { API } from "../api/axios.js";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    username: "",
    password: ""
  });

  const [avatar, setAvatar] = useState(null);
  const [coverImage, setCover] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    console.log("Clicked signup");

    try {
      const fd = new FormData();

      fd.append("fullName", form.fullName);
      fd.append("email", form.email);
      fd.append("username", form.username);
      fd.append("password", form.password);

      if (avatar) fd.append("avatar", avatar);
      if (coverImage) fd.append("coverImage", coverImage);

      console.log("FormData ready");

      const res = await API.post("/users/register", fd);

      console.log(res);

      alert("Signup successful 🚀");
      navigate("/login");

    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-4 rounded-2xl">

      {/* 🔥 CARD */}
      <div className="bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl w-full max-w-md flex flex-col gap-4 shadow-2xl border border-gray-800">

        {/* 🔥 TITLE */}
        <h2 className="text-2xl font-bold text-center">
          Create Account 🚀
        </h2>

        {/* 🔥 INPUTS */}
        <div className="flex flex-col gap-3">

          <input
            name="fullName"
            placeholder="Full Name"
            className="p-3 bg-gray-800 text-white rounded-lg outline-none 
            focus:ring-2 focus:ring-red-500 transition"
            onChange={handleChange}
          />

          <input
            name="email"
            placeholder="Email"
            className="p-3 bg-gray-800 text-white rounded-lg outline-none 
            focus:ring-2 focus:ring-red-500 transition"
            onChange={handleChange}
          />

          <input
            name="username"
            placeholder="Username"
            className="p-3 bg-gray-800 text-white rounded-lg outline-none 
            focus:ring-2 focus:ring-red-500 transition"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="p-3 bg-gray-800 text-white rounded-lg outline-none 
            focus:ring-2 focus:ring-red-500 transition"
            onChange={handleChange}
          />

        </div>

        {/* 🔥 FILE INPUTS */}
        <div className="flex flex-col gap-2 mt-2">

          <label className="text-sm text-gray-400">Avatar</label>
          <input
            type="file"
            className="text-sm bg-gray-800 p-2 rounded-lg"
            onChange={(e) => setAvatar(e.target.files[0])}
          />

          <label className="text-sm text-gray-400">Cover Image</label>
          <input
            type="file"
            className="text-sm bg-gray-800 p-2 rounded-lg"
            onChange={(e) => setCover(e.target.files[0])}
          />

        </div>

        {/* 🔥 BUTTON */}
        <button
          onClick={handleSignup}
          className="bg-red-600 py-2.5 rounded-lg font-semibold 
          hover:bg-red-700 transition transform hover:scale-105 shadow-md mt-2"
        >
          Signup 🚀
        </button>

        {/* 🔥 LOGIN LINK */}
        <p
          className="text-sm text-gray-400 text-center cursor-pointer hover:text-white transition"
          onClick={() => navigate("/login")}
        >
          Already have an account?{" "}
          <span className="text-red-500">Login</span>
        </p>

      </div>
    </div>
  );
}