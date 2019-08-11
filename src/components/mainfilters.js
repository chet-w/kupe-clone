import React from 'react';
import { Select } from "antd";

const { Option } =  Select;

const MainFilters = () => {
    return (
        <>
            <Select defaultValue={"lucy"}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
            </Select>
            {/* <Select/>
            <Select/> */}
        </>
    )
}

export default MainFilters;
