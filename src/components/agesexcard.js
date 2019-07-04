import React from 'react';
import { Bar } from "react-chartjs-2";

const AgeSexCard = ({ data }) => {

    const chartData = {
        labels: [""],
        datasets: [{
            label: "Male",
            data: [null, ...data.map(record => record.male), null],
            // backgroundColor: [
            //     'rgb(0, 128, 164)',
            //     'rgb(0, 128, 164)',
            //     'rgb(0, 128, 164)',
            //     'rgb(0, 128, 164)',
            //     'rgb(0, 128, 164)',
            //     'rgb(0, 128, 164)',
            // ]
        },
        {
            label: "Female",
            data: [null, ...data.map(record => record.female), null],
            backgroundColor: [
                'rgb(75, 171, 197)',
                'rgb(75, 171, 197)',
                'rgb(75, 171, 197)',
                'rgb(75, 171, 197)',
                'rgb(75, 171, 197)',
                'rgb(75, 171, 197)',
            ]
        }
    ]
    };

    const getChartData = canvas => {
        const withGradient = chartData;
        const ctx = canvas.getContext("2d");
        // Male Gradient
        const male = ctx.createLinearGradient(0, 300, 0, 0);
        male.addColorStop(0, '#00c6fb');
        male.addColorStop(1, '#005bea');
        // Female Gradient
        const female = ctx.createLinearGradient(0, 300, 0, 0);
        female.addColorStop(0, '#009FFD');
        female.addColorStop(1, '#2A2A72');

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
                    display: false
                }
                
            }}
            height={200}
            />
        </>
    )
}

export default AgeSexCard;
