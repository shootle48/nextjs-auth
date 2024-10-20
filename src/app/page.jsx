"use client"

import Navbar from "./components/Navbar";
import { useSession } from "next-auth/react";

export default function Home() {

  const { data: session } = useSession()

  return (
    <main>
      <Navbar session={session}/>
      <div className='container mx-auto my-4'>
        <h3>Welcome to HomePage</h3>
        <hr className='my-3' />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum excepturi
        reiciendis suscipit iure minima, veritatis non neque et nemo! Facere
        excepturi perspiciatis quaerat! Facere aspernatur tempora quasi cumque
        voluptatibus saepe?
      </div>
    </main>
  );
}
