import React, { useState, useRef, useEffect } from 'react';
import { Drawer, Button, Input, Icon } from "antd";
import styled from "styled-components";
import SearchOutputPanel from "./searchoutputpanel";
import Container from './ui/container';
import { useStaticQuery, graphql } from 'gatsby';

const SearchHeading = styled.h2`
    margin: 0;
`;


const SearchBody = styled.div`
    margin: 10px 0;
    width: 100%;

`;

const SearchBar = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    & .search-input .ant-input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    & button {
        font-size: 20px;
        height: 40px;
        width: 150px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`;


const SearchDrawer = ({ isOpen, toggleIsOpen, searchText }) => {

    const [searchResults, setSearchResults] = useState([]);

    const handleSearchButton = () => {
        const matchTerm = new RegExp(searchText.replace("aori", "\u0101ori"), "i");
        const indResults = indicatorDescriptions.filter(node => {
            return node.shortDescription.match(matchTerm) ||
            node.longDescription.match(matchTerm) ||
            node.topic.match(matchTerm) ||
            node.subtopic.match(matchTerm);
        });
        console.log(`${indResults.length} indicators`);

        const subtopicResults = subtopicDescriptions.filter(node => {
            return node.name.match(matchTerm) ||
            node.description.match(matchTerm) ||
            node.path.match(matchTerm);
        });
        console.log(`${subtopicResults.length} subtopics`);

        const topicResults = topicDescriptions.filter(node => {
            return node.name.match(matchTerm) ||
            node.description.match(matchTerm)
        });
        console.log(`${topicResults.length} topics`);

        setSearchResults([indResults, subtopicResults, topicResults]);
    };


    const allSearchables = useStaticQuery(graphql`
        query allSearchables {
            allIndicatorDescriptionsJson {
                nodes {
                indicator
                topic
                subtopic
                shortDescription
                longDescription
                }
            }
            allSubtopicDescriptionsJson {
                nodes {
                name
                description
                path
                }
            }
            allTopicDescriptionsJson {
                nodes {
                name
                description
                }
            }

        }
    `);

    const indicatorDescriptions = allSearchables.allIndicatorDescriptionsJson.nodes;
    const subtopicDescriptions = allSearchables.allSubtopicDescriptionsJson.nodes;
    const topicDescriptions = allSearchables.allTopicDescriptionsJson.nodes;



    return (
        <Drawer
            title={(
                <Container justify="space-between">
                    <SearchHeading>Search Kupe</SearchHeading>
                    <Button onClick={e => toggleIsOpen(!isOpen)}>Close</Button>
                </Container>
            )}
            placement="top"
            visible={isOpen}
            closable={false}
            maskClosable={true}
            onClose={e => toggleIsOpen(!isOpen)}
            keyboard={true}
            className="search-drawer"
        >
            <Container>
                <SearchBody>
                   <SearchOutputPanel results={searchResults} search={searchText.replace("aori", "\u0101ori")} />
                </SearchBody>
            </Container>
        </Drawer>

    )
}

export default SearchDrawer;
