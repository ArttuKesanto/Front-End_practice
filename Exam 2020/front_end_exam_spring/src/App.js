import React from 'react'; // This file starts the components!
import logo from './logo.svg';
import './App.css';

//Navigation component:
import MenuBarComputer from './components/NavBarExam';

//Reititys, OPTIONAL:
import { BrowserRouter, Route, Switch} from 'react-router-dom';

//Themes, CssBaseline:
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green'; //Changed to Blue!

//Components:
import blueGrey from '@material-ui/core/colors/blueGrey';
import { blue } from '@material-ui/core/colors';
import FormExample from './components/BasicFormExam';
import FetchExam from './components/FetchExam';


const ownTheme = createMuiTheme({ // Using a theme, extra.
  palette: {
      primary: {main: blue[200], contrastText: '#120f0f'},
      secondary: {main: '#b53410', contrastText: '#FFFFFF'},
      text: {primary: blueGrey[800], secondary: '#1c0d09', contrastText: '#FFFFFF'},
      action: {active: purple[200], selected: '#FFFFFF'},
      background: {default: '#fbfcfa'},
   },
  typography: {
    fontFamily: ['Bellota', 'poppins']
   },
  overrides: { 
  },
  });

  const tiedot = { nimi: 'Risto Reipas', tuntipalkka: 15.90};


function App() {
  return (
      <BrowserRouter>
        <MuiThemeProvider theme={ownTheme}>
          <div className="App">
              <CssBaseline />
              <MenuBarComputer />
                  <Switch>
                      <Route exact path="/" render={(props) => <FormExample {...props} tiedot={ tiedot }/> } />
                      <Route path='/fetchexample' component={ FetchExam } />
                      <Route component = { FetchExam } />
                  </Switch>
          </div>
          </MuiThemeProvider>
      </BrowserRouter>
  );
}

export default App;