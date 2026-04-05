// import { useState } from "react";
// import { API } from "../api/axios.js";

// export default function Settings() {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [oldPassword, setOldPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [avatar, setAvatar] = useState(null);
//   const [cover, setCover] = useState(null);

//   const updateAccount = async () => {
//     await API.patch("/users/update-account", { fullName, email });
//     alert("Updated");
//   };

//   const changePassword = async () => {
//     await API.post("/users/change-password", {
//       oldPassword,
//       newPassword
//     });
//     alert("Password changed");
//   };

//   const updateAvatar = async () => {
//     const fd = new FormData();
//     fd.append("avatar", avatar);

//     await API.patch("/users/avatar", fd);
//     alert("Avatar updated");
//   };

//   const updateCover = async () => {
//     const fd = new FormData();
//     fd.append("coverImage", cover);

//     await API.patch("/users/cover-image", fd);
//     alert("Cover updated");
//   };

//   return (
//     <div className="p-4 text-blue-500 flex flex-col gap-4">

//       <h2>Account</h2>
//       <input placeholder="Full Name" onChange={e => setFullName(e.target.value)} />
//       <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
//       <button onClick={updateAccount}>Update</button>

//       <h2>Password</h2>
//       <input placeholder="Old Password" onChange={e => setOldPassword(e.target.value)} />
//       <input placeholder="New Password" onChange={e => setNewPassword(e.target.value)} />
//       <button onClick={changePassword}>Change Password</button>

//       <h2>Avatar</h2>
//       <input type="file" onChange={e => setAvatar(e.target.files[0])} />
//       <button onClick={updateAvatar}>Upload Avatar</button>

//       <h2>Cover</h2>
//       <input type="file" onChange={e => setCover(e.target.files[0])} />
//       <button onClick={updateCover}>Upload Cover</button>

//     </div>
//   );
// }


import { useState } from "react";
import { API } from "../api/axios.js";

export default function Settings() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [cover, setCover] = useState(null);

  const updateAccount = async () => {
    await API.patch("/users/update-account", { fullName, email });
    alert("Updated");
  };

  const changePassword = async () => {
    await API.post("/users/change-password", {
      oldPassword,
      newPassword
    });
    alert("Password changed");
  };

  const updateAvatar = async () => {
    const fd = new FormData();
    fd.append("avatar", avatar);
    await API.patch("/users/avatar", fd);
    alert("Avatar updated");
  };

  const updateCover = async () => {
    const fd = new FormData();
    fd.append("coverImage", cover);
    await API.patch("/users/cover-image", fd);
    alert("Cover updated");
  };

  return (
    <div className="p-6 text-white max-w-3xl mx-auto flex flex-col gap-6">

      <h1 className="text-3xl font-bold">Settings ⚙️</h1>

      {/* 🔥 ACCOUNT */}
      <div className="bg-gray-900 p-5 rounded-xl shadow-md flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Account</h2>

        <input
          placeholder="Full Name"
          className="p-3 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-red-500"
          onChange={e => setFullName(e.target.value)}
        />

        <input
          placeholder="Email"
          className="p-3 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-red-500"
          onChange={e => setEmail(e.target.value)}
        />

        <button
          onClick={updateAccount}
          className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition transform hover:scale-105"
        >
          Update Profile
        </button>
      </div>

      {/* 🔥 PASSWORD */}
      <div className="bg-gray-900 p-5 rounded-xl shadow-md flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Change Password</h2>

        <input
          type="password"
          placeholder="Old Password"
          className="p-3 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-red-500"
          onChange={e => setOldPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="New Password"
          className="p-3 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-red-500"
          onChange={e => setNewPassword(e.target.value)}
        />

        <button
          onClick={changePassword}
          className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
        >
          Change Password
        </button>
      </div>

      {/* 🔥 AVATAR */}
      <div className="bg-gray-900 p-5 rounded-xl shadow-md flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Update Avatar</h2>

        {/* PREVIEW */}
        {avatar && (
          <img
            src={URL.createObjectURL(avatar)}
            className="w-20 h-20 rounded-full object-cover"
          />
        )}

        <input
          type="file"
          className="bg-gray-800 p-2 rounded-lg"
          onChange={e => setAvatar(e.target.files[0])}
        />

        <button
          onClick={updateAvatar}
          className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition transform hover:scale-105"
        >
          Upload Avatar
        </button>
      </div>

      {/* 🔥 COVER */}
      <div className="bg-gray-900 p-5 rounded-xl shadow-md flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Update Cover Image</h2>

        {/* PREVIEW */}
        {cover && (
          <img
            src={URL.createObjectURL(cover)}
            className="w-full h-32 object-cover rounded-lg"
          />
        )}

        <input
          type="file"
          className="bg-gray-800 p-2 rounded-lg"
          onChange={e => setCover(e.target.files[0])}
        />

        <button
          onClick={updateCover}
          className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition transform hover:scale-105"
        >
          Upload Cover
        </button>
      </div>

    </div>
  );
}