var React = require('react');
var Immutable = require('immutable');
var Immstruct = require('immstruct');

var Filterbox = require('./components/Filterbox.jsx');
var Options = require('./states.js');

window.React = React;

var filterboxStruct = Immstruct.withHistory('filterbox');

filterboxStruct.cursor(['filterbox']).update(() => {
  return Immutable.fromJS({
    input: '',
    selected: []
  });
});

filterboxStruct.on('swap', () => {
  Page.setProps({
    cursor: filterboxStruct.cursor(['filterbox']).toJS()
  });
});

var Page = React.render(
  React.createElement(Filterbox, {
    className: 'Filterbox',
    structure: filterboxStruct,
    cursor: filterboxStruct.cursor(['filterbox']).toJS(),
    options: Options,
    filterboxProps: {
      classes: ['pull-left']
    },
    inputProps: {
      classes: ['form-control'],
      props: {
        id: 'filterboxInput',
        placeholder: 'filter'
      }
    },
    listProps: {
      classes: {
        listClasses: ['list-group'],
        itemClasses: ['list-group-item']
      },
      props: {
        customListProps: {},
        customItemProps: {}
      }
    },
    selectedProps: {
      classes: {
        labelClasses: ['label', 'label-default'],
        iconClasses: ['glyphicon', 'glyphicon-remove']
      }
    }
  }), document.getElementById('filterbox')
);
