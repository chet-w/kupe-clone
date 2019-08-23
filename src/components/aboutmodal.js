import React from 'react'
import styled from "styled-components";
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const TabSection = styled.div`
    margin-bottom: 25px;
    
    & h4 {
        margin: 0 0 10px 0;
    } 

    & p {
        margin: 0 0 5px 0;
    }

    & ul {
        margin-left: 1.45rem;
    }
`;

const AboutModal = () => (
    <Tabs className="about-tabs">
        <TabPane key={"about-kupe"} tab={"About Kupe"}>
            <KupeTab />
        </TabPane>
        <TabPane key={"about-clone"} tab={"About the Clone"}>
            <CloneTab />
        </TabPane>
    </Tabs>
);

const KupeTab = () => {

    const now = new Date()
    const citationDate = `${now.getDate()} ${now.toLocaleString('default', { month: 'long' })} ${now.getFullYear()}`;

    return (
        <>
            <p>The content in this tab is directly from the original <a href="kupe.hpa.org.nz" target="_blank" rel="noopener noreferrer">Kupe</a> app.</p>
            <TabSection>
                <h4>THE SURVEY</h4>
                <p>Health and Lifestyles Survey (HLS) data was first collected in 2008 by the Health Sponsorship Council (HSC). Before 2008 the HSC had a range of standalone surveys including Smokefree/Auahi Kore Monitor, Gaming and Betting Activities Survey and the Sun Protection Triennial Survey. In 2008, these surveys were combined into one survey - the HLS.</p>
                <p>Face-to-face interviews for the HLS have been completed every two years since 2008.</p>
                <p>The main target populations are adults aged 15 years and over, and parents and caregivers of 5 to 16-year-old children living in permanent private dwellings in New Zealand. Each survey year monitors changes in attitudes, knowledge and behaviours, and tracks changes in views about the social desirability and acceptability of various measures. The HLS includes questions about gambling, tobacco, alcohol, sun exposure, nutrition, mental health, and physical activity. Sections and questions vary across the survey years.</p>
            </TabSection>
            <TabSection>
                <h4>KUPE - THE DATA EXPLORER</h4>
                <p>Kupe presents results from the most recent survey, as well as changes over time for adults aged 15 years and over. Kupe aims to answer the following questions for each reported indicator:</p>
                <ol>
                    <li>What is the prevalence (percentage) and estimated number of people affected, or what is the average (mean) for the total population and population subgroups?</li>
                    <li>How do the indicators vary by sex, age, ethnicity, or neighbourhood deprivation? Ratios are used to compare males with females, Māori with non-Māori, Pacific with non-Pacific, and people living in most deprived versus least deprived areas. Ratios are adjusted for differences in age, sex, and prioritised ethnicity.</li>
                    <li>What has changed over time? Where possible, we present results for all available years of the HLS to identify significant changes over time.</li>
                </ol>
            </TabSection>
            <TabSection>
                <h4>ACKNOWLEDGEMENTS</h4>
                <p>Kupe was developed by <a href="https://www.epi-interactive.com" target="_blank" rel="noopener noreferrer">EPI-interactive</a> and the <a href="https://hpa.org.nz" target="_blank" rel="noopener noreferrer">Health Promotion Agency | Te Hiringa Hauora (HPA)</a>. HPA appreciates precedents shared from the Annual Data Explorer, which was co-developed by EPI-interactive and the Health and Disability Intelligence Unit at the <a href="https://www.health.govt.nz/" target="_blank" rel="noopener noreferrer">Ministry of Health</a>.</p>
                <p>Data used in Kupe would not have been available without the support and enthusiasm of many individuals, including the people who gave their valuable time to participate in the HLS and the interviewers collecting the data.</p>
            </TabSection>
            <TabSection>
                <h4>IMAGES</h4>
                <p>The landing page image has been compiled from: Māori Star Compass (courtesy of Te Ara: The Encyclopaedia of New Zealand); “Milky Way Wellington. Leica M9” by <a href="https://www.flickr.com/photos/andrew_xjy/" target="_blank" rel="noopener noreferrer">Andrew Xu</a> is licensed under <a href="https://creativecommons.org/licenses/by/2.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 2.0</a>; and <a href="https://collections.tepapa.govt.nz/object/240379" target="_blank" rel="noopener noreferrer">Illustration of stick chart, Marshall Islands</a>, c1920, by Ethel Richardson. Te Papa (MU000049/008/0003).</p>
            </TabSection>
            <TabSection>
                <h4>CITATIONS</h4>
                <p>Example: Health Promotion Agency (HPA) 2018. Kupe 2018: Health and Lifestyles Survey [Data File]. URL: https://kupe.hpa.org.nz/hls-2018/ (Accessed {citationDate}).</p>
            </TabSection>
            <TabSection>
                <h4>COPYRIGHT</h4>
                <p>This work is licensed under a Creative Commons Attribution 4.0 International License. For more information view the HPA's copyright statement.</p>
            </TabSection>
            <TabSection>
                <h4>MICRODATA</h4>
                <p>HPA datasets are available for statistical purposes to researchers working within academic institutions, government agencies and the wider health sector, subject to certain conditions. Researchers can apply to access microdata after HPA has released key survey results. For more details please visit <a href="https://www.hpa.org.nz/our-work/research/accessing-microdata" target="_blank" rel="noopener noreferrer">Accessing HPA's Microdata for Research purposes</a>.</p>
            </TabSection>
        </>
    )
};

const CloneTab = () => (
    <>
        <TabSection>
            <h4>MOTIVATION</h4>
            <p>The Kupe Clone is a hobby project developed by me - <a href="https://chet-w.com" target="_blank" rel="noopener noreferrer">Chet Wijesekera</a> - inspired and based on the original Kupe Data Explorer developed by EPI-interactive and HPA.</p>
            <p>The original app was built in R with the Shiny framework, which, while great for processing data for statistical modelling and visualising, 
                does not offer a great user experience when it comes to a fast, and fluid application. The Kupe Clone was created firstly to explore 
                data visualisation in React as well as to create a more refined application than the original.
            </p>
        </TabSection>
        <TabSection>
            <h4>GOALS</h4>
            <p>If you've seen the <a href="https://github.com/chet-w/kupe-clone" target="_blank" rel="noopener noreferrer"> Github page for this project </a>, you'll notice 
            that some of the key goals in the project is to expand on the original app and build on the weaknesses of the R Shiny framework. These goals include: </p>
            <ul>
                <li>Improving user experience through faster load times and smooth animations</li>
                <li>Including user interface features not possible through Shiny</li>
                <li>Better mobile performance by using a service worker and implementing Progressive Web App features</li>
                <li>Improve shareability and search engine optimisation by having dedicated routes for each page</li>
                <li>Improve accessability by following a11y standards</li>
            </ul>
        </TabSection>
        <TabSection>
            <h4>DEVELOPMENT</h4>
            <p>Though I've worked with Shiny for a while myself, my main interest is JavaScript so I chose React for this project, more specifically, Gatsby. 
                Gatsby offered great performance, simple routing, and an intuative way to interact with the data by using GraphQL. The user interface design is based 
                mainly on the original app while also incorperating elements to improvement the look of things with my prefered UI library <a href="https://ant.design" target="_blank" rel="noopener noreferrer">ant design</a>.</p>
            <p>Built out as a static site, the project is hosted on Netlify and delivered across their CDN to ensure it's delivered quickly to users.</p>
        </TabSection>
    </>
)

export default AboutModal;