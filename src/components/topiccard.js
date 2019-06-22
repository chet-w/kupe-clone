import React from 'react';
import styled from "styled-components";

const StyledTopicCard = styled.div`
    width: 300px;
    min-height: 150px;
    margin: 15px;
    padding: 15px;
    box-shadow: ${props => props.theme.shadow};

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
`;

const TopicCard = ({ topic }) => {
    const { name, description } = topic;
    let formattedName = name.toLowerCase().replace(/ /g, "-");
    if(formattedName.includes("\u0101")) {
        formattedName = formattedName.replace("\u0101", "a");
    }

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
}

export default TopicCard
