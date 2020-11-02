import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ContactsIcon from '@material-ui/icons/Contacts';

import { Link } from 'react-router-dom';

function HenkilolistaMUI(props) {
      return (
        <Grid container spacing={ 4 }>
          { props.henkilot.map(henkilo => {
            return (
              <Grid item key={ henkilo.id }>
                <Card style={ {minWidth: 150, minHeight: 200 }  } >
                  <CardContent>
                      <Typography variant='h5'>{ henkilo.nimi }</Typography>
                      <Typography>{ henkilo.email }</Typography>
                      {henkilo.kuva ?
                          <CardMedia
                          style={ {height: 100, width: 75} }
                          image={ henkilo.kuva }
                          title={ henkilo.nimi } />
                          :
                          <Typography style={ {height: 100, width: 75} }>Ei kuvaa</Typography> }

                      <IconButton  style={{marginLeft: 35, marginRight: 35}} component={ Link }
                                   to={'/nayta/' + henkilo.id + '/' + henkilo.nimi + '/' + henkilo.email  }>
                                   
                      <ContactsIcon /></IconButton>
                  </CardContent>
                </Card>
              </Grid>
          )}
        )}
      </Grid>
    );
}

export default HenkilolistaMUI;
