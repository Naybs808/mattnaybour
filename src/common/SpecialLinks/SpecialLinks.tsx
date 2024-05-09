import React from "react";

import githubIcon from "../Iconoir/github.svg";
import instaIcon from "../Iconoir/instagram.svg";
import spotifyIcon from "../Iconoir/music-double-note.svg";
import youtubeIcon from "../Iconoir/youtube.svg";

import { Grid, Stack } from "@mui/material";
import "./SpecialLinks.css";

export default function SocialLinks() {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <>
      <Grid container justifyContent={"center"} spacing={7}>
        <Grid item>
          <div className="special-link">
            <Stack
              direction="row"
              className="iconStack"
              alignItems={"center"}
              onClick={() => {
                openInNewTab("https://www.instagram.com/_mnaybs_/");
              }}
            >
              <img src={instaIcon} alt="React Logo" className="icon" />{" "}
              {"Instagram"}
            </Stack>
          </div>
        </Grid>
        <Grid item>
          <div className="special-link">
            <Stack
              direction="row"
              className="iconStack"
              alignItems={"center"}
              onClick={() => {
                openInNewTab("https://github.com/Naybs808");
              }}
            >
              <img src={githubIcon} alt="React Logo" className="icon" />{" "}
              {"Github"}
            </Stack>
          </div>
        </Grid>
        <Grid item>
          <div className="special-link">
            <Stack
              direction="row"
              className="iconStack"
              alignItems={"center"}
              onClick={() => {
                openInNewTab(
                  "https://open.spotify.com/artist/2MSlHbOyTFVYXjG19Tp1id?si=uL3FDC7bQ3GgTLBetlJsjw&utm_source=copy-link&nd=1&dlsi=9eaff77d1c4e4474"
                );
              }}
            >
              <img src={spotifyIcon} alt="React Logo" className="icon" />{" "}
              {"Spotify"}
            </Stack>
          </div>
        </Grid>
        <Grid item>
          <div className="special-link">
            <Stack
              direction="row"
              className="iconStack"
              alignItems={"center"}
              onClick={() => {
                openInNewTab(
                  "https://www.youtube.com/channel/UCZMl_j4gfliuHkBq-mcl_Ug"
                );
              }}
            >
              <img src={youtubeIcon} alt="React Logo" className="icon" />{" "}
              {"YouTube"}
            </Stack>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
