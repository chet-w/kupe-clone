import React from 'react';
import styled from "styled-components";

import PageSubheading from "./ui/pagesubheading";

const Wrapper = styled.div`
    width: 50%;

`;

const PrevalenceText = () => {
    return (
        <Wrapper>
            <PageSubheading text={"Prevalence for selected subtopic"}/>
            <p>This table gives the percentage of the population affected (that is, the unadjusted prevalence in the specified population). Click on an indicator to find out more about it.</p>
        </Wrapper>
    )
}

export default PrevalenceText;
