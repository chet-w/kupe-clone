import React, { useState } from 'react';
import styled, { keyframes } from "styled-components";
import { Input, Icon, Button, Modal } from 'antd';
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
                    prefix={<Icon type="search" />}
                    enterButton={<Button type="primary" loading={isSearchLoading}>{isSearchLoading ? "Searching" : "Search"}</Button>}
                    size="large"
                    onSearch={value => handleSearch()}
                    className="search-bar"
                    autoFocus
                />
                <button onClick={() => handleClose()}><Icon type={"close"} /></button>
            </StyledPanel>
            <Modal
                title="Search results"
                visible={showResults}
                onOk={e => setShowResults(false)}
                onCancel={e => setShowResults(false)}
                className="search-results-modal"
            >
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in quam a dolor aliquet facilisis. Vivamus at nulla lacus. Nam et feugiat arcu. Quisque egestas id urna a porta. Vestibulum mollis tortor ac justo fringilla accumsan. Aliquam bibendum elit non ornare vestibulum. Sed quis dapibus nisl. Aenean tincidunt ornare risus accumsan vestibulum. Sed blandit tempus erat vel efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus.
    
    Donec nec metus magna. Nunc vel tristique odio. Nunc eu arcu sed lectus pharetra porta. Nulla eget augue eu ante maximus luctus. Phasellus at tellus consectetur, volutpat felis id, pellentesque velit. Fusce in enim eu enim venenatis rhoncus. Pellentesque eget gravida augue. Suspendisse ac mollis ante. Morbi in lorem cursus, ornare purus at, sodales ex.
                </p>

            </Modal>
        </>
    )
}

export default SearchPanel;
