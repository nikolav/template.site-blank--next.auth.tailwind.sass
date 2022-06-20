import { SessionProvider } from "next-auth/react";

import "../styles/reset.css";
import "../styles/build.css";

function MyApp({ Component, pageProps: { session, ...restPageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...restPageProps} />
    </SessionProvider>
  );
}

export default MyApp;
