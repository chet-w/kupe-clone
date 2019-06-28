import React from 'react';
import { Table } from "antd";
import { organiseData } from "../../lib/helpers"


const Datatable = ({ data, indicators, group }) => {

    const tableData = data.filter(record => record.group === group);
    const withLabels = tableData.map(record => {
        const description = indicators.find(indicator => indicator.indicator === record.indicator).description;
        record.description = description;
        return record;
    });

    const timeTrendYears = Array.from(new Set(tableData.map(record => record.year)));
    const latestYear = Math.max(...timeTrendYears);
    
    const comparisonYears = timeTrendYears.map(year => {
        if(year !== latestYear) {
            const comparison = `${year} and ${latestYear}`;
            return comparison;
        }
    }).filter(record => record !== undefined);

    
    let tableColumns = [{
        title: "Indicator",
        dataIndex: "description",
        key: "indicator"
    }];
    
    timeTrendYears.map(year => tableColumns.push({ title: year, dataIndex: year, key: year }));
    comparisonYears.map(year => tableColumns.push({ title: year, dataIndex: year.replace(/\s/g, ""), key: year, align: "center" }));
    
    const organised = organiseData(withLabels, comparisonYears);
    console.log(organised);

    return (
            <Table dataSource={organised} columns={tableColumns} pagination={false}/>
    )
}

export default Datatable;
