import Head from "next/head";
import Link from "next/link";

// https://next-auth.js.org/getting-started/example#frontend---add-react-hook
import { useSession, signIn, signOut } from "next-auth/react";
// import modcss from "../styles/Index.module.css";

export default function Index() {
  const { data: auth, status: authStatus } = useSession();
  return (
    <>
      <Head>
        <title>next-auth</title>
        <meta name="description" content="NextApp" />
      </Head>
      <Link href="/page2">
        <a className="underline text-indigo-600">page-2</a>
      </Link>
      <h1 className="text-slate-500 uppercase font-bold">welcome</h1>
    </>
  );
}
