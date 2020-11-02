import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    otsikko: {
      color: blueGrey[900],
      textAlign: 'center',
      marginTop: 20,
      fontSize: 20
    }
  })
)

function EtusivuMUI(props) {
    const classes = useStyles();

  return (
    <div>
      <Typography className={classes.otsikko}>Material-UI</Typography>
    </div>
  )
}

export default EtusivuMUI;
