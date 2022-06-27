import Link from "next/link";
import Button from "@mui/material/Button";
// https://next-auth.js.org/getting-started/example#frontend---add-react-hook

export default function Index() {
  //
  return (
    <div>
      <Link href="/page2">
        <a className="underline text-indigo-600">page-2</a>
      </Link>{" "}
      <Link href="/demo-supabase">
        <a className="underline text-indigo-600">demo-supabase</a>
      </Link>
      <h1 className="text-slate-500 uppercase font-bold">welcome @index</h1>
      <hr />
      <Button variant="outlined">hello</Button>
    </div>
  );
}
