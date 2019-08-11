import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo";
import Hero from "../components/hero";
import SplashExplore from "../components/splashexplore";
import TopicCards from "../components/topiccards";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <SplashExplore />
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

