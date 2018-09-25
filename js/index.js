// your code here
// Create a form with a username field that calls a getRepositories function that loads the repositories div with a list of public repositories for that user.
// The displayed repositories should include the name and a link to the URL (HTML URL, not API URL).

function getRepositories() {
  let user = document.getElementById('username').value;
  console.log(user)
  let req = new XMLHttpRequest();
  req.addEventListener('load', showRepos);
  re.open('GET', 'https://api.github.com/users/' + user + '/repos');
  req.send();
}

function showRepos(){
  let repos = JSON.parse(this.responseText);
  console.log(repos);
  let repoList = `<ul>${repos
    .map(r => "<li>" + r.name +"<li>").join("")
  }</ul>`
  document.getElementById('repositories').innerHTML = repoList;

}


// function showRepositories() {
//   var repos = JSON.parse(this.responseText);
//   console.log(repos);
//   const repoList = `<ul>${repos
//     .map(r => '<li>' + r.name + '</li>')
//     .join('')}</ul>`;
//   document.getElementById('repositories').innerHTML = repoList;
// }
