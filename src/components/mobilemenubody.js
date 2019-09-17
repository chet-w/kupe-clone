import React from 'react';
import styled from "styled-components";
import { Divider } from 'antd';

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

const MobileMenuBody = ({ links }) => {

    const allMenuOptions = ["Search", "Explore", "Feedback", "About", "Method", "hpa.org.nz"];
    const subtitles = [
        "Look for a specific Topic, Subtopic, or Indicator",
        "Browse all Kupe's data points",
        "Get in touch about Kupe",
        "The story of Kupe",
        "How we made it happen",
        "More from HPA"
    ];

    return (
        <StyledMobileMenuBody>
            {allMenuOptions.map((option, i) => (
                <>
                    <MenuItem>
                        <h3>{option}</h3>
                        <p>{subtitles[i]}</p>
                    </MenuItem>
                    {i === 1 || i === 4 ? <Divider />: ""}
                </>
            ))}
        </StyledMobileMenuBody>
    )
}

export default MobileMenuBody
