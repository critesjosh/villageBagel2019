var React = require('react');

var {
  Row,
  Col,
  FormControl,
  FormGroup,
  Checkbox,
} = require('react-bootstrap');


class Filter extends React.Component {

  render () {
    function toggleSkill () {
      this.props.toggleSkill()
    }

    var tags = []
    this.props.projects.forEach(function(element){
      element.tags.forEach(function(e){
        if (tags.indexOf(e) === -1){
          tags.push(e)
        }
      })
    })

    var formattedTags = []
    tags.forEach(function(element){
      var checkbox = (
        <Checkbox key={element} onChange={() => this.oggleSkill(element)} inline>
          {element}
        </Checkbox>
      )
      formattedTags.push(checkbox)
    })

    return (
      <Row className="filter">
        <Col md={10} mdOffset={1}>
          <p>Filter projects by skills:</p>
          <FormGroup >
            {formattedTags}
            {' '}
          </FormGroup>
        </Col>
      </Row>
    )
  }
}

module.exports = Filter;
