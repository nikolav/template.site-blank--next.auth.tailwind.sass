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
        <a className="text-indigo-600 underline">page-2</a>
      </Link>{" "}
      <Link href="/demo-supabase">
        <a className="text-indigo-600 underline">demo-supabase</a>
      </Link>{" "}
      <Link href="/demo-toastify">
        <a className="text-indigo-600 underline">demo-toastify</a>
      </Link>
      {/* <h1 className="font-bold uppercase text-slate-500">welcome @index</h1> */}
      <hr />
      <Typography variant="h2" component="h1">
        welcome @index
      </Typography>
    </Container>
  );
}
