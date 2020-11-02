import React from 'react';
import Typography from '@material-ui/core/Typography';

function TypoMUI() {
  return (
    <div>
      <Typography variant='h5'>maija@joku.fi</Typography>
      <Typography color='primary' variant='h5'>maija@joku.fi</Typography>
      <Typography align='right' color='secondary' variant='h5'>maija@joku.fi</Typography>
      <Typography align='center' color='textSecondary' variant='h5'>maija@joku.fi</Typography>
      <Typography display='inline' variant='h5'>Maija </Typography>
      <Typography display='inline' variant='h5'>maija@joku.fi</Typography>
    </div>
  );
}

export default TypoMUI;
