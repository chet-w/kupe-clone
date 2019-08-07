import React, { useState } from 'react';
import styled, { keyframes } from "styled-components";
import { Input, Icon, Button } from 'antd';
import SearchDrawer from './searchdrawer';

const { Search } = Input;

const SearchPanelExpand = keyframes`
    from { width: 0; opacity: 0 }
    to { width: 100%; opacity: 1 }
`;

const SearchPanelRetract = keyframes`
    from { width: 100%; opacity: 1 }
    to { width: 0; opacity: 0 }
`;

const StyledPanel = styled.div`
    position: absolute;
    height: 100%;
    width: 0;
    opacity: 0;
    right: 0;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s ease;
    animation: ${props => props.animation ? SearchPanelRetract : SearchPanelExpand} 0.5s ease forwards;
    z-index: 1;

    & button {
        background: white;
        border: none;
        cursor: pointer;
    }
`;

const SearchPanel = ({ toggleOpen }) => {

    const handleClose = () => {
        setShouldFadeOut(true);
        setTimeout(() => toggleOpen(false), 500);
    };

    const handleSearch = searchText => {
        setIsSearchLoading(true);
        setTimeout(() => {
            setShowResults(true)
            setIsSearchLoading(false)
        }, 1200);
    };

    const [shouldFadeOut, setShouldFadeOut] = useState(false);
    const [isSearchLoading, setIsSearchLoading] = useState(false);
    const [showResults, setShowResults] = useState(false);

    return (
        <>
            <StyledPanel animation={shouldFadeOut}>
                <Search
                    placeholder="Enter some text to search Kupe"
                    prefix={<Icon type="search"/>}
                    enterButton={<Button type="primary" loading={isSearchLoading}>{ isSearchLoading ? "Searching" : "Search"}</Button>}
                    size="large"
                    onSearch={value => handleSearch()}
                    className="search-bar"
                    autoFocus
                />
                <button onClick={() => handleClose()}><Icon type={"close"} /></button>
            </StyledPanel>
            { showResults &&
             <SearchDrawer
              toggleIsOpen={setShowResults.bind(this)}
              isOpen={showResults}
              searchText={"Alcohol"}
             />
            }
        </>
    )
}

export default SearchPanel;
