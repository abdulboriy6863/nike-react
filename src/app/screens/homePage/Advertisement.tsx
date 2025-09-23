import React from "react";

export default function Advertisement() {
  return (
    <div className="ads-frame">
      <video
        className="ads-video"
        autoPlay={true}
        loop
        muted
        playsInline
        data-video-media
      >
        <source
          type="video/mp4"
          src="https://www.shutterstock.com/shutterstock/videos/3641098169/preview/stock-footage-fiumicino-rome-italy-september-view-of-the-large-shelves-full-of-boxes-displaying-the.webm"
        />
      </video>
    </div>
  );
}
