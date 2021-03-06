import React from "react"
import styled from "styled-components"
import { Bar } from "react-chartjs-2"
import { numberWithCommas, toPath } from "../lib/helpers"
import { totalPopulation } from "../lib/config"
import { device } from "../lib/device"

const Wrapper = styled.div`
  position: relative;
`

const AnnotationWrapper = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  right: 0;
  top: 0;
`

const Annotation = styled.div``

const Weak = styled.h5`
  font-size: 14px;
  margin: 0;

  @media ${device.mobileM} {
    font-size: 14px;
  }
`

const Strong = styled.h3`
  font-size: 40px;
  font-weight: bold;
  margin: 0;

  @media ${device.mobileM} {
    font-size: 25px;
  }
`

const MeanAnnotation = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

const TopicIcon = styled.img`
  width: 25%;
`

const OverviewCard = ({ data, measureUnit, measureType, topic }) => {
  const chartData = {
    labels: [""],
    datasets: [
      {
        label: data.group,
        data: [data.total],
        backgroundColor: ["rgb(247, 149, 32)"],
      },
    ],
  }

  const roundedTotalPopulation =
    Math.round(((data.total / 100) * totalPopulation) / 1000) * 1000

  const getChartData = canvas => {
    const withGradient = chartData
    const ctx = canvas.getContext("2d")
    // Gradient
    const gradient = ctx.createLinearGradient(0, 300, 0, 0)
    gradient.addColorStop(0, "#EC9F05")
    gradient.addColorStop(1, "#FF4E00")

    withGradient.datasets[0].backgroundColor = [
      gradient,
      gradient,
      gradient,
      gradient,
      gradient,
      gradient,
    ]
    return withGradient
  }

  return measureType === "%" ? (
    <Wrapper>
      <Bar
        data={getChartData}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  max: 100,
                  stepSize: 20,
                },
                gridLines: {
                  display: false,
                  lineWidth: 0,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: false,
                  lineWidth: 0,
                },
              },
            ],
          },
          legend: {
            display: false,
          },
          layout: {
            padding: {
              top: 20,
              right: 300,
              bottom: 20,
              left: 20,
            },
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
  ) : (
    <MeanAnnotation>
      <TopicIcon
        src={require(`../images/topic-icons/${toPath(topic)}.svg`)}
        id="topic-icon"
      />
      <Annotation style={{marginLeft: "30px"}}>
        <Weak>The mean was</Weak>
        <Strong>
          {data.total} {measureUnit}
        </Strong>
      </Annotation>
    </MeanAnnotation>
  )
}

export default OverviewCard
