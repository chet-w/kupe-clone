import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo";
import Hero from "../components/hero";
import TopicCards from "../components/topiccards";

const IndexPage = ({ data }) => (
  <Layout page="index">
    <SEO title="Home" />
    <Hero />
    <TopicCards topics={data.allTopicDescriptionsJson.edges}/>
  </Layout>
);

export const getAllTopics = graphql`
  query {
    allTopicDescriptionsJson {
      edges {
        node {
          name
          path
          description
        }
      }
    }
  }
`;


export default IndexPage

