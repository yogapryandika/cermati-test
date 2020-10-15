$('.btn-notif').click(function () {
  $('.notification').fadeTo('slow', 0.01, function () {
    $(this).slideUp('slow', function () {
      $(this).remove();
    });
  });
});

document.querySelector('.close-slideup').addEventListener('click', function () {
  $('.slideup-panel').slideUp(500, function () {
    $(this).remove();
  });
  setTime();
});

var setTime = function () {
  var add_minutes = function (dt, minutes) {
    return new Date(dt.getTime() + minutes * 60000);
  };

  var addedMinutes = add_minutes(new Date(), 10);
  localStorage.setItem('myTimes', addedMinutes.toString());
};

window.onscroll = function () {
  var pageOnScroll = document.body.offsetHeight / 3;
  var timesAdded = localStorage.getItem('myTimes');

  if (timesAdded) {
    if (
      (document.body.scrollTop > pageOnScroll ||
        document.documentElement.scrollTop > pageOnScroll) &&
      Date.now() >= Date.parse(timesAdded)
    ) {
      localStorage.removeItem('myTimes');
      document.querySelector('.slideup-panel').style.bottom = '0px';
    }
  } else {
    if (
      document.body.scrollTop > pageOnScroll ||
      document.documentElement.scrollTop > pageOnScroll
    ) {
      document.querySelector('.slideup-panel').style.bottom = '0px';
    }
  }
};

init();

function init() {
  var highlightItems = {
    item: [
      {
        title: 'Consult',
        icon: 'fa-comments',
        desc:
          'Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress.',
      },
      {
        title: 'Design',
        icon: 'fa-paint-brush',
        desc:
          'Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable.',
      },
      {
        title: 'Develop',
        icon: 'fa-cubes',
        desc:
          'Revolutionary circular, movements a or impact framework social impact low-hanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking.',
      },
      {
        title: 'Marketing',
        icon: 'fa-bullhorn',
        desc:
          'Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective altruism youth. Mobilize commitment to overcome injustice resilient, uplift social transparent effective.',
      },
      {
        title: 'Manage',
        icon: 'fa-tasks',
        desc:
          'Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate social',
      },
      {
        title: 'Evolve',
        icon: 'fa-chart-line',
        desc:
          'Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable.',
      },
    ],
  };

  highlightItems.item.forEach(function (e) {
    var markup =
      '<div class="card-container"><i class="fas ' +
      e.icon +
      '"></i><h1>' +
      e.title +
      '</h1><p>' +
      e.desc +
      '</p></div>';
    document.querySelector('.grid').insertAdjacentHTML('beforeend', markup);
  });
}
