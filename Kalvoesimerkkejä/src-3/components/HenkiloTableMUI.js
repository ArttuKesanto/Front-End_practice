import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function HenkiloTableMUI(props) {
  return (
   <Paper>
     <Table>
      <TableHead>
          <TableRow>
            <TableCell>Nimi</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
      </TableHead>
      <TableBody >
      { props.henkilot.map(henkilo => {
          return (
            <TableRow key={ henkilo.id }>
              <TableCell>{henkilo.nimi}</TableCell>
              <TableCell>{henkilo.email}</TableCell>
            </TableRow>
         )
      })
     }
     </TableBody>
   </Table>
  </Paper>
  );
}

export default HenkiloTableMUI;
