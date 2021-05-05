import React from 'react';
import { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title/Title';
import dbRef from '../DataHandler/DataHandler';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function CurrentData() {
  const classes = useStyles();
  const currentDate = new Date().toUTCString();
  const [ currentData, setCurrentData ] = useState();

  const onDataChange = (items) => {
    let array = [];
    items.forEach(item => {
        let data = item.val();
        array.push(data);
    });
    setCurrentData(Object.values(array[0]).splice(-1)[0].toFixed(2));
  };

  useEffect(() => {
    dbRef.on("value", onDataChange);

    return () => {
      dbRef.off("value", onDataChange);
    };

  }, []);

  return (
    <React.Fragment>
      <Title>Current Temperature</Title>
      <Typography component="p" variant="h4">
        {currentData} C
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