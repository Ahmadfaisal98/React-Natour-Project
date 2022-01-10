import React from "react";
import video_mp4 from "../../assets/videos/video.mp4";
import video_webm from "../../assets/videos/video.webm";

export default function BgVideo() {
  return (
    <div className="bg-video">
      <video className="bg-video__content" autoPlay muted loop>
        <source src={video_mp4} type="video/mp4" />
        <source src={video_webm} type="video/webm" />
        Your browser is not supported!
      </video>
    </div>
  );
}
