import React from 'react'
import styled from "styled-components";
import Highligher from "react-highlight-words";
import { Icon } from 'antd';

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

const SearchOutput = ({ results, search }) => {

    const getLongDescription = withHTML => {
        let tempElement = document.createElement("div");
        tempElement.innerHTML = withHTML;
        return tempElement.innerText;
    }

    return (
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
        )
    }
    
    export default SearchOutput;
