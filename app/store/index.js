import { useAppData, ADMIN, TEST } from "./slice-appdata";
import { useFlags, FLAG_TEST, FLAG_BLOKUI } from "./slice-flags";
import { useResourceMain } from "../resource";
// import { useDemo, DEMO } from "./demo-slice";
//
import { useColorMode } from "../providers/muiThemeProvider";
import { useAuth, AUTH } from "./slice-auth";
//
export {
  // useDemo, DEMO,
  useAppData,
  ADMIN,
  TEST,
  useFlags,
  FLAG_BLOKUI,
  FLAG_TEST,
  useAuth,
  AUTH,
  //
  useResourceMain,
  useColorMode,
};
