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

const StyledSearchFilters = styled.div`
    width: 300px;
    margin-right: 20px;
    border-right: solid 2px ${props => props.theme.lightGrey};
`;

const StyledSearchFilter = styled.div`
    padding: 5px 0px;
    margin: 5px 15px 5px 5px;
    border-bottom: solid 2px ${props => props.theme.lightGrey};
`;

const SearchOutputPanel = ({ results, search }) => {
    // return (
    //     <SearchContainer>
    //         {results.length > 0 ? (
    //             <>
    //                 <SearchFilters />
    //                 <SearchOutput results={results} search={search} />
    //             </>
    //         ) : <Empty />}
    //     </SearchContainer>
    // )
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
                                    {filter === "Indicators" ? <SearchOutput results={results} search={search} /> : filter}
                                </TabPane>
                            )
                        })}
                    </Tabs>
                </>
            ) : <Empty />}
        </SearchContainer>
    )
};

const SearchFilters = () => {

    const filters = ["Indicators", "Subtopics", "Indicators"];

    return (
        <StyledSearchFilters>
            {filters.map(filter => <StyledSearchFilter>{filter}</StyledSearchFilter>)}
        </StyledSearchFilters>
    )
}

export default SearchOutputPanel;
