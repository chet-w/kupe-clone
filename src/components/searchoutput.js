import React from 'react'
import styled from "styled-components";
import Highligher from "react-highlight-words";
import { Icon } from 'antd';
import {dePath, toPath } from "../lib/helpers";
import { Link } from 'gatsby';

const SearchResult = styled.div`
    margin: 10px 0;
    padding: 10px 0;
    border-bottom: 1px solid ${props => props.theme.lightGrey};
`;

const Title = styled.div`
    font-weight: bold;

    & a {
        color: #0080a4;
    }
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
                    <Link to={`${toPath(result.topic)}/${toPath(result.subtopic)}/${toPath(result.shortDescription)}`}>
                        <a>
                            {result.shortDescription}
                        </a>
                    </Link>
                </Title>
                <Trace>
                    {result.topic} <Icon type={"right"} /> {result.subtopic}
                </Trace>
                <div>
                    {getLongDescription(result.longDescription)}
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
                        <Link to={result.path}>
                            <a>
                                {result.name}
                            </a>
                        </Link>
                    </Title>
                    <Trace>
                        {dePath(result.path.substring(0, result.path.indexOf("/")))}
                    </Trace>
                    <div>
                        {result.description}
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
                        <Link to={toPath(result.name)}>
                            <a>
                                {result.name}
                            </a>
                        </Link>
                    </Title>
                    <div>
                        {result.description}
                    </div>
                </SearchResult>
            ))
            }
        </div>
    )
};

export default SearchOutput;
