import React from 'react'
import { graphql, Link } from 'gatsby';
import Layout from "../components/layout";
import SEO from "../components/seo";
import TopicPageBody from "../components/topicpagebody";
import { toPath, dePath } from '../lib/helpers';

const TopicPage = ({ data, location }) => {
    
    const currentTopic = location.pathname.substring(1);
    const allIndicators = data.allIndicatorsJson.edges.map(edge => {
        return {
            indicator: edge.node.indicator,
            subtopic: edge.node.subtopic,
            topic: edge.node.topic,
            shortDescription: edge.node.shortDescription
        };
    });
    const topicIndicators = allIndicators.filter(indicator => toPath(indicator.topic) === currentTopic);
    const currentSubtopics = Array.from(new Set(topicIndicators.map(indicator => indicator.subtopic)));

    const description = data.allTopicDescriptionsJson.edges
    .filter(edge => edge.node.name === dePath(currentTopic))[0].node.description;

    const subtopicDescriptions = data.allSubtopicDescriptionsJson.edges
    .filter(edge => currentSubtopics.includes(edge.node.name))

    return (
        <Layout>
            <SEO title="Home" />
            <TopicPageBody
             topic={dePath(currentTopic)}
             description={description}
             subtopicDescriptions={subtopicDescriptions}
            />
        </Layout>
    )
}

export const topicQuery = graphql`
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
        allTopicDescriptionsJson {
            edges {
            node {
                name
                description
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

export default TopicPage
