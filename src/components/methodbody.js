import React from 'react';
import styled from "styled-components";
import Container from './ui/container';
import PageHeading from './ui/pageheading';
import PageSubheading from './ui/pagesubheading';
import Breadcrumb from "./breadcrumb";
import MethodPopulationTable from "./methodpopulationtable";

const MethodSection = styled.section`
    margin-top: 20px;

    & h3 {
        margin: 0 0 10px 0;
    }
`;

const MethodBody = () => (
    <Container direction={"column"} padding={"20px 0"}>
        <Breadcrumb items={["Method"]}/>
        <PageHeading text={"Method"} style={{marginBottom: 0}}/>
        <MethodBodySection title={"Overview of survey design"}>
            <p>This section provides an overview of the survey design for the latest
                 year of the Health and Lifestyles Survey 
                 (HLS; click <a href="https://www.hpa.org.nz/sites/default/files/Health%20and%20Lifestyles%20Survey%20Methodology%20Report%202018.pdf" target="_blank" rel="noopener noreferrer">
                     here </a> 
                 for further details).</p>
            <PageSubheading text="When did the survey take place?" style={{marginTop: 0}} />
            <p>The 2018 interviews were completed between 2 May and 10 October 2018.</p>
            <PageSubheading text="How were people selected for the survey?" style={{marginTop: 0}} />
            <p>The 2018 HLS was designed to be nationally representative. A primary consideration in the sample design was the need for sufficient sample sizes of ethnic subgroups: Māori, Pacific people and people of European/Other ethnicities. The survey used a three-stage selection procedure: stratifying and selecting meshblocks; selecting households from each meshblock; and selecting an individual from within each household to complete the questionnaire. One adult and one parent/caregiver (if any) were selected from the lists of those who were eligible in each household using the following protocols. First a parent/caregiver was selected if there were children living in the house. An adult was then selected for the Adult survey. Sometimes the same respondent completed both the Adult and the Parent/caregiver survey. It was also possible that the two surveys were completed by two different people in the same household.</p>
            <PageSubheading text="How many people took part?" style={{marginTop: 0}} />
            <p>Of those invited to participate in the survey in 2018, 75% of adults (<em>n</em> = 2,725) and 81% of parents or primary caregivers (<em>n</em> = 827) participated. The table below summarises the number of survey respondents in 2018 by ethnicity and sex.</p>
            <MethodPopulationTable/>
        </MethodBodySection>
    </Container>
);

const MethodBodySection = ({ title, children }) => (
    <MethodSection>
            {/* <PageSubheading text={title} style={{marginTop: 0}}/> */}
            <h3>{title}</h3>
            {children}
    </MethodSection>
);

export default MethodBody;

