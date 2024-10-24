"use client";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main>
      <Navbar session={session} />
      <Main />
    </main>
  );
}
