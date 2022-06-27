import React, { useEffect } from "react";
import { supabase } from "../supabase";
import { useAppData, TEST } from "../app/store";
import Link from "next/link";
//
const DemoSupabase = () => {
  const appdata = useAppData();
  //
  useEffect(() => {
    (async () =>
      await supabase.from("appdata").select("name, value").eq("app_id", 2))().then(
      ({ data }) => appdata.set(TEST, data)
    );
  }, []);
  return (
    <>
          <Link href="/">
        <a className="underline text-indigo-600">index</a>
      </Link>
    <div>
      <pre className="text-xs">{appdata.debug()}</pre>
    </div>
    </>
  );
};

export default DemoSupabase;
