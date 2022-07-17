// https://next-auth.js.org/getting-started/example#frontend---add-react-hook
import { useMemo, useCallback, useState, useRef, useEffect } from "react";
import Link from "next/link";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
// import { useJQuery } from "../src/hooks";

//
export default function Index() {
  // const { jQuery: $, ready } = useJQuery();
  // const [res, setRes] = useState();
  // useEffect(() => {
  //   if (ready) {
  //     setRes({ keys: 122333 });
  //   }
  // }, [ready]);
  return (
    <>
      <div className="bg-slate-800 text-slate-200 flex items-center justify-center">
        <Toolbar className="space-x-4">
          <Link href="/page2">
            <a className="hover:underline">page-2</a>
          </Link>
          <Link href="/demo-supabase">
            <a className="hover:underline">demo-supabase</a>
          </Link>
          <Link href="/demo-toastify">
            <a className="hover:underline">demo-toastify</a>
          </Link>
          <Link href="/demo-framer">
            <a className="hover:underline">demo-framer</a>
          </Link>
        </Toolbar>
      </div>
    </>
  );
}
