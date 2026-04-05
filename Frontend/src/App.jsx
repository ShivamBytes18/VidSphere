import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Slidebar.jsx";

import Profile from "./pages/Profile.jsx";
import Settings from "./pages/Settings.jsx";           // ✅ ADD
import Subscriptions from "./pages/Subscriptions.jsx"; // ✅ ADD

import Home from "./pages/Home.jsx";
import Watch from "./pages/Watch.jsx";
import Upload from "./pages/Upload.jsx";
import History from "./pages/History.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import MyVideos from "./pages/MyVideos";


export default function App() {
  return (
    <BrowserRouter>
      <div className="flex text-white">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/watch/:id" element={<Watch />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/history" element={<History />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/subscriptions" element={<Subscriptions />} />
              <Route path="/my-videos" element={<MyVideos />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}