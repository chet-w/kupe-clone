import React from 'react';
import { Modal, Tabs, Badge } from "antd";
import SearchOutput from "./searchoutput";

const { TabPane } = Tabs;

const SearchModal = ({ isOpen, toggleOpen, searchText, results }) => {

    const filters = ["Indicators", "Subtopics", "Topics"];


    return (
        <Modal
            title={`Search results for "${searchText}"`}
            visible={isOpen}
            onOk={e => toggleOpen(false)}
            onCancel={e => toggleOpen(false)}
            className="search-results-modal"
            style={{ top: 20 }}
        >
            {results.length > 0 && (
                <>
                    <h4>Categories</h4>
                    <Tabs tabPosition={"left"} className={"search-filters"}>
                        {filters.map((filter, i) => {
                            return (
                                <TabPane tab={
                                    <>{filter} <Badge count={results[i].length}/></>
                                } key={filter}>
                                    <SearchOutput results={results} search={searchText} type={filter} />
                                </TabPane>
                            )
                        })}
                    </Tabs>
                </>
            )}

        </Modal>
    )
}

export default SearchModal
