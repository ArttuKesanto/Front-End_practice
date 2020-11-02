import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CreateIcon from '@material-ui/icons/Create';
import ListIcon from '@material-ui/icons/List';

function ListMUI () {
  return (
    <List>
     <ListItem >
        <ListItemIcon><CreateIcon /></ListItemIcon>
        <ListItemText primary='Lisää' />
     </ListItem>
     <ListItem button>
        <ListItemIcon><ListIcon /></ListItemIcon>
        <ListItemText primary='Listaa' />
     </ListItem>
    </List>
  )
}

export default ListMUI;
