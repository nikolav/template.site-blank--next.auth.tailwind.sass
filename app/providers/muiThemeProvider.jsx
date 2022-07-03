import { useState, useMemo, useContext, createContext } from "react";
// https://mui.com/material-ui/customization/theming/#createtheme-options-args-theme
// https://mui.com/material-ui/customization/default-theme/#main-content
// https://mui.com/material-ui/customization/default-theme/#explore
//
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

////
const primaryThemeColors = {};
const darkThemeColors = {
  background: {
    default: "#222",
    paper: "#ccc",
  },
  text: {
    primary: "#ccc",
    secondary: "gray",
  },
};
//
const getDesignTokens = (mode) => ({
  palette: {
    ...("dark" === mode ? { mode: "dark" } : { mode: "light" }),
    ...("dark" !== mode ? primaryThemeColors : darkThemeColors),
  },
});
//
export const ColorModeContext = createContext();
export const useColorMode = () => useContext(ColorModeContext);
//
export default function MuiThemeProvider({ children }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(prefersDarkMode ? "dark" : "light");
  const theme = useMemo(
    () => responsiveFontSizes(createTheme(getDesignTokens(mode))),
    [mode]
  );
  const colorMode = {
    theme,
    mode,
    toggleColorMode: () =>
      setMode((mode) => ("dark" === mode ? "light" : "dark")),
    setColorModeLight: () => setMode("light"),
    setColorModeDark: () => setMode("dark"),
  };
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
