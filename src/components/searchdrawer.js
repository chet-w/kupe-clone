import React, { useState } from 'react';
import { Drawer, Button, Input } from "antd";
import styled from "styled-components";
import SearchOutput from "./searchoutput";
import Container from './ui/container';
import { useStaticQuery, graphql } from 'gatsby';

const SearchHeading = styled.h2`
    margin: 0;
`;

const Footer = styled.div`
    margin-top: 24px;
    position: relative;
    padding: 16px 24px;
    color: rgba(0,0,0,0.65);
    background: #fff;
    border-top: 1px solid #e8e8e8;
    border-radius: 4px 4px 0 0;
    width: 100vw;
    display: flex;
    justify-content: center;
`;

const SearchBody = styled.div`
    margin: 10px 0;
    width: 100%;

`;

const SearchDrawer = ({ isOpen, toggleIsOpen }) => {

    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchChange = value => {
        console.log(searchText);
        const res = allSearchables.filter(subtopic => {
            return subtopic.name.includes(value) || subtopic.description.includes(value)
        });
        setSearchText(value);
        setSearchResults(res);
    }

    const allSearchables = useStaticQuery(graphql`
        query allSearchables {
            allSubtopicDescriptionsJson {
                nodes {
                    description
                    name
                }
            }
        }
    `).allSubtopicDescriptionsJson.nodes;

    

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
                    <Input
                        className="search-input"
                        placeholder="What are you looking for?"
                        onChange={e => handleSearchChange(e.target.value)}
                        allowClear
                        autoFocus
                    />
                    <SearchOutput results={searchText === "" ? [] : searchResults} search={searchText}/>
                </SearchBody>
            </Container>
        </Drawer>

    )
}

export default SearchDrawer;
