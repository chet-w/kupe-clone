import React from 'react'
import { Link } from "gatsby";
import { Breadcrumb, Icon } from 'antd';
import { toPath } from '../lib/helpers';

const PageBreadcrumb = ({ items }) => {
    return (
        <Breadcrumb separator={<Icon type="right" style={{ fontSize: "10px" }} />}>
            <Breadcrumb.Item>
                <Link to="/">
                    <Icon type={"home"} />
                </Link>
            </Breadcrumb.Item>
            {items.map((item, index) => {
                if (index === items.length - 1) {
                    return (
                        <Breadcrumb.Item>
                           {item}
                        </Breadcrumb.Item>
                    );
                } else {
                    return (
                        <Breadcrumb.Item>
                             {/* <Link to={`/${toPath(item)}`}>{item}</Link> */}
                            <Link to={index === 1 && items.length === 3 ? (
                                toPath(`/${items[index - 1]}/${item}`)) : (
                                    toPath(`/${item}`))}>
                                {item}</Link>
                        </Breadcrumb.Item>
                    )
                }

            })}
        </Breadcrumb>
    )
}

export default PageBreadcrumb;
