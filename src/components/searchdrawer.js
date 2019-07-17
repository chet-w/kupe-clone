import React, { useState } from 'react';
import { Drawer, Button, Input } from "antd";
import styled from "styled-components";
import Container from './ui/container';

const SearchHeading = styled.h2`
    margin: 0;
`;

const Footer = styled.div`
    margin-top: 24px;
    position: relative;
    padding: 16px 24px;
    color: rgba(0,0,0,0.65);
    background: #fff;
    border-top: 1px solid #e8e8e8;
    border-radius: 4px 4px 0 0;
    width: 100vw;
    display: flex;
    justify-content: center;
`;

const SearchBody = styled.div`
    margin: 10px 0;
    width: 100%;

`;

const SearchDrawer = ({ isOpen, toggleIsOpen }) => {

    return (
        <Drawer
            title={(
                <Container>
                    <SearchHeading>Search Kupe</SearchHeading>
                </Container>
            )}
            placement="top"
            visible={isOpen}
            closable={false}
            maskClosable={true}
            onClose={e => toggleIsOpen(!isOpen)}
            keyboard={true}
            className="search-drawer"
        >
            <Container>
                <SearchBody>
                    <Input
                        className="search-input"
                        placeholder="What are you looking for?"
                        allowClear
                        autoFocus
                    />
                </SearchBody>
            </Container>
            <Footer>
                <Container justify="flex-end">
                    <Button type="primary" ghost onClick={e => toggleIsOpen(!isOpen)}>
                        Close
                     </Button>
                </Container>
            </Footer>
        </Drawer>

    )
}

export default SearchDrawer;
