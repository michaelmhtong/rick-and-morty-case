import React, { useState } from "react";
import { CgMenuRight, CgClose } from "react-icons/cg";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavTitle,
  NavMenu,
} from "./styles/Navbar.style";
import Image from "next/image";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const closeMobileMenu = () => setShow(false);

  const navbarData = [
    {
      href: "/character/page/1",
      text: "Character",
    },
    {
      href: "/location/page/1",
      text: "Location",
    },
    {
      href: "/episode/page/1",
      text: "Episode",
    },
  ];

  return (
    <Nav>
      <NavbarContainer>
        <NavTitle href="/">
          <Image src="/asset/rick-and-morty.png" alt="logo" width="50" height="50" />
        </NavTitle>
        <MobileIcon onClick={handleClick}>{show ? <CgClose /> : <CgMenuRight />}</MobileIcon>
        <NavMenu show={show}>
          {navbarData.map((element, index) => (
            <NavItem key={index}>
              <NavLinks href={element.href} onClick={closeMobileMenu}>
                {element.text}
              </NavLinks>
            </NavItem>
          ))}
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
