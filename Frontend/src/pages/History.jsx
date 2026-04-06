

// import { useEffect, useState } from "react";
// import { API } from "../api/axios.js";
// import { useNavigate } from "react-router-dom";

// export default function History() {
//   const [videos, setVideos] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     API.get("/users/history")
//       .then(res => {
//         console.log("HISTORY 👉", res.data.data);
//         setVideos(res.data.data);
//       })
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <div className="grid grid-cols-3 gap-4 p-4 ">
//       {videos.map((v) => (
//         <div
//           key={v._id}
//           onClick={() => navigate(`/watch/${v._id}`)} // 🔥 IMPORTANT
//           className="cursor-pointer"
//         >
//           <img
//             src={v.thumbnail}
//             className="w-full h-40 object-cover rounded"
//           />
//           <h3 className="mt-2">{v.title}</h3>
//         </div>
//       ))}
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { API } from "../api/axios.js";
import { useNavigate } from "react-router-dom";

export default function History() {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/users/history")
      .then(res => {
        console.log("HISTORY 👉", res.data.data);
        setVideos(res.data.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-4 sm:p-6">

      {/*  RESPONSIVE GRID */}
      <div
        className="
          grid gap-4 sm:gap-6
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
        "
      >
        {videos.map((v) => (
          <div
            key={v._id}
            onClick={() => navigate(`/watch/${v._id}`)}
            className="cursor-pointer transition duration-300 hover:scale-105"
          >
            {/* THUMBNAIL */}
            <img
              src={v.thumbnail}
              className="w-full h-40 sm:h-44 object-cover rounded"
            />

            {/* TITLE */}
            <h3 className="mt-2 text-sm sm:text-base line-clamp-2">
              {v.title}
            </h3>
          </div>
        ))}
      </div>

    </div>
  );
}