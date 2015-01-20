var React = require('react');
var Immutable = require('immutable');

var Filter = React.createClass({

  getInitialState() {
    return {
      value: ''
    };
  },

  render() {
    return (
      <input type="text"
          className={this.props.classes}
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this.handleInput} />
    );
  },

  handleInput(evt) {
    let input = evt.target.value;
    let cursor = this.props.structure.cursor(['filterbox', 'input']);

    cursor.update(() => {
      return Immutable.fromJS(input);
    });

    this.setState({
      value: input
    });
  }

});

module.exports = Filter;
