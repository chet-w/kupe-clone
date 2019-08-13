import React from 'react';
import { Link } from "gatsby";
import styled from "styled-components";
import Container from "./ui/container";
import TopicCard from "./topiccard";


import Fade from "react-reveal/Fade";

import { device } from "../lib/device";

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    opacity: 0;
    animation: antMoveDownIn 0.8s ease 2.4s forwards;
    margin-bottom: 30px;

    & .react-reveal {
        margin: 15px;
        box-shadow: ${props => props.theme.shadow}; 
        transition: all 0.3s ease;

        &:hover {
            box-shadow: ${props => props.theme.shadowHover}; 
        }
    }
`;

const BrowseTopics = styled.h2`
    width: 100%;
    margin: 30px 0 20px 0;

    @media ${device.mobileM} {
        margin: 50px 0 20px 0;
        height: auto;
    }
`;


const TopicCards = ({ topics }) => {

    const getDelay = index => {
        let delay = 0;
        if (index % 3 === 0) {
            delay = 100;
        } else if (index % 3 === 1) {
            delay = 200;
        } else if (index % 3 === 2) {
            delay = 300
        }
        return delay;
    }

    return (
        <>
            <Container>
                <BrowseTopics>Browse topics</BrowseTopics>
            </Container>
            <Container justify="center">
                <CardsContainer>
                    {topics.map((topic, index) => {
                        return (
                            <Fade bottom delay={getDelay(index)}>
                                <Link key={topic} to={`/${topic.node.path}`}>
                                    <TopicCard topic={topic.node} />
                                </Link>
                            </Fade>
                        )
                    })}
                </CardsContainer>
            </Container>
        </>
    )
}

export default TopicCards
