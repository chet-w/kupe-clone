import PropTypes from "prop-types"
import styled from "styled-components";
import React, { useState } from "react"

import Container from "./ui/container";
import FeedbackModal from "./feedbackmodal";
import AboutModal from "./aboutmodal";
import { device } from "../lib/device";
import { Link } from "gatsby";
import { Modal, Icon, Drawer } from "antd";
import PageHeading from "./ui/pageheading";
import MobileMenuBody from "./mobilemenubody";

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

  & a {
    color: ${props => props.theme.grey};
  }

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

  & a {
    color: ${props => props.theme.darkGrey};
  }
`;

const StyledMobileMenu = styled.button`
    display: none;
    background: none;
    border: none;
    transition: all 0.3s ease;
    
    &:focus {
      outline: none;
    } 

    @media ${device.mobileM} {
      display: flex;
    }

    & i {
      color: ${props => props.theme.lightBlue};
      font-size: 25px;
    }
`;

const Header = ({ siteTitle, page }) => (
  <StyledHeader>
    <Container align="center" justify="space-between">
      <Link to={"/"}>
        <KupeLogo src={require("../images/logos/kupe.svg")} shouldAnimate={page === "index"} />
      </Link>
      <HeaderLinks shouldAnimate={page === "index"} />
      <MobileMenu />
    </Container>
  </StyledHeader>
);

const links = ["Feedback", "About", "Method"];

const HeaderLinks = ({ shouldAnimate }) => {

  const homeLink = { text: "hpa.org.nz", href: "https://www.hpa.org.nz" };

  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const handleModalClick = name => {
    if (name === "Feedback") {
      setIsFeedbackOpen(!isFeedbackOpen);
    } else if (name === "About") {
      setIsAboutOpen(!isAboutOpen);
    }
  };

  return (
    <StyledHeaderLinks shouldAnimate={shouldAnimate}>
      {links.map(link => (
        <>
          {link === "Method" ? <Link to="/method"><HeaderLink>Method</HeaderLink></Link> :
            <HeaderLink onClick={() => handleModalClick(link)} key={link}>{link}</HeaderLink>
          }

          <Modal
            visible={link === "Feedback" ? isFeedbackOpen : link === "About" ? isAboutOpen : false}
            title={<PageHeading text={link} />}
            style={{ top: 20 }}
            onCancel={() => handleModalClick(link)}
          >
            {link === "Feedback" ?
              <FeedbackModal
                handleClose={handleModalClick.bind(this)}
              /> : link === "About" ?
                <AboutModal
                  handleClose={handleModalClick.bind(this)}
                /> :
                ""
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

const MobileMenu = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <StyledMobileMenu
        onClick={() => toggleMenuOpen()}
      >
        <Icon type="menu" />
      </StyledMobileMenu>
      <Drawer
       visible={isMenuOpen}
       onClose={() =>toggleMenuOpen()}
       wrapClassName="mobile-menu-drawer"
      >
        <MobileMenuBody toggleMenu={toggleMenuOpen.bind(this)}/>
      </Drawer>
    </>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
