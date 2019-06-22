import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo";
import Hero from "../components/hero";
import TopicCards from "../components/topiccards";
import Container from "../components/ui/container";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <TopicCards />
  </Layout>
)

export default IndexPage
