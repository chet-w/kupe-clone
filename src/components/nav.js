import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Container from './ui/container';
import { graphql, useStaticQuery } from 'gatsby';
import { useHover } from "use-events";
import { Popover } from 'antd';

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-evenly;
    font-size: 14px;
    position: relative;
`;

const StyledNavTopic = styled.div`
    padding: 5px;
    cursor: pointer;
    position: relative;

`;

const StyledNavBody = styled.div`
    height: auto;
    transition: all 0.4s ease;
    width: 100%;
    display: flex;
    justify-content: center;
    opacity: 1;
    padding: 20px 0;
    z-index: 3;
`;

const StyledNavBodySection = styled.div`
    display: flex;
    flex-direction: column;
    width: 33%;
    padding: 0 20px;
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
                {topics.map((topic, i) => (
                    <Popover
                     key={topic + i}
                     content={
                      <NavBody
                       subtopics={currentSubtopics}
                       allIndicators={raw}
                     />}
                     arrowPointAtCenter
                     trigger={"hover"}
                     placement={"bottom"}
                    >
                        <NavTopic topic={topic} setCurrentTopic={handleTopicChange.bind(this)}/>
                    </Popover>
                ))}
            </Container>
        </StyledNav>
    )
};

const NavTopic = ({ topic, setCurrentTopic, ...otherProps }) => {

    return (
        <StyledNavTopic onMouseOver={() => setCurrentTopic(topic)} {...otherProps}>
            {topic}
        </StyledNavTopic>
    )
};



const NavBody = ({ subtopics, allIndicators }) => {

    const justSubtopics = subtopics.map(pair => pair.subtopic);
    const filteredSubtopics = Array.from(new Set(justSubtopics));


    return (
        <StyledNavBody>
            <Container wrap={"wrap"} justify="space-between">
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

const NavBodySection = ({ subtopic, indicators }) => (
    <StyledNavBodySection>
        <SubtopicHeading>{subtopic}</SubtopicHeading>
        {indicators.map(indicator => <div>{indicator.node.shortDescription}</div>)}
    </StyledNavBodySection>
);



export default Nav
