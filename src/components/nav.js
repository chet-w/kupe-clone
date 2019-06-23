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
    height: 200px;
    background: ${props => props.theme.lightGrey};
    transition: all 0.4s ease;
    max-height: 0;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    opacity: 0;
`;

const StyledNavTopic = styled.div`
    padding: 5px;
    cursor: pointer;
    position: relative;

    &:after {
            position: absolute;
            width: 10px;
            height: 10px;
            background: ${props => props.theme.white};
            transform: rotate(45deg);
            top: 0;
            left: calc(50% - 10px);
        }

    &:hover {

        
        
        &~ ${StyledNavBody} {
            opacity: 1;
            max-height: 200px;
        }
    }
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
                    <NavTopic key={topic} topic={topic} setCurrentTopic={handleTopicChange.bind(this)}/>
                ))}
                {currentSubtopics && <NavBody subtopics={currentSubtopics}/>}
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


const NavBody = ({ subtopics }) => {

    const justSubtopics = subtopics.map(pair => pair.subtopic);
    const filteredSubtopics = Array.from(new Set(justSubtopics));

    return (
        <StyledNavBody>
            <Container>
                {filteredSubtopics.map(subtopic => <SubtopicHeading>{subtopic}</SubtopicHeading>)}
            </Container>
        </StyledNavBody>
    )
}


export default Nav
