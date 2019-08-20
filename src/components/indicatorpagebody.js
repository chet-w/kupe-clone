import React from 'react';
import styled from "styled-components";
import { Tabs } from 'antd';

import Container from "./ui/container";
import Breadcrumb from "./breadcrumb";
import TopicHeading from "./topicheading";
import PageHeading from "./ui/pageheading";
import IndicatorDescription from "./indicatordescription";

import OverviewTab from './overviewtab';
import PrevalenceTab from "./prevalencetab";
import ComparisonsTab from "./comparisonstab";
import TimeseriesTab from "./timeseriestab";
import { ethnicities } from '../lib/config';
import { device } from "../lib/device";

const { TabPane } = Tabs;

const Wrapper = styled.div`
    width: 60%;

    @media ${device.mobileM} {
            width: 100%;
        } 
    
`;

const IndicatorPageBody = ({ topic, subtopic, indicator, allPrevData, allCompData, allTimeData, indId }) => {

    // Available years
    const years = allPrevData
        .filter(record => record.group === "Total")
        .map(record => record.year)

    // Latest year 
    const latestYear = Math.max(...years);

    // Overview card data
    const overviewCardData = allPrevData
        .filter(record => record.group === "Total" && record.year === latestYear)[0];
    // Time trends card data
    const timeseriesData = allPrevData
        .filter(record => record.group === "Total");
    // Age and sex card data
    const ageSexData = allPrevData
        .filter(record => record.group.match(/\d\d-\d\d|\d\d\+/) && record.year === latestYear);
    // Ethnicity card data
    const ethnicityData = allPrevData
        .filter(record => ethnicities.includes(record.group) && record.year === latestYear);



    return (
        <Container direction="column" padding="20px 0">
            <Breadcrumb items={[topic, subtopic, indicator]} />
            <Wrapper>
                <TopicHeading topic={topic} />
                <PageHeading text={indicator} />
                <IndicatorDescription indicator={indId} />
            </Wrapper>
            <Tabs defaultActiveKey="1" tabPosition={"top"}>
                <TabPane tab="Overview" key="1">
                    <OverviewTab
                        indicator={indicator}
                        overviewData={overviewCardData}
                        timeseriesData={timeseriesData}
                        ageSexData={ageSexData}
                        ethnicityData={ethnicityData}
                    />
                </TabPane>
                <TabPane tab="Prevalence / Mean" key="2">
                    <PrevalenceTab data={allPrevData} years={years} />
                </TabPane>
                <TabPane tab="Subgroups comparison" key="3">
                    <ComparisonsTab data={allCompData} latestYear={latestYear} />
                </TabPane>
                <TabPane tab="Changes over time" key="4">
                    <TimeseriesTab data={allTimeData} latestYear={latestYear} years={years} />
                </TabPane>
            </Tabs>
        </Container>
    )
};

export default IndicatorPageBody
