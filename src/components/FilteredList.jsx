var React = require('react');
var Immutable = require('immutable');
var _ = require('underscore');

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

    let itemClasses = '';
    _.each(this.props.classes.itemClasses, className => {
      itemClasses += className+' ';
    });

    let filter = this.props.filter.toLowerCase();

    let options = _.map(this.props.options, option => {
      let name = option.name.toLowerCase();
      let id = option.id.toLowerCase();

      if(name.indexOf(filter) > -1 || id.indexOf(filter) > -1) {
        return (
          <li key={option.id} val={option.name} className={itemClasses} onClick={this.handleSelect}>
            {option.name}
          </li>
        );
      }
    });

    return (
      <div>
        <ul className={listClasses}>
          {options}
        </ul>
      </div>
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
  }

});

module.exports = FilteredList;
