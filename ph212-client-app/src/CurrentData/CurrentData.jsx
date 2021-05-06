import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title/Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const CurrentData = ({latest}) => {
  const classes = useStyles();
  const currentDate = new Date().toUTCString();

  return (
    <React.Fragment>
      <Title>Current Temperature</Title>
      <Typography component="p" variant="h4">
        {latest} C
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {currentDate}
      </Typography>
      <div>
        <Link color="primary" href="https://firebase.google.com/" target="_blank">
          Google RTDB
        </Link>
      </div>
    </React.Fragment>
  );
}

export default CurrentData;