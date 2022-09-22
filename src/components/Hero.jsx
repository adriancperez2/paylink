import React from "react";

import Avatar from "@mui/material/Avatar";
import { Stack, Typography } from "@mui/material";

const Hero2 = (props) => {
  return (
    <section className="d-flex flex-column align-items-center pt-2 mb-1">
      <img src={props.src} alt={props.alt} className="mb-1 hero-image my-4" />
      <div className="pt-3">
        <h3 className="mb-1 text-center">{props.name}</h3>
        <p className="text-center text-center">{props.description}</p>
      </div>
    </section>
  );
};

const Hero = (props) => {
  return (
    <Stack alignItems="center" sx={{ paddingTop: "2rem" }}>
      <Avatar
        alt={props.alt}
        src={props.src}
        sx={{ width: "7.5rem", height: "7.5rem" }}
      />
      <Typography noWrap paddingTop="2rem">
        {props.name}
      </Typography>
      <Typography variant="caption">{props.description}</Typography>
    </Stack>
  );
};

export default Hero;
