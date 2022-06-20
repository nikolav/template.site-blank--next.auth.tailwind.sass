import Head from "next/head";
import Link from "next/link";

// https://next-auth.js.org/getting-started/example#frontend---add-react-hook
import { useSession, signIn, signOut } from "next-auth/react";
import modcss from "../styles/Index.module.css";

export default function Index() {
  const { data: auth, status: authStatus } = useSession();
  return (
    <>
      <Head>
        <title>next-auth</title>
        <meta name="description" content="NextApp" />
      </Head>
      <div className="prose">
        <Link href="/page2">page-2</Link>
        <h1 className="text-slate-500 uppercase font-bold">hello</h1>
      </div>
      {auth ? (
        <button
          className="bg-slate-500 text-sm hover:bg-slate-600 p-1 px-4 text-white rounded-full"
          onClick={() => signOut({ redirect: false, callbackUrl: "/a-page" })}
        >
          logout
        </button>
      ) : (
        <>
          <button
            className="bg-slate-500 text-sm hover:bg-slate-600 p-1 px-4 text-white rounded-full"
            onClick={() => signIn("github")}
            // onClick={signIn}
          >
            gh.login
          </button>
          <button
            className="bg-slate-500 text-sm hover:bg-slate-600 p-1 px-4 text-white rounded-full"
            onClick={() => signIn("twitter")}
          >
            tw.login
          </button>
        </>
      )}
      <pre className="text-xs">{JSON.stringify(auth, null, 2)}</pre>

      {/* authStatus: "loading" | "authenticated" | "unauthenticated" */}
      <pre className="text-xs">{JSON.stringify(authStatus, null, 2)}</pre>
    </>
  );
}
