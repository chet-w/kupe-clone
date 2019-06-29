import React from 'react';
import { Table } from "antd";
import { Link } from 'gatsby';
import MeanText from "../meantext";
import { organiseData } from "../../lib/helpers"
import { toPath } from "../../lib/helpers"


const Datatable = ({ data, indicators, group, topic, subtopic }) => {

    const tableData = data.filter(record => record.group === group);
    const withLabels = tableData.map(record => {
        const description = indicators.find(indicator => indicator.indicator === record.indicator).description;
        record.description = description;
        return record;
    });

    const meanInds = indicators.filter(indicator => indicator.measureType === "mean").map(indicator => indicator.indicator);
    const prevInds = indicators.filter(indicator => indicator.measureType === "%").map(indicator => indicator.indicator);

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
        key: "indicator",
        render: ind => (
            <Link to={toPath(topic+ "/" +subtopic + "/" +ind)}>{ind}</Link>
        ),
        width: "30%"
    }];
    
    timeTrendYears.map(year => tableColumns.push({ title: year, dataIndex: year, key: year }));
    comparisonYears.map(year => tableColumns.push({ title: year, dataIndex: year.replace(/\s/g, ""), key: year, align: "center" }));
    
    const organised = organiseData(withLabels, comparisonYears);
    
    const prevData = organised.filter(record => prevInds.includes(record.indicator));
    const meanData = organised.filter(record => meanInds.includes(record.indicator));
    

    return (
        <>
            <Table dataSource={prevData} columns={tableColumns} pagination={false}/>
            {meanData.length > 0 ? (
                <>
                    <MeanText />
                    <Table dataSource={meanData} columns={tableColumns} pagination={false}/>
                </>
            ) : null }
            
        </>
    )
}

export default Datatable;
