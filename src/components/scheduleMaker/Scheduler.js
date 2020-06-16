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
import './style.css';
import WeekCalendar from 'react-week-calendar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Fade from "@material-ui/core/Fade";
import Checkbox from '@material-ui/core/Checkbox';
import { SliderPicker } from 'react-color'

function createData(time, monday, tuesday, wednesday, thursday, friday) {
  return { time, monday, tuesday, wednesday, thursday, friday };
}

const useStyles2 = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,

    boxShadow: 'none',
    padding: theme.spacing(2, 4, 3)
  }
}));

function Scheduler () {
const [myValue, setValue] = React.useState('');
 const [openOptions, setOpenOptions] = React.useState(false);
 const [weekends, setWeekends]=React.useState(false);
const[headerColor, setheaderColor]=React.useState('#000000');
const[backgroundColor, setbackgroundColor]=React.useState('#FFFFFF');
 const handleOpenOptions = () => {
    setOpenOptions(true);
  };

  const handleCloseOptions = () => {
    setOpenOptions(false);
  };
  const handleColorChange = (hex) =>{

    setheaderColor(hex.hex.toString());
  };
  const handleBackgroundColorChange = (hex) =>{
    setbackgroundColor(hex.hex.toString());
  };
const classes2 = useStyles2();
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
<AppBar position="static" style={{backgroundColor:'transparent', boxShadow:'none'}}>
  <Toolbar>
  <Grid
      justify="space-between" // Add it here :)
      container
      spacing={24}
    >
    <Grid item />

      <Grid item>
<Tooltip title="Options">
    <IconButton edge="start"  color="black" aria-label="menu" onClick={handleOpenOptions}>
      <MoreVertIcon />
    </IconButton>
</Tooltip>
      </Grid>
    </Grid>
  </Toolbar>
</AppBar>
<Card style={{marginBottom:15}}>
<CardContent style={{backgroundColor: backgroundColor}}>
<Typography variant="h6" noWrap style={{textAlign:'center', color:headerColor}} >
  {myValue.toString()}
</Typography>
{weekends &&
  <WeekCalendar
      startTime = {moment({h: 8, m: 0})}
      endTime = {moment({h: 22, m: 1})}
      numberOfDays= {7}
      scaleUnit={60}
      firstDay={moment().day(1)}
      dayFormat={'dddd'}
      useModal={false}
      scaleFormat={'LT'}
      //selectedIntervals = {this.state.selectedIntervals}
      //onIntervalSelect = {this.handleSelect}
    //  onIntervalUpdate = {this.handleEventUpdate}
      //onIntervalRemove = {this.handleEventRemove}
    />}
    { !weekends && <WeekCalendar
        startTime = {moment({h: 8, m: 0})}
        endTime = {moment({h: 22, m: 1})}
        numberOfDays= {5}
        scaleUnit={60}
        firstDay={moment().day(1)}
        dayFormat={'dddd'}
        useModal={false}
        scaleFormat={'LT'}
        //selectedIntervals = {this.state.selectedIntervals}
        //onIntervalSelect = {this.handleSelect}
      //  onIntervalUpdate = {this.handleEventUpdate}
        //onIntervalRemove = {this.handleEventRemove}
      />
  }
    </CardContent>
    </Card>
    </Container>
    </Grid>
    </Grid>
    <Modal

          className={classes2.modal}
          open={openOptions}
          onClose={handleCloseOptions}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={openOptions}>
            <div className={classes2.paper}>
              <h2 >Options</h2>
              <FormControlLabel
          value="Include weekends"
          control={<Checkbox color="primary" />}
          label="Include weekends"
          labelPlacement="start"
          checked={weekends}
          onChange={(e) => setWeekends(e.target.checked)}
        />
        <p>Currently: {weekends?7:5} days shown</p>
        <p>Header color: </p>
        <SliderPicker
          color={headerColor}
          onChangeComplete={ handleColorChange }
         />
         <p>background color: </p>
         <SliderPicker
           color={backgroundColor}
           onChangeComplete={ handleBackgroundColorChange }
          />
              <p >
                theme options go here.
              </p>
            </div>
          </Fade>
        </Modal>
    </Paper>

    <br/>
    <h5 style={{textAlign:'center'}}>Nitin Ramesh, Bilal Sohail 2020</h5>
	</Container>

    );
  }


export default Scheduler;
