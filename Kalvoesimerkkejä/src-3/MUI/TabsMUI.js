import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import CreateIcon from '@material-ui/icons/Create';
import ListIcon from '@material-ui/icons/List';
import EtusivuMUI from '../components/EtusivuMUI';
import HenkilolomakeMUI from '../components/HenkilolomakeMUI';
import HenkilolistaMUI from '../components/HenkilolistaMUI';

const henkilotTaulukko = [
  { id: 1, nimi: 'Matti', email: 'matti@joku.fi' },
  { id: 2, nimi: 'Maija', email: 'maija@joku.fi' }
];

function TabsMUI () {
  const [value, setValue] = useState(0);

  const handleChange = (event, val) => {
    setValue( val );
  }

  return (
    <div>
       <AppBar position='static'>
          <Tabs value={ value } onChange={ handleChange }
                variant='fullWidth' centered>
             <Tab label='Etusivu' icon={ <HomeIcon /> } />
             <Tab label='Lisää'   icon={ <CreateIcon /> } />
             <Tab label='Listaa'  icon={ <ListIcon /> } />
          </Tabs>
       </AppBar>
       { value === 0 && <EtusivuMUI /> }
       { value === 1 && <HenkilolomakeMUI /> }
       { value === 2 && <HenkilolistaMUI henkilot={henkilotTaulukko} /> }
    </div>
  )
}

export default TabsMUI;
