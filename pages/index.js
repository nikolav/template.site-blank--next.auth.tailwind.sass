// https://next-auth.js.org/getting-started/example#frontend---add-react-hook
import { useCallback, useState, useRef, useEffect } from "react";
import Link from "next/link";
import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";

//
export default function Index() {
  return (
    <>
      <Link href="/page2">
        <a>page-2</a>
      </Link>{" "}
      <Link href="/demo-supabase">
        <a>demo-supabase</a>
      </Link>{" "}
      <Link href="/demo-toastify">
        <a>demo-toastify</a>
      </Link>{" "}
      <Link href="/demo-framer">
        <a>demo-framer</a>
      </Link>
      <Typography variant="h2" component="h1">
        welcome @index
      </Typography>
    </>
  );
}
