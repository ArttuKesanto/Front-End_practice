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
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import ComputerIcon from '@material-ui/icons/Computer';
import ThumbUpTwoToneIcon from '@material-ui/icons/ThumbUpTwoTone';
import EuroSymbolTwoToneIcon from '@material-ui/icons/EuroSymbolTwoTone';
import CategoryIcon from '@material-ui/icons/Category';

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


function ProductInfo() {
    
    const classes = useStyles(); // Importoidaan mukaan.
    const [productInfo, setInfo] = useState([]);
    console.log(productInfo);
    const [bookName, setName] = useState([]);
    const [virhe, setVirhe] = useState('Searching...');

    const [ID, setID] = useState(9); // No longer in use.
    
    const fetchProducts = async () => {
        try {
            //Odotetaan responsea ja talletetaan response muuttujaan, perus fetch / async.
            const response = await fetch('https://hardwarestoreltd.herokuapp.com/eproducts'); // My own Back-End related to another course.
            //Muutetaan response JSON:iksi
            const json = await response.json();
            setVirhe('');
            setInfo(json);
           
        } catch (error) {
            setVirhe("Haku ei onnistunut, kokeile uudestaan! Please try again!");
        }
    }
    // Tässä kohtaa useEffect laukaisee tiedon haun kun komponentti on luotu, remember - Arttu K.
    useEffect(() => { fetchProducts() }, []);
    console.log(productInfo);

    const hae = (e) => {
        if (ID.length > 0) {
         fetchProducts(ID);
        } else if (ID.length == 0) {
            fetchProducts(ID);
            setVirhe('Anna tuotteen ID tarkastellaksesi vain yhtä tuotetta. / Please input a product ID to analyze a product');
        } else {
            setVirhe('Currently searching for all products from an external outlet - BETA.');
        }
     };


   return (
    <div>
    <Container align="center">
     {virhe} <br />
     <Paper elevation={1} align="center" className={classes.themetitle}>
     <FormControl style={ {fontSize: '12px'} }>
         {/*<TextField htmlFor='ravintola' variant="outlined" label={"Ravintolan ID, nyt: " + ID}></TextField> */}
         <Typography align="center" className={classes.textStyle} style={ {padding: '4px'} }>{ "Search for a product; now searching for all available products."}</Typography>
         
             <Select id="productchoosing" name="productchoosing" value={ID} onChange={ (e) => setID(e.target.value) }>
                 <MenuItem value='10'>All products (placeholder)</MenuItem>
                 <MenuItem value='11'>All products (placeholder)</MenuItem>
                 <MenuItem value='9'>All products</MenuItem> 
                 <MenuItem value='8'>All products (placeholder)</MenuItem>
             </Select>
         {/*<Typography value={ID}>{ID}</Typography>*/}
         <Button color="primary" variant="contained" value={ID} onClick={ (e) => hae(e) }>Search</Button>
       
     </FormControl>
     </Paper>
         <Paper align="center" elevation={3} className={classes.themetitle}>
             <Typography variant={"h1"} align="center" style={ {padding: '4px'} }>{"   "}</Typography>
             <Typography variant={"h2"} align="center">{}<ComputerIcon style={ {fontSize: 70} }/></Typography>
         </Paper>
     </Container>   
     <Container>
         {/*sisäkkäiset map-funktiot ja Objektiksi muuttaminen, advice from Marttila Sirpa. Did not need this after all...*/}
         <Grid container spacing={5} direction="column" alignItems="stretch">
            {
            productInfo.map ( product => {
                return (
                        <Grid item key={product.id}>
                          <Card style={ {minWidth: 80, minHeight: 300, backgroundColor:'#edeae1'} } >
                            <CardHeader
                              title={product.name}
                              subheader={ product.year } />
                              <CardContent align="center">
                              <Typography color='textSecondary'> { product.description }</Typography>
                              <Typography color='textSecondary'> { product.availability }</Typography>
                              <EuroSymbolTwoToneIcon />
                                <Typography color='textSecondary'> { (product.price).toFixed(2) } </Typography>
                              </CardContent >
                              <CardActions style={{justifyContent: 'center'}}>
                                <CategoryIcon /> {product.category.name}
                                <ThumbUpTwoToneIcon /> {product.rating}
                              </CardActions>
                          
                          </Card>
              
                          </Grid>



                )
            }

                ) 
            }
            </Grid>
    </Container>     
</div>);
}


export default ProductInfo;