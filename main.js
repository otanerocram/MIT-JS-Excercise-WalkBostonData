function renderPosts(boston, container) {
  const people = boston.data;
  const len = boston.data.length;
  let html = '';
  for (let i = 0; i < len; i++) {
    html +=
      '<li class="post">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
  }
  container.innerHTML = "<ul id='data'>"+html+"</ul>";
}
renderPosts(boston, document.getElementById('container'));

function renderTopSalaries(boston, container) {
  const people = boston.data;
  var newArr = people.sort(function(a,b){return b[11]-a[11]}).slice(0,5);
  
  len = newArr.length;

  let html = '';
  for (let i = 0; i < len; i++) {
    html +=
      '<li class="post">' + '<h2>' + newArr[i][8] + '</h2>' + '<h3>' + newArr[i][11] + '</h3>';
  }
  container.innerHTML = "<ul id='topSalaries'>"+html+"</ul>";
}
renderTopSalaries(boston, document.getElementById('container'));

function renderTopEmployees(boston, container) {
  const people = boston.data;

  var newArr = people.filter(
    function(b){
      return b[11] >= 200000;
      }
  );
  
  len = newArr.length;

  let html = '';
  for (let i = 0; i < len; i++) {
    html +=
      '<li class="post">' + '<h2>' + newArr[i][8] + '</h2>' + '<h3>' + newArr[i][11] + '</h3>';
  }
  container.innerHTML = "<ul id='topEmployees'>"+html+"</ul>";
}
renderTopEmployees(boston, document.getElementById('container'));
