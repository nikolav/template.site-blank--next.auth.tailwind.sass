import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";
import modcss from "../styles/Index.module.css";

export default function Index() {
  const { data: session, status: authStatus } = useSession();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="NextApp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="prose">
        <h1 className="text-slate-500 uppercase font-bold">hello</h1>
      </div>
      {session ? (
        <button
          className="bg-slate-700 p-2 px-4 text-white rounded-full"
          onClick={signOut}
        >
          logout
        </button>
      ) : (
        <button
          className="bg-slate-700 p-2 px-4 text-white rounded-full"
          onClick={signIn}
        >
          login
        </button>
      )}
      <pre className="text-xs">{JSON.stringify(session, null, 2)}</pre>
      <pre className="text-xs">{JSON.stringify(authStatus, null, 2)}</pre>
    </>
  );
}
