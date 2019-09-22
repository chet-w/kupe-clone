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
    const indicator = dePath(subtopicPathWithInd.substring(subtopicPathWithInd.indexOf("/") + 1));

    // Data for charts and tables
    const allPrevalences = data.allPrevalencesJson.nodes;
    const allComparisons = data.allComparisonsJson.nodes;
    const allTimeseries = data.allTimeseriesJson.nodes;

    // Whether the indicator is prevalence or mean
    const { measureType } = data.allIndicatorsJson.nodes[0];
    const { measureUnit } = data.allIndicatorsJson.nodes[0];

    return (
        <Layout>
            <SEO title="Home" />
            <IndicatorPageBody
                topic={topic}
                subtopic={subtopic}
                indicator={indicator}
                indId={data.allPrevalencesJson.nodes[0].indicator}
                allPrevData={allPrevalences}
                allCompData={allComparisons}
                allTimeData={allTimeseries}
                measureUnit={measureUnit}
                measureType={measureType}
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
    allComparisonsJson(filter: {indicator: {eq: $id}}) {
      nodes {
        indicator
        population
        year
        adjusted_for
        adjusted_rate_ratio
        adjusted_rate_ratio_high_CI
        adjusted_rate_ratio_low_CI
        comparison
      }
  }
  allTimeseriesJson(filter: {indicator: {eq: $id}}) {
    nodes {
      indicator
      group
      percent_12
      percent_14
      percent_16
      percent_18
      p_value_16_12
      p_value_16_14
      p_value_18_12
      p_value_18_14
      p_value_18_16
    }
  }
  allIndicatorsJson(filter: {indicator: {eq: $id}}) {
    nodes {
      measureType
      measureUnit
      indicator
    }
  }

    }
`;

export default IndicatorPage;
