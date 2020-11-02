import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

function TableMUI () {
  return (
    <Paper>
     <Table>
       <TableHead>
          <TableRow>
            <TableCell>Nimi</TableCell><TableCell>Email</TableCell>
          </TableRow>
       </TableHead>
       <TableBody>
          <TableRow>
            <TableCell>Matti</TableCell>
            <TableCell>matti@joku.fi</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Maija</TableCell>
            <TableCell>maija@joku.fi</TableCell>
          </TableRow>
       </TableBody>
    </Table>
  </Paper>
  )
}

export default TableMUI;
