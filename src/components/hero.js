import React from 'react';
import styled from "styled-components";
import splash from "../images/splash.jpg"
import Container from './ui/container';
import { Button } from 'antd';
import { device } from "../lib/device";

const StyledHero = styled.div`
    background: url(${splash});
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 500px;
    /* opacity: 0; */
    color: ${props => props.theme.white};
    /* animation: antFadeIn 0.8s 1.8s ease forwards; */

    @media ${device.mobileM} {
        padding: 60px 20px;
        height: auto;
    }

    & p {
        font-size: 14px;
        max-width: 60%;
        margin-bottom: 10px;
        line-height: 20px;

        @media ${device.mobileM} {
            font-size: 18px;
            max-width: 100%;
            line-height: 24px;
        }
    }
`;

const SplashHeading = styled.h1`
    color: ${props => props.theme.white};
`;

const HeroButtons = styled.div`
    display: flex;
    margin-top: 20px;

    @media ${device.mobileM} {
        flex-direction: column-reverse;
        width: 100%;
    }

    & .ant-btn-primary {
        padding: 10px 15px;
        color: white;
        height: auto;
    }

    & button {
        margin-right: 20px;

        @media ${device.mobileM} {
            font-size: 18px;
            width: 100%;
            margin: 0 0 20px 0;
        }
    }
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
                    <HeroButtons>
                        <a href="http://kupe.hpa.org.nz" target="_blank" rel="noopener noreferrer">
                            <Button type="ghost">See the original</Button>
                        </a>
                        <a href="#explore">
                            <Button type="primary">Start exploring</Button>
                        </a>
                    </HeroButtons>
                </Container>
        </StyledHero>
)

export default Hero
