var React = require('react');
var Immutable = require('immutable');
var _ = require('underscore');

var Filter = React.createClass({

  getInitialState() {
    return {
      value: ''
    };
  },

  render() {
    let customProps = this.props.customProps;

    let classNames = '';
    _.each(this.props.classes, className => {
      classNames += className + ' ';
    });

    let extractedProps = { className: classNames };
    let otherProps = _.omit(customProps, 'classes');
    let localProps = { type: 'text', value: this.state.value };
    let eventHandlers = {
      onChange: this.handleInput,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur
    };

    let props = _.extend(extractedProps, otherProps, localProps, eventHandlers);

    return React.createElement('input', props);
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
  },

  handleFocus(evt) {
    $('div.FilteredList').show();
  }

});

module.exports = Filter;
