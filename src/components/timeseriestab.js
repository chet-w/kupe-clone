import React, { useState } from 'react';
import styled from "styled-components";
import { Switch } from "antd";
import PageSubheading from "./ui/pagesubheading";
import TimeseriesDataTable from "./timeseriesdatatable";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`;

const Prelude = styled.div`
    width: 60%;
`;

const Checkboxes = styled.div`
    margin: 30px 0 10px 0;
    display: flex;
`;

const StyledLabel = styled.label`
    font-weight: bold;
    display: block;
    margin-bottom: 4px;
`;

const SwitchLabels = styled.div`
    padding-top: 4px;

    & label {
        display: block;
    line-height: 20px;
    margin: 4px;
    }
`;

const Switches = styled.div`
    & .ant-switch {
        display: block;
        margin: 0 4px 4px 0;
    }
`;

const TimseriesTab = ({ data, years, latestYear }) => {

    const [ showPvalue, setShowPvalue ] = useState(true);

    const togglePvalue = () => {
        setShowPvalue(!showPvalue);
    };

    return (
        <>
        <Wrapper>
            <Prelude>
                <PageSubheading text={"Changes over time"} />
                    <p>{`This table presents unadjusted results;
                         that is, the prevalence estimates reflect the actual percentage for the
                          specified population in each survey year.
                           Statistically significant differences between years are shown in bold
                            (p value < .05).`}
                    </p>
            </Prelude>
            <Checkboxes>
                 <Switches>
                 <StyledLabel>Show:</StyledLabel>
                     <Switch onChange={togglePvalue} checked={showPvalue}/>
                </Switches>
                 <SwitchLabels>
                    <br/>
                     <label>p value</label>
                 </SwitchLabels>
            </Checkboxes>
        </Wrapper>
        <TimeseriesDataTable
         data={data}
         years={years}
         latestYear={latestYear}
         showPvalue={showPvalue}
        />
        </>
    )
}

export default TimseriesTab
