import React from 'react';
import styled from "styled-components";

const StyledContainer = styled.div`
    max-width: 1000px;
    width: 100%;
    display: flex;
    align-items: ${props => props.align};
    justify-content: ${props => props.justify};
    flex-direction: ${props => props.direction};
`;

const Container = ({ justify = "flex-start", align = "flex-start", direction="row", children }) => {
    return (
        <StyledContainer justify={justify} align={align} direction={direction}>
            {children}
        </StyledContainer>
    )
}

export default Container;
