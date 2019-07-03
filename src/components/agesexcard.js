import React from 'react';
import { Bar } from "react-chartjs-2";

const AgeSexCard = ({ data }) => {

    console.log(data);

    const chartData = {
        labels: [""],
        datasets: [{
            label: "Male",
            data: [null, ...data.map(record => record.male), null],
            backgroundColor: [
                'rgb(247, 149, 32)',
                'rgb(247, 149, 32)',
                'rgb(247, 149, 32)',
                'rgb(247, 149, 32)',
                'rgb(247, 149, 32)',
                'rgb(247, 149, 32)',
            ]
        },
        {
            label: "Female",
            data: [null, ...data.map(record => record.female), null],
            backgroundColor: [
                'rgb(280, 149, 32)',
                'rgb(280, 149, 32)',
                'rgb(280, 149, 32)',
                'rgb(280, 149, 32)',
                'rgb(280, 149, 32)',
                'rgb(280, 149, 32)',
            ]
        }
    ]
    };

    return (
        <>
            <h3>Age and sex</h3>
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
                            display: true
                        }
                    }],
                    xAxes: [
                        {
                            type: "category",
                            // labels: ["", ...data.map(record => record.group), ""],
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
            />
        </>
    )
}

export default AgeSexCard;
