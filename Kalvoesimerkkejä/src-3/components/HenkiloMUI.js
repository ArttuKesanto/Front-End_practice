import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';

import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function HenkiloMUI (props) {
  let { id } = useParams();
  let { nimi } = useParams();
  let { email } = useParams();

// tai  let { id, nimi, email } = useParams();
  return (
    <Card>
      <CardHeader
         avatar={ <Avatar><PersonIcon /></Avatar>}
         title={ nimi }
         subheader='6.10.2019' />
      <CardContent>
          <Typography>Id: { id }</Typography>
          <Typography>{ email }</Typography>
          <Link to='/listaa'><Typography>Takaisin listauksen</Typography></Link>
      </CardContent>
   </Card>
  );
}

export default HenkiloMUI;
