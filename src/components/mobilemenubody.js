import React, { useState } from "react"
import styled from "styled-components"
import { Divider, Modal, Input, Icon, Button } from "antd"
import { Link } from "gatsby"
import FeedbackModal from "./feedbackmodal"
import AboutModal from "./aboutmodal"
import SearchModal from "./searchmodal";

const StyledMobileMenuBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: flex-end;
  justify-content: center;
`

const MenuItem = styled.button`
  text-align: right;
  background: none;
  border: none;

  & h3 {
    margin: 0;
    color: white;
  }

  & p {
    font-size: 14px;
    color: white;
  }

  & button {
    color: white;
  }
`

const MobileMenuBody = ({ toggleMenu }) => {
  const [isFeedbackModalOpen, setFeedbackModalOpen] = useState(false)
  const [isAboutModalOpen, setAboutModalOpen] = useState(false);
//   const [isSearchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <StyledMobileMenuBody>
      {/* <Input
        className="mobile-searchbar"
        placeholder="Tap to search Kupe"
        suffix={<Button onClick={setSearchModalOpen(true)}><Icon type="search" style={{ color: "white" }} /></Button>}
      /> */}
      {/* <SearchModal isOpen={isSearchModalOpen} /> */}
      <Link to={"/#explore"}>
        <MenuItem onClick={() => toggleMenu()}>
          <h3>Explore</h3>
          <p>Browse all Kupe's data points</p>
        </MenuItem>
      </Link>
      <Divider />
      <MenuItem
        onClick={() => {
          toggleMenu()
          setFeedbackModalOpen(true)
        }}
      >
        <h3>Feedback</h3>
        <p>Get in touch about Kupe</p>
      </MenuItem>
      <Modal
        visible={isFeedbackModalOpen}
        onCancel={() => setFeedbackModalOpen(false)}
        onOk={() => setFeedbackModalOpen(false)}
      >
        <FeedbackModal />
      </Modal>
      <MenuItem
        onClick={() => {
          toggleMenu()
          setAboutModalOpen(true)
        }}
      >
        <h3>About</h3>
        <p>The story of Kupe</p>
      </MenuItem>
      <Modal
        visible={isAboutModalOpen}
        onCancel={() => setAboutModalOpen(false)}
        onOk={() => setAboutModalOpen(false)}
      >
        <AboutModal />
      </Modal>
      <Link to={"/method"}>
        <MenuItem onClick={() => toggleMenu()}>
          <h3>Method</h3>
          <p>How we made it happen</p>
        </MenuItem>
      </Link>
      <Divider />
      <a href="https://hpa.org.nz/" target="_blank" rel="noopener noreferrer">
        <MenuItem onClick={() => toggleMenu()}>
          <h3>hpa.org.nz</h3>
          <p>More from HPA</p>
        </MenuItem>
      </a>
    </StyledMobileMenuBody>
  )
}

export default MobileMenuBody
