import React from 'react';
import { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Title from '../Title/Title';
import dbRef from '../DataHandler/DataHandler';

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

export default function TemperatureTable() {
    const classes = useStyles();
    const [isHidden, setHidden] = useState(true);
    const [measurements, setMeasurements] = useState([]);

    const onDataChange = (items) => {
        let data_reference_array = [];
        items.forEach(item => {
            let key = item.key;
            let data = item.val();
            data_reference_array.push({
                key: key,
                data: data,
            });
        });
        let measurements_array = [];
        let tempValues = Object.values(data_reference_array[0].data);
        let tempKeys = Object.keys(data_reference_array[0].data);
        let timeValues = Object.values(data_reference_array[1].data);
        for (var i = 0; i < tempValues.length; i++) {
            let key = tempKeys[i];
            let temp = tempValues[i];
            let timestamp = timeValues[i];
            let time = new Date(timestamp).toUTCString();
            measurements_array.push({
                id: key,
                measurement: temp,
                time: time,
            })
        }
        setMeasurements(measurements_array);
    };

    useEffect(() => {
        dbRef.on("value", onDataChange);

        return () => {
            dbRef.off("value", onDataChange);
        };

    }, []);

    const rows = [...measurements]

    return (
        <React.Fragment>
        <Title>Temperatures</Title>
        <Table size="small">
            <TableHead>
            <TableRow>
                <TableCell>Time</TableCell>
                <TableCell>Temperature (C)</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {(isHidden
                ? rows.slice(0, 4)
                : rows
              ).map((row) => (
                <TableRow key={row.id}>
                <TableCell>{row.time}</TableCell>
                <TableCell>{row.measurement}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        <div className={classes.seeMore}> 
        {isHidden
            ? <Link color="primary" href="#" onClick={() => setHidden(false)}>
            See more temps
            </Link>
            : <Link color="primary" href="#" onClick={() => setHidden(true)}>
            Hide temps
            </Link>
        }
        </div>
        </React.Fragment>
    );
}