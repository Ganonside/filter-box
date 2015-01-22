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
        <div key={'label-'+value} className={labelClasses} onClick={this.handleRemove}>
          <span className={iconClasses}></span> {value}
        </div>
      );
    });

    return (
      <div className="Selected">
        {selected}
      </div>
    );
  },

  handleRemove(evt, marker) {
    let regex = /[\.0-9]*\$label-(\w+)/;
    let removed = regex.exec(marker)[1];

    let cursor = this.props.structure.cursor(['filterbox', 'selected']).toJS();

    this.props.structure.cursor(['filterbox', 'selected']).update(() => {
      return Immutable.fromJS(_.without(cursor, removed));
    });
  }

});

module.exports = Selected;
