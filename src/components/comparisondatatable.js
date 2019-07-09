import React from 'react';
import { Table, Tag } from "antd";
import { organiseComparisonsData } from "../lib/helpers";
import { subgroupLabels } from "../lib/config";

const { Column, ColumnGroup } = Table;

const ComparisonsDataTable = ({ data }) => {

    const organised = organiseComparisonsData(data);

    return (
        <Table dataSource={organised} pagination={false}>
            <Column title="Population groups being compared" width="45%" key="comparison" dataIndex="comparison"  render={(group) => {
                 if(subgroupLabels.includes(group)) {
                     return (
                         <strong>{group}</strong>
                     )
                 } else {
                     return <>{group} <Tag color="blue">Significant</Tag></>
                 }
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
