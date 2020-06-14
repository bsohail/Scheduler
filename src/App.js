import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link
} from "react-router-dom";
import Scheduler from './components/scheduleMaker/Scheduler';
import About from './components/about/About';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
export default function App() {
  return (
    <Router>
      <div>
	<AppBar position="static">
        <Toolbar>
	<Grid
      justify="space-between"
      container 
      spacing={24}
    >
	<Grid item>
          <Typography variant="h6" noWrap>
            Generic Uni logo
          </Typography>
	</Grid>
	<Grid item>
		<Button variant="outlined" color="default" href="/">Schedule maker</Button>
		<Button variant="outlined" color="default" href="/about">About</Button>
	</Grid>
	</Grid>
        </Toolbar> 
      </AppBar>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Scheduler />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}