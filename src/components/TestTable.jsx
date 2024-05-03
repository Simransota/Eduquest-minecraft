import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(srNo, subject, testName, score) {
  return { srNo, subject, testName, score };
}

const rows = [
  createData(1, 'Mathematics', 'Midterm Exam', 85),
  createData(2, 'Science', 'Final Exam', 78),
  createData(3, 'History', 'Quiz 1', 92),
  createData(4, 'English', 'Term Paper', 80),
  createData(5, 'Geography', 'Final Project', 88),
];

export default function BasicTable() {
  return (
    <div className='w-[38em] absolute left-[13em]'>

    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sr. No</TableCell>
            <TableCell align="right">Subject</TableCell>
            <TableCell align="right">Test Name</TableCell>
            <TableCell align="right">Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.srNo}>
              <TableCell component="th" scope="row">
                {row.srNo}
              </TableCell>
              <TableCell align="right">{row.subject}</TableCell>
              <TableCell align="right">{row.testName}</TableCell>
              <TableCell align="right">{row.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
