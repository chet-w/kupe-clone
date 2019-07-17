import React from 'react';
import styled from "styled-components";
import splash from "../images/splash.jpg"
import Container from './ui/container';

const StyledHero = styled.div`
    background: url(${splash});
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    color: ${props => props.theme.white};
    animation: antFadeIn 0.8s 1.8s ease forwards;

    & p {
        font-size: 14px;
        max-width: 60%;
        margin-bottom: 10px;
        line-height: 20px;
    }
`;

const SplashHeading = styled.h1`
    color: ${props => props.theme.white};
`;

const Hero = () => (
    <StyledHero>
        <Container direction="column">
            <SplashHeading>The Kupe Clone</SplashHeading>
            <p>This app is a clone of the Health Promotion Agency's Kupe Data Explorer.</p>
            <p>The original app was made by Epi-interactive using the R Shiny web framework, 
                while this clone is a remake made using the React static site framework Gatsby.
            </p>
            <p>Just like the original app you can browse through a set of topics from the Health 
                and Lifestyles Survey, a survey to understand New Zealanders' views and exerpiences 
                regarding various topics.
            </p>
        </Container>
    </StyledHero>
)

export default Hero
