// import { useCallback, useState, useRef, useEffect } from "react";
import Link from "next/link";
// https://next-auth.js.org/getting-started/example#frontend---add-react-hook
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useColorMode } from "../app/store";
//
export default function Index() {
  const cm = useColorMode();
  return (
    <Container fixed>
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

      <Button onClick={cm.toggleColorMode} variant="outlined" color="primary">
        theme
      </Button>
      <Typography variant="h2" component="h1">
        welcome @index
      </Typography>
      <pre className="text-xs">{JSON.stringify(cm.theme, null , 2)}</pre>
    </Container>
  );
}
