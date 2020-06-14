import React from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 11,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
function createData(time, monday, tuesday, wednesday, thursday, friday) {
  return { time, monday, tuesday, wednesday, thursday, friday };
}

const rows = [
  createData('08.00'),
  createData('09.00'),
  createData('10.00'),
  createData('11.00'),
  createData('12.00'),
  createData('13.00'),
  createData('14.00'),
  createData('15.00'),
  createData('16.00'),
  createData('17.00'),
  createData('18.00'),
  createData('19.00'),
  createData('20.00'),
  createData('21.00'),
  createData('22.00'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
  tableRightBorder: {
        borderWidth: 0,
        borderRightWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
    },
});

function Scheduler () {


const classes = useStyles();
    return (
	<Container maxWidth="md">
      <h2>
        Schedule maker
      </h2>
<TableContainer component={Paper} style={{maxHeight:600}}>
      <Table classtime={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center" >Time</StyledTableCell>
            <StyledTableCell align="center">Mon</StyledTableCell>
            <StyledTableCell align="center">Tue</StyledTableCell>
            <StyledTableCell align="center">Wed</StyledTableCell>
            <StyledTableCell align="center">Thu</StyledTableCell>
            <StyledTableCell align="center">Fri</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.time}>
              <StyledTableCell align="center" className={classes.tableRightBorder}>{row.time}</StyledTableCell>

              <StyledTableCell align="right" className={classes.tableRightBorder}>{row.monday}</StyledTableCell>
              <StyledTableCell align="right" className={classes.tableRightBorder}>{row.tuesday}</StyledTableCell>
              <StyledTableCell align="right" className={classes.tableRightBorder}>{row.wednesday}</StyledTableCell>
              <StyledTableCell align="right" className={classes.tableRightBorder}>{row.thursday}</StyledTableCell>
              <StyledTableCell align="right" >{row.friday}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <br/>
    <h5 style={{textAlign:'center'}}>Nitin Ramesh, Bilal Sohail 2020</h5>
	</Container>
    );
  }


export default Scheduler;
