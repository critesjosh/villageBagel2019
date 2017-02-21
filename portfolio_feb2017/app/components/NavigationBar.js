var React = require('react');
//var ReactBootstrap = require('react-bootstrap');

var {
  Navbar,
  Nav,
  NavDropdown,
  MenuItem,
  NavItem
} = require('react-bootstrap');

function NavigationBar (props) {
  return (

    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a onClick={props.modalOpen}>Josh Crites</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>

        <Nav pullRight>
          <NavItem eventKey={1} href="mailto:critesjosh@gmail.com">Email</NavItem>
          <NavItem onClick={props.modalOpen}>About Me</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

module.exports = NavigationBar
