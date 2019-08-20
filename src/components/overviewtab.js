import React from 'react';
import styled from "styled-components";
import OverviewCard from "./overviewcard";
import TimeseriesCard from './timeseriescard';
import AgeSexCard from './agesexcard.js';
import PageSubeading from './ui/pagesubheading';
import EthnicityCard from './ethnicitycard';
import { device } from "../lib/device";

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    @media ${device.mobileM} {
        flex-direction: column
    } 
`;

const StyledOverviewCard = styled.div`
    width: calc(50% - 10px);
    background: ${props => props.theme.lightGrey};
    padding: 15px;

    &:nth-of-type(even) {
        margin: 10px 0 10px 10px;
    }

    &:nth-of-type(odd) {
        margin: 10px 10px 10px 0;
    }

    @media ${device.mobileM} {
        width: 100%;
        margin: 10px 0;
    } 
`;

const OverviewTab = ({ indicator, overviewData, timeseriesData, ageSexData, ethnicityData }) => {

    return (
        <>
            <PageSubeading text={`${overviewData.year} Health and Lifestyles Survey`} />
            <Wrapper>
                <StyledOverviewCard>
                    <OverviewCard data={overviewData}/>
                </StyledOverviewCard>
                <StyledOverviewCard>
                    <TimeseriesCard data={timeseriesData}/>
                </StyledOverviewCard>
                <StyledOverviewCard>
                    <AgeSexCard data={ageSexData}/>
                </StyledOverviewCard>
                <StyledOverviewCard>
                    <EthnicityCard data={ethnicityData}/>
                </StyledOverviewCard>
            </Wrapper>
        </>
    )
}

export default OverviewTab;
