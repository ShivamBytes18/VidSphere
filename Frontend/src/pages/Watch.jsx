// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { API } from "../api/axios.js";

// export default function Watch() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [video, setVideo] = useState(null);
//   const [related, setRelated] = useState([]);
//   const [liked, setLiked] = useState(false);
//   const [subscribed, setSubscribed] = useState(false);
//   const [subsCount, setSubsCount] = useState(0);

//   useEffect(() => {
//     const fetchVideo = async () => {
//       try {
//         const res = await API.get(`/videos/${id}`);

//         const videoData = res.data.data.video;
//         const relatedVideos = res.data.data.relatedVideos;

//         setVideo(videoData);
//         setRelated(relatedVideos);

//         // 🔥 fetch subscriber count
//         const subRes = await API.get(
//           `/subscriptions/count/${videoData.owner._id}`
//         );
//         setSubsCount(subRes.data.data.count);

//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchVideo();
//   }, [id]);

//   // ❤️ LIKE HANDLER
//   const handleLike = async () => {
//     try {
//       const res = await API.post(`/videos/like/${video._id}`);
//       setLiked(res.data.data.liked);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // 🔔 SUBSCRIBE HANDLER
//   const handleSubscribe = async () => {
//     try {
//       const res = await API.post(
//         `/subscriptions/${video.owner._id}`
//       );

//       const isSub = res.data.data.subscribed;
//       setSubscribed(isSub);

//       // update count instantly
//       setSubsCount((prev) => (isSub ? prev + 1 : prev - 1));
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   if (!video) return <p className="text-white">Loading...</p>;

//   return (
//     <div className="flex gap-6 p-4 text-white">

//       {/* 🎥 LEFT SIDE */}
//       <div className="flex-1">

//         <video
//           src={video.videoFile}
//           controls
//           onPlay={() => API.post(`/videos/watch/${video._id}`)}
//           className="w-full max-h-[500px] rounded-lg"
//         />

//         <h1 className="mt-3 text-xl font-bold">
//           {video.title}
//         </h1>

//         {/* 👤 CHANNEL + SUBSCRIBE + LIKE */}
//         <div className="flex items-center justify-between mt-3">

//           {/* CHANNEL INFO */}
//           <div className="flex items-center gap-3">
//             <img
//               src={video.owner?.avatar}
//               className="w-10 h-10 rounded-full"
//             />

//             <div>
//               <p className="font-semibold">
//                 {video.owner?.username}
//               </p>

//               <p className="text-sm text-gray-400">
//                 {subsCount} subscribers
//               </p>
//             </div>
//           </div>

//           {/* BUTTONS */}
//           <div className="flex gap-3">

//             {/* 🔔 SUBSCRIBE */}
//             <button
//               onClick={handleSubscribe}
//               className={`px-4 py-1 rounded ${
//                 subscribed ? "bg-gray-600" : "bg-red-600"
//               }`}
//             >
//               {subscribed ? "Subscribed" : "Subscribe"}
//             </button>

//             {/* ❤️ LIKE */}
//             <button
//               onClick={handleLike}
//               className={`px-4 py-1 rounded ${
//                 liked ? "bg-red-600" : "bg-gray-700"
//               }`}
//             >
//               ❤️ {liked ? "Liked" : "Like"}
//             </button>

//           </div>
//         </div>

//         {/* 📄 DESCRIPTION */}
//         <p className="mt-3 text-gray-300">
//           {video.description}
//         </p>
//       </div>

//       {/* 🎯 RIGHT SIDE (RECOMMENDATIONS) */}
//       <div className="w-[350px] flex flex-col gap-3">

//         <h2 className="font-semibold mb-2">
//           Recommended
//         </h2>

//         {related.map((v) => (
//           <div
//             key={v._id}
//             onClick={() => navigate(`/watch/${v._id}`)}
//             className="flex gap-2 cursor-pointer hover:bg-gray-800 p-2 rounded"
//           >
//             <img
//               src={v.thumbnail}
//               className="w-32 h-20 object-cover rounded"
//             />

