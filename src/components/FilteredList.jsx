var React = require('react');
var Immutable = require('immutable');

var FilteredList = React.createClass({

  propTypes: {
    filter: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      filter: ""
    };
  },

  render: function() {
    let filter = this.props.filter.toLowerCase();

    let options = this.props.options.map(option => {
      let name = option.name.toLowerCase();
      let id = option.id.toLowerCase();

      if(name.indexOf(filter) > -1 || id.indexOf(filter) > -1) {
        return (
          <li key={option.id} val={option.name} className={this.props.classes.itemClasses} onClick={this.handleSelect}>
            {option.name}
          </li>
        );
      }
    });

    return (
      <div>
        <ul className={this.props.classes.groupClasses}>
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
