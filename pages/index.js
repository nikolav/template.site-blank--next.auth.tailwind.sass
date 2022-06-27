import Link from "next/link";
import { motion } from "framer-motion";
import PortalOverlays from "../components/PortalOverlays";
import { Button } from "@mui/material";
// https://next-auth.js.org/getting-started/example#frontend---add-react-hook

export default function Index() {
  //
  return (
    <div>
      <Link href="/page2">
        <a className="underline text-indigo-600">page-2</a>
      </Link>{" "}
      <Link href="/demo-supabase">
        <a className="underline text-indigo-600">demo-supabase</a>
      </Link>
      <h1 className="text-slate-500 uppercase font-bold">welcome @index</h1>
      <hr />
      <Button variant="outlined">hello</Button>
      
      <PortalOverlays>
        <motion.div
          drag
          whileDrag={{ rotate: -1, scale: 1.01, shadow: "5px 5px 4px rgba(0,0,0,.2)" }}
          className="shadow rounded-lg p-4 w-64 h-64 bg-slate-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ea
            minima voluptate!
          </p>
        </motion.div>
      </PortalOverlays>
    </div>
  );
}
