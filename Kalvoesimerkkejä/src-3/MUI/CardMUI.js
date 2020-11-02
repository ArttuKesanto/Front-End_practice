import React from 'react';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';

function CardMUI () {
  return (
  <Paper>
      <Card>
        <CardContent>
          <Typography variant='h5'>Matti</Typography>
          <Typography variant='body1'>matti@joku.fi</Typography>
        </CardContent>
      </Card>
      <Card>
        <CardHeader
           avatar={ <Avatar><PersonIcon /></Avatar>}
           title='Matti'
           subheader='13.3.2019' />
        <CardContent>
            <Typography variant='body1'>Matti on ....</Typography>
        </CardContent>
     </Card>
  </Paper>
  )
}

export default CardMUI;
