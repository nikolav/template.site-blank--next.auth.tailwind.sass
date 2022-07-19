import { useMemo, useCallback, useState, useRef, useEffect } from "react";
import Link from "next/link";
// import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
// @todo.slider
//   https://codesandbox.io/s/bold-hill-stmnwk?file=/src/App.js
//
import Slider from "../components/Slider/Slider";
// https://next-auth.js.org/getting-started/example#frontend---add-react-hook
export default function Index() {
  const [value, setValue] = useState(4);
  return (
    <>
      <div className="bg-slate-800 text-slate-200 flex items-center justify-center">
        <Toolbar className="space-x-4">
          <Link href="/page2">
            <a className="hover:underline">demo-page-2</a>
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
      <div className="p-4">
        <Slider onChange={setValue} value={value} values={[0, 10]} />
      </div>
      <pre>{value}</pre>
    </>
  );
}
