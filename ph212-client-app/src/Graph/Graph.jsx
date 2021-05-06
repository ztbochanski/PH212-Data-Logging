import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, Tooltip } from 'recharts';
import Title from '../Title/Title';

const Graph = (props) => {
    
    
    const data = []
    props.measurements.map((measurement) => (
        data.push({
            time: new Date(measurement.time).getMinutes(),
            temperature: measurement.measurement,
        })
    ))

    const theme = useTheme();
    return (
        <React.Fragment>
            <Title>Temp Graph (C) </Title>
            <ResponsiveContainer>
                <LineChart
                data={data}
                margin={{
                    top: 14,
                    right: 16,
                    bottom: 0,
                    left: 22,
                }}
                >
                <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
                <YAxis stroke={theme.palette.text.secondary}>
                    <Label
                    angle={270}
                    position="left"
                    style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
                    >
                    Temperature (C)
                    </Label>
                </YAxis>
                <Tooltip contentStyle={{ backgroundColor: '#4A4A4A' }} />
                <Line type="monotone" dataKey="temperature" stroke={theme.palette.primary.main} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>  
    )
};

export default Graph;

