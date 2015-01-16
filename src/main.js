var React = require('react');
var Immutable = require('immutable');
var Immstruct = require('immstruct');

var Filterbox = require('./components/Filterbox.jsx');
var Options = require('./states.js');

window.React = React;
console.log('react running');

var inputStruct = Immstruct('filterbox');

inputStruct.cursor(['filterbox']).update(() => {
  return Immutable.fromJS({
    input: '',
    selected: []
  });
});

inputStruct.on('swap', () => {
  Page.setProps({
    cursor: inputStruct.cursor(['filterbox']).toJS()
  });
});

var Page = React.render(
  React.createElement(Filterbox, {
    className: 'Filterbox',
    structure: inputStruct,
    cursor: inputStruct.cursor(['filterbox']).toJS(),
    options: Options,
    inputClasses: ['form-control'],
    listClasses: {
      groupClasses: ['list-group'],
      itemClasses: ['list-group-item']
    }
  }), document.getElementById('filterbox')
);
