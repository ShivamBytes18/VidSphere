import { useEffect, useState } from "react";
import { API } from "../api/axios";

export default function MyVideos() {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    const res = await API.get("/videos/my-videos");
    setVideos(res.data.data);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleDelete = async (id) => {
    await API.delete(`/videos/${id}`);
    fetchVideos(); // refresh
  };

  return (
    <div className="p-4 text-white">
      <h2 className="text-xl mb-4">My Videos</h2>

      {videos.map((v) => (
        <div
          key={v._id}
          className="flex items-center gap-4 mb-4 bg-gray-900 p-3 rounded"
        >
          <img src={v.thumbnail} className="w-32 h-20 object-cover" />

          <div className="flex-1">
            <h3>{v.title}</h3>
            <p className="text-gray-400">{v.description}</p>
          </div>

          {/* DELETE */}
          <button
            onClick={() => handleDelete(v._id)}
            className="bg-red-500 px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}