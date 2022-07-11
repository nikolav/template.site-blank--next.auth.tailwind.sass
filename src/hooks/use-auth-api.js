import { useState, createContext, useContext } from "react";
import axios from "axios";
import qs from "qs";
import { has } from "../util";
import {
  AUTH_API_URL,
  AUTH_API_URL_register,
  AUTH_API_URL_authenticate,
} from "../../app/store";
//
const isValidAuth = (authData) => !!authData && 0 === authData.authError;
const isValidAuthAndToken = (authData) =>
  isValidAuth(authData) && has(authData, "token");
//
const AuthApiContext = createContext();
//
export const useAuthApi = () => useContext(AuthApiContext);
//
export const AuthApiProvider = ({ children }) => {
  const [authStatus, setAuthStatus] = useState({
    error: null,
    processing: null,
  });
  const [authSession, setAuthSession] = useState({
    ...authStatus,
    //
    user: null,
    //
    login: login_,
    register: register_,
    logout: logout_,
    //
    authenticate: authenticate_,
  });
  //
  const authStatusError = (error) =>
    setAuthStatus((s) => ({ ...s, error }));
  const authStatusProcessingOff = () =>
    setAuthStatus((s) => ({ ...s, processing: false }));
  const setAuth = (authData) =>
    setAuthSession((sess) => ({ ...sess, user: authData }));
  //
  return (
    <AuthApiContext.Provider value={authSession}>
      {children}
    </AuthApiContext.Provider>
  );
  //
  // -- user.find
  // creds:
  //   email:     string.unique.required;
  //   password:  string.required;
  async function login_(creds) {
    authStatusBegin();
    try {
      const { data: authData } = await axios({
        method: "post",
        url: AUTH_API_URL,
        data: qs.stringify({ ...creds }),
      });
      if (!isValidAuth(authData)) throw "invalid credentials";
      //
      setAuth(authData);
    } catch (error) {
      authStatusError(error);
    } finally {
      authStatusProcessingOff();
    }
  }
  // -- user.create
  //   creds:
  //     name:      string.required;
  //     email:     string.unique.required;
  //     password:  string.required;
  async function register_(creds) {
    authStatusBegin();
    try {
      const { data: authData } = await axios({
        method: "post",
        url: AUTH_API_URL_register,
        data: qs.stringify({ ...creds }),
      });
      if (!isValidAuth(authData)) throw "bad request";
      //
      setAuth(authData);
    } catch (error) {
      authStatusError(error);
    } finally {
      authStatusProcessingOff();
    }
  }
  // -- api.accessToken
  //   creds:
  //     email:     string.unique.required;
  //     password:  string.required;
  async function authenticate_(creds) {
    authStatusBegin();
    try {
      const { data: authData } = await axios({
        method: "post",
        url: AUTH_API_URL_authenticate,
        data: qs.stringify({ ...creds }),
      });
      if (!isValidAuthAndToken(authData)) throw "bad credentials";
      //
      return authData;
    } catch (error) {
      authStatusError(error);
    } finally {
      authStatusProcessingOff();
    }
  }
  // clear user
  async function logout_() {
    setAuth(null);
    setAuthStatus({ error: null, processing: false });
  }
  //
  function authStatusBegin() {
    setAuthStatus({ error: null, processing: true });
  }
  //
};
