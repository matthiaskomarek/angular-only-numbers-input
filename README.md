# Angular Numbers Input [![Build Status](https://travis-ci.org/matthiaskomarek/angular-only-numbers-input.svg?branch=master)](https://travis-ci.org/matthiaskomarek/angular-only-numbers-input)

Allow only numbers between specified min and max values on an input field.

## Requirements

- AngularJS

## Usage


Download from Github. File is located at the dist folder.


Load the script files in your application:

```html
<script type="text/javascript" src="bower_components/angular/angular.js"></script>
<script type="text/javascript" src="path/to/file/onlyNumbersInput.js"></script>
```

Add the specific module to your dependencies:

```javascript
angular.module('myApp', ['mk.onlyNumbersInput', ...])
```

Use it on input fields and specify min and max values.

```
<input type="text" only-numbers max="100" min="0" ng-model="inputValue">
```

