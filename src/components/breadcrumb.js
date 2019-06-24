import React from 'react'
import { Link } from "gatsby";
import { Breadcrumb, Icon } from 'antd';

const PageBreadcrumb = ({ items }) => {
    return (
        <Breadcrumb separator={<Icon type="right" style={{ fontSize: "10px" }} />}>
            <Breadcrumb.Item>
                <Link to="/">
                    <Icon type={"home"} />
                </Link>
            </Breadcrumb.Item>
            {items.map(item => (
                <Breadcrumb.Item>
                    {item}
                </Breadcrumb.Item>
            ))}
        </Breadcrumb>
    )
}

export default PageBreadcrumb;
