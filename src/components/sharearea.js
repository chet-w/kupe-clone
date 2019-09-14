import React, { useState } from 'react';
import styled from "styled-components";
import { Icon, message, notification, Button, Drawer } from "antd";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import axios from "axios";
import download from "downloadjs";
import Media from "react-media";
import { toPath } from '../lib/helpers';

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
`;

const ShareButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    & button {
        width: 60px;
        height: 60px;
        border: none;
        background: ${props => props.theme.blueGradient};

        &:focus, &:active {
            background: ${props => props.theme.blueGradient};

            & i {
                font-size: 20px;
                color: white;
            }
        }

        &  i {
            font-size: 20px;
            color: white;
        }
    }

    & label {
        margin-top: 5px;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ShareArea = ({ topic="Alcohol", subtopic="Alcohol Attitudes", indicator=null }) => {


    const [isMobileShareOpen, setMobileShare] = useState(false);

    const toggleMobileShare = () => {
        setMobileShare(!isMobileShareOpen);
    };

    message.config({
        maxCount: 1
    });

    const handleShare = () => {
        message.success("Copied a link to this page to your clipboard!");
    };

    const handlePrint = async () => {
        if(indicator) {
            message.info(`Generating a report for ${topic} > ${subtopic} > ${indicator}. This could take a few seconds.`);
        } else {
            message.info(`Generating a report for ${topic} > ${subtopic}. This could take a few seconds.`);
        }

        await axios.post("http://localhost:5018/print", {
            url: indicator ? `https://kupe-clone.netlify.com/${toPath(topic)}/${toPath(subtopic)}/${toPath(indicator)}`
                : `https://kupe-clone.netlify.com/${toPath(topic)}/${toPath(subtopic)}`,
            level: indicator ? "indicator" : "subtopic",
            subject: {
                topic,
                subtopic,
                indicator
            }
        }).catch(err => message.error("Kupe will need to be online before you can generate a report. Try again when you're back on a network connection."));;
        const res = await axios({
            url: 'http://localhost:5018/download',
            method: 'GET',
            responseType: 'blob',
        })
        if(res){
            message.success("Report download complete!");
            const content = res.headers['content-type'];
            download(res.data, "report.pdf", content);
        }
    };

    const handleCSV = () => {
        message.success("Downloading guy");
    };

    const defaultShare = (
        <StyledShareArea>
                <Icon type="share-alt" />
                <ShareOptions>
                    <h5>Share</h5>
                    <li><button onClick={() => handleCSV()}>Download the data (csv)</button></li>
                    <li>
                    <CopyToClipboard
                        text={"https://kupe-clone.netlify.com"}
                        onCopy={() => handleShare()}
                    >
                        <button>Share this page</button>
                    </CopyToClipboard>
                    </li>
                    <li><button onClick={() => handlePrint()}>Print a report</button></li>
                </ShareOptions>
            </StyledShareArea>
    );

    const mobileShare = (
        <>
            <Button shape={"circle"} className="mobile-share-button" onClick={() => toggleMobileShare()}>
                <Icon type="share-alt" />
            </Button>
            <Drawer 
             wrapClassName={"mobile-share-drawer"}
             title={"Share"}
             placement={"bottom"}
             visible={isMobileShareOpen}
             onClose={() => toggleMobileShare()}
             closable
            >
                <ShareButtonsContainer>
                    <ButtonGroup>
                        <Button onClick={() => { 
                            handleCSV();
                            toggleMobileShare();
                        }} shape={"circle"}><Icon type="download" /></Button>

                        <label>Download data</label>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button onClick={() => {
                            handleShare();
                            toggleMobileShare();
                        }} shape={"circle"}><Icon type="copy" /></Button>
                        <label>Copy link</label>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button onClick={() => {
                            handlePrint();
                            toggleMobileShare();
                        }} shape={"circle"}><Icon type="file" /></Button>
                        <label>Print report</label>
                    </ButtonGroup>
                </ShareButtonsContainer>
            </Drawer>
        </>
    );

    return (
        <Container>
            <Media query="(max-width: 768px)">
                {matches => matches ? mobileShare : defaultShare}
            </Media>
        </Container>
    )
}

export default ShareArea
