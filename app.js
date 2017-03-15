var projects = [
  {
    title: 'Professional Bagel Website',
    url: 'https://village-bagel.appspot.com',
    image: 'images/bagel.png',
    description: 'A site built for a bagel business, complete with an online order system and email order confirmations.',
    tags: ['Frontend','Backend', 'NodeJS', 'Express', 'Google_App_Engine',  'API', 'Ecommerce']
  },
  {
    title: 'Personal Blog',
    url: 'https://python-hello-world-158703.appspot.com/',
    image: 'images/blog.png',
    description: 'A blog site utilizing jinja2 in Python to route through the site.',
    tags: ['Python', 'Backend', 'Jinja2', 'Google_App_Engine', 'NoSQL_Database']
  },
  {
    title: 'Recipe Book',
    url: 'https://recipe-book32.herokuapp.com/',
    image: 'images/recipebook.png',
    description: 'An interactive recipe book built using React.js.',
    tags: ['React', 'NodeJS', 'Express', 'Heroku', 'FCC', 'Webpack', 'Babel']
  },
  {
    title: 'Markdown Preview',
    url: 'http://dreamcatcherproject.net/josh/markdown-previewer/',
    image: 'images/markdown-previewer.png',
    description: 'A markdown syntax previewer built with React and Sass.',
    tags: ['React', 'NodeJS', 'Express', 'FCC']
  },
  {
    title: 'Play the Stock Market',
    url: 'http://dreamcatcherproject.net/josh/benzinga/code-challenge/',
    image:'images/stockApp.png',
    description: 'A simple app using APIs to play the stock market.',
    tags: ['MVC_framework', 'API', 'Bootstrap', 'jQuery_']
  },
  {
    title: "Earth's Surface Temperature",
    url: 'http://fcc-heat-map.herokuapp.com/',
    image: 'images/heat-map.png',
    description: "A data driven document showing the rise of Earth's surface temperature.",
    tags: ['D3js', 'Javascript', 'Heroku', 'NodeJS', 'FCC']
  },
  {
    title: 'Free Code Camp Leaderboard',
    url: 'http://dreamcatcherproject.net/josh/camper-leaderboard/',
    image:'images/leaderboard.png',
    description: 'A page that fetches data from Free Code Camp and displays the results built with React.',
    tags: ['React', 'FCC', 'API']
  },
  {
    title: 'Dream Catcher App',
    url: 'https://dreamcatcherproject.net/josh/DCPapp-PWA/',
    image: 'images/assembly.png',
    description: 'A creativity tool I designed and created utilizing the power of dreams.',
    tags: ['Progressive_Web_Application', 'Personal']
  },
  {
    title: 'Meteor Strikes on Earth',
    url: 'http://meteor-strikes44.herokuapp.com/',
    image: 'images/meteor-strikes.png',
    description: 'A map showing meteor strikes and associated information.',
    tags: ['FCC', 'D3js', 'Heroku', 'API']
  },
  {
    title: 'Javascript Calculator',
    url: 'http://dreamcatcherproject.net/josh/javascriptCalculator/',
    image:'images/javascriptCalculator.png',
    description: 'A calculator program written in Javascript',
    tags: ['FCC', 'Javascript', 'Frontend']
  },
  {
    title: 'Tic Tac Toe',
    url: 'http://dreamcatcherproject.net/josh/ticTacToe/',
    image:'images/tictactoe.png',
    description: 'A tic tac toe game, single or multi player',
    tags: ['FCC', 'Javascript', 'Frontend']
  },
  {
    title: 'Simon',
    url: 'http://dreamcatcherproject.net/josh/simonGame/',
    image:'images/simonGame.png',
    description: 'Simon clone',
    tags: ['FCC', 'Javascript', 'Frontend']
  },
  {
    title: 'Bar Chart',
    url: 'http://fcc-bar-chart269.herokuapp.com/',
    image:'images/bar-chart.png',
    description: 'A bar chart showing the US GDP made using d3.js.',
    tags: ['D3js', 'FCC', 'API', 'Heroku']
  },
  {
    title: 'Timestamp microservice',
    url: 'https://fcc-timestamp-service432.herokuapp.com/',
    image: 'images/timestamp.png',
    description: 'A backend microservice.',
    tags: ['Backend', 'FCC', 'Heroku']
  },
  {
    title: 'File Metadata',
    url: 'https://file-metadata32.herokuapp.com/',
    image: 'images/metadata.png',
    description: 'Submit a file to see its size.',
    tags: ['Backend', 'FCC', 'Heroku']
  },
  {
    title: 'Url Shortener',
    url: 'https://url-shortener34.herokuapp.com/',
    image: 'images/metadata.png',
    description: 'Submit a url and receive a shortened url to reroute you.',
    tags: ['Backend', 'FCC', 'Heroku', "mongoDB"]
  },

]


$('body').scrollspy({ target: '.navbar-fixed-top' })

function insert_skills() {
    var tag_array = [];
    projects.forEach(function(project){
      project.tags.forEach(function(tag){
        if (tag_array.indexOf(tag) < 0){
          tag_array.push(tag)
        }
      })
    })


    $('.skills').append(`<p id=skillrow></p>`)

    tag_array.forEach(function(element, index) {
      var skill = element.replace(/_/g, ' ')
      var html = `
                  <button type="button" id="${element}" name="${element}" value="${element}" onclick="insert_projects(${element})" class="skill pressed btn pmd-ripple-effect">${skill}</button>
                  `
      var row = Math.floor(index / 4)
      $(`#skillrow`).append(html)
    })
}

function insert_projects(tag) {
  var skillList = []
  var projectsToShow = []
  //if called from the checkbox input set tag = the parameter
  if (tag) {
    tag = tag.value
  }
  //toggle checkbox
  if ($(`#${tag}`).hasClass('pressed')){
    $(`#${tag}`).removeClass('pressed')
    $(`#${tag}`).addClass('not-pressed')
  } else {
    $(`#${tag}`).removeClass('not-pressed')
    $(`#${tag}`).addClass('pressed')
  }

  //create the list of skills to display
  $('.skill').each(function(index, element){
    console.log(element)
    if (element.classList.contains('pressed')) {
      skillList.push(element.value)
    }
  })

  //create the list of projects to show
  projects.forEach(function(project){
    project.tags.forEach(function(tag, index, array){
      if (skillList.indexOf(tag) >= 0 && projectsToShow.indexOf(project) === -1) {
        projectsToShow.push(project)
      }
    })
  })

  //call the display function with the appropriate projects to show
  displayProjects(projectsToShow)
}

function displayProjects(projectsToShow) {
  //clear display before adding new projects
  $('.projects').empty()
  //for each project, create the html for the card
  projectsToShow.forEach(function(project, index, array){
    var projecthtml =
              `<div id="card" class="pmd-card pmd-card-default pmd-z-depth pmd-card-custom-form col-xs-6 col-sm-4 col-md-3 " style="background-image: url(./${project.image});">
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
    $(`.projects`).append(projecthtml)
  })
}

$(document).ready(function(){
  $('body').scrollspy({ target: '.navbar-fixed-top' })
  insert_skills()
  insert_projects()
})

function checkall() {
  $(`.uncheck`).removeClass('pressed')
  $(`.skill`).addClass('pressed')
  $(`.skill`).removeClass('not-pressed')
  $(`.check`).addClass('pressed')
  insert_projects()
}

function uncheckall() {
  $(`.check`).removeClass('pressed')
  $(`.uncheck`).addClass('pressed')
  $(`.skill`).removeClass('pressed')
  $(`.skill`).addClass('not-pressed')
  insert_projects()
}
