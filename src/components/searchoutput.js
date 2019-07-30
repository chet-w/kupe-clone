import React from 'react'
import { Empty } from 'antd';
import Highligher from "react-highlight-words";

const SearchOutput = ({ results, search }) => {
    console.log(results.length);
    return (
        <div>
            {results.length > 0 ?
                results.map(result => (
                    <div>
                        <div>
                            <Highligher
                                highlightClassName="search-match"
                                searchWords={[search]}
                                autoEscape={true}
                                textToHighlight={result.name}
                            />
                        </div>
                        <div>
                            <Highligher
                                highlightClassName="search-match"
                                searchWords={[search]}
                                autoEscape={true}
                                textToHighlight={result.description}
                            />
                        </div>
                    </div>
                ))
                : <Empty />
            }
        </div>
    )
}

export default SearchOutput;
