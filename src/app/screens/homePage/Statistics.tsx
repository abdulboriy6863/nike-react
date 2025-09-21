import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Divider from "../../components/divider";
export default function Statistics() {
  // return <div className="static-frame "></div>;

  const logos = [
    "/img/nike-nike.png",
    "/img/nike-nike.png",
    "/img/nike-nike.png",
    "/img/nike-nike.png",
    "/img/nike-nike.png",
    "/img/nike-nike.png",
    "/img/nike-nike.png",
    "/img/nike-nike.png",
    "/img/nike-nike.png",
    "/img/nike-nike.png",
    "/img/nike-nike.png",
    "/img/nike-nike.png",
    "/img/nike-nike.png",
    "/img/nike-nike.png",
    "/img/nike-nike.png",
    "/img/nike-nike.png",
    "/img/nike-nike.png",
    "/img/nike-nike.png",
    "/img/nike-nike.png",
    "/img/nike-nike.png",
    "/img/nike-nike.png",
    "/img/nike-nike.png",
    "/img/nike-nike.png",
    "/img/nike-nike.png",
    "/img/nike-nike.png",
    "/img/nike-nike.png",
    "/img/nike-nike.png",
    "/img/nike-nike.png",
    "/img/nike-nike.png",
    "/img/nike-nike.png",
    "/img/nike-nike.png",
    "/img/nike-nike.png",
    "/img/nike-nike.png",
    "/img/nike-nike.png",
    "/img/nike-nike.png",
    "/img/nike-nike.png",
    "/img/nike-nike.png",
  ];

  return (
    <div className="static-frame">
      <div className="track">
        {[...logos, ...logos].map((src, i) => (
          <img key={i} src={src} alt="brand logo" />
        ))}
      </div>
    </div>
  );
}
