import React from 'react';
import styled from "styled-components";

const Source = styled.div`
    color: ${props => props.theme.medGrey};
    margin: 30px 0;
    font-size: 12px;
`;

const SourceText = () => {
    return (
        <Source>
            Source: Health and Lifestyles Survey
        </Source>
    )
}

export default SourceText
