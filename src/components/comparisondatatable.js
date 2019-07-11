import React from 'react';
import { Table, Tag } from "antd";
import styled from "styled-components";
import { organiseComparisonsData } from "../lib/helpers";
import { subgroupLabels } from "../lib/config";

const { Column, ColumnGroup } = Table;

const SignificantGroup = styled.div`
    position: relative;
`;

const ComparisonsDataTable = ({ data }) => {

    const organised = organiseComparisonsData(data);

    const determineSignificance = group => {
        const comparison = organised.find(record => record.comparison === group);
        return comparison.isSignificant;
    }

    return (
        <Table dataSource={organised} pagination={false}>
            <Column title="Population groups being compared" width="45%" key="comparison" dataIndex="comparison"  render={(group) => {
                let res = group;
                 if(subgroupLabels.includes(group)) {
                    res = <strong>{group}</strong>
                 }
                 if (determineSignificance(group)) {
                     res = (
                         <SignificantGroup>
                            {res}
                            <Tag className="tag-significant" color="blue">Significant</Tag>
                         </SignificantGroup>
                     )
                 }
                 return res;
             }}/>
            <ColumnGroup title="Adjusted ratios">
                <Column title="Ratio" key="ratio" dataIndex="ratio"/>
                <Column title="95% CI" key="ratioCI" dataIndex="ratioCI"/>
            </ColumnGroup>
            <Column title="Adjustment variables" key="adjustmentVariables" dataIndex="adjustmentVariables"/>

        </Table>
    )
}

export default ComparisonsDataTable;
