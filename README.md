# angular-bootstrap-datetimepicker-directive

A wrapper directive around the [bootstrap-datetimepicker component](http://eonasdan.github.io/bootstrap-datetimepicker/).

## How to Use

1- Install the directive via bower (or download it manually, as you prefer)

	bower install angular-bootstrap-datetimepicker-directive --save

2- Load all required scripts by `eonasdan-bootstrap-datetimepicker`.
Refer to the [official guide](http://eonasdan.github.io/bootstrap-datetimepicker/Installing/).

3- Include the `angular-bootstrap-datetimepicker-directive.js` into your HTML.
A minified variant is provided for production named `angular-bootstrap-datetimepicker-directive.min.js`.

4- Inject the `datetimepicker` directive in you angular app:

	angular
	  .module('myApp', [
	    // Other injected modules.

	    'datetimepicker'
	  ]);

5- You can start using the directive in your HTML in several ways like:

a) Passing in a JSON object with the options

	<input type="text" class="form-control input-sm"

	       datetimepicker
	       datetimepicker-options="{icons:{next:'glyphicon glyphicon-arrow-right',previous:'glyphicon glyphicon-arrow-left',up:'glyphicon glyphicon-arrow-up',down:'glyphicon glyphicon-arrow-down'}}"

	       placeholder="..."
	       name="time"
	       ng-model="ctrl.time">

b) Passing in an angular scoped variable that holds the options

	<input type="text" class="form-control input-sm"

	       datetimepicker
	       datetimepicker-options="{{ ctrl.datetimepicker_options }}"

	       placeholder="..."
	       name="time"
	       ng-model="ctrl.time">

c) Set the default options with the provider and use the datepicker with those
default options.

	<input type="text" class="form-control input-sm"

	       datetimepicker

	       placeholder="..."
	       name="time"
	       ng-model="ctrl.time">

	<script type="text/javascript">
		'use strict';

		angular
				.module('app', [
					'datetimepicker'
				])
				.config([
					'datetimepickerProvider',
					function (datetimepickerProvider) {
						datetimepickerProvider.setOptions({
							locale: 'en'
						});
					}
				]);
	</script>

All options are named identically with the same letter case.

## Supported `eonasdan-bootstrap-datetimepicker` options

All of them :) If you find anyone that is causing havoc file an issue. Please,
first test that is the directive and not the original jQuery plugin which is
causing it.

## Setting default values for all datetimepickers

Use the `datetimepickerProvider` to set them

	<script type="text/javascript">
		'use strict';

		angular
				.module('app', [
					'datetimepicker'
				])
				.config([
					'datetimepickerProvider',
					function (datetimepickerProvider) {
						datetimepickerProvider.setOptions({
							locale: 'en'
						});
					}
				]);
	</script>

Those default options will be overwritten by the provided in the inline definition.

## Why passing an unified JSON and not option by option?

Just one word: **simplicity**.

The option by option variant have a lot of related issues, one of them is that
the directive has to know every single option of the original plugin, how to parse
it, how to include it into the directive with the isolated scope and so on.
Besides, this limit future options since have to be added too.

There are a lot more but that isn't the goal of this README after all, so I won't
do a full enumeration of them.

## License

The MIT License (MIT)

Copyright (c) 2015 Diosney Sarmiento

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.