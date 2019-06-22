import PropTypes from "prop-types"
import styled from "styled-components";
import React from "react"

import Container from "./ui/container";

const StyledHeader = styled.header`
  background: ${props => props.theme.white};
  display: flex;
  justify-content: center;
  border-bottom: solid 1px #f5f5f5;
  height: 80px;
`;

const KupeLogo = styled.img`
  width: 200px;
`;

const StyledHeaderLinks = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
`;

const HeaderLink = styled.div`
  color: ${props => props.theme.darkGrey};
  font-size: 14px;
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Container align="center" justify="space-between">
      <KupeLogo src={require("../images/logos/kupe.svg")} />
      <HeaderLinks />
    </Container>
  </StyledHeader>
);

const HeaderLinks = () => {

  const links = ["Feedback", "About", "Method"];
  const homeLink = { text: "hpa.org.nz", href: "https://www.hpa.org.nz" };

  return (
    <StyledHeaderLinks>
      {links.map(link => <HeaderLink>{link}</HeaderLink>)}
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
