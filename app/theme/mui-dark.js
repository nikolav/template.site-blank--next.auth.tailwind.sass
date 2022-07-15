export const themeDark = {
  palette: {
    type: "dark",
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#6a768c",
    },
    text: {
      primary: "rgba(222,222,222,0.87)",
    },
    background: {
      default: "#191920",
    },
    error: {
      main: "#f78078",
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
  },
  overrides: {
    MuiSwitch: {
      root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: 8,
      },
      switchBase: {
        padding: 1,
        "&$checked, &$colorPrimary$checked, &$colorSecondary$checked": {
          transform: "translateX(16px)",
          color: "#fff",
          "& + $track": {
            opacity: 1,
            border: "none",
          },
        },
      },
      thumb: {
        width: 24,
        height: 24,
      },
      track: {
        borderRadius: 13,
        border: "1px solid #bdbdbd",
        backgroundColor: "#fafafa",
        opacity: 1,
        transition:
          "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      },
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
};
