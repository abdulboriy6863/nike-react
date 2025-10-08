import React, { useEffect, useState } from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import { useHistory } from "react-router-dom";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/material/Divider";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveNewDishes, retrievePopularDishes } from "./selector";
import { Product, ProductInquiry } from "../../../lib/types/product";
import { serverApi } from "../../../lib/config";
import { ProductCollection } from "../../../lib/enums/product.enum";
import ProductService from "../../services/ProductService";
import { setProducts } from "../productsPage/slice";

// redux slice & selector

const newrDishesRetriever = createSelector(retrieveNewDishes, (newDishes) => ({
  newDishes,
}));

export default function NewDishes() {
  const { newDishes } = useSelector(newrDishesRetriever);
  console.log("newDishes::::::", newDishes);

  ///

  const history = useHistory();
  const searchCollectionHandler = (collection: ProductCollection) => {
    console.log("productCollection ishlayaptimi", collection);
    history.push(`/products?collection=${collection}`);
  };

  //HANDLER

  return (
    <div className="new-dishes-frame">
      <Container>
        <Stack className="main">
          <Box className={"category-title"}>Shop By Collection</Box>
          <Stack className="card-frame">
            {/* <CssVarsProvider> */}
            <Box className="card-1-img">
              <div className="card-img-text">
                <Box className="collection-name">DISH</Box>
                <Button
                  onClick={() =>
                    searchCollectionHandler(ProductCollection.DISH)
                  }
                >
                  <Box className="collection-link">
                    <img src="/icons/nike-group59.svg" alt="" />
                  </Box>
                </Button>
              </div>
            </Box>
            <Box className="card-2-img">
              <div className="card-img-text">
                <Box className="collection-name">SALAD</Box>
                <Button
                  onClick={() =>
                    searchCollectionHandler(ProductCollection.SALAD)
                  }
                >
                  <Box className="collection-link">
                    <img src="/icons/nike-group59.svg" alt="" />
                  </Box>
                </Button>
              </div>
            </Box>
            <Box className="card-3-img">
              <div className="card-img-text">
                <Box className="collection-name">DRINK</Box>

                <Button
                  onClick={() =>
                    searchCollectionHandler(ProductCollection.DRINK)
                  }
                >
                  <Box className="collection-link">
                    <img src="/icons/nike-group59.svg" alt="" />
                  </Box>
                </Button>
                {/* <Button
                  variant="contained"
                  color={
                    productSearch.productCollection === ProductCollection.DISH
                      ? "primary"
                      : "secondary"
                  }
                  className="rotate"
                  onClick={() =>
                    searchCollectionHandler(ProductCollection.DISH)
                  }
                >
                  Dish
                </Button> */}
              </div>
            </Box>
            {/* </CssVarsProvider> */}
          </Stack>
        </Stack>
        {/* <Stack className={"main"}>
          <Box className={"category-title"}>Shop By Collection</Box>
          <Stack className={"card-frame"}>
            <CssVarsProvider>
              {newDishes.length !== 0 ? (
                newDishes.map((product: Product) => {
                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                  const sizeVolume =
                    product.productCollection === ProductCollection.DRINK
                      ? product.productVolume + "l"
                      : product.productSize + " size ";
                  console.log("ramslar:::::=>>", imagePath);

                  return (
                    <Card
                      key={product._id}
                      variant="outlined"
                      className={"card"}
                    >
                      <CardOverflow>
                        <div className="product-sale">{sizeVolume}</div>
                        <AspectRatio ratio="1">
                          <img src={imagePath} />
                        </AspectRatio>
                      </CardOverflow>

                      <CardOverflow
                        variant="soft"
                        className={"product-details"}
                      >
                        <Stack className="info">
                          <Stack flexDirection={"row"}>
                            <Typography className={"title"}>
                              {product.productName}
                            </Typography>
                            <Divider
                              orientation="vertical"
                              flexItem
                              sx={{
                                height: 24,
                                backgroundColor: "#d9d9d9",
                                mx: 1,
                              }}
                            />
                            <Typography className={"price"}>
                              {product.productPrice}
                            </Typography>
                          </Stack>
                          <Stack>
                            <Typography className={"views"}>
                              {product.productViews}
                              <VisibilityIcon
                                sx={{ fontSize: 20, marginLeft: "5px" }}
                              />
                            </Typography>
                          </Stack>
                        </Stack>
                      </CardOverflow>
                    </Card>
                  );
                })
              ) : (
                <Box className="no-data">New products are not available</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack> */}
      </Container>
    </div>
  );
}
