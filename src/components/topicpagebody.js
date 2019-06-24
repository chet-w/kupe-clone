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
    justify-content: space-evenly;
`;

const TopicPageBody = ({ topic, description }) => {
    return (
        <Container direction="column" padding="20px 0">
            <Breadcrumb items={[topic]} />
            <TopicHeading topic={topic} />
            <TopicPrelude description={description} />
            <SubtopicCards topic={topic} />
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

const SubtopicCards = ({ topic }) => {
    const data = useStaticQuery(graphql`
        query {
            allIndicatorsJson(filter: {topic: {eq: "Alcohol"}}) {
                distinct(field: subtopic)
            }
        }
    `);

    const subtopics = data.allIndicatorsJson.distinct;
        return (
            <StyledSubtopicCards>
                {subtopics.map(subtopic => (
                    <Link to={`/${toPath(topic)}/${toPath(subtopic)}`}>
                        <SubtopiCard name={subtopic}/>
                    </Link>
                ))}
            </StyledSubtopicCards>
        )

}

export default TopicPageBody;
