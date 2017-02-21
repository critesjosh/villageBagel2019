var React = require('react');
//var ReactBootstrap = require('react-bootstrap');

var {
  Jumbotron,
  Grid,
  Row,
  Col,
  Button,
} = require('react-bootstrap');

var Header = require('./Header');
var Info = require('./Modal');
var NavigationBar = require('./NavigationBar');
var Projectpanel = require('./Projectpanel');

class Component extends React.Component {
  render () {
    return (
      <div>
        <Grid>
          <Header />
          <Row>
            <Col xs={10} xsOffset={1} md={5}>
              <Projectpanel />
            </Col>
            <Col xsHidden md={5}>
              <Projectpanel />
            </Col>
          </Row>
        </Grid>

      <Info
      show={props.show}
      close={props.close}
      />
    </div>
    )
  }


}



module.exports = Component;
