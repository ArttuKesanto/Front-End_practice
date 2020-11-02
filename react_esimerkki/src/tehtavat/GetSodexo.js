// IN co-operation with Feeliks Kilpi. For reference. We have detailed and specs'd the code together. We have different files now.
import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';

//Listing
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

//Routing:
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

// Icons
import EcoIcon from '@material-ui/icons/Eco';
import EuroIcon from '@material-ui/icons/Euro';
import MoodIcon from '@material-ui/icons/Mood';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

// STYLES, colours, own themes:
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import lime from '@material-ui/core/colors/lime';
import teal from '@material-ui/core/colors/teal';


const useStyles = makeStyles({
    theme: {
    backgroundColor: '#d5edeb', color: '#nnn',
    border: '1px solid grey',
    borderRadius: '20px',
    margin: '25px'
        },

    textStyle: {
        fontFamily: 'Poppins'
        },
    themetitle: {
    backgroundColor: '#e6d6aa', color: '#nnn',
    border: '1px solid grey',
    borderRadius: '20px',
    margin: '25px'
    }
    })


function Ruokalista() {
    
    const classes = useStyles(); // Importoidaan mukaan.
    const [ruokalistat, setRuokalistat] = useState([]);
    const [virhe, setVirhe] = useState('Haetaan...');
    const [ravintola, setRavintola] = useState();
    const [luonastietoja, setLounastietoja] = useState();
    // Ravintolan ID, josta tiedot haetaan
    const [ID, setID] = useState(23);
    // Oletuksena 59, eli Kalasatama, vaihdettu Pianoon. - Arttu K.
    
    const fetchUrl = async () => {
        try {
            //Odotetaan responsea ja talletetaan response muuttujaan, perus fetch / async.
            const response = await fetch('https://www.sodexo.fi/ruokalistat/output/weekly_json/' + ID);
            //Muutetaan response JSON:iksi
            const json = await response.json();
            setVirhe('');
            setRuokalistat(json.mealdates);
            setRavintola(json.meta.ref_title);
            setLounastietoja(json.timeperiod);
           
        } catch (error) {
            setVirhe("Haku ei onnistunut, kokeile uudestaan!");
        }
    }
    // Tässä kohtaa useEffect laukaisee tiedon haun kun komponentti on luotu, remember - Arttu K.
    useEffect(() => { fetchUrl() }, []);

    const hae = (e) => {
        if (ID.length > 0) {
         fetchUrl(ID);
        }else {
         setVirhe('Anna ravintolan ID tai valitse eri ravintola! Pahoittelut virheestä!');
        }
     };

     var vegIcon = <FastfoodIcon style= {{fontSize: 40}}/>; // NOT IN USE.

   return (
   <div>
       <Container align="center">
        {virhe} <br />
        <Paper elevation={1} align="center" className={classes.themetitle}>
        <FormControl style={ {fontSize: '12px'} }>
            {/*<TextField htmlFor='ravintola' variant="outlined" label={"Ravintolan ID, nyt: " + ID}></TextField> */}
            <Typography align="center" className={classes.textStyle} style={ {padding: '4px'} }>{ "Hae lähintä ravintolaasi valmiista listasta, nyt valittu ID hakua varten on " + ID}</Typography>
            
                <Select id="ravintolavalinta" name="ravintolatlista" value={ID} onChange={ (e) => setID(e.target.value) }>
                    <MenuItem value='59'>Ravintola Kalasatama (59)</MenuItem>
                    <MenuItem value='89'>Ravintola Viikin Kartano (89)</MenuItem>
                    <MenuItem value='56'>Ravintola La Mer (56)</MenuItem>
                    <MenuItem value='127'>Ravintola JAMK Bittipannu (127)</MenuItem>
                    <MenuItem value='120'>Ravintola Elektra (120)</MenuItem>
                    <MenuItem value='121'>Ravintola Galaksi (121)</MenuItem>
                    <MenuItem value='275381'>Ravintola HDL Kotikallio (275381)</MenuItem>
                    <MenuItem value='260007'>Ravintola HDL Viikki (260007)</MenuItem>
                    <MenuItem value='181'>Ravintola TaSTe (181)</MenuItem>
                    <MenuItem value='23'>Ravintola Piano (23)</MenuItem>
                </Select>
            {/*<Typography value={ID}>{ID}</Typography>*/}
            <Button color="primary" variant="contained" value={ID} onClick={ (e) => hae(e) }>Hae</Button>
          
        </FormControl>
        </Paper>
            <Paper align="center" elevation={3} className={classes.themetitle}>
                <Typography variant={"h1"} align="center" style={ {padding: '4px'} }>{ravintola + "   "}</Typography>
                <Typography variant={"h2"} align="center">{luonastietoja}<FastfoodIcon style={ {fontSize: 70} }/></Typography>
            </Paper>
        </Container>   
        <Container>
            {/*sisäkkäiset map-funktiot ja Objektiksi muuttaminen, advice from Marttila Sirpa.*/}
            <Grid container spacing={5} direction="column" alignItems="stretch">
            { ruokalistat.map((tiedot) => (
                <Grid style={ {padding: '10px', fontSize: '14px'} } key = {tiedot.courses}>
                    <Card className={classes.theme}>
                        <CardHeader 
                        title={tiedot.date} 
                        subheader={ravintola}>
                        </CardHeader>
                            <CardContent>
                            <Typography color='secondary'>
                                <List>
                                    { (Object.values(tiedot.courses)).map (course => {
                                        //Indexin avulla kasvis-stringin etsiminen stringistä.
                                        console.log((course.category.indexOf('Kasvis')));
                                            return (
                                                <ListItem>
                                                {course.category.indexOf('Kasvis') === -1 ?
                                                course.title_fi + ' ' + course.properties + ' Hinta: ' + course.price  
                                                // ? : valintarakenne, great with React.
                                                :
                                                course.title_fi + ' ' + course.properties + ' Hinta: ' + course.price + ' Kasvisruoka' 
                                            /*<img src={"https://myy.haaga-helia.fi/~swd1ta001/kuvatJS/tiko.jpg"} alt={"kasvisruoka"} height={100}/> How to make... This to work? */
                                                }
                                                </ListItem> ) } 
                                    ) } 
                                </List>
                            </Typography>
                            </CardContent>
                        <CardActions>
                            <Button color="textSecondary" variant="outlined">Allergiatiedot <HelpOutlineIcon /></Button>
                            <Button color="textSecondary" variant="outlined">Hinnasto <EuroIcon /></Button>
                            <Button color="textSecondary" variant="outlined">Ilmastohyvitys <EcoIcon /></Button>
                            <Button color="textSecondary" variant="outlined">Suosikit <MoodIcon /></Button> {/*Placeholders for now*/}
                        </CardActions>
                    </Card>
                </Grid>
            
                    ))  }
            </Grid>
    </Container>     
</div>);
}


export default Ruokalista;