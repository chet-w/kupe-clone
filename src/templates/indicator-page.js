import React from 'react'
import Layout from "../components/layout";
import SEO from "../components/seo";
import { dePath } from "../lib/helpers";
import IndicatorPageBody from "../components/indicatorpagebody";
import { graphql } from 'gatsby';

const IndicatorPage = ({ data, location }) => {
    // Format Topic name
    const noLeadingSlash = location.pathname.substring(1);
    const topic = dePath(noLeadingSlash.substring(0, noLeadingSlash.indexOf("/")));
    // The current Subtopic
    const subtopicPathWithInd = noLeadingSlash.substring(noLeadingSlash.indexOf("/") + 1);
    const subtopic = dePath(subtopicPathWithInd.substring(0, subtopicPathWithInd.indexOf("/")));
    const indicator = dePath(subtopicPathWithInd.substring(subtopicPathWithInd.indexOf("/") +1 ));

    // Data for charts and tables
    const allPrevalences = data.allPrevalencesJson.nodes;

    return (
        <Layout>
            <SEO title="Home" />
            <IndicatorPageBody
              topic={topic}
              subtopic={subtopic}
              indicator={indicator}
              allPrevData={allPrevalences}
            />
        </Layout>
    )
}

export const IndicatorQuery = graphql`
    query($id: String) {
        allPrevalencesJson(filter: {indicator: {eq: $id}}) {
        nodes {
        indicator
        group
        year
        total
        total_high_CI
        total_low_CI
        male
        male_high_CI
        male_low_CI
        female
        female_high_CI
        female_low_CI
        }
    }
    }
`;

export default IndicatorPage;
