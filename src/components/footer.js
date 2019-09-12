import React from 'react';
import styled from "styled-components";
import Container from './ui/container';
import FooterBody from "./footerbody";


const StyledFooter = styled.footer`
    background: ${props => props.theme.blueGradient};
    min-height: 200px;
`;

const FooterContent = styled.div`
    display: flex;
    justify-content: center;
    padding: 30px 0;

`;

const StyledFooterBorder = styled.div`
    display: flex;
`;

const FooterBorderSection = styled.div`
    height: 10px;
    width: 20%;
    background: ${props => props.theme[props.thisColor]};
`;



const footer = props => {
    return (
        <StyledFooter>
            <FooterBorder />
            <FooterContent>
                <Container className="footer-container">
                    <FooterBody />
                </Container>
            </FooterContent>
        </StyledFooter>
    )
};


const FooterBorder = () => {

    const sections = ["green", "darkBlue", "orange", "yellow", "purple"];


    return (
        <StyledFooterBorder>
            {sections.map(color => <FooterBorderSection key={color} thisColor={color} />)}
        </StyledFooterBorder>
    )
};

export default footer
