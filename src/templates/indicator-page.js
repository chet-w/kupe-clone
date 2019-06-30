import React from 'react'
import Layout from "../components/layout";
import SEO from "../components/seo";
import { dePath } from "../lib/helpers";
import IndicatorPageBody from "../components/indicatorpagebody";

const IndicatorPage = ({ data, location }) => {
    // Format Topic name
    const noLeadingSlash = location.pathname.substring(1);
    const topic = dePath(noLeadingSlash.substring(0, noLeadingSlash.indexOf("/")));
    // The current Subtopic
    const subtopicPathWithInd = noLeadingSlash.substring(noLeadingSlash.indexOf("/") + 1);
    const subtopic = dePath(subtopicPathWithInd.substring(0, subtopicPathWithInd.indexOf("/")));
    const indicator = dePath(subtopicPathWithInd.substring(subtopicPathWithInd.indexOf("/") +1 ));


    return (
        <Layout>
            <SEO title="Home" />
            <IndicatorPageBody
              topic={topic}
              subtopic={subtopic}
              indicator={indicator}
            />
        </Layout>
    )
}

export default IndicatorPage;
