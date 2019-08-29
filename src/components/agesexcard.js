import React from 'react';
import { Bar } from "react-chartjs-2";

const AgeSexCard = ({ data }) => {

    const chartData = {
        labels: [""],
        datasets: [{
            label: "Male",
            data: [null, ...data.map(record => record.male), null]
        },
        {
            label: "Female",
            data: [null, ...data.map(record => record.female), null],
        }
    ]
    };

    const getChartData = canvas => {
        const withGradient = chartData;
        const ctx = canvas.getContext("2d");
        // Male Gradient
        const male = ctx.createLinearGradient(0, 800, 0, 0);
        male.addColorStop(0, '#024bc9');
        male.addColorStop(1, '#02a7c9');
        // Female Gradient
        const female = ctx.createLinearGradient(0, 300, 0, 0);
        female.addColorStop(0, '#00497a');
        female.addColorStop(1, '#0080a4');

        withGradient.datasets[0].backgroundColor = [male,male,male,male,male,male];
        withGradient.datasets[1].backgroundColor = [female,female,female,female,female,female];
        return withGradient;
    }

    

    return (
        <>
            <h4>Age and sex</h4>
            <Bar 
              data={getChartData}
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
                            labels: ["", ...data.map(record => record.group), ""],
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
                    display: true
                }
                
            }}
            height={200}
            />
        </>
    )
}

export default AgeSexCard;
