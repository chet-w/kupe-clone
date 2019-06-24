import React from 'react'
import { graphql, Link } from 'gatsby';
import Layout from "../components/layout";
import SEO from "../components/seo";
import TopicPageBody from "../components/topicpagebody";

const TopicPage = ({ data }) => {
    
    const topic = data.topicDescriptionsJson.name;
    const description = data.topicDescriptionsJson.description;

    return (
        <Layout>
            <SEO title="Home" />
            <TopicPageBody topic={topic} description={description}/>
        </Layout>
    )
}

export const topicQuery = graphql`
    query ($path: String){
        topicDescriptionsJson(path: {eq: $path }) {
            name
            description
        }
    }
`; 

export default TopicPage
