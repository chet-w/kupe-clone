import React from 'react';

import Container from "./ui/container";
import Breadcrumb from "./breadcrumb";
import TopicHeading from "./topicheading";
import PageHeading from "./ui/pageheading";


const IndicatorPageBody = ({ topic, subtopic, indicator }) => {
    return (
        <Container direction="column" padding="20px 0">
            <Breadcrumb items={[topic, subtopic, indicator]} />
            <TopicHeading topic={topic} />
            <PageHeading text={indicator}/>
        </Container>
    )
}

export default IndicatorPageBody
