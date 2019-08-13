import React from 'react';
import styled from "styled-components";
import {device} from "../../lib/device";

const Source = styled.div`
    color: ${props => props.theme.medGrey};
    margin: 30px 0;
    font-size: 12px;

    @media ${device.mobileM} {
        font-size: 16px;
    }
    
`;

const SourceText = () => {
    return (
        <Source>
            Source: Health and Lifestyles Survey
        </Source>
    )
}

export default SourceText
