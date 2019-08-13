import PropTypes from "prop-types"
import styled from "styled-components";
import React from "react"

import Container from "./ui/container";
import { device } from "../lib/device";
import { Link } from "gatsby";

const StyledHeader = styled.header`
  background: ${props => props.theme.white};
  display: flex;
  justify-content: center;
  border-bottom: solid 1px #f5f5f5;
  height: 80px;
`;

const KupeLogo = styled.img`
  width: 200px;
animation: ${props => props.shouldAnimate ? `antMoveUpIn 0.8s ease forwards` : `none`};
`;

const StyledHeaderLinks = styled.div`
  display: flex;
  width: 300px;
  opacity: ${props => props.shouldAnimate ? 0 : 1};
  justify-content: space-between;
  animation: ${props => props.shouldAnimate ? `antMoveUpIn 0.8s ease 0.6s forwards` : `none`};

  @media ${device.mobileM} {
      display: none;
  }
`;

const HeaderLink = styled.div`
  color: ${props => props.theme.darkGrey};
  font-size: 12px;
`;

const Header = ({ siteTitle, page }) => (
  <StyledHeader>
    <Container align="center" justify="space-between">
      <Link to={"/"}>
        <KupeLogo src={require("../images/logos/kupe.svg")} shouldAnimate={page === "index"} />
      </Link>
      <HeaderLinks shouldAnimate={page === "index"} />
    </Container>
  </StyledHeader>
);

const HeaderLinks = ({ shouldAnimate }) => {

  const links = ["Feedback", "About", "Method"];
  const homeLink = { text: "hpa.org.nz", href: "https://www.hpa.org.nz" };

  return (
    <StyledHeaderLinks shouldAnimate={shouldAnimate}>
      {links.map(link => <HeaderLink key={link}>{link}</HeaderLink>)}
      <HeaderLink>
        {homeLink.text}
      </HeaderLink>
    </StyledHeaderLinks>
  )

};


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
