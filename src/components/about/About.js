import React from "react";
import Container from '@material-ui/core/Container';
class About extends React.Component {
  render() {
    return (
	<Container maxWidth="md">
      <h2>
        About page
      </h2>
      <br/>
      <h4>React: MIT license</h4>
      <h4>Material UI: MIT license</h4>
      <h4>React-weekly-calender: MIT license </h4>
	</Container>
    );
  }
}

export default About;
