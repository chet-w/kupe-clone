import React from 'react';
import styled from "styled-components";
import SearchOutput from "./searchoutput";
import { Empty, Tabs, Badge } from 'antd';

const { TabPane } = Tabs;

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;


const SearchOutputPanel = ({ results, search }) => {
    const filters = ["Indicators", "Subtopics", "Topics"];

    return (
        <SearchContainer>
            {results.length > 0 && (
                <>
                    <h4>Categories</h4>
                    <Tabs tabPosition={"left"} className={"search-filters"}>
                        {filters.map((filter, i) => {
                            return (
                                <TabPane tab={
                                    <>{filter} <Badge count={results[i].length}/></>
                                } key={filter}>
                                    <SearchOutput results={results} search={search} type={filter} />
                                </TabPane>
                            )
                        })}
                    </Tabs>
                </>
            )}
        </SearchContainer>
    )
};

export default SearchOutputPanel;
