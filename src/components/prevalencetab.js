import React, { useState } from 'react';
import styled from "styled-components"
import { Select, Switch } from "antd";
import PageSubheading from './ui/pagesubheading';
import PrevalenceDatatable from "./prevalencedatatable";

const { Option } = Select;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
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

const PrevalenceTab = ({ data, years }) => {

    const [showMen, setShowMen] = useState(true);
    const [showWomen, setShowWomen] = useState(true);
    const [showEst, setShowEst] = useState(true);
    const [currentYear, setCurrentYear] = useState(Math.max(...years))

    const toggleShowMen = () => {
        setShowMen(!showMen);
    };

    const toggleShowWomen = () => {
        setShowWomen(!showWomen);
    };

    const toggleShowEst = () => {
        setShowEst(!showEst);
    };

    const handleYearChange = newYear => {
        setCurrentYear(newYear);
    };

    return (
        <>
        <Wrapper>
            <div>
                <PageSubheading text={"Prevalence for selected indicator"} />
                <p>This tables shows the percentage of the population affected.</p>
                <Select defaultValue={currentYear} style={{ width: "150px" }} onChange={e => handleYearChange(e)}>
                    {years.map(year => <Option value={year}>{year}</Option>)}
                </Select>
            </div>
            <Checkboxes>
                 <Switches>
                 <StyledLabel>Show:</StyledLabel>
                     <Switch checked={showMen} onChange={() => toggleShowMen()}/>
                     <Switch checked={showWomen} onChange={() => toggleShowWomen()}/>
                     <Switch checked={showEst} onChange={() => toggleShowEst()}/>
                </Switches>
                 <SwitchLabels>
                    <br/>
                     <label>Men</label>
                     <label>Women</label>
                     <label>Estimated number</label>
                 </SwitchLabels>
            </Checkboxes>
        </Wrapper>
        <PrevalenceDatatable
         data={data}
         groups={{
             male: showMen,
             female: showWomen,
             est: showEst
         }}
         year={currentYear}/>
        </>
    )
}


// const PrevalenceFilters = ({ years }) => {

//     console.log(years);

//     return (
//         
//     )
// };

export default PrevalenceTab;
