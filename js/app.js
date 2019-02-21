const URL = 'index.html';
const headers = new Headers();

fetch(URL, {
  method: 'GET',
  mode: 'cors',
  headers: headers,
  cache: 'default'
}).then(res => {
  return res;
}).then(data => {
  headers.append("Access-Control-Allow-Origin", URL);
  headers.append("Content-Type", 'application/json');

  $('#container').append(
    '<div>'+
    '<div class="img-container" align="center">'+
    '<img src="assets/img/logo-lg.png" alt="AndlerRL Devs Logo">'+
    '</div>'+
    '<h1>[RENDERING] This site is under development</h1>'+
    '<p>At this moment, a Web Portfolio will be created as a DEMO of all repositories that I have been doing all this journey.</p>'+
    '<p>For more information about what will be integrated, please, visit my '+
    '<a href="https://github.com/AndlerRL" target="_blank">Github Profile</a>' +
    '.</p>'+
    '</div>'
  );

  console.debug(data);
}).catch(err => {
  console.error(err);
})