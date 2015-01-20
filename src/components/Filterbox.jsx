var React = require('react');
var Immutable = require('immutable');
var Immstruct = require('immstruct')
var _ = require('underscore');

var Filter = require('./Filter.jsx');
var FilteredList = require('./FilteredList.jsx');
var Selected = require('./Selected.jsx');



var Filterbox = React.createClass({

  getDefaultProps() {
    return {
      options: [],
      filterboxProps: {
        classes: []
      },
      inputProps: {
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
        <Filter classes={this.props.inputProps.classes} structure={this.props.structure}  placeholder={this.props.inputProps.placeholder} />
        <FilteredList classes={this.props.listProps.classes} structure={this.props.structure} filter={this.props.cursor.input} options={this.props.options} />
      </div>
    );
  }

});

module.exports = Filterbox;
