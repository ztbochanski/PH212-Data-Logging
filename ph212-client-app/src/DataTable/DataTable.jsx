import React from 'react';
import { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Title from '../Title/Title';

// Generate Order Data
function createData(id, time, measurement) {
  return { id, time, measurement };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley'),
  createData(1, '16 Mar, 2019', 'Paul McCartney'),
  createData(2, '16 Mar, 2019', 'Tom Scholz'),
  createData(3, '16 Mar, 2019', 'Michael Jackson'),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen'),
  createData(5, '15 Mar, 2019', 'Bruce Springsteen'),
  createData(6, '15 Mar, 2019', 'Bruce Springsteen'),
  createData(7, '15 Mar, 2019', 'Bruce Springsteen'),
  createData(8, '15 Mar, 2019', 'Bruce Springsteen'),
  createData(9, '15 Mar, 2019', 'Bruce Springsteen'),
];

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

export default function TemperatureTable() {
    const classes = useStyles();
    const [isHidden, setHidden] = useState(true);
    return (
        <React.Fragment>
        <Title>Temperatures</Title>
        <Table size="small">
            <TableHead>
            <TableRow>
                <TableCell>Time</TableCell>
                <TableCell>Temperature (F)</TableCell>
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