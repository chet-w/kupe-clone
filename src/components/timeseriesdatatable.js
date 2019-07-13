import React from 'react';
import { Table } from "antd";

const { Column, ColumnGroup } = Table;

const TimeseriesDataTable = ({ data }) => {
    const totalVal = data.filter(record => record.group === "Total")[0];
    const yearsCols = Object.keys(totalVal).filter(key => key.includes("percent"));

    console.log(yearsCols);

    return (
        <Table>
            <Column title="Population group" width="30%"
            />
            <ColumnGroup title="Unadjusted prevalence">
            </ColumnGroup>
        </Table>
    )
}

export default TimeseriesDataTable;
