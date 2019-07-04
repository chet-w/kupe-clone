import React from 'react';
import styled from "styled-components"
import { Scatter } from "react-chartjs-2";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;

`;


const TimeseriesCard = ({ data }) => {

    const coords = data.map(record => {
        return {
            x: record.year,
            y: Number.parseFloat(record.total)
        }
    });


    const chartData = {
        labels: [""],
        datasets: [{
            label: data.map(record => record.year),
            data: [null, ...coords, null],
            backgroundColor: [
                'rgb(247, 149, 32)',
                'rgb(247, 149, 32)',
                'rgb(247, 149, 32)',
                'rgb(247, 149, 32)',
                'rgb(247, 149, 32)',
                'rgb(247, 149, 32)',
            ]
        }]
    };

    return (
        <Wrapper>
            <h4>Time trends</h4>
            <Scatter
                data={chartData}
                options={{
                    showLines: true,
                    elements: {
                        line: {
                            tension: 0,
                            fill: false,
                            backgroundColor: 'rgb(247, 149, 32)',
                            borderColor: 'rgb(247, 149, 32)'
                        },
                        point: {
                            radius: 5,
                            hoverRadius: 7
                        }
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                max: 100,
                                stepSize: 20
                            },
                            gridLines: {
                                display: true
                            }
                        }],
                        xAxes: [
                            {
                                type: "category",
                                labels: ["", ...data.map(record => record.year), ""],
                                gridLines: {
                                    display: false,
                                    lineWidth: 0,
                                }
                            }
                        ]
                    },
                    legend: {
                        display: false
                    }
                    
                }}
                height={200}
                />
        </Wrapper>
    )
}

export default TimeseriesCard;
