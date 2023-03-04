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
          <Link href="/character/page/1">Character</Link>
        </li>
        <li>
          <Link href="/location/page/1">Location</Link>
        </li>
        <li>
          <Link href="/episode/page/1">Episode</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
