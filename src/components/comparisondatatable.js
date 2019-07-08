import React from 'react';
import { Table } from "antd";
import { organiseComparisonsData } from "../lib/helpers";

const { Column, ColumnGroup } = Table;

const ComparisonsDataTable = ({ data }) => {

    const organised = organiseComparisonsData(data);

    return (
        <Table dataSource={organised} pagination={false}>
            <Column title="Population groups being compared" width="30%" key="comparison" dataIndex="comparison"/>
            <ColumnGroup title="Adjusted ratios">
                <Column title="Ratio" key="ratio" dataIndex="ratio"/>
                <Column title="95% CI" key="ratioCI" dataIndex="ratioCI"/>
            </ColumnGroup>
            <Column title="Adjustment variables" key="adjustmentVariables" dataIndex="adjustmentVariables"/>

        </Table>
    )
}

export default ComparisonsDataTable;
