import React from 'react';
import styled from "styled-components";
import { Icon, message, notification } from "antd";
import { CopyToClipboard } from 'react-copy-to-clipboard';

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

        & button {
            margin: 0;
            padding: 0;
            border: none;
            background: none;
            cursor: pointer;
            transition: all 0.3s ease;

            &:hover {
                color: ${props => props.theme.lightBlue};
            }
        }
    }
`

const ShareArea = props => {

    message.config({
        maxCount: 1
    });

    notification.config({
        duration: 3
    });

    const handleShare = () => {
        message.success("Copied a link to this page to your clipboard!");
    };

    const handlePrint = () => {
        notification.open({
            message: 'Generating report',
            description: (
                <p>Generating a report for Alcohol > Alcohol attitudes.<br/>
                This could take few seconds.</p>
            ),
            onClick: () => {
              console.log('Notification Clicked!');
            },
          });
    };

    return (
        <Container>
            <StyledShareArea>
                <Icon type="share-alt" />
                <ShareOptions>
                    <h5>Share</h5>
                    <li><button>Download the data (csv)</button></li>
                    <li>
                    <CopyToClipboard
                        text={typeof document !== undefined ? document.location : ""}
                        onCopy={() => handleShare()}
                    >
                        <button>Share this page</button>
                    </CopyToClipboard>
                    </li>
                    <li><button onClick={() => handlePrint()}>Print a report</button></li>
                </ShareOptions>
            </StyledShareArea>
        </Container>
    )
}

export default ShareArea
