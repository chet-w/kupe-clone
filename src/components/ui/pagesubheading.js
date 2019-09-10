import React from 'react';
import styled from "styled-components";

const StyledSubheading = styled.h4`
    margin: 30px 0 10px 0;
`;

const PageSubheading = ({ text, style, id }) => {
    return (
        <StyledSubheading id={id} style={style}>{text}</StyledSubheading>
    )
}

export default PageSubheading
