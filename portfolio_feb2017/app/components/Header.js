var React = require('react');
//var ReactBootstrap = require('react-bootstrap');

var {
  Jumbotron,
  Grid,
  Row,
  Col,
} = require('react-bootstrap');


function Component(props) {

  return (
    <Row className="title">
      <Col xs={12} md={8} mdOffset={2}>
        <h1>Portfolio</h1>
      </Col>
    </Row>
  )
}

module.exports = Component;
