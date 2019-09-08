import React from 'react'
import { Table } from 'antd'

const { Column, ColumnGroup } = Table;

const MethodPopulationTable = () => {

    const tableValues = [
        {
            key: 1,
            ethnicity: "Māori",
            sex: "Male", 
            adultActual: 201,
            adultWeighted: 170,
            parentActual: 64,
            parentWeighted: 67,
            render: (value, row, index) => {
                const object = {
                    children: value,
                    props: {}
                };
                if(index === 0) {
                    object.props.rowSpan = 2;
                }
                return object;
            }
        }
    ];

    return (
        <Table dataSource={tableValues} pagination={false}>
            <Column title="Ethnicity (prioritised)" dataIndex="ethnicity" key="ethnicity" />
            <Column title="Sex" dataIndex="sex" key="sex"/>
            <ColumnGroup title="Adult">
                <Column title="Actual" dataIndex="adultActual" key="adultActual"/>
                <Column title="Weighted" dataIndex="adultWeighted" key="adultWeighted"/>
            </ColumnGroup>
            <ColumnGroup title="Parent/caregiver">
                <Column title="Actual" dataIndex="parentActual" key="parentActual"/>
                <Column title="Weighted" dataIndex="parentWeighted" key="parentWeighted"/>
            </ColumnGroup>
        </Table>
    )
}

export default MethodPopulationTable
