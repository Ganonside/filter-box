var React = require('react');

window.React = React;
console.log('react running');

var Page = React.render(
  React.createElement('h1', {'className': ''}, 'Hello World!'),
  document.getElementById('react-bootstrap')
);
