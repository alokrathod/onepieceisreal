import Image from "next/image";
import React from "react";
import map_1 from "../../../assets/one_piece_map_1.png";

const page = () => {
  return (
    <div>
      <div>World map of one piece</div>
      <div className="sketchfab-embed-wrapper">
        {/* <iframe
          title="One Piece Luffy Adventure Map - 2000-2020"
          src="https://sketchfab.com/models/253e2b4cec4e47c3958d3ad5811c77bd/embed"
          frameBorder="0"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          className="w-full h-[500px] rounded-xl border border-slate-700"
        ></iframe> */}
      </div>
      <div className="flex justify-center items-center">
        <Image src={map_1} alt="Logo" width={1000} height={400} />
      </div>
    </div>
  );
};

export default page;
