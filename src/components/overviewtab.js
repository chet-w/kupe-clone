import React from 'react';
import styled from "styled-components";
import OverviewCard from "./overviewcard";

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
`;

const StyledOverviewCard = styled.div`
    width: 50%;
    background: ${props => props.theme.lightGrey};
    padding: 15px;
`;

const OverviewTab = ({ indicator, data }) => {

    return (
        <Wrapper>
            <StyledOverviewCard>
                <OverviewCard data={data}/>
            </StyledOverviewCard>
        </Wrapper>
    )
}

export default OverviewTab;
