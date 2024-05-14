import { Stack, Typography } from "@mui/material";
import React from "react";
import NavigationBar from "../../common/NavigationBar/NavigationBar.tsx";
import Title from "../../common/Title/Title.tsx";

export default function Publications() {
  return (
    <Stack direction="column" minHeight={"100vh"} display="flex">
      <NavigationBar />

      <Title title="About" />
    </Stack>
  );
}
