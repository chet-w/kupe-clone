import React from 'react';
import styled from "styled-components";

const StyledContainer = styled.div`
    max-width: 1000px;
    width: 100%;
    display: flex;
    align-items: ${props => props.align};
    justify-content: ${props => props.justify};
    flex-direction: ${props => props.direction};
    flex-wrap: ${props => props.wrap};
`;

const Container = ({ justify = "flex-start", align = "flex-start", direction="row", wrap="nowrap", children }) => {
    return (
        <StyledContainer justify={justify} align={align} direction={direction} wrap={wrap}>
            {children}
        </StyledContainer>
    )
}

export default Container;
