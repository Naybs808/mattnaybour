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
import { Box, Button, TextField, Tooltip } from "@mui/material";
import CustomTextfield from "./CustomTextfield.tsx";

import { sendEmail, validateEmail } from "./emailFunctions.tsx";

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
  const [emailError, setEmailError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState("");

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    if (value === "" || validateEmail(value)) {
      setEmailError(false);
      setEmailHelperText("");
    } else {
      setEmailError(true);
      setEmailHelperText("Please enter a valid email address");
    }
  };
  const messageFormValid =
    validateEmail(email) && message !== "" && name !== "";

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
            <TextField
              label={"Email"}
              type={"email"}
              variant="filled"
              onChange={handleEmailChange}
              error={emailError}
              helperText={emailHelperText}
              sx={{
                "& .MuiFilledInput-root": {
                  backgroundColor: "transparent", // Optional: to keep background transparent
                  "&:before": {
                    borderColor: "#9e1e2b", // Default bottom border color
                  },
                  "&:hover:before": {
                    borderColor: "#9e1e2b", // Bottom border color on hover
                  },
                  "&.Mui-focused:before": {
                    borderColor: "#9e1e2b", // Bottom border color when focused
                  },
                  "&.Mui-focused:after": {
                    borderColor: "#9e1e2b", // Bottom border color when focused
                  },
                },
                "& .MuiInputLabel-root": {
                  "&.Mui-focused": {
                    color: "#9e1e2b", // Label color when focused
                  },
                },
              }}
            />
            <CustomTextfield
              label="Message"
              setText={setMessage}
              rows={4}
              type="text"
            />
            <Tooltip
              title={
                messageFormValid
                  ? ""
                  : "Fill in all 3 fields to send a message."
              }
            >
              <Button
                size="large"
                variant="contained"
                style={{
                  marginBottom: "100px",
                  backgroundColor: messageFormValid ? "#9e1e2b" : "grey",
                }}
                onClick={() => {
                  sendEmail(name, email, message);
                }}
                disabled={!messageFormValid}
              >
                Send
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
}
