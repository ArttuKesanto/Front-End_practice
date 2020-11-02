import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    otsikko: {
      color: green[700]
    }
  })
)

function TyyliMUI () {
  const classes = useStyles();

  return (
    <Typography className={classes.otsikko}>Material-UI</Typography>
  )
}

export default TyyliMUI;
