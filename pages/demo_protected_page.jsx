// https://next-auth.js.org/getting-started/client#require-session

import { useSession } from "next-auth/react";

export default function Admin() {
  const { status } = useSession({
    // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      throw "Not Authenticated.";
    },
  });

  if (status === "loading") {
    return "Loading or not authenticated...";
  }

  return "User is logged in";
}
