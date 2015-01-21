var React = require('react');
var Immutable = require('immutable');
var _ = require('underscore');

var Selected = React.createClass({

  render() {
    let labelClasses = '';
    _.each(this.props.classes.labelClasses, className => {
      labelClasses += className+' ';
    });

    let iconClasses = '';
    _.each(this.props.classes.iconClasses, className => {
      iconClasses += className+' ';
    });

    let selected = _.map(this.props.selectedValues, value => {
      return (
        <div key={value} className={labelClasses}>
          <span className={iconClasses} onClick={this.handleRemove}>{value}</span>
        </div>
      );
    });

    return (
      <div>
        {selected}
      </div>
    );
  },

  handleRemove(evt) {
    let removed = evt.target.innerHTML;
    let cursor = this.props.structure.cursor(['filterbox', 'selected']).toJS();

    this.props.structure.cursor(['filterbox', 'selected']).update(() => {
      return Immutable.fromJS(_.without(cursor, removed));
    });
  }

});

module.exports = Selected;
