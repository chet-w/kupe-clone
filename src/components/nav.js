import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Container from './ui/container';
import { graphql, useStaticQuery } from 'gatsby';
import { useHover } from "use-events";

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-evenly;
    font-size: 14px;
    position: relative;
`;

const StyledNavBody = styled.div`
    height: auto;
    background: ${props => props.theme.lightGrey};
    transition: all 0.4s ease;
    max-height: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    opacity: 0;
    padding: 20px 0;
    padding-top: 40px;
    z-index: 3;

    &:hover {
        opacity: 1;
        max-height: 1200px;
        display: flex;

        & ${StyledNavBodySection} {
            display: flex;
        }
    }
`;

const StyledNavTopic = styled.div`
    padding: 5px;
    cursor: pointer;
    position: relative;
    z-index: 5;

    &~ ${StyledNavBody}  ${StyledNavBodySection} {
            display: none;
        }

    &:hover {

        &~ ${StyledNavBody} {
            display: flex;
            opacity: 1;
            max-height: 1200px;

            /* & ${StyledNavBodySection} {
                display: flex;
            } */
        }

    }
`;


const StyledNavBodySection = styled.div`
    display: flex;
    flex-direction: column;
    width: 33%;
`;


const SubtopicHeading = styled.h3`


`;


const Nav = () => {

    const data = useStaticQuery(graphql`
        query {
        allIndicatorsJson {
            edges {
                node {
                    topic
                    subtopic
                    shortDescription
                }
            }
        }
    }
    `);

    const raw = data.allIndicatorsJson.edges;
    const topics = Array.from(new Set(raw.map(ind => ind.node.topic))).sort();
    const subtopics = Array.from(new Set(raw.map(ind => (
        { subtopic: ind.node.subtopic, topic: ind.node.topic }
        ))));

    const [currentTopic, setCurrentTopic ] = useState(null);
    const [currentSubtopics, setCurrentSubtopics] = useState(null);

    useEffect(() => {
        const newSubtopics = subtopics.filter(subtopic => subtopic.topic === currentTopic);
        setCurrentSubtopics(newSubtopics);
    }, [currentTopic]);

    const handleTopicChange = newTopic => {
        setCurrentTopic(newTopic);
    }

    return (
        <StyledNav>
            <Container justify="space-between">
                {topics.map(topic => (
                    <NavTopic
                     key={topic}
                     topic={topic}
                     setCurrentTopic={handleTopicChange.bind(this)}
                    />
                ))}
                {currentSubtopics && <NavBody subtopics={currentSubtopics} allIndicators={raw} />}
            </Container>
        </StyledNav>
    )
};

const NavTopic = ({ topic, setCurrentTopic }) => {

    const [isHovered, bind] = useHover();

    useEffect(() => {
        if(isHovered) {
            setCurrentTopic(topic);
        }
    });

    return (
        <StyledNavTopic {...bind}>
            {topic}
        </StyledNavTopic>
    )
};


const NavBody = ({ subtopics, allIndicators }) => {

    const justSubtopics = subtopics.map(pair => pair.subtopic);
    const filteredSubtopics = Array.from(new Set(justSubtopics));

    return (
        <StyledNavBody onMouseEnter={e => console.log(e)}>
            <Container wrap={"wrap"}>
                {filteredSubtopics.map(subtopic => (
                    <NavBodySection 
                     subtopic={subtopic}
                     indicators={allIndicators.filter(ind => ind.node.subtopic === subtopic)}
                    />

                ))}
            </Container>
        </StyledNavBody>
    )
};


const NavBodySection = ({subtopic, indicators}) => {
    return (
        <StyledNavBodySection>
            <SubtopicHeading>{subtopic}</SubtopicHeading>
            {indicators.map(indicator => <div>{indicator.node.shortDescription}</div>)}
        </StyledNavBodySection>
    )
};


export default Nav
