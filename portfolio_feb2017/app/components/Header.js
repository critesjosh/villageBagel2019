var React = require('react');

var {
  Grid,
  Row,
  Col,
} = require('react-bootstrap');


function Header(props) {

  return (
    <Row className="title">
      <Col md={8} mdOffset={2}>
        <h1>Portfolio</h1>
        <hr />
      </Col>
    </Row>
  )
}

module.exports = Header;
