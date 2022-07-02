import Link from "next/link";
import { toast } from "react-toastify";
// https://next-auth.js.org/getting-started/example#frontend---add-react-hook

export default function DemoToastify() {
  //
  return (
    <>
      <div>
        <Link href="/">
          <a className="underline text-indigo-600">index</a>
        </Link>{" "}
        <hr />
        <button onClick={() => toast(Date.now(), { type: "info" })}>ok</button>
      </div>
    </>
  );
}

/*
https://fkhadra.github.io/react-toastify/api/toast#usages

When you render a component, 
a closeToast prop and the toastProps are injected into your component.
toast(({ closeToast, toastProps }) => <div>Functional swag 😎</div>);

-- toast.dismiss(<id>)
An id is returned each time you display a toast, 
use it to remove a given toast programmatically by calling 

-- toast.promise
-- toast.update



https://fkhadra.github.io/react-toastify/api/toast-container
              <ToastContainer
                position="top-right"
                autoClose={4242}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                icon={false}
              />

 */
