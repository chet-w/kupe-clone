import React from 'react';
// import { Select } from "antd";
import { Form, Icon, Input, Button } from 'antd';
// const { Option } =  Select;


const MainFilters = ({ form, formID }) => {

    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = form;

    // Only show error after a field is touched.
    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');

    return (
        <Form className="main-filters" layout="inline" onSubmit={() => console.log("submitted!")} id={formID || null}>
          <Form.Item className="filter-item">
              <Input
                prefix={"1. "}
                placeholder="Choose a topic"
              />,
          </Form.Item>
          <Form.Item className="filter-item">
              <Input
                prefix={"2. "}
                placeholder="Choose a subtopic"
              />
          </Form.Item>
          <Form.Item className="filter-item">
              <Input
                prefix={"3. "}
                placeholder="Choose an indicator"
              />,
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Explore
            </Button>
          </Form.Item>
        </Form>
      );
}

const Wrapped = Form.create({ name: 'horizontal_login' })(MainFilters);

export default Wrapped;
