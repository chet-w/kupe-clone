import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import SubtopicPageBody from "../components/subtopicpagebody";
import { dePath } from '../lib/helpers';
import { graphql } from 'gatsby';

const SubtopicPage = ({ data, location }) => {

    // Format Topic name
    const noLeadingSlash = location.pathname.substring(1);
    const topic = dePath(noLeadingSlash.substring(0, noLeadingSlash.indexOf("/")));
    // The current Subtopic
    const subtopic = dePath(noLeadingSlash.substring(noLeadingSlash.indexOf("/") + 1));
    // Indicators for this subtopic
    const indicators = data.allIndicatorsJson.edges.filter(edge => {
        return edge.node.subtopic === subtopic;
    }).map(edge => {
        return {
            indicator: edge.node.indicator,
            description: edge.node.shortDescription,
            measureType: edge.node.measureType,
            measureUnit: edge.node.measureUnit
        }
    });

    // Subtopic description
    let subtopicDescription;
    try {
        subtopicDescription = data.allSubtopicDescriptionsJson.edges.filter(edge => {
            return edge.node.name === subtopic;
        })[0].node.description;
    } catch (e) {
        subtopicDescription = "Failed";
    }


    // Indicator data 
    const indicatorIDs = indicators.map(ind => ind.indicator);
    const originalGroups = ["Total", "Māori", "Pacific", "Asian", "European/Other"];

    const indicatorData = data.allPrevalencesJson.nodes.filter(value => {
        return indicatorIDs.includes(value.indicator) &&
            originalGroups.map(group => group.replace("ā", "a")).includes(value.group);
    });

    const desiredGroups = Array.from(new Set(indicatorData.map(record => record.group)));

    return (
        <Layout>
            <SEO title="Home" />
            <SubtopicPageBody
             topic={topic}
             subtopic={subtopic}
             description={subtopicDescription}
             indicators={indicators}
             indicatorData={indicatorData}
             filterGroups={desiredGroups}
            />
        </Layout>
    )
}

export const getAllIndicators = graphql`
    query {
        allIndicatorsJson {
            edges {
            node {
                indicator
                shortDescription
                subtopic
                topic
                measureType
                measureUnit
            }
            }
        }
        allSubtopicDescriptionsJson {
            edges {
            node {
                name
                description
            }
            }
        }
        allPrevalencesJson {
            nodes {
                indicator
                group
                year
                total
            }
        }
    }
`;

export default SubtopicPage;