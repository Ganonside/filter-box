var React = require('react');
var Immutable = require('immutable');
var Immstruct = require('immstruct')
var _ = require('underscore');
var $ = require('jquery');

var Filter = require('./Filter.jsx');
var FilteredList = require('./FilteredList.jsx');
var Selected = require('./Selected.jsx');

require('../styles/FilterboxStyles.less');

var Filterbox = React.createClass({

  getDefaultProps() {
    return {
      options: [],
      filterboxProps: {
        classes: []
      },
      inputProps: {
        type: 'text',
        classes: [],
        placeholder: 'Filter'
      },
      listProps: {
        classes: {
          listClasses: [],
          itemClasses: []
        }
      },
      selectedProps: {
        classes: {
          labelClasses: [],
          iconClasses: []
        }
      }
    }
  },

  render() {
    let classes = '';
    _.each(this.props.filterboxProps.classes, className => {
      classes += className+' ';
    });

    return (
      <div className={classes}>
        <Selected classes={this.props.selectedProps.classes} structure={this.props.structure} selectedValues={this.props.cursor.selected} />
        <Filter classes={this.props.inputProps.classes} structure={this.props.structure} customProps={this.props.inputProps.props} />
        <FilteredList classes={this.props.listProps.classes} structure={this.props.structure} customProps={this.props.listProps.props}
          filter={this.props.cursor.input}
          options={this.props.options} />
      </div>
    );
  },

  componentDidMount() {
    $('div.FilteredList').hide();
  }

});

module.exports = Filterbox;
