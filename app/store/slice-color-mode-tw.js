import { useEffect } from "react";
import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { has, paste } from "../../src/util";
import { useWindow } from "../../src/hooks";
//
const MODE = "vgkysucatsmxldnhxhmtzz";
//
export const MODE_LIGHT = "jhttzwqyset";
export const MODE_DARK = "ojpqppbvama";
export const COLOR_MODE = {
  [MODE_LIGHT]: 1,
  [MODE_DARK]: 0,
};
//
const initialState = {
  [MODE]: MODE_LIGHT,
};

export const colorModeSlice = createSlice({
  name: "colorMode",
  initialState,
  reducers: {
    setColorMode: (state, action) => {
      const mode = action.payload;
      if (has(COLOR_MODE, mode)) state[MODE] = mode;
    },
    setColorModeLight: (state, _action) => {
      state[MODE] = MODE_LIGHT;
    },
    setColorModeDark: (state, _action) => {
      state[MODE] = MODE_DARK;
    },
    toggleColorMode: (state, _action) => {
      state[MODE] = MODE_DARK === state[MODE] ? MODE_LIGHT : MODE_DARK;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setColorMode,
  setColorModeLight,
  setColorModeDark,
  toggleColorMode,
} = colorModeSlice.actions;

export default colorModeSlice.reducer;

//
// export redux store shortcut
export function useColorModeTW() {
  const w$ = useWindow();
  //
  const colorMode = useSelector((state) => state.colorMode);
  const dispatch = useDispatch();
  //
  const mode = colorMode[MODE];
  useEffect(() => {
    if (w$) {
      if (
        w$.localStorage.theme === "dark" ||
        (!("theme" in w$.localStorage) &&
          w$.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        dispatch(setColorModeDark());
        return;
      }
      //
      dispatch(setColorModeLight());
    }
  }, [w$]);
  //
  useEffect(() => {
    if (w$) {
      if (mode === MODE_DARK) {
        _addClassDark();
        w$.localStorage.theme = "dark";
        return;
      }
      //
      _rmClassDark();
      w$.localStorage.theme = "light";
    }
  }, [mode, w$]);
  //
  const handle = paste(() => colorMode[MODE], {
    isDark: () => colorMode[MODE] === MODE_DARK,
    isLight: () => colorMode[MODE] === MODE_LIGHT,
    setColorMode: (mode) => dispatch(setColorMode(mode)),
    setColorModeDark: () => dispatch(setColorModeDark()),
    setColorModeLight: () => dispatch(setColorModeLight()),
    toggleColorMode: () => dispatch(toggleColorMode()),
  });
  //
  return handle;
}

function _addClassDark() {
  document.documentElement.classList.add("dark");
}
function _rmClassDark() {
  document.documentElement.classList.remove("dark");
}
