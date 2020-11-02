import React from 'react'; // Käytetään tätä tiedostoa starttaamaan komponentteja.
import logo from './logo.svg';
import './App.css';
//import ItemInformation from './components/TietotekniikkaTuoteListaus';
import TietotekniikkaLomake from './components/TietotekniikkaLomake';
//import Objecttable from './components/TietoTekniikkaTuotePrinted';
import ItemInformation from './components/TietotekniikkaTuoteListaus';
import MealInformation from './components/FetchFood';
import Ruokalista from './tehtavat/GetSodexo';
//import ObjektiTaulukko from './tehtavat/HenkKortit';
import DiscreteSlider from './tehtavat/SaaSlider';
import ObjektiTaulukkoPrint from './tehtavat/MaterialUI/GridOTable';
import DrawerMUI from './tehtavat/Navigaatio/DrawerMUI';
import NavBar from './tehtavat/Navigaatio/TehtavaNav2';
import MenuBarComputer from './components/NavBarComputerParts';
import ObjektiTaulukko from './components/Resalers';
import Carlist from './tehtavat/CarListing/CarListExample';
//Themes add. colours:
import blueGrey from '@material-ui/core/colors/blueGrey';
//Reititys:
import { BrowserRouter, Route, Switch} from 'react-router-dom';
//Themes, CssBaseline:
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import ObjecttableProduct from './components/ProductsFav';
import TietotekniikkaLomakeEdit from './components/EditProduct';
import InfoPanelsCompany from './components/ExpendableInfo';
import AppNotes from './components/ToDo';
import ProductInfo from './tehtavat/HardwareStoreFront/HardWareProduct';


const ownTheme = createMuiTheme({
  palette: {
      primary: {main: green[200], contrastText: '#120f0f'},
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

  const favProducts = [ { 
    id: 1,
    otsikko: 'Logitech Xy 3000',
    paiva: '26.5.2020',
    paikka: 'Verkkokauppa.com',
    rating: '5/5',
    kuvaus: 'What a typing experience!',
    kuva: 'https://cdn.hswstatic.com/gif/76008099computerpictures.jpg'
    },
    { 
    id: 2,
    otsikko: 'Matt Hold x3000',
    paiva: '8.6.2020',
    paikka: 'Jimms-Store',
    rating: '5/5',
    kuvaus: 'What a fine piece of hardware!',
    kuva: 'https://cdn.hswstatic.com/gif/76008099computerpictures.jpg'
    },
    { 
    id: 3,
    otsikko: 'Acer 3000 144Hz',
    paiva: '20.5.2020',
    paikka: 'Micronet.com',
    rating: '4/5',
    kuvaus: 'Get visual fidelity with no comparison!',
    kuva: 'https://cdn.hswstatic.com/gif/76008099computerpictures.jpg'
    } ];

function App() {
  return (
      <BrowserRouter>
        <MuiThemeProvider theme={ownTheme}>
          <div className="App">
              <CssBaseline />
              <MenuBarComputer />
                  <Switch>
                      <Route exact path='/' exact component=  {null} />
                      <Route path='/products' render={(props) => <ObjecttableProduct {...props} products={ favProducts }/> } />
                      <Route path='/resellers' exact component={ ObjektiTaulukko } />
                      <Route path='/sellproducts' component={ ItemInformation } />
                      <Route path='/addproducts' component={ TietotekniikkaLomake } />
                      <Route path='/owner' component={() => { // Creating an empty component with a function that redirects to an external page.
                      window.location.href = 'http://www.linkedin.com/in/arttu-aleksi-kesanto'; 
                      return null;
                      }}/>
                      <Route path='/informationaboutus' component={ InfoPanelsCompany } />
                      <Route path='/restaurants' component={ Ruokalista } />
                      <Route path='/customernotes' component={ AppNotes } />
                      <Route path='/externaloutlet' component={ ProductInfo } />
                      <Route path='/edit/:id/:name/:maker/:date/:type/:description?' component={ TietotekniikkaLomakeEdit } />
                      <Route path='/carlist' component= { Carlist }/>
                      <Route component = { ItemInformation } />
                  </Switch>
          </div>
          </MuiThemeProvider>
      </BrowserRouter>
  );
}

export default App;

    //<div className="App">
      //<header className="App-header">
        //<img src={logo} className="App-logo" alt="logo" />
        //<p>
          //Edit <code>src/App.js</code> and save to reload.
        //</p>
        //<a
          //className="App-link"
          //href="https://reactjs.org"
          //target="_blank"
          //rel="noopener noreferrer"
        //>
         // Learn React
        //</a>
      //</header>
    //</div>
