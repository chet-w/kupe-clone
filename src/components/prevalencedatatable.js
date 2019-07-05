import React from 'react';
import { Table } from "antd";
import { organisePrevalenceData } from '../lib/helpers';

const PrevalenceDatatable = ({ data, groups, year }) => {

    const organised = organisePrevalenceData(data, year, groups);


    return (
        <Table />
    )
}

export default PrevalenceDatatable;
