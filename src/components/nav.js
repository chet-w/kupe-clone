import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Container from './ui/container';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Popover, Affix, Icon } from 'antd';
import { toPath } from '../lib/helpers';
import SearchPanel from "./searchpanel";

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-evenly;
    font-size: 14px;
    position: relative;
    border-bottom: solid 1px #f5f5f5;
    opacity: ${props => props.shouldAnimate ? 0 : 1};
    animation: ${props => props.shouldAnimate ? `antFadeIn 0.8s ease 1.2s forwards` : `none`};
    background: ${props => props.theme.white};

`;

const StyledNavTopic = styled.div`
    padding: 10px;
    cursor: pointer;
    position: relative;
    transition: max-width 0.4s ease;

    & > a {
        color: ${props => props.theme.lightBlue};
        position: relative;

        &:after {
            content: " ";
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 2px;
            transition: all 0.3s ease;
            background: ${props => props.theme.green};
        }

    }

    &:hover {
        & > a:after {
            width: 100%;
        }
    }
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
    color: ${props => props.theme.black};

    & a {
        color: ${props => props.theme.black};
    }

`;

const SubtopicHeading = styled.h3`
    color: ${props => props.theme.black};
`;

const Search = styled.div`
    padding: 10px;
    cursor: pointer;
    position: relative;
    border: none;
    background: none;
    transition: width 0.3s ease;
    /* width: ${props => props.isOpen ? `1000px` : 0}; */
    color: ${props => props.theme.lightBlue};
    /* border-left: solid 2px ${props => props.theme.lightBlue}; */

    &::before {
        content: " ";
        position: absolute;
        width: 1px;
        height: 50%;
        top: 25%;
        left: 0;
        background: ${props => props.theme.lightGrey};
    }
`;


const Nav = ({ page }) => {

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

    const [currentTopic, setCurrentTopic] = useState(null);
    const [currentSubtopics, setCurrentSubtopics] = useState(null);

    const [isSearchOpen, toggleSearchOpen] = useState(false);

    useEffect(() => {
        const newSubtopics = subtopics.filter(subtopic => subtopic.topic === currentTopic);
        setCurrentSubtopics(newSubtopics);
    }, [currentTopic]);

    const handleTopicChange = newTopic => {
        setCurrentTopic(newTopic);
    }


    return (
        <div className="sticky-megamenu">
            <StyledNav shouldAnimate={page === "index"}>
                <Container justify="space-between">
                    <Link to="/" className="kupe-logo">
                        <Icon type="home"/>
                    </Link>
                    {topics.map((topic, i) => (
                        <Popover
                            key={topic + i}
                            content={
                                <NavBody
                                    subtopics={currentSubtopics}
                                    allIndicators={raw}
                                    topic={topic}
                                />}
                            
                            trigger={"hover"}
                            placement={"bottom"}
                        >
                            <NavTopic
                             topic={topic}
                             setCurrentTopic={handleTopicChange.bind(this)}
                            />
                        </Popover>
                    ))}
                    <Search onClick={() => toggleSearchOpen(!isSearchOpen)} isOpen={isSearchOpen}>
                       <Icon type="search" />
                    </Search>
                    { isSearchOpen && <SearchPanel 
                        toggleOpen={toggleSearchOpen.bind(this)}
                    /> }
                    <div  className="nav-header-links">
                        <Icon type="menu"/>
                    </div>
                </Container>
            </StyledNav>
        </div>
    )
};

const NavTopic = ({ topic, setCurrentTopic, ...otherProps }) => {
    return (
        <StyledNavTopic onMouseOver={() => setCurrentTopic(topic)} {...otherProps} >
            <Link to={`/${toPath(topic)}`}>
                {topic}
            </Link>
        </StyledNavTopic>
    )
};

const NavBody = ({ subtopics, allIndicators, topic }) => {
    const justSubtopics = subtopics.map(pair => pair.subtopic);
    const filteredSubtopics = Array.from(new Set(justSubtopics));

    return (
        <StyledNavBody>
            <Container wrap={"wrap"}>
                {filteredSubtopics.map(subtopic => (
                    <NavBodySection
                        subtopic={subtopic}
                        topic={topic}
                        indicators={allIndicators.filter(ind => ind.node.subtopic === subtopic)}
                    />
                ))}
            </Container>
        </StyledNavBody>
    )
};

const NavBodySection = ({ subtopic, indicators, topic }) => {


    return (
        <StyledNavBodySection>
            <Link to={toPath(`${topic}/${subtopic}`)}>
                <SubtopicHeading>{subtopic}</SubtopicHeading>
            </Link>
            {indicators.map(indicator => {
                const indicatorPath = toPath(`${topic}/${subtopic}/${indicator.node.shortDescription}`);
                return <Link to={indicatorPath}>{indicator.node.shortDescription}</Link>
            })}
        </StyledNavBodySection>
    )

};



export default Nav
