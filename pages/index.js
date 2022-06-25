import Link from "next/link";
import { useAppData } from "../app/store";
// https://next-auth.js.org/getting-started/example#frontend---add-react-hook

export default function Index() {
  const appdata = useAppData();
  //
  return (
    <div>
      <Link href="/page2">
        <a className="underline text-indigo-600">page-2</a>
      </Link>
      <h1 className="text-slate-500 uppercase font-bold">welcome @index</h1>
      <pre className="text-xs">{appdata.debug()}</pre>
      <hr />
    </div>
  );
}
