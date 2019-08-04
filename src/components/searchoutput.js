import React from 'react'
import styled from "styled-components";
import Highligher from "react-highlight-words";
import { Icon } from 'antd';
import {dePath } from "../lib/helpers";

const SearchResult = styled.div`
    margin: 10px 0;
    padding: 10px 0;
    border-bottom: 1px solid ${props => props.theme.lightGrey};
`;

const Title = styled.div`
    font-weight: bold;
`;

const Trace = styled.div`
    color: ${props => props.theme.lightBlue};

`;

const getLongDescription = withHTML => {
    let tempElement = document.createElement("div");
    tempElement.innerHTML = withHTML;
    return tempElement.innerText;
}

const SearchOutput = ({ results, search, type }) => {

    console.log(results[0]);

    return (
        type === "Indicators" ?
            <IndicatorOutput results={results[0]} search={search} /> :
        type === "Subtopics" ?
            <SubtopicOutput results={results[1]} search={search} /> :
            <TopicOutput results={results[2]} search={search} />

    )
}

const IndicatorOutput = ({ results, search }) => (
    <div>
        <h4>Found {results.length} indicators for "{search}"</h4>
        {results.map(result => (
            <SearchResult>
                <Title>
                    <Highligher
                        highlightClassName="search-match"
                        searchWords={[search]}
                        autoEscape={true}
                        textToHighlight={result.shortDescription}
                    />
                </Title>
                <Trace>
                    {result.topic} <Icon type={"right"} /> {result.subtopic}
                </Trace>
                <div>
                    <Highligher
                        highlightClassName="search-match"
                        searchWords={[search]}
                        autoEscape={true}
                        textToHighlight={getLongDescription(result.longDescription)}
                    />
                </div>
            </SearchResult>
        ))
        }
    </div>
);

const SubtopicOutput = ({ results, search }) => {
    return (
        <div>
            <h4>Found {results.length} subtopics for "{search}"</h4>
            {results.map(result => (
                <SearchResult>
                    <Title>
                        <Highligher
                            highlightClassName="search-match"
                            searchWords={[search]}
                            autoEscape={true}
                            textToHighlight={result.name}
                        />
                    </Title>
                    <Trace>
                        {dePath(result.path.substring(0, result.path.indexOf("/")))}
                    </Trace>
                    <div>
                        <Highligher
                            highlightClassName="search-match"
                            searchWords={[search]}
                            autoEscape={true}
                            textToHighlight={result.description}
                        />
                    </div>
                </SearchResult>
            ))
            }
        </div>
    )
};

const TopicOutput = ({ results, search }) => {
    return (
        <div>
            <h4>Found {results.length} topics for "{search}"</h4>
            {results.map(result => (
                <SearchResult>
                    <Title>
                        <Highligher
                            highlightClassName="search-match"
                            searchWords={[search]}
                            autoEscape={true}
                            textToHighlight={result.name}
                        />
                    </Title>
                    <div>
                        <Highligher
                            highlightClassName="search-match"
                            searchWords={[search]}
                            autoEscape={true}
                            textToHighlight={result.description}
                        />
                    </div>
                </SearchResult>
            ))
            }
        </div>
    )
};

export default SearchOutput;
