import React from 'react'
import { Empty } from 'antd';

const SearchOutput = ({ results }) => {
    console.log(results.length);
    return (
        <div>
            { results.length > 0 ?
            results.map(result => (
                        <div>
                            <div><strong>{result.name}</strong></div>
                            <div>{result.description}</div>
                        </div>
                    ))
            : <Empty />
            }
        </div>
    )
}

export default SearchOutput;
