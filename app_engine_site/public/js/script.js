(function() {
  var app = {
    projects: [
      {
        title: 'Professional Bagel Website',
        url: 'https://village-bagel.appspot.com',
        image: 'public/images/bagel.png',
        description: 'A site built for a bagel business, complete with an online order system and email order confirmations.',
        tags: ['Frontend','Backend', 'NodeJS', 'Express', 'Google_App_Engine',  'API', 'Ecommerce']
      },
      {
        title: 'Personal Blog',
        url: 'https://python-hello-world-158703.appspot.com/',
        image: 'public/images/blog.png',
        description: 'A blog site utilizing jinja2 in Python to route through the site.',
        tags: ['Python', 'Backend', 'Jinja2', 'Google_App_Engine', 'NoSQL_Database']
      },
      {
        title: 'Recipe Book',
        url: 'https://recipe-book32.herokuapp.com/',
        image: 'public/images/recipebook.png',
        description: 'An interactive recipe book built using React.js.',
        tags: ['React', 'NodeJS', 'Express', 'Heroku', 'FCC', 'Webpack', 'Babel']
      },
      {
        title: 'Markdown Preview',
        url: 'http://dreamcatcherproject.net/josh/markdown-previewer/',
        image: 'public/images/markdown-previewer.png',
        description: 'A markdown syntax previewer built with React and Sass.',
        tags: ['React', 'NodeJS', 'Express', 'FCC']
      },
      {
        title: 'Play the Stock Market',
        url: 'http://dreamcatcherproject.net/josh/benzinga/code-challenge/',
        image:'public/images/stockApp.png',
        description: 'A simple app using APIs to play the stock market.',
        tags: ['MVC_framework', 'API', 'Bootstrap', 'jQuery_']
      },
      {
        title: "Earth's Surface Temperature",
        url: 'http://fcc-heat-map.herokuapp.com/',
        image: 'public/images/heat-map.png',
        description: "A data driven document showing the rise of Earth's surface temperature.",
        tags: ['D3js', 'Javascript', 'Heroku', 'NodeJS', 'FCC']
      },
      {
        title: 'Free Code Camp Leaderboard',
        url: 'http://dreamcatcherproject.net/josh/camper-leaderboard/',
        image:'public/images/leaderboard.png',
        description: 'A page that fetches data from Free Code Camp and displays the results built with React.',
        tags: ['React', 'FCC', 'API']
      },
      {
        title: 'Dream Catcher App',
        url: 'https://dreamcatcherproject.net/josh/DCPapp-PWA/',
        image: 'public/images/assembly.png',
        description: 'A creativity tool I designed and created utilizing the power of dreams.',
        tags: ['Progressive_Web_Application', 'Personal']
      },
      {
        title: 'Meteor Strikes on Earth',
        url: 'http://meteor-strikes44.herokuapp.com/',
        image: 'public/images/meteor-strikes.png',
        description: 'A map showing meteor strikes and associated information.',
        tags: ['FCC', 'D3js', 'Heroku', 'API']
      },
      {
        title: 'Javascript Calculator',
        url: 'http://dreamcatcherproject.net/josh/javascriptCalculator/',
        image:'public/images/javascriptCalculator.png',
        description: 'A calculator program written in Javascript',
        tags: ['FCC', 'Javascript', 'Frontend']
      },
      {
        title: 'Tic Tac Toe',
        url: 'http://dreamcatcherproject.net/josh/ticTacToe/',
        image:'public/images/tictactoe.png',
        description: 'A tic tac toe game, single or multi player',
        tags: ['FCC', 'Javascript', 'Frontend']
      },
      {
        title: 'Simon',
        url: 'http://dreamcatcherproject.net/josh/simonGame/',
        image:'public/images/simonGame.png',
        description: 'Simon clone',
        tags: ['FCC', 'Javascript', 'Frontend']
      },
      {
        title: 'Bar Chart',
        url: 'http://fcc-bar-chart269.herokuapp.com/',
        image:'public/images/bar-chart.png',
        description: 'A bar chart showing the US GDP made using d3.js.',
        tags: ['D3js', 'FCC', 'API', 'Heroku']
      },
      {
        title: 'Timestamp microservice',
        url: 'https://fcc-timestamp-service432.herokuapp.com/',
        image: 'public/images/timestamp.png',
        description: 'A backend microservice.',
        tags: ['Backend', 'FCC', 'Heroku']
      },
      {
        title: 'File Metadata',
        url: 'https://file-metadata32.herokuapp.com/',
        image: 'public/images/metadata.png',
        description: 'Submit a file to see its size.',
        tags: ['Backend', 'FCC', 'Heroku']
      },
      {
        title: 'Url Shortener',
        url: 'https://url-shortener34.herokuapp.com/',
        image: 'public/images/metadata.png',
        description: 'Submit a url and receive a shortened url to reroute you.',
        tags: ['Backend', 'FCC', 'Heroku', "mongoDB"]
      },
    ],
    init: function () {
      this.createskillsList()
      this.renderSkillList()
      this.cacheDom()
      this.bindEvents()
      this.render()
    },
    cacheDom: function() {
      this.$projects = $('.projects')
      this.$skill = $(`.skill`)
      this.$select = $('.select')
      this.$unselect = $('.unselect')
    },
    bindEvents: function () {
      this.$select.on('click', this.selectAll.bind(this))
      this.$unselect.on('click', this.unselectAll.bind(this))
    },
    createskillsList: function() {
      var skillList = []
      this.projects.forEach(function(project){
        project.tags.forEach(function(tag){
          if (skillList.indexOf(tag) < 0){
            skillList.push(tag)
          }
        })
      })
      this.skillList = skillList
    },
    getSelectedSkills: function() {
      var skillsToShowList = []
      this.$skill.each(function(index, element){
        if (element.classList.contains('pressed')) {
          skillsToShowList.push(element.value)
        }
      })
      this.skillsToShowList = skillsToShowList
    },
    toggleButtonStyle: function (event) {
      $target = $(event.target)
      //toggle display
      if ($target.hasClass('pressed')) {
        $target.removeClass('pressed')
        $target.addClass('not-pressed')
      } else {
        $target.addClass('pressed')
        $target.removeClass('not-pressed')
      }
    },
    createProjectsList: function() {
      var projectsToShow = []
      //create the list of projects to show
      this.projects.forEach(function(project){
        project.tags.forEach(function(tag, index, array){
          if (this.skillsToShowList.indexOf(tag) >= 0 && projectsToShow.indexOf(project) === -1) {
            projectsToShow.push(project)
          }
        }.bind(this))
      }.bind(this))
      this.projectsToShow = projectsToShow
    },
    selectAll: function() {
      this.$select.addClass('pressed')
      this.$unselect.removeClass('pressed')
      this.$skill.addClass('pressed')
      this.$skill.removeClass('not-pressed')
      this.render()
    },
    unselectAll: function() {
      this.$select.removeClass('pressed')
      this.$unselect.addClass('pressed')
      this.$skill.removeClass('pressed')
      this.$skill.addClass('not-pressed')
      this.render()
    },
    renderSkillList: function (){
      this.skillList.forEach(function(element, index) {
        var skill = element.replace(/_/g, ' ')
        var html = `<button type="button" id="${element}" name="${element}" value="${element}" class="skill pressed btn pmd-ripple-effect">${skill}</button>`
        //var row = Math.floor(index / 4)
        $(`#skillrow`).append(html)
        //add event listener for the button
        $(`#${element}`).on('click', this.toggleButtonStyle.bind(this))
        $(`#${element}`).on('click', this.render.bind(this))
      }.bind(this))
    },
    renderProjects: function () {
      this.$projects.empty()
      this.projectsToShow.forEach(function(project, index, array){
        var projecthtml =
                  `<div id="card" class="pmd-card pmd-card-default pmd-z-depth pmd-card-custom-form col-sm-6 col-md-4 " style="background-image: url(./${project.image});">
                    <a class="project-link " href="${project.url}">
                      <div class="overlay">
                        <div class="pmd-card info">
                          <h2 class="">${project.title} </h2>
                            <p id="projectskills" class="lead">Skills: <br> ${project.tags.map(function(element){
                                  var skill = element.replace(/_/g, ' ')
                                  return ` ${skill}`
                                })} </p>
                        </div>
                      </div>
                    </a>
                  </div>`
        //add the html
        this.$projects.append(projecthtml)
      }.bind(this))
    },
    render: function () {
      this.getSelectedSkills()
      this.createProjectsList()
      this.renderProjects()
    }
  }

  app.init()

})()
