var React = require('react');
//var ReactBootstrap = require('react-bootstrap');

var {
  Button,
  Modal,
  Image,
  Grid,
  Row,
  Col,
} = require('react-bootstrap');

function Info(props) {
  return (
        <Modal show={props.show}>
          <Modal.Header>
            <Modal.Title>About Me</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Grid>
              <Row>
                <Col xs={6} xsOffset={3} md={3}>
                  <Image src="../assets/profile-pic.png"/>
                </Col>
              </Row>
            </Grid>
            Personal info here
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={props.close}>Close</Button>
          </Modal.Footer>

        </Modal>

  )
}

module.exports = Info
