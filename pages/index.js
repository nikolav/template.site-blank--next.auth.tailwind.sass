import Link from "next/link";
// https://next-auth.js.org/getting-started/example#frontend---add-react-hook
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useAuthApi } from "../src/hooks";
//
export default function Index() {
  const auth = useAuthApi();
  const {
    error,
    processing,
    token,
    user,
    login,
    register,
    logout,
    authenticate,
  } = auth;
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
      <Button
        variant="outlined"
        onClick={() =>
          login({
            email: "user.1657568547024@email.com",
            password: "122333",
          })
        }
      >
        login
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          const userName = `user.${Date.now()}`;
          register({
            name: userName,
            email: `${userName}@email.com`,
            password: "122333",
          });
        }}
      >
        register
      </Button>
      <Button
        variant="outlined"
        onClick={() =>
          authenticate({
            email: "user.1657568547024@email.com",
            password: "122333",
          })
        }
      >
        authenticate
      </Button>
      <Button variant="outlined" onClick={logout}>
        logout
      </Button>
      <pre className="text-xs">
        {JSON.stringify({ error, processing, token, user }, null, 2)}
      </pre>
    </Container>
  );
}
