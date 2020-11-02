import React from 'react';
import Sananlasku from './components/Sananlasku';
import HenkilolomakeMUI from './components/HenkilolomakeMUI';
//import HenkilolistaMUI from './components/HenkilolistaMUI';
import HenkiloMUI from './components/HenkiloMUI';
//import GridMUI from './MUI/GridMUI';
//import TableMUI from './MUI/TableMUI';
//import ButtonMUI from './MUI/ButtonMUI';
//import PaivaMUI from './MUI/PaivaMUI';
//import AppBarMUI from './MUI/AppBarMUI';
//import TabsMUI from './MUI/TabsMUI';
//import ListMUI from './MUI/ListMUI';
//import DrawerMUI from './MUI/DrawerMUI';
import MenuMUI from './MUI/MenuMUI';
//import TyyliMUI from './MUI/TyyliMUI';
import HaeHenkilot from './components/HaeHenkilot';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import CssBaseline from '@material-ui/core/CssBaseline';

import { BrowserRouter, Route, Switch} from 'react-router-dom';

const theme = createMuiTheme({
  palette: {
    primary: {main: blueGrey[300], contrastText: 'white'},
    secondary: {main: blueGrey[700], contrastText: 'white'},
    text: {primary: blueGrey[700], secondary: blueGrey[900], contrastText: 'white'},
    action: {hover:  blueGrey[100]},
    background: {default: 'white'}
  },
  typography: {
    fontFamily: ['Merriweather', 'sans-serif'],
  },
  overrides: {
    MuiButton: {
      root: {
        color: 'white',
        backgroundColor: blueGrey[200],
        '&&:hover': {
          backgroundColor: 'white',
          color: blueGrey[400],
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: blueGrey[200] }
      }
    }
  }
});

/*
const henkilotTaulukko = [
  { id: 1, nimi: 'Matti',
    email: 'matti@joku.fi',
    kuva: 'http://myy.haaga-helia.fi/~marsi/pictures/olio.png'
  },
  { id: 2,
    nimi: 'Maija',
    email: 'maija@joku.fi',
    kuva: null
  }
];
*/

function HenkiloApp() {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={ theme }>
       <div>
        <CssBaseline />
        <MenuMUI />
        <Switch>
            <Route exact path='/' component={ Sananlasku } />
            <Route path='/lisaa' component={ HenkilolomakeMUI } />
            { /*
            <Route path='/listaa'
                   render={ (props) => <HenkilolistaMUI {...props} henkilot={ henkilotTaulukko }/> } />
            */ }
            <Route path='/listaa' component={ HaeHenkilot } />
            <Route path='/nayta/:id/:nimi/:email' component={ HenkiloMUI } />
            <Route component={ Sananlasku } />
        </Switch>
     </div>
    </MuiThemeProvider>
   </BrowserRouter>
  );
}

export default HenkiloApp;
