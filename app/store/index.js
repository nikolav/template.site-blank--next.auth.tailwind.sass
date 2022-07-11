import { useAppData, ADMIN, TEST } from "./slice-appdata";
import { useFlags, FLAG_TEST, FLAG_BLOKUI } from "./slice-flags";
import { useResourceMain } from "../resource";
//
import { useColorMode } from "../providers/muiThemeProvider";
import { useAuth, AUTH, AUTH_ERROR, AUTH_PROCESSING } from "./slice-auth";
//
const API_URL_dev = "http://localhost:3344/";
const API_URL_production = "http://api.com/";
const REST_RESOURCE_main = "main";
//
const AUTH_API_URL = "http://localhost:3344/authentication";
const AUTH_API_URL_users = "http://localhost:3344/users";
//
const API_URL = API_URL_dev;
// const API_URL = API_URL_production;
//
export {
  API_URL,
  API_URL_dev,
  API_URL_production,
  //
  AUTH_API_URL,
  AUTH_API_URL_users,
  //
  REST_RESOURCE_main,
  //
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
