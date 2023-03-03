import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/characters">Character</Link>
        </li>
        <li>
          <Link href="/locations">Location</Link>
        </li>
        <li>
          <Link href="/episodes">Episode</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
