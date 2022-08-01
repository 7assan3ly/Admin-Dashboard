import React from 'react'
import './widgetLg.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, date, amount, status) {
  return { name, date, amount, status };
}

const rows = [
  createData('Hassan ALy', '1 Sep 97', '$77', 'Approved'),
  createData('Hassan ALy', '1 Sep 97', '$77', 'Approved'),
  createData('Hassan ALy', '1 Sep 97', '$77', 'Pending'),
  createData('Hassan ALy', '1 Sep 97', '$77', 'Declined'),
];

export default function WidgetLg() {
  return (
    <div className='widgetLg'>
      <div className='WidgetLgWrapper'>
        <h3 className='widgetLgTitle'>Latest Transactions</h3>
        <div className='WidgetLgTable'>


          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Customer</TableCell>
                  <TableCell align="center">Date</TableCell>
                  <TableCell align="center">Amount</TableCell>
                  <TableCell align="center">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.date}</TableCell>
                    <TableCell align="center">{row.amount}</TableCell>
                    <TableCell align="center">{row.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>


        </div>
      </div>
    </div>
  )
}
