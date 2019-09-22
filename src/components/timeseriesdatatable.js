import React from 'react';
import styled from "styled-components";
import { Table, Tag } from "antd";
import { organiseTimeseriesData } from "../lib/helpers";
import { prevLabels } from '../lib/config';

const { Column, ColumnGroup } = Table;

const SignificantGroup = styled.div`
    position: relative;

    & .ant-tag.tag-significant {
        position: absolute;
        left: 25%;
        text-align: center;
        right: auto;
    }
`;


const TimeseriesDataTable = ({ data, latestYear, showPvalue }) => {
    const totalVal = data.filter(record => record.group === "Total")[0];
    const yearsCols = Object.keys(totalVal).filter(key => key.includes("percent"));
    const years = yearsCols.map(year => {
        return {
            dataYear: year,
            colYear: Number.parseInt(`20${year.substring(year.indexOf("_") + 1)}`)
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
    }).filter(comp => comp.colComparison.includes(`and ${latestYear}`));

    const organised = organiseTimeseriesData(data);

    return (
        <Table dataSource={organised} pagination={false}>
            <Column title="Population group" width="25%" dataIndex="group" key="group" render={group => {
                let res = group;
                if (prevLabels.includes(group)) {
                    res = <strong>{group}</strong>
                }
                return res;
            }} />
            <ColumnGroup title="Unadjusted prevalence">
                {years.map(year => (
                    <Column title={year.colYear} key={year.dataYear} dataIndex={year.dataYear} />
                ))}
            </ColumnGroup>
            {showPvalue && <ColumnGroup title="Statistical difference between years (p value)">
                {comparisonYears.map(comp => (
                    <Column title={comp.colComparison} key={comp.dataComparison} dataIndex={comp.dataComparison} render={
                        years => {
                            let returnValue = years;
                            if (years < 0.05) {
                                returnValue = (
                                    <SignificantGroup>
                                        <strong>{years}</strong>
                                        <Tag className="tag-significant" color="blue">Significant</Tag>
                                    </SignificantGroup>
                                )
                            }
                            return returnValue;
                        }
                    } />
                ))}
            </ColumnGroup>}
        </Table>
    )
}

export default TimeseriesDataTable;
