// src/components/SoldCountRating.tsx

import React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

interface Props {
  soldCount: number;
}

export default function SoldCountRating({ soldCount }: Props) {
  // Mantiq: soldCount asosida 0 dan 5 gacha baho
  const calculateRating = (count: number): number => {
    if (count >= 100) return 5;
    if (count >= 75) return 4.5;
    if (count >= 50) return 4;
    if (count >= 25) return 3.5;
    if (count >= 10) return 3;
    if (count >= 5) return 2;
    if (count > 0) return 1;
    return 0;
  };

  const value = calculateRating(soldCount);

  return (
    <Rating
      name="read-only"
      value={value}
      precision={0.5}
      readOnly
      emptyIcon={<StarIcon style={{ opacity: 0.4 }} fontSize="inherit" />}
    />
  );
}
