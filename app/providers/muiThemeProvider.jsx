// https://mui.com/material-ui/customization/theming/#theme-builder
// https://bareynol.github.io/mui-theme-creator/
//
import { useState, useMemo, useContext, createContext } from "react";
// https://mui.com/material-ui/customization/theming/#createtheme-options-args-theme
// https://mui.com/material-ui/customization/default-theme/#main-content
//
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
  // styled,
} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// import { deepmerge } from '@mui/utils';
//
import { themePrimary } from "../theme/mui-primary";
import { themeDark } from "../theme/mui-dark";

////
//
const getDesignTokens = (mode) => ("dark" === mode ? themeDark : themePrimary);
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
    <ThemeProvider theme={theme}>
      <ColorModeContext.Provider value={colorMode}>
        {children}
      </ColorModeContext.Provider>
    </ThemeProvider>
  );
}
