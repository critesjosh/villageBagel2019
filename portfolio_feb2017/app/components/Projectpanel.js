var React = require('react');

var {
  Row,
  Col,
  Button,
  Image,
  Panel
} = require('react-bootstrap');

function Projectpanel (props) {

  const title = (
    <h3>{props.title}</h3>
  )

  return (
    <div>
      <Panel header={title}>
        <Row className="center">
          <Image src="../assets/profile-pic.png" responsive/>
        </Row>
        <Row style={{padding: 10}}>
          {props.description}
        </Row>
      </Panel>
    </div>
  )
}



module.exports = Projectpanel;
