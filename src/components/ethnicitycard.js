import React from 'react';
import { Bar } from "react-chartjs-2";
import { getYAxisDetails } from '../lib/helpers';

const EthnicityCard = ({ data }) => {

    const chartData = {
        labels: [""],
        datasets: [{
            label: "Total",
            data: [null, ...data.map(record => record.total), null],
            backgroundColor: [
                'rgb(0, 128, 164)',
                'rgb(0, 128, 164)',
                'rgb(0, 128, 164)',
                'rgb(0, 128, 164)',
                'rgb(0, 128, 164)',
                'rgb(0, 128, 164)',
            ]
        }
    ]
    };

    // Workaround to, firstly center the bars from the edges and also break "European/Other" onto two lines
    const xLabels = ["", ...data.map(record => {
        let label = record.group;
        if(record.group === "European/Other") {
            label = ["European/", "Other"];
        }
        if(record.group === "Maori") {
            label = "Māori";
        }
        return label;
    }), ""]

    const getChartData = canvas => {
        const withGradient = chartData;
        const ctx = canvas.getContext("2d");
        // Gradient
        const gradient = ctx.createLinearGradient(0, 300, 0, 0);
        gradient.addColorStop(0, '#00497a');
        gradient.addColorStop(1, '#0080a4');

        withGradient.datasets[0].backgroundColor = [gradient,gradient,gradient,gradient,gradient,gradient];
        return withGradient;
    }

    return (
        <>
            <h4>Ethnicity (total)</h4>
            <Bar 
              data={getChartData}
              options={{
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            max: getYAxisDetails(data.map(record => record.total)).maxY,
                            stepSize: getYAxisDetails(data.map(record => record.total)).step
                        },
                        gridLines: {
                            display: true
                        }
                    }],
                    xAxes: [
                        {
                            type: "category",
                            labels: xLabels,
                            gridLines: {
                                display: false,
                                lineWidth: 0,
                            },
                            barPercentage: 1.0,
                            barThickness: "flex"
                        }
                    ]
                },
                legend: {
                    display: false
                }
                
            }}
            height={200}
            />
        </>
    )
}

export default EthnicityCard;
