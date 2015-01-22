var React = require('react');
var Immutable = require('immutable');
var _ = require('underscore');

require('../styles/FilterboxStyles.less');

var FilteredList = React.createClass({

  propTypes: {
    filter: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      filter: ''
    };
  },

  render() {
    let listClasses = '';
    _.each(this.props.classes.listClasses, className => {
      listClasses += className+' ';
    });

    let listProps = this.props.customProps.customListProps;

    let itemClasses = '';
    _.each(this.props.classes.itemClasses, className => {
      itemClasses += className+' ';
    });

    let itemProps = this.props.customProps.customItemProps;

    let filter = this.props.filter.toLowerCase();

    let options = _.map(this.props.options, option => {
      let name = option.name.toLowerCase();
      let id = option.id.toLowerCase();

      if(name.indexOf(filter) > -1 || id.indexOf(filter) > -1) {
        return React.createElement('li', _.extend({
          className: itemClasses,
          key: option.id,
          val: option.name,
          onClick: this.handleSelect
        }, itemProps), option.name);
      }
    });

    return React.createElement('div', {
        className: 'FilteredList',
        onFocus: this.handleFocus
      }, React.createElement('ul', _.extend({
        className: listClasses
      }, listProps), options)
    );
  },

  handleSelect(evt) {
    let cursor = this.props.structure.cursor(['filterbox', 'selected']);

    let value = evt.target.innerHTML;
    let selected = cursor.toJS();

    cursor.update(() => {
      let selected = cursor.toJS();

      if(cursor.toJS().indexOf(value) === -1) {
        selected = selected.concat(value);
      }

      return Immutable.fromJS(selected);
    });

    $('div.FilteredList').hide();
  }

});

module.exports = FilteredList;