//             <div>
//               <p className="text-sm font-semibold">
//                 {v.title}
//               </p>
//               <p className="text-xs text-gray-400">
//                 {v.owner?.username || "Channel"}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "../api/axios.js";

export default function Watch() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [video, setVideo] = useState(null);
  const [related, setRelated] = useState([]);
  const [liked, setLiked] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [subsCount, setSubsCount] = useState(0);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await API.get(`/videos/${id}`);

        const videoData = res.data.data.video;
        const relatedVideos = res.data.data.relatedVideos;

        setVideo(videoData);
        setRelated(relatedVideos);

        const subRes = await API.get(
          `/subscriptions/count/${videoData.owner._id}`
        );
        setSubsCount(subRes.data.data.count);

      } catch (err) {
        console.log(err);
      }
    };

    fetchVideo();
  }, [id]);

  const handleLike = async () => {
    try {
      const res = await API.post(`/videos/like/${video._id}`);
      setLiked(res.data.data.liked);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubscribe = async () => {
    try {
      const res = await API.post(
        `/subscriptions/${video.owner._id}`
      );

      const isSub = res.data.data.subscribed;
      setSubscribed(isSub);
      setSubsCount((prev) => (isSub ? prev + 1 : prev - 1));
    } catch (err) {
      console.log(err);
    }
  };

  if (!video)
    return (
      <p className="text-white text-center mt-10 animate-pulse">
        Loading...
      </p>
    );

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 text-white">

      {/* 🎥 LEFT SIDE */}
      <div className="flex-1">

        {/* VIDEO PLAYER */}
        <video
          src={video.videoFile}
          controls
          onPlay={() => API.post(`/videos/watch/${video._id}`)}
          className="w-full max-h-[520px] rounded-xl shadow-xl"
        />

        {/* TITLE */}
        <h1 className="mt-4 text-2xl font-bold leading-tight">
          {video.title}
        </h1>

        {/* CHANNEL + ACTIONS */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 gap-4">

          {/* CHANNEL */}
          <div className="flex items-center gap-3">
            <img
              src={video.owner?.avatar}
              className="w-11 h-11 rounded-full object-cover"
            />

            <div>
              <p className="font-semibold text-lg">
                {video.owner?.username}
              </p>

              <p className="text-sm text-gray-400">
                {subsCount} subscribers
              </p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-3">

            {/* SUBSCRIBE */}
            <button
              onClick={handleSubscribe}
              className={`px-5 py-2 rounded-full font-medium transition transform hover:scale-105 shadow-md
                ${subscribed
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-red-600 hover:bg-red-700"
                }`}
            >
              {subscribed ? "Subscribed" : "Subscribe"}
            </button>

            {/* LIKE */}
            <button
              onClick={handleLike}
              className={`px-5 py-2 rounded-full font-medium transition transform hover:scale-105 shadow-md
                ${liked
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-gray-800 hover:bg-gray-700"
                }`}
            >
              ❤️ {liked ? "Liked" : "Like"}
            </button>

          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-5 bg-gray-900 p-4 rounded-xl text-gray-300 shadow-md">
          {video.description}
        </div>
      </div>

      {/* 🎯 RIGHT SIDE */}
      <div className="w-full lg:w-[360px] flex flex-col gap-4">

        <h2 className="font-semibold text-lg">Recommended</h2>

        {related.map((v) => (
          <div
            key={v._id}
            onClick={() => navigate(`/watch/${v._id}`)}
            className="flex gap-3 cursor-pointer p-2 rounded-xl 
            transition transform hover:scale-[1.03] hover:bg-gray-800"
          >
            <img
              src={v.thumbnail}
              className="w-36 h-20 object-cover rounded-lg"
            />

            <div className="flex flex-col justify-between">
              <p className="text-sm font-semibold line-clamp-2">
                {v.title}
              </p>

              <p className="text-xs text-gray-400">
                {v.owner?.username || "Channel"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}