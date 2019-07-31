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

const IndicatorDescription = ({ indicator }) => {
    // const description = "New Zealand adults who support reducing the hours when alcohol can be sold in the community where they live."

    const res = useStaticQuery(graphql`
        query MyQuery {
            allIndicatorDescriptionsJson {
                nodes {
                    indicator
                    topic
                    subtopic
                    shortDescription
                    longDescription
                    questions {
                        leadIn
                        question
                        answers
                    }
                }
            }
        }
    `).allIndicatorDescriptionsJson.nodes;

    const data = res.filter(desc => desc.indicator === indicator)[0];

    return (
        <Collapse bordered={false} defaultActiveKey={['1']}>
            <Panel showArrow={false} header={<Description>{data.shortDescription}</Description>} key="1">
                <QuestionLead>Question{data.questions.length > 1 ? "/s" : ""}:</QuestionLead>
                {data.questions.map(q => (
                    <QuestionsBody>
                        <Context>{q.leadIn}</Context>
                        <Question>{q.question}</Question>
                        <Answers>
                            ({q.answers.map((answer, i) => i !== q.answers.length - 1 ? ` ${answer} /` : ` ${answer} ` )})
                        </Answers>
                    </QuestionsBody>
                ))}
            </Panel>
        </Collapse>
    )
};


export default IndicatorDescription;
