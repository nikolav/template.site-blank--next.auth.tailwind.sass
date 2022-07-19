import { useMemo, useCallback, useState, useRef, useEffect } from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
// @todo.slider
//   https://codesandbox.io/s/bold-hill-stmnwk?file=/src/App.js
//
import { ProgressBar, Slider, ProgressRing } from "../components";
import { random } from "../src/util";
// https://next-auth.js.org/getting-started/example#frontend---add-react-hook
export default function Index() {
  const [value, setValue] = useState(14);
  const values = [0, 100];
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
      <Button
        onClick={() => {
          setValue(random(...values));
        }}
      >
        go
      </Button>
      <div className="p-4">
        <Slider value={value} values={values} onChange={setValue} />
      </div>
      <pre>{value}</pre>
      <div className="w-32 h-32">
        <ProgressRing
          rounded={false}
          width={45}
          allowDecrease
          progress={value}
        />
      </div>
      <ProgressBar
        height={2}
        bg="rgba(0,0,0,0)"
        color="red"
        progress={value}
        className="fixed top-0 inset-0"
      />
    </>
  );
}
