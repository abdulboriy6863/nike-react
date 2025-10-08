import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

// label uchun mapping
const labels: { [index: number]: string } = {
  1: "Yomon",
  2: "Qoniqarli",
  3: "O‘rtacha",
  4: "Yaxshi",
  5: "Zo‘r",
};

function getRatingFromSoldCount(soldCount: number): number {
  if (soldCount >= 400) return 5;
  if (soldCount >= 300) return 4;
  if (soldCount >= 200) return 3;
  if (soldCount >= 100) return 2;
  if (soldCount > 0) return 1;
  return 0; // hali sotilmagan
}

export default function SoldCountRating({ soldCount }: { soldCount: number }) {
  const ratingValue = getRatingFromSoldCount(soldCount);

  return (
    <Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
      <Rating
        name="soldcount-rating"
        value={ratingValue}
        readOnly
        precision={1}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>
        {ratingValue > 0 ? labels[ratingValue] : "Hali sotilmagan"}
      </Box>
    </Box>
  );
}
