import React from "react";

import "./App.css";
import "typeface-lato";
import NavigationBar from "./common/NavigationBar/NavigationBar.tsx";
import Title from "./common/Title/Title.tsx";

import Headshot from "./images/Matt.jpg";
import MainPicture from "./common/MainPicture/MainPicture.tsx";
import TagLine from "./common/TagLine/TagLine.tsx";

import { useSpring, animated } from "react-spring";

const tagline =
  "Hi, I'm Matt and I like designing websites, would you like one too?";

export default function Application() {
  const springAppear = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });
  return (
    <>
      <NavigationBar />

      <animated.div style={springAppear}>
        <Title title="Matt Naybour" />
      </animated.div>

      <br></br>

      <MainPicture image={Headshot} />

      <TagLine text={tagline} />
    </>
  );
}
