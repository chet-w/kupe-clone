import React from 'react';
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "styled-components";
import Container from './ui/container';
import Breadcrumb from "./breadcrumb";
import TopicHeading from "./topicheading";
import SubtopiCard from "./subtopiccard";
import { toPath } from '../lib/helpers';

const StyledPrelude = styled.div`
    width: 50%;

    & p {
        margin-bottom: 10px;
    }
`;

const StyledSubtopicCards = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin: 15px;

    &  a {
        margin: 15px;
        box-shadow: ${props => props.theme.shadow};
        transition: all 0.3s ease; 

        &:hover {
            box-shadow: ${props => props.theme.shadowHover}; 
        }
    }
`;

const TopicPageBody = ({ topic, subtopics, indicators, description }) => {
    return (
        <Container direction="column" padding="20px 0">
            <Breadcrumb items={[topic]} />
            <TopicHeading topic={topic} />
            <TopicPrelude description={description} />
            <SubtopicCards topic={topic} subtopics={subtopics} indicators={indicators} />
        </Container>
    )
}

const TopicPrelude = ({ description }) => (
    <>
        <StyledPrelude>
            <p>{description}</p>
        </StyledPrelude>
        <StyledPrelude>
            <p>Select one of the Subtopic cards below to explore further.</p>
        </StyledPrelude>
    </>
);

const SubtopicCards = ({ topic, subtopics, indicators }) => {
    return (
        <StyledSubtopicCards>
            {subtopics.map(subtopic => (
                <Link to={`/${toPath(topic)}/${toPath(subtopic)}`}>
                    <SubtopiCard name={subtopic} />
                </Link>
            ))}
        </StyledSubtopicCards>
    )
}

export default TopicPageBody;
