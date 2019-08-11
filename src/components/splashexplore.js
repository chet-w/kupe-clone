import React from 'react';
import styled from "styled-components";
import MainFilters from "./mainfilters";
import Container from './ui/container';
import PageHeading from "./ui/pageheading";

const StyledSplashExplore = styled.div`
    width: 100%;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    border-top: solid 2px ${props => props.theme.lightGrey};
    border-bottom: solid 2px ${props => props.theme.lightGrey};
`;

const SplashExplore = () => {
    return (
        <StyledSplashExplore>
            <Container direction={"column"}>
                <PageHeading text={"Explore Kupe"} style={{ marginTop: 0 }} />
                <MainFilters formID={"explore"}/>
            </Container>
        </StyledSplashExplore>
    )
}

export default SplashExplore;
