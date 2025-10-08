import React from "react";
import { Box, Container, Divider, Stack } from "@mui/material";
import { AspectRatio, CardOverflow, CssVarsProvider } from "@mui/joy";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retriveTopSellingProducts } from "./selector";
import { Product } from "../../../lib/types/product";
import { serverApi } from "../../../lib/config";
import { Member } from "../../../lib/types/member";

// redux slice & selector

const topUsersRetriever = createSelector(
  retriveTopSellingProducts,
  (topSellingProducts) => ({
    topSellingProducts,
  })
);

export default function ActiveUsers() {
  const { topSellingProducts } = useSelector(topUsersRetriever);
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
                  <Stack>
                    <CssVarsProvider key={products._id}>
                      <Card className={"card"}>
                        <CardCover>
                          <img
                            className="active-product-img"
                            src={imagePath}
                            alt=""
                          />
                        </CardCover>
                        <Box className="user-nick">
                          {" "}
                          This is a {products.productName}
                        </Box>
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
