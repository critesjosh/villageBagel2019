var React = require('react');
var Component = require('../components/Component');

var NavigationBar = require('../components/NavigationBar')

var Container = React.createClass({
  getInitialState() {
    return { showModal: false,
    projects: [
      {
        title: 'Recipe Book',
        url: 'https://recipe-book32.herokuapp.com/',
        image: '',
        description: 'An interactive recipe book built using React.js.',
        tags: ['React', 'Node', 'Express', 'Heroku', 'Free Code Camp', 'Webpack', 'Babel']
      },
      {
        title: 'Markdown Preview',
        url: 'http://dreamcatcherproject.net/josh/markdown-previewer/',
        image: '',
        description: 'A markdown syntax previewer built with React and Sass.',
        tags: ['React', 'Node', 'Express', 'Free Code Camp']
      },
      {
        title: 'Play the Stock Market',
        url: 'http://dreamcatcherproject.net/josh/benzinga/code-challenge/',
        image:'',
        description: 'A simple app using APIs to play the stock market.',
        tags: ['MVC framework', 'APIs', 'Bootstrap', 'jQuery']
      },
      {
        title: "Earth's Surface Temperature",
        url: 'http://fcc-heat-map.herokuapp.com/',
        image: '',
        description: "A data driven document showing the rise of Earth's surface temperature.",
        tags: ['Data driven document', 'Javascript', 'Heroku', 'Node.js', 'Free Code Camp']
      },
      {
        title: 'Free Code Camp Leaderboard',
        url: 'http://dreamcatcherproject.net/josh/camper-leaderboard/',
        image:'',
        description: 'A page that fetches data from Free Code Camp and displays the results built with React.',
        tags: ['React', 'Free Code Camp', 'API']
      },
      {
        title: 'Dream Catcher App',
        url: 'https://dreamcatcherproject.net/josh/DCPapp-PWA/',
        description: 'A creativity tool I designed and created utilizing the power of dreams.',
        tags: ['Progressive Web Application', 'Personal project']
      }
    ]
  }
  },
  close() {
    this.setState({ showModal: false });
  },
  open() {
    this.setState({ showModal: true });
  },
  toggleSkill() {
    this.State( {
      
    })
  }
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
        toggleSkill={this.toggleSkill()}
        />
      </div>
    )
  }
})

module.exports = Container
