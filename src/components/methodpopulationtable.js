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
            
        },
        {
            key: 2,
            ethnicity: "Māori",
            sex: "Female",
            adultActual: 362,
            adultWeighted: 187,
            parentActual: 172,
            parentWeighted: 104,
            
        },
        {
            key: 3,
            ethnicity: "Pacific",
            sex: "Male",
            adultActual: 164,
            adultWeighted: 76,
            parentActual: 63,
            parentWeighted: 26,
            
        },
        {
            key: 4,
            ethnicity: "Pacific",
            sex: "Female",
            adultActual: 306,
            adultWeighted: 80,
            parentActual: 168,
            parentWeighted: 45,
            
        },
        {
            key: 5,
            ethnicity: "Asian",
            sex: "Male",
            adultActual: 114,
            adultWeighted: 201,
            parentActual: 32,
            parentWeighted: 50,
            
        },
        {
            key: 6,
            ethnicity: "Asian",
            sex: "Female",
            adultActual: 131,
            adultWeighted: 209,
            parentActual: 43,
            parentWeighted: 59,
            
        },
        {
            key: 7,
            ethnicity: "European/Other",
            sex: "Male",
            adultActual: 571,
            adultWeighted: 883,
            parentActual: 91,
            parentWeighted: 185,
            
        },
        {
            key: 8,
            ethnicity: "European/Other",
            sex: "Female",
            adultActual: 876,
            adultWeighted: 919,
            parentActual: 194,
            parentWeighted: 292,
            
        }
    ];

    return (
        <Table dataSource={tableValues} pagination={false}>
            <Column title="Ethnicity (prioritised)" dataIndex="ethnicity" key="ethnicity" />
            <Column title="Sex" dataIndex="sex" key="sex" />
            <ColumnGroup title="Adult">
                <Column title="Actual" dataIndex="adultActual" key="adultActual" />
                <Column title="Weighted" dataIndex="adultWeighted" key="adultWeighted" />
            </ColumnGroup>
            <ColumnGroup title="Parent/caregiver">
                <Column title="Actual" dataIndex="parentActual" key="parentActual" />
                <Column title="Weighted" dataIndex="parentWeighted" key="parentWeighted" />
            </ColumnGroup>
        </Table>
    )
}

export default MethodPopulationTable
