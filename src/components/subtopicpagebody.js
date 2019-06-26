import React from "react";
import styled from "styled-components";
import Container from "./ui/container";
import TopicHeading from "./topicheading";
import Breadcrumb from "./breadcrumb";
import PageHeading from "./ui/pageheading";
import PrevalenceText from "./prevalencetext";


const StyledPrelude = styled.div`
    width: 50%;

    & p {
        margin-bottom: 10px;
    }
`;


const SubtopicPageBody = ({topic, subtopic, description, indicators }) => {

    return (
        <Container direction="column" padding="20px 0">
            <Breadcrumb items={[topic, subtopic]} />
            <TopicHeading topic={topic} />
            <PageHeading text={subtopic}/>
            <SubtopicPrelude description={description}/>
            <PrevalenceText />
        </Container>
    )
};

const SubtopicPrelude = ({ description }) => (
    <>
        <StyledPrelude>
            <p>{description}</p>
        </StyledPrelude>
    </>
);

export default SubtopicPageBody;