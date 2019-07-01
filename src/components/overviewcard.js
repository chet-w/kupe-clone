import React from 'react';
import styled from "styled-components";
import { Bar } from "react-chartjs-2";
import { numberWithCommas, totalPopulation } from "../lib/helpers";

const Wrapper = styled.div`
    position: relative;
`;

const AnnotationWrapper = styled.div`
    position: absolute;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    right: 0;
    top: 0;
`;

const Annotation = styled.div`

`;

const Weak = styled.h5`
    font-size: 14px;
    margin: 0;
`;

const Strong = styled.h3`
    font-size: 40px;
    font-weight: bold;
    margin: 0;

`;


const OverviewCard = ({ data }) => {

    const chartData = {
        labels: [""],
        datasets: [{
            label: data.group,
            data: [data.total],
            backgroundColor: [
                'rgb(247, 149, 32)'
            ]
        }]
    };

    const roundedTotalPopulation = Math.round((data.total/100*totalPopulation)/1000)*1000;

    return (
        <Wrapper>
            <Bar
                data={chartData}
                options={{
                    scales: {
                        yAxes: [{

                            ticks: {
                                beginAtZero: true,
                                max: 100,
                                stepSize: 20
                            },
                            gridLines: {
                                display: false,
                                lineWidth: 0
                            }
                        }],
                        xAxes: [{
                            gridLines: {
                                display: false,
                                lineWidth: 0
                            }
                        }]
                    },
                    legend: {
                        display: false
                    },
                    layout: {
                        padding: {
                            top: 20,
                            right: 300,
                            bottom: 20,
                            left: 20
                        }
                    },

                }}
                width={100}
                height={75}
            />
            <AnnotationWrapper>
                <Annotation>
                    <Weak>The prevalence was</Weak>
                    <Strong>{data.total}%</Strong>
                    <Weak>which is an estimated</Weak>
                    <Strong>{numberWithCommas(roundedTotalPopulation)}</Strong>
                    <Weak>adults</Weak>
                </Annotation>
            </AnnotationWrapper>
        </Wrapper>
    )
}

export default OverviewCard
