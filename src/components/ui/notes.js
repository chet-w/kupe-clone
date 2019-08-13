import React from 'react';
import styled from "styled-components";
import {device} from "../../lib/device";

const StyledNotes = styled.ul`
    font-size: 12px;
    padding-left: 15px;

    & li {
        margin: 0;
    }

    @media ${device.mobileM} {
        font-size: 16px;
    }
`;

const NotesHeading = styled.h6`
    font-weight: 400;
    margin: 0 0 5px 0; 
    font-size: 12px;

    @media ${device.mobileM} {
        font-size: 16px;
    }
`;


const Notes = ({ type }) => {
    let items = []
    if(type === "subtopics") {
        items = [
            "Dashes indicate the data is not available.",
            "For Total response this is due to the question/s not being asked in that survey wave.",
            "For specific ethnicity totals, it may be due to the question not being asked or due to small sample size."
        ];
    } 
    return (
        <>
        <NotesHeading>
        Notes:
        </NotesHeading>
        <StyledNotes>
            {items.map(item => <li>{item}</li>)}
        </StyledNotes>
        </>
    )
}

export default Notes
