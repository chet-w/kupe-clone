import React from 'react';
import styled from "styled-components";

const StyledHeading = styled.h2`
    margin: 20px 0;
`;

const PageHeading = ({ text }) => {
    return (
        <StyledHeading>{text}</StyledHeading>
    )
}

export default PageHeading;
