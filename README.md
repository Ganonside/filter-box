#Filterbox

A customizable combobox that filters results.

Uses [ImmutableJS](https://github.com/facebook/immutable-js) and
[Immstruct](https://github.com/omniscientjs/immstruct)

##Installation

`some installation method here`

##Usage
```js
var Immutable = require('immutable');
var Immstruct = require('immstruct');
var Filterbox = require('filterbox');

var filterboxStruct = Immstruct('filterbox'); // Creates a new structure
filterboxStruct.cursor(['filterbox']).update(function() {
  /**
   * Initializes the data within the structure
   */
  return {
    input: '',
    selected: []
  };
});

var Example = React.createElement(Filterbox, {
  structure: filterboxStruct,

  cursor: filterboxStruct.cursor(['filterbox']).toJS(),

  options: [],

  filterboxProps: {
    classes: []
  },

  inputProps: {
    classes: [],
    placeholder: ''
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
});
```

###structure
An immutable structure used to facilitate communication between components and
allow access to data from outside the filterbox component.

__Note:__ If not passed in it will be created locally.

###cursor
The actual JS data represented by `structure`.

__Note:__ If not passed in it will be created locally.

###options
An array of options for the filterbox to search and select from.

__Note:__ Each item in the array must be an object with an `id` and `name` field.

###filterboxProps
Used to pass in props to the internal `Filterbox` component.

* `classes` takes an array of strings

###inputProps
Used to pass in props to the internal `Filter` component.

* `classes` takes an array of strings
* `placeholder` takes a string

###listProps
Used to pass in props to the internal `FilteredList` component.

* `classes` takes an object with the following fields
  * `listClasses` takes an array of strings
  * `itemClasses` takes an array of strings

###selectedProps
Used to pass in props to the internal `Selected` component.

* `classes` takes an object with the following fields
  * `labelClasses` takes an array of strings
  * `iconClasses` takes an array of strings
