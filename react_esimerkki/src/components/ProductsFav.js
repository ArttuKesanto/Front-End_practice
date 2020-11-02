import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';

function ObjecttableProduct (props) {
  
  return (
    <Grid container spacing={6} justify="space-evenly"
    alignItems="center" direction="row" >
    { 
      props.products.map ( item => {
        return(
          <Grid item key={item.id}>
            <Card style={ {minWidth: 200, minHeight: 400}} alignContent="center">
              <CardHeader
                title={item.otsikko}
                subheader={ item.paiva } />
                <CardContent align="center">
                  {
                    item.kuva ?
                    <CardMedia image={ item.kuva } title={ item.otsikko } 
                    style={{height: 150, width: 200}} />
                    :
                    <Typography style={{height: 150, width: 200}}>
                      Ei kuvaa
                    </Typography>
                  }
                  <Typography color='secondary'> { item.paikka }</Typography>
                  <Typography color='textSecondary'> { item.rating }</Typography>
                  <Typography color='textSecondary'> { item.kuvaus }</Typography>
                </CardContent>
                <CardActions style={{justifyContent: 'center'}}>
                  <Button startIcon={<EditIcon />}></Button>
                  <Button color='secondary' startIcon={<DeleteIcon />}></Button>
                </CardActions>
            
            </Card>

            </Grid>
        )
      })
    }
    </Grid>
    


    
  )}

export default ObjecttableProduct;