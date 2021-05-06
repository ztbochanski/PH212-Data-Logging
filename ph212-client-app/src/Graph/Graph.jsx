import React from 'react';
import Title from '../Title/Title';
import { ResponsiveLine } from '@nivo/line'

const Graph = () => {
    return (
        <React.Fragment>
            <Title>Temp Graph</Title>
            <ResponsiveLine
        data={data}
        margin={{ top: 20, right: 30, bottom: 100, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        yFormat=" >-.2f"
        curve="basis"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Time (h)',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Temperature (C)',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        enableGridX={false}
        enableGridY={false}
        gridYValues={1}
        colors={{ scheme: 'pink_yellowGreen' }}
        pointSize={8}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        enableArea={true}
        areaBaselineValue={40}
        areaOpacity={0.1}
        useMesh={true}
        legends={[]}
    />
        </React.Fragment>  
    )
};

export default Graph;

const data = [
    {
      "id": "temperature",
      "color": "hsl(200, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 22
        },
        {
          "x": "helicopter",
          "y": 23
        },
        {
          "x": "boat",
          "y": 26
        },
      ]
    }
  ]