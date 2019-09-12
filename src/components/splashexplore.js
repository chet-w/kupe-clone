import React from 'react';
import styled from "styled-components";
import MainFilters from "./mainfilters";
import Container from './ui/container';
import PageHeading from "./ui/pageheading";
import { device } from "../lib/device";

const StyledSplashExplore = styled.div`
    width: 100%;
    padding: 60px 0;
    display: flex;
    justify-content: center;
    border-top: solid 2px ${props => props.theme.lightGrey};
    border-bottom: solid 2px ${props => props.theme.lightGrey};
    position: relative;
    background: ${props => props.theme.white};

    @media ${device.mobileM} {
        padding: 20px 0 60px 0;
    }
`;

const Or = styled.div`
    height: 80px;
    width: 80px;
    position: absolute;
    left: calc(50% - 40px);
    background: ${props => props.theme.white};
    bottom: -100px;
    border: solid 2px ${props => props.theme.lightGrey};
    color: ${props => props.theme.medGrey};
    font-weight: bold;
    border-radius: 50px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

`;

const InvisibleAnchor = styled.div`
    position: absolute;
    top: -80px;
`;

const SplashExplore = () => {
    return (
        <StyledSplashExplore>
            <InvisibleAnchor id="explore"></InvisibleAnchor>
            <Container direction={"column"}>
                <PageHeading text={"Explore Kupe"} style={{ marginTop: 0 }} />
                <MainFilters/>
                <Or>
                    OR
                </Or>
            </Container>
        </StyledSplashExplore>
    )
}

export default SplashExplore;
