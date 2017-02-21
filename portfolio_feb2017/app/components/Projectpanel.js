var React = require('react');

var {
  Col,
  Button,
  Image,
  Panel
} = require('react-bootstrap');

function Projectpanel (props) {

  const title = (
    <h3>Title</h3>
  )

  return (
    <div>
      <Panel header={title}>
        <Image src="../assets/profile-pic.png" />
        Panel content
      </Panel>
    </div>
  )
}



module.exports = Projectpanel;
