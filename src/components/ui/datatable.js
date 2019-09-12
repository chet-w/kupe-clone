import React from 'react';
import { Table, Icon } from "antd";
import { Link } from 'gatsby';
import MeanText from "../meantext";
import { organiseData } from "../../lib/helpers"
import { toPath } from "../../lib/helpers"


const Datatable = ({ data, indicators, group, topic, subtopic }) => {

    group = group.replace("\u0101", "a");
    console.log(group);

    console.log(data);
    const tableData = data.filter(record => record.group === group);
    const withLabels = tableData.map(record => {
        const description = indicators.find(indicator => indicator.indicator === record.indicator).description;
        record.description = description;
        return record;
    });

    const meanInds = indicators.filter(indicator => indicator.measureType === "mean").map(indicator => indicator.indicator);
    const prevInds = indicators.filter(indicator => indicator.measureType === "%").map(indicator => indicator.indicator);

    const timeTrendYears = [2012, 2014, 2016, 2018];

    const latestYear = Array.from(new Set(tableData.map(record => record.year))).sort().pop();
    
    const comparisonYears = timeTrendYears.map(year => {
        if(year < latestYear) {
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
    
    timeTrendYears.map(year => tableColumns.push({ 
        title: year,
        dataIndex: year,
        key: year,
        render: value => {
            if(value === undefined) {
                return "-"
            } else {
                return value
            }
        }
    }));
    comparisonYears.map(year => tableColumns.push({
        title: year,
        dataIndex: year.replace(/\s/g, ""),
        key: year, align: "center",
        render: value => {
            let res = value;
            if(value === "up") {
                res = <Icon style={{color: "#02a7c9"}} type="up-circle" />
            } else if (value === "down") {
                res = <Icon style={{color: "#02a7c9"}} type="down-circle" />
            }
            return <span style={{color: "#02a7c9"}}>{res}</span>;
        }
    }
    ));
    
    const organised = organiseData(withLabels, comparisonYears);
    
    const prevData = organised.filter(record => prevInds.includes(record.indicator));
    const meanData = organised.filter(record => meanInds.includes(record.indicator));
    

    return (
        <>
            <Table id="prevalence-table" dataSource={prevData} columns={tableColumns} pagination={false}/>
            {meanData.length > 0 ? (
                <>
                    <MeanText />
                    <Table id="mean-table" dataSource={meanData} columns={tableColumns} pagination={false}/>
                </>
            ) : null }
            
        </>
    )
}

export default Datatable;
