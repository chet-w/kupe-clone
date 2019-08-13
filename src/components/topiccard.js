import React from 'react';
import styled from "styled-components";
import { toPath } from "../lib/helpers";
import { device } from "../lib/device";

const StyledTopicCard = styled.div`
    width: 300px;
    min-height: 150px;
    padding: 15px;
    color: ${props => props.theme.black};


    & h2 {
        font-size: 22px;
        margin-bottom: 0;
        margin-left: 10px;
    }
`;

const CardHeader = styled.div`
    display: flex;
    align-items: center;
`;

const CardIcon = styled.img`
    width: 40px;
`;

const CardBody = styled.div`
    font-size: 14px;
    line-height: 18px;
    margin-top: 10px;

    @media ${device.mobileM} {
        font-size: 18px;
        line-height: 24px;
    }
`;

const TopicCard = ({ topic }) => {
    const { name, description } = topic;
    let formattedName = toPath(name);
    

    return (
        <StyledTopicCard>
            <CardHeader>
                <CardIcon src={require(`../images/topic-icons/${formattedName}.svg`)}/>
                <h2>{name}</h2>
            </CardHeader>
            <CardBody>
                {description}
            </CardBody>
        </StyledTopicCard>
    )
};


export default TopicCard
