// import { useMemo, useCallback, useState, useRef, useEffect } from "react";
import Link from "next/link";
// import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
//
// https://next-auth.js.org/getting-started/example#frontend---add-react-hook
export default function Index() {
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
    </>
  );
}
