import React from 'react';
import { Link } from "gatsby";
import styled from "styled-components";
import uuid from "uuid";
import Container from "./ui/container";
import TopicCard from "./topiccard";

import { device } from "../lib/device";

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    opacity: 1;
    margin-bottom: 30px;

    & a {
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
    return (
        <>
            <Container>
                <BrowseTopics>Browse topics</BrowseTopics>
            </Container>
            <Container justify="center">
                <CardsContainer>
                    {topics.map(topic => {
                        return (
                            <Link key={uuid.v4()} to={`/${topic.node.path}`}>
                                <TopicCard topic={topic.node} />
                            </Link>
                        )
                    })}
                </CardsContainer>
            </Container>
        </>
    )
}

export default TopicCards
