import * as React from "react";
import Hero from "./components/Hero";
import SocialMedia from "./components/SocialMedia";
import Payment from "./components/Payment";
import Config from "./paylink.config.json";
import { metaTags } from "./js/main";
import {
  AppBar,
  Button,
  Container,
  createTheme,
  CssBaseline,
  IconButton,
  Stack,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { blueGrey, deepOrange, grey, orange } from "@mui/material/colors";
import ToggleColorModeWrapper, {
  ColorModeToggle,
} from "./common/utils/use-color-mode";

metaTags(Config.properties.name);

const scrap = async () => {
  const response = await fetch("https://eltoque.com");
  const text = await response.text();
  console.log(text.match(/(?<=\<tbody>).*(?=\<\/htbody>)/));
};

scrap();
const App = () => {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Paylink MUI
          </Typography>
          <ColorModeToggle />
        </Toolbar>
      </AppBar>
      <Container maxWidth="xs">
        <Hero
          src={Config.properties.hero}
          alt={Config.properties.alt}
          name={Config.properties.name}
          description={Config.properties.description}
        />
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          sx={{ paddingBottom: "2.5rem", paddingTop: "1.5rem" }}
        >
          {Config.Social.map(
            (i) =>
              i.link != "" && (
                <SocialMedia
                  label={i.label}
                  type={i.type}
                  href={i.link}
                  key={i.label}
                />
              )
          )}
        </Stack>
        <Stack spacing={1}>
          {Config.Payments.map(
            (i, index) =>
              i.value != "" && (
                <Payment
                  id={i.id}
                  label={i.label}
                  img={i.img}
                  value={i.value}
                  key={i.id + index}
                ></Payment>
              )
          )}
        </Stack>
        <Stack direction="row" justifyContent="center">
          <a href="https://github.com/dlcastillop/paylink" target="_blank">
            <sub>
              Powered by <b>PayLink</b>
            </sub>
          </a>
        </Stack>
      </Container>
    </React.Fragment>
  );
};

export default App;
