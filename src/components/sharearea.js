import React from 'react';
import styled from "styled-components";
import { Icon } from "antd";

const Container = styled.div`
    max-width: 300px;
    display: flex;
`;

const StyledShareArea = styled.div`
    display: flex;
    align-items: center;

    & h5 {
        margin: 0;
    }

    & i {
        font-size: 30px;
        margin: 20px;
        color: ${props => props.theme.lightBlue};
    }    
`;

const ShareOptions = styled.ul`
    list-style: none;
    margin: 0;

    & li {
        margin: 0;
    }
`

const ShareArea = props => {
    return (
        <Container>
            <StyledShareArea>
                <Icon type="share-alt" />
                <ShareOptions>
                    <h5>Share</h5>
                    <li>Download data (csv)</li>
                    <li>Share this page</li>
                </ShareOptions>
            </StyledShareArea>
        </Container>
    )
}

export default ShareArea
