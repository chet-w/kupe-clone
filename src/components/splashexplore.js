import React from 'react';
import styled from "styled-components";
import MainFilters from "./mainfilters";
import Container from './ui/container';
import PageHeading from "./ui/pageheading";

const StyledSplashExplore = styled.div`
    width: 100%;
    padding: 60px 0;
    display: flex;
    justify-content: center;
    border-top: solid 2px ${props => props.theme.lightGrey};
    border-bottom: solid 2px ${props => props.theme.lightGrey};
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

const SplashExplore = () => {
    return (
        <StyledSplashExplore>
            <Container direction={"column"}>
                <PageHeading text={"Explore Kupe"} style={{ marginTop: 0 }} />
                <MainFilters formID={"explore"}/>
                <Or>
                    OR
                </Or>
            </Container>
        </StyledSplashExplore>
    )
}

export default SplashExplore;
