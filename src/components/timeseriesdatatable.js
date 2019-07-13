import React from 'react';
import { Table } from "antd";

const { Column, ColumnGroup } = Table;

const TimeseriesDataTable = ({ data }) => {
    const totalVal = data.filter(record => record.group === "Total")[0];
    const yearsCols = Object.keys(totalVal).filter(key => key.includes("percent"));
    const years = yearsCols.map(year => {
        return {
            dataYear: year,
            colYear: Number.parseInt(`20${year.substring(year.indexOf("_")+1)}`)
        }
    });

    const comparisonCols = Object.keys(totalVal).filter(key => key.includes("p_value"));
    const comparisonYears = comparisonCols.map(comp => {
        const shortYears = comp.substring(8).split("_").reverse();
        const longYears = shortYears.map(year => Number.parseInt(`20${year}`));
        return {
            dataComparison: comp,
            colComparison: longYears.join(" and ")
        }
    })

    console.log(data);

    return (
        <Table>
            <Column title="Population group" width="20%"
            />
            <ColumnGroup title="Unadjusted prevalence">
                {years.map(year => (
                    <Column title={year.colYear} key={year.dataYear} dataIndex={year.dataYear} />
                ))}
            </ColumnGroup>
            <ColumnGroup title="Statistical difference between years (p value)">
                {comparisonYears.map(comp => (
                    <Column title={comp.colComparison} key={comp.dataComparison} dataIndex={comp.dataComparison} />
                ))}
            </ColumnGroup>
        </Table>
    )
}

export default TimeseriesDataTable;
