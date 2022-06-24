import Link from "next/link";

// https://next-auth.js.org/getting-started/example#frontend---add-react-hook
// import { useSession, signIn, signOut } from "next-auth/react";
// import modcss from "../styles/Index.module.css";

export default function Index() {
  // const { data: auth, status: authStatus } = useSession();
  return (
    <div>
      <Link href="/page2">
        <a className="underline text-indigo-600">page-2</a>
      </Link>
      <h1 className="text-slate-500 uppercase font-bold">welcome @index</h1>
      <hr />
      {/* <pre className="text-xs">{JSON.stringify(auth, null, 2)}</pre> */}
    </div>
  );
}
