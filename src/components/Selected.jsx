var React = require('react');

var Selected = React.createClass({

  render: function() {
    let selected = this.props.selected.map(item => {
      return (
        <p>{item}</p>
      );
    });
    return (
      <div className="pull-right">
        {selected}
      </div>
    );
  }

});

module.exports = Selected;
