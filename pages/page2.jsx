import React from "react";
import Link from "next/link";

const Page2 = () => {
  return (
    <div>
      <Link href="/">
        <a className="underline text-indigo-600">index</a>
      </Link>
      <h1 className="text-slate-500 uppercase font-bold">page-2</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        accusamus, voluptas distinctio itaque id harum impedit nostrum
        consectetur dolorem ipsum! Illum ipsam ratione esse! Ea, harum? Minus
        alias asperiores molestiae.
      </p>
    </div>
  );
};

export default Page2;
