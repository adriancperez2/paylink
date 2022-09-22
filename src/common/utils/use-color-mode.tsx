import {
  Box,
  BoxProps,
  createTheme,
  CssBaseline,
  ThemeProvider,
  useTheme,
} from "@mui/material";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { grey, indigo } from "@mui/material/colors";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export function ColorModeToggle(props: BoxProps) {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box {...props}>
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
}

export default function ToggleColorModeWrapper({
  children,
}: {
  children: React.ReactElement;
}) {
  const [mode, setMode] = React.useState<"light" | "dark">("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          primary: {
            main: mode == "dark" ? grey[900] : indigo[500],
            contrastText: mode == "dark" ? "white" : "#000000b3",
          },
        },
        components: {
          MuiButtonBase: {
            defaultProps: {
              // disableRipple: true, // No more ripple, on the whole application 💣!
            },
          },
        },
        typography: {
          fontFamily: ["Inter"].join(","),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
