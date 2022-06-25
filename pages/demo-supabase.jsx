import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";
//
const DemoSupabase = () => {
  const [data, setData] = useState();
  useEffect(() => {
    (async () => await supabase.from("appdata").select("*"))().then(
      ({ data }) => setData(data)
    );
  }, []);
  return (
    <div>
      <pre className="text-xs">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DemoSupabase;
