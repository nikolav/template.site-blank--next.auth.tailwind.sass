import Link from "next/link";
// https://next-auth.js.org/getting-started/example#frontend---add-react-hook
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
//
export default function Index() {
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
    </Container>
  );
}
