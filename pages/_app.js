import { SessionProvider } from "next-auth/react";

import "../styles/reset.css";
import "../styles/build.css";
import "../styles/globals.css";
//
////
////
function MyApp({ Component, pageProps: { session, ...restPageProps } }) {
  return (
    <SessionProvider session={session} refetchInterval={0}>
      <Component {...restPageProps} />
    </SessionProvider>
  );
}

export default MyApp;
