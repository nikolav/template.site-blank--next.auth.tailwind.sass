import { useState } from "react";
import Link from "next/link";
// https://next-auth.js.org/getting-started/example#frontend---add-react-hook
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useColorMode } from "../app/store";
//
import Panel from "../components/Panel/Panel";
import Paper from "@mui/material/Paper";
import useStateSwitch from "../src/hooks/use-state-switch";
//
export default function Index() {
  const { isActive, toggle } = useStateSwitch();
  const [anchor, setAnchor] = useState();
  const colorMode = useColorMode();
  //
  return (
    <Container sx={{ width: 920 }}>
      <Link href="/page2">
        <a className="underline text-indigo-600">page-2</a>
      </Link>{" "}
      <Link href="/demo-supabase">
        <a className="underline text-indigo-600">demo-supabase</a>
      </Link>{" "}
      <Link href="/demo-toastify">
        <a className="underline text-indigo-600">demo-toastify</a>
      </Link>
      {/* <h1 className="text-slate-500 uppercase font-bold">welcome @index</h1> */}
      <hr />
      <Typography variant="h2" component="h1">
        welcome @index
      </Typography>
      <Button ref={setAnchor} variant="outlined" onClick={toggle}>
        toggle theme
      </Button>
      <Panel.Appear
        placement="right-start"
        offset={[0, 5]}
        anchor={anchor}
        isActive={isActive}
        effect="puff"
      >
        <Paper sx={{ width: 320, p: 1, height: 256 }} elevation={3}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            quos veniam provident rerum odio, fuga fugiat iste, sunt consectetur
            repellat mollitia. Voluptas vitae est et atque sit rerum facere
            perspiciatis!
          </p>
        </Paper>
      </Panel.Appear>
    </Container>
  );
}
