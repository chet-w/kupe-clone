import React from 'react'
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import SEO from "../components/seo";

const SubtopicPage = ({ data }) => {
    console.log(data);
    return (
        <Layout>
            <SEO title="Home" />
            <h2>{data.topicDescriptionsJson.name}</h2>
        </Layout>
    )
}

export const subtopicQuery = graphql`
    query ($path: String){
        topicDescriptionsJson(path: {eq: $path }) {
            name
        }
    }
`; 

export default SubtopicPage
