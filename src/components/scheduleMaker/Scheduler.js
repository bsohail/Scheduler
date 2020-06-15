import React from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import moment from 'moment';
import 'react-week-calendar/dist/style.css';
import WeekCalendar from 'react-week-calendar';
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
const [myValue, setValue] = React.useState('');
const classes = useStyles();
    return (
	<Container maxWidth="lg">
  <Paper elevation={3} style={{marginTop:'50px'}} >
  <Grid container spacing={0}>
    <Grid item xs={2}  >
    <Card style={{display:'flex', justifyContent:'center'}}>
    <CardContent >
    <Typography variant="h6" noWrap style={{textAlign:'center'}}>
      Toolbar
      </Typography>
<br/><br/>
<TextField
          id="filled-helperText"
          label="Title"
          defaultValue=""
          variant="outlined"
          onChange={(e) => setValue(e.target.value)}
        />
<br/><br/>
      <Button variant="outlined" color="default" style={{color:'green'}} >Add course</Button>
      <br/><br/>
      <Button variant="outlined" color="default" style={{color:'red'}}>Remove course</Button>
      <br/><br/>
      <Button variant="outlined" color="default" style={{color:'#FFCE00'}} >Backup as JSON</Button>
      <br/><br/>
      <Button variant="outlined" color="default" style={{color:'#FFCE00'}} >Upload JSON</Button>
      <br/><br/>
      <Button variant="outlined" color="default" style={{color:'#005596'}} >Save as JPG</Button>
    </CardContent>
    </Card>


      </Grid>

      <Grid item xs={10}>
<Container maxWidth="md">
<Card>
<CardContent >
<Typography variant="h6" noWrap style={{textAlign:'center'}} >
  {myValue.toString()}
</Typography>

  <WeekCalendar
      startTime = {moment({h: 8, m: 0})}
      endTime = {moment({h: 22, m: 1})}
      numberOfDays= {5}
      scaleUnit={60}
      firstDay={moment().day(1)}
      dayFormat={'ddd'}
      useModal={false}
      //selectedIntervals = {this.state.selectedIntervals}
      //onIntervalSelect = {this.handleSelect}
    //  onIntervalUpdate = {this.handleEventUpdate}
      //onIntervalRemove = {this.handleEventRemove}
    />
    </CardContent>
    </Card>


{ /**using material ui table **/}
  {/**
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
    **/}
    </Container>
    </Grid>
    </Grid>
    </Paper>
    <br/>
    <h5 style={{textAlign:'center'}}>Nitin Ramesh, Bilal Sohail 2020</h5>
	</Container>
    );
  }


export default Scheduler;
