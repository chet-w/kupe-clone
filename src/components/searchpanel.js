import React, { useState, useRef } from 'react';
import styled, { keyframes } from "styled-components";
import { Input, Icon, Button, Modal } from 'antd';
import { useStaticQuery, graphql } from 'gatsby';
import SearchModal from './searchmodal';

const { Search } = Input;

const SearchPanelExpand = keyframes`
    from { width: 0; opacity: 0 }
    to { width: 100%; opacity: 1 }
`;

const SearchPanelRetract = keyframes`
    from { width: 100%; opacity: 1 }
    to { width: 0; opacity: 0 }
`;

const StyledPanel = styled.div`
    position: absolute;
    height: 100%;
    width: 0;
    opacity: 0;
    right: 0;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s ease;
    animation: ${props => props.animation ? SearchPanelRetract : SearchPanelExpand} 0.5s ease forwards;
    z-index: 1;

    & button {
        background: white;
        border: none;
        cursor: pointer;
    }
`;

const SearchPanel = ({ toggleOpen }) => {

    const handleClose = () => {
        setShouldFadeOut(true);
        setTimeout(() => toggleOpen(false), 500);
    };

    const handleSearch = searchText => {
        setIsSearchLoading(true);
        setTimeout(() => {
            const matchTerm = new RegExp(searchText.replace("aori", "\u0101ori"), "i");
            const indResults = indicatorDescriptions.filter(node => {
                return node.shortDescription.match(matchTerm) ||
                node.longDescription.match(matchTerm) ||
                node.topic.match(matchTerm) ||
                node.subtopic.match(matchTerm);
        });
        const subtopicResults = subtopicDescriptions.filter(node => {
            return node.name.match(matchTerm) ||
            node.description.match(matchTerm) ||
            node.path.match(matchTerm);
        });
        const topicResults = topicDescriptions.filter(node => {
            return node.name.match(matchTerm) ||
                node.description.match(matchTerm)
            });
            setResults([indResults, subtopicResults, topicResults]);
            setShowResults(true)
            setIsSearchLoading(false)
        }, 1200);
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

    const [shouldFadeOut, setShouldFadeOut] = useState(false);
    const [isSearchLoading, setIsSearchLoading] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [results, setResults] = useState([])
    const searchTextRef = useRef(null);

    return (
        <>
            <StyledPanel animation={shouldFadeOut}>
                <Search
                    placeholder="Enter some text to search Kupe"
                    prefix={<Icon type="search" />}
                    enterButton={<Button type="primary" loading={isSearchLoading}>{isSearchLoading ? "Searching" : "Search"}</Button>}
                    size="large"
                    onSearch={value => handleSearch(value)}
                    className="search-bar"
                    autoFocus
                    ref={searchTextRef}
                />
                <button onClick={() => handleClose()}><Icon type={"close"} /></button>
            </StyledPanel>
            <SearchModal
             isOpen={showResults}
             toggleOpen={setShowResults.bind(this)}
             searchText={searchTextRef.current !== null ? searchTextRef.current.input.state.value : ""}
             results={results}
            />
        </>
    )
}

export default SearchPanel;
