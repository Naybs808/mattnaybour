import { Stack } from "@mui/material";
import React, { useState } from "react";
import NavigationBar from "../../common/NavigationBar/NavigationBar.tsx";
import Title from "../../common/Title/Title.tsx";
import TagLine from "../../common/TagLine/TagLine.tsx";

export default function Gallery() {
  const [showDrawings, setShowDrawings] = useState(true);
  return (
    <>
      <Stack direction="column" minHeight={"100vh"} display="flex">
        <NavigationBar />

        <Title title="Gallery" />

        <TagLine
          text={"A collection of drawings and photos."}
          paddingTop="20px"
        />
      </Stack>

      {showDrawings && <div></div>}

      <div
        style={{
          display: "flex",
          width: "100%",
          position: "absolute",
          bottom: "5%",
          justifyContent: "center",
        }}
      >
        <TagLine text={"Drawings"} paddingTop="20px" />
        <TagLine text={"Photography"} paddingTop="20px" />
      </div>
    </>
  );
}
