import Link from "next/link";
import React from "react";
import { Button, Container, MainHeading } from "../src/pages/globalStyle";
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from "./styles/Hero.style";

const Hero = () => {
  return (
    <>
    <HeroSection>
      <MainHeading>Rick and Morty API</MainHeading>
      <HeroText>Find out more about this brilliant television show!</HeroText>
      <ButtonWrapper>
        <Link href="/character/page/1">
          <Button>Get Started</Button>
        </Link>
      </ButtonWrapper>
    </HeroSection>
    </>
  );
};

export default Hero;
