import React from 'react';
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { Collapse } from "antd";

const { Panel } = Collapse;

const Description = styled.p`
    position: relative;
    margin: 0;
`;

const QuestionLead = styled.h6`
    font-size: 14px;
    font-weight: bold;
`;

const QuestionsBody = styled.div`
    padding-left: 40px;
`;

const Context = styled.div`
    font-weight: bold;
    margin-bottom: 10px;
`;

const Question = styled.div`
    font-weight: bold;
`;

const Answers = styled.div`
    font-weight: normal;
`;

const IndicatorDescription = () => {
    const description = "New Zealand adults who support reducing the hours when alcohol can be sold in the community where they live."
   
    // const data = useStaticQuery(graphql`
    //     query 
    // `)
   
    return (
        <Collapse bordered={false} defaultActiveKey={['1']}>
            <Panel showArrow={false} header={<Description>{description}</Description>} key="1">
                <QuestionLead>Question:</QuestionLead>
                <QuestionsBody>
                    <Context>Please tell me how much you would support or oppose the following changes, if they were made to help reduce the problems associated with alcohol use.</Context>
                    <Question>Reducing the hours when alcohol can be sold in my community where I live.</Question>
                    <Answers>(Strongly support / Support / Neither support nor oppose / Oppose / Strongly oppose)</Answers>
                </QuestionsBody>
            </Panel>
        </Collapse>
    )
};


export default IndicatorDescription;
