import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { CssVarsProvider } from "@mui/joy";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retriveTopSellingProducts } from "./selector";
import { Product } from "../../../lib/types/product";
import { serverApi } from "../../../lib/config";
import SoldCountRating from "../../components/textRating";

// redux slice & selector

const topSellingRetriever = createSelector(
  retriveTopSellingProducts,
  (topSellingProducts) => ({
    topSellingProducts,
  })
);

export default function ActiveUsers() {
  const { topSellingProducts } = useSelector(topSellingRetriever);
  console.log("popularDishes", topSellingProducts);

  return (
    <div>
      <Container>
        <Stack className="users-frame">
          <Box className="user-title">Top Sell Products</Box>
          <Stack className="user-img-card">
            {/* <CssVarsProvider> */}
            {topSellingProducts.length !== 0 ? (
              topSellingProducts.map((products: Product) => {
                const imagePath = `${serverApi}/${products.productImages}`;

                return (
                  <Stack key={products._id}>
                    <CssVarsProvider>
                      <Card className={"card"}>
                        {/* <Box className="card-brand-name">
                          <img src="/img/NIKE.png" alt="" />
                        </Box> */}
                        <CardCover>
                          <img
                            className="active-product-img"
                            src={imagePath}
                            alt=""
                          />
                        </CardCover>

                        <Stack className="button-category">
                          <Box className="user-nick">
                            {products.productName}
                          </Box>
                          <Box className="product-sold-count">
                            Sold count&nbsp;
                            <span className="extra-design">
                              ({products.soldCount})
                            </span>
                          </Box>
                        </Stack>
                      </Card>
                    </CssVarsProvider>
                  </Stack>
                  // <Card
                  //   key={products._id}
                  //   variant="outlined"
                  //   className={"card"}
                  // >
                  //   <CardOverflow>
                  //     <AspectRatio ratio="1">
                  //       <img src={imagePath} />
                  //     </AspectRatio>
                  //   </CardOverflow>
                  //   <CardOverflow
                  //     variant="soft"
                  //     className={"product-details"}
                  //   >
                  //     <Stack className="user-nick">
                  //       <Typography className={"title"}>
                  //         {products.productName}
                  //       </Typography>
                  //     </Stack>
                  //   </CardOverflow>
                  // </Card>
                );
              })
            ) : (
              <Box className="no-data">No Top Selling Products</Box>
            )}
            {/* </CssVarsProvider> */}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
