import React from 'react';
import styled from "styled-components";

const StyledMobileMenuBody = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: flex-end;
    justify-content: center;
`;

const MenuItem = styled.div`
    display: flex;
    padding: 20px;
`;

const MobileMenuBody = ({ links }) => {

    const allMenuOptions = ["Search", "Explore", ...links];

    return (
        <StyledMobileMenuBody>
            {allMenuOptions.map(option => <MenuItem><h3>{option}</h3></MenuItem>)}
        </StyledMobileMenuBody>
    )
}

export default MobileMenuBody
