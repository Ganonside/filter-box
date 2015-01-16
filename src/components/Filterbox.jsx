var React = require('react');

var Filter = require('./Filter.jsx');
var FilteredList = require('./FilteredList.jsx');
var Selected = require('./Selected.jsx');

var Filterbox = React.createClass({

  render() {
    console.log(this.props.cursor);

    return (
      <div className="pull-left">
        <h1>Filter Box!</h1>
        <Filter classes={this.props.inputClasses} structure={this.props.structure} />
        <FilteredList classes={this.props.listClasses} structure={this.props.structure} filter={this.props.cursor.input} options={this.props.options} />
        <Selected selected={this.props.cursor.selected} />
      </div>
    );
  }

});

module.exports = Filterbox;
