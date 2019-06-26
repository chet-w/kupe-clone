import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import SubtopicPageBody from "../components/subtopicpagebody";
import { dePath } from '../lib/helpers';
import { graphql } from 'gatsby';

const SubtopicPage = ({ data, location }) => {

    const noLeadingSlash = location.pathname.substring(1);
    const topic = dePath(noLeadingSlash.substring(0, noLeadingSlash.indexOf("/")));
    const subtopic = dePath(noLeadingSlash.substring(noLeadingSlash.indexOf("/") + 1));

    const indicators = data.allIndicatorsJson.edges.filter(edge => {
        return edge.node.subtopic === subtopic;
    }).map(edge => {
        return {
            indicator: edge.node.indicator,
            description: edge.node.shortDescription
        }
    });

    const subtopicDescription = data.allSubtopicDescriptionsJson.edges.filter(edge => {
        return edge.node.name === subtopic;
    })[0].node.description;

    return (
        <Layout>
            <SEO title="Home" />
            <SubtopicPageBody
             topic={topic}
             subtopic={subtopic}
             description={subtopicDescription}
             indicators={indicators}
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
    }
`;

export default SubtopicPage;