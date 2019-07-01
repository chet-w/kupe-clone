import React from 'react';
import styled from "styled-components";
import { Tabs } from 'antd';

import Container from "./ui/container";
import Breadcrumb from "./breadcrumb";
import TopicHeading from "./topicheading";
import PageHeading from "./ui/pageheading";
import IndicatorDescription from "./indicatordescription";

import OverviewTab from './overviewtab';

const { TabPane } = Tabs;

const Wrapper = styled.div`
    width: 60%;
`;

const IndicatorPageBody = ({ topic, subtopic, indicator, allPrevData }) => {

    // Latest year 
    const latestYear = Math.max(...allPrevData
        .filter(record => record.group === "Total")
        .map(record => record.year));

    // Overview card data
    const overviewCardData = allPrevData
        .filter(record => record.group === "Total" && record.year === latestYear)[0];


    return (
        <Container direction="column" padding="20px 0">
            <Breadcrumb items={[topic, subtopic, indicator]} />
            <Wrapper>
                <TopicHeading topic={topic} />
                <PageHeading text={indicator} />
                <IndicatorDescription />
            </Wrapper>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Overview" key="1">
                    <OverviewTab indicator={indicator} data={overviewCardData}/>
                </TabPane>
                <TabPane tab="Prevalence / Mean" key="2">
                    Content of Tab Pane 2
                 </TabPane>
                <TabPane tab="Subgroups comparison" key="3">
                    Content of Tab Pane 3
                </TabPane>
                <TabPane tab="Changes over time" key="4">
                    Content of Tab Pane 4
                </TabPane>
            </Tabs>
        </Container>
    )
}

export default IndicatorPageBody
