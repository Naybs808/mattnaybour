import React from 'react';

import './Home.css';
import 'typeface-lato';
import NavigationBar from '../../common/NavigationBar/NavigationBar.tsx';
import Title from '../../common/Title/Title.tsx';

import Headshot from '../../images/Matt.jpg';
import Stage from '../../images/StageScan.jpg';

import MainPicture from '../../common/MainPicture/MainPicture.tsx';
import TagLine from '../../common/TagLine/TagLine.tsx';

import Stack from '@mui/material/Stack';

import { useSpring, animated } from 'react-spring';
import SpecialLinks from '../../common/SpecialLinks/SpecialLinks.tsx';
import Feature from '../../common/Feature/Feature.tsx';
import { Box } from '@mui/material';

const tagline =
  "Hi, I'm Matt and I like designing websites, would you like one too?";

export default function Application() {
  const springAppear = useSpring({
    config: { duration: 800 },
    opacity: 1,
    from: { opacity: 0 },
  });
  return (
    <>
      <Stack direction="column" minHeight={'100vh'} display="flex">
        <NavigationBar />

        <animated.div style={springAppear}>
          <Title title="Matt Naybour" />
        </animated.div>

        <br></br>

        <MainPicture image={Headshot} />

        <animated.div style={springAppear}>
          <TagLine text={tagline} />
        </animated.div>

        <Stack height={'50px'} />

        <SpecialLinks />
      </Stack>

      <Box maxHeight={'100vh'} minHeight={'100vh'} className={'features'}>
        <Feature
          image={Stage}
          imageLeft={true}
          title="Visual"
          subText="Paintings, prints, and arty things."
        ></Feature>
      </Box>
    </>
  );
}
