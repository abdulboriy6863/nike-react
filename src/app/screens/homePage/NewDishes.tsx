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
    history.push("/products", { collection });
  };

  //HANDLER

  return (
    <div className="new-dishes-frame">
      <Container>
        <Stack className="main">
          <Box className={"category-title"}>Shop By Collection</Box>
          <Stack className="card-frame">
            {/* <CssVarsProvider> */}
            <Button
              onClick={() => searchCollectionHandler(ProductCollection.WOMAN)}
            >
              <Box className="card-1-img">
                <div className="card-img-text">
                  <Box className="collection-name">WOMEN</Box>

                  <Box className="collection-link">
                    <img src="/icons/nike-group59.svg" alt="" />
                  </Box>
                </div>
              </Box>
            </Button>
            {/*  */}
            <Button
              onClick={() => searchCollectionHandler(ProductCollection.MAN)}
            >
              <Box className="card-2-img">
                <div className="card-img-text">
                  <Box className="collection-name">MAN</Box>

                  <Box className="collection-link">
                    <img src="/icons/nike-group59.svg" alt="" />
                  </Box>
                </div>
              </Box>
            </Button>
            <Button
              onClick={() => searchCollectionHandler(ProductCollection.KIDS)}
            >
              <Box className="card-3-img">
                <div className="card-img-text">
                  <Box className="collection-name">KIDS</Box>

                  <Box className="collection-link">
                    <img src="/icons/nike-group59.svg" alt="" />
                  </Box>
                </div>
              </Box>
            </Button>
            {/* </CssVarsProvider> */}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
