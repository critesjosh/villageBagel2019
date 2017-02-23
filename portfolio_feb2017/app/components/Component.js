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
var Filter = require('./Filter');


class Component extends React.Component {
  toggleSkill() {
    this.props.toggleSkill()
  }

  render () {


    var projects = this.props.projects
    var rows = []
      console.log(projects.length)
      if (projects.length % 2 === 1) {
        var length = projects.length
        var extraRow = (
          <Row>
            <Col md={5}>
              <Projectpanel
              key={projects[length - 1].title}
              title={projects[length - 1].title}
              description={projects[length - 1].description}
              />
            </Col>
          </Row>
        )
        projects.pop()
        getRows();
        rows.push(extraRow)
      } else {
        getRows();
      }

      function getRows () {
        for(let i = 0; i < projects.length; i += 2) {
          var project1 = projects[i]
          var project2 = projects[i + 1]
          var row = (
            <Row><Col md={5}>
              <Projectpanel
              key={project1.title}
              title={project1.title}
              description={project1.description}
              />
            </Col>
            <Col md={5} mdOffset={1}>
              <Projectpanel
              key={project2.title}
              title={project2.title}
              description={project2.description}
              />
            </Col>
          </Row>
          )
          rows.push(row)
        }
      }

    return (
      <div>
        <Grid>
          <Header />
          <Filter projects={this.props.projects}
          toggleSkill={this.toggleSkill()}/>
          {rows}
        </Grid>

      <Info
      show={this.props.show}
      close={this.props.close}
      />
    </div>
    )
  }


}



module.exports = Component;
