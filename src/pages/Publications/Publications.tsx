import { Stack, Typography } from "@mui/material";
import React from "react";
import NavigationBar from "../../common/NavigationBar/NavigationBar.tsx";
import ArticleIcon from "@mui/icons-material/Article";
import Title from "../../common/Title/Title.tsx";

import "./Publications.css";
import Article from "./Article.tsx";

export default function Publications() {
  return (
    <Stack direction="column" minHeight={"100vh"} display="flex">
      <NavigationBar />

      <Title title="Publications" />

      <br></br>

      <div style={{ height: 100 }} className="publication-container">
        <Article
          title={
            "Ant colony optimisation of a community pharmacy dispensing process using Coloured Petri-Net simulation and UK pharmacy in-field data"
          }
          date={"November 2022"}
          link={
            "https://journals.sagepub.com/doi/full/10.1177/1748006X221135459"
          }
        />

        <Article
          title={
            "Ant colony optimisation for community pharmacy dispensing process based on in-field observations"
          }
          date={"September 2019"}
          link={
            "https://nottingham-repository.worktribe.com/output/2215875/ant-colony-optimisation-for-community-pharmacy-dispensing-process-based-on-in-field-observations"
          }
        />

        <Article
          title={
            "Reliability and efficiency evaluation of a community pharmacy dispensing process using a coloured Petri-net approach"
          }
          date={"February 2019"}
          link={
            "https://www.sciencedirect.com/science/article/pii/S0951832018305258?via%3Dihub"
          }
        />

        <Article
          title={
            "Reliability modelling of dispensing processes in community pharmacy"
          }
          date={"June 2018"}
          link={
            "https://ima.org.uk/reliability-modelling-of-dispensing-processes-in-community-pharmacy/"
          }
        />

        <Article
          title={
            "Evaluation of a community pharmacy dispensing process using a Coloured Petri Net"
          }
          date={"June 2018"}
          link={"https://eprints.nottingham.ac.uk/50126/"}
        />
      </div>
    </Stack>
  );
}
