var React = require('react');
var Component = require('../components/Component');

var NavigationBar = require('../components/NavigationBar')

var Container = React.createClass({
  getInitialState() {
    return { showModal: false,
    projects: {
      "Recipe Book": {
        title: 'Recipe Book',
        image: '',
        description: 'An interactive recipe book built using React.js.',
        tags: ['React', 'Node', 'Express', 'Heroku', 'Free Code Camp', 'Webpack', 'Babel']
      },
      "Markdown Previewer": {
        title: 'Markdown Preview'
        image: '',
        description: 'A markdown syntax previewer built with React and Sass.',
        tags: ['React', 'Node', 'Express', 'Free Code Camp']
      },
      "Stock Market": {
        title: 'Play the Stock Market',
        image:'',
        description: 'A simple app using APIs to play the stock market.',
        tags: ['MVC framework', 'APIs', 'Bootstrap', 'jQuery']
      }
    } };
  },
  close() {
    this.setState({ showModal: false });
  },
  open() {
    this.setState({ showModal: true });
  },
  render: function () {
    return (
      <div>
        <NavigationBar
          modalOpen={this.open}/>
        <Component
        show={this.state.showModal}
        open={this.open}
        close={this.close}
        projects={this.state.projects}
        />
      </div>
    )
  }
})

module.exports = Container
