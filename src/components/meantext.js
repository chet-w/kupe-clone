import React from 'react';
import styled from "styled-components";
import PageSubheading from "./ui/pagesubheading";

const Wrapper = styled.div`
    width: 50%;

`;

const MeanText = () => {
    return (
        <Wrapper>
            <PageSubheading text={"Mean for selected subtopic"}/>
            <p>This table gives the average value (mean) of the specified population.</p>
        </Wrapper>
    )
}

export default MeanText;
