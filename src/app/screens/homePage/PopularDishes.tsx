import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { CssVarsProvider } from "@mui/joy/styles";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import CardOverflow from "@mui/joy/CardOverflow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Badge from "@mui/joy/Badge";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { serverApi } from "../../../lib/config";

//REDUX SELECTOR
const popularDishesRetriver = createSelector(
  retrievePopularDishes,
  (popularDishes) => ({ popularDishes })
);

export default function PopularDishes() {
  const { popularDishes } = useSelector(popularDishesRetriver);

  return (
    <div className="popular-dishes-frame">
      <Container>
        <Stack className="popular-section">
          <Box className="category-title">Top Sneakers</Box>
          <Stack className="cards-frame">
            {popularDishes.length !== 0 ? (
              popularDishes.map((product: Product) => {
                const imagePath = `${serverApi}/${product.productImages[0]}`;

                return (
                  <CssVarsProvider key={product._id}>
                    <Card className={"card"}>
                      <Box className="card-brand-name">
                        <img src="/img/NIKE.png" alt="" />
                      </Box>
                      <CardCover>
                        <img
                          className="popular-product-img"
                          src={imagePath}
                          alt=""
                        />
                        <Box className="popular-pr-name">
                          {product.productName}
                        </Box>
                      </CardCover>
                      <CardCover className={"card-cover"} />
                      <CardContent sx={{ justifyContent: "flex-end" }}>
                        <Stack
                          flexDirection={"row"}
                          justifyContent={"space-between"}
                        >
                          <Typography
                            level="h3"
                            fontSize="lg"
                            textColor="#fff"
                            mb={1}
                          ></Typography>
                          <Typography
                            sx={{
                              fontWeight: "md",
                              color: "#000",
                              alignItems: "center",
                              display: "flex",
                            }}
                          >
                            <Badge
                              sx={{
                                "& .MuiBadge-badge": {
                                  background: "#414A4C",
                                  color: "#fff",
                                  fontSize: "10px",
                                  minWidth: "18px",
                                  height: "18px",
                                  borderRadius: "9px",

                                  right: "-2px",
                                },
                              }}
                              badgeContent={product?.productViews ?? 0}
                              // color="primary"
                            >
                              <VisibilityIcon sx={{ fontSize: 25 }} />
                            </Badge>

                            {/* {product.productViews}
                            <VisibilityIcon
                              sx={{ fontSize: 25, marginLeft: "5px" }}
                            /> */}
                          </Typography>
                        </Stack>
                      </CardContent>
                      <CardOverflow
                        sx={{
                          display: "flex",
                          gap: 1.5,
                          py: 1.5,
                          px: "var(--Card-padding)",
                          height: "60px",
                        }}
                      >
                        <Typography>
                          {" "}
                          <Box className="product-price-box">
                            ${product.productPrice}
                          </Box>{" "}
                        </Typography>
                      </CardOverflow>
                    </Card>
                  </CssVarsProvider>
                );
              })
            ) : (
              <Box className="no-data">New products are not available</Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
