import React, { useState } from "react";

import "./Home.css";
import "typeface-lato";
import NavigationBar from "../../common/NavigationBar/NavigationBar.tsx";
import Title from "../../common/Title/Title.tsx";

import Headshot from "../../images/Matt.jpg";
import Stage from "../../images/StageScan.jpg";
import Chess from "../../images/chess.jpg";

import MainPicture from "../../common/MainPicture/MainPicture.tsx";
import TagLine from "../../common/TagLine/TagLine.tsx";

import Stack from "@mui/material/Stack";

import { useSpring, animated } from "react-spring";
import SpecialLinks from "../../common/SpecialLinks/SpecialLinks.tsx";
import Feature from "../../common/Feature/Feature.tsx";
import { Box, Button, TextField } from "@mui/material";
import CustomTextfield from "./CustomTextfield.tsx";

import emailjs from "emailjs-com";

const tagline =
  "Hi, I'm Matt and I like designing websites, would you like one too?";

export default function Application() {
  const springAppear = useSpring({
    config: { duration: 800 },
    opacity: 1,
    from: { opacity: 0 },
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = () => {
    console.log("attempting to send email");
    const templateParams = {
      to_name: "Matt",
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_ba2crgg",
        "template_jj24cvv",
        templateParams,
        "cXUmEpnVJKayLJEPi"
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
        },
        (error) => {
          console.error("Failed to send email", error);
        }
      );
  };
  return (
    <>
      <Stack direction="column" minHeight={"100vh"} display="flex">
        <NavigationBar />

        <animated.div style={springAppear}>
          <Title title="Matt Naybour" />
        </animated.div>

        <br></br>

        <MainPicture image={Headshot} />

        <animated.div style={springAppear}>
          <TagLine text={tagline} paddingTop="50px" />
        </animated.div>

        <Stack height={"50px"} />

        <SpecialLinks />
        <br></br>
      </Stack>

      <Box className={"features"} height={"fit-content"}>
        <Feature
          image={Stage}
          imageLeft={true}
          title="Visual"
          subText="Paintings, prints, and arty things."
          link="https://matthews.flat9art.com/"
        ></Feature>

        <Feature
          image={Chess}
          imageLeft={false}
          title="Chess"
          subText="Games, rankings, and all my many defeats."
          link="https://www.chess.com/member/naybs808"
        ></Feature>
        <Box height={"100px"} />
      </Box>

      <div style={{ height: "100vh" }}>
        <br></br>
        <h1
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          Contact
        </h1>

        <TagLine
          text={
            "Hit me up here if you would like to get in touch about web design, art, music, chess, or any other enquiries."
          }
          paddingTop="10px"
        />

        <br></br>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "70%",
              display: "flex",
              flexDirection: "column",
              rowGap: "25px",
            }}
          >
            <CustomTextfield
              label="Name"
              setText={setName}
              rows={1}
              type="name"
            />
            <CustomTextfield
              label="Email"
              setText={setEmail}
              rows={1}
              type="email"
            />
            <CustomTextfield
              label="Message"
              setText={setMessage}
              rows={4}
              type="text"
            />
            <Button
              size="large"
              variant="contained"
              style={{ marginBottom: "100px", backgroundColor: "#9e1e2b" }}
              onClick={() => {
                sendEmail();
              }}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
