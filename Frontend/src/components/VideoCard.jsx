// import { useNavigate } from "react-router-dom";

// export default function VideoCard({ video }) {
//   const navigate = useNavigate();

//   return (
//     <div
//       onClick={() => navigate(`/watch/${video._id}`)}
//       className="cursor-pointer group transform transition duration-300 hover:scale-105"
//     >
//       {/* 🔥 THUMBNAIL */}
//       <div className="relative">
//         <img
//           src={video.thumbnail}
//           className="rounded-xl w-full h-44 object-cover"
//         />

//         {/* 🔥 HOVER OVERLAY */}
//         <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition rounded-xl"></div>
//       </div>

//       {/* 🔥 VIDEO INFO */}
//       <div className="flex gap-3 mt-3">

//         {/* AVATAR */}
//         <img
//           src={video.owner?.avatar || "/default.png"}
//           className="w-9 h-9 rounded-full object-cover"
//         />

//         <div className="flex flex-col">
//           {/* TITLE */}
//           <h3 className="font-semibold text-sm leading-tight line-clamp-2">
//             {video.title}
//           </h3>

//           {/* CHANNEL NAME */}
//           <p className="text-gray-400 text-xs mt-1">
//             {video.owner?.username || "Unknown"}
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// }


import { useNavigate } from "react-router-dom";

export default function VideoCard({ video }) {
  const navigate = useNavigate();

  // 🔥 HANDLE BOTH STRUCTURES (IMPORTANT FIX)
  const vid = video?.video || video;

  // 🔥 SAFETY CHECK (prevents undefined API calls)
  if (!vid?._id) return null;

  return (
    <div
      onClick={() => navigate(`/watch/${vid._id}`)}
      className="cursor-pointer group transform transition duration-300 hover:scale-105"
    >
      {/* 🔥 THUMBNAIL */}
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={vid.thumbnail}
          className="w-full h-44 object-cover"
        />

        {/* 🔥 HOVER OVERLAY */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
      </div>

      {/* 🔥 VIDEO INFO */}
      <div className="flex gap-3 mt-3">

        {/* AVATAR */}
        <img
          src={vid.owner?.avatar || "/default.png"}
          className="w-9 h-9 rounded-full object-cover"
        />

        <div className="flex flex-col">
          {/* TITLE */}
          <h3 className="font-semibold text-sm leading-tight line-clamp-2">
            {vid.title}
          </h3>

          {/* CHANNEL NAME */}
          <p className="text-gray-400 text-xs mt-1">
            {vid.owner?.username || "Unknown"}
          </p>
        </div>

      </div>
    </div>
  );
}

