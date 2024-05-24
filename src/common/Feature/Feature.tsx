import { Grid, Typography } from '@mui/material';
import React, { ReactNode } from 'react';

import './Feature.css';

import stage from '../../images/StageScan.jpg';

interface FeatureProps {
  image: any;
  imageLeft: boolean;
  title: string;
  subText: string;
}

export default function Feature(props: FeatureProps) {
  let imageNode = (
    <div className="image-container">
      <img className="picture-frame" src={props.image} alt={'Stage'}></img>
    </div>
  );

  let textNode = (
    <div
      style={{
        width: 'inherit',
        textWrap: 'nowrap',
      }}
    >
      <h1> {props.title}</h1>
      <h2> {props.subText}</h2>
      <div
        style={{
          height: 40,
          alignContent: 'center',
          justifyContent: 'center',
          width: 100,
          backgroundColor: 'black',
          color: 'white',
        }}
      >
        Read More
      </div>
    </div>
  );

  let firstPart: ReactNode;
  let secondPart: ReactNode;

  if (props.imageLeft) {
    firstPart = imageNode;
    secondPart = textNode;
  } else {
    secondPart = imageNode;
    firstPart = textNode;
  }

  return (
    <div style={{ paddingTop: 50 }}>
      <Grid container columns={{ md: 12, sm: 12 }} justifyContent={'center'}>
        <Grid item md={6} sm={12} xs={12}>
          {firstPart}
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          {secondPart}
        </Grid>
      </Grid>
    </div>
  );
}
