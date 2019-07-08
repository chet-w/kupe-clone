import React from 'react';
import styled from "styled-components";
import PageSubheading from "./ui/pagesubheading";
import ComparisonsDataTable from "./comparisondatatable";

const Wrapper = styled.div`
    width: 60%;
`;


const ComparisonsTab = ({ data }) => {

    const comparionYears = Array.from(new Set(data.map(record => Number.parseInt(record.year))));
    const latestYear = Math.max(...comparionYears);

    const comparisonData = data.filter(record => Number.parseInt(record.year) === latestYear);

    return (
        <>
        <Wrapper>
            <PageSubheading text={`Subgroups comparison (${latestYear})`} />
            <p>Adjusted prevalence ratios are used to compare the results for different
                 population subgroups. An adjusted ratio above 1 shows that the indicator
                  is more likely, and an adjusted ratio below 1 shows the indicator is less
                  likely, in the group of interest (e.g. Māori) than the reference group
                   (e.g. non-Māori), after adjusting for demographic variables that could
                    influence the association.
                    </p>
        </Wrapper>
        <ComparisonsDataTable data={comparisonData}/>
        </>
    )
}

export default ComparisonsTab
