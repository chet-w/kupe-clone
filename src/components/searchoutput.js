import React from 'react'
import styled from "styled-components";
import Highligher from "react-highlight-words";
import { Icon } from 'antd';
import { StaticQuery, graphql } from 'gatsby';

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
            <SubtopicOutput results={results[1]} search={search} />
        // type === "Subtopic" ?
        //     <SubtopicOutput results={results} search={search} /> :
        //     <TopicOutput results={results} search={search} />

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
            {/* {results.map(result => (
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
                        {result.topic}
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
            } */}
            {/* {subtopicDetails.map(subtopic => (
                <SearchResult>
                    <Title>
                        <Highligher
                            highlightClassName="search-match"
                            searchWords={[search]}
                            autoEscape={true}
                            textToHighlight={subtopic.name}
                        />
                    </Title>
                </SearchResult>
            ))} */}
            subtopics
        </div>
    )
};

export default SearchOutput;
