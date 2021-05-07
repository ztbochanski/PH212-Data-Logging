import React from 'react';
import { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Title from '../Title/Title';
import { CSVLink } from "react-csv";

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    }
}));

const TemperatureTable = ({measurements}) => {
    const classes = useStyles();
    const [isHidden, setHidden] = useState(true);
    const rows = [...measurements]

    const dataArray = []
    for (var i in measurements){
        dataArray.push(
            measurements[i]
        );
    }

    const csvReport = {
        data: dataArray,
        headers: null,
        filename: 'Lab_Data.csv'
    };

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
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="stretch"
            spacing={3}
            >
            <Grid item>
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
            </Grid>
            <Grid item>
                <div className={classes.seeMore}>
                    <CSVLink {...csvReport}>CSV</CSVLink>
                </div>
            </Grid>
        </Grid>
        </React.Fragment>
    );
}

export default TemperatureTable;