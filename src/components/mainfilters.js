import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby";

import { Form, Select, Input, Button, AutoComplete } from 'antd';

const { Option } = Select;

const MainFilters = ({ form, formID }) => {

    const [ topicValue, setTopicValue ] = useState("");
    const [ subtopicValue, setSubtopicValue ] = useState("");
    const [ indicatorValue, setIndicatorValue ] = useState("");

    const allSearchables = useStaticQuery(graphql`
        query allIndicators {
            allIndicatorsJson {
                nodes {
                    topic
                    subtopic
                    shortDescription
                }
            }
        }
    `);

    const topics = Array.from(new Set(allSearchables.allIndicatorsJson.nodes.map(node => node.topic))).sort();
    const subtopics = Array.from(allSearchables.allIndicatorsJson.nodes.map(node => {
        return {
            topic: node.topic,
            subtopic: node.subtopic
        }
    })).sort();
    const indicators = allSearchables.allIndicatorsJson.nodes.map(node => {
        return {
            topic: node.topic,
            subtopic: node.subtopic,
            indicator: node.shortDescription
        }
    }).sort();

    const handleTopicChange = value => {
        setTopicValue(value);
    };

    const handleSubtopicChange = value => {
        setSubtopicValue(value);
    };

    const handleIndicatorChange = value => {
        setIndicatorValue(value);
    }

    const isSubtopicFieldDisabled = () => {
        return !topics.includes(topics.find(topic => new RegExp(topic, "i").test(topicValue)));
    };

    const isIndicatorFieldDisabled = () => {
        const currentSubtopics = Array.from(new Set(subtopics
        .filter(subtopic => subtopic.topic === topicValue)
        .map(subtopic => subtopic.subtopic)
        ));

        return !currentSubtopics
        .includes(currentSubtopics
            .find(subtopic => new RegExp(subtopic, "i").test(subtopicValue)));
    };

    const isExploreButtonDisabled = () => {
        const currentIndicators = indicators
        .filter(ind => ind.topic === topicValue &&
             ind.subtopic === subtopicValue)
        .map(ind => ind.indicator);

        return !currentIndicators
        .includes(currentIndicators
            .find(ind => new RegExp(ind.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "i").test(indicatorValue)));
    }

    return (
        <Form className="main-filters" layout="inline" onSubmit={() => console.log("submitted!")} id={formID || null}>
          <Form.Item className="filter-item">
              <AutoComplete 
                dataSource={topics}
                placeholder="Choose a topic"
                onChange={e => handleTopicChange(e)}
                filterOption={(inputValue, option) => option.props.children.match(new RegExp(inputValue, "i"))}
              />
          </Form.Item>
          <Form.Item className="filter-item">
              <AutoComplete
                dataSource={Array.from(new Set(subtopics.filter(sub => sub.topic === topicValue).map(sub => sub.subtopic))).sort()}
                placeholder="Choose a subtopic"
                onChange={e => handleSubtopicChange(e)}
                disabled={isSubtopicFieldDisabled()}
                filterOption={(inputValue, option) => option.props.children.match(new RegExp(inputValue, "i"))}
              />
          </Form.Item>
          <Form.Item className="filter-item">
              <AutoComplete
                dataSource={indicators.filter(ind => ind.topic === topicValue && ind.subtopic === subtopicValue).map(ind => ind.indicator)}
                placeholder="Choose an indicator"
                onChange={e => handleIndicatorChange(e)}
                disabled={isIndicatorFieldDisabled()}
                filterOption={(inputValue, option) => option.props.children.match(new RegExp(inputValue, "i"))}
              />
          </Form.Item>
          <Form.Item>
            <Button
             type="primary"
             htmlType="submit"
             disabled={isExploreButtonDisabled()}>
              Explore
            </Button>
          </Form.Item>
        </Form>
      );
}

const Wrapped = Form.create({ name: 'horizontal_login' })(MainFilters);

export default Wrapped;
