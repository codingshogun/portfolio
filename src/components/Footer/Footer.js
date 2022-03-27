import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { Div3, SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <SectionDivider />
      <br />
      <SectionTitle>Contact info</SectionTitle>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem>kaushiksumra538@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <Div3>
        <SocialIcons href="https://github.com/codingshogun" target={"_blank"}>
          <AiFillGithub size="3rem" />
        </SocialIcons>

        <SocialIcons
          href="https://www.linkedin.com/in/kaushik-sumra-06a9a3196/"
          target={"_blank"}
        >
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </Div3>
    </FooterWrapper>
  );
};

export default Footer;
