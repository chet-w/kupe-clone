import React from 'react';
import { Select } from 'antd';
import styled from "styled-components";

const StyledLabel = styled.label`
    font-weight: bold;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
`;

const { Option } = Select;

const GroupsFilter = ({ groups, setNewGroup }) => {

    const handleChange = value => {
        setNewGroup(value);
    };

    return (
        <Wrapper>
        <StyledLabel>Show:</StyledLabel>
        <Select defaultValue="Total" style={{width: "150px"}} onChange={e => handleChange(e)}>
            {groups.map(group => <Option value={group}>{group}</Option>)}
        </Select>
        </Wrapper>
    )
}

export default GroupsFilter;
