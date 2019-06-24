import React from 'react';
import { Link } from "gatsby";
import styled from "styled-components";
import Container from "./ui/container";
import TopicCard from "./topiccard";

import { toPath } from "../lib/helpers"

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 15px 0;

    & a {
        margin: 15px;
        box-shadow: ${props => props.theme.shadow}; 
        transition: all 0.3s ease;

        &:hover {
            box-shadow: ${props => props.theme.shadowHover}; 
        }
    }
`;


const TopicCards = ({ topics }) => {

    return (
        <Container justify="center">
            <CardsContainer>
                {topics.map(topic => {
                    return (
                        <Link key={topic} to={`/${topic.node.path}`}>
                            <TopicCard topic={topic.node}/>
                        </Link>
                    )
                })}
            </CardsContainer>
        </Container>
    )
}

export default TopicCards
