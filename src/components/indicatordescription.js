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

const QuestionText = styled.div`
    font-weight: bold;
`;

const OptionList = styled.ul`
        padding-left: 20px;

        & li {
            margin: 0;
        }
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
                    longHidden
                    questions {
                        leadIn
                        question
                        options
                        answers
                    }
                }
            }
        }
    `).allIndicatorDescriptionsJson.nodes;

    const data = res.filter(desc => desc.indicator === indicator)[0];

    console.log(data);

    const getLongDescription = () => {
        return {
            __html: data.longDescription
        }
    };

    const getHiddenLongDescription = () => {
        return {
            __html: data.longHidden
        }
    };

    return (
        data ? (<Collapse bordered={false} defaultActiveKey={['0']}>
            <Panel showArrow={false} header={<Description dangerouslySetInnerHTML={getLongDescription()}></Description>} key="1">
                {data.longHidden && <div dangerouslySetInnerHTML={getHiddenLongDescription()}></div>}
                {data.questions[0].question && <QuestionLead>Question{data.questions.length > 1 ? "s" : ""}:</QuestionLead>}
                {data.questions.map(q => <Question question={q} />)}
            </Panel>
        </Collapse>) : (
                <div>{indicator}</div>
            )
    )
};

const Question = ({ question }) => {

    const getAnswerText = () => {
        let answerText = question.answers.join(" / ");
        console.log(answerText);
        if(answerText === "Yes / No") {
            return "Yes/No";
        } 
        return answerText;
    };

    const getOptionsText = () => (
        <OptionList>
            {question.options.map(opt => <li>{opt}</li>)}
        </OptionList>
    );

    return (
        <QuestionsBody>
            <Context>{question.leadIn}</Context>
            <QuestionText>{question.question}</QuestionText>
            {question.options && getOptionsText()}
            { !!question.answers.length && <Answers>
                ({getAnswerText()})
            </Answers> }
        </QuestionsBody>
    )
};


export default IndicatorDescription;
