import React from 'react';
import { Table } from "antd";
import { organisePrevalenceData, capFirst } from '../lib/helpers';
import { prevLabels } from '../lib/config';

const { ColumnGroup, Column } = Table;

const PrevalenceDatatable = ({ data, groups, year }) => {

    const organised = organisePrevalenceData(data, groups, year);

    let tableColumns = [{
        title: "Population",
        dataIndex: "group",
        key: "group",
        width: "20%"
    },
    {
        title: "Total",
        dataIndex: "total",
        key: "total",
    },
    {
        title: "Total 95% CI",
        dataIndex: "totalCI",
        key: "totalCI",
    }
    ];

    
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
        // <Table dataSource={organised} columns={tableColumns} pagination={false} />
        <Table dataSource={organised} pagination={false}>
             <Column title="Population" dataIndex="group" key="group" width="20%"  render={(group) => {
                 if(prevLabels.includes(group)) {
                     return (
                         <strong>{group}</strong>
                     )
                 } else {
                     return group
                 }
             }}/>
             <ColumnGroup title="Total">
                 <Column title="%" dataIndex="total" key="total" />
                 <Column title="95% CI" dataIndex="totalCI" key="totalCI" />
             </ColumnGroup>
             { groups.male && <ColumnGroup title="Male">
                 <Column title="%" dataIndex="male" key="male" />
                 <Column title="95% CI" dataIndex="maleCI" key="maleCI" />
            </ColumnGroup>}
            { groups.female && <ColumnGroup title="Female">
                 <Column title="%" dataIndex="female" key="female" />
                 <Column title="95% CI" dataIndex="femaleCI" key="femaleCI" />
            </ColumnGroup> }
            { groups.est && <Column title="Estimated number of adults" dataIndex="est" key="est"/> }
        </Table>
    )
}

export default PrevalenceDatatable;
