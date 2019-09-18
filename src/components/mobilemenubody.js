import React from 'react';
import styled from "styled-components";
import { Divider } from 'antd';
import { Link } from 'gatsby';

const StyledMobileMenuBody = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: flex-end;
    justify-content: center;
`;

const MenuItem = styled.button`
    text-align: right;
    background: none;
    border: none;

    & h3 {
        margin: 0;
    }

    & p {
        font-size: 14px;
    }
`;

const MobileMenuBody = ({ toggleMenu }) => {

    return (
        <StyledMobileMenuBody>
            <MenuItem onClick={() => toggleMenu()}>
                <h3>Search</h3>
                <p>Look for a specific Topic, Subtopic, or Indicator</p>
            </MenuItem>
            <Link to={"/#explore"}>
                <MenuItem onClick={() => toggleMenu()}>
                    <h3>Explore</h3>
                    <p>Browse all Kupe's data points</p>
                </MenuItem>
            </Link>
            <Divider />
            <MenuItem onClick={() => toggleMenu()}>
                <h3>Feedback</h3>
                <p>Get in touch about Kupe</p>
            </MenuItem>
            <MenuItem onClick={() => toggleMenu()}>
                <h3>About</h3>
                <p>The story of Kupe</p>
            </MenuItem>
            <Link to={"/method"}>
                <MenuItem onClick={() => toggleMenu()}>
                    <h3>Method</h3>
                    <p>How we made it happen</p>
                </MenuItem>
            </Link>
            <Divider />
            <a href="http://kupe.hpa.org.nz/" target="_blank" rel="noopener noreferrer">
                <MenuItem onClick={() => toggleMenu()}>
                    <h3>hpa.org.nz</h3>
                    <p>More from HPA</p>
                </MenuItem>
            </a>
        </StyledMobileMenuBody>
    )
}

export default MobileMenuBody
