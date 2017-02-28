var projects = [
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
    tags: ['MVC_framework', 'API', 'Bootstrap', 'jQuery']
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
    description: 'A creativity tool I designed and created utilizing the power of dreams.',
    tags: ['PWA', 'Personal']
  }
]


$('body').scrollspy({ target: '.navbar-fixed-top' })

function insert_skills() {
  projects.forEach(function(project){
    project.tags.forEach(function(tag){
      if (tag !== $(`#${tag}`).val()){
        $(".skills").append(`
            <label class="skillLabel checkbox" for="${tag}"><input checked="checked" class="skill" type="checkbox" name="${tag}" value="${tag}" id="${tag}" onclick="insert_projects(${tag})">${tag}</label>
        `)
      }
    })
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
  if ($(`#${tag}`).attr('checked')){
    $(`#${tag}`).removeAttr('checked')
  } else {
    $(`#${tag}`).attr('checked', true)
  }

  //create the list of skills to display
  $('.skill').each(function(index, element){
    if (element.hasAttribute('checked')) {
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

  displayProjects(projectsToShow)
}

function displayProjects(projectsToShow) {
  $('.projects').empty()
  projectsToShow.forEach(function(project){
    $('.projects').append(`
      <div class="col-md-4">
        <a class="project-link" href="${project.url}">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h2 class="panel-title">${project.title}</h2>
          </div>
          <div class="panel-body">
            <img src="${project.image}" alt="blog screenshot">
            ${project.description}
            <hr />
            <div class=projectSkills>
              <span>Skills:</span>
              ${project.tags.map(function(element){
                return ` ${element}`
              })}
            </div>
          </div>
        </div>
        </a>
      </div>
    `)
  })
}

$(document).ready(function(){
  $('body').scrollspy({ target: '.navbar-fixed-top' })
  insert_skills()
  insert_projects()
})

function checkall() {
  $(`.skill`).attr('checked', true)
}

function uncheckall() {
  $(`.skill`).removeAttr('checked')
  insert_projects()
}
