import React from 'react'
import styled from "styled-components";
import { Empty } from 'antd';
import Highligher from "react-highlight-words";

const SearchResult = styled.div`
    margin: 10px 0;
    padding: 10px 0;
    border-bottom: 1px solid ${props => props.theme.lightGrey};
`;

const Title = styled.div`
    font-weight: bold;
`;

const SearchOutput = ({ results, search }) => {

    const getLongDescription = withHTML => {
        let tempElement = document.createElement("div");
        tempElement.innerHTML = withHTML;
        return tempElement.innerText;
    }

    return (
        <div>
            {results.length > 0 ?
                results.map(result => (
                    <SearchResult>
                        <Title>
                            <Highligher
                                highlightClassName="search-match"
                                searchWords={[search]}
                                autoEscape={true}
                                textToHighlight={result.shortDescription}
                            />
                        </Title>
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
                : <Empty />
            }
        </div>
    )
}

export default SearchOutput;
