import React from 'react';
import styled from "styled-components";

const Card = styled.div`
    width: 300px;
    min-height: 150px;
    padding: 15px;
    color: ${props => props.theme.black};

    & h2 {
        font-size: 22px;
        margin-bottom: 10px;
    }


`;

const SubtopiCard = ({ name, description, topic }) => {
    return (
        <Card topic={topic}>
            <h2>{name}</h2>
            <p>{description}</p>
        </Card>
    )
}

export default SubtopiCard
