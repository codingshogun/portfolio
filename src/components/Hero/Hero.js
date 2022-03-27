import React from "react";
import Link from "next/link";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello!
        <br />
        I'm Kaushik Sumra
      </SectionTitle>

      <SectionText>I am a Web developer</SectionText>

      {/* <Link href="webdev.pdf" download="webdev.pdf">
        <Button onClick={() => console.log("yes")}>Download Resume</Button>
      </Link> */}
    </LeftSection>
  </Section>
);

export default Hero;
