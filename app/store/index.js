import { useAppData, ADMIN, TEST } from "./slice-appdata";
import { useFlags, FLAG_TEST, FLAG_BLOKUI } from "./slice-flags";
import { useResourceMain } from "../resource";
// import { useDemo, DEMO } from "./demo-slice";
//
import { useColorMode } from "../providers/muiThemeProvider";
import { useAuth, AUTH, AUTH_ERROR, AUTH_PROCESSING } from "./slice-auth";
//
const API_URL_dev = "http://localhost:3344/";
const API_URL_production = "http://api.com/";
//
const API_URL = API_URL_dev;
// const API_URL = API_URL_production;
//
export {
  API_URL,
  API_URL_dev,
  API_URL_production,
  // useDemo, DEMO,
  useAppData,
  ADMIN,
  TEST,
  useFlags,
  FLAG_BLOKUI,
  FLAG_TEST,
  useAuth,
  AUTH,
  AUTH_ERROR,
  AUTH_PROCESSING,
  //
  useResourceMain,
  useColorMode,
};
