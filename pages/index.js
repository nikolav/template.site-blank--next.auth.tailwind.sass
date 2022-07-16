// https://next-auth.js.org/getting-started/example#frontend---add-react-hook
// import { useMemo, useCallback, useState, useRef, useEffect } from "react";
import Link from "next/link";
import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
import Accordion from "../components/Accordion/Accordion";
//
export default function Index() {
  return (
    <>
      <Accordion active="@2">
        <Accordion item key="@1" header={<h2>nikolav.rs @1</h2>}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            tenetur nobis quam. Ea vero corrupti mollitia explicabo ab molestiae
            possimus dicta molestias, accusantium maxime aspernatur officiis
            perferendis nulla. Commodi, nihil.
          </p>
        </Accordion>
        <Accordion item key="@2" header={<h2>nikolav.rs @2</h2>}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            tenetur nobis quam. Ea vero corrupti mollitia explicabo ab molestiae
            possimus dicta molestias, accusantium maxime aspernatur officiis
            perferendis nulla. Commodi, nihil.
          </p>
        </Accordion>
        <Accordion item key="@3" header={<h2>nikolav.rs @3</h2>}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            tenetur nobis quam. Ea vero corrupti mollitia explicabo ab molestiae
            possimus dicta molestias, accusantium maxime aspernatur officiis
            perferendis nulla. Commodi, nihil.
          </p>
        </Accordion>
        <Accordion item key="@4" header={<h2>nikolav.rs @4</h2>}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            tenetur nobis quam. Ea vero corrupti mollitia explicabo ab molestiae
            possimus dicta molestias, accusantium maxime aspernatur officiis
            perferendis nulla. Commodi, nihil.
          </p>
        </Accordion>
      </Accordion>
      <hr />
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
      <Typography id="t1" variant="h2" component="h1">
        welcome @index
      </Typography>
    </>
  );
}

