import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';

function GridMUI () {
  return (
    <Grid container spacing={4}>
      <Grid item>
        <Card>
          <CardContent>
            <Typography variant='h5'>Matti</Typography>
            <Typography variant='body1'>matti@joku.fi</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card>
          <CardContent>
            <Typography variant='h5'>Maija</Typography>
            <Typography variant='body1'>maija@joku.fi</Typography>
          </CardContent>
        </Card>
      </Grid>
     </Grid>
  )
}

export default GridMUI;
