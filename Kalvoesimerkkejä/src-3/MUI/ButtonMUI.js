import React from 'react';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

function ButtonMUI () {
  return (
    <div>
      <Button variant='contained'>Etusivulle</Button>
      <Button><HomeIcon /></Button>
      <Button><HomeIcon /> Etusivulle</Button>
      <div>
        <Button><MenuIcon /></Button>
        <IconButton><MenuIcon /></IconButton>
      </div>
    </div>
  )
}

export default ButtonMUI;
