// https://mui.com/material-ui/customization/theming/#theme-builder
// https://bareynol.github.io/mui-theme-creator/
//
import { useEffect, useState, useMemo, useContext, createContext } from "react";
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
import { useColorModeTW, MODE_DARK as MODE_DARK_TW } from "../store";

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
  const setModeDark_ = () => setMode("dark");
  // colorMode api
  const colorMode = {
    mode,
    theme,
    //
    isDark: () => "dark" === mode,
    isLight: () => "light" === mode,
    setColorModeDark: setModeDark_,
    setColorModeLight: () => setMode("light"),
    toggleColorMode: () => setMode((m) => ("dark" === m ? "light" : "dark")),
  };
  //
  // sync tailwind theme @change.mui
  const cm_tw = useColorModeTW();
  useEffect(() => {
    if ("dark" === mode) {
      cm_tw.setColorModeDark();
      return;
    }
    cm_tw.setColorModeLight();
  }, [mode]);
  ///
  // sync mui theme @changes.tw
  const modeTW = cm_tw();
  useEffect(() => {
    if (MODE_DARK_TW === modeTW) setModeDark_();
  }, [modeTW]);
  //
  return (
    <ThemeProvider theme={theme}>
      <ColorModeContext.Provider value={colorMode}>
        {children}
      </ColorModeContext.Provider>
    </ThemeProvider>
  );
}
