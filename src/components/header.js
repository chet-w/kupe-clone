import PropTypes from "prop-types"
import styled from "styled-components";
import React, { useState } from "react"

import Container from "./ui/container";
import FeedbackModal from "./feedbackmodal";
import AboutModal from "./aboutmodal";
import { device } from "../lib/device";
import { Link } from "gatsby";
import { Modal } from "antd";
import PageHeading from "./ui/pageheading";

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

const HeaderLink = styled.button`
  color: ${props => props.theme.darkGrey};
  font-size: 12px;
  background: none;
  border: none;
  cursor: pointer;
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

  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const handleModalClick = name => {
    if(name === "Feedback") {
      setIsFeedbackOpen(!isFeedbackOpen);
    } else if(name === "About"){
      setIsAboutOpen(!isAboutOpen);
    }
  };

  return (
    <StyledHeaderLinks shouldAnimate={shouldAnimate}>
      {links.map(link => (
        <>
          <HeaderLink onClick={() => handleModalClick(link)} key={link}>{link}</HeaderLink>
          <Modal
           visible={link === "Feedback" ? isFeedbackOpen : link === "About" ? isAboutOpen : false}
           title={<PageHeading text={link}/>}
           style={{ top: 20 }}
           onCancel={() => handleModalClick(link)}
           >
            {link === "Feedback" ?
             <FeedbackModal
              handleClose={handleModalClick.bind(this)}
             /> : link === "About" ?
             <AboutModal
              handleClose={handleModalClick.bind(this)}
             /> : ""
             }
          </Modal>
        </>
      ))}
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
