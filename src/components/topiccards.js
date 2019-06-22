import React from 'react';
import styled from "styled-components";
import Container from "./ui/container";

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;
`;

const TopicCard = styled.div`
    width: 300px;
    height: 150px;
    background: #0080a4;
    margin: 15px;
`;

const TopicCards = () => {

    const topics = [
        { name: "Alcohol", description: "dummy text - this will get its own dynamic content later." },
        { name: "Eating", description: "dummy text - this will get its own dynamic content later." },
        { name: "Gambling", description: "dummy text - this will get its own dynamic content later." },
        { name: "M\u0101ori cultural identity", description: "dummy text - this will get its own dynamic content later." },
        { name: "Mental health and wellbeing", description: "dummy text - this will get its own dynamic content later." },
        { name: "Sun exposure", description: "dummy text - this will get its own dynamic content later." },
        { name: "Tobacco", description: "dummy text - this will get its own dynamic content later." }
    ];


    return (
        <Container justify="center">
            <CardsContainer>
                {topics.map(topic => {
                    return (
                        <TopicCard>
                            {topic.name}
                        </TopicCard>
                    )
                })}
            </CardsContainer>
        </Container>
    )
}

export default TopicCards
