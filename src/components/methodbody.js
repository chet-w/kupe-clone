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

    & ul {
        padding-left: 20px;

        & li {
            margin: 0;
        }
    }
`;

const References = styled.div`
    & p {
        margin: 5px;
    }
`;

const MethodContainer = styled.div`
    max-width: 600px;
`;

const MethodBody = () => (
    <Container direction={"column"} padding={"20px 0"}>
        <MethodContainer>
            <Breadcrumb items={["Method"]} />
            <PageHeading text={"Method"} style={{ marginBottom: 0 }} />
            <MethodBodySection title={"Overview of survey design"}>
                <p>This section provides an overview of the survey design for the latest
                     year of the Health and Lifestyles Survey
                 (HLS; click <a href="https://www.hpa.org.nz/sites/default/files/Health%20and%20Lifestyles%20Survey%20Methodology%20Report%202018.pdf" target="_blank" rel="noopener noreferrer">
                        here </a>
                    for further details).</p>
                <PageSubheading text="When did the survey take place?" style={{ marginTop: 0 }} />
                <p>The 2018 interviews were completed between 2 May and 10 October 2018.</p>
                <PageSubheading text="How were people selected for the survey?" style={{ marginTop: 0 }} />
                <p>The 2018 HLS was designed to be nationally representative. A primary consideration in the sample design was the need for sufficient sample sizes of ethnic subgroups: Māori, Pacific people and people of European/Other ethnicities. The survey used a three-stage selection procedure: stratifying and selecting meshblocks; selecting households from each meshblock; and selecting an individual from within each household to complete the questionnaire. One adult and one parent/caregiver (if any) were selected from the lists of those who were eligible in each household using the following protocols. First a parent/caregiver was selected if there were children living in the house. An adult was then selected for the Adult survey. Sometimes the same respondent completed both the Adult and the Parent/caregiver survey. It was also possible that the two surveys were completed by two different people in the same household.</p>
                <PageSubheading text="How many people took part?" style={{ marginTop: 0 }} />
                <p>Of those invited to participate in the survey in 2018, 75% of adults (<em>n</em> = 2,725) and 81% of parents or primary caregivers (<em>n</em> = 827) participated. The table below summarises the number of survey respondents in 2018 by ethnicity and sex.</p>
                <MethodPopulationTable />
                <p>The sample sizes for each HLS were:
                    <ul>
                        <li><strong>2012</strong>: 2,672 </li>
                        <li><strong>2014</strong>: 2,594 </li>
                        <li><strong>2016</strong>: 3,854 </li>
                        <li><strong>2018</strong>: 2,725</li>
                    </ul>
                </p>
                <PageSubheading text="How was data collected?" />
                <p>The most recent survey data was collected by professional social research surveyors from CBG Health Research Ltd. Data collection involved a face-to-face interview in the survey respondents' homes. Interviewers entered responses directly into laptop computers, with some questions being completed by the respondents independently. Showcards with predetermined response categories were used to assist respondents where appropriate.</p>
            </MethodBodySection>
            <MethodBodySection title="Overview of analysis">
                <p>This section provides a brief description of the methods and derived variables used for the HLS data within Kupe. A full methodology report and specific analyses of all HLS publications can be viewed on <a href="https://www.hpa.org.nz/research-library/research-publications" target="_blank" rel="noopener noreferrer">HPA's website</a>.</p>
                <PageSubheading text="Ethnicity" />
                <p>Both total response and prioritised ethnicity have been used in Kupe.</p>
                <ul>
                    <li>Total response ethnicity means that people who reported belonging to more than one ethnic group are counted once in each group they reported.</li>
                    <li>Prioritised ethnicity means that a respondent is allocated to a single ethnicity even when they reported belonging to more than one ethnic group. The prioritised order is Māori, Pacific, Asian, then European/Other.</li>
                </ul>
                <p>Further details of these output options are in the Health Information Standards Organisation (HISO) Ethnicity Data Protocols (Ministry of Health, 2017).</p>
                <PageSubheading text="Deprivation" />
                <p>NZDep2013 is a small-area-based index. It provides a measure of neighbourhood deprivation, by looking at the comparative socioeconomic positions of small areas and assigning them decile numbers, from least deprived (1) to most deprived (10). The index is based on nine socioeconomic variables from the 2013 Census. Please click <a href="https://www.health.govt.nz/our-work/populations/maori-health/tatau-kahukura-maori-health-statistics/nga-awe-o-te-hauora-socioeconomic-determinants-health/neighbourhood-deprivation" target="_blank" rel="noopener noreferrer">here</a> for more information.</p>
                <PageSubheading text="Subgroups comparison for binary indicators" />
                <p>The aim of these analyses was to understand how the risk by each indicator varied across demographic subgroups (such as sex) while adjusting for other factors such as age.</p>
                <p>We used a quasi-Poisson regression model with a logarithm link function (Lumley, 2011) to estimate relative risks (RRs) and related 95% confidence intervals (CIs) for binary indicators.</p>
                <p>We replaced estimates by dashes when we had any of the following indications of unreliability:</p>
                <ul>
                    <li>Fewer than 10 "events per parameter" in the model. This follows the guideline for logistic regression outlined in Hosmer et al (2013), pp407-408.</li>
                    <li>Unusually wide confidence intervals, that is, whenever the width of the CI is greater than or equal to 4 times the ratio estimate.</li>
                    <li>We applied a conservative approach to ratio estimates and suppressed those that were greater than 7 or less than 1/7.</li>
                </ul>
                <PageSubheading text="Changes over time" />
                <p>
                    {"The prevalence/mean of each indicator was compared with the most recent available survey year if at least two data points were available. For cases where there was a small sample size ("}<em>n</em> {"< 30) in a particular subgroup, any differences between that group and others are not commented on in the results. This is because the small sample size means that the results are subject to a very wide margin of error."}</p>
                <p>Some of the variation of estimated prevalences/means between survey years could potentially be from changes in the questionnaire.</p>
                <PageSubheading text="Weighting adjustment" />
                <p>Statistical selection weighting adjustments were applied to each HLS dataset to compensate for selection bias. Post-stratification weight was used to ensure that findings from the survey are representative of the New Zealand population with respect to major demographic characteristics such as sex, age, and ethnicity.</p>
                <PageSubheading text="Reliability of survey results - sampling error" />
                <p>We show 95% confidence intervals (95% CI) to indicate the uncertainty in an estimate due to collecting data from only a sample of the population.</p>
                <PageSubheading text="Reliability of survey results - non sampling error" />
                <p>Findings are likely to under- or overestimate some indicators due to the nature of self-reported information. For instance, when a question was asked 'thinking about the last 12 months, how often have you felt that you might have a problem with gambling?' the respondents then responded with either never, sometimes, most of the time, or almost always. Depending on what the respondent considers to be socially desirable, this can lead to over-reporting of good behaviours or under-reporting of risk behaviours. Also asking for the last 12 months assumes respondents can accurately recall previous events over the time period which may not be the case.</p>
                <PageSubheading text="Survey results show associations rather than cause-and-effect relationships" />
                <p>Kupe provides a snapshot of the lifestyles among New Zealand adults at one point in time. Results can be used to look at associations between different factors, such as gambling harm and neighbourhood deprivation. It does not look at cause-and-effect relationships.</p>
                <p>For example, if we find out that a problem with gambling is more common in people living in deprived areas, it does not mean that problem gambling is caused by living in deprived areas.</p>
            </MethodBodySection>
            <MethodBodySection title="Revisions to previously published data">
                <p>Findings obtained from Kupe may differ from previous HPA reports and between Kupe releases for the following reasons:</p>
                <ul>
                    <li>Subgroups comparison: We apply quasi-Poisson models to calculate risk ratios, as described in the Overview of analysis section. The technique has not been used in HPA's previous reports.</li>
                    <li>Benchmarking: Each survey year is now benchmarked to the estimated resident population of New Zealand at the time of the survey year, whereas, in reports before 2016 the survey data was benchmarked to the most recent New Zealand census population.</li>
                    <li>Extreme selection weights: As part of an on-going data quality assurance, in 2018, we trimmed extreme selection weights of all survey years. This was to reduce the overall variation in weights and to increase the reported precision of the estimates.</li>
                    <li>Confidence Intervals: A modified version of the binomial intervals as described in Korn and Graubard (1998) is used in Kupe.</li>
                </ul>
                <PageSubheading text="References" />
                <References>
                    <p>Lumley, T. (2011). <em>Complex surveys: a guide to analysis using R</em> (Vol. 565). Hoboken, New Jersey: John Wiley & Sons.</p>
                    <p>Ministry of Health. (2017). <em>HISO 10001:2017 Ethnicity data protocols</em>. Wellington: Ministry of Health. <a href="https://www.health.govt.nz/publication/hiso-100012017-ethnicity-data-protocols" target="_blank" rel="noopener noreferrer">www.health.govt.nz/publication/hiso-100012017-ethnicity-data-protocols</a></p>
                    <p>Hosmer, D. W., Lemeshow, S., & Sturdivant, R. X. (2013). <em>Applied logistic regression (Third edition)</em>. Hoboken, New Jersey: Wiley.</p>
                    <p>Korn, E. L., & Graubard, B. I. (1998). Confidence intervals for proportions with small expected number of positive counts estimated from survey data. <em>Survey Methodology</em> 24(2): 193-201.</p>
                </References>
            </MethodBodySection>
        </MethodContainer>
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

