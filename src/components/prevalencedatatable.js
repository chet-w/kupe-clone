import React from 'react';
import { Table } from "antd";
import { organisePrevalenceData, capFirst } from '../lib/helpers';

const PrevalenceDatatable = ({ data, groups, year }) => {

    const organised = organisePrevalenceData(data, groups, year);

    let tableColumns = [{
        title: "Population",
        dataIndex: "group",
        key: "group",
        width: "30%"
    },
    {
        title: "Total",
        dataIndex: "total",
        key: "total",
    }
    ];

    
    console.log(tableColumns);
    Object.keys(groups).map(group => {
        if(groups[group]){
            tableColumns.push({
                title: group === "est" ? "Estimated number of adults" : capFirst(group),
                dataIndex: group,
                key: group
            });
            if(group !== "est") {
                tableColumns.push({
                    title: `${capFirst(group)} 95% CI`,
                    dataIndex: `${group}CI`,
                    key: `${group}CI`
                });
            }

        }
    });

    return (
        <Table dataSource={organised} columns={tableColumns} pagination={false} />
    )
}

export default PrevalenceDatatable;
