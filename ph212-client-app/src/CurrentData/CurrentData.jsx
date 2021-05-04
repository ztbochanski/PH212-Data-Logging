import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title/Title';

function preventDefault(event) {
  event.preventDefault();
}

const currentTemp = "35 C"
const currentDate = new Date().toUTCString();

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function CurrentData() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Current Temperature</Title>
      <Typography component="p" variant="h4">
        {currentTemp}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      {currentDate}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View All
        </Link>
      </div>
    </React.Fragment>
  );
}