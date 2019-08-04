import React from 'react';
import styled from "styled-components";
import SearchOutput from "./searchoutput";
import { Empty, Tabs } from 'antd';

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
            {results.length > 0 ? (
                <>
                    <h4>Categories</h4>
                    <Tabs tabPosition={"left"} className={"search-filters"}>
                        {filters.map(filter => {
                            return (
                                <TabPane tab={filter} key={filter}>
                                    <SearchOutput results={results} search={search} type={filter}/> 
                                </TabPane>
                            )
                        })}
                    </Tabs>
                </>
            ) : <Empty />}
        </SearchContainer>
    )
};

export default SearchOutputPanel;
