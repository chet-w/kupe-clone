import React from "react";
import styled from "styled-components";
import { toPath } from "../lib/helpers";
import { device } from "../lib/device";


const Wrapper = styled.div`
    display: flex;

    @media ${device.mobileM} {
        max-height: 160px;
    }
`;

const StyledTopicHeading = styled.h2`
    margin: 20px 0;
    font-weight: ${props => props.isMainheading ? "bold" : 500};
`;

const Icon = styled.img`
    width: 40px;
    margin-right: 15px;
`;

const TopicHeading = ({ topic, isMainheading=false }) => {
    return (
        <Wrapper>
            <Icon src={require(`../images/topic-icons/${toPath(topic)}.svg`)} />
            <StyledTopicHeading isMainheading={isMainheading}>{topic}</StyledTopicHeading>
        </Wrapper>
    )
}

export default TopicHeading;
