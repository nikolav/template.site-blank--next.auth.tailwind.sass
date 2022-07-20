import { useMemo, useCallback, useState, useRef, useEffect } from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
// @todo.slider
//   https://codesandbox.io/s/bold-hill-stmnwk?file=/src/App.js
//
import {
  ProgressBar,
  ProgressBarVertical,
  Slider,
  ProgressRing,
  Modal,
  DarkModeToggle,
  Drag,
} from "../components";
import { useStateSwitch } from "../src/hooks";
import { random } from "../src/util";
//
// https://next-auth.js.org/getting-started/example#frontend---add-react-hook
export default function Index() {
  const [value, setValue] = useState(14);
  const { isActive, toggle } = useStateSwitch();
  const values = [0, 100];

  return (
    <>
      <div className="bg-slate-800 text-slate-200 flex items-center justify-center">
        <Toolbar className="space-x-4">
          <Link href="/page2">
            <a className="hover:underline">demo-page-2</a>
          </Link>
          <Link href="/demo-supabase">
            <a className="hover:underline">demo-supabase</a>
          </Link>
          <Link href="/demo-toastify">
            <a className="hover:underline">demo-toastify</a>
          </Link>
          <Link href="/demo-framer">
            <a className="hover:underline">demo-framer</a>
          </Link>
        </Toolbar>
      </div>

      <Button
        onClick={() => {
          setValue(random(...values));
        }}
        variant="outlined"
      >
        go
      </Button>
      <Button variant="outlined" onClick={toggle}>
        modal.toggle
      </Button>
      <DarkModeToggle />
      <Modal isActive={isActive} onClose={toggle.off}>
        <div className="p-12">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            veritatis quam? Inventore voluptatibus consectetur tenetur placeat,
            cum, labore voluptas excepturi incidunt unde quod alias sed.
            Aspernatur placeat quibusdam ducimus modi!
          </p>
          <Button
            className="block mx-auto w-fit mt-4"
            variant="outlined"
            onClick={toggle.off}
          >
            ok, close
          </Button>
        </div>
      </Modal>
      <div className="p-4">
        <Slider value={value} values={values} onChange={setValue} />
      </div>
      <pre>{value}</pre>
      <div className="w-32 h-32">
        <ProgressRing
          rounded={false}
          width={44}
          allowDecrease
          progress={value}
          color="steelblue"
          bg="rgba(0,0,0,.045)"
        />
      </div>
      <ProgressBar
        height={2}
        bg="rgba(0,0,0,0)"
        color="red"
        progress={value}
        className="fixed top-0 inset-0"
      />
      <Drag
       className="fixed w-32 h-32 top-0 left-4 bg-red-200">
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <Drag.Handle>
          <h2 className="font-bold">handle</h2>
        </Drag.Handle>
      </Drag>
      <Drag className="fixed w-32 h-32 top-0 right-0 bg-blue-200">
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <Drag.Handle>
          <h2 className="font-bold">handle</h2>
        </Drag.Handle>
      </Drag>
      <div className="**bg-slate-300 p-0 m-0 fixed right-0 inset-y-0">
        <ProgressBarVertical progress={value} />
      </div>
    </>
  );
}
