
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    kortti: {
    backgroundColor: '#9c846a', color: 'white',
    border: '4px solid grey',
    borderRadius: '10px',
    margin: '10px'
        }
    })

function Yhteystietoja(props) {
    const classes = useStyles();
    return(
        <Grid container spacing={3}>
            { props.yhteystiedot.map( tieto => {
                    return(
                        <Grid item key={tieto.id} style= {{margin: '10px'}}>
                            <Card className={ classes.kortti } style={{minWidth: 150, minHeigth: 200}}>
                            <CardActions style={{fontSize: 12}}>
                                    <IconButton color='primary'><AccountCircleIcon />näytä</IconButton>
                                    <IconButton color='secondary'><DeleteIcon />poista</IconButton>      
                                </CardActions>
                                <CardHeader
                                    title={tieto.ravintola}
                                    subheader={tieto.osoite}>
                                </CardHeader>
                                <CardContent>
                                {
                                    tieto.kuva ?
                                    <CardMedia image={tieto.kuva} title={tieto.ravintola} style={{width: 200, height: 150 }}/>
                                    : <Typography>Ei kuvaa</Typography>
                                }
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })
            }
        </Grid>
    )}



export default Yhteystietoja;