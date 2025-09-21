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
import { retrieveTopUsers } from "./selector";
import { Product } from "../../../lib/types/product";
import { serverApi } from "../../../lib/config";
import { Member } from "../../../lib/types/member";

// redux slice & selector

const topUsersRetriever = createSelector(retrieveTopUsers, (topUsers) => ({
  topUsers,
}));

export default function ActiveUsers() {
  const { topUsers } = useSelector(topUsersRetriever);
  console.log("popularDishes", topUsers);

  return (
    <div>
      <Container>
        <Stack className="users-frame">
          <Box className="user-title">Active User</Box>
          <Stack className="user-img-card">
            <CssVarsProvider>
              {topUsers.length !== 0 ? (
                topUsers.map((member: Member) => {
                  const imagePath = `${serverApi}/${member.memberImage}`;

                  return (
                    <Card
                      key={member._id}
                      variant="outlined"
                      className={"card"}
                    >
                      <CardOverflow>
                        <AspectRatio ratio="1">
                          <img src={imagePath} />
                        </AspectRatio>
                      </CardOverflow>
                      <CardOverflow
                        variant="soft"
                        className={"product-details"}
                      >
                        <Stack className="user-nick">
                          <Typography className={"title"}>
                            {member.memberNick}
                          </Typography>
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
        </Stack>
      </Container>
    </div>
  );
}
